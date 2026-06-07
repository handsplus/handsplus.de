import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogSrc = fs.readFileSync(path.join(root, "content/blog.ts"), "utf8");
const clusterSrc = fs.readFileSync(path.join(root, "content/blogClusters.ts"), "utf8");
const slugs = [...blogSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const mapped = new Set([...clusterSrc.matchAll(/"([^"]+)":\s*"/g)].map((m) => m[1]));
const unmapped = slugs.filter((s) => !mapped.has(s));
console.log("Unmapped slugs:", unmapped.length);
console.log(unmapped.join("\n"));
