const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(
  __dirname,
  "..",
  "public",
  "Kundenlogos",
  "rheinenergie.png"
);
const destPath = inputPath;

async function removeBlackBackground() {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luminance = (r + g + b) / 3;
    const isGray = Math.max(r, g, b) - Math.min(r, g, b) < 25;
    // Nur nahezu schwarze Pixel (Hintergrund) transparent; dunkelgraue Schrift bleibt
    if (isGray && luminance < 35) {
      data[i + 3] = 0;
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(destPath);

  console.log("RheinEnergie-Logo: schwarzer Hintergrund entfernt →", destPath);
}

removeBlackBackground().catch((err) => {
  console.error(err);
  process.exit(1);
});
