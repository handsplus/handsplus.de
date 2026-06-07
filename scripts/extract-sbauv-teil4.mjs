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

const start = h.indexOf("Teil 4 Hochhäuser");
const end = h.indexOf("Teil 5 Garagen", start);
console.log("TOC:\n", t(h.slice(start, start + 2500)).slice(0, 1800));

const bodyStart = h.indexOf("Die Vorschriften des Teils 4 gelten", start);
const body = t(h.slice(bodyStart > start ? bodyStart : start, end));
console.log("\nBody length:", body.length);

const markers = [
  ["Intro §92", 0, 800],
  ["§93 Begriffe", body.indexOf("Hochhäuser sind"), body.indexOf("Hochhäuser sind") + 1500],
  ["§94 Brandabschnitte", body.indexOf("Hochhäuser sind in Brandabschnitte"), body.indexOf("Hochhäuser sind in Brandabschnitte") + 1800],
  ["§95 Rettungswege", body.indexOf("Für jedes Geschoss"), body.indexOf("Für jedes Geschoss") + 2000],
  ["§99 BMA", body.indexOf("Hochhäuser müssen Brandmeldeanlagen"), body.indexOf("Hochhäuser müssen Brandmeldeanlagen") + 2000],
  ["§102 Aufzüge", body.indexOf("Aufzüge"), body.indexOf("Aufzüge") + 1500],
  ["§115 BSO", body.indexOf("§ 115 Brandschutzordnung"), body.indexOf("§ 115 Brandschutzordnung") + 2000],
  ["§119 Bestand", body.indexOf("bestehenden Hochhäusern"), body.indexOf("bestehenden Hochhäusern") + 1500],
  ["§120 OWi", body.indexOf("§ 120 Ordnungswidrigkeiten"), body.indexOf("§ 120 Ordnungswidrigkeiten") + 1500],
];

for (const [name, from, to] of markers) {
  if (from < 0) continue;
  console.log(`\n===== ${name} =====\n${body.slice(from, to).slice(0, 2800)}\n`);
}
