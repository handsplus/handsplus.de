#!/usr/bin/env node
/**
 * Vollinventar aller HTML unter Handlungsvorlagen/SiGeKo (lückenlos).
 * RZ_screen = Bild-Wrapper; ratgeber-content = Fließtext.
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "fs";
import { join, dirname, relative, resolve } from "path";
import { fileURLToPath } from "url";

const ROOT = "C:/Users/akork/OneDrive/H&S+/3. Handlungsvorlagen/SiGeKo";
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_JSON = join(OUT_DIR, "SiGeKo-HTML-VOLLINVENTAR.json");
const OUT_MD = join(OUT_DIR, "SiGeKo-HTML-VOLLINVENTAR.md");
const OUT_KI = join(ROOT, "_KI_WISSEN_SIGEKO_INVENTAR.html");

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name.startsWith("_Archiv") || name === "fotos") continue;
      walk(p, files);
    } else if (/\.html?$/i.test(name) && !/^_/i.test(name)) {
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
    imgs.push({ src, exists: existsSync(abs), abs: abs.replace(/\\/g, "/") });
  }
  return imgs;
}

function isImageShell(html, text, rel) {
  if (/RZ_screen/i.test(rel)) return true;
  const imgCount = (html.match(/<img\s/gi) || []).length;
  return imgCount > 0 && text.length < 200;
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
let imageShellCount = 0;
let textRichCount = 0;

for (const abs of files) {
  const html = readHtml(abs);
  const rel = relative(ROOT, abs).replace(/\\/g, "/");
  const baseDir = dirname(abs);
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() ?? "";
  const text = stripHtml(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  const images = extractImages(html, baseDir);
  const shell = isImageShell(html, text, rel);
  if (shell) imageShellCount++;
  else textRichCount++;
  totalWords += words;

  const headings = [...html.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, "").trim())
    .filter(Boolean);

  entries.push({
    path: rel,
    folder: rel.split("/")[0],
    type: shell ? "rz_screen_images" : rel.includes("ratgeber-content") ? "ratgeber_text" : "html_text",
    title,
    words,
    pageImages: images.length,
    imagesMissing: images.filter((i) => !i.exists).length,
    headings: headings.slice(0, 20),
    preview: text.slice(0, 400),
    fullText: shell ? null : text,
    bytes: statSync(abs).size,
  });
}

const byFolder = {};
for (const e of entries) {
  (byFolder[e.folder] ??= []).push(e);
}

const sigekoCore = entries.filter(
  (e) =>
    /Koordination|SiGe|Baustelle|Baustellenverordnung|RAB|Vorankündigung|SiGe-Plan/i.test(
      e.title + e.path + (e.fullText ?? "")
    ) || e.path.startsWith("A Allgemeines/A_003")
);

const report = {
  generatedAt: new Date().toISOString(),
  root: ROOT.replace(/\\/g, "/"),
  summary: {
    totalHtml: entries.length,
    imageShellHtml: imageShellCount,
    textRichHtml: textRichCount,
    totalWordsExtracted: totalWords,
    folders: Object.fromEntries(Object.entries(byFolder).map(([k, v]) => [k, v.length])),
  },
  sigekoCorePaths: sigekoCore.map((e) => e.path),
  entries,
};

writeFileSync(OUT_JSON, JSON.stringify(report, null, 2), "utf8");

let md = `# SiGeKo HTML – Vollinventar\n\n`;
md += `- **${entries.length}** HTML-Dateien\n`;
md += `- **${imageShellCount}** RZ_screen (Inhalt in PNG unter \`fotos/\`)\n`;
md += `- **${textRichCount}** mit extrahierbarem Text (u. a. \`ratgeber-content\`)\n`;
md += `- **${totalWords.toLocaleString("de-DE")}** Wörter extrahiert\n\n`;
md += `## Ordner\n\n`;
for (const [folder, list] of Object.entries(byFolder).sort()) {
  md += `### ${folder} (${list.length})\n\n`;
  for (const e of list) {
    md += `- \`${e.path}\` — ${e.type}, ${e.words} Wörter`;
    if (e.pageImages) md += `, ${e.pageImages} Bild(er)`;
    md += `\n`;
  }
  md += `\n`;
}
writeFileSync(OUT_MD, md, "utf8");

const kiSections = entries
  .filter((e) => e.fullText && e.words > 80)
  .map(
    (e) =>
      `<section id="${e.path.replace(/[^a-z0-9]+/gi, "-")}"><h2>${e.title || e.path}</h2><p><code>${e.path}</code> · ${e.words} Wörter</p><div>${e.fullText.replace(/</g, "&lt;")}</div></section>`
  )
  .join("\n");

const kiHtml = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>KI-Wissen SiGeKo – Inventar extrahiert</title></head><body>
<h1>SiGeKo Handlungsvorlagen – extrahierter Text (${textRichCount} Dateien)</h1>
<p>Generiert ${report.generatedAt}. RZ_screen-Dateien (${imageShellCount}) sind Bildkataloge – siehe SiGeKo-HTML-VOLLINVENTAR.json.</p>
${kiSections}
</body></html>`;
writeFileSync(OUT_KI, kiHtml, "utf8");

console.log("OK:", OUT_JSON);
console.log("OK:", OUT_MD);
console.log("OK:", OUT_KI);
console.log(JSON.stringify(report.summary, null, 2));
