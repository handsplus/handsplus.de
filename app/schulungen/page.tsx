import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/schulungen",
  title: "Arbeitsschutz & Brandschutz Schulungen Köln – Weiterbildung für Sie und Ihr Unternehmen",
  description: "Maßgeschneiderte Schulungs- und Weiterbildungsangebote – online oder vor Ort. Sicherheitsbeauftragte, Brandschutzhelfer, Elektrofachkräfte, Qualitätsmanagement.",
  keywords: ["Schulungen Arbeitsschutz", "Brandschutzhelfer Schulung", "Sicherheitsbeauftragte", "Unterweisung", "Weiterbildung Köln"],
});

const arbeitsschutzTopics = [
  "Sicherheitsbeauftragte",
  "Evakuierungshelfer/in",
  "Brandschutzhelfer/in",
  "Jährliche und anlassbezogene Unterweisung",
  "Beauftragte für Leitern und Tritte",
  "Beauftragte für Regale",
  "Beauftragte für Ladungssicherung",
  "Ausbildung und Unterweisung im Gabelstaplerfahren",
  "Schulungen für Kran-, Hubarbeitsbühnen- und Gerüstnutzung",
  "Schulungen für Elektrofachkräfte, Anlagenverantwortliche, Arbeitsverantwortliche, Elektrofachkräfte für festgelegte Tätigkeiten sowie elektrotechnisch unterwiesene Personen",
];

const qualitaetsmanagementTopics = [
  "DIN EN ISO 9001:2015 Anforderungen",
  "Einstieg ins Qualitätsmanagement",
  "Beauftragte für integrierte Managementsysteme",
  "Qualitätsbeauftragte",
  "Nachhaltigkeit als Qualitätsmerkmal erkennen und umsetzen",
  "Prozessmessung und -überwachung",
  "Implementierung eines Qualitätsmanagementsystems (QMS) im Unternehmen",
  "Jährliche und anlassbezogene Schulungen",
];

export default function SchulungenPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Schulungen – Schulungs- und Weiterbildungsangebote</h1>
        <p className="text-xl text-slate-600 mb-12">
          Maßgeschneiderte Schulungs- und Weiterbildungsangebote, die individuell auf Sie abgestimmt und zeitlich flexibel gestaltet werden – online oder vor Ort.
        </p>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Arbeitsschutz</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            {arbeitsschutzTopics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Qualitätsmanagement</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            {qualitaetsmanagementTopics.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="p-6 sm:p-8 rounded-xl bg-slate-50">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Individuelle Schulungen für mehr Sicherheit und Qualität</h2>
          <p className="text-slate-600 mb-4">
            Unsere Schulungs- und Weiterbildungsangebote werden speziell auf die Anforderungen Ihres Unternehmens zugeschnitten. Ob online oder vor Ort – wir bieten Ihnen flexible und praxisnahe Schulungen für verschiedene Fachbereiche.
          </p>
          <p className="text-slate-600 mb-4">
            Wir qualifizieren Ihre Mitarbeitenden in allen relevanten Bereichen des Arbeits- und Brandschutzes. Dazu gehören Schulungen für Sicherheitsbeauftragte, Evakuierungshelfer/innen und Brandschutzhelfer/innen sowie jährliche und anlassbezogene Unterweisungen. Zudem bieten wir spezielle Schulungen für den sicheren Umgang mit Leitern, Tritten und Regalen sowie für den Brandschutz, die Ladungssicherung und die Bedienung von Gabelstaplern an.
          </p>
          <p className="text-slate-600 mb-4">
            Unsere Ausbildung umfasst zudem Schulungen für Elektrofachkräfte, Anlagenverantwortliche und Arbeitsverantwortliche. Auch Elektrofachkräfte für festgelegte Tätigkeiten sowie elektrotechnisch unterwiesene Personen profitieren von unserem umfangreichen Schulungsangebot.
          </p>
          <p className="text-slate-600">
            Im Bereich Qualitätsmanagement vermitteln wir praxisnahes Wissen zur DIN EN ISO 9001 und begleiten Sie beim Einstieg ins Qualitätsmanagement. Unsere Schulungen richten sich an Beauftragte für integrierte Managementsysteme sowie an Qualitätsbeauftragte und Fachkräfte, die Nachhaltigkeit als Qualitätsmerkmal erkennen und umsetzen möchten. Zusätzlich bieten wir Seminare zur Prozessmessung und -überwachung sowie zur Implementierung eines Qualitätsmanagementsystems (QMS) im Unternehmen an. Regelmäßige Schulungen und Weiterbildungen stellen sicher, dass Ihre Mitarbeitenden stets auf dem neuesten Stand der Qualitätsstandards sind.
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
