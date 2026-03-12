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

function setOrInsertAttr(tag, name, value) {
  const re = new RegExp(`\\s${name}=\"[^\"]*\"`);
  if (re.test(tag)) return tag.replace(re, ` ${name}="${value}"`);
  return tag.replace("<svg", `<svg ${name}="${value}"`);
}

async function main() {
  const [, , svgPath] = process.argv;
  if (!svgPath) {
    console.error("Usage: node scripts/trim-svg-to-content.js <path-to-svg>");
    process.exit(1);
  }

  // Use 72 DPI so SVG user units map 1:1 to rendered pixels.
  const density = 72;
  const svg = await fs.readFile(svgPath, "utf8");

  const rendered = sharp(Buffer.from(svg), { density }).ensureAlpha();
  const { data, info } = await rendered.raw().toBuffer({ resolveWithObject: true });
  const b = computeAlphaBounds(data, info.width, info.height, 8);
  if (!b) throw new Error("SVG renders fully transparent; cannot trim.");

  const x = b.left;
  const y = b.top;
  const w = b.width;
  const h = b.height;

  const svgOpenTagMatch = svg.match(/<svg[^>]*>/);
  if (!svgOpenTagMatch) throw new Error("No <svg> tag found.");

  let openTag = svgOpenTagMatch[0];
  openTag = setOrInsertAttr(openTag, "viewBox", `${x} ${y} ${w} ${h}`);
  openTag = setOrInsertAttr(openTag, "width", `${w}`);
  openTag = setOrInsertAttr(openTag, "height", `${h}`);

  const svgOut = svg.replace(svgOpenTagMatch[0], openTag);
  await fs.writeFile(svgPath, svgOut, "utf8");

  console.log("Trimmed", svgPath, "→", { viewBox: `${x} ${y} ${w} ${h}` });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

