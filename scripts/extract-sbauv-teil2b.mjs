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

const bodyStart = h.indexOf("Die Vorschriften des Teils 2 gelten");
const bodyEnd = h.indexOf("Teil 3 Verkaufsstätten", bodyStart);
const body = t(h.slice(bodyStart, bodyEnd));

function afterFootnote(text) {
  const marker = "in Kraft am 15. November 2019.";
  const idx = text.indexOf(marker);
  if (idx >= 0) return text.slice(idx + marker.length).trim();
  // second marker pattern
  const idx2 = text.indexOf("2019.");
  if (idx2 >= 0 && text.includes("geändert durch")) {
    const sub = text.slice(text.lastIndexOf("2019.") + 5);
    return sub.trim();
  }
  return text;
}

const titles = {
  47: "Anwendungsbereich",
  48: "Begriffe",
  49: "Rettungswege",
  53: "Türen",
  54: "Sicherheitsbeleuchtung",
  55: "Alarmierungseinrichtungen",
};

for (const [n, startWord] of Object.entries(titles)) {
  const num = parseInt(n, 10);
  // find all occurrences and pick one with substantial content after footnote
  let searchFrom = 0;
  let best = "";
  while (true) {
    const idx = body.indexOf(`§ ${num} `, searchFrom);
    if (idx < 0) break;
    const chunk = body.slice(idx, idx + 4000);
    const cleaned = afterFootnote(chunk);
    if (cleaned.length > best.length && !cleaned.startsWith("§")) {
      best = cleaned;
    } else if (cleaned.length > 200 && cleaned.includes(startWord)) {
      best = cleaned;
    }
    searchFrom = idx + 5;
  }
  // also try without § prefix for §47 which might be at start
  if (num === 47) {
    best = body.slice(0, 800);
  }
  const nextIdx = body.indexOf(`§ ${num + 1} `, body.indexOf(`§ ${num} `) + 10);
  const full = body.slice(body.indexOf(`§ ${num} `), nextIdx > 0 ? nextIdx : body.length);
  console.log(`\n===== § ${num} =====\n${afterFootnote(full).slice(0, 2800)}\n`);
}
