const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// HSRW-Logo mit weißem Hintergrund (wie TÜV-Verarbeitung)
const sourcePath = path.join(__dirname, "..", "public", "partner-logos", "hochschule-rhein-waal-source.png");
const destPath = path.join(__dirname, "..", "public", "partner-logos", "hochschule-rhein-waal.png");

async function processLogo() {
  const image = sharp(sourcePath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (r + g + b) / 3;
    const isGray = Math.max(r, g, b) - Math.min(r, g, b) < 25;
    // Weißen Hintergrund transparent machen (blaue Balken + Schrift bleiben)
    if (isGray && luminance > 235) {
      data[i + 3] = 0;
    }
  }

  const targetWidth = 800;
  const scale = targetWidth / width;
  const newWidth = targetWidth;
  const newHeight = Math.round(height * scale);

  await sharp(data, { raw: { width, height, channels } })
    .resize(newWidth, newHeight, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.6, m1: 1.0, m2: 0.5 })
    .png()
    .toFile(destPath);

  console.log("Hochschule Rhein-Waal Logo gespeichert (Hintergrund transparent, 800px):", destPath);
}

processLogo().catch((err) => {
  console.error(err);
  process.exit(1);
});
