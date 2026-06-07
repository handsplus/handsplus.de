/**
 * Fix GELB prose patterns in content/blog.ts for the 35 remaining flagged slugs.
 * Usage: node scripts/fix-blog-prose-gelb.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "content/blog.ts");

const TARGET_SLUGS = new Set([
  "externe-fachkraft-arbeitssicherheit-koeln",
  "arbschg-mehrere-arbeitgeber-zusammenarbeit",
  "arbschg-erste-hilfe-notfallmassnahmen",
  "brandschutzschulungen-unternehmen",
  "betriebsanweisungen-gefahrstoffe",
  "dguv-vorschrift-3-elektropruefung",
  "vorbeugender-brandschutz-massnahmen",
  "sigeko-begehung-seitenschutz-abbruch-koeln",
  "gbu-schnittstelle-mehrere-gewerke-bauprojekt",
  "sonderbauverordnung-teil-1-versammlungsstaetten",
  "brandsicherheitswache-bhkg-nrw",
  "baupruefvo-nrw-einfach-erklaert",
  "brandschutzkonzept-paragraph-9-baupruefvo",
  "brandschutzkonzept-betrieb-brandverhuetungsschau",
  "pruefvo-nrw-einfach-erklaert",
  "wirk-prinzip-pruefung-pruefvo-nrw",
  "bma-pruefung-pruefvo-nrw-fristen",
  "sprinkler-rwa-pruefung-pruefvo-nrw",
  "betrsichv-einfach-erklaert",
  "trgs-400-gefaehrdungsbeurteilung-gefahrstoffe",
  "trgs-509-510-lagerung-gefahrstoffe",
  "trgs-528-schweisstechnische-arbeiten",
  "trbs-1111-gefaehrdungsbeurteilung-arbeitsmittel",
  "trbs-1201-1203-pruefung-befaehigte-person",
  "trbs-2121-absturz-leitern",
  "dguv-vorschrift-1-grundsaetze-praevention",
  "dguv-vorschrift-38-bauarbeiten",
  "dguv-vorschrift-67-flurfoerderzeuge",
  "jarbschg-verbotene-gefaehrliche-arbeiten",
  "jarbschg-unterweisung-aushang-dokumentation",
  "muschg-schutzfristen-arbeitszeit",
  "muschg-unzulaessige-taetigkeiten-schutzmasnahmen",
  "muschg-aushang-mitteilung-dokumentation",
  "teilhabe-sgb-ix-einfach-erklaert",
  "sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter",
]);

const STICHWORT_REPLACEMENTS = [
  [/^Typische Fehler:\s*/i, "In der Praxis treten häufig folgende Fehler auf. "],
  [/^Typische Mängel:\s*/i, "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. "],
  [/^Typische Schwachstellen:\s*/i, "In der betrieblichen Umsetzung zeigen sich häufig folgende Schwachstellen. "],
  [/^Typische Befunde:\s*/i, "Bei Prüfungen treten häufig folgende Befunde auf. "],
  [/^Typische Verbote und Grenzen:\s*/i, "Das Jugendarbeitsschutzgesetz verbietet oder grenzt folgende Tätigkeiten ein. "],
  [/^Typische Gefährdungen:\s*/i, "Besonders relevant sind folgende Gefährdungen für Schwangere und Stillende. "],
  [/^Typische Themen in V38:\s*/i, "Die DGUV Vorschrift 38 behandelt unter anderem folgende Themen. "],
  [/^Typischer Ablauf:\s*/i, "Ein typischer Ablauf sieht so aus. "],
  [/^Checkliste:\s*/i, "Zur Selbstkontrolle sollten Arbeitgeber prüfen, ob "],
  [/^Checkliste Begehung:\s*/i, "Vor einer Begehung sollte geklärt sein, ob "],
  [/^Begehungs-Check[^:]*:\s*/i, "Vor einer Begehung sollte geklärt sein, ob "],
  [/^Vier Ebenen auf der Baustelle:\s*/i, "Auf Baustellen lassen sich vier Ebenen unterscheiden. "],
  [/^Pflichten in Kurzform:\s*/i, "Die wichtigsten Pflichten lassen sich wie folgt zusammenfassen. "],
  [/^STOP in der Praxis:\s*/i, "Das STOP-Prinzip lässt sich in der Praxis so anwenden. "],
  [/^Richtwristen \([^)]+\):\s*/i, "Als Orientierung für Prüfintervalle gelten folgende Richtwerte, die in der Gefährdungsbeurteilung angepasst werden können. "],
  [/^Was der Prüfsachverständige prüft – Überblick:\s*/i, "Der Prüfsachverständige überprüft insbesondere Folgendes. "],
  [/^Was der SiGeKo bei Absturzgefahr prüft:\s*/i, "Bei Absturzgefahr achtet der SiGeKo vor allem darauf, ob "],
  [/^Dokumentation für Betreiber:\s*/i, "Betreiber sollten folgende Unterlagen führen. "],
  [/^Schnittstelle Bau und Betrieb:\s*/i, "An der Schnittstelle zwischen Bau und Betrieb gilt Folgendes. "],
  [/^Was „bestimmungsgemäß" heißt:\s*/i, "Maßstab für die bestimmungsgemäße Funktion ist Folgendes. "],
  [/^Typische Mängel aus Wirk-Prinzip-Prüfungen:\s*/i, "Bei Wirk-Prinzip-Prüfungen fallen häufig folgende Mängel auf. "],
  [/^Typische Feststellungen:\s*/i, "Typische Feststellungen bei Begehungen sind folgende. "],
  [/^Typische Brüche in der Kette:\s*/i, "In der Praxis reißen häufig folgende Glieder der Kette. "],
  [/^Ersthelfer:\s*/i, "Für Ersthelfer gelten folgende Anforderungen. "],
  [/^Brand:\s*/i, "Im Bereich Brandbekämpfung gehören dazu "],
  [/^Vertiefung in den Spokes:\s*/i, "Vertiefende Artikel finden Sie in den Spokes zu "],
  [/^Besucherzahl ermitteln \(§ 1 Abs\. 2\):\s*/i, "Nach § 1 Abs. 2 SBauV ermittelt man die Besucherzahl bei fehlenden Bauvorlagen pauschal wie folgt. "],
  [/^Kapitel 2 – Bauvorschriften, Abschnitt 1 \(§§ 3–5\):\s*/i, "In Kapitel 2, Abschnitt 1 (§§ 3–5) der SBauV sind folgende Bauvorschriften geregelt. "],
  [/^Vor der ersten Tätigkeit:\s*/i, "Vor der ersten Tätigkeit eines Jugendlichen gilt Folgendes. "],
  [/^§ 9 BauPrüfVO – Brandschutzkonzept:\s*/i, "Nach § 9 BauPrüfVO umfasst das Brandschutzkonzept Folgendes. "],
  [/^§ 27 BHKG – wann ist Anzeige nötig\?\s*/i, "Nach § 27 BHKG ist eine Anzeige nötig, wenn "],
  [/^§ 1 SBauV – wann gilt Teil 1\?\s*/i, "Nach § 1 SBauV gilt Teil 1, wenn "],
  [/^§ 2 Begriffe – Grundlage für Planung und Genehmigung:\s*/i, "Nach § 2 SBauV sind folgende Begriffe Grundlage für Planung und Genehmigung. "],
  [/^§ 12 BetrSichV – Unterweisung:\s*/i, "Nach § 12 BetrSichV gilt für die Unterweisung Folgendes. "],
  [/^Checkliste für Bauherren und Projektsteuerung:\s*/i, "Für Bauherren und Projektsteuerung empfiehlt sich folgende Selbstkontrolle. "],
  [/^Typische Fehler in der Praxis:\s*/i, "In der Praxis treten häufig folgende Fehler auf. "],
  [/^Typische Schwachstellen aus Begehungen \(anonymisiert\):\s*/i, "Aus Begehungen (anonymisiert) sind folgende Schwachstellen bekannt. "],
  [/^Typische Fälle:\s*/i, "Typische Fälle, in denen eine Brandsicherheitswache nötig wird, sind folgende. "],
  [/^Sprinkler – was geprüft wird:\s*/i, "Bei der Sprinklerprüfung wird insbesondere Folgendes geprüft. "],
  [/^Praxis Köln und NRW:\s*/i, "In Köln und NRW gilt in der Praxis Folgendes. "],
  [/^§ 13 Rangfolge:\s*/i, "Nach § 13 MuSchG gilt folgende Rangfolge der Schutzmaßnahmen. "],
];

function capitalizeAfterPeriod(s) {
  return s.replace(/([.!?]\s+)([a-zäöüß])/g, (_, sep, c) => sep + c.toUpperCase());
}

function fixSemicolonChains(text) {
  const semi = (text.match(/;/g) || []).length;
  if (semi < 3) return text;
  const parts = text.split(/;\s*/);
  let result = parts[0];
  for (let i = 1; i < parts.length; i++) {
    let part = parts[i].trim();
    if (part && /^[a-zäöüß]/.test(part)) {
      part = part.charAt(0).toUpperCase() + part.slice(1);
    }
    result += ". " + part;
  }
  return result.replace(/\.\s*\./g, ".");
}

function fixArrows(text) {
  if (!text.includes("→") && !text.includes("->")) return text;
  const parts = text.split(/\s*→\s*|\s*->\s*/);
  if (parts.length < 2) return text;
  const connectors = ["Zunächst", "danach", "anschließend", "im Anschluss", "schließlich"];
  let result = parts[0].trim();
  for (let i = 1; i < parts.length; i++) {
    const conn = connectors[Math.min(i, connectors.length - 1)];
    let part = parts[i].trim();
    if (i > 0 && /^[A-ZÄÖÜ]/.test(part) && conn !== "Zunächst") {
      part = part.charAt(0).toLowerCase() + part.slice(1);
    }
    result += `, ${conn} ${part}`;
  }
  return result;
}

function fixQuestionChain(text) {
  const q = (text.match(/\?/g) || []).length;
  if (q < 4) return text;

  if (/Wer alarmiert\?/.test(text)) {
    return text
      .replace(
        /Notfallorganisation in GBU dokumentieren:\s*Wer alarmiert\?\s*Wer führt Evakuierung\?\s*Wer spricht Rettungsdienst an\?\s*/,
        "Die Notfallorganisation gehört in die Gefährdungsbeurteilung. Dort sollte festgelegt werden, wer alarmiert, wer die Evakuierung leitet und wer den Rettungsdienst anspricht. "
      )
      .replace(/\?/g, ".");
  }

  if (/^Zur Selbstkontrolle|^Vor einer Begehung|^Checkliste/.test(text) || text.includes("?")) {
    let t = text;
    t = t.replace(/\?\s+/g, ", ob ");
    t = t.replace(/\?([^?]*)$/, ".$1");
    if (!/[.!?]$/.test(t)) t += ".";
    return t;
  }
  return text;
}

function fixSectionStart(text) {
  if (/^§\s*\d/.test(text) && !/^(Nach|Laut|Gemäß|In|Der|Die|Das|Wer|Bei|Wenn|Sobald|Ab|Mit|Ohne|Auch|Für|Unter)/.test(text)) {
    return "Nach " + text.replace(/^§\s*/, "§ ");
  }
  return text;
}

function fixAG(text) {
  if (/\bAG\b/.test(text) && !/Arbeitgeber/.test(text)) {
    return text.replace(/\bAG\b/g, "Arbeitgeber");
  }
  return text;
}

function fixDashRhythm(text) {
  const dashes = (text.match(/ – /g) || []).length;
  if (dashes < 4 || text.length >= 350) return text;
  // Convert dash-separated list items to sentences where possible
  if (/^Das STOP-Prinzip|^Substitution|^Vier Ebenen|^Typische Verbote/.test(text)) {
    return text.replace(/ – /g, ". ");
  }
  if (/^Erstens|^Zweitens/.test(text) || text.includes(". Erstens")) {
    return text.replace(/\. (Erstens|Zweitens|Drittens|Viertens)/g, ". $1");
  }
  return text;
}

function fixStichwort(text) {
  let t = text;
  for (const [re, repl] of STICHWORT_REPLACEMENTS) {
    t = t.replace(re, repl);
  }
  // Generic § X Abs. Y: at start (after Nach fix)
  t = t.replace(/^Nach § (\d+ Abs\. \d+[^:]*):\s*/i, "Nach § $1 ArbSchG gilt Folgendes. ");
  t = t.replace(/^Nach § (\d+ Abs\. \d+) ArbSchG:\s*/i, "Nach § $1 ArbSchG gilt Folgendes. ");
  t = t.replace(/^Nach § (\d+) ([^:]+):\s*/i, (m, num, rest) => {
    if (rest.includes("gilt")) return m;
    return `Nach § ${num} ${rest} gilt Folgendes. `;
  });
  return t;
}

function fixParagraph(text) {
  if (text.startsWith("H2::")) return text;
  let t = text;
  t = fixStichwort(t);
  t = fixSectionStart(t);
  t = fixAG(t);
  t = fixArrows(t);
  t = fixSemicolonChains(t);
  t = fixQuestionChain(t);
  t = fixDashRhythm(t);
  t = capitalizeAfterPeriod(t);
  // Re-run stichwort after section fix
  t = fixStichwort(t);
  return t;
}

function parseStringLiterals(arrayBody) {
  const items = [];
  const re = /^\s+"((?:\\.|[^"\\])*)"\s*,?\s*$/gm;
  let m;
  while ((m = re.exec(arrayBody)) !== null) {
    items.push({ raw: m[0], value: m[1].replace(/\\"/g, '"') });
  }
  return items;
}

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

let src = fs.readFileSync(blogPath, "utf8");
let changeCount = 0;

const slugRe = /slug: "([^"]+)"/g;
let match;
const slugPositions = [];
while ((match = slugRe.exec(src)) !== null) {
  slugPositions.push({ slug: match[1], index: match.index });
}

for (let i = 0; i < slugPositions.length; i++) {
  const { slug, index } = slugPositions[i];
  if (!TARGET_SLUGS.has(slug)) continue;

  const end = i + 1 < slugPositions.length ? slugPositions[i + 1].index : src.length;
  const block = src.slice(index, end);
  const contentMatch = block.match(/content:\s*\[([\s\S]*?)\n    \],/);
  if (!contentMatch) continue;

  const arrayBody = contentMatch[1];
  const items = parseStringLiterals(arrayBody);
  let newArrayBody = arrayBody;

  for (const item of items) {
    const fixed = fixParagraph(item.value);
    if (fixed !== item.value) {
      const newRaw = item.raw.replace(
        `"${item.value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`,
        `"${escapeString(fixed)}"`
      );
      // Simpler: rebuild the line
      const indent = item.raw.match(/^(\s+)/)?.[1] ?? "      ";
      const newLine = `${indent}"${escapeString(fixed)}",\n`;
      newArrayBody = newArrayBody.replace(item.raw, newLine);
      changeCount++;
    }
  }

  const newBlock = block.replace(contentMatch[0], `content: [${newArrayBody}\n    ],`);
  src = src.slice(0, index) + newBlock + src.slice(end);
  // Recalculate positions after mutation - re-read from file approach is safer
}

// Simpler approach: process whole file block by block with offset tracking
src = fs.readFileSync(blogPath, "utf8");
changeCount = 0;

for (const slug of TARGET_SLUGS) {
  const slugMarker = `slug: "${slug}"`;
  const slugIdx = src.indexOf(slugMarker);
  if (slugIdx < 0) continue;

  const contentStart = src.indexOf("content: [", slugIdx);
  const contentEnd = src.indexOf("\n    ],", contentStart);
  if (contentStart < 0 || contentEnd < 0) continue;

  const before = src.slice(0, contentStart);
  const arrayPart = src.slice(contentStart, contentEnd + "\n    ],".length);
  const after = src.slice(contentEnd + "\n    ],".length);

  const innerMatch = arrayPart.match(/content:\s*\[([\s\S]*)\n    \],/);
  if (!innerMatch) continue;

  const items = parseStringLiterals(innerMatch[1]);
  const newItems = items.map((item) => {
    const fixed = fixParagraph(item.value);
    if (fixed !== item.value) changeCount++;
    return fixed;
  });

  const newInner = newItems.map((s) => `      "${escapeString(s)}",`).join("\n");
  const newArrayPart = `content: [\n${newInner}\n    ],`;
  src = before + newArrayPart + after;
}

fs.writeFileSync(blogPath, src);
console.log(`Fixed ${changeCount} paragraphs across ${TARGET_SLUGS.size} slugs.`);
