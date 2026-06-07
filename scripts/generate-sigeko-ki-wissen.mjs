#!/usr/bin/env node
/**
 * Erzeugt pro SiGeKo-Ordner (A–H) eine _KI_WISSEN.html aus Vollinventar + _extraktion/*.txt
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, basename } from "path";
import { fileURLToPath } from "url";

const ROOT = "C:/Users/akork/OneDrive/H&S+/3. Handlungsvorlagen/SiGeKo";
const INVENTAR = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "SiGeKo-HTML-VOLLINVENTAR.json"
);
const FOLDERS = [
  "A Allgemeines",
  "B Arbeitsmittel",
  "C Arbeitsverfahren",
  "D Gesundheitsschutz",
  "E Persönliche Schutzausrüstung",
  "F Formulare",
  "G BG-Grundlagen",
  "H Tabellen",
];

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function parseRzName(filePath) {
  const name = basename(filePath, ".html").replace(/\.html$/i, "");
  const m = name.match(/^([A-H])\s*_?(\d{3})_(.+?)_(\d{4})_/i);
  if (m) {
    return {
      series: m[1].toUpperCase(),
      num: m[2],
      topic: m[3].replace(/_/g, " "),
      year: m[4],
      code: `${m[1]} ${m[2]}`,
    };
  }
  return { series: "?", num: "?", topic: name, year: "?", code: name.slice(0, 8) };
}

function readExtraktion(folderPath, filePath) {
  const base = basename(filePath, ".html");
  const dir = join(ROOT, folderPath, "_extraktion");
  const txt = join(dir, `${base}.txt`);
  const raw = existsSync(txt)
    ? readFileSync(txt, "utf8")
    : existsSync(join(dir, `${base.replace(/\s/g, "_")}.txt`))
      ? readFileSync(join(dir, `${base.replace(/\s/g, "_")}.txt`), "utf8")
      : null;
  if (!raw) return null;
  const t = raw.trim();
  if (/Tesseract couldn't|Failed loading language/i.test(t)) return null;
  if (t.length < 80) return null;
  return t;
}

function sectionHtml(entry, folderPath) {
  const id = entry.path.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
  const meta = parseRzName(entry.path);
  const extrakt = readExtraktion(folderPath, entry.path);

  let body = "";
  if (entry.fullText && entry.words > 50) {
    body += `<div class="fulltext"><p>${esc(entry.fullText)
      .replace(/\s{2,}/g, " ")
      .slice(0, 12000)}</p></div>`;
  }
  if (extrakt) {
    body += `<div class="extraktion"><h4>Inhalt (extrahiert)</h4><pre>${esc(extrakt).slice(0, 15000)}</pre></div>`;
  } else if (entry.type === "rz_screen_images") {
    body += `<div class="stub"><p><strong>Quelle:</strong> BG BAU Regelwerk-Zusammenstellung (RZ), ${esc(
      entry.year || meta.year
    )}. Inhalt liegt als Seitenbilder unter <code>fotos/</code> im gleichen Ordner.</p>`;
    if (entry.pageImages) {
      body += `<p>Seiten: ${entry.pageImages}${entry.imagesMissing ? ` (${entry.imagesMissing} fehlend)` : ""}</p>`;
    }
    body += `<p><em>Extraktion ausstehend oder in <code>_extraktion/${esc(basename(entry.path, ".html"))}.txt</code></em></p></div>`;
  }

  const badges = [];
  if (entry.type === "ratgeber_text") badges.push("Ratgeber handsplus/sigeko");
  if (entry.type === "rz_screen_images") badges.push("BG BAU RZ");
  if (entry.type === "html_text") badges.push("HTML-Text");

  return `
<article class="doc" id="${id}">
  <h3>${esc(meta.code)} – ${esc(meta.topic)} <span class="badge">${badges.join(" · ")}</span></h3>
  <p class="path"><code>${esc(entry.path)}</code> · ${entry.words} Wörter (HTML-Text)</p>
  ${entry.headings?.length ? `<p><strong>Überschriften:</strong> ${entry.headings.map(esc).join(" · ")}</p>` : ""}
  ${body}
</article>`;
}

function buildFolderKiWissen(folderName, entries) {
  const letter = folderName.charAt(0);
  const rz = entries.filter((e) => e.type === "rz_screen_images");
  const text = entries.filter((e) => e.type !== "rz_screen_images");
  const extraktDir = join(ROOT, folderName, "_extraktion");
  let extraktCount = 0;
  if (existsSync(extraktDir)) {
    extraktCount = readdirSync(extraktDir).filter((f) => f.endsWith(".txt")).length;
  }

  const toc = entries
    .map((e) => {
      const m = parseRzName(e.path);
      const id = e.path.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
      return `<li><a href="#${id}">${esc(m.code)} ${esc(m.topic)}</a></li>`;
    })
    .join("\n");

  const sections = entries.map((e) => sectionHtml(e, folderName)).join("\n");

  const folderDesc = {
    A: "Allgemeines: Organisation, GBU, Koordination, Baustelle, Verkehr, Lager, Gefahrstoffe",
    B: "Arbeitsmittel: BG-BAU-RZ B_100–B_291 + Ratgeber-Cluster (103 Themen) für Baustellen",
    C: "Arbeitsverfahren: Tätigkeiten, Heißarbeit, Höhenarbeit, Gefahrstoffe am Bau",
    D: "Gesundheitsschutz: BGM, Vorsorge, Ergonomie, arbeitsbedingte Gesundheitsgefahren",
    E: "Persönliche Schutzausrüstung: PSA-Kapitel E_600–E_609",
    F: "Formulare: Bestellungen, Beauftragungen, Prüfprotokolle",
    G: "BG-Grundlagen: Unfallversicherung, ASD, Verantwortliche",
    H: "Tabellen: Kennwerte, Anschlagmittel, Schutzaltersgrenzen",
  };

  return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<title>KI-Wissen SiGeKo – ${esc(folderName)}</title>
<style>
:root{--a:#1e4d44;--acc:#68BCA0}
body{font-family:'Segoe UI',system-ui,sans-serif;max-width:1100px;margin:0 auto;padding:1.5rem;line-height:1.6;color:#222}
h1{color:var(--a);border-bottom:3px solid var(--acc)}
h2{color:var(--a);margin-top:2rem;border-left:4px solid var(--acc);padding-left:.75rem}
h3{margin-top:0;color:#0f3d36}
.meta{background:#f0faf7;border:2px solid var(--acc);padding:1rem;border-radius:8px;margin-bottom:1.5rem}
nav.toc{background:#fafaf9;padding:1rem;border-radius:8px;columns:2;column-gap:2rem}
nav.toc li{break-inside:avoid;margin:.2rem 0}
.doc{border:1px solid #d6d3d1;border-radius:8px;padding:1rem;margin:1rem 0}
.badge{background:#d1fae5;color:#065f46;padding:.1rem .45rem;border-radius:4px;font-size:.72rem;font-weight:600}
.path{font-size:.82rem;color:#666}
.stub{background:#fffbeb;border-left:4px solid #f59e0b;padding:.75rem}
.extraktion pre{white-space:pre-wrap;font-size:.85rem;background:#f8fafc;padding:.75rem;border-radius:6px;max-height:400px;overflow:auto}
.fulltext{font-size:.92rem;color:#444}
table.inv{border-collapse:collapse;width:100%;font-size:.88rem}
table.inv th,table.inv td{border:1px solid #ccc;padding:.4rem}
table.inv th{background:#e8f5f1}
</style>
</head>
<body>
<div class="meta">
<strong>H&amp;S+ / SiGeKo Handlungsvorlagen – Ordner ${esc(letter)}</strong><br>
${esc(folderDesc[letter] || folderName)}<br>
${entries.length} HTML-Dateien · ${rz.length} RZ-Bildkataloge · ${text.length} mit Fließtext · ${extraktCount} _extraktion/*.txt
</div>
<h1>${esc(folderName)} – KI-Wissen</h1>
<h2>Inventar (${entries.length})</h2>
<table class="inv">
<tr><th>Code</th><th>Thema</th><th>Typ</th><th>Wörter</th></tr>
${entries
  .map((e) => {
    const m = parseRzName(e.path);
    return `<tr><td>${esc(m.code)}</td><td>${esc(m.topic)}</td><td>${esc(e.type)}</td><td>${e.words}</td></tr>`;
  })
  .join("\n")}
</table>
<h2>Inhaltsverzeichnis</h2>
<nav class="toc"><ol>${toc}</ol></nav>
<h2>Dokumente</h2>
${sections}
<p class="path"><em>Generiert ${new Date().toISOString().slice(0, 10)} · Quelle: SiGeKo-HTML-VOLLINVENTAR.json</em></p>
</body>
</html>`;
}

const inventar = JSON.parse(readFileSync(INVENTAR, "utf8"));
const summary = [];

for (const folder of FOLDERS) {
  const entries = inventar.entries
    .filter((e) => e.folder === folder)
    .sort((a, b) => a.path.localeCompare(b.path, "de"));
  const html = buildFolderKiWissen(folder, entries);
  const outPath = join(ROOT, folder, "_KI_WISSEN.html");
  writeFileSync(outPath, html, "utf8");
  summary.push({ folder, files: entries.length, out: outPath });
  console.log("OK:", outPath, `(${entries.length} docs)`);
}

const indexPath = join(ROOT, "_KI_WISSEN_INDEX.html");
const indexHtml = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>SiGeKo KI-Wissen Index A–H</title>
<style>body{font-family:system-ui;max-width:800px;margin:2rem auto}h1{color:#1e4d44}a{display:block;margin:.5rem 0}</style></head><body>
<h1>SiGeKo – KI-Wissen nach Ordnern</h1>
${summary
  .map(
    (s) =>
      `<a href="${esc(s.folder)}/_KI_WISSEN.html">${esc(s.folder)}</a> <span>(${s.files} HTML)</span>`
  )
  .join("\n")}
<p><a href="_KI_WISSEN_SIGEKO_INVENTAR.html">Gesamt-Extrakt Fließtext (ratgeber)</a></p>
</body></html>`;
writeFileSync(indexPath, indexHtml, "utf8");
console.log("OK:", indexPath);
