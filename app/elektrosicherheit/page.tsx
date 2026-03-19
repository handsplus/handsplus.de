import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/elektrosicherheit",
  title: "Elektrosicherheit & Prüfung elektrischer Anlagen",
  description: "Externe verantwortliche Elektrofachkraft (VEFK), Gefährdungsbeurteilungen, Prüfungen gemäß DGUV Vorschrift 3.",
  keywords: ["Elektrosicherheit", "VEFK", "DGUV Vorschrift 3", "Elektroprüfung", "DIN VDE 1000-10"],
});

const listItems = [
  "Auftragsübernahmen als externe verantwortliche Elektrofachkraft (VEFK) gemäß Abschnitt 5.3 der DIN VDE 1000-10 in elektrotechnischen Bereichen des gesamten Unternehmens oder in definierten Teilbereichen bzw. an einzelnen Standorten.",
  "Beratung bei fachgerechter Planung, Installation und Wartung elektrischer Anlagen zur Elektrosicherheit",
  "Gefährdungsbeurteilung, Identifikation und Bewertung potenzieller Gefahrenquellen im Umgang mit elektrischen Anlagen.",
  "Sicherstellen der Einhaltung gesetzlicher und betrieblicher Sicherheitsvorgaben.",
  "Anwendung fundierter technischer Kenntnisse und Fähigkeiten im Arbeitsbereich.",
  "Unterstützung bei der Gewährleistung der Sicherheit von Personen und der Schutz von Anlagen im Umgang mit Elektrizität.",
  "Unterstützung bei der Analyse und Behebung von technischen Störungen und Defekten.",
  "Beratung und Unterstützung durch unabhängige Experten und Sachverständige der Elektrotechnik.",
  "Ausbildung, Schulung und Unterweisung von elektrisch unterwiesenen Personen oder Elektrofachkräften für festgelegte Tätigkeiten.",
  "Durchführung der Prüfungen von ortsfesten und ortsveränderlichen elektrischen Betriebsmitteln gemäß DGUV Vorschrift 3.",
];

export default function ElektrosicherheitPage() {
  return (
    <div>
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Elektrosicherheit.jpeg"
          alt="Elektrosicherheit – Prüfung elektrischer Anlagen"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
            <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-2">Unsere Leistung</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              Elektrosicherheit
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Unterstützung durch Experten und Sachverständige der Elektrotechnik
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Jetzt Angebot anfordern
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <section className="p-6 sm:p-8 rounded-xl bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Sicherheit durch Experten und Sachverständige der Elektrotechnik</h2>
            <p className="text-slate-600 mb-4">
              Elektrosicherheit ist essenziell für den Schutz von Personen, Anlagen und betrieblichen Abläufen. Wir unterstützen Unternehmen mit umfassenden Dienstleistungen zur Einhaltung gesetzlicher und betrieblicher Sicherheitsvorgaben.
            </p>
            <p className="text-slate-600 mb-4">
              Unsere Leistungen umfassen die Übernahme von Auftragsarbeiten als externe verantwortliche Elektrofachkraft (VEFK) gemäß Abschnitt 5.3 der DIN VDE 1000-10 in elektrotechnischen Bereichen. Wir bieten Beratung bei der fachgerechten Planung, Installation und Wartung elektrischer Anlagen und führen detaillierte Gefährdungsbeurteilungen durch. Dabei identifizieren und bewerten wir potenzielle Gefahrenquellen im Umgang mit elektrischen Anlagen und entwickeln maßgeschneiderte Sicherheitskonzepte.
            </p>
            <p className="text-slate-600">
              Durch gezielte Analysen unterstützen wir Unternehmen bei der Behebung technischer Störungen und Defekte. Wir beraten unabhängig und kompetent in allen Fragen der Elektrosicherheit und bieten gezielte Schulungen, Unterweisungen sowie Qualifikationen für Elektrofachkräfte. Zusätzlich führen wir Prüfungen von ortsfesten und ortsveränderlichen elektrischen Betriebsmitteln gemäß DGUV Vorschrift 3 durch, um die Betriebssicherheit sicherzustellen.
            </p>
          </section>

          <div className="mt-12 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">Haben Sie Fragen oder benötigen ein individuelles Angebot?</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Kostenlose Erstberatung anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
