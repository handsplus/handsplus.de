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

// Find Teil 2 body - search for § 47 Anwendungsbereich with actual law text
const anchors = [
  "Die Vorschriften des Teils 2 gelten",
  "Beherbergungsstätten sind bauliche Anlagen",
  "Beherbergungsstätte ist",
  "Gastbetten",
  "mehr als zwölf Gastbetten",
];
for (const a of anchors) {
  const idx = h.indexOf(a);
  if (idx >= 0) console.log(a, "@", idx, ":", t(h.slice(idx - 100, idx + 500)).slice(0, 400));
}

const bodyStart = h.indexOf("Die Vorschriften des Teils 2 gelten");
const bodyEnd = h.indexOf("Teil 3 Verkaufsstätten", bodyStart);
const body = t(h.slice(bodyStart, bodyEnd));
console.log("\nBody length:", body.length);

function extractSection(n, titleStart) {
  const idx = body.indexOf(`§ ${n} ${titleStart}`);
  if (idx < 0) return null;
  const nextN = n + 1;
  let end = body.length;
  for (let m = nextN; m <= 60; m++) {
    const ni = body.indexOf(`§ ${m} `, idx + 10);
    if (ni > idx) {
      end = ni;
      break;
    }
  }
  return body.slice(idx, end);
}

const sections = [
  [47, "Anwendungsbereich"],
  [48, "Begriffe"],
  [49, "Rettungswege"],
  [50, "Tragende"],
  [51, "Trennwände"],
  [52, "Notwendige"],
  [53, "Türen"],
  [54, "Sicherheitsbeleuchtung"],
  [55, "Alarmierungseinrichtungen"],
  [56, "Barrierefreie"],
  [57, "Freihalten"],
  [58, "Anwendung"],
  [59, "Ordnungswidrigkeiten"],
];

for (const [n, title] of sections) {
  const text = extractSection(n, title);
  if (text) console.log(`\n===== § ${n} =====\n${text.slice(0, 2500)}\n`);
}
