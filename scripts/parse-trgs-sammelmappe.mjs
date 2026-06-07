import fs from "fs";

const p =
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/09_TRGS_Alle/Sammelmappe1.pdf.html";
const h = fs.readFileSync(p, "utf8");

// Document starts: GMBl header + Technische Regeln table
const plain = h
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n");
const lines = plain
  .split("\n")
  .map((s) =>
    s
      .replace(/&quot;/g, '"')
      .replace(/&amp;/g, "&")
      .replace(/&zwnj;/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  )
  .filter((s) => s.length > 0);

const docs = new Map();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Title cell pattern: "TRGS 400" alone then subtitle on next lines
  const numOnly = line.match(/^TRGS\s+(\d{3,4}[a-z]?)$/i);
  if (numOnly) {
    const parts = [];
    for (let j = i + 1; j < Math.min(i + 8, lines.length); j++) {
      if (/^TRGS\s+\d/i.test(lines[j]) || lines[j].startsWith("Ausgabe:"))
        break;
      if (
        lines[j].length > 8 &&
        !/^Inhalt$/i.test(lines[j]) &&
        !/^Ziel$/i.test(lines[j]) &&
        !/^Anwendungsbereich$/i.test(lines[j])
      ) {
        parts.push(lines[j]);
      }
    }
    if (parts.length) docs.set(numOnly[1], parts.join(" – ").slice(0, 200));
  }

  // Inline: TRGS 555 Betriebsanweisungen...
  const inline = line.match(/^TRGS\s+(\d{3,4}[a-z]?)\s+(.{10,200})$/i);
  if (inline && !inline[2].match(/^(Nummer|Absatz|wurde|ist|gibt|siehe)/i)) {
    const prev = docs.get(inline[1]);
    if (!prev || inline[2].length > prev.length)
      docs.set(inline[1], inline[2].slice(0, 200));
  }
}

// All TRGS numbers mentioned anywhere (for gap analysis)
const allNums = new Set();
const re = /TRGS\s+(\d{3,4}[a-z]?)/gi;
let m;
while ((m = re.exec(h)) !== null) allNums.add(m[1]);

const sorted = [...docs.entries()].sort((a, b) => +a[0] - +b[0]);
console.log("=== DOCUMENTS WITH TITLES (" + sorted.length + ") ===");
for (const [n, t] of sorted) console.log(`TRGS ${n}\t${t}`);

const inSammelOnly = [...allNums]
  .filter((n) => !docs.has(n))
  .sort((a, b) => +a - +b);
console.log("\n=== MENTIONED BUT NO CLEAR TITLE (" + inSammelOnly.length + ") ===");
console.log(inSammelOnly.join(", "));

// Series grouping (BAuA standard)
const series = {
  "200er": [200, 201, 220],
  "400er GBU": [400, 401, 402, 406, 407, 410, 420, 460],
  "500er Schutz": [500, 505, 509, 510, 511, 512, 513, 517, 519, 520, 524, 525, 526, 528, 529, 540],
  "550er Doku": [551, 552, 553, 554, 555, 558, 559, 560, 561],
  "600er": [600],
  "700er Bio/Ex": [710, 720, 721, 722, 723, 724, 725, 726, 727],
  "740er Druckgas": [745, 746],
  "800er Brand": [800],
  "900er Listen": [900, 903, 905, 906, 907, 910],
};

console.log("\n=== SERIES COVERAGE IN SAMMELMAPPE ===");
for (const [name, nums] of Object.entries(series)) {
  const present = nums.filter((n) => allNums.has(String(n)));
  const titled = nums.filter((n) => docs.has(String(n)));
  console.log(
    `${name}: ${present.length}/${nums.length} mentioned, ${titled.length} with title`,
  );
}
