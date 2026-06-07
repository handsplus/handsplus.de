import fs from "fs";

const h = fs.readFileSync(
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/09_TRGS_Alle/Sammelmappe1.pdf.html",
  "utf8",
);

// Title pages: <p ...>TRGS NNN</p> (standalone cell)
const docs = [];
const re = /<p class="s\d+"[^>]*>TRGS\s+(\d{3,4}[a-z]?)\s*<\/p>/gi;
let m;
while ((m = re.exec(h)) !== null) {
  const after = h
    .slice(m.index, m.index + 4000)
    .replace(/<[^>]+>/g, "\n")
    .split("\n")
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const title = after.slice(1, 6).join(" – ").slice(0, 150);
  const gmbl = after.find((l) => l.includes("GMBl")) || "";
  docs.push({ num: m[1], title, gmbl, idx: m.index });
}

docs.sort((a, b) => a.idx - b.idx);
console.log("=== VOLLTEXTE IN SAMMELMAPPE (" + docs.length + ") ===\n");
for (const d of docs) {
  console.log(`TRGS ${d.num}\t${d.title}`);
  if (d.gmbl) console.log(`  ${d.gmbl.slice(0, 80)}`);
}

const fullSet = new Set(docs.map((d) => d.num));
const mentioned = new Set();
const re2 = /TRGS\s+(\d{3,4}[a-z]?)/gi;
while ((m = re2.exec(h)) !== null) mentioned.add(m[1]);

const xrefOnly = [...mentioned]
  .filter((n) => !fullSet.has(n))
  .sort((a, b) => +a - +b);

console.log("\n=== NUR QUERVERWEIS (nicht als Volldokument) ===");
console.log(xrefOnly.join(", "));
console.log("Anzahl:", xrefOnly.length);
