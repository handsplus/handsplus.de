import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactStrip } from "@/components/ContactStrip";
import { GoogleReviewSection } from "@/components/GoogleReviewCards";
import { googleReviews, GOOGLE_REVIEWS_URL } from "@/content/googleReviews";
import { pageMetadata } from "@/lib/metadata";
import { serviceIcons } from "@/lib/serviceIcons";

export const metadata = pageMetadata({
  path: "/",
  title: "Arbeitsschutz & Brandschutz Köln",
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
    text: "Brandschutzkonzepte, GBU, Schulungen und Begehungen – für Gewerbe, Industrie, Büros, Hotels und Baustellen.",
    href: "/ueber-uns",
    linkLabel: "Team & Qualifikationen",
  },
  {
    title: "Fachkompetenz",
    text: "ArbSchG, ASiG, ASR A2.2, DGUV und BauO NRW – verständlich und umsetzbar für Ihren Betrieb.",
    href: "/leistungen",
    linkLabel: "Alle Leistungen",
  },
  {
    title: "Regional vor Ort",
    text: "Persönliche Betreuung in Köln und NRW – mit Kenntnis lokaler Behörden und typischer Anforderungen.",
    href: "/kontakt",
    linkLabel: "Kontakt aufnehmen",
  },
];

const zielgruppenLinks = [
  { href: "/arbeitsschutz", label: "Arbeitsschutz" },
  { href: "/brandschutz", label: "Brandschutz" },
  { href: "/sigeko", label: "SiGeKo" },
  { href: "/managementsysteme", label: "Managementsysteme" },
];

function HomeReviewJsonLd() {
  const featured = googleReviews.find((r) => r.id === "aykut-torbali")!;
  const data = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      "@id": "https://handsplus.de#organization",
      name: "Health and Safety +",
    },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    author: { "@type": "Person", name: featured.author, jobTitle: featured.role },
    reviewBody: featured.quote,
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
      {/* Hero – Mesh-Verlauf (data-hero für kritisches CSS) */}
      <section
        data-hero
        className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 text-white"
      >
        {/* Dekorative Hintergrundebenen – statisch, ohne Animation */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[linear-gradient(145deg,#1e4d44_0%,#256358_30%,#3b7564_55%,#5aa88f_80%,#68BCA0_100%)]" />
          <div className="hero-mesh-accent absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_88%_18%,rgba(104,188,160,0.55),transparent_58%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_75%_92%,rgba(104,188,160,0.35),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_12%_35%,rgba(45,90,78,0.28),transparent_50%)]" />
          <div className="absolute -top-20 right-[5%] h-96 w-96 rounded-full bg-[#68BCA0]/35 blur-[96px] sm:h-[24rem] sm:w-[24rem]" />
          <div className="absolute bottom-0 right-[15%] h-64 w-64 rounded-full bg-[#75c3ab]/30 blur-[72px]" />
          <div
            className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl m-0">
            Arbeitsschutz, Brandschutz und Managementsysteme – Professionelle Beratung und maßgeschneiderte Lösungen
          </h1>
          <p className="mt-6 text-lg max-w-2xl text-white/90 leading-relaxed">
            Umfassende Betreuung in Köln und NRW – für einmalige Einsätze oder langfristige Zusammenarbeit. Kostenlose Erstberatung inklusive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-base bg-white text-[#1e4d44] shadow-lg shadow-black/20 transition-[background-color,box-shadow,transform] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#256358] w-full sm:w-auto"
            >
              Angebot anfragen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/leistungen"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#256358]"
              >
                Unsere Leistungen
              </Link>
              <Link
                href="/kontakt?thema=Kostenlose+Erstberatung"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#256358]"
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

      {/* Warum professionelle Betreuung – scanbar, ohne Hero-Redundanz */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50" aria-labelledby="warum-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="warum-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Warum professionelle Betreuung unverzichtbar ist
          </h2>
          <p className="mt-4 text-slate-600 font-medium max-w-2xl">
            Rechtssicherheit, Arbeitsschutz und Werterhalt – mit dem richtigen Partner an Ihrer Seite.
          </p>
          <p className="mt-5 text-slate-600 leading-relaxed max-w-2xl">
            Von der Gefährdungsbeurteilung über Brandschutzkonzepte bis zu SiGeKo, Prüfungen und
            Managementsystemen – dokumentiert, verständlich und praxisnah umgesetzt.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">{item.text}</p>
                <Link
                  href={item.href}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900"
                >
                  {item.linkLabel}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            {[
              "Gefährdungsbeurteilung & Konzepte",
              "Schulungen & Begehungen",
              "Technische Prüfungen (DGUV)",
              "Fachkraft · Brandschutz · SiGeKo",
            ].map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden />
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs sm:text-sm text-slate-500">
            <span className="font-medium text-slate-600">Normkonform u. a.:</span> ASiG · DGUV Vorschrift 2 ·
            BauO NRW · ISO 45001 · AMS
          </p>

          <p className="mt-4 text-sm text-slate-600">
            Für Unternehmer, Hausverwaltungen, Architekten und Bauherren – gezielt in:
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {zielgruppenLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-semibold hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 w-full sm:w-auto"
            >
              Alle Leistungen ansehen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-slate-600">
              Mehr Hintergrund in{" "}
              <Link href="/ueber-uns" className="font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2">
                Über uns
              </Link>
              ,{" "}
              <Link href="/wissen/faq" className="font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2">
                FAQ
              </Link>{" "}
              und{" "}
              <Link href="/wissen" className="font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2">
                Wissen
              </Link>
              .
            </p>
          </div>
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

      <GoogleReviewSection
        ids={["aykut-torbali", "lena-hassert"]}
        className="lg:py-24"
        footerNote={
          <>
            <Link
              href="/ueber-uns"
              className="font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
            >
              Weitere Kundenstimmen auf Über uns
            </Link>
            <span className="text-slate-400" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
            >
              Alle Bewertungen auf Google
            </a>
          </>
        }
      />

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
