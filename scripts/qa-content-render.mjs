#!/usr/bin/env node
/**
 * Prüft, dass [Link:]-Markup nirgends als Rohtext erscheinen kann:
 * - Blog-Seite nutzt ContentText
 * - Ratgeber nutzt ContentBody
 * - Alle [Link:]-Ziele in content/ sind gültig
 * - Kein Content-String würde unverlinktes [Link:]-Markup zurücklassen
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const ok = [];

function fail(msg) {
  failures.push(msg);
}
function pass(msg) {
  ok.push(msg);
}

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

const blogSrc = read("content/blog.ts");
const ratgeberSrc = read("content/ratgeber.ts");
const blogSlugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const ratgeberSlugs = [...ratgeberSrc.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);

const knownRoutes = new Set([
  "/",
  "/kontakt",
  "/impressum",
  "/ueber-uns",
  "/arbeitsschutz",
  "/brandschutz",
  "/sigeko",
  "/leistungen",
  "/elektrosicherheit",
  "/managementsysteme",
  "/schulungen",
  "/wissen",
  "/wissen/blog",
  "/wissen/ratgeber",
  "/wissen/faq",
  "/wissen/glossar",
  "/wissen/checklisten",
  "/wissen/rechner",
  ...blogSlugs.map((s) => `/wissen/blog/${s}`),
  ...ratgeberSlugs.map((s) => `/wissen/ratgeber/${s}`),
]);

function isLinkable(href) {
  const path = href.trim().split("#")[0];
  return /^https?:\/\//i.test(path) || knownRoutes.has(path);
}

function collectLinkStrings(src, file) {
  const out = [];
  for (const m of src.matchAll(/"(?:[^"\\]|\\.)*"/g)) {
    const str = m[0].slice(1, -1);
    if (str.includes("[Link:")) out.push({ file, text: str });
  }
  return out;
}

const contentStrings = [
  ...collectLinkStrings(blogSrc, "content/blog.ts"),
  ...collectLinkStrings(ratgeberSrc, "content/ratgeber.ts"),
];

const unlinkable = [];
for (const { file, text } of contentStrings) {
  for (const m of text.matchAll(/\[Link:\s*([^\]]+)\]/g)) {
    const raw = m[1].trim();
    const href = (raw.includes("|") ? raw.slice(0, raw.indexOf("|")) : raw).trim();
    if (!isLinkable(href)) {
      unlinkable.push({ file, href, snippet: text.slice(0, 80) });
    }
  }
}

if (unlinkable.length) {
  for (const u of unlinkable) {
    fail(`Unlinkbares [Link:] ${u.href} in ${u.file}`);
  }
} else {
  pass(`${contentStrings.length} Content-Strings mit [Link:] – alle Ziele gültig`);
}

const blogPage = read("app/wissen/blog/[slug]/page.tsx");
if (!blogPage.includes("ContentText")) {
  fail("app/wissen/blog/[slug]/page.tsx: ContentText fehlt");
} else if (/\{paragraph\}\s*<\/p>/.test(blogPage) || /<p[^>]*>\s*\{paragraph\}\s*<\/p>/.test(blogPage)) {
  fail("app/wissen/blog/[slug]/page.tsx: rendert {paragraph} ohne ContentText");
} else {
  pass("Blog-Artikelseite nutzt ContentText");
}

const ratgeberPage = read("app/wissen/ratgeber/[slug]/page.tsx");
if (!ratgeberPage.includes("ContentBody")) {
  fail("app/wissen/ratgeber/[slug]/page.tsx: ContentBody fehlt");
} else if (!ratgeberPage.includes("ContentText")) {
  fail("app/wissen/ratgeber/[slug]/page.tsx: ContentText für FAQ fehlt");
} else {
  pass("Ratgeber-Seite nutzt ContentBody + ContentText");
}

const contentBody = read("components/ContentBody.tsx");
if (!contentBody.includes("ContentText")) {
  fail("components/ContentBody.tsx: ContentText fehlt");
} else {
  pass("ContentBody verarbeitet alle Absätze mit ContentText");
}

const faqPage = read("app/wissen/faq/page.tsx");
if (!faqPage.includes("ContentText")) {
  fail("app/wissen/faq/page.tsx: ContentText fehlt");
} else {
  pass("FAQ-Seite nutzt ContentText");
}

console.log("\n=== CONTENT RENDER QA ===\n");
ok.forEach((m) => console.log(`  ✓ ${m}`));
if (failures.length) {
  console.log(`\nFAIL (${failures.length}):`);
  failures.forEach((m) => console.log(`  ✗ ${m}`));
  process.exit(1);
}
console.log("\nGESAMT: PASS\n");
