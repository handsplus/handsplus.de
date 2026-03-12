import Link from "next/link";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/brandschutz",
  title: "Brandschutz Köln – Experten für Beratung & Konzepte für Ihr Unternehmen",
  description: "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz. Brandschutzordnungen, Evakuierungskonzepte, Brandschutzhelfer.",
  keywords: ["Brandschutz Köln", "Brandschutzbeauftragter", "Brandschutzordnung", "Evakuierungskonzept", "Brandschutzhelfer"],
});

function BrandschutzJsonLd() {
  const url = `${BASE_URL}/brandschutz`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brandschutzberatung und Brandschutzkonzepte in Köln",
    description:
      "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz inklusive Brandschutzordnung, Evakuierungskonzepten und Ausbildung von Brandschutzhelfern.",
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Köln und Umgebung",
    },
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Health and Safety +",
      url: BASE_URL,
    },
    serviceType: ["Brandschutz", "Brandschutzbeauftragter"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const listItems = [
  "Erstellung von brandschutztechnischen Stellungnahmen und Konzepten",
  "Erstellung und Fortschreibung von Brandschutzordnungen",
  "Erstellung und Fortschreibung von Evakuierungskonzepten",
  "Überprüfung und Fortschreibung von Feuerwehrplänen sowie Flucht- und Rettungsplänen",
  "Beurteilung von Brandgefährdungen an Arbeitsplätzen",
  "Ermittlung von Brand- und Explosionsgefahren",
  "Unterstützung bei der Umsetzung behördlicher Anordnungen",
  "Ausbildung von Brandschutzhelfern",
  "Umsetzung behördlicher Anordnungen sowie Erfüllung der Anforderungen des Feuerversicherers",
  "Einhaltung von Brandschutzbestimmungen bei Neu-, Um- und Erweiterungsbauten, Nutzungsänderungen, Anmietungen und Beschaffungen",
  "Ausstattung der Arbeitsstätten mit Feuerlöscheinrichtungen und bei der Auswahl der Löschmittel",
  "Planen, Organisieren und Durchführen von Evakuierungsübungen",
  "Teilnehmen an behördlichen Brandschauen und Durchführen von internen Brandschutzbegehungen",
  "Melden von Mängeln und Maßnahmen zu deren Beseitigung vorschlagen und die Mängelbeseitigung überwachen",
  "Unterstützen der Führungskräfte bei den regelmäßigen Unterweisungen der Beschäftigten im Brandschutz",
  "Aus- und Fortbildung von Beschäftigten mit besonderen Aufgaben im Brandfall, z.B. in der Handhabung von Feuerlöscheinrichtungen (Brandschutzhelfer gemäß ASR A2.2)",
  "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz",
];

export default function BrandschutzPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrandschutzJsonLd />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Brandschutz</h1>
        <p className="text-xl text-slate-600 mb-8">
          Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz
        </p>
        <p className="text-slate-600 mb-10">
          Grundbetreuung sowie betriebsspezifische Betreuung im Brandschutz gemäß DGUV Vorschrift 2 und DGUV I 205-003
        </p>

        <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
          {listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <section className="p-6 sm:p-8 rounded-xl bg-slate-50 mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Brandschutz – Schutz und Sicherheit für Ihr Unternehmen</h2>
          <p className="text-slate-600 mb-4">
            Ein effektiver Brandschutz ist unverzichtbar, um Menschen, Sachwerte und betriebliche Abläufe zu schützen. Gesetzliche Vorschriften sind streng – wir helfen Ihnen, alle Anforderungen zu erfüllen und Risiken zu minimieren. Wir bieten Ihnen eine umfassende Betreuung in allen Bereichen des Brandschutzes, von der Erstellung individueller Brandschutzkonzepte über die Prüfung und Fortschreibung von Brandschutzordnungen bis hin zur Überprüfung von Feuerwehr- und Rettungsplänen. Zudem bewerten wir Brandgefährdungen an Arbeitsplätzen und unterstützen Sie bei der Umsetzung behördlicher Anordnungen.
          </p>
          <p className="text-slate-600">
            Unsere Experten begleiten Sie bei behördlichen Abnahmen, Erweiterungen und Genehmigungsverfahren und beraten Sie zur optimalen Ausstattung mit Feuerlöscheinrichtungen. Wir planen und koordinieren Brandschutzmaßnahmen, helfen bei der Meldung und Behebung von Brandschutzmängeln und führen Brandschutzunterweisungen für Führungskräfte sowie Beschäftigte durch. Ob baulicher, anlagentechnischer oder organisatorischer Brandschutz – wir bieten Ihnen eine vollständige Betreuung und individuelle Lösungen, die auf Ihr Unternehmen und Vorhaben abgestimmt sind.
          </p>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
          >
            Jetzt Angebot anfragen
          </Link>
        </div>
      </div>
    </div>
  );
}
