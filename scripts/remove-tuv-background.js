const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// TÜV-Logo: Projekt-Root Tüv.png (beste Qualität), sonst Fallback
const rootLogo = path.join(__dirname, "..", "Tüv.png");
const fallbackPath = path.join(__dirname, "..", "public", "partner-logos", "tuv-rheinland.png");
const inputPath = fs.existsSync(rootLogo) ? rootLogo : fallbackPath;
const destPath = path.join(__dirname, "..", "public", "partner-logos", "tuv-rheinland.png");

async function removeDarkBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (r + g + b) / 3;
    const isGray = Math.max(r, g, b) - Math.min(r, g, b) < 40;
    // Nur echtes Schwarz entfernen (Hintergrund), dunkelgraue Schrift (Luminanz ~50+) bleibt
    if (isGray && luminance < 45) {
      data[i + 3] = 0;
    }
  }

  let pipeline = sharp(data, { raw: { width, height, channels } });
  // Immer auf 800px Breite für bessere Schärfe (mehr Pixel = weniger pixelig)
  const targetWidth = 800;
  const scale = targetWidth / width;
  const newWidth = targetWidth;
  const newHeight = Math.round(height * scale);
  pipeline = pipeline
    .resize(newWidth, newHeight, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.8, m1: 1.0, m2: 0.5 }); // Leichte Schärfung gegen Weichzeichner

  await pipeline.png().toFile(destPath);

  console.log("TÜV-Logo gespeichert (Hintergrund entfernt, optimierte Qualität):", destPath, `(${newWidth}x${newHeight})`);
}

removeDarkBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
