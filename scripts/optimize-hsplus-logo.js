/* eslint-disable no-console */
const sharp = require("sharp");

function computeAlphaBounds(raw, width, height, alphaThreshold = 0) {
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
  const input =
    "public/Vorschläge H&S+ Logo/Bilder/H&S+ logo ohne slogan.svg";
  const outDir = "public/partner-logos";

  // sharp.trim() doesn't help when the border isn't uniform.
  // For logos we want a tight crop to the non-transparent alpha bounds.
  const rendered = sharp(input, { density: 400 }).ensureAlpha();

  const { data, info } = await rendered
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const bounds = computeAlphaBounds(data, info.width, info.height, 8);
  if (!bounds) throw new Error("Logo seems fully transparent; cannot crop.");

  console.log("Alpha bounds:", bounds);

  const base = rendered.extract(bounds);

  const variants = [
    { width: 512, suffix: "512" },
    { width: 1024, suffix: "1024" },
  ];

  for (const v of variants) {
    const resized = base.clone().resize({
      width: v.width,
      withoutEnlargement: true,
    });

    await resized
      .clone()
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(`${outDir}/hsplus-logo-${v.suffix}.png`);

    await resized
      .clone()
      .webp({ quality: 95, alphaQuality: 100, smartSubsample: true })
      .toFile(`${outDir}/hsplus-logo-${v.suffix}.webp`);
  }

  // Default (used by src="/partner-logos/hsplus-logo.png")
  await base
    .clone()
    .resize({ width: 1024, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(`${outDir}/hsplus-logo.png`);

  console.log("Wrote optimized variants into", outDir);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

