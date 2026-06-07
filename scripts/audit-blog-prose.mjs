import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "content/blog.ts"), "utf8");

const blocks = src.split(/\n  \{\n    slug:/).slice(1);
const results = [];

for (const block of blocks) {
  const slug = block.match(/"([^"]+)"/)?.[1];
  const title = block.match(/title:\s*\n\s*"([^"]+)"/)?.[1] ?? "";
  const contentMatch = block.match(/content:\s*\[([\s\S]*?)\n    \],/);
  const paras = [];
  if (contentMatch) {
    const re = /^\s+"((?:\\.|[^"\\])*)"/gm;
    let m;
    while ((m = re.exec(contentMatch[1])) !== null) {
      paras.push(m[1].replace(/\\"/g, '"'));
    }
  }

  const bodyParas = paras.filter((p) => !p.startsWith("H2::"));
  const words = bodyParas
    .join(" ")
    .replace(/\[Link:[^\]]+\]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

  const issues = [];
  const examples = [];

  function flag(type, preview) {
    issues.push(type);
    if (examples.length < 4) examples.push(preview.slice(0, 100).replace(/\s+/g, " ") + "…");
  }

  for (const p of bodyParas) {
    const plain = p.replace(/\[Link:[^\]]+\]/g, "").trim();

    // Stichwort-Zeile: "Planung § 2:" / "Typische Fehler:" / "Nr. 1 –"
    if (/^(Planung|SiGe-Plan|Koordination|Arbeitgeber|Bestellung|Vorankündigung|Bauherr|Abs\.|Phasen|Qualifikation|Vertiefung|Checkliste|Typische|Beispiel|Personentage|Nr\.|Rohbau|Dachdecker|Elektro|Sanitär|Kran)\b[^.]{0,50}:/.test(plain)) {
      flag("Stichwort-Überschrift statt Satz", plain);
    }

    // Gesetzeszeile ohne Einleitung
    if (/^§\s*\d/.test(plain) && !/^(Nach|Laut|Gemäß|In|Der|Die|Das|Wer|Bei|Wenn|Sobald|Ab|Mit|Ohne|Auch|Für|Unter)/.test(plain)) {
      flag("Paragraph beginnt mit §-Referenz (telegrafisch)", plain);
    }

    // Pfeil-Listen
    if (plain.includes("→") || plain.includes("->")) {
      flag("Pfeil-Liste (→)", plain);
    }

    // Viele Semikolons = Aufzählung
    const semi = (plain.match(/;/g) || []).length;
    if (semi >= 3) flag("Semikolon-Kette (≥3)", plain);

    // Checklisten-Fragenkette
    const q = (plain.match(/\?/g) || []).length;
    if (q >= 4) flag("Fragenkette statt Fließtext (≥4 ?)", plain);

    // Kurzer Fragment-Absatz ohne Punkt am Ende
    if (plain.length > 30 && plain.length < 120 && !/[.!?]$/.test(plain) && !plain.includes("Health and Safety+")) {
      flag("Kurzer Fragment ohne Satzende", plain);
    }

    // AG-Abkürzung ohne Erklärung im Absatz
    if (/\bAG\b/.test(plain) && !/Arbeitgeber/.test(plain)) {
      flag("Abkürzung „AG“ ohne Ausschreibung", plain);
    }

    // Doppel-Dash Listen
    if ((plain.match(/ – /g) || []).length >= 4 && plain.length < 350) {
      flag("Viele Gedankenstriche (Listenrhythmus)", plain);
    }

    // Imperativ-Kette ohne Subjekt
    if (/^[A-ZÄÖÜ][^.]{0,30} (pflegen|festlegen|prüfen|benennen|dokumentieren)\./.test(plain)) {
      flag("Imperativ ohne Subjekt", plain);
    }
  }

  const uniqueIssues = [...new Set(issues)];
  const severity =
    uniqueIssues.length >= 4 || issues.length >= 8
      ? "ROT"
      : uniqueIssues.length >= 2 || issues.length >= 4
        ? "GELB"
        : uniqueIssues.length >= 1
          ? "ORANGE"
          : "GRÜN";

  results.push({
    slug,
    title,
    words,
    severity,
    issueCount: issues.length,
    issueTypes: uniqueIssues,
    examples: [...new Set(examples)],
  });
}

results.sort((a, b) => {
  const order = { ROT: 0, GELB: 1, ORANGE: 2, GRÜN: 3 };
  return order[a.severity] - order[b.severity] || b.issueCount - a.issueCount;
});

const summary = {
  total: results.length,
  gruen: results.filter((r) => r.severity === "GRÜN").length,
  orange: results.filter((r) => r.severity === "ORANGE").length,
  gelb: results.filter((r) => r.severity === "GELB").length,
  rot: results.filter((r) => r.severity === "ROT").length,
};

fs.writeFileSync(
  path.join(root, "scripts/blog-prose-audit.json"),
  JSON.stringify({ summary, results }, null, 2)
);

console.log("=== Blog-Prosa-Audit (100 Beiträge) ===\n");
console.log(summary);
console.log("\n--- Alle Beiträge (Reihenfolge wie in blog.ts) ---\n");

const byOriginal = [...results].sort((a, b) => {
  const ia = src.indexOf(`slug: "${a.slug}"`);
  const ib = src.indexOf(`slug: "${b.slug}"`);
  return ia - ib;
});

for (let i = 0; i < byOriginal.length; i++) {
  const r = byOriginal[i];
  console.log(`${String(i + 1).padStart(3, "0")}. [${r.severity}] ${r.slug}`);
  console.log(`     ${r.title}`);
  if (r.severity === "GRÜN") {
    console.log("     ✓ Durchgängig lesbar, keine auffälligen Stil-Muster.");
  } else {
    console.log(`     Probleme: ${r.issueTypes.join("; ") || "—"}`);
    for (const ex of r.examples.slice(0, 2)) {
      console.log(`     → „${ex}"`);
    }
  }
  console.log("");
}
