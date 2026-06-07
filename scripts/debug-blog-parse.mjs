import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = fs.readFileSync(path.join(root, "content/blog.ts"), "utf8");
const slugCount = (src.match(/^\s+slug:/gm) || []).length;
const postRe = /  \{\n    slug: "[^"]+",[\s\S]*?\n  \}(?=,\n  \{|\n\];)/g;
const matches = [...src.matchAll(postRe)];
console.log("slug lines:", slugCount);
console.log("regex matches:", matches.length);
const matchedSlugs = matches.map((m) => m[0].match(/slug: "([^"]+)"/)?.[1]);
const allSlugs = [...src.matchAll(/^\s+slug: "([^"]+)"/gm)].map((m) => m[1]);
const missing = allSlugs.filter((s) => !matchedSlugs.includes(s));
console.log("missing from regex:", missing.length);
console.log(missing.slice(0, 20).join("\n"));

// test one post
import { createRequire } from "module";
// manual test process on getraenke
const block = matches[0][0];
const title = block.match(/title:\s*\n\s*"((?:\\.|[^"\\])*)"/)?.[1];
console.log("first slug", block.match(/slug: "([^"]+)"/)?.[1]);
console.log("title match", !!title);
