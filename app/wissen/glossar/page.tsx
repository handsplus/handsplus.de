import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://handsplus.de";

export const metadata = pageMetadata({
  path: "/wissen/glossar",
  title: "Glossar Arbeitssicherheit, Brandschutz und SiGeKo",
  description:
    "Begriffe aus Arbeitsschutz, Brandschutz und Baustellenkoordination – von ArbSchG und Gefährdungsbeurteilung über BSO und SiGe-Plan bis DGUV Vorschrift 2 und 3.",
  keywords: [
    "Glossar Arbeitsschutz",
    "ArbSchG",
    "Gefährdungsbeurteilung",
    "Fachkraft für Arbeitssicherheit",
    "Brandschutzbeauftragter",
    "SiGeKo",
    "DGUV Vorschrift 2",
    "DGUV Vorschrift 3",
    "ASiG",
    "BaustellV",
  ],
});

type GlossarGroup = "arbeitsschutz" | "brandschutz" | "sigeko" | "elektro";

const groupLabels: Record<GlossarGroup, string> = {
  arbeitsschutz: "Arbeitsschutz",
  brandschutz: "Brandschutz",
  sigeko: "SiGeKo und Baustelle",
  elektro: "Elektrosicherheit",
};

const glossarEntries: {
  abbr?: string | null;
  term: string;
  definition: string;
  group: GlossarGroup;
}[] = [
  // Arbeitsschutz
  {
    group: "arbeitsschutz",
    abbr: "ArbSchG",
    term: "Arbeitsschutzgesetz",
    definition:
      "Zentrales Gesetz zum Schutz von Gesundheit und Sicherheit der Beschäftigten. Verpflichtet Arbeitgeber u. a. zur Gefährdungsbeurteilung, Unterweisungen, Dokumentation und Mitwirkung der Beschäftigten. Grundlage für Verordnungen wie ArbStättV, BetrSichV und GefStoffV.",
  },
  {
    group: "arbeitsschutz",
    abbr: "ASA",
    term: "Arbeitsschutzausschuss",
    definition:
      "Gremium aus Arbeitgeber, Fachkraft für Arbeitssicherheit, Betriebsarzt, Sicherheitsbeauftragten und Betriebsrat. Berät zu Arbeitsschutz, bewertet Maßnahmen und bereitet Entscheidungen der Geschäftsführung vor.",
  },
  {
    group: "arbeitsschutz",
    abbr: "ArbStättV",
    term: "Arbeitsstättenverordnung",
    definition:
      "Regelt Anforderungen an Arbeitsstätten – Beleuchtung, Lüftung, Sanitärräume, Verkehrswege, Bildschirmarbeitsplätze und ergonomische Gestaltung. Ergänzt das ArbSchG für den baulichen und organisatorischen Arbeitsplatz.",
  },
  {
    group: "arbeitsschutz",
    abbr: "ASiG",
    term: "Arbeitssicherheitsgesetz",
    definition:
      "Verpflichtet Arbeitgeber zur Bestellung von Betriebsärzten und Fachkräften für Arbeitssicherheit. Umfang und Betreuungszeit regelt die DGUV Vorschrift 2.",
  },
  {
    group: "arbeitsschutz",
    term: "Betriebsanweisung",
    definition:
      "Schriftliche Anweisung für sicherheitsrelevante Tätigkeiten oder Stoffe – z. B. bei Gefahrstoffen, Maschinen oder Heißarbeit. Muss verständlich, auffindbar und mit der Gefährdungsbeurteilung abgestimmt sein.",
  },
  {
    group: "arbeitsschutz",
    abbr: "BG",
    term: "Berufsgenossenschaft",
    definition:
      "Träger der gesetzlichen Unfallversicherung für bestimmte Branchen. Berät zu Unfallverhütung, führt Begehungen durch und setzt Unfallverhütungsvorschriften (DGUV) um.",
  },
  {
    group: "arbeitsschutz",
    abbr: "BetrSichV",
    term: "Betriebssicherheitsverordnung",
    definition:
      "Regelt den sicheren Einsatz von Arbeitsmitteln, Anlagen und überwachungsbedürftigen Anlagen. Verlangt Gefährdungsbeurteilung, wiederkehrende Prüfungen und qualifizierte Instandhaltung.",
  },
  {
    group: "arbeitsschutz",
    term: "Betriebsarzt",
    definition:
      "Arzt, den der Arbeitgeber nach ASiG bestellt. Berät zu arbeitsbedingten Gesundheitsrisiken, Vorsorge und arbeitsmedizinischen Fragen – ergänzt die Fachkraft für Arbeitssicherheit.",
  },
  {
    group: "arbeitsschutz",
    term: "Fachkraft für Arbeitssicherheit",
    abbr: "SiFa",
    definition:
      "Fachperson nach ASiG, die den Arbeitgeber in Fragen der Arbeitssicherheit berät – Gefährdungsbeurteilung, Begehungen, Unterweisungen, ASA. Betreuung kann intern oder extern erfolgen.",
  },
  {
    group: "arbeitsschutz",
    abbr: "GefStoffV",
    term: "Gefahrstoffverordnung",
    definition:
      "Regelt Umgang mit Gefahrstoffen: Ermittlung, Beurteilung, Schutzmaßnahmen, Kennzeichnung, Lagerung, Betriebsanweisungen und Unterweisung. Ergänzt die Gefährdungsbeurteilung für chemische und biologische Stoffe.",
  },
  {
    group: "arbeitsschutz",
    term: "Gefährdungsbeurteilung",
    abbr: "GBU",
    definition:
      "Systematische Ermittlung und Bewertung von Gefährdungen am Arbeitsplatz mit Ableitung von Schutzmaßnahmen nach dem STOP-Prinzip. Pflicht des Arbeitgebers nach ArbSchG – fortlaufend zu aktualisieren und zu dokumentieren.",
  },
  {
    group: "arbeitsschutz",
    term: "Gewerbeaufsicht",
    definition:
      "Landesbehörde, die Arbeitsschutz und technische Regeln in Betrieben überwacht. Kann bei Verstößen Anordnungen erlassen und Bußgelder verhängen.",
  },
  {
    group: "arbeitsschutz",
    abbr: "DGUV",
    term: "Deutsche Gesetzliche Unfallversicherung",
    definition:
      "Spitzenverband der Berufsgenossenschaften. Gibt u. a. DGUV Vorschrift 2 (Betreuung) und Vorschrift 3 (elektrische Betriebsmittel) sowie Branchenregeln heraus.",
  },
  {
    group: "arbeitsschutz",
    abbr: "DGUV V2",
    term: "DGUV Vorschrift 2",
    definition:
      "Regelt Betreuung durch Betriebsärzte und Fachkräfte für Arbeitssicherheit – Grund- und Zusatzbetreuung nach Betriebsart und Beschäftigtenzahl, Betreuungsplan und SiFa-Jahresbericht.",
  },
  {
    group: "arbeitsschutz",
    term: "Ersthelfer",
    definition:
      "Im Betrieb ausgebildete Personen für Erste Hilfe bis zum Eintreffen des Rettungsdienstes. Anzahl und Ausbildung richten sich nach Betriebsgröße und Gefährdung.",
  },
  {
    group: "arbeitsschutz",
    abbr: "ISO 45001",
    term: "Arbeitsschutzmanagementsystem ISO 45001",
    definition:
      "Internationale Norm für ein systematisches Arbeitsschutzmanagementsystem. Baut auf Gefährdungsbeurteilung und Prozessen auf – Zertifizierung optional, Pflichterfüllung ersetzt sie nicht.",
  },
  {
    group: "arbeitsschutz",
    term: "Pflichtenübertragung",
    definition:
      "Übertragung einzelner Arbeitsschutzaufgaben von der Geschäftsführung auf Führungskräfte – schriftlich, konkret und mit Ressourcen. Ersetzt nicht die Gesamtverantwortung des Arbeitgebers.",
  },
  {
    group: "arbeitsschutz",
    abbr: "PSA",
    term: "Persönliche Schutzausrüstung",
    definition:
      "Ausrüstung zum Schutz vor Risiken (Helm, Handschuhe, Schutzbrille u. a.). Bereitstellung und Einsatz müssen in der Gefährdungsbeurteilung begründet und unterwiesen werden.",
  },
  {
    group: "arbeitsschutz",
    abbr: "SiBe",
    term: "Sicherheitsbeauftragter",
    definition:
      "Von Beschäftigten gewählte Person, die den Arbeitsschutz im Betrieb mitverantwortet – z. B. bei Begehungen, Unfällen und Unterweisungen. Ergänzt Fachkraft für Arbeitssicherheit und Betriebsarzt.",
  },
  {
    group: "arbeitsschutz",
    term: "SiFa-Jahresbericht",
    definition:
      "Jährlicher Bericht der Fachkraft für Arbeitssicherheit an die Geschäftsführung nach DGUV Vorschrift 2 – mit Rückblick auf Gefährdungsbeurteilungen, Begehungen, Unterweisungen, Unfälle und offene Maßnahmen.",
  },
  {
    group: "arbeitsschutz",
    term: "STOP-Prinzip",
    definition:
      "Rangfolge der Schutzmaßnahmen: Substitution, technische, organisatorische Maßnahmen, persönliche Schutzausrüstung. Grundlage für die Ableitung von Maßnahmen in der Gefährdungsbeurteilung.",
  },
  {
    group: "arbeitsschutz",
    term: "Unterweisung",
    definition:
      "Pflicht des Arbeitgebers, Beschäftigte zu sicherem Verhalten anzuleiten – vor Tätigkeitsbeginn, bei Änderungen und regelmäßig. Muss während der Arbeitszeit, verständlich und dokumentiert erfolgen.",
  },
  // Brandschutz
  {
    group: "brandschutz",
    abbr: "BMA",
    term: "Brandmeldeanlage",
    definition:
      "Technische Anlage zur Früherkennung und Meldung von Bränden. Erfordert regelmäßige Wartung und Prüfung; im Betrieb mit Brandschutzordnung und Evakuierungsplan verzahnt.",
  },
  {
    group: "brandschutz",
    abbr: "BSB",
    term: "Brandschutzbeauftragter",
    definition:
      "Vom Arbeitgeber bestellte Person für organisatorischen Brandschutz im Betrieb – Begehungen, Maßnahmen, Abstimmung mit Fachkraft für Arbeitssicherheit und Betriebsarzt.",
  },
  {
    group: "brandschutz",
    abbr: "BSH",
    term: "Brandschutzhelfer",
    definition:
      "Geschulte Personen zur Brandbekämpfung in der Entstehungsphase und zur Unterstützung bei Evakuierung. Ausbildung nach DGUV 205-023 (mehrere Unterrichtseinheiten, regelmäßige Auffrischung).",
  },
  {
    group: "brandschutz",
    abbr: "BSO",
    term: "Brandschutzordnung",
    definition:
      "Betriebliche Regelung des Brandschutzes, häufig nach DIN 14096 in Teil A (Allgemeines), B (Arbeitsstätten) und C (Spezielle Betriebsteile). Verknüpft Alarmierung, Verhalten im Brandfall und technische Einrichtungen.",
  },
  {
    group: "brandschutz",
    term: "Brandschutzkonzept",
    definition:
      "Brandschutztechnische Darstellung für Neubau, Umbau oder Nutzungsänderung – Rettungswege, Brandabschnitte, Anlagen. Grundlage der Baugenehmigung nach Bauordnung.",
  },
  {
    group: "brandschutz",
    term: "Evakuierung",
    definition:
      "Geordnetes Verlassen des Gebäudes oder Bereichs bei Gefahr. Erfordert Alarmplan, Fluchtwege, Sammelstellen und regelmäßige Übungen.",
  },
  {
    group: "brandschutz",
    term: "Flucht- und Rettungsplan",
    definition:
      "Zeichnerische Darstellung von Fluchtwegen, Notausgängen, Sammelstellen und Einrichtungen – nach ASR A2.3 und DIN ISO 23601. Muss aktuell gehalten und gut sichtbar ausgehängt werden.",
  },
  {
    group: "brandschutz",
    term: "Nutzungsänderung",
    definition:
      "Änderung der Nutzung eines Gebäudes oder Teils davon (z. B. Wohnen zu Gewerbe). Oft brandschutztechnische Nachweise und Genehmigung erforderlich.",
  },
  {
    group: "brandschutz",
    term: "Sonderbau",
    definition:
      "Bauvorhaben mit erhöhten brandschutztechnischen Anforderungen (z. B. Versammlungsstätte, Hochhaus, Krankenhaus). Erfordert in der Regel Brandschutzkonzept und besondere Nachweise.",
  },
  {
    group: "brandschutz",
    term: "Vorbeugender Brandschutz",
    definition:
      "Maßnahmen zur Verhinderung von Bränden und zur Begrenzung von Brandfolgen – baulich, anlagentechnisch und organisatorisch. Umfasst u. a. Brandlastenkontrolle, Heißarbeit und Wartung.",
  },
  {
    group: "brandschutz",
    abbr: "RWA",
    term: "Rauch- und Wärmeabzug",
    definition:
      "Anlage zum Ableiten von Rauch und Wärme bei Brand – schützt Fluchtwege und erleichtert Löscharbeiten. Wartung und Funktionsprüfung sind Pflicht.",
  },
  // SiGeKo
  {
    group: "sigeko",
    term: "Baustellenordnung",
    definition:
      "Regelwerk auf der Baustelle – Verkehr, Lärm, Zutritt, Sozialräume, Heißarbeit. Teil des SiGe-Plans und verbindlich für alle Unternehmen auf der Baustelle.",
  },
  {
    group: "sigeko",
    abbr: "BaustellV",
    term: "Baustellenverordnung",
    definition:
      "Verordnung zum Schutz von Sicherheit und Gesundheit auf Baustellen. Regelt SiGeKo-Pflicht, SiGe-Plan, Vorankündigung, Koordinierung und besonders gefährliche Arbeiten.",
  },
  {
    group: "sigeko",
    term: "Besonders gefährliche Arbeiten",
    definition:
      "Tätigkeiten nach Anhang II BaustellV (z. B. Absturz, Abbruch, Gräben, Hochspannung). Erfordern besondere Planung, Aufsicht und Dokumentation im SiGe-Plan.",
  },
  {
    group: "sigeko",
    term: "Koordinator für die Planung",
    definition:
      "SiGeKo-Rolle in der Planungsphase: sicherheitsrelevante Aspekte in die Ausführungsplanung einbringen, SiGe-Plan erstellen, Vorankündigung vorbereiten.",
  },
  {
    group: "sigeko",
    abbr: "RAB 30",
    term: "Regeln zum Arbeitsschutz auf Baustellen",
    definition:
      "DGUV-Regel mit praxisnahen Vorgaben zur Umsetzung der BaustellV – Qualifikation des SiGeKo, Inhalt von SiGe-Plan und Begehungen.",
  },
  {
    group: "sigeko",
    abbr: "SiGeKo",
    term: "Sicherheits- und Gesundheitsschutzkoordinator",
    definition:
      "Koordiniert auf Baustellen mit mehreren Arbeitgebern den Arbeitsschutz – SiGe-Plan, Begehungen, Einweisungen, Übergaben. Pflicht nach BaustellV bei bestimmten Bauvorhaben.",
  },
  {
    group: "sigeko",
    term: "SiGe-Plan",
    abbr: "SiGePlan",
    definition:
      "Sicherheits- und Gesundheitsschutzplan für die Baustelle. Enthält Gefährdungen, Maßnahmen, Baustellenordnung und Regelungen zu besonders gefährlichen Arbeiten – versioniert und am Bauzaun verfügbar.",
  },
  {
    group: "sigeko",
    term: "Unternehmerübergabe",
    definition:
      "Übergabe von Bauabschnitten zwischen ausführenden Unternehmen unter Beteiligung des SiGeKo – mit Protokoll zu Restgefährdungen, Schutzmaßnahmen und Zuständigkeiten.",
  },
  {
    group: "sigeko",
    term: "Vorankündigung",
    definition:
      "Information der beteiligten Unternehmen vor Baubeginn über SiGe-Plan, Ansprechpartner und Gefährdungen – Pflicht nach BaustellV.",
  },
  // Elektro
  {
    group: "elektro",
    term: "Befähigte Person",
    definition:
      "Person mit Fachkenntnis für bestimmte elektrische Arbeiten oder Prüfungen – Qualifikation und Beauftragung müssen dokumentiert sein.",
  },
  {
    group: "elektro",
    term: "Betriebsmittelprüfung",
    definition:
      "Wiederkehrende Prüfung ortsveränderlicher und ortsfester elektrischer Betriebsmittel nach DGUV Vorschrift 3 – durch befähigte Personen, mit Prüfplakette und Protokoll.",
  },
  {
    group: "elektro",
    abbr: "DGUV V3",
    term: "DGUV Vorschrift 3",
    definition:
      "Unfallverhütungsvorschrift für elektrische Anlagen und Betriebsmittel. Verlangt Prüfungen durch befähigte Personen – Fristen abhängig von Gerätetyp und Einsatzumgebung.",
  },
  {
    group: "elektro",
    abbr: "VEFK",
    term: "Verantwortliche Elektrofachkraft",
    definition:
      "Vom Arbeitgeber bestellte Person mit Verantwortung für elektrische Anlagen und Organisation der Prüfungen – Qualifikation nach DIN VDE 1000-10. Kann extern beauftragt werden.",
  },
];

const groupOrder: GlossarGroup[] = ["arbeitsschutz", "brandschutz", "sigeko", "elektro"];

function GlossarJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossar Arbeitssicherheit, Brandschutz & SiGeKo",
    description: "Wichtige Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo – kurz erklärt.",
    url: `${BASE_URL}/wissen/glossar`,
    hasDefinedTerm: glossarEntries.map((e) => ({
      "@type": "DefinedTerm",
      name: e.term,
      ...(e.abbr ? { alternateName: e.abbr } : {}),
      description: e.definition,
      inDefinedTermSet: `${BASE_URL}/wissen/glossar`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function GlossarPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <GlossarJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Wissen", path: "/wissen" }, { name: "Glossar" }]} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Glossar
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">
          Wichtige Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo – kurz erklärt. Vertiefungen finden Sie in
          unseren{" "}
          <Link href="/wissen/ratgeber" className="text-primary-800 hover:text-primary-900 underline underline-offset-2">
            Ratgebern
          </Link>{" "}
          und im{" "}
          <Link href="/wissen/blog" className="text-primary-800 hover:text-primary-900 underline underline-offset-2">
            Blog
          </Link>
          .
        </p>

        <div className="mt-12 space-y-14">
          {groupOrder.map((group) => {
            const entries = glossarEntries
              .filter((e) => e.group === group)
              .sort((a, b) => a.term.localeCompare(b.term, "de"));
            return (
              <section key={group}>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 border-b border-slate-200 pb-3">
                  {groupLabels[group]}
                </h2>
                <dl className="mt-8 space-y-8">
                  {entries.map((entry) => (
                    <div
                      key={entry.term}
                      className="border-b border-slate-100 pb-8 last:border-0 last:pb-0"
                    >
                      <dt className="flex flex-wrap items-baseline gap-2">
                        {entry.abbr && (
                          <span className="text-sm font-semibold uppercase tracking-wide text-primary-800 bg-primary-50 px-2 py-0.5 rounded">
                            {entry.abbr}
                          </span>
                        )}
                        <span className="text-lg font-semibold text-slate-900">{entry.term}</span>
                      </dt>
                      <dd className="mt-2 text-slate-600 leading-relaxed">{entry.definition}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          })}
        </div>

        <section className="mt-16 p-6 rounded-xl bg-primary-50 border border-primary-100">
          <h2 className="text-xl font-semibold text-slate-900">Individuelle Beratung</h2>
          <p className="mt-2 text-slate-600">
            Sie brauchen Unterstützung bei Arbeitssicherheit, Brandschutz oder SiGeKo? Wir beraten Sie gerne.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Erstberatung anfragen
          </Link>
        </section>

        <div className="mt-10">
          <Link href="/wissen" className="text-primary-800 font-medium hover:text-primary-900 inline-flex items-center">
            ← Zurück zu Wissen & Ressourcen
          </Link>
        </div>
      </div>
    </div>
  );
}
