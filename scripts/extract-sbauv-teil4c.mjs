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

const phrases = [
  "Hochhäuser im Sinne",
  "Hochhäuser sind Gebäude",
  "Höhe nach § 2 Absatz 3",
  "Feuerwehraufzüge müssen",
  "Feuerwehraufzüge sind",
  "Sicherheitstreppenräume müssen",
  "Druckbelüftungsanlagen müssen",
  "Hochhäuser müssen Brandmeldeanlagen",
  "Hochhäuser müssen Feuerlöschanlagen",
  "Zufahrten, Durchfahrten, Bewegungsflächen",
  "Erleichterungen für Hochhäuser",
  "bestehenden Hochhäusern",
  "§ 92 ",
  "Teil 4 gelten",
  "Anwendungsbereich Fußnoten zu § 92",
];
for (const p of phrases) {
  let idx = 0;
  let count = 0;
  while ((idx = h.indexOf(p, idx)) >= 0 && count < 2) {
    console.log(`\n=== ${p} @ ${idx} ===\n${t(h.slice(idx, idx + 1200)).slice(0, 1000)}`);
    idx += p.length;
    count++;
  }
  if (count === 0) console.log(p + ": NOT FOUND");
}
