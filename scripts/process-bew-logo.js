const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const sourcePath = path.join(__dirname, "..", "public", "partner-logos", "bew-source.jpg");
const destPath = path.join(__dirname, "..", "public", "partner-logos", "bew.png");

async function processBewLogo() {
  const image = sharp(sourcePath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (r + g + b) / 3;
    const isGray = Math.max(r, g, b) - Math.min(r, g, b) < 30;
    // Weißen Hintergrund transparent machen (BEW-Logo in Blau/Orange bleibt)
    if (isGray && luminance > 230) {
      data[i + 3] = 0;
    }
  }

  // Bereits 800px Breite – als PNG mit Transparenz speichern, optional leicht schärfen
  await sharp(data, { raw: { width, height, channels } })
    .sharpen({ sigma: 0.4, m1: 1.0, m2: 0.5 })
    .png()
    .toFile(destPath);

  console.log("BEW-Logo gespeichert (Hintergrund transparent):", destPath, `(${width}x${height})`);
}

processBewLogo().catch((err) => {
  console.error(err);
  process.exit(1);
});
