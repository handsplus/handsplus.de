const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Zuerst Projekt-Root uio_onlylogo.png (beste Qualität), sonst Fallback
const rootLogo = path.join(__dirname, "..", "uio_onlylogo.png");
const fallbackPath = path.join(__dirname, "..", "public", "partner-logos", "uio.png");
const inputPath = fs.existsSync(rootLogo) ? rootLogo : fallbackPath;
const destPath = path.join(__dirname, "..", "public", "partner-logos", "uio.png");

async function removeDarkBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (r + g + b) / 3;
    const isGray = Math.max(r, g, b) - Math.min(r, g, b) < 50;
    if (isGray && luminance < 130) {
      data[i + 3] = 0;
    }
  }

  let pipeline = sharp(data, { raw: { width, height, channels } });
  // Für Web: max 800px Breite, mind. 2x für scharfe Darstellung
  const maxWidth = 800;
  const scale = width <= maxWidth / 2 ? 2 : maxWidth / width;
  const newWidth = Math.round(width * scale);
  const newHeight = Math.round(height * scale);
  if (newWidth !== width || newHeight !== height) {
    pipeline = pipeline.resize(newWidth, newHeight, { kernel: sharp.kernel.lanczos3 });
  }

  await pipeline.png().toFile(destPath);

  console.log("UIO-Logo gespeichert (Hintergrund entfernt, 2x für Qualität):", destPath, `(${newWidth}x${newHeight})`);
}

removeDarkBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
