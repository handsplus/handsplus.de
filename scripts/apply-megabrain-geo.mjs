import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const blogPath = path.join(root, "content/blog.ts");
let src = fs.readFileSync(blogPath, "utf8");

const excerptFixes = {
  "akteure-arbeitsschutz":
    "Akteure im Arbeitsschutz: Aufgaben von Arbeitgeber, Fachkraft für Arbeitssicherheit, Betriebsarzt, SiBe und Betriebsrat – praxisnah für Köln und NRW.",
  "bestellung-fachkraft-arbeitssicherheit":
    "Fachkraft für Arbeitssicherheit bestellen: Pflichten nach ASiG und DGUV V2, schriftliche Bestellung, Umfang und Betreuung – praxisnah für Köln und NRW.",
  "brandschutz-lithium-ionen-batterien":
    "Li-Ion-Brandschutz im Betrieb: Thermal Runaway, Ladezonen, Quarantäne kritischer Batterien, Löschkonzept und Unterweisung – praxisnah für Köln und NRW.",
  "brandschutz-brennbare-stoffe":
    "Brennbare Stoffe im Betrieb: Feststoff, Flüssigkeit, Gas und Staub – Brandverhalten, TRGS 800 und Lagerung – praxisnah für Köln und NRW.",
  "asr-a2-2-brandschutzhelfer":
    "Brandschutzhelfer nach ASR A2.2 und DGUV 205-023: Anzahl (in der Regel 5 %), Schulungsdauer und Wiederholung – praxisnah für Köln und NRW.",
  "pflichtuebertragung-arbeitsschutz":
    "Pflichtenübertragung nach § 13 ArbSchG: Voraussetzungen, Schriftform, Aufsichtspflicht des Arbeitgebers und Abgrenzung zur SiFa – praxisnah für Köln und NRW.",
  "brandschutzordnung-din-14096":
    "BSO nach DIN 14096: Pflichtinhalte in Teil A, B und C, Abgrenzung zu Alarm- und Fluchtwegplan sowie Fortschreibung – praxisnah für Köln und NRW.",
  "brandschutzschulungen-unternehmen":
    "Brandschutzschulungen: jährliche Unterweisung, BSH-Ausbildung, BSB-Qualifikation, BSO Teil C und Evakuierungsübungen – praxisnah für Köln und NRW.",
  "gefaehrdungsbeurteilung-schwangere-mutterschutz":
    "GBU für Schwangere und Stillende nach MuSchG und ArbSchG: vorausschauend und anlassbezogen beurteilen – praxisnah für Köln und NRW.",
  "flucht-und-rettungsplan-erstellen":
    "Flucht- und Rettungsplan nach ASR A2.3 und DIN ISO 23601: Pflicht, Inhalt, lagerichtiger Aushang und Aktualisierung – praxisnah für Köln und NRW.",
  "iso-45001-arbeitsschutzmanagementsystem":
    "ISO 45001 für Arbeitsschutzmanagement: Anforderungen, Einführung und Verknüpfung mit Gefährdungsbeurteilung und SiFa – praxisnah für Köln und NRW.",
  "vorbeugender-brandschutz-massnahmen":
    "Vorbeugender Brandschutz: baulich, anlagentechnisch und organisatorisch – Pflichten im Betrieb, Prüffristen und BSO – praxisnah für Köln und NRW.",
  "ist-zustandserfassung-externe-fasi":
    "Ist-Zustandserfassung vor externer SiFa-Betreuung: Struktur, Dokumentation, ASA und Prioritäten – praxisnah für Köln und NRW.",
  "sigeko-begehung-seitenschutz-abbruch-koeln":
    "SiGeKo-Begehung in der Abbruchphase: Seitenschutz, Absturzsicherung und typische Mängel am innerstädtischen Umbau in Köln.",
  "sonderbauverordnung-teil-7-schlussvorschriften":
    "SBauV Teil 7 (§ 150): Inkrafttreten, Außerkrafttreten der SBauV 2009 und Übergangsvorschriften – praxisnah für Köln und NRW.",
  "asr-a6-bildschirmarbeit":
    "ASR A6 Bildschirmarbeit (GMBl 2024): Gestaltung von Bildschirm- und Telearbeitsplätzen, Pausen und GBU – praxisnah für Köln und NRW.",
  "asr-a3-7-laerm-arbeitsplatz":
    "ASR A3.7 Lärm: Lärmbelastung beurteilen, Auslösewerte sowie technische und organisatorische Maßnahmen – praxisnah für Köln und NRW.",
  "asr-a2-1-absturz-absturzsicherung":
    "ASR A2.1 Absturz: Absturzhöhen, Seitenschutz, PSAgA und Rangfolge der Maßnahmen – praxisnah für Köln und NRW.",
  "asr-a4-3-erste-hilfe-arbeitsstaette":
    "ASR A4.3 Erste Hilfe: Ersthelfer-Anzahl, Erste-Hilfe-Räume, Ausstattung und Meldeeinrichtungen – praxisnah für Köln und NRW.",
  "trgs-528-schweisstechnische-arbeiten":
    "TRGS 528 Schweißen: Gefährdungsbeurteilung, Schweißrauch, Absaugung, PSA, Heißarbeit und Brandschutz – praxisnah für Köln und NRW.",
  "arbeitsschutzgesetz-arbschg-uebersicht":
    "ArbSchG für Arbeitgeber: Prävention § 4, GBU § 5, Unterweisung § 12, Notfall § 10 und Behörde § 21 – Einstieg für Köln und NRW.",
};

if (!src.includes('dateModified: "2026-05-26"')) {
  src = src.replace(/(date: "[^"]+",)\r?\n(?!\s*dateModified)/g, '$1\r\n    dateModified: "2026-05-26",\r\n');
}

for (const [slug, excerpt] of Object.entries(excerptFixes)) {
  const blockRe = new RegExp(
    `(slug:\\s*"${slug}"[\\s\\S]*?excerpt:\\s*\\n\\s*")[^"]*(")`
  );
  if (!blockRe.test(src)) {
    console.warn("WARN: slug not found", slug);
    continue;
  }
  src = src.replace(blockRe, `$1${excerpt}$2`);
}

fs.writeFileSync(blogPath, src);
const remaining = (src.match(/excerpt:\s*\n\s*"[^"]*…/g) || []).length;
console.log("Excerpt fixes applied:", Object.keys(excerptFixes).length);
console.log("Remaining truncated excerpts:", remaining);
