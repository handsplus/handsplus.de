/* eslint-disable no-console */
const fs = require("fs/promises");
const sharp = require("sharp");
const pngToIcoModule = require("png-to-ico");

async function main() {
  const src = "public/Vorschläge H&S+ Logo/Bilder/Variant-10-Nur-Icon-Kantig.png";
  const out = "public";

  const base = sharp(src).ensureAlpha();
  const sizes = [
    { name: "favicon-16x16.png", size: 16 },
    { name: "favicon-32x32.png", size: 32 },
    { name: "favicon-48x48.png", size: 48 },
    { name: "apple-touch-icon.png", size: 180 },
    { name: "android-chrome-192x192.png", size: 192 },
    { name: "android-chrome-512x512.png", size: 512 },
  ];

  // Generate PNGs
  for (const s of sizes) {
    await base
      .clone()
      .resize(s.size, s.size, { fit: "contain" })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(`${out}/${s.name}`);
  }

  // Multi-size ICO
  const icoPngBuffers = await Promise.all(
    [16, 32, 48].map((n) =>
      base
        .clone()
        .resize(n, n, { fit: "contain" })
        .png()
        .toBuffer()
    )
  );
  const pngToIco = pngToIcoModule.default ?? pngToIcoModule.imagesToIco;
  const ico = await pngToIco(icoPngBuffers);
  await fs.writeFile(`${out}/favicon.ico`, ico);

  console.log("Favicons written to", out);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

