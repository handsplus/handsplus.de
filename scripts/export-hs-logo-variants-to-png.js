const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const SVG_QUELLE_DIR = path.join(__dirname, "..", "public", "Vorschläge H&S+ Logo", "SVG-Quelle");
const BILDER_DIR = path.join(__dirname, "..", "public", "Vorschläge H&S+ Logo", "Bilder");

// Varianten mit gewünschter PNG-Ausgabegröße (Breite x Höhe)
const VARIANTS = [
  { name: "Variant-1-Vollfarbe-ohne-Trennlinie.svg", width: 1280, height: 144 },
  { name: "Variant-2-Icon-Schild.svg", width: 1280, height: 144 },
  { name: "Variant-3-Einfarbig-Schwarz.svg", width: 1280, height: 144 },
  { name: "Variant-4-Negativ-Weiss.svg", width: 1280, height: 144 },
  { name: "Variant-5-Nur-Wortmarke.svg", width: 1040, height: 144 },
  { name: "Variant-6-Nur-Icon.svg", width: 256, height: 256 },
  { name: "Variant-7-Kantig-Vollfarbe.svg", width: 1120, height: 128 },
  { name: "Variant-8-Kantig-Schwarz.svg", width: 1120, height: 128 },
  { name: "Variant-9-Kantig-Negativ.svg", width: 1120, height: 128 },
  { name: "Variant-10-Nur-Icon-Kantig.svg", width: 256, height: 256 },
  { name: "Variant-11-Wortmarke-Ohne-Managementsysteme.svg", width: 960, height: 112 },
  { name: "Variant-12-Kantig-Kompakt.svg", width: 1040, height: 112 },
];

/** SVG als UTF-8 lesen und XML-Kommentare entfernen (vermeidet Encoding-Fehler mit sharp) */
function loadSvgClean(svgPath) {
  let svg = fs.readFileSync(svgPath, "utf8");
  svg = svg.replace(/<\?xml[^?]*\?>\s*/i, "");
  svg = svg.replace(/<!--[\s\S]*?-->/g, "");
  return Buffer.from('<?xml version="1.0" encoding="UTF-8"?>\n' + svg, "utf8");
}

async function exportToPng() {
  for (const { name, width, height } of VARIANTS) {
    const svgPath = path.join(SVG_QUELLE_DIR, name);
    const pngPath = path.join(BILDER_DIR, name.replace(/\.svg$/i, ".png"));

    if (!fs.existsSync(svgPath)) {
      console.warn("Überspringe (nicht gefunden):", name);
      continue;
    }

    const svgBuffer = loadSvgClean(svgPath);

    await sharp(svgBuffer, { density: 300 })
      .resize(width, height)
      .png()
      .toFile(pngPath);

    console.log("Erstellt:", path.basename(pngPath), `(${width}x${height}, transparent)`);
  }
  console.log("Fertig. Alle PNGs im Ordner:", BILDER_DIR);
}

exportToPng().catch((err) => {
  console.error(err);
  process.exit(1);
});
