#!/usr/bin/env node
/** HTTP-Smoke-Test gegen lokalen Server (Port 3002). */
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const BASE = process.env.QA_BASE_URL ?? "http://localhost:3002";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const blogSrc = readFileSync(join(root, "content/blog.ts"), "utf8");
const blogSlugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const ratgeberSrc = readFileSync(join(root, "content/ratgeber.ts"), "utf8");
const ratgeberSlugs = [...ratgeberSrc.matchAll(/"slug":\s*"([^"]+)"/g)].map((m) => m[1]);

const paths = [
  "/",
  "/wissen",
  "/wissen/blog",
  "/wissen/ratgeber",
  "/wissen/faq",
  "/kontakt",
  "/sigeko",
  "/arbeitsschutz",
  "/sitemap.xml",
  "/robots.txt",
  ...blogSlugs.map((s) => `/wissen/blog/${s}`),
  ...ratgeberSlugs.map((s) => `/wissen/ratgeber/${s}`),
];

const failures = [];
let ok = 0;

for (const path of paths) {
  try {
    const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
    if (res.status >= 200 && res.status < 400) {
      ok++;
    } else {
      failures.push(`${path} → HTTP ${res.status}`);
    }
  } catch (e) {
    failures.push(`${path} → ${e.message}`);
  }
}

console.log(`\n=== HTTP SMOKE (${BASE}) ===\n`);
console.log(`OK: ${ok}/${paths.length}`);
if (failures.length) {
  console.log(`\nFAIL (${failures.length}):`);
  failures.slice(0, 20).forEach((f) => console.log(`  ✗ ${f}`));
  if (failures.length > 20) console.log(`  … und ${failures.length - 20} weitere`);
  process.exit(1);
}
console.log("\nGESAMT: PASS\n");
