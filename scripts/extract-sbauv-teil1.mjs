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

const bodyStart = html.indexOf("Versammlungsstätten sind bauliche Anlagen");
const bodyEnd = html.indexOf("Teil 2 Beherbergungsstätten", bodyStart);
const body = toText(html.slice(bodyStart - 8000, bodyEnd));

// Split by § markers
const sectionRegex = /§ (\d+) /g;
const sections = [];
let match;
const markers = [...body.matchAll(/§ (\d+) [^\d]/g)];
for (let i = 0; i < markers.length; i++) {
  const n = parseInt(markers[i][1], 10);
  if (n > 46) continue;
  const start = markers[i].index;
  const end = i + 1 < markers.length ? markers[i + 1].index : body.length;
  let text = body.slice(start, end);
  // skip amendment footnotes
  if (text.includes("geändert") && text.length < 200) continue;
  if (sections.some((s) => s.n === n)) continue;
  sections.push({ n, text: text.slice(0, 1500) });
}

console.log("Found", sections.length, "sections\n");
for (const s of sections) {
  console.log(`\n======== § ${s.n} ========\n${s.text}\n`);
}
