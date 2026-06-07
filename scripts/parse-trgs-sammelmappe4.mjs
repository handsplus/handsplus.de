import fs from "fs";

const h = fs.readFileSync(
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/09_TRGS_Alle/Sammelmappe1.pdf.html",
  "utf8",
);

const plain = h
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n");
const lines = plain
  .split("\n")
  .map((s) => s.replace(/\s+/g, " ").trim())
  .filter((s) => s.length > 0);

const fullDocs = [];

for (let i = 0; i < lines.length; i++) {
  const mo = lines[i].match(/^TRGS\s+(\d{3,4}[a-z]?)$/i);
  if (!mo) continue;
  const block = lines.slice(i, i + 80).join(" ");
  const isBoilerplate =
    block.includes("Die Technischen Regeln") &&
    (block.includes("Inhalt") || block.includes("Zielstellung") || block.includes("Anwendungsbereich"));
  if (!isBoilerplate) continue;
  // extract German subtitle if present (quoted title after TRGS in nearby lines)
  let subtitle = "";
  for (let j = i + 1; j < Math.min(i + 15, lines.length); j++) {
    const q = lines[j].match(/[„""]([^"""]{10,100})["""]/);
    if (q) {
      subtitle = q[1];
      break;
    }
  }
  const gmbl = lines.slice(i, i + 30).find((l) => l.includes("GMBl")) || "";
  if (!fullDocs.some((d) => d.num === mo[1] && Math.abs(d.line - i) < 5)) {
    fullDocs.push({ num: mo[1], line: i, subtitle, gmbl });
  }
}

fullDocs.sort((a, b) => +a.num - +b.num);

console.log("VOLLTEXTE (robust):", fullDocs.length);
for (const d of fullDocs) {
  console.log(
    `TRGS ${d.num.padStart(3)}${d.subtitle ? " – " + d.subtitle.slice(0, 70) : ""}${d.gmbl ? " | " + d.gmbl.slice(0, 50) : ""}`,
  );
}

const mentioned = new Set();
const re = /TRGS\s+(\d{3,4}[a-z]?)/gi;
let m;
while ((m = re.exec(h)) !== null) mentioned.add(m[1]);

const fullSet = new Set(fullDocs.map((d) => d.num));
console.log(
  "\nNur Querverweis:",
  [...mentioned]
    .filter((n) => !fullSet.has(n))
    .sort((a, b) => +a - +b)
    .join(", "),
);
