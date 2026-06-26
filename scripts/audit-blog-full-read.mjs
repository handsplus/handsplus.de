/**
 * Vollständiges Lese-Audit aller Blog-Beiträge (über Prosa-Muster hinaus).
 * Usage: node scripts/audit-blog-full-read.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "content/blog.ts"), "utf8");

const GENERIC_FAQ_ANSWER =
  "Grundsätzlich alle Arbeitgeber mit entspechenden Tätigkeiten oder Gefährdungen";
const GENERIC_MANGEL_ANSWER =
  "Fehlende oder veraltete Dokumentation, Maßnahmen ohne Verantwortliche";

const blocks = src.split(/\r?\n  \{\r?\n    slug:/).slice(1);
const results = [];

for (let i = 0; i < blocks.length; i++) {
  const block = blocks[i];
  const slug = block.match(/"([^"]+)"/)?.[1];
  const title = block.match(/title:\s*\n\s*"([^"]+)"/)?.[1] ?? "";
  const excerpt = block.match(/excerpt:\s*\n\s*"([^"]+)"/)?.[1] ?? "";

  const contentMatch = block.match(/content:\s*\[([\s\S]*?)\n    \],/);
  const paras = [];
  if (contentMatch) {
    const re = /^\s+"((?:\\.|[^"\\])*)"/gm;
    let m;
    while ((m = re.exec(contentMatch[1])) !== null) {
      paras.push(m[1].replace(/\\"/g, '"'));
    }
  }

  const faqMatch = block.match(/faq:\s*\[([\s\S]*?)\n    \],/);
  const faqs = [];
  if (faqMatch) {
    const qRe = /question:\s*"([^"]+)"[\s\S]*?answer:\s*\n\s*"([^"]*(?:\\.[^"]*)*)"/g;
    let fm;
    while ((fm = qRe.exec(faqMatch[1])) !== null) {
      faqs.push({
        question: fm[1].replace(/\\"/g, '"'),
        answer: fm[2].replace(/\\"/g, '"').replace(/\\n/g, " "),
      });
    }
  }

  const bodyParas = paras.filter((p) => !p.startsWith("H2::"));
  const plain = bodyParas
    .join(" ")
    .replace(/\[Link:[^\]]+\]/g, "");
  const words = plain.split(/\s+/).filter(Boolean).length;

  const issues = [];

  if (/Begehungs-Check zu/.test(bodyParas.join(" "))) {
    issues.push("Boilerplate „Begehungs-Check“ (generische Fragenkette)");
  }
  const genericFaqs = faqs.filter(
    (f) =>
      f.answer.includes("Grundsätzlich alle Arbeitgeber") ||
      f.answer.includes("Fehlende oder veraltete Dokumentation, Maßnahmen ohne Verantwortliche")
  );
  if (genericFaqs.length >= 2) {
    issues.push(`Template-FAQs (${genericFaqs.length}/4 generisch)`);
  }
  if (/\?\?/.test(faqs.map((f) => f.question).join(" "))) {
    issues.push("Doppeltes „??“ in FAQ-Frage");
  }
  if (!/Köln|NRW|köln|nrw/.test(excerpt) && !/Köln|NRW/.test(bodyParas.slice(0, 2).join(" "))) {
    issues.push("Kein Köln/NRW-Bezug in Excerpt/Intro");
  }
  if (words < 180) {
    issues.push(`Sehr kurz (${words} Wörter)`);
  }
  if (/relevant für Betriebe in Köln und NRW\.?$/.test(bodyParas[0] ?? "") && bodyParas.length < 5) {
    issues.push("Dünner Inhalt trotz Standard-Intro");
  }
  if (/→/.test(plain)) {
    issues.push("Noch Pfeil-Listen (→)");
  }
  if (/^§\s*\d/.test(bodyParas.find((p) => !p.startsWith("Nach") && !p.startsWith("Laut")) ?? "")) {
    issues.push("§-Telegrafie möglich");
  }
  if (/Typische (Fehler|Mängel|Schwachstellen):/.test(plain)) {
    issues.push("Stichwort „Typische …:“");
  }
  if (/\?[^?]*\?[^?]*\?[^?]*\?/.test(plain)) {
    issues.push("Fragenkette (≥4 ?)");
  }
  if (issues.length === 0 && genericFaqs.length === 1) {
    issues.push("1 generische FAQ-Antwort");
  }

  let grade = "GUT";
  if (issues.some((x) => x.includes("Boilerplate") || x.includes("Template-FAQs"))) grade = "NACHBESSERN";
  else if (issues.length >= 2) grade = "NACHBESSERN";
  else if (issues.length === 1) grade = "KLEIN";

  results.push({
    nr: i + 1,
    slug,
    title,
    words,
    grade,
    issues,
    genericFaqCount: genericFaqs.length,
  });
}

const counts = {
  gut: results.filter((r) => r.grade === "GUT").length,
  klein: results.filter((r) => r.grade === "KLEIN").length,
  nachbessern: results.filter((r) => r.grade === "NACHBESSERN").length,
};

const out = [];
out.push("=== Vollständiges Lese-Audit (100 Beiträge) ===\n");
out.push(JSON.stringify(counts));
out.push("");

for (const r of results) {
  const flag =
    r.grade === "GUT" ? "✓" : r.grade === "KLEIN" ? "~" : "!";
  out.push(`${String(r.nr).padStart(3, "0")}. [${r.grade}] ${flag} ${r.slug}`);
  out.push(`     „${r.title.slice(0, 70)}${r.title.length > 70 ? "…" : ""}" (${r.words} Wörter)`);
  if (r.issues.length) {
    for (const iss of r.issues) out.push(`     → ${iss}`);
  } else {
    out.push("     Lesbar, keine auffälligen Boilerplate-Muster.");
  }
  out.push("");
}

const jsonPath = path.join(root, "scripts/blog-full-read-audit.json");
const txtPath = path.join(root, "scripts/blog-full-read-audit-output.txt");
fs.writeFileSync(jsonPath, JSON.stringify({ counts, results }, null, 2));
fs.writeFileSync(txtPath, out.join("\n"));

console.log(out.join("\n"));
console.log(`\nGeschrieben: ${txtPath}`);
