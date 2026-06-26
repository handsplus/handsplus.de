#!/usr/bin/env node
/**
 * Prüft die 19 GSC-404-URLs gegen next.config.js (Unicode + percent-encoded).
 */
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const configSrc = readFileSync(join(root, "next.config.js"), "utf8");

const gsc404Paths = [
  "/post/wann-brauche-ich-eine-fachkraft-für-arbeitssicherheit",
  "/post/arbeitssicherheit-gefährdungsbeurteilung",
  "/überuns",
  "/post/brandschutz-brennbare-stoffe-gefahren-und-eigenschaften",
  "/post/wem-muss-die-fachkraft-für-arbeitssicherheit-unterstellt-werden",
  "/post/brandschutzbeauftragte",
  "/post/effektiver-brandschutz-warum-sprinkleranlagen-leben-retten-und-mythen-widerlegen",
  "/post/akteure-im-arbeitsschutz-wer-kümmert-sich-um-was",
  "/post/arbeitssicherheit-auf-baustellen-sigeko-sicherheits-und-gesundheitsschutzkoordinator",
  "/post/muss-eine-ladestation-für-elektro-autos-in-garagen-genehmigt-werden",
  "/post/muss-der-arbeitgeber-getränke-zur-verfügung-stellen",
  "/post/pflichtenübertragung-im-arbeitsschutz",
  "/post/sicherheitsbeauftragte-sibe",
  "/post/dguv-vorschrift-1-grundsätze-der-prävention-im-arbeitsschutz",
  "/post/wie-ist-der-arbeitsschutz-organisiert",
  "/post/brandschutz-erlaubnisschein-für-schweiß-schneid-löt-auftau-und-trennschleifarbeiten",
  "/post/brandschutz-brandbekämpfung-von-elektrofahrzeugen",
  "/about-4",
  "/leistung-hseq",
];

const missing = gsc404Paths.filter((p) => !configSrc.includes(`"${p}"`));

if (missing.length) {
  console.error("FEHLEND in next.config.js:\n", missing.join("\n "));
  process.exit(1);
}

if (!configSrc.includes("www.handsplus.de")) {
  console.error("FEHLEND: www.handsplus.de → handsplus.de");
  process.exit(1);
}

console.log("OK: alle 19 GSC-404-Pfade + www-Redirect in next.config.js");
