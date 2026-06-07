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
    .replace(/\s+/g, " ")
    .trim();
}

const s = h.indexOf("(1) Die Vorschriften des Teils 1 gelten");
const b = t(h.slice(s, h.indexOf("Teil 2", s)));
const i2 = b.indexOf("§ 2 Begriffe");
const i3 = b.indexOf("§ 3 Bauteile");
console.log(b.slice(i2, i3));
