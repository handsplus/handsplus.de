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

const bodyStart = h.indexOf("Die Vorschriften des Teils 4 regeln");
const bodyEnd = h.indexOf("Teil 5 Garagen", bodyStart);
const body = t(h.slice(bodyStart, bodyEnd));

const keys = [
  "Tragende Wände",
  "Brandabschnitte",
  "Für jedes Geschoss",
  "Notwendige Treppenräume",
  "Sicherheitstreppenräume",
  "Druckbelüftungsanlagen müssen",
  "Feuerlöschanlagen",
  "Hochhäuser müssen Brandmeldeanlagen",
  "Hochhäuser müssen selbsttätige",
  "bestehenden Hochhäuser",
];
for (const k of keys) {
  const i = body.indexOf(k);
  if (i >= 0) console.log(`\n=== ${k} ===\n${body.slice(i, i + 2000)}\n`);
}
