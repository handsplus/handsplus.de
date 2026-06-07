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
const bodyEnd = h.indexOf("Die Vorschriften des Teils 5 gelten", bodyStart);
if (bodyEnd < 0) {
  const alt = h.indexOf("Teil 5 Garagen", bodyStart);
  console.log("Using alt end at Teil 5 TOC", alt);
}
const end = bodyEnd > 0 ? bodyEnd : h.indexOf("§ 121 Anwendungsbereich", bodyStart);
const body = t(h.slice(bodyStart, end));
console.log("Body length:", body.length);

const sections = [
  ["§92-93", 0, body.indexOf("§ 94 ")],
  ["§94-97", body.indexOf("Tragende Wände"), body.indexOf("§ 98 ")],
  ["§98-101", body.indexOf("Für jedes Geschoss"), body.indexOf("§ 102 ")],
  ["§102-107", body.indexOf("Räume mit erhöhter Brandgefahr"), body.indexOf("§ 108 ")],
  ["§108-114", body.indexOf("Sicherheitsbeleuchtung"), body.indexOf("§ 115 ")],
  ["§115", body.indexOf("Erleichterungen für Hochhäuser"), body.indexOf("§ 116 ")],
  ["§116-118", body.indexOf("Freihaltung der Rettungswege"), body.indexOf("§ 119 ")],
  ["§119-120", body.indexOf("bestehenden Hochhäuser"), body.length],
];

for (const [name, from, to] of sections) {
  if (from < 0) continue;
  const chunk = body.slice(from, to > from ? to : body.length);
  console.log(`\n===== ${name} =====\n${chunk.slice(0, 3200)}\n`);
}
