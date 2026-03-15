import React from "react";
import Link from "next/link";
import { ContactStrip } from "@/components/ContactStrip";
import { PartnerLogosStrip } from "@/components/PartnerLogosStrip";
import { pageMetadata } from "@/lib/metadata";
import { serviceIcons } from "@/lib/serviceIcons";

export const metadata = pageMetadata({
  path: "/",
  title: "Arbeitsschutz & Brandschutz Köln | H&S+",
  description: "Arbeitsschutz, Brandschutz und Managementsysteme in Köln – Fachkraft für Arbeitssicherheit, Brandschutzbeauftragter, SiGeKo. Kostenlose Erstberatung.",
  keywords: ["Arbeitsschutz Köln", "Brandschutz Köln", "Fachkraft für Arbeitssicherheit", "Brandschutzbeauftragter", "SiGeKo", "Health and Safety Plus"],
});

const services = [
  {
    title: "Arbeitsschutz",
    description: "Grund- und betriebsspezifische Betreuung im Arbeitsschutz gemäß Arbeitssicherheitsgesetz (ASiG) und DGUV Vorschrift 2",
    href: "/arbeitsschutz",
  },
  {
    title: "Brandschutz",
    description: "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz",
    href: "/brandschutz",
  },
  {
    title: "SiGeKo",
    description: "Sicherheits- und Gesundheitsschutzkoordination gemäß Regel zum Arbeitsschutz auf Baustellen RAB 30",
    href: "/sigeko",
  },
  {
    title: "Elektrosicherheit",
    description: "Externe verantwortliche Elektrofachkraft (VEFK) gemäß DIN VDE 1000-10 und Durchführung von Elektroprüfungen",
    href: "/elektrosicherheit",
  },
  {
    title: "Schulungen",
    description: "Maßgeschneiderte und zeitlich flexible Schulungs- und Weiterbildungsangebote – online oder vor Ort.",
    href: "/schulungen",
  },
  {
    title: "Managementsysteme",
    description: "Einführung, Pflege und Optimierung von Managementsystemen: ISO 9001, 45001, AMS VG; AMS BAU …",
    href: "/managementsysteme",
  },
];

const partnerItems = [
  {
    title: "Erfahrung",
    text: "Langjährige Praxis in Brandschutzkonzepten, Brandschutzordnungen und Schulungen – für Gewerbe, Industrie, Büros, Hotels und Immobilien.",
  },
  {
    title: "Fachkompetenz",
    text: "BauO NRW, ArbSchG, ASR A2.2, DGUV und Vorgaben der Feuerversicherer – wir kennen die Regeln und setzen sie verständlich und umsetzbar um.",
  },
  {
    title: "Regionale Verankerung",
    text: "Köln und Umgebung sind unser Fokus. Wir kennen die örtlichen Behörden, typischen Anforderungen und unterstützen Sie vor Ort.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero – Corporate-Design: farbiger Oberbereich */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#1e4d44] text-white [background:linear-gradient(180deg,#1e4d44_0%,#2d5a4e_50%,#256358_100%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl m-0">
            Arbeitsschutz, Brandschutz und Managementsysteme – Professionelle Beratung und maßgeschneiderte Lösungen
          </h1>
          <p className="mt-6 text-lg max-w-3xl text-white/90">
            Wir bieten Ihnen kompetente Betreuung in Arbeitsschutz, Brandschutz und Managementsystemen – ob für einmalige Einsätze oder langfristige Zusammenarbeit: Wir stehen Ihnen zur Seite. Kostenlose und unverbindliche Erstberatung inklusive.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors bg-primary-800 text-white"
            >
              Kostenlose Erstberatung
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/80 font-medium text-white transition-colors hover:bg-white/10"
            >
              Unsere Leistungen
            </Link>
          </div>
          <div className="mt-10 pt-10 border-t border-white/30">
            <ContactStrip variant="light" />
          </div>
        </div>
      </section>

      {/* Partner- und Zertifizierungslogos (wie arbeitssicherheit.nrw) */}
      <PartnerLogosStrip />

      {/* Warum professionelle Betreuung unverzichtbar ist – eure Texte */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50" style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Warum professionelle Betreuung unverzichtbar ist
          </h2>
          <p className="mt-4 text-slate-600 font-medium" style={{ marginTop: "1rem", color: "#475569" }}>
            Rechtssicherheit, Arbeitsschutz und Werterhalt – mit dem richtigen Partner an Ihrer Seite.
          </p>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl" style={{ marginTop: "1.5rem", color: "#475569", lineHeight: 1.6, maxWidth: "48rem" }}>
            Wir bieten Ihnen maßgeschneiderte Lösungen und kompetente Betreuung im Bereich Arbeitsschutz, Brandschutz und Managementsysteme. Ob einmalige Projekte oder eine langfristige Zusammenarbeit – wir begleiten Sie von der Gefährdungsbeurteilung über Konzepte bis hin zu technischen Prüfungen. In Köln und Umgebung verbinden wir rechtssichere Dokumentation mit praxisnahen, verständlichen Lösungen.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl" style={{ marginTop: "1rem", color: "#475569", lineHeight: 1.6, maxWidth: "48rem" }}>
            Als Fachkraft für Arbeitssicherheit, Brandschutzbeauftragte und SiGeKo erfüllen wir die Anforderungen von ASiG, DGUV Vorschrift 2, BauO NRW und den Vorgaben der Feuerversicherer. Für Gewerbe, Industrie, Büros, Hotels und Baustellen – von der Gefährdungsbeurteilung über Brandschutzkonzepte bis zu Schulungen und Managementsystemen (ISO 45001, AMS). Alle Leistungen finden Sie übersichtlich auf unserer <Link href="/leistungen" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Leistungsseite</Link>.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl" style={{ marginTop: "1rem", color: "#475569", lineHeight: 1.6, maxWidth: "48rem" }}>
            Wir unterstützen Unternehmer, Hausverwaltungen, Architekten und Bauherren in Köln und NRW – ob Sie eine <Link href="/arbeitsschutz" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">betriebliche Arbeitsschutzbetreuung</Link>, einen <Link href="/brandschutz" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Brandschutzbeauftragten</Link>, einen <Link href="/sigeko" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">SiGeKo für die Baustelle</Link> oder Unterstützung bei <Link href="/managementsysteme" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Managementsystemen</Link> benötigen.
          </p>
        </div>
      </section>

      {/* Unsere Leistungen im Überblick – 1:1 Karten-Layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Unsere Leistungen im Überblick
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: "2.5rem", display: "grid", gap: "2rem" }}>
            {services.map((s) => (
              <div key={s.href} className="border border-slate-200 rounded-xl p-6 bg-white hover:border-primary-200 hover:shadow-md transition-all" style={{ border: "1px solid #e2e8f0", borderRadius: "0.75rem", padding: "1.5rem", backgroundColor: "#fff" }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center" aria-hidden>
                    {serviceIcons[s.title]}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 m-0" style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a" }}>{s.title}</h3>
                </div>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed" style={{ marginTop: "0.75rem", color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>{s.description}</p>
                <Link
                  href={s.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900"
                >
                  Mehr erfahren
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center font-medium text-primary-800 hover:text-primary-900"
            >
              Alle Leistungen ansehen
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ihr Partner – 3 Spalten wie Referenz */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50" style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Ihr Partner für Arbeitsschutz & Brandschutz in Köln
          </h2>
          <p className="mt-4 text-slate-600" style={{ marginTop: "1rem", color: "#475569" }}>
            Erfahrung, Fachkompetenz und regionale Verankerung – dafür steht H&S+.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" style={{ marginTop: "3rem", display: "grid", gap: "2rem" }}>
            {partnerItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900" style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", margin: 0 }}>{item.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed" style={{ marginTop: "0.75rem", color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-600 text-sm leading-relaxed" style={{ marginTop: "2.5rem", color: "#475569", fontSize: "0.875rem", lineHeight: 1.6 }}>
            Mehr über unser Team, unsere Qualifikationen und Zertifizierungen erfahren Sie unter <Link href="/ueber-uns" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Über uns</Link>. Häufige Fragen zu Arbeitsschutz, Brandschutz und SiGeKo beantworten wir in unserem <Link href="/wissen/faq" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">FAQ</Link> und im <Link href="/wissen" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Wissen-Bereich</Link>.
          </p>
        </div>
      </section>

      {/* Das sagen unsere Kunden – euer Testimonial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white" style={{ padding: "4rem 0", backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Das sagen unsere Kunden
          </h2>
          <div className="mt-6 flex items-center gap-2 text-amber-500" style={{ marginTop: "1.5rem", color: "#d97706" }}>
            <span className="text-xl sm:text-2xl leading-none" aria-hidden>★★★★★</span>
            <span className="text-slate-700 font-semibold" style={{ color: "#334155", fontWeight: 600 }}>5,0</span>
            <span className="text-slate-500 text-sm" style={{ color: "#64748b", fontSize: "0.875rem" }}>(42 Bewertungen)</span>
          </div>
          <blockquote className="mt-8 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary-500 pl-6" style={{ marginTop: "2rem", color: "#334155", lineHeight: 1.6, borderLeft: "4px solid #68BCA0", paddingLeft: "1.5rem" }} cite="https://www.google.com/search?q=Health+and+Safety+%2B+%7C+Arbeitsschutz+%26+Brandschutz+K%C3%B6ln+Rezensionen&tbm=lcl">
            „Wir arbeiten mit Health and Safety+ als Sicherheits- und Gesundheitskoordinator (SiGeKo) zusammen und sind mit der fachkundigen Unterstützung sehr zufrieden. Planung und Umsetzung der Arbeitsschutzmaßnahmen sind vorausschauend und strukturiert, die Kommunikation klar und lösungsorientiert. So entsteht spürbar mehr Sicherheit auf der Baustelle – wir können Health and Safety+ uneingeschränkt empfehlen.“
          </blockquote>
          <footer className="mt-4 text-slate-600">
            <cite>— Aykut Torbali, Architekt</cite>
          </footer>
          <div className="mt-8">
            <a
              href="https://www.google.com/search?q=Health+and+Safety+%2B+%7C+Arbeitsschutz+%26+Brandschutz+K%C3%B6ln+Rezensionen&tbm=lcl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-800 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
              aria-label="Weitere Bewertungen ansehen (öffnet in neuem Tab)"
            >
              Weitere Bewertungen ansehen
            </a>
          </div>
          <p className="mt-2 text-sm text-slate-500">Bewertungen auf Google für Health and Safety +</p>
        </div>
      </section>

      {/* Jetzt kostenlose Erstberatung sichern – CTA wie Referenz */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50" style={{ padding: "4rem 0", backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", textAlign: "center" }}>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
            Jetzt kostenlose Erstberatung sichern
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto" style={{ marginTop: "1rem", color: "#475569", maxWidth: "42rem", marginLeft: "auto", marginRight: "auto" }}>
            Lassen Sie sich unverbindlich beraten. Wir finden die passende Lösung für Ihr Unternehmen – professionell und verlässlich. Ob Arbeitsschutz, Brandschutz, SiGeKo oder Managementsysteme – wir stehen Ihnen zur Seite.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Erstberatung anfordern
            </Link>
            <a
              href="tel:+4915228261619"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Jetzt anrufen: 0152 282 61619"
            >
              Jetzt anrufen
            </a>
            <a
              href="https://wa.me/4915228261619"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Per WhatsApp kontaktieren (öffnet in neuem Tab)"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
