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

const start = h.indexOf("Die Vorschriften des Teils 6");
const end = h.indexOf("Teil 7", start + 100);
const body = t(h.slice(start, end > start ? end : start + 50000));
console.log("Body length:", body.length);

const markers = [
  ["§143-144", 0, body.indexOf("§ 145 ")],
  ["§145-147", body.indexOf("§ 145 "), body.indexOf("§ 148 ")],
  ["§148-150", body.indexOf("§ 148 "), body.length],
];

for (const [name, from, to] of markers) {
  if (from < 0) continue;
  const chunk = body.slice(from, to > from ? to : body.length);
  console.log(`\n===== ${name} =====\n${chunk.slice(0, 4500)}\n`);
}
