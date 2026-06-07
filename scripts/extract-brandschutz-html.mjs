#!/usr/bin/env node
/**
 * Vollständiges Inventar aller HTML in Handlungsvorlagen/Brandschutz
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const ROOT = "C:/Users/akork/OneDrive/H&S+/3. Handlungsvorlagen/Brandschutz";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "Brandschutz-HTML-VOLLINVENTAR.json");
const OUT_MD = join(dirname(fileURLToPath(import.meta.url)), "..", "Brandschutz-HTML-VOLLINVENTAR.md");

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name.startsWith("_Archiv")) continue;
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
    .replace(/&#\d+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractMeta(html) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  const preview = text.slice(0, 500);
  const headings = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
    .filter(Boolean)
    .slice(0, 15);
  const isKiWissen = /_KI_WISSEN/i.test(html) || /<title[^>]*>KI-Wissen/i.test(html);
  return { title, h1, words, preview, headings, isKiWissen };
}

const files = walk(ROOT).sort();
const entries = [];
let totalWords = 0;

for (const abs of files) {
  let html;
  try {
    html = readFileSync(abs, "utf8");
  } catch {
    html = readFileSync(abs, "latin1");
  }
  const rel = relative(ROOT, abs).replace(/\\/g, "/");
  const meta = extractMeta(html);
  totalWords += meta.words;
  entries.push({
    path: rel,
    folder: rel.split("/")[0],
    ...meta,
    bytes: statSync(abs).size,
  });
}

const byFolder = {};
for (const e of entries) {
  byFolder[e.folder] = byFolder[e.folder] || [];
  byFolder[e.folder].push(e);
}

const kiFiles = entries.filter((e) => e.isKiWissen || /_KI_WISSEN/.test(e.path));

writeFileSync(
  OUT,
  JSON.stringify(
    {
      generated: new Date().toISOString(),
      root: ROOT,
      totalFiles: entries.length,
      totalWords,
      kiIndexFiles: kiFiles.map((e) => e.path),
      byFolder: Object.fromEntries(
        Object.entries(byFolder).map(([k, v]) => [
          k,
          { count: v.length, files: v.map(({ path, title, h1, words, isKiWissen }) => ({ path, title, h1, words, isKiWissen })) },
        ])
      ),
      entries,
    },
    null,
    2
  ),
  "utf8"
);

let md = `# Brandschutz Handlungsvorlagen – Vollinventar HTML\n\n`;
md += `**Stand:** ${new Date().toLocaleDateString("de-DE")}  \n`;
md += `**Quelle:** \`${ROOT}\`  \n`;
md += `**Dateien:** ${entries.length} | **Wörter (geschätzt):** ${totalWords.toLocaleString("de-DE")}\n\n`;
md += `## KI-Index-Dateien (zuerst lesen)\n\n`;
for (const k of kiFiles) {
  md += `- \`${k.path}\` – ${k.title || k.h1 || "(ohne Titel)"} (${k.words} Wörter)\n`;
}
md += `\n## Ordnerübersicht\n\n| Ordner | HTML-Dateien |\n|--------|-------------|\n`;
for (const [folder, list] of Object.entries(byFolder).sort((a, b) => a[0].localeCompare(b[0], "de"))) {
  md += `| ${folder} | ${list.length} |\n`;
}
md += `\n## Alle Dateien (vollständig)\n\n`;
for (const [folder, list] of Object.entries(byFolder).sort((a, b) => a[0].localeCompare(b[0], "de"))) {
  md += `\n### ${folder}\n\n`;
  for (const e of list) {
    md += `#### \`${e.path}\`\n`;
    if (e.title) md += `- **Title:** ${e.title}\n`;
    if (e.h1 && e.h1 !== e.title) md += `- **H1:** ${e.h1}\n`;
    md += `- **Wörter:** ${e.words} | **Größe:** ${Math.round(e.bytes / 1024)} KB\n`;
    if (e.headings.length) md += `- **Überschriften:** ${e.headings.slice(0, 8).join(" · ")}\n`;
    md += `- **Vorschau:** ${e.preview.slice(0, 280)}…\n\n`;
  }
}

writeFileSync(OUT_MD, md, "utf8");
console.log(`OK: ${entries.length} Dateien, ${totalWords} Wörter`);
console.log(`JSON: ${OUT}`);
console.log(`MD: ${OUT_MD}`);
