/**
 * Apply topic-specific FAQ and Vorbereitung fixes for NACHBESSERN blog slugs.
 * Usage: node scripts/apply-nachbessern-fixes.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "content/blog.ts");
const fixesPath = path.join(path.dirname(fileURLToPath(import.meta.url)), "nachbessern-fixes.json");

const fixes = JSON.parse(fs.readFileSync(fixesPath, "utf8"));
const BEGEHUNGS_RE =
  /^Begehungs-Check zu .+: Dokumentation und Maßnahmenplan aktuell\? Unterweisung nachweisbar\? Verantwortliche und Fristen festgelegt\? Abstimmung mit \[Link: \/wissen\/blog\/bestellung-fachkraft-arbeitssicherheit\|Fachkraft für Arbeitssicherheit\] und Betriebsarzt\.$/;

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatFaq(faq) {
  return faq
    .map(
      (f) => `      {
        question: "${escapeString(f.q)}",
        answer:
          "${escapeString(f.a)}",
      }`
    )
    .join(",\n");
}

let src = fs.readFileSync(blogPath, "utf8");
let changed = 0;

for (const [slug, fix] of Object.entries(fixes)) {
  const slugRe = new RegExp(
    `(slug: "${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?faq:\\s*\\[)[\\s\\S]*?(\\n    \\],\\n  \\})`,
    "m"
  );
  const m = src.match(slugRe);
  if (!m) {
    console.warn("SKIP (no match):", slug);
    continue;
  }

  const newFaq = `$1\n${formatFaq(fix.faq)},\n    ],\n  }`;
  src = src.replace(slugRe, newFaq);

  const blockRe = new RegExp(
    `(slug: "${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?content:\\s*\\[[\\s\\S]*?)\\n    \\],`,
    "m"
  );
  const bm = src.match(blockRe);
  if (!bm) continue;

  let contentBlock = bm[1];
  let contentChanged = false;

  if (contentBlock.includes("H2::Typische Mängel und Checkliste")) {
    contentBlock = contentBlock.replace(
      /H2::Typische Mängel und Checkliste/g,
      "H2::Typische Mängel und Vorbereitung"
    );
    contentChanged = true;
  }

  if (fix.vorbereitung) {
    const lines = contentBlock.split("\n");
    const out = [];
    for (const line of lines) {
      const inner = line.match(/^\s+"((?:\\.|[^"\\])*)"\s*,?\s*$/)?.[1]?.replace(/\\"/g, '"');
      if (inner && BEGEHUNGS_RE.test(inner)) {
        out.push(`      "${escapeString(fix.vorbereitung)}",`);
        contentChanged = true;
      } else if (inner && fix.bodyReplace?.[inner]) {
        out.push(`      "${escapeString(fix.bodyReplace[inner])}",`);
        contentChanged = true;
      } else {
        out.push(line);
      }
    }
    contentBlock = out.join("\n");

    for (const [from, to] of Object.entries(fix.bodyReplace || {})) {
      if (contentBlock.includes(`"${escapeString(from)}"`)) continue;
      if (contentBlock.includes(from)) {
        contentBlock = contentBlock.split(from).join(to);
        contentChanged = true;
      }
    }
  }

  if (fix.bodySub) {
    for (const { from, to } of fix.bodySub) {
      if (contentBlock.includes(from)) {
        contentBlock = contentBlock.replace(from, to);
        contentChanged = true;
      }
    }
  }

  if (contentChanged) {
    src = src.replace(blockRe, `${contentBlock}\n    ],`);
  }

  changed++;
  console.log("OK:", slug);
}

fs.writeFileSync(blogPath, src);
console.log(`\nApplied ${changed}/${Object.keys(fixes).length} fixes.`);
