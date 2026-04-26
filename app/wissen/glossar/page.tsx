import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

export const metadata = pageMetadata({
  path: "/wissen/glossar",
  title: "Glossar: Arbeitssicherheit, Brandschutz, SiGeKo (FaSi, BSB, GBU, ASiG, DGUV, VEFK) | H&S+",
  description: "Wichtige Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo – kurz erklärt.",
  keywords: ["Glossar Arbeitsschutz", "Brandschutz Begriffe", "SiGeKo", "FaSi", "BSB", "DGUV", "VEFK", "ASiG"],
});

const glossarEntries = [
  { abbr: "ASiG", term: "Arbeitssicherheitsgesetz", definition: "Das Arbeitssicherheitsgesetz verpflichtet Arbeitgeber, Betriebsärzte und Fachkräfte für Arbeitssicherheit in bestimmter Anzahl zu bestellen. Die konkrete Ausgestaltung regelt die DGUV Vorschrift 2." },
  { abbr: "BSB", term: "Brandschutzbeauftragter", definition: "Eine vom Arbeitgeber bestellte Person, die in Fragen des Brandschutzes berät und bei der Umsetzung unterstützt. Kann betriebsintern oder extern (z. B. von uns) erbracht werden." },
  { abbr: "DGUV", term: "Deutsche Gesetzliche Unfallversicherung", definition: "Spitzenverband der Berufsgenossenschaften und Unfallkassen. Er gibt u. a. die DGUV Vorschrift 2 (Betreuung durch FaSi und Betriebsarzt) und Vorschrift 3 (Elektrische Anlagen und Betriebsmittel) heraus." },
  { abbr: "FaSi", term: "Fachkraft für Arbeitssicherheit", definition: "Fachperson, die den Arbeitgeber in allen Fragen der Arbeitssicherheit unterstützt – z. B. bei Gefährdungsbeurteilungen, Betriebsbegehungen und Unterweisungen. Die Betreuung kann extern erfolgen." },
  { term: "Gefährdungsbeurteilung", abbr: "GBU", definition: "Vom Arbeitgeber durchzuführende systematische Bewertung der Arbeitsbedingungen, um Gefahren zu erkennen und Schutzmaßnahmen festzulegen. Dokumentation ist Pflicht. Wir unterstützen bei der Erstellung." },
  { abbr: "PSA", term: "Persönliche Schutzausrüstung", definition: "Ausrüstung, die Beschäftigte gegen Risiken schützt (z. B. Helm, Handschuhe, Schutzbrille). Der Arbeitgeber muss sie bereitstellen und deren Einsatz in der Gefährdungsbeurteilung berücksichtigen." },
  { abbr: "SiGeKo", term: "Sicherheits- und Gesundheitsschutzkoordinator", definition: "Auf Baustellen mit mehreren Arbeitgebern muss ein SiGeKo bestellt werden. Er koordiniert den Arbeitsschutz, erstellt den SiGePlan und führt die Unternehmerübergabe durch." },
  { abbr: "SiGePlan", term: "Sicherheits- und Gesundheitsschutzplan", definition: "Dokument des SiGeKo, in dem die für die Baustelle relevanten Arbeitsschutz- und Gesundheitsschutzmaßnahmen festgehalten werden. Wird in der Koordinierungsphase erstellt." },
  { term: "Unternehmerübergabe", abbr: "Unternehmerübergabe / -abnahme", definition: "Übergabe der Baustelle bzw. von Teilbereichen an nachfolgende Unternehmen unter Beteiligung des SiGeKo. Dokumentation der Übergabe ist erforderlich." },
  { term: "Unterweisung", abbr: null, definition: "Vom Arbeitgeber zu erteilende, regelmäßige Anleitung der Beschäftigten zu sicherem Verhalten am Arbeitsplatz. Muss dokumentiert werden. Wir bieten Unterweisungen zu Arbeitssicherheit und Brandschutz an." },
  { abbr: "VEFK", term: "Verantwortliche Elektrofachkraft", definition: "Vom Arbeitgeber bestellte Person, die die Verantwortung für die elektrotechnischen Anlagen und Prüfungen trägt. Qualifikation nach DIN VDE 1000-10. Kann extern bestellt werden." },
];

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
          Wichtige Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo – kurz erklärt.
        </p>

        <dl className="mt-12 space-y-10">
          {glossarEntries.map((entry) => (
            <div key={entry.term} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
              <dt className="flex flex-wrap items-baseline gap-2">
                {entry.abbr && (
                  <span className="text-sm font-semibold uppercase tracking-wide text-primary-800 bg-primary-50 px-2 py-0.5 rounded">
                    {entry.abbr}
                  </span>
                )}
                <span className="text-xl font-semibold text-slate-900">{entry.term}</span>
              </dt>
              <dd className="mt-2 text-slate-600 leading-relaxed">{entry.definition}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-16 p-6 rounded-xl bg-primary-50 border border-primary-100">
          <h2 className="text-xl font-semibold text-slate-900">Individuelle Beratung</h2>
          <p className="mt-2 text-slate-600">
            Sie brauchen Unterstützung bei Arbeitssicherheit, Brandschutz oder SiGeKo? Wir beraten Sie gerne.
          </p>
          <Link
            href="/kontakt"
            className="mt-4 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Kostenlose Erstberatung
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
