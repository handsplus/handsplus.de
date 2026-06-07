import fs from "fs";

const p =
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/10_DGUV-Vorschriften/Sammelmappe1.pdf.html";
const h = fs.readFileSync(p, "utf8");

// Cover pattern: number + "DGUV Vorschrift N" + subtitle lines
const coverRe =
  /class="s1"[^>]*>(?:<a[^>]*>[\s\S]*?<\/a>)?(\d+)<\/p><p class="s2"[^>]*>DGUV Vorschrift (\d+)<\/p><p[^>]*><br\/><\/p><p class="s3"[^>]*>(?:<a[^>]*>[\s\S]*?<\/a>)?([^<]*)<\/p><p class="s4"[^>]*>([^<]+)/g;

const covers = [];
let m;
while ((m = coverRe.exec(h))) {
  covers.push({
    mappe: m[1],
    nr: m[2],
    line1: m[3].replace(/\u200c/g, "").trim(),
    line2: m[4].trim(),
  });
}

console.log("=== Volltext-Titel (Cover-Seiten) ===");
console.log("Anzahl:", covers.length);
for (const c of covers) {
  console.log(`V${c.nr}: ${c.line1} – ${c.line2}`);
}

// DGUV Information / Regel / Grundsatz
const infoRe = /DGUV (Information|Regel|Grundsatz) ([0-9][0-9-]{0,15})/g;
const infos = new Map();
while ((m = infoRe.exec(h))) {
  const key = `${m[1]} ${m[2]}`;
  if (!infos.has(key)) infos.set(key, 0);
  infos.set(key, infos.get(key) + 1);
}
console.log("\n=== DGUV Information/Regel/Grundsatz (Erwähnungen) ===");
console.log("Unique:", infos.size);
[...infos.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 40)
  .forEach(([k, n]) => console.log(`${k}: ${n}x`));

// Rough size per Vorschrift (chars between covers)
console.log("\n=== Dateigröße ===");
console.log("HTML chars:", h.length);
