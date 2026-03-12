import Link from "next/link";
import { ContactStrip } from "@/components/ContactStrip";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/ueber-uns",
  title: "Über uns – H&S+ Health and Safety +",
  description: "Health and Safety + – Ihr Partner für Arbeitsschutz, Brandschutz, Elektrosicherheit, Managementsysteme und Schulungen. Qualifikationen und Erfahrung.",
  keywords: ["Über uns", "Health and Safety Plus", "Arbeitsschutz Köln", "Brandschutz Köln", "Qualifikationen", "Fachkraft für Arbeitssicherheit", "Brandschutzbeauftragter"],
});

const referenzen: { name: string; logo?: string }[] = [
  { name: "RheinEnergie" },
  { name: "TJX Europe" },
  { name: "ISG" },
  { name: "Wolf & Pabich Werbeartikel" },
  { name: "Rheinische Gesellschaft für Diakonie" },
  { name: "eBay" },
  { name: "Hakle" },
  { name: "Fastned" },
  { name: "HBG Kompressoren" },
  { name: "HOW.FM" },
  { name: "Kamps" },
  { name: "Cookie GmbH" },
];

const qualifikationen = [
  "Studium Qualität, Umwelt, Sicherheit & Hygiene (B.Sc.)",
  "Fachkraft für Arbeitssicherheit gemäß §7 ASiG",
  "Brandschutzbeauftragter & Brandschutzmanager (VdS)",
  "Brandschutz in Versammlungsstätten (VdS)",
  "HSE-Manager (DEKRA)",
  "Arbeitsschutzmanager nach DIN ISO 45001 (TÜV)",
  "Sicherheits- und Gesundheitsschutzkoordinator (TÜV)",
  "Betriebsbeauftragter für Gewässerschutz",
  "Zertifizierter Sachverständiger und Gutachter für Elektrotechnik und Arbeitsschutz",
  "IQPR Certified Profiler (IMBA)",
];

export default function UberUnsPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Über uns
        </h1>
        <p className="mt-2 text-lg text-slate-600 max-w-3xl">
          Arbeitsschutz, Brandschutz, Elektrosicherheit, Managementsysteme und Schulungen
        </p>

        <h2 className="mt-10 text-xl sm:text-2xl font-semibold text-slate-900">
          Health and Safety +
        </h2>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          Wir bieten maßgeschneiderte Lösungen in den Bereichen Arbeitsschutz, Brandschutz, Elektrosicherheit, Managementsysteme und Schulungen. Als qualifiziertes Dienstleistungsunternehmen unterstützen wir Sie darin, gesetzliche Anforderungen zu erfüllen, Prozesse zu verbessern und Qualitätsstandards einzuhalten. Wir sorgen für einen nachhaltigen betrieblichen Gesundheitsschutz zum Vorteil von Unternehmen und Mitarbeitern.
        </p>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          Seit vielen Jahren betreuen wir Konzerne, mittelständische Unternehmen und Kleinbetriebe und bieten umfassende Fachkompetenz in Arbeitsschutz, Brandschutz, Elektrosicherheit und Managementsystemen. Im Brandschutz übernehmen wir die Erstellung von Brandschutzkonzepten, Gefährdungsbeurteilungen, behördliche Abstimmungen und praxisnahe Schulungen. Zudem gewährleisten wir durch regelmäßige Prüfungen und Begehungen, dass alle Sicherheitsmaßnahmen effektiv umgesetzt werden.
        </p>
        <p className="mt-4 text-slate-600 max-w-3xl leading-relaxed">
          Durch langjährige Erfahrung im HSEQ-Management sichern wir Ihnen neben Rechtssicherheit auch optimierte Betriebsabläufe und reduzierte Folgekosten. Unsere Leistungen umfassen außerdem technische Prüfungen, Dokumentationen sowie die Entwicklung und Implementierung von Managementsystemen nach internationalen und nationalen Standards. Mit fundierter Expertise, individuellen Lösungen und ganzheitlicher Betreuung stehen wir Ihnen als verlässlicher Partner zur Seite.
        </p>

        <h3 className="mt-10 text-lg font-semibold text-slate-900">
          Unsere Qualifikationen umfassen unter anderem:
        </h3>
        <ul className="mt-4 space-y-2 max-w-3xl">
          {qualifikationen.map((item) => (
            <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <section className="mt-16 sm:mt-20" aria-labelledby="referenzen-heading">
          <h2 id="referenzen-heading" className="text-xl sm:text-2xl font-semibold text-slate-900 max-w-3xl">
            Eine kleine Auswahl unserer umfangreichen Berufs- und Projekterfahrungen
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {referenzen.map(({ name, logo }) => (
              <div
                key={name}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-8 shadow-sm transition-shadow hover:shadow-md min-h-[120px]"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={name}
                    className="max-h-16 w-full object-contain object-center"
                  />
                ) : (
                  <span className="text-center text-sm font-medium text-slate-600 leading-snug">
                    {name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 pt-10 border-t border-slate-200">
          <ContactStrip />
        </div>
        <div className="mt-10">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
          >
            Jetzt Kontakt aufnehmen und kostenlose Erstberatung sichern
          </Link>
        </div>
      </div>
    </div>
  );
}
