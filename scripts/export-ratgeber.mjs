#!/usr/bin/env node
/** Exportiert 6 Ratgeber-Pillars aus vollteste_content.py → content/ratgeber.ts */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pyPath = join(root, 'SEO-Masterplan', 'vollteste_content.py');
const outPath = join(root, 'content', 'ratgeber.ts');

function loadPillars() {
  let py = readFileSync(pyPath, 'utf8');
  const start = py.indexOf('PILLARS = ');
  const end = py.indexOf('\nBLOGS = ');
  if (start < 0 || end < 0) throw new Error('PILLARS block not found');
  py = 'const ' + py.slice(start, end);
  py = py.replace(/\r\n/g, '\n');
  py = py.replace(/\(\s*\n\s*"([^"]*)"\s*,\s*\n\s*"([^"]*)"\s*,?\s*\n\s*\)/g, '["$1", "$2"]');
  py = py.replace(/\("([^"]*)",\s*"([^"]*)"\)/g, '["$1", "$2"]');
  py = py.replace(/_tbl\(/g, '__TBL__(');
  py = py.replace(/True/g, 'true').replace(/False/g, 'false').replace(/None/g, 'null');
  const __TBL__ = (headers, rows) => ({ headers, rows });
  const fn = new Function('__TBL__', `${py}\nreturn PILLARS;`);
  return fn(__TBL__);
}

const SERVICE_BY_SLUG = {
  'arbeitsschutz-unternehmen': '/arbeitsschutz',
  'brandschutz-betrieb': '/brandschutz',
  'sigeko-baustelle': '/sigeko',
  'gefaehrdungsbeurteilung': '/arbeitsschutz',
  'bauordnung-nrw-brandschutz': '/brandschutz',
  'elektrosicherheit-dguv-v3': '/elektrosicherheit',
};

function normalizeSections(sections) {
  return (sections || []).map((sec) => {
    const out = {};
    if (sec.h2) out.h2 = sec.h2;
    if (sec.h3) out.h3 = sec.h3;
    if (sec.p) out.paragraphs = Array.isArray(sec.p) ? sec.p : [sec.p];
    if (sec.ul) out.list = sec.ul;
    if (sec.table) {
      const t = sec.table;
      if (t.headers && t.rows) out.table = t;
      else if (typeof t === 'string') {
        /* legacy html table – skip in TS export */
      }
    }
    return out;
  }).filter((s) => Object.keys(s).length > 0);
}

function excerptFromSections(sections) {
  for (const sec of sections || []) {
    const p = sec.p || sec.paragraphs;
    const first = Array.isArray(p) ? p[0] : p;
    if (first && typeof first === 'string') {
      return first.replace(/\[Link:\s*[^\]]+\]/g, '').slice(0, 200).trim() + '…';
    }
  }
  return '';
}

const pillars = loadPillars();
const posts = [];

for (const [slug, data] of Object.entries(pillars)) {
  const sections = normalizeSections(data.sections);
  const faq = (data.faq || []).map(([question, answer]) => ({ question, answer }));
  posts.push({
    slug,
    title: data.title,
    excerpt: excerptFromSections(data.sections),
    titleTag: data.title_tag,
    metaDescription: data.meta,
    servicePath: SERVICE_BY_SLUG[slug] || '/kontakt',
    tag: data.tag || 'Ratgeber',
    sections,
    faq,
  });
}

const ts = `/**
 * Ratgeber-Pillar-Seiten (Hub-and-Spoke SEO).
 * Generiert aus SEO-Masterplan/vollteste_content.py – bei Änderungen: node scripts/export-ratgeber.mjs
 */
export type RatgeberTable = {
  headers: string[];
  rows: string[][];
};

export type RatgeberSection = {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  list?: string[];
  table?: RatgeberTable;
};

export type RatgeberFaqItem = {
  question: string;
  answer: string;
};

export type RatgeberPost = {
  slug: string;
  title: string;
  excerpt: string;
  titleTag: string;
  metaDescription: string;
  servicePath: string;
  tag: string;
  sections: RatgeberSection[];
  faq: RatgeberFaqItem[];
};

export const ratgeberPosts: RatgeberPost[] = ${JSON.stringify(posts, null, 2)};

export function getRatgeberBySlug(slug: string): RatgeberPost | undefined {
  return ratgeberPosts.find((p) => p.slug === slug);
}
`;

writeFileSync(outPath, ts, 'utf8');
console.log(`Exported ${posts.length} ratgeber posts → ${outPath}`);
