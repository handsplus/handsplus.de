import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactStrip } from "@/components/ContactStrip";
import { pageMetadata } from "@/lib/metadata";
import { serviceIcons } from "@/lib/serviceIcons";

export const metadata = pageMetadata({
  path: "/",
  title: "Arbeitsschutz & Brandschutz Köln | H&S+",
  description: "Arbeitsschutz, Brandschutz und Managementsysteme in Köln – Fachkraft für Arbeitssicherheit, Brandschutzbeauftragter, SiGeKo. Kostenlose Erstberatung.",
  keywords: ["Arbeitsschutz Köln", "Brandschutz Köln", "Fachkraft für Arbeitssicherheit", "Brandschutzbeauftragter", "Brandschutz Sachverständiger", "SiGeKo", "Health and Safety Plus"],
});

const services = [
  {
    title: "Arbeitsschutz",
    description: "Grund- und betriebsspezifische Betreuung im Arbeitsschutz gemäß Arbeitssicherheitsgesetz (ASiG) und DGUV Vorschrift 2",
    href: "/arbeitsschutz",
    image: "/Arbeitsschutz.jpeg",
  },
  {
    title: "Brandschutz",
    description: "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz",
    href: "/brandschutz",
    image: "/Brandschutz.jpeg",
  },
  {
    title: "SiGeKo",
    description: "Sicherheits- und Gesundheitsschutzkoordination gemäß Regel zum Arbeitsschutz auf Baustellen RAB 30",
    href: "/sigeko",
    image: "/SiGeko.jpeg",
  },
  {
    title: "Elektrosicherheit",
    description: "Externe verantwortliche Elektrofachkraft (VEFK) gemäß DIN VDE 1000-10 und Durchführung von Elektroprüfungen",
    href: "/elektrosicherheit",
    image: "/Elektrosicherheit.jpeg",
  },
  {
    title: "Schulungen",
    description: "Maßgeschneiderte und zeitlich flexible Schulungs- und Weiterbildungsangebote – online oder vor Ort.",
    href: "/schulungen",
    image: "/Schulungen.jpeg",
  },
  {
    title: "Managementsysteme",
    description: "Einführung, Pflege und Optimierung von Managementsystemen: ISO 9001, 45001, AMS VG; AMS BAU …",
    href: "/managementsysteme",
    image: "/Managementsysteme.jpeg",
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

function HomeReviewJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": "https://handsplus.de#organization",
      name: "Health and Safety +",
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: "Aykut Torbali", jobTitle: "Architekt" },
    reviewBody:
      "Wir arbeiten mit Health and Safety+ als Sicherheits- und Gesundheitskoordinator (SiGeKo) zusammen und sind mit der fachkundigen Unterstützung sehr zufrieden. Planung und Umsetzung der Arbeitsschutzmaßnahmen sind vorausschauend und strukturiert, die Kommunikation klar und lösungsorientiert. So entsteht spürbar mehr Sicherheit auf der Baustelle – wir können Health and Safety+ uneingeschränkt empfehlen.",
    publisher: { "@type": "Organization", name: "Google" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <HomeReviewJsonLd />
      {/* Hero – Corporate-Design: farbiger Oberbereich (data-hero für kritisches CSS) */}
      <section data-hero className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-[#1e4d44] text-white [background:linear-gradient(180deg,#1e4d44_0%,#2d5a4e_50%,#256358_100%)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl m-0">
            Arbeitsschutz, Brandschutz und Managementsysteme – Professionelle Beratung und maßgeschneiderte Lösungen
          </h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90 leading-relaxed">
            Umfassende Betreuung in Köln und NRW – für einmalige Einsätze oder langfristige Zusammenarbeit. Kostenlose Erstberatung inklusive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-base bg-white text-[#1e4d44] shadow-lg shadow-black/25 transition-[background-color,box-shadow,transform] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1e4d44] w-full sm:w-auto"
            >
              Angebot anfragen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#1e4d44]"
              >
                Unsere Leistungen
              </Link>
              <Link
                href="/kontakt?thema=Kostenlose+Erstberatung"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#1e4d44]"
              >
                Kostenlose Erstberatung
              </Link>
            </div>
          </div>
          <div className="mt-10 pt-10 border-t border-white/30">
            <ContactStrip variant="light" />
          </div>
        </div>
      </section>

      {/* Warum professionelle Betreuung unverzichtbar ist – eure Texte */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Warum professionelle Betreuung unverzichtbar ist
          </h2>
          <p className="mt-4 text-slate-600 font-medium">
            Rechtssicherheit, Arbeitsschutz und Werterhalt – mit dem richtigen Partner an Ihrer Seite.
          </p>
          <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl">
            Wir bieten Ihnen maßgeschneiderte Lösungen und kompetente Betreuung im Bereich Arbeitsschutz, Brandschutz und Managementsysteme. Ob einmalige Projekte oder eine langfristige Zusammenarbeit – wir begleiten Sie von der Gefährdungsbeurteilung über Konzepte bis hin zu technischen Prüfungen. In Köln und Umgebung verbinden wir rechtssichere Dokumentation mit praxisnahen, verständlichen Lösungen.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            Als Fachkraft für Arbeitssicherheit, Brandschutzbeauftragte und SiGeKo erfüllen wir die Anforderungen von ASiG, DGUV Vorschrift 2, BauO NRW und den Vorgaben der Feuerversicherer. Für Gewerbe, Industrie, Büros, Hotels und Baustellen – von der Gefährdungsbeurteilung über Brandschutzkonzepte bis zu Schulungen und Managementsystemen (ISO 45001, AMS). Alle Leistungen finden Sie übersichtlich auf unserer <Link href="/leistungen" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Leistungsseite</Link>.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            Wir unterstützen Unternehmer, Hausverwaltungen, Architekten und Bauherren in Köln und NRW – ob Sie eine <Link href="/arbeitsschutz" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">betriebliche Arbeitsschutzbetreuung</Link>, einen <Link href="/brandschutz" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Brandschutzbeauftragten</Link>, einen <Link href="/sigeko" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">SiGeKo für die Baustelle</Link> oder Unterstützung bei <Link href="/managementsysteme" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Managementsystemen</Link> benötigen.
          </p>
        </div>
      </section>

      {/* Unsere Leistungen im Überblick – 1:1 Karten-Layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unsere Leistungen im Überblick
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => {
              const hasImage = "image" in s && s.image;
              return (
                <div key={s.href} className="border border-slate-200 rounded-xl bg-white hover:border-primary-200 hover:shadow-md transition-[border-color,box-shadow] duration-200 overflow-hidden">
                  {hasImage ? (
                    <>
                      <div className="relative h-48 w-full">
                        <Image
                          src={s.image!}
                          alt={s.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center" aria-hidden>
                            {serviceIcons[s.title]}
                          </span>
                          <h3 className="text-lg font-semibold text-slate-900 m-0">{s.title}</h3>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                        <Link
                          href={s.href}
                          className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900"
                        >
                          Mehr zu {s.title}
                          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center" aria-hidden>
                          {serviceIcons[s.title]}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900 m-0">{s.title}</h3>
                      </div>
                      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{s.description}</p>
                      <Link
                        href={s.href}
                        className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900"
                      >
                        Mehr zu {s.title}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
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
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Ihr Partner für Arbeitsschutz & Brandschutz in Köln
          </h2>
          <p className="mt-4 text-slate-600">
            Erfahrung, Fachkompetenz und regionale Verankerung – dafür steht H&S+.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {partnerItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-600 text-sm leading-relaxed">
            Mehr über unser Team, unsere Qualifikationen und Zertifizierungen erfahren Sie unter <Link href="/ueber-uns" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Über uns</Link>. Häufige Fragen zu Arbeitsschutz, Brandschutz und SiGeKo beantworten wir in unserem <Link href="/wissen/faq" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">FAQ</Link> und im <Link href="/wissen" className="text-slate-600 hover:text-primary-800 hover:underline underline-offset-2">Wissen-Bereich</Link>.
          </p>
        </div>
      </section>

      {/* Das sagen unsere Kunden – euer Testimonial */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Das sagen unsere Kunden
          </h2>
          <div className="mt-6 flex items-center gap-2 text-amber-500">
            <span className="text-xl sm:text-2xl leading-none" aria-hidden>★★★★★</span>
            <span className="text-slate-700 font-semibold">5,0</span>
            <span className="text-slate-500 text-sm">(42 Bewertungen)</span>
          </div>
          <blockquote className="mt-8 text-base sm:text-lg text-slate-700 leading-relaxed border-l-4 border-primary-500 pl-6" cite="https://www.google.com/search?q=Health+and+Safety+%2B+%7C+Arbeitsschutz+%26+Brandschutz+K%C3%B6ln+Rezensionen&tbm=lcl">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Jetzt kostenlose Erstberatung sichern
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
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
