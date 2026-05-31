import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ContactStrip } from "@/components/ContactStrip";
import { HeroMeshBackground } from "@/components/HeroMeshBackground";
import { GoogleReviewSection } from "@/components/GoogleReviewCards";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://handsplus.de";

export const metadata = pageMetadata({
  path: "/ueber-uns",
  title: "Über uns – Health and Safety+ | Arbeitsschutz & Brandschutz Köln",
  description:
    "Health and Safety+ in Köln und NRW: Qualifikationen, Referenzen und Erfahrung in Arbeitsschutz, Brandschutz, SiGeKo, Elektrosicherheit und Managementsystemen.",
  keywords: [
    "Über uns",
    "Health and Safety Plus",
    "Arbeitsschutz Köln",
    "Brandschutz Köln",
    "Brandschutz Sachverständiger",
    "Qualifikationen",
    "Fachkraft für Arbeitssicherheit",
    "Brandschutzbeauftragter",
  ],
});

const referenzen: { name: string; logo: string; url?: string }[] = [
  { name: "RheinEnergie", logo: "/Kundenlogos/rheinenergie.png", url: "https://www.rheinenergie.de" },
  { name: "TJX Europe", logo: "/Kundenlogos/tjx-europe.png", url: "https://www.tjx.com" },
  { name: "ISG", logo: "/Kundenlogos/isg-gmbh.png", url: "https://www.isg-institut.de" },
  { name: "Wolf & Pabich Werbeartikel", logo: "/Kundenlogos/wolf-pabich.png", url: "https://www.wolf-pabich.de" },
  { name: "Rheinische Gesellschaft für Diakonie", logo: "/Kundenlogos/rheinische-diakonie.png", url: "https://www.rgd-online.de" },
  { name: "eBay", logo: "/Kundenlogos/ebay.png", url: "https://www.ebay.de" },
  { name: "Hakle", logo: "/Kundenlogos/hakle.png", url: "https://www.hakle.de" },
  { name: "Fastned", logo: "/Kundenlogos/fastned.png", url: "https://fastnedcharging.com" },
  { name: "HBG Kompressoren", logo: "/Kundenlogos/hbg-kompressoren.png", url: "https://www.hbg-kompressoren.de" },
  { name: "HOW.FM", logo: "/Kundenlogos/how-fm.png", url: "https://how.fm" },
  { name: "Kamps", logo: "/Kundenlogos/kamps.png", url: "https://www.kamps.de" },
  { name: "Cookie GmbH", logo: "/Kundenlogos/cookies-gmbh.png", url: "https://cookie-couture.com/de/" },
];

const qualifikationenFlat = [
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

const qualifikationGruppen = [
  {
    title: "Arbeitsschutz & Management",
    items: [
      "Fachkraft für Arbeitssicherheit gemäß §7 ASiG",
      "HSE-Manager (DEKRA)",
      "Arbeitsschutzmanager nach DIN ISO 45001 (TÜV)",
      "Studium Qualität, Umwelt, Sicherheit & Hygiene (B.Sc.)",
    ],
  },
  {
    title: "Brandschutz",
    items: [
      "Brandschutzbeauftragter & Brandschutzmanager (VdS)",
      "Brandschutz in Versammlungsstätten (VdS)",
    ],
  },
  {
    title: "SiGeKo, Elektro & Spezial",
    items: [
      "Sicherheits- und Gesundheitsschutzkoordinator (TÜV)",
      "Zertifizierter Sachverständiger und Gutachter für Elektrotechnik und Arbeitsschutz",
      "Betriebsbeauftragter für Gewässerschutz",
      "IQPR Certified Profiler (IMBA)",
    ],
  },
];

const staerken = [
  {
    title: "Erfahrung",
    text: "Langjährige Praxis in Konzepten, Dokumentation und Schulungen – für Gewerbe, Industrie, Büros, Hotels und Baustellen.",
  },
  {
    title: "Fachkompetenz",
    text: "ArbSchG, ASiG, BauO NRW, ASR, DGUV und Vorgaben der Feuerversicherer – verständlich und umsetzbar für Ihren Betrieb.",
  },
  {
    title: "Regional vor Ort",
    text: "Köln und ganz NRW: wir kennen lokale Behörden, typische Anforderungen und begleiten Sie persönlich vor Ort.",
  },
];

const leistungsLinks = [
  { href: "/arbeitsschutz", label: "Arbeitsschutz" },
  { href: "/brandschutz", label: "Brandschutz" },
  { href: "/sigeko", label: "SiGeKo" },
  { href: "/elektrosicherheit", label: "Elektrosicherheit" },
  { href: "/schulungen", label: "Schulungen" },
  { href: "/managementsysteme", label: "Managementsysteme" },
];

function UeberUnsJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Health and Safety +",
      url: BASE_URL,
      member: {
        "@type": "Person",
        name: "Health and Safety + Team",
        jobTitle: [
          "Fachkraft für Arbeitssicherheit",
          "Brandschutzbeauftragter",
          "Brandschutzmanager (VdS)",
          "Brandschutz Sachverständiger",
          "HSE-Manager (DEKRA)",
          "Arbeitsschutzmanager nach DIN ISO 45001 (TÜV)",
          "Sicherheits- und Gesundheitsschutzkoordinator (TÜV)",
          "Sachverständiger und Gutachter für Elektrotechnik und Arbeitsschutz",
        ],
        worksFor: { "@type": "Organization", "@id": `${BASE_URL}#organization` },
        knowsAbout: [
          "Arbeitsschutz",
          "Brandschutz",
          "Brandschutz Sachverständiger",
          "Elektrosicherheit",
          "Managementsysteme",
          "SiGeKo",
          "Gefährdungsbeurteilung",
          "ISO 45001",
          "DGUV Vorschrift 2",
        ],
        hasCredential: qualifikationenFlat.map((q) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: q,
        })),
      },
    },
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function UberUnsPage() {
  return (
    <>
      <UeberUnsJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Über uns" }]} />

      {/* Hero – Mesh-Verlauf wie Startseite (ohne data-hero: Critical CSS würde Abstände/Breite verändern) */}
      <section className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 text-white">
        <HeroMeshBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-3xl m-0">
            Über uns
          </h1>
          <p className="mt-6 text-lg max-w-3xl text-white/90 leading-relaxed">
            Ihr Partner für Arbeitsschutz, Brandschutz, Elektrosicherheit, Managementsysteme und Schulungen – in Köln
            und NRW.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold text-base bg-white text-[#1e4d44] shadow-lg shadow-black/20 transition-[background-color,box-shadow,transform] hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#256358] w-full sm:w-auto"
            >
              Kostenlose Erstberatung
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/leistungen"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#256358] w-full sm:w-auto"
            >
              Unsere Leistungen
            </Link>
          </div>
          <div className="mt-10 pt-8 border-t border-white/25 max-w-3xl">
            <ContactStrip variant="light" />
          </div>
        </div>
      </section>

      {/* Stärken */}
      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="staerken-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="staerken-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Darum Health and Safety+
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Verlässliche Betreuung – modular für Projekte oder langfristig in Ihrem Unternehmen.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {staerken.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wer wir sind */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="profil-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 id="profil-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Wer wir sind
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Health and Safety+ ist ein qualifiziertes Dienstleistungsunternehmen für betrieblichen
              Gesundheits- und Arbeitsschutz. Wir unterstützen Sie dabei, gesetzliche Anforderungen zu erfüllen,
              Prozesse zu verbessern und Sicherheit im Alltag spürbar zu machen – zum Vorteil von Unternehmen und
              Beschäftigten.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Seit vielen Jahren betreuen wir Konzerne, mittelständische Unternehmen und Kleinbetriebe in Köln und
              ganz NRW – von der Gefährdungsbeurteilung über Brandschutzkonzepte bis zu SiGeKo, technischen
              Prüfungen und Managementsystemen nach nationalen und internationalen Standards.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            {[
              "Rechtssichere Dokumentation und behördliche Abstimmung",
              "Praxisnahe Schulungen und regelmäßige Begehungen",
              "Technische Prüfungen und Elektrosicherheit (DGUV)",
              "Modular: einmalige Projekte oder Dauerbetreuung",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-slate-700 text-sm leading-relaxed">
                <span
                  className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-800"
                  aria-hidden
                >
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {point}
              </li>
            ))}
          </ul>

          <p className="mt-10">
            <Link
              href="/leistungen"
              className="inline-flex items-center font-medium text-primary-800 hover:text-primary-900"
            >
              Alle Leistungen im Überblick
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </p>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="qual-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="qual-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Qualifikationen &amp; Zertifizierungen
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Fundierte Ausbildung und anerkannte Nachweise – für Arbeitsschutz, Brandschutz, SiGeKo und darüber
            hinaus.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualifikationGruppen.map((gruppe) => (
              <div
                key={gruppe.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-primary-900">{gruppe.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {gruppe.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-600 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen Kurzlinks */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="leistungen-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="leistungen-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unsere Leistungsbereiche
          </h2>
          <p className="mt-3 text-slate-600">Direkt zu den Fachseiten – ausführlich beschrieben und mit Praxisbezug.</p>
          <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {leistungsLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex h-full items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-4 text-center text-sm font-medium text-slate-800 transition-colors hover:border-primary-200 hover:bg-primary-50 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Referenzen */}
      <section className="py-16 sm:py-20 bg-slate-50" aria-labelledby="referenzen-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="referenzen-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Referenzen &amp; Projekterfahrung
          </h2>
          <p className="mt-3 text-slate-600 max-w-3xl leading-relaxed">
            Eine Auswahl aus unserer Berufs- und Projekterfahrung – unter anderem in Energie, Handel, Industrie,
            Sozialwirtschaft und Dienstleistung. Konzerne, Mittelstand und kleinere Betriebe in Köln und NRW
            vertrauen auf unsere Betreuung.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {referenzen.map(({ name, logo, url }) => {
              const card = (
                <div className="flex min-h-[112px] items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-6 shadow-sm transition-shadow hover:shadow-md">
                  <Image
                    src={logo}
                    alt={name}
                    width={160}
                    height={64}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
              );
              return url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
                  aria-label={`${name} – Website besuchen`}
                >
                  {card}
                </a>
              ) : (
                <div key={name}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <GoogleReviewSection />

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[#1e4d44] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Lassen Sie uns sprechen</h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto leading-relaxed">
            Kostenlose und unverbindliche Erstberatung – wir finden die passende Lösung für Ihr Unternehmen.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-semibold bg-white text-[#1e4d44] shadow-lg shadow-black/20 hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              Kontakt aufnehmen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/wissen/faq"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/50 text-sm font-medium text-white/90 hover:bg-white/10 w-full sm:w-auto"
            >
              Häufige Fragen (FAQ)
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
