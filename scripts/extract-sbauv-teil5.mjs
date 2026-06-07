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

const start = h.indexOf("Die Vorschriften des Teils 5");
const end = h.indexOf("Die Vorschriften des Teils 6", start);
const body = t(h.slice(start, end));
console.log("Body length:", body.length);

const markers = [
  ["§121-122", 0, body.indexOf("§ 123 ")],
  ["§123-128", body.indexOf("§ 123 "), body.indexOf("§ 129 ")],
  ["§129-133", body.indexOf("§ 129 "), body.indexOf("§ 134 ")],
  ["§134-137", body.indexOf("§ 134 "), body.indexOf("§ 138 ")],
  ["§138-142", body.indexOf("§ 138 "), body.length],
];

for (const [name, from, to] of markers) {
  if (from < 0) continue;
  const chunk = body.slice(from, to > from ? to : body.length);
  console.log(`\n===== ${name} =====\n${chunk.slice(0, 4000)}\n`);
}
