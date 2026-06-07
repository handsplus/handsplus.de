/**
 * SEO-/Qualitäts-Baseline für alle Blogbeiträge in content/blog.ts
 * Usage: node scripts/apply-blog-quality-baseline.mjs [--dry-run]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "content/blog.ts");
const dryRun = process.argv.includes("--dry-run");

const H2 = "H2::";
const GEO_SUFFIX = " – praxisnah für Betriebe in Köln und NRW.";

const hubRules = [
  { match: /baustellv-|sigeko-pflicht/, hub: "baustellv-einfach-erklaert", label: "BaustellV-Hub" },
  { match: /arbschg-mehrere|arbschg-erste|arbschg-gewerbeaufsicht/, hub: "arbeitsschutzgesetz-arbschg-uebersicht", label: "ArbSchG-Hub" },
  { match: /jarbschg|jugendarbeitsschutz/, hub: "jugendarbeitsschutz-jarbschg-einfach-erklaert", label: "JArbSchG-Hub" },
  { match: /muschg|mutterschutz/, hub: "mutterschutz-muschg-einfach-erklaert", label: "MuSchG-Hub" },
  { match: /sgb-ix|teilhabe-sgb/, hub: "teilhabe-sgb-ix-einfach-erklaert", label: "SGB IX-Hub" },
  { match: /trgs/, hub: "trgs-einfach-erklaert", label: "TRGS-Hub" },
  { match: /trbs/, hub: "trbs-einfach-erklaert", label: "TRBS-Hub" },
  { match: /dguv/, hub: "dguv-vorschriften-einfach-erklaert", label: "DGUV-Hub" },
  { match: /asr/, hub: "asr-einfach-erklaert", label: "ASR-Hub" },
  { match: /betrsichv/, hub: "betrsichv-einfach-erklaert", label: "BetrSichV-Hub" },
  { match: /sigeko|baustell|rauchen-baustelle|gbu-schnittstelle/, hub: "sigeko-pflicht-wann-braucht-man-sigeko", label: "SiGeKo-Ratgeber" },
  { match: /brandschutz|bso|flucht|bma|sprinkler|pruefvo|bhkg|bauordnung|baupruefvo|sonderbau|vorbeugender/, hub: "brandschutzbeauftragter-aufgaben-pflichten", label: "Brandschutz-Ratgeber" },
  { match: /gefaehrdungsbeurteilung|gbu|ergonomie|psychische|betriebsanweisungen|handhubwagen|pruefpflicht/, hub: "gefaehrdungsbeurteilung-ablauf", label: "GBU-Ablauf" },
];

function parseStringLiterals(arrayBody) {
  const items = [];
  const re = /^\s+"((?:\\.|[^"\\])*)"\s*,?\s*$/gm;
  let m;
  while ((m = re.exec(arrayBody)) !== null) {
    items.push(m[1].replace(/\\"/g, '"'));
  }
  return items;
}

function escapeString(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatContentArray(items) {
  return items.map((s) => `      "${escapeString(s)}",`).join("\n");
}

function formatFaq(faq) {
  return faq
    .map(
      (f) => `      {
        question: "${escapeString(f.question)}",
        answer:
          "${escapeString(f.answer)}",
      }`
    )
    .join(",\n");
}

function ensureGeoExcerpt(excerpt) {
  if (/Köln|NRW/i.test(excerpt)) return excerpt;
  let e = excerpt.trim().replace(/\.$/, "");
  const combined = e + GEO_SUFFIX;
  if (combined.length <= 158) return combined.endsWith(".") ? combined : combined + ".";
  return e.slice(0, 115).replace(/\s+\S*$/, "") + " …" + GEO_SUFFIX;
}

function hubLink(slug) {
  for (const h of hubRules) {
    if (h.match.test(slug)) {
      return `[Link: /wissen/blog/${h.hub}|${h.label}]`;
    }
  }
  return `[Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber]`;
}

function topicFromTitle(title) {
  return title.split("–")[0].trim();
}

function generateFaq(title, slug) {
  const topic = topicFromTitle(title);
  return [
    {
      question: `Wer ist von „${topic}“ betroffen?`,
      answer:
        "Grundsätzlich alle Arbeitgeber mit entsprechenden Tätigkeiten oder Gefährdungen – unabhängig von der Betriebsgröße, soweit die Vorschrift greift. Ausnahmen im Einzelfall prüfen.",
    },
    {
      question: `Was sind typische Mängel bei ${topic}?`,
      answer:
        "Fehlende oder veraltete Dokumentation, Maßnahmen ohne Verantwortliche und Fristen, keine Abstimmung mit Fachkraft für Arbeitssicherheit und Betriebsarzt, Unterweisung nicht am Arbeitsplatz.",
    },
    {
      question: "Gilt das in Köln und NRW?",
      answer:
        "Ja – bundesrechtliche Pflichten gelten in Köln und ganz NRW gleichermaßen. Berufsgenossenschaft und Gewerbeaufsicht prüfen betriebsspezifisch.",
    },
    {
      question: "Wo gibt es vertiefende Artikel?",
      answer: `Weitere Artikel im Wissensbereich – verknüpft mit ${hubLink(slug)} und verwandten Themen bei Health and Safety+.`,
    },
  ];
}

function parseFaq(block) {
  const faqMatch = block.match(/faq:\s*\[([\s\S]*?)\n    \],/);
  if (!faqMatch) return null;
  const questions = [...faqMatch[1].matchAll(/question:\s*"((?:\\.|[^"\\])*)"/g)].map((m) =>
    m[1].replace(/\\"/g, '"')
  );
  const answers = [...faqMatch[1].matchAll(/answer:\s*\n\s*"((?:\\.|[^"\\])*)"/g)].map((m) =>
    m[1].replace(/\\"/g, '"')
  );
  return questions.map((q, i) => ({ question: q, answer: answers[i] ?? "" }));
}

function insertH2Structure(items, title) {
  if (items.some((p) => p.startsWith(H2))) return items;
  const body = [...items];
  if (body.length < 3) return items;

  const topic = topicFromTitle(title);
  const intro = body.shift();
  const closing = body.pop();
  const mid = body;

  const out = [intro];
  out.push(`${H2}Was gilt rechtlich?`);
  const split = Math.max(1, Math.ceil(mid.length / 2));
  out.push(...mid.slice(0, split));

  if (mid.length > split) {
    out.push(`${H2}Umsetzung in der Praxis`);
    out.push(...mid.slice(split));
  }

  if (!/Checkliste|Typische Mängel|typische Mängel|typische Fehler/i.test(items.join(" "))) {
    out.push(`${H2}Typische Mängel und Checkliste`);
    out.push(
      `Begehungs-Check zu ${topic}: Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.`
    );
  }

  if (closing) out.push(closing);
  return out;
}

function ensureGeoIntro(items) {
  if (items.length === 0 || /Köln|NRW/i.test(items[0])) return items;
  items[0] = items[0].replace(/\.\s*$/, "") + " – relevant für Betriebe in Köln und NRW.";
  return items;
}

function ensureClosing(items, slug) {
  const joined = items.join(" ");
  if (/Health and Safety\+/i.test(joined) && /\[Link: \/kontakt\|Kontakt\]/i.test(joined)) return items;
  const last = items[items.length - 1] ?? "";
  if (/Health and Safety\+/i.test(last)) {
    if (!/\[Link: \/kontakt\|Kontakt\]/i.test(last)) {
      items[items.length - 1] = last.replace(/\.\s*$/, "") + " [Link: /kontakt|Kontakt].";
    }
    return items;
  }
  items.push(`Health and Safety+ – ${hubLink(slug)}, [Link: /kontakt|Kontakt].`);
  return items;
}

function buildPostBlock(slug, title, excerpt, date, items, faq) {
  return `  {
    slug: "${slug}",
    title: "${escapeString(title)}",
    excerpt:
      "${escapeString(excerpt)}",
    date: "${date}",
    content: [
${formatContentArray(items)}
    ],
    faq: [
${formatFaq(faq)},
    ],
  }`;
}

function processPost(block) {
  const slug = block.match(/slug:\s*"([^"]+)"/)?.[1];
  const title = block.match(/title:\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"');
  let excerpt = block.match(/excerpt:\s*\n?\s*"((?:\\.|[^"\\])*)"/)?.[1]?.replace(/\\"/g, '"') ?? "";
  const date = block.match(/date:\s*"([^"]+)"/)?.[1];
  const contentMatch = block.match(/content:\s*\[([\s\S]*?)\n    \],/);
  if (!slug || !title || !contentMatch || !date) {
    return { block, changed: false, slug };
  }

  let items = parseStringLiterals(contentMatch[1]);
  let faq = parseFaq(block) ?? [];

  const alreadyRich =
    items.some((p) => p.startsWith(H2)) &&
    faq.length >= 3 &&
    items.filter((p) => !p.startsWith(H2)).join(" ").split(/\s+/).filter(Boolean).length >= 450 &&
    /Köln|NRW/i.test(excerpt) &&
    /Köln|NRW/i.test(items[0] ?? "");
  if (alreadyRich) return { block, changed: false, slug };

  const before = JSON.stringify({ excerpt, items, faq });

  excerpt = ensureGeoExcerpt(excerpt);
  items = ensureGeoIntro(items);
  items = insertH2Structure(items, title);
  items = ensureClosing(items, slug);

  if (faq.length < 3) {
    const generated = generateFaq(title, slug);
    const existingQ = new Set(faq.map((f) => f.question));
    for (const g of generated) {
      if (faq.length >= 4) break;
      if (!existingQ.has(g.question)) faq.push(g);
    }
  }

  const after = JSON.stringify({ excerpt, items, faq });
  if (before === after) return { block, changed: false, slug };

  return {
    block: buildPostBlock(slug, title, excerpt, date, items, faq),
    changed: true,
    slug,
  };
}

/** Alle Post-Blöcke per Slug-Position – letzter Post geht nicht verloren */
function extractPostBlocks(src) {
  const re = /  (?:\/\/[^\n]*\n  )?\{\n    slug: "/g;
  const starts = [...src.matchAll(re)];
  const arrayEnd = src.lastIndexOf("\n];");
  if (arrayEnd < 0) throw new Error("blogPosts array end not found");
  return starts.map((m, i) => {
    const start = m.index;
    const end = i + 1 < starts.length ? starts[i + 1].index : arrayEnd;
    return src.slice(start, end).replace(/,\s*$/, "");
  });
}

const src = fs.readFileSync(blogPath, "utf8");

/** slug → optional // comment line directly above post */
const commentBySlug = new Map();
for (const m of src.matchAll(/  \/\/[^\n]*\n  \{\n    slug: "([^"]+)"/g)) {
  commentBySlug.set(m[1], m[0].split("\n")[0]);
}

const blocks = extractPostBlocks(src);
console.log("Found posts:", blocks.length);

const newPosts = [];
const changeLog = [];
let changedCount = 0;

for (const block of blocks) {
  const { block: nextBlock, changed, slug } = processPost(block);
  const comment = commentBySlug.get(slug);
  const body = changed ? nextBlock : block;
  newPosts.push(comment && !body.startsWith("  //") ? `${comment}\n${body}` : body);
  if (changed) {
    changedCount++;
    changeLog.push(slug);
  }
}

const headerEnd = src.indexOf("export const blogPosts");
const footerStart = src.lastIndexOf("\n\nexport function getPostBySlug");
const newSrc =
  src.slice(0, headerEnd) +
  "export const blogPosts: BlogPost[] = [\n" +
  newPosts.join(",\n") +
  "\n];" +
  src.slice(footerStart);

if (dryRun) {
  console.log("Would update", changedCount, "posts");
} else {
  fs.writeFileSync(blogPath, newSrc, "utf8");
  console.log("Updated", changedCount, "posts");
}
if (changeLog.length) console.log(changeLog.join("\n"));
