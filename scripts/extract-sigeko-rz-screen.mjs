/**
 * Extrahiert Text aus SiGeKo RZ_screen PNGs (fotos/) → _extraktion/{basename}.txt
 * Nutzt Tesseract OCR (deu). Aufruf: node scripts/extract-sigeko-rz-screen.mjs "<Ordner>"
 */
import { readdir, readFile, mkdir, writeFile } from "fs/promises";
import { join, dirname, basename } from "path";
import { spawn } from "child_process";
import { existsSync } from "fs";

const TESSERACT =
  process.env.TESSERACT_EXE ||
  "C:\\Program Files\\Tesseract-OCR\\tesseract.exe";
const TESSDATA_PREFIX =
  process.env.TESSDATA_PREFIX ||
  `${process.env.LOCALAPPDATA || ""}\\tessdata`;

if (!process.env.TESSDATA_PREFIX && existsSync(TESSDATA_PREFIX)) {
  process.env.TESSDATA_PREFIX = TESSDATA_PREFIX;
}

const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node extract-sigeko-rz-screen.mjs <SiGeKo-Ordner>");
  process.exit(1);
}

const OUT = join(folder, "_extraktion");
const FOTOS = join(folder, "fotos");

function parseMeta(htmlBase) {
  const name = htmlBase.replace(/_RZ_screen$/i, "");
  const m = name.match(/^([A-H])_(\d+)_(.+?)_(\d{4})_V/i);
  if (m) {
    const topic = m[3]
      .replace(/_/g, " ")
      .replace(/\s+i\s+/g, " in ")
      .replace(/\s+a\s+/g, " an ")
      .replace(/\s+v\s+/g, " von ")
      .replace(/\s+m\s+/g, " mit ")
      .replace(/\s+n\s+/g, " nach ")
      .replace(/\s+d\s+/g, " der ")
      .replace(/\s+u\s+/g, " und ")
      .replace(/\s+b\s+/g, " bei ")
      .replace(/\s+f\s+/g, " für ")
      .replace(/\s+/g, " ")
      .trim();
    return { code: `${m[1]} ${m[2]}`, topic };
  }
  return { code: name.slice(0, 20), topic: name };
}

function extractImgSrcs(html) {
  const srcs = [];
  const re = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    const src = m[1].replace(/^\.\//, "");
    if (/fotos\//i.test(src) || src.endsWith(".png")) srcs.push(src);
  }
  return srcs;
}

function ocrPng(pngPath) {
  return new Promise((resolve, reject) => {
    const args = [pngPath, "stdout", "-l", "deu", "--psm", "6"];
    const proc = spawn(TESSERACT, args, {
      windowsHide: true,
      env: { ...process.env, TESSDATA_PREFIX },
    });
    let out = "";
    let err = "";
    proc.stdout.on("data", (d) => (out += d));
    proc.stderr.on("data", (d) => (err += d));
    proc.on("close", (code) => {
      if (code !== 0) reject(new Error(err || `tesseract exit ${code}`));
      else resolve(out.trim());
    });
    proc.on("error", reject);
  });
}

function cleanOcr(text) {
  return text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join("\n");
}

async function main() {
  if (!existsSync(TESSERACT)) {
    console.error("Tesseract nicht gefunden:", TESSERACT);
    process.exit(1);
  }
  await mkdir(OUT, { recursive: true });

  const files = (await readdir(folder))
    .filter(
      (f) =>
        f.endsWith(".html") &&
        (/RZ[-_]screen/i.test(f) || /_screen\.html$/i.test(f))
    )
    .sort();

  let created = 0;
  const errors = [];

  for (const htmlFile of files) {
    const htmlBase = basename(htmlFile, ".html");
    const txtPath = join(OUT, `${htmlBase}.txt`);
    try {
      const html = await readFile(join(folder, htmlFile), "utf8");
      const srcs = extractImgSrcs(html);
      const { code, topic } = parseMeta(htmlBase);
      const parts = [`# ${code} ${topic}`, ""];

      for (let i = 0; i < srcs.length; i++) {
        const rel = srcs[i].replace(/^fotos\//i, "");
        const pngPath = join(FOTOS, rel);
        if (!existsSync(pngPath)) {
          errors.push(`${htmlBase}: PNG fehlt ${rel}`);
          parts.push(`## Seite ${i + 1}`, "", "[Bild nicht gefunden]", "");
          continue;
        }
        const raw = await ocrPng(pngPath);
        const body = cleanOcr(raw);
        parts.push(`## Seite ${i + 1}`, "", body || "[Kein Text erkannt]", "");
      }

      await writeFile(txtPath, parts.join("\n").trimEnd() + "\n", "utf8");
      created++;
      if (created % 10 === 0) console.log(`… ${created}/${files.length}`);
    } catch (e) {
      errors.push(`${htmlBase}: ${e.message}`);
    }
  }

  console.log(JSON.stringify({ folder, total: files.length, created, errors: errors.length }, null, 2));
  if (errors.length) console.error(errors.slice(0, 20).join("\n"));
}

main();
