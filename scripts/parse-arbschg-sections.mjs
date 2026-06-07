/**
 * §-Index aus 09_ArbSchG.html für redaktionelle Checkliste.
 * Usage: node scripts/parse-arbschg-sections.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const htmlPath =
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/02_Empfohlen_Arbeitsschutz_Personal/09_ArbSchG.html";
const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "arbschg-sections.json"
);

const html = fs.readFileSync(htmlPath, "utf8");
const plain = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const sections = [];
for (const m of plain.matchAll(/§\s*(\d+[a-z]?)\s+([^§]{3,120}?)(?=§\s*\d|$)/gi)) {
  sections.push({ paragraph: m[1], title: m[2].trim().slice(0, 80) });
}

const blogCoverage = {
  hub: "arbeitsschutzgesetz-arbschg-uebersicht",
  spokes: {
    "5": "gefaehrdungsbeurteilung-ablauf",
    "6": "gefaehrdungsbeurteilung-ablauf",
    "8": "arbschg-mehrere-arbeitgeber-zusammenarbeit",
    "10": "arbschg-erste-hilfe-notfallmassnahmen",
    "12": "unterweisung-arbeitsschutz-fristen",
    "13": "pflichtuebertragung-arbeitsschutz",
    "21": "arbschg-gewerbeaufsicht-begehung-nrw",
    "22": "arbschg-gewerbeaufsicht-begehung-nrw",
    "25": "strafen-arbeitsschutz",
    "26": "strafen-arbeitsschutz",
  },
};

const report = {
  source: htmlPath,
  standSnippet: plain.slice(0, 200),
  sectionCount: sections.length,
  sections,
  blogCoverage,
  uncovered: sections
    .map((s) => s.paragraph.replace(/a$/, "a"))
    .filter((p) => !blogCoverage.spokes[p] && !["1", "2", "3", "4"].includes(p))
    .slice(0, 15),
};

fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
console.log("Sections:", sections.length);
console.log("Wrote", outPath);
