/* eslint-disable no-console */
const path = require("path");
const sharp = require("sharp");

function clampByte(x) {
  if (x < 0) return 0;
  if (x > 255) return 255;
  return x;
}

async function main() {
  const [, , inArg, outArg] = process.argv;
  if (!inArg || !outArg) {
    console.error(
      "Usage: node scripts/dehalo-white-matte.js <input.png> <output.png>"
    );
    process.exit(1);
  }

  const inputPath = path.resolve(process.cwd(), inArg);
  const outputPath = path.resolve(process.cwd(), outArg);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Remove white halo introduced by exporting with a white matte.
  // Observed = True * a + 255 * (1 - a)  -> True = (Observed - 255*(1-a))/a
  // a is alpha in [0..1]. We work in byte space for speed.
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a === 0 || a === 255) continue;

    const invA = 255 / a;
    const add = 255 - a; // 255*(1-a/255)

    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const rr = clampByte(Math.round((r - add) * invA));
    const gg = clampByte(Math.round((g - add) * invA));
    const bb = clampByte(Math.round((b - add) * invA));

    // If the pixel is almost transparent and still very bright, drop it fully.
    if (a < 10 && rr > 245 && gg > 245 && bb > 245) {
      data[i + 3] = 0;
      data[i] = 0;
      data[i + 1] = 0;
      data[i + 2] = 0;
      continue;
    }

    data[i] = rr;
    data[i + 1] = gg;
    data[i + 2] = bb;
  }

  await sharp(data, { raw: info })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath);

  console.log("Wrote", path.relative(process.cwd(), outputPath));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

