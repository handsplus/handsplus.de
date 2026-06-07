import fs from "fs";

const html = fs.readFileSync(
  "C:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/11_Brandschutz-NRW/01_NRW_Landesrecht_Gesetze_VOs/Sammelmappe1.pdf.html",
  "utf8"
);

function toText(chunk) {
  return chunk
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&zwnj;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const bodyStart = html.indexOf("(1) Die Vorschriften des Teils 1 gelten");
const bodyEnd = html.indexOf("Teil 2 Beherbergungsstätten", bodyStart);
const body = toText(html.slice(bodyStart, bodyEnd));

const titles = {
  6: "Führung der Rettungswege",
  7: "Bemessung der Rettungswege",
  10: "Bestuhlung, Gänge und Stufengänge",
  19: "Feuerlöscheinrichtungen",
  20: "Brandmeldeanlagen",
  31: "Rettungswege, Flächen für die Feuerwehr",
  35: "Rauchen, offenes Feuer",
  38: "Pflichten der Betreiber",
  41: "Gastspielprüfbuch",
  45: "Bestehende Versammlungsstätten",
  46: "Ordnungswidrigkeiten",
};

for (const [n, title] of Object.entries(titles)) {
  const re = new RegExp(`§ ${n} ${title.split(" ")[0]}`);
  const alt = new RegExp(`§ ${n} `);
  let idx = body.search(new RegExp(`§ ${n} (?!Absatz)`));
  if (idx < 0) continue;
  // skip footnote-only hits
  while (idx >= 0 && body.slice(idx, idx + 80).includes("Absatz") && idx < body.length) {
    idx = body.indexOf(`§ ${n} `, idx + 5);
  }
  const next = body.indexOf(`§ ${parseInt(n, 10) + 1} `, idx + 10);
  const end = next > idx ? next : idx + 2000;
  let text = body.slice(idx, end);
  if (text.length > 2500) text = text.slice(0, 2500);
  console.log(`\n===== § ${n} =====\n${text}\n`);
}
