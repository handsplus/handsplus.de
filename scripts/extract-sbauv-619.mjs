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
const e = h.indexOf("Teil 2 Beherbergungsstätten", s);
const b = t(h.slice(s, e));

const i6 = b.indexOf("§ 6 Führung der Rettungswege");
const i7start = b.indexOf("§ 7 Bemessung der Rettungswege");
const i8 = b.indexOf("§ 8 Treppen");
console.log(b.slice(i6, i7start));
console.log("\n---7---\n" + b.slice(i7start, i8));

const i19 = b.indexOf("§ 19 Feuerlöscheinrichtungen");
const i20 = b.indexOf("§ 20 Brandmeldeanlagen");
console.log("\n---19---\n" + b.slice(i19, i20));

const i3 = b.indexOf("§ 3 Bauteile");
const i4 = b.indexOf("§ 4 Dächer");
console.log("\n---3---\n" + b.slice(i3, i4));
