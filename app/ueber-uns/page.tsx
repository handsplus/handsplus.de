import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

export const metadata = pageMetadata({
  path: "/ueber-uns",
  title: "Über uns",
  description: "Health and Safety + – Ihr Partner für Arbeitsschutz, Brandschutz, Elektrosicherheit, Managementsysteme und Schulungen. Qualifikationen und Erfahrung.",
  keywords: ["Über uns", "Health and Safety Plus", "Arbeitsschutz Köln", "Brandschutz Köln", "Brandschutz Sachverständiger", "Qualifikationen", "Fachkraft für Arbeitssicherheit", "Brandschutzbeauftragter"],
});

const referenzen: { name: string; logo?: string; url?: string }[] = [
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
        hasCredential: qualifikationen.map((q) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Professional Certification",
          name: q,
        })),
      },
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function UberUnsPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <UeberUnsJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Über uns" }]} />
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
            {referenzen.map(({ name, logo, url }) => {
              const content = (
                <>
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
                </>
              );
              const cardClass =
                "flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-8 shadow-sm transition-shadow hover:shadow-md min-h-[120px]";
              return (
                <div key={name} className={cardClass}>
                  {url ? (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
                      aria-label={`${name} – Website besuchen`}
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <div className="mt-16 pt-10 border-t border-slate-200 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
          >
            Kontaktieren Sie uns jetzt
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
