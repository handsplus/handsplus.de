#!/usr/bin/env node
/**
 * Vollinventar aller HTML unter Handlungsvorlagen/Arbeitsschutz (nur .html).
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "fs";
import { join, dirname, relative, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = "C:/Users/akork/OneDrive/H&S+/3. Handlungsvorlagen/Arbeitsschutz";
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_JSON = join(OUT_DIR, "Arbeitsschutz-HTML-VOLLINVENTAR.json");
const OUT_MD = join(OUT_DIR, "Arbeitsschutz-HTML-VOLLINVENTAR.md");
const OUT_KI = join(ROOT, "_KI_WISSEN_ARBEITSSCHUTZ_INVENTAR.html");
const MAX_FULLTEXT_WORDS = 25000;

const SKIP_DIRS = new Set(["scripts", "_Archiv", "fotos", "node_modules"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (SKIP_DIRS.has(name) || name.startsWith(".")) continue;
      walk(p, files);
    } else if (/\.html?$/i.test(name)) {
      files.push(p);
    }
  }
  return files;
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&auml;/gi, "ä")
    .replace(/&ouml;/gi, "ö")
    .replace(/&uuml;/gi, "ü")
    .replace(/&Auml;/g, "Ä")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&szlig;/gi, "ß")
    .replace(/&#\d+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractImages(html, baseDir) {
  const imgs = [];
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
    const src = m[1];
    const abs = resolve(baseDir, src);
    imgs.push({ src, exists: existsSync(abs) });
  }
  return imgs;
}

function classify(rel, html, text, words, images) {
  if (/_KI_WISSEN/i.test(rel)) return "ki_wissen_bundle";
  if (/\.pdf\.html$/i.test(rel)) return "pdf_text_extract";
  if (/Sammelmappe/i.test(rel)) return "sammelmappe";
  if (/RZ_screen/i.test(rel)) return "rz_screen_images";
  if (images.length > 0 && words < 200) return "image_heavy";
  return "html_text";
}

function readHtml(abs) {
  try {
    return readFileSync(abs, "utf8");
  } catch {
    return readFileSync(abs, "latin1");
  }
}

const files = walk(ROOT).sort();
const entries = [];
let totalWords = 0;
const byType = {};

for (const abs of files) {
  const html = readHtml(abs);
  const rel = relative(ROOT, abs).replace(/\\/g, "/");
  const baseDir = dirname(abs);
  const title =
    html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  const images = extractImages(html, baseDir);
  const type = classify(rel, html, text, words, images);
  byType[type] = (byType[type] || 0) + 1;
  totalWords += words;

  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
    .filter(Boolean)
    .slice(0, 20);

  const storeFull =
    type !== "image_heavy" &&
    type !== "rz_screen_images" &&
    words > 0 &&
    words <= MAX_FULLTEXT_WORDS;

  entries.push({
    path: rel,
    folder: rel.split("/")[0],
    type,
    title,
    words,
    pageImages: images.length,
    imagesMissing: images.filter((i) => !i.exists).length,
    headings: headings.slice(0, 15),
    preview: text.slice(0, 500),
    fullText: storeFull ? text : null,
    textTruncated: words > MAX_FULLTEXT_WORDS,
    bytes: statSync(abs).size,
  });
}

const byFolder = {};
for (const e of entries) {
  (byFolder[e.folder] ??= []).push(e);
}

const report = {
  generatedAt: new Date().toISOString(),
  root: ROOT.replace(/\\/g, "/"),
  summary: {
    totalHtml: entries.length,
    totalWordsExtracted: totalWords,
    byType,
    folders: Object.fromEntries(
      Object.entries(byFolder)
        .sort(([a], [b]) => a.localeCompare(b, "de"))
        .map(([k, v]) => [k, v.length])
    ),
  },
  entries,
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2), "utf8");

let md = `# Arbeitsschutz HTML – Vollinventar\n\n`;
md += `Generiert: ${report.generatedAt}\n\n`;
md += `- **${entries.length}** HTML-Dateien (rekursiv, nur \`.html\`)\n`;
md += `- **${totalWords.toLocaleString("de-DE")}** Wörter (Plain-Text aus HTML)\n`;
md += `- Root: \`${ROOT.replace(/\\/g, "/")}\`\n\n`;
md += `## Nach Typ\n\n`;
for (const [t, n] of Object.entries(byType).sort((a, b) => b[1] - a[1])) {
  md += `- **${t}**: ${n}\n`;
}
md += `\n## Ordner (${Object.keys(byFolder).length})\n\n`;
for (const [folder, list] of Object.entries(byFolder).sort(([a], [b]) => a.localeCompare(b, "de"))) {
  md += `### ${folder} (${list.length})\n\n`;
  for (const e of list) {
    md += `- \`${e.path}\` — ${e.type}, ${e.words.toLocaleString("de-DE")} Wörter`;
    if (e.pageImages) md += `, ${e.pageImages} Bild(er)`;
    if (e.textTruncated) md += `, Text gekürzt im JSON`;
    md += `\n`;
  }
  md += `\n`;
}
writeFileSync(OUT_MD, md, "utf8");

const textRich = entries.filter((e) => e.fullText && e.words > 80);
const kiSections = textRich
  .slice(0, 200)
  .map(
    (e) =>
      `<section id="${e.path.replace(/[^a-z0-9]+/gi, "-")}"><h2>${(e.title || e.path).replace(/</g, "&lt;")}</h2><p><code>${e.path}</code> · ${e.words} Wörter · ${e.type}</p><div>${e.fullText.replace(/</g, "&lt;").slice(0, 12000)}</div></section>`
  )
  .join("\n");

const kiHtml = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>KI-Wissen Arbeitsschutz – Inventar extrahiert</title>
<style>body{font-family:system-ui;max-width:900px;margin:2rem auto;line-height:1.5}code{background:#f1f5f9;padding:.1rem .3rem}section{border:1px solid #e2e8f0;padding:1rem;margin:1rem 0;border-radius:8px}</style>
</head><body>
<h1>Arbeitsschutz Handlungsvorlagen – extrahierter Text</h1>
<p>Generiert ${report.generatedAt}. <strong>${entries.length}</strong> HTML erfasst. Bundles mit vollem Text im JSON: <strong>${textRich.length}</strong> (max. 200 Abschnitte hier, Rest siehe Arbeitsschutz-HTML-VOLLINVENTAR.json).</p>
${kiSections}
<p><em>Weitere Dateien nur in JSON/MD-Inventar.</em></p>
</body></html>`;
writeFileSync(OUT_KI, kiHtml, "utf8");

console.log("OK:", OUT_JSON);
console.log("OK:", OUT_MD);
console.log("OK:", OUT_KI);
console.log(JSON.stringify(report.summary, null, 2));
