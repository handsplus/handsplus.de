import fs from "fs";

const h = fs.readFileSync(
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/09_TRGS_Alle/Sammelmappe1.pdf.html",
  "utf8",
);

// Each document often has GMBl header nearby; extract TRGS/TRBS numbers + quoted German title within 3k before/after
const gmblRe = /GMBl[^<]{10,100}/g;
const publications = [];
let m;
while ((m = gmblRe.exec(h)) !== null) {
  const chunk = h.slice(Math.max(0, m.index - 2500), m.index + 8000);
  const text = chunk.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  const nums = [
    ...text.matchAll(/TRBS\s+(\d+)\s*\/?\s*TRGS\s+(\d+)/g),
    ...text.matchAll(/\bTRGS\s+(\d{3,4}[a-z]?)\b/g),
  ];
  const trgsNums = new Set();
  for (const n of nums) {
    if (n[2]) trgsNums.add(n[2]);
    else trgsNums.add(n[1]);
  }
  const titles = [...text.matchAll(/[„""]([^"""]{8,120})["""]/g)].map((t) => t[1]);
  publications.push({
    gmbl: m[0].replace(/\s+/g, " ").slice(0, 90),
    trgs: [...trgsNums].sort((a, b) => +a - +b),
    titles: titles.slice(0, 5),
  });
}

// dedupe by gmbl
const seen = new Set();
const uniq = publications.filter((p) => {
  if (seen.has(p.gmbl)) return false;
  seen.add(p.gmbl);
  return p.trgs.length > 0;
});

console.log("PUBLIKATIONEN / DOKUMENTBLOECKE:", uniq.length, "\n");
for (const p of uniq) {
  console.log(p.gmbl);
  console.log("  TRGS:", p.trgs.join(", "));
  if (p.titles[0]) console.log("  Titel z.B.:", p.titles[0].slice(0, 80));
  console.log("");
}

const allFull = new Set();
for (const p of uniq) for (const t of p.trgs) allFull.add(t);
console.log("UNIQUE TRGS als Dokumentblock:", [...allFull].sort((a,b)=>+a-+b).join(", "));
console.log("Anzahl:", allFull.size);
