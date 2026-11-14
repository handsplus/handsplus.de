/**
 * Alte Wix-/Blog-Pfade → kanonische Apex-Ziele (ein Hop, Keys in NFC).
 * Genutzt von middleware.ts für www + Apex.
 */
export const LEGACY_WIX: Record<string, string> = {
  "/überuns": "/ueber-uns",
  "/about-4": "/ueber-uns",
  "/leistung-hseq": "/leistungen",
  "/post/akteure-im-arbeitsschutz-wer-kümmert-sich-um-was": "/wissen/blog/akteure-arbeitsschutz",
  "/post/muss-der-arbeitgeber-getränke-zur-verfügung-stellen":
    "/wissen/blog/getraenke-am-arbeitsplatz",
  "/post/welche-auswirkungen-hat-eine-nicht-erfolgte-bestellung-einer-fachkraft-für-arbeitssicherheit":
    "/wissen/blog/bestellung-fachkraft-arbeitssicherheit",
  "/post/wann-brauche-ich-eine-fachkraft-für-arbeitssicherheit":
    "/wissen/blog/bestellung-fachkraft-arbeitssicherheit",
  "/post/brandschutz-beim-umgang-mit-lithium-ionen-batterien-begriffsbestimmungen":
    "/wissen/blog/brandschutz-lithium-ionen-batterien",
  "/post/brandschutz-brennbare-stoffe-gefahren-und-eigenschaften":
    "/wissen/blog/brandschutz-brennbare-stoffe",
  "/post/dguv-vorschrift-1-grundsätze-der-prävention-im-arbeitsschutz":
    "/wissen/blog/dguv-vorschrift-2",
  "/post/arbeitssicherheit-gefährdungsbeurteilung":
    "/wissen/blog/gefaehrdungsbeurteilung-ablauf",
  "/post/arbeitssicherheit-auf-baustellen-sigeko-sicherheits-und-gesundheitsschutzkoordinator":
    "/sigeko",
  "/post/arbeitsschutz": "/arbeitsschutz",
  "/post/brandschutzbeauftragte": "/brandschutz",
  "/post/mobbing-am-arbeitsplatz-ursachen-folgen-und-prävention":
    "/wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz",
  "/post/pflichtenübertragung-im-arbeitsschutz": "/arbeitsschutz",
  "/post/sicherheitsbeauftragte-sibe": "/arbeitsschutz",
  "/post/wem-muss-die-fachkraft-für-arbeitssicherheit-unterstellt-werden": "/arbeitsschutz",
  "/post/wie-ist-der-arbeitsschutz-organisiert": "/arbeitsschutz",
  "/post/brandschutz-erlaubnisschein-für-schweiß-schneid-löt-auftau-und-trennschleifarbeiten":
    "/brandschutz",
  "/post/effektiver-brandschutz-warum-sprinkleranlagen-leben-retten-und-mythen-widerlegen":
    "/brandschutz",
  "/post/brandschutz-brandbekämpfung-von-elektrofahrzeugen": "/brandschutz",
  "/post/muss-eine-ladestation-für-elektro-autos-in-garagen-genehmigt-werden":
    "/elektrosicherheit",
  // P1-5 404 → kanonische Ziele
  "/post/dguv-vorschrift-2": "/wissen/blog/dguv-vorschrift-2",
  "/post/fachkraft-für-arbeitssicherheit":
    "https://arbeitssicherheit.nrw/fachkraft-fuer-arbeitssicherheit-koeln",
  "/post/brandschutz-löschmittelauswahl-nach-brandklasse":
    "https://brandschutzkoeln.com/ratgeber/brandklassen-loeschertypen-feuerloescher-din-en-2",
};

export const CANONICAL_ORIGIN = "https://handsplus.de";

export function normalizeLegacyPath(rawPathname: string): string {
  let p: string;
  try {
    p = decodeURIComponent(rawPathname);
  } catch {
    // Latin-1 / fehlerhafte Prozentkodierung (Wix-Altlasten)
    p = unescape(rawPathname);
  }
  p = p.normalize("NFC").replace(/\/+$/, "") || "/";
  return p;
}

export function resolveLegacyTarget(pathname: string): string | null {
  const p = normalizeLegacyPath(pathname);
  return LEGACY_WIX[p] ?? LEGACY_WIX[p.toLowerCase()] ?? null;
}
