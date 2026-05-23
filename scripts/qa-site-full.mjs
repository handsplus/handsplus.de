#!/usr/bin/env node
/**
 * Vollständiger Qualitätscheck: Links, Cluster, Featured, Duplikate.
 */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const warnings = [];
const ok = [];

function fail(msg) {
  failures.push(msg);
}
function warn(msg) {
  warnings.push(msg);
}
function pass(msg) {
  ok.push(msg);
}

function read(rel) {
  return readFileSync(join(root, rel), "utf8");
}

function walk(dir, out = [], skip = new Set(["node_modules", ".next", "SEO-Masterplan"])) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (skip.has(name)) continue;
      walk(p, out, skip);
    } else if (/\.(tsx?|ts)$/.test(name)) out.push(p);
  }
  return out;
}

const blogSrc = read("content/blog.ts");
const blogSlugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const ratgeberSrc = read("content/ratgeber.ts");
const ratgeberSlugs = [...ratgeberSrc.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);

const clusterSrc = read("content/blogClusters.ts");
const blogPillarBySlug = Object.fromEntries(
  [...clusterSrc.matchAll(/^\s*"([a-z0-9-]+)":\s*"([^"]+)"/gm)].map((m) => [m[1], m[2]])
);
const clusterSlugs = Object.keys(blogPillarBySlug);
const pillarSlugs = [...new Set(Object.values(blogPillarBySlug))];

const faqSrc = read("content/faq.ts");
const faqIds = [...faqSrc.matchAll(/id:\s*"([^"]+)"/g)].map((m) => m[1]);

const wissenSrc = read("app/wissen/page.tsx");
const featuredBlogSlugs = [
  ...wissenSrc.match(/featuredBlogSlugs[\s\S]*?\[([\s\S]*?)\];/)[1].matchAll(/"([^"]+)"/g),
].map((m) => m[1]);
const featuredFaqIds = [
  ...wissenSrc.match(/featuredFaqIds[\s\S]*?\[([\s\S]*?)\];/)[1].matchAll(/"([^"]+)"/g),
].map((m) => m[1]);

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

const contentFiles = ["content", "components", "app"].flatMap((d) => walk(join(root, d)));
const internalLinks = [];
const externalLinks = [];

for (const file of contentFiles) {
  const rel = file.slice(root.length + 1).replace(/\\/g, "/");
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/\[Link:\s*([^\]]+)\]/g)) {
    const raw = m[1].trim();
    if (/^https?:\/\//i.test(raw)) {
      externalLinks.push({ file: rel, url: raw.split("|")[0].trim() });
    } else {
      const path = raw.split("|")[0].trim();
      if (path.startsWith("/")) {
        internalLinks.push({ file: rel, path });
      }
    }
  }
}

// --- Checks ---
if (blogSlugs.length !== new Set(blogSlugs).size) fail("Doppelte Blog-Slugs in blog.ts");
else pass(`${blogSlugs.length} Blog-Slugs, alle eindeutig`);

const missingCluster = blogSlugs.filter((s) => !clusterSlugs.includes(s));
if (missingCluster.length) fail(`Blogs ohne Cluster: ${missingCluster.join(", ")}`);
else pass("Alle Blogs in blogClusters.ts");

const orphanCluster = clusterSlugs.filter((s) => !blogSlugs.includes(s));
if (orphanCluster.length) warn(`Cluster-Einträge ohne Blog: ${orphanCluster.join(", ")}`);

const invalidPillars = pillarSlugs.filter((p) => !ratgeberSlugs.includes(p));
if (invalidPillars.length) fail(`Unbekannte Pillar-Slugs: ${invalidPillars.join(", ")}`);
else pass(`${pillarSlugs.length} Cluster-Pillars, alle gültig`);

const deadInternal = [];
const seenDead = new Set();
for (const l of internalLinks) {
  const p = l.path.split("#")[0];
  if (!knownRoutes.has(p)) {
    const key = `${p} @ ${l.file}`;
    if (!seenDead.has(key)) {
      seenDead.add(key);
      deadInternal.push(l);
    }
  }
}
if (deadInternal.length) {
  for (const l of deadInternal) fail(`Toter Link ${l.path} in ${l.file}`);
} else pass(`${internalLinks.length} interne [Link:]-Referenzen, alle gültig`);

for (const s of featuredBlogSlugs) {
  if (!blogSlugs.includes(s)) fail(`Featured Blog fehlt: ${s}`);
}
if (!featuredBlogSlugs.some((s) => !blogSlugs.includes(s))) pass("Featured Blog-Slugs auf /wissen");

for (const id of featuredFaqIds) {
  if (!faqIds.includes(id)) fail(`Featured FAQ fehlt: ${id}`);
}
if (!featuredFaqIds.some((id) => !faqIds.includes(id))) pass("Featured FAQ-IDs auf /wissen");

if (ratgeberSlugs.length < 6) warn(`Nur ${ratgeberSlugs.length} Ratgeber-Pillars`);
else pass(`${ratgeberSlugs.length} Ratgeber-Pillars`);

console.log("\n=== SITE QA (scripts/qa-site-full.mjs) ===\n");
console.log(`OK (${ok.length}):`);
ok.forEach((m) => console.log(`  ✓ ${m}`));
if (warnings.length) {
  console.log(`\nWARN (${warnings.length}):`);
  warnings.forEach((m) => console.log(`  ⚠ ${m}`));
}
if (failures.length) {
  console.log(`\nFAIL (${failures.length}):`);
  failures.forEach((m) => console.log(`  ✗ ${m}`));
  process.exit(1);
}
console.log(`\nExterne Links: ${externalLinks.length} | Interne Links: ${internalLinks.length}`);
console.log("\nGESAMT: PASS\n");
