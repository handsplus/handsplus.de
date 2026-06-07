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

function lawText(from, to) {
  const chunk = body.slice(from, to);
  const marker = "in Kraft am 15. November 2019.";
  const parts = chunk.split(marker);
  // take last substantive part
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i].trim();
    if (p.length > 80 && !p.startsWith("§ 5 Absatz")) return p;
  }
  return chunk.slice(-2000);
}

const ranges = [
  ["§47 intro", 0, body.indexOf("Beherbergungsstätten sind Gebäude")],
  ["§48-49", body.indexOf("Beherbergungsstätten sind Gebäude"), body.indexOf("§ 50 Tragende")],
  ["§50-51", body.indexOf("Tragende Wände, Stützen und Decken müssen"), body.indexOf("§ 52 Notwendige")],
  ["§52", body.indexOf("Notwendige Treppen sind"), body.indexOf("§ 53 Türen")],
  ["§53-54", body.indexOf("§ 53 Türen"), body.indexOf("§ 55 Alarmierung")],
  ["§55", body.indexOf("Beherbergungsstätten müssen Alarmierungseinrichtungen"), body.indexOf("§ 56 Barrierefreie")],
  ["§56-59", body.indexOf("Mindestens 10 Prozent der Gastbetten"), body.length],
];

for (const [name, from, to] of ranges) {
  if (from < 0 || to < 0) continue;
  console.log(`\n===== ${name} =====\n${body.slice(from, to).slice(0, 3500)}\n`);
}
