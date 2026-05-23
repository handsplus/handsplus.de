#!/usr/bin/env node
/**
 * Ersetzt ASCII-Umlaute in Anführungszeichen-Strings (nicht in Slugs/URLs).
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const files = [
  'content/blog.ts',
  'content/ratgeber.ts',
  'content/faq.ts',
  'app/wissen/glossar/page.tsx',
];

const replacements = [
  [/Massnahmen/g, 'Maßnahmen'],
  [/Massnahme/g, 'Maßnahme'],
  [/Gebaeude/g, 'Gebäude'],
  [/Gebaeudes/g, 'Gebäudes'],
  [/Gebaeuden/g, 'Gebäuden'],
  [/ fuer /g, ' für '],
  [/ fuer\./g, ' für.'],
  [/ fuer,/g, ' für,'],
  [/ fuer:/g, ' für:'],
  [/ ueber /g, ' über '],
  [/Koeln/g, 'Köln'],
  [/erklaert/g, 'erklärt'],
  [/Saeulen/g, 'Säulen'],
  [/Saeule/g, 'Säule'],
  [/Sachverstaendigen/g, 'Sachverständigen'],
  [/Sachverstaendige/g, 'Sachverständige'],
  [/Sachverstaendiger/g, 'Sachverständiger'],
  [/Pruefung/g, 'Prüfung'],
  [/Pruefungen/g, 'Prüfungen'],
  [/Pruefsachverstaendigen/g, 'Prüfsachverständigen'],
  [/geprueft/g, 'geprüft'],
  [/Loesch/g, 'Lösch'],
  [/Loesch/g, 'Lösch'],
  [/Gefaehrdung/g, 'Gefährdung'],
  [/Groesse/g, 'Größe'],
  [/Raeumungsuebungen/g, 'Räumungsübungen'],
  [/Raeumung/g, 'Räumung'],
  [/Durchfuehrung/g, 'Durchführung'],
  [/Durchfuehrungen/g, 'Durchführungen'],
  [/Waerme/g, 'Wärme'],
  [/bekaempfung/g, 'bekämpfung'],
  [/Bekaempfung/g, 'Bekämpfung'],
  [/Ausfuehrung/g, 'Ausführung'],
  [/Maengel/g, 'Mängel'],
  [/Taetigkeit/g, 'Tätigkeit'],
  [/vollstaendigen/g, 'vollständigen'],
  [/vollstaendige/g, 'vollständige'],
  [/regelmaessig/g, 'regelmäßig'],
  [/regelmaessige/g, 'regelmäßige'],
  [/Beschaeftigten/g, 'Beschäftigten'],
  [/ArbStaettV/g, 'ArbStättV'],
  [/Arbeitsstaetten/g, 'Arbeitsstätten'],
  [/Bussgelder/g, 'Bußgelder'],
  [/Verstoessen/g, 'Verstößen'],
  [/ermoeglichen/g, 'ermöglichen'],
  [/Braende/g, 'Brände'],
  [/gehoeren/g, 'gehören'],
  [/gehoert/g, 'gehört'],
  [/feuerbestaendiger/g, 'feuerbeständiger'],
  [/Brandwaende/g, 'Brandwände'],
  [/Lauflaengen/g, 'Lauflängen'],
  [/Daecher/g, 'Dächer'],
  [/Installationsschaechten/g, 'Installationsschächten'],
  [/Feuerloescher/g, 'Feuerlöscher'],
  [/Erstloeschmittel/g, 'Erstlöschmittel'],
  [/Waermemeldern/g, 'Wärmemeldern'],
  [/Nutzungsaenderungen/g, 'Nutzungsänderungen'],
  [/Bestandsgebaeuden/g, 'Bestandsgebäuden'],
  [/Bestandsgebaeude/g, 'Bestandsgebäude'],
  [/Bauaufsichtsbehoerde/g, 'Bauaufsichtsbehörde'],
  [/Brandschutzmassnahmen/g, 'Brandschutzmaßnahmen'],
  [/Rettungsplaenen/g, 'Rettungsplänen'],
  [/Gasloesch/g, 'Gaslösch'],
  [/Schaumloesch/g, 'Schaumlösch'],
  [/Feuerwehraufzuege/g, 'Feuerwehraufzüge'],
  [/Lueftungsanlagen/g, 'Lüftungsanlagen'],
  [/raumabschliessender/g, 'raumabschließender'],
  [/abschliessender/g, 'abschließender'],
  [/zugehoerigen/g, 'zugehörigen'],
  [/muessen/g, 'müssen'],
  [/koennen/g, 'können'],
  [/naechste/g, 'nächste'],
  [/gemaess/g, 'gemäß'],
  [/strasse/g, 'straße'],
];

let total = 0;
for (const rel of files) {
  const path = join(root, rel);
  let s = readFileSync(path, 'utf8');
  let n = 0;
  for (const [re, rep] of replacements) {
    const before = s;
    s = s.replace(re, rep);
    if (s !== before) n++;
  }
  if (n > 0) {
    writeFileSync(path, s, 'utf8');
    console.log(rel, ':', n, 'Ersetzungsmuster angewendet');
    total += n;
  } else {
    console.log(rel, ': keine Änderung');
  }
}

// Verbleibende Verdächtige melden
const suspect = /\b\w*(ae|oe|ue)[a-z]*\b/gi;
for (const rel of files) {
  const path = join(root, rel);
  const s = readFileSync(path, 'utf8');
  const inStrings = [...s.matchAll(/"([^"\\]|\\.)*"/g)].flatMap((m) => {
    const t = m[0];
    const hits = t.match(suspect);
    return hits ? hits.filter((w) => !/^(faqs?|sigeko|ueber-uns|gefaehrdungs|betriebsgroesse|elektropruefung|pflichtuebertragung|arbeitsschutzgesetz|brandschutzordnung|massnahmen|bauordnung)/i.test(w)) : [];
  });
  if (inStrings.length) {
    console.log('\nVerdächtig in', rel, ':', [...new Set(inStrings)].slice(0, 20).join(', '));
  }
}

console.log('\nFertig. Gesamt:', total);
