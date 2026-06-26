import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "content/blog.ts"), "utf8");

const slugMatches = [...src.matchAll(/slug:\s*"([^"]+)"/g)];
console.log("Total posts:", slugMatches.length);

const blocks = src.split(/\r?\n  \{\r?\n    slug:/).slice(1);
const stats = blocks.map((b) => {
  const slug = b.match(/"([^"]+)"/)?.[1];
  const contentMatch = b.match(/content:\s*\[([\s\S]*?)\n    \],/);
  const paras = [];
  if (contentMatch) {
    const re = /^\s+"((?:\\.|[^"\\])*)"/gm;
    let m;
    while ((m = re.exec(contentMatch[1])) !== null) {
      paras.push(m[1].replace(/\\"/g, '"'));
    }
  }
  const h2 = paras.filter((p) => p.startsWith("H2::")).length;
  const words = paras
    .filter((p) => !p.startsWith("H2::"))
    .join(" ")
    .replace(/\[Link:[^\]]+\]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  const excerpt = b.match(/excerpt:\s*\n\s*"([^"]+)"/)?.[1] ?? "";
  const faqCount = (b.match(/question:/g) || []).length;
  const hasGeo = /Köln|NRW/i.test(excerpt) || /Köln|NRW/i.test(paras.slice(0, 2).join(" "));
  return { slug, paras: paras.length, h2, words, faqCount, hasGeo, excerptLen: excerpt.length };
});

const noFaq = stats.filter((s) => s.faqCount === 0);
const short = stats.filter((s) => s.words < 500);
const noH2 = stats.filter((s) => s.h2 === 0);
const noGeo = stats.filter((s) => !s.hasGeo);
const sorted = stats.map((s) => s.words).sort((a, b) => a - b);

console.log("No FAQ:", noFaq.length);
console.log("Under 500 words:", short.length);
console.log("No H2:", noH2.length);
console.log("No Köln/NRW:", noGeo.length);
console.log("Median words:", sorted[Math.floor(sorted.length / 2)]);
console.log("\nNo FAQ slugs:", noFaq.map((s) => s.slug).join(", "));
fs.writeFileSync(
  path.join(root, "scripts/blog-quality-audit.json"),
  JSON.stringify({ stats, noFaq, short, noH2, noGeo }, null, 2)
);
console.log("\nWrote scripts/blog-quality-audit.json");
