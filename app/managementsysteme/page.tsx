import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/managementsysteme",
  title: "Managementsysteme für Arbeitssicherheit & Qualitätsmanagement",
  description: "Einführung, Pflege und Optimierung von Managementsystemen: ISO 9001, ISO 45001, AMS VBG, AMS BAU. Audits, Zertifizierung.",
  keywords: ["ISO 9001", "ISO 45001", "AMS VBG", "AMS BAU", "Managementsysteme Arbeitsschutz"],
});

const managementItems = [
  "Einführung, Pflege und Optimierung von Managementsystemen",
  "ISO 9001",
  "ISO 45001",
  "AMS VBG",
  "AMS BAU",
  "Zusammenführung und Integration von bereits bestehenden Managementsystemen",
  "Unterstützung der Geschäftsführung im Qualitätsmanagement bei der Ausarbeitung und Umsetzung der individuellen Qualitätsziele und der firmenspezifischen Qualitätspolitik",
  "Dokumentenmanagement und hierbei insbesondere auch die operative Erarbeitung, Aktualisierung und stetige Weiterentwicklung von Dokumenten wie Prozessbeschreibungen",
];

const auditItems = [
  "Durchführung interner Audits und Second-Party-Audits",
  "Vorbereitung und Begleitung externer Audits",
  "Unterstützung der Geschäftsführung bei der Zertifizierung bezüglich Überwachungsaudits und Rezertifizierungsaudits",
];

export default function ManagementsystemePage() {
  return (
    <div>
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Managementsysteme.jpeg"
          alt="Managementsysteme – ISO 9001, ISO 45001"
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
              Managementsysteme
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Einführung, Pflege und Optimierung von Managementsystemen
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Jetzt Angebot anfragen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Managementsysteme</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              {managementItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Audit</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              {auditItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-xl bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Optimierung und Integration für nachhaltigen Unternehmenserfolg</h2>
            <p className="text-slate-600 mb-4">
              Managementsysteme sind essenziell, um Qualität, Sicherheit und Effizienz in Unternehmen nachhaltig zu verbessern. Wir unterstützen Sie bei der Einführung, Pflege und kontinuierlichen Optimierung Ihrer Managementsysteme nach internationalen Standards wie ISO 9001, ISO 45001 oder nationalen Standards wie AMS VBG und AMS BAU.
            </p>
            <p className="text-slate-600 mb-4">
              Unser Leistungsspektrum umfasst die Zusammenführung und Integration bereits bestehender Managementsysteme, die Beratung der Geschäftsleitung im Qualitätsmanagement sowie die Entwicklung individueller Qualitätsziele und firmenspezifischer Qualitätspolitiken. Zudem übernehmen wir das Dokumentenmanagement, insbesondere die operative Erarbeitung, Aktualisierung und Weiterentwicklung von Prozessbeschreibungen und Unternehmensrichtlinien.
            </p>
            <p className="text-slate-600">
              Neben der Implementierung und Betreuung von Managementsystemen bieten wir umfassende Audit-Dienstleistungen an. Wir führen interne Audits sowie Second-Party-Audits durch und begleiten Sie bei externen Audits. Unsere Expertise erstreckt sich auch auf die Unterstützung der Geschäftsführung bei Zertifizierungen, Überwachungsaudits und Rezertifizierungsaudits, um zu unterstützen, dass Ihr Unternehmen allen relevanten Anforderungen entspricht.
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
