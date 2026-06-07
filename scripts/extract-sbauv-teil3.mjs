import fs from "fs";

const h = fs.readFileSync(
  "C:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/11_Brandschutz-NRW/01_NRW_Landesrecht_Gesetze_VOs/Sammelmappe1.pdf.html",
  "utf8"
);

function t(c) {
  return c
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&zwnj;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const start = h.indexOf("Teil 3 Verkaufsstätten");
const end = h.indexOf("Teil 4 Hochhäuser", start);
console.log("TOC:\n", t(h.slice(start, start + 3500)).slice(0, 2000));

const bodyStart = h.indexOf("Die Vorschriften des Teils 3 gelten", start);
const bodyEnd = end;
const body = t(h.slice(bodyStart > start ? bodyStart : start, bodyEnd));
console.log("\nBody length:", body.length);

// Print key sections by content markers
const markers = [
  ["§60 Anwendung", body.slice(0, 600)],
  ["§61 Begriffe", body.indexOf("Verkaufsstätten sind"), body.indexOf("Verkaufsstätten sind") + 1200],
  ["§65 Brandabschnitte", body.indexOf("Brandabschnitte"), body.indexOf("Brandabschnitte") + 1500],
  ["§69 Rettungswege", body.indexOf("Für jeden Verkaufsraum"), body.indexOf("Für jeden Verkaufsraum") + 1800],
  ["§72 Ladenstraßen", body.indexOf("Ladenstraßen"), body.indexOf("Ladenstraßen") + 1500],
  ["§79 Feuerlösch", body.indexOf("Versammlungsstätten mit Verkaufsräumen"), body.indexOf("Versammlungsstätten mit Verkaufsräumen") + 2000],
  ["§86 BSO", body.indexOf("§ 86 Brandschutzordnung"), body.indexOf("§ 86 Brandschutzordnung") + 2000],
  ["§90 Bestand", body.indexOf("bestehenden Verkaufsstätten"), body.indexOf("bestehenden Verkaufsstätten") + 1500],
];

for (const item of markers) {
  if (typeof item[1] === "number" && item[1] < 0) continue;
  const text = typeof item[1] === "string" ? item[1] : body.slice(item[1], item[2]);
  console.log(`\n===== ${item[0]} =====\n${text.slice(0, 2500)}\n`);
}

// Full §60-90 scan for "in Kraft am 15. November 2019." blocks
let idx = 0;
let n = 0;
while ((idx = body.indexOf("in Kraft am 15. November 2019.", idx)) >= 0 && n < 25) {
  const chunk = body.slice(idx + 32, idx + 1200);
  if (chunk.length > 100 && !chunk.startsWith("§ 5 Absatz")) {
    console.log(`\n--- Block ${++n} ---\n${chunk.slice(0, 900)}`);
  }
  idx += 33;
}
