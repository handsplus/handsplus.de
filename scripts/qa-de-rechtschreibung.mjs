#!/usr/bin/env node
/**
 * Prüft sichtbare deutsche Texte auf ASCII-Umlaute (ae/oe/ue statt ä/ö/ü).
 * URLs, Slugs und technische IDs werden ignoriert.
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const CONTENT_DIRS = ['content', 'components', 'app'];
const EXT = /\.(tsx?|mdx?)$/;

/** Bekannte erlaubte ASCII-Wörter in Slugs/IDs (kein Anzeigetext). */
const ALLOW_ASCII = new Set([
  'gefaehrdungsbeurteilung',
  'gefaehrdungsbeurteilung-ablauf',
  'gefaehrdungsbeurteilung-schwangere-mutterschutz',
  'psychische-gefaehrdungsbeurteilung-arbeitsplatz',
  'besonders-gefaehrliche-arbeiten-baustelle',
  'brandschutz-sachverstaendiger-koeln',
  'externe-fachkraft-arbeitssicherheit-koeln',
  'sicherheitsbeauftragte-schulung-koeln',
  'sigeko-koeln-kosten',
  'dguv-vorschrift-3-elektropruefung',
  'regalpruefung-din-15635',
  'leitern-pruefung-betrsichv',
  'unterweisung-haeufigkeit',
  'elektropruefung-haeufigkeit',
  'vorbeugender-brandschutz-massnahmen',
  'lueftungsanlagen-brandschutz-bauo-nrw',
  'garagen-stellplaetze-brandschutz',
  'sigeko-vorankuendigung',
  'unternehmeruebergabe-sigeko',
  'ueber-uns',
  'beschaeftigt',
]);

/** Typische falsche Schreibweisen im Fließtext. */
const BAD_PATTERNS = [
  { re: /\bfuer\b/gi, hint: 'für' },
  { re: /\bMassnahmen\b/g, hint: 'Maßnahmen' },
  { re: /\bMassnahme\b/g, hint: 'Maßnahme' },
  { re: /\bGebaeude\b/gi, hint: 'Gebäude' },
  { re: /\bFeuerloescher\b/gi, hint: 'Feuerlöscher' },
  { re: /\bLoesch/gi, hint: 'Lösch…' },
  { re: /\berklaert\b/gi, hint: 'erklärt' },
  { re: /\bPruefung\b/gi, hint: 'Prüfung' },
  { re: /\bPruefungen\b/gi, hint: 'Prüfungen' },
  { re: /\bueber\b/gi, hint: 'über (im Fließtext)' },
  { re: /\bgemaess\b/gi, hint: 'gemäß' },
  { re: /\bmuessen\b/gi, hint: 'müssen' },
  { re: /\bkoennen\b/gi, hint: 'können' },
  { re: /\bKoeln\b/g, hint: 'Köln (Ortsname im Text)' },
  { re: /\bBussgeld/gi, hint: 'Bußgeld' },
  { re: /\bDurchfuehrung\b/gi, hint: 'Durchführung' },
  { re: /\bGefaehrdung\b/gi, hint: 'Gefährdung' },
  { re: /\bregelmaessig\b/gi, hint: 'regelmäßig' },
  { re: /\bvollstaendig\b/gi, hint: 'vollständig' },
  { re: /\bSaeulen\b/gi, hint: 'Säulen' },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (name === 'node_modules' || name === '.next' || name === 'SEO-Masterplan') continue;
      walk(p, out);
    } else if (EXT.test(name)) out.push(p);
  }
  return out;
}

function stripNonDisplay(s) {
  return s
    .replace(/slug:\s*"[^"]+"/g, '')
    .replace(/id:\s*"[^"]+"/g, '')
    .replace(/href:\s*"[^"]+"/g, '')
    .replace(/path:\s*"[^"]+"/g, '')
    .replace(/\[Link:\s*[^\]]+\]/g, '')
    .replace(/https?:\/\/[^\s"'<>]+/g, '')
    .replace(/\/[a-z0-9-]+/g, (m) => (ALLOW_ASCII.has(m.slice(1)) ? '' : m));
}

const files = CONTENT_DIRS.flatMap((d) => walk(join(root, d)));
const failures = [];

for (const file of files) {
  const rel = file.slice(root.length + 1).replace(/\\/g, '/');
  const raw = readFileSync(file, 'utf8');
  const strings = [...raw.matchAll(/"(?:[^"\\]|\\.)*"/g)].map((m) => m[0].slice(1, -1));
  for (const str of strings) {
    if (str.length < 4) continue;
    const text = stripNonDisplay(str);
    for (const { re, hint } of BAD_PATTERNS) {
      re.lastIndex = 0;
      const m = re.exec(text);
      if (m && !ALLOW_ASCII.has(m[0].toLowerCase())) {
        failures.push({ file: rel, word: m[0], hint, snippet: text.slice(0, 80) });
      }
    }
  }
}

if (failures.length) {
  console.error('Rechtschreib-QA: FAIL\n');
  for (const f of failures.slice(0, 40)) {
    console.error(`  ${f.file}: „${f.word}“ → ${f.hint}`);
    console.error(`    …${f.snippet}…\n`);
  }
  if (failures.length > 40) console.error(`  … und ${failures.length - 40} weitere`);
  process.exit(1);
}

console.log(`Rechtschreib-QA: PASS (${files.length} Dateien geprüft)`);
