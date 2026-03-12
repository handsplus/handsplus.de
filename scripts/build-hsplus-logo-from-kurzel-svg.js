/* eslint-disable no-console */
const fs = require("fs/promises");
const sharp = require("sharp");

function computeAlphaBounds(raw, width, height, alphaThreshold = 8) {
  const channels = 4;
  let minX = width,
    minY = height,
    maxX = -1,
    maxY = -1;

  for (let y = 0; y < height; y++) {
    const row = y * width * channels;
    for (let x = 0; x < width; x++) {
      const a = raw[row + x * channels + 3];
      if (a > alphaThreshold) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  if (maxX === -1) return null;
  return {
    left: minX,
    top: minY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
  };
}

async function main() {
  const sourceSvg = "public/partner-logos/H&S+ logo-kürzel.svg";
  const outDir = "public/partner-logos";

  const svg = await fs.readFile(sourceSvg, "utf8");
  const rendered = sharp(Buffer.from(svg), { density: 600 }).ensureAlpha();
  const { data, info } = await rendered.raw().toBuffer({ resolveWithObject: true });
  const bounds = computeAlphaBounds(data, info.width, info.height, 8);
  if (!bounds) throw new Error("Rendered logo seems fully transparent; cannot crop.");

  const base = rendered.extract(bounds);

  // Backup "kurzel" variants
  for (const w of [512, 1024]) {
    await base
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(`${outDir}/hsplus-logo-kurzel-${w}.png`);

    await base
      .clone()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 95, alphaQuality: 100, smartSubsample: true })
      .toFile(`${outDir}/hsplus-logo-kurzel-${w}.webp`);
  }

  // Replace the main hsplus-logo assets used on the homepage
  await base
    .clone()
    .resize({ width: 1024, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(`${outDir}/hsplus-logo.png`);

  await base
    .clone()
    .resize({ width: 512, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(`${outDir}/hsplus-logo-512.png`);

  await base
    .clone()
    .resize({ width: 1024, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(`${outDir}/hsplus-logo-1024.png`);

  await base
    .clone()
    .resize({ width: 512, withoutEnlargement: true })
    .webp({ quality: 95, alphaQuality: 100, smartSubsample: true })
    .toFile(`${outDir}/hsplus-logo-512.webp`);

  await base
    .clone()
    .resize({ width: 1024, withoutEnlargement: true })
    .webp({ quality: 95, alphaQuality: 100, smartSubsample: true })
    .toFile(`${outDir}/hsplus-logo-1024.webp`);

  const outMeta = await sharp(`${outDir}/hsplus-logo-1024.png`).metadata();
  console.log("Wrote hsplus-logo from kürzel SVG.", {
    width: outMeta.width,
    height: outMeta.height,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

