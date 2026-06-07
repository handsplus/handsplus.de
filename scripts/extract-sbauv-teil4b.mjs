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

// Find § 92 body - search after Teil 4 marker in full doc
const teil4 = h.indexOf("Teil 4 Hochhäuser");
const teil5 = h.indexOf("Teil 5 Garagen", teil4);
console.log("Teil4 pos", teil4, "Teil5 pos", teil5, "len", teil5 - teil4);

// Search for § 92 Anwendungsbereich law text in range
const slice = h.slice(teil4, teil5);
const anchors = [
  "Anwendungsbereich",
  "Hochhäuser sind",
  "Gebäude mit einer Höhe",
  "22 m",
  "60 m",
  "Feuerwehraufzüge",
  "Sicherheitstreppenräume",
  "Druckbelüftung",
  "Brandmeldeanlagen",
  "Rauchableitung",
  "bestehenden Hochhäuser",
];
for (const a of anchors) {
  const i = slice.indexOf(a);
  if (i >= 0) {
    console.log(`\n--- ${a} @ ${i} ---\n${t(slice.slice(i - 50, i + 900)).slice(0, 850)}`);
  }
}

// Try finding body start like other Teile
const bodyMarkers = [
  "(1) Die Vorschriften",
  "Die Vorschriften des Teils 4",
  "§ 92 Anwendungsbereich",
  "Hochhäuser im Sinne",
  "Höhe nach § 2",
];
for (const m of bodyMarkers) {
  const i = h.indexOf(m, teil4 - 5000);
  if (i >= 0 && i < teil5 + 50000) console.log("Body marker:", m, "@", i, ":", t(h.slice(i, i + 400)));
}
