#!/usr/bin/env node
/** Prüft, dass Seitentitel nach Layout-Template nicht doppelt „| H&S+“ enthalten. */
import { readFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BRAND_TEMPLATE_SUFFIX = " | H&S+";

function normalizePageTitle(title) {
  let t = title.trim();
  while (/\s\|\s*H&S\+\s*$/i.test(t)) {
    t = t.replace(/\s\|\s*H&S\+\s*$/i, "").trim();
  }
  t = t.replace(/\s\|\s*handsplus\.de\s*$/i, "").trim();
  return t;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(p, out);
    } else if (/page\.tsx$/.test(name)) out.push(p);
  }
  return out;
}

const failures = [];

for (const file of walk(join(root, "app"))) {
  const rel = file.slice(root.length + 1).replace(/\\/g, "/");
  const src = readFileSync(file, "utf8");
  for (const m of src.matchAll(/title:\s*"([^"]+)"/g)) {
    const raw = m[1];
    const segment = normalizePageTitle(raw);
    const htmlTitle = `${segment}${BRAND_TEMPLATE_SUFFIX}`;
    if (htmlTitle.includes("| H&S+ | H&S+")) {
      failures.push(`${rel}: „${htmlTitle}“`);
    }
  }
}

console.log("\n=== TITLE BRAND QA ===\n");
if (failures.length) {
  failures.forEach((f) => console.log(`  ✗ ${f}`));
  process.exit(1);
}
console.log("  ✓ Kein doppeltes „| H&S+“ in Seitentiteln");
console.log("\nGESAMT: PASS\n");
