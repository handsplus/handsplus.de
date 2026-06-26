/**
 * Ergänzt dünne Blog-Posts (< 250 Wörter) um Praxisabsätze.
 * Usage: node scripts/apply-thin-blog-depth.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { THIN_BLOG_EXPANSIONS } from "./data/thin-blog-expansions.mjs";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "content/blog.ts");

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function countWordsFromContentBlock(contentBlock) {
  const re = /^\s+"((?:\\.|[^"\\])*)"/gm;
  const paras = [];
  let m;
  while ((m = re.exec(contentBlock)) !== null) {
    const p = m[1].replace(/\\"/g, '"');
    if (!p.startsWith("H2::")) paras.push(p);
  }
  return paras
    .join(" ")
    .replace(/\[Link:[^\]]+\]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

function splitPosts(src) {
  const parts = src.split(/\r?\n  \{\r?\n    slug: "/);
  const header = parts[0];
  const posts = parts.slice(1).map((chunk) => {
    const slugEnd = chunk.indexOf('"');
    return { slug: chunk.slice(0, slugEnd), body: chunk.slice(slugEnd + 1) };
  });
  return { header, posts };
}

function joinPosts(header, posts) {
  return (
    header +
    posts.map((p) => `\n  {\n    slug: "${p.slug}"${p.body}`).join("")
  );
}

/** Einfügepunkt: vor Footer, sonst vor letztem Praxis-/Mängel-Abschnitt. */
function findInsertAnchor(contentBlock) {
  const anchors = [
    /\r?\n(      "[^"]*Health and Safety\+[^"]*",)/g,
    /\r?\n(      "H2::Typische Mängel[^"]*",)/g,
    /\r?\n(      "H2::Typische Fehler[^"]*",)/g,
    /\r?\n(      "H2::Typische Gefährdungen[^"]*",)/g,
    /\r?\n(      "H2::Schutzbedürftige Gruppen[^"]*",)/g,
    /\r?\n(      "H2::Umsetzung in der Praxis",)/g,
    /\r?\n(      "H2::[^"]+",)/g,
  ];
  for (const re of anchors) {
    const matches = [...contentBlock.matchAll(re)];
    if (matches.length) return matches[matches.length - 1];
  }
  return null;
}

function applyExpansion(postBody, insert) {
  const contentRe = /(content:\s*\[)([\s\S]*?)(\r?\n    \],\r?\n    faq:)/;
  const cm = postBody.match(contentRe);
  if (!cm) return { body: postBody, ok: false, reason: "no content block" };

  const contentBlock = cm[2];
  if (insert.every((p) => contentBlock.includes(p.slice(0, 40)))) {
    return { body: postBody, ok: false, reason: "already applied" };
  }

  const anchor = findInsertAnchor(contentBlock);
  if (!anchor) {
    return { body: postBody, ok: false, reason: "no insert anchor" };
  }

  const extra = insert.map((p) => `      "${escapeString(p)}",`).join("\n");
  const newContent =
    contentBlock.slice(0, anchor.index) +
    `\n${extra}` +
    contentBlock.slice(anchor.index);

  let newBody = postBody.replace(contentRe, `$1${newContent}$3`);

  if (/dateModified:\s*"/.test(newBody)) {
    newBody = newBody.replace(
      /(dateModified:\s*")[^"]+(")/,
      `$12026-06-26$2`,
    );
  } else {
    newBody = newBody.replace(
      /(date:\s*"[^"]+",)\r?\n/,
      `$1\n    dateModified: "2026-06-26",\n`,
    );
  }

  return { body: newBody, ok: true };
}

const { header, posts } = splitPosts(fs.readFileSync(blogPath, "utf8"));
let changed = 0;
let skipped = 0;

for (const post of posts) {
  const expansion = THIN_BLOG_EXPANSIONS[post.slug];
  if (!expansion) continue;

  const contentMatch = post.body.match(
    /content:\s*\[([\s\S]*?)\r?\n    \],\r?\n    faq:/,
  );
  const wordsBefore = contentMatch
    ? countWordsFromContentBlock(contentMatch[1])
    : 0;

  if (wordsBefore >= 250) {
    console.log("SKIP (already ≥250):", post.slug, wordsBefore);
    skipped++;
    continue;
  }

  const result = applyExpansion(post.body, expansion.insert);
  if (!result.ok) {
    console.warn("SKIP (" + result.reason + "):", post.slug, wordsBefore);
    skipped++;
    continue;
  }

  post.body = result.body;
  changed++;
  const addW = expansion.insert.join(" ").split(/\s+/).length;
  console.log("OK:", post.slug, `(${wordsBefore} → ~${wordsBefore + addW} W)`);
}

fs.writeFileSync(blogPath, joinPosts(header, posts), "utf8");
console.log(`\nGeändert: ${changed}, übersprungen: ${skipped}`);
