import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = readFileSync(join(root, "content", "blog.ts"), "utf8");

const posts = [];
const slugRe = /slug: "([^"]+)"/g;
const slugs = [...src.matchAll(slugRe)].map((m) => m[1]);

// Parse each post block roughly by splitting on slug entries
for (const slug of slugs) {
  const start = src.indexOf(`slug: "${slug}"`);
  const nextSlug = src.indexOf('slug: "', start + 10);
  const block = nextSlug > 0 ? src.slice(start, nextSlug) : src.slice(start);
  const date = block.match(/date: "([^"]+)"/)?.[1];
  const contentStart = block.indexOf("content: [");
  const contentEnd = block.indexOf("],\n    faq:") > 0 ? block.indexOf("],\n    faq:") : block.indexOf("],\n  },");
  const contentBlock = block.slice(contentStart, contentEnd);
  const paragraphs = [...contentBlock.matchAll(/"([^"]*(?:\\.[^"]*)*)"/g)]
    .map((m) => m[1].replace(/\\"/g, '"'))
    .filter((p) => p.length > 80 && !p.startsWith("http"));
  posts.push({ slug, date, paragraphs });
}

posts.sort((a, b) => a.date.localeCompare(b.date));
const last20 = posts.slice(-20);

function scoreParagraph(p) {
  let score = 0;
  const issues = [];
  if (p.includes("→")) {
    score += 3;
    issues.push("Pfeil-Liste");
  }
  if (/\b(GBU|BSO|BSB|BMA|BMZ|RWA|SAA|IST|BV-Schau|ArbSchG|BetrSichV|ASA|SiGeKo|SBauV|BauO)\b/.test(p)) {
    score += 1;
  }
  if ((p.match(/;/g) || []).length >= 3) {
    score += 2;
    issues.push("viele Semikolons");
  }
  if ((p.match(/:/g) || []).length >= 4 && p.length < 400) {
    score += 2;
    issues.push("Stichwort-Ketten");
  }
  if (p.includes("…") || p.includes(" ist nicht dasselbe") || p.includes(" – ") && p.split(" – ").length > 3) {
    score += 1;
  }
  const sentences = p.split(/[.!?]\s+/).filter(Boolean);
  const avgLen = p.length / Math.max(sentences.length, 1);
  if (sentences.length >= 4 && avgLen < 90) {
    score += 2;
    issues.push("kurze Satzfragmente");
  }
  if (/^\([^)]+\)\s/.test(p) || /\(\d+\)/.test(p) && p.split(/\(\d+\)/).length > 3) {
    score += 1;
  }
  return { score, issues };
}

console.log("=== Letzte 20 Blogbeiträge – Stil-Check ===\n");
for (const post of last20) {
  let total = 0;
  const flagged = [];
  for (const p of post.paragraphs) {
    const { score, issues } = scoreParagraph(p);
    if (score >= 3) {
      total += score;
      flagged.push({ preview: p.slice(0, 120) + "…", issues, score });
    }
  }
  const level = total >= 8 ? "KRITISCH" : total >= 4 ? "AUFFÄLLIG" : total >= 1 ? "OK mit Stellen" : "OK";
  console.log(`${post.date}  ${post.slug}`);
  console.log(`  → ${level} (Score ${total}, ${flagged.length} Absätze)`);
  for (const f of flagged.slice(0, 3)) {
    console.log(`     • [${f.issues.join(", ")}] ${f.preview}`);
  }
  console.log("");
}
