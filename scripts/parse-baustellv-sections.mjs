/**
 * §-Index aus BaustellV.html für redaktionelle Checkliste.
 * Usage: node scripts/parse-baustellv-sections.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const htmlPath = "c:/Users/akork/OneDrive/Desktop/BaustellV.html";
const outPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "baustellv-sections.json"
);

const html = fs.readFileSync(htmlPath, "utf8");
const plain = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const sections = [];
for (const m of plain.matchAll(/§\s*(\d+[a-z]?)\s+([^§]{3,100}?)(?=§\s*\d|Anhang|$)/gi)) {
  sections.push({ paragraph: m[1], title: m[2].trim().slice(0, 80) });
}

const blogCoverage = {
  hub: "baustellv-einfach-erklaert",
  spokes: {
    "2": "baustellv-vorankuendigung-sige-plan",
    "3": "baustellv-sigeko-koordination-aufgaben",
    "4": "baustellv-sigeko-koordination-aufgaben",
    "5": "sigeko-pflicht-wann-braucht-man-sigeko",
    "6": "baustellv-anhang-ii-gefaehrliche-arbeiten",
    "7": "baustellv-einfach-erklaert",
    anhangII: "baustellv-anhang-ii-gefaehrliche-arbeiten",
    sigeko: "sigeko-pflicht-wann-braucht-man-sigeko",
    dguvV38: "dguv-vorschrift-38-bauarbeiten",
    arbschg8: "arbschg-mehrere-arbeitgeber-zusammenarbeit",
  },
};

const report = {
  source: htmlPath,
  standSnippet: plain.slice(plain.indexOf("Stand"), plain.indexOf("Stand") + 120),
  sectionCount: sections.length,
  sections,
  blogCoverage,
};

fs.writeFileSync(outPath, JSON.stringify(report, null, 2), "utf8");
console.log("Sections:", sections.length);
console.log("Wrote", outPath);
