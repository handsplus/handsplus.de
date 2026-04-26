import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

export const metadata = pageMetadata({
  path: "/arbeitsschutz",
  title: "Arbeitsschutz Köln – Externe Fachkraft für Arbeitssicherheit",
  description: "Grundbetreuung und betriebsspezifische Betreuung im Arbeitsschutz gemäß ASiG und DGUV Vorschrift 2. Gefährdungsbeurteilungen, technische Prüfungen, Schulungen.",
  keywords: ["Arbeitsschutz Köln", "Fachkraft für Arbeitssicherheit", "DGUV Vorschrift 2", "Gefährdungsbeurteilung", "ASiG"],
});

function ArbeitsschutzJsonLd() {
  const url = `${BASE_URL}/arbeitsschutz`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Arbeitsschutz – Externe Fachkraft für Arbeitssicherheit in Köln",
    description:
      "Grundbetreuung und betriebsspezifische Betreuung im Arbeitsschutz gemäß ASiG und DGUV Vorschrift 2 inklusive Gefährdungsbeurteilungen, technischen Prüfungen und Schulungen.",
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
    serviceType: ["Arbeitsschutz", "Fachkraft für Arbeitssicherheit"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const sections = [
  {
    title: "ASA-Sitzung & Unterweisung",
    items: [
      "Leitung und Organisation von ASA-Sitzungen",
      "Unterweisung/Information von Führungskräften und Mitarbeitern zu Betreiberpflichten und Übertragung von Pflichten im Arbeits- und Gesundheitsschutz",
    ],
  },
  {
    title: "Erstellung von Gefährdungsbeurteilungen",
    items: [
      "Tätigkeitsbezogene Gefährdungsbeurteilung (ArbSchG)",
      "Gefährdungsbeurteilung (ArbStättV), bezogen auf Arbeitsstätten und Arbeitsplatz",
      "Gefährdungsbeurteilung von Maschinen und Anlagen nach Betriebssicherheitsverordnung (BetrSichV)",
      "Gefährdungsbeurteilung nach Gefahrstoffverordnung (GefStoffV)",
      "Gefährdungsbeurteilung psychischer Belastungen (ArbSchG)",
      "Gefährdungsbeurteilung Mutterschutz nach Mutterschutzgesetz",
    ],
  },
  {
    title: "Technische Prüfungen",
    items: [
      "Prüfung elektrischer Betriebsmittel gemäß DGUV Vorschrift 3",
      "Regalinspektion nach DIN EN 15635 und BetrSichV",
      "Prüfung von Leitern und Tritten nach BetrSichV",
    ],
  },
  {
    title: "Beratung und Unterstützung",
    items: [
      "Bei der Umsetzung von gesetzlichen Anforderungen zum Arbeitsschutz",
      "Zum Aufbau einer betrieblichen Arbeitsschutzorganisation",
      "Zum betrieblichen Gefahrstoffmanagement",
      "Bei der Durchführung von Gefährdungsbeurteilungen (ArbSchG, DGUV-Vorschrift 1, BetrSichV, GefStoffV, ArbStättV, BioStoffV, usw.)",
      "Bei Projekten hinsichtlich Einhaltung gesetzlicher Anforderungen",
    ],
  },
  {
    title: "Begehungen und Dokumentation",
    items: [
      "Erstellung erforderlicher Dokumentation zum Arbeitsschutz",
      "Erstellung von Präsenz- und Onlineunterweisungen",
      "Unterstützung bei Behördenkontakten und bei der Erfüllung behördlicher Auflagen",
      "Erstellung von Arbeits- und Betriebsanweisungen",
      "Betriebsbegehungen und Beratung bei der Umsetzung von Maßnahmen zum Arbeits- und Gesundheitsschutz",
      "Erstellung der Begehungsprotokolle",
    ],
  },
];

const highlights = [
  "Individuelle Beratung – Wir helfen Ihnen, gesetzliche Anforderungen leicht umzusetzen.",
  "Gefährdungsbeurteilungen – Präzise Analyse potenzieller Risiken und effektive Maßnahmen.",
  "Technische Prüfungen – DGUV Vorschrift 3, Betriebssicherheitsverordnung – wir kümmern uns darum.",
  "Schulungen & Unterweisungen – Wissen für Ihre Mitarbeitenden, verständlich und praxisnah.",
  "Dokumentation & Behördenkommunikation – Rechtssichere Nachweise, lückenlose Aufbereitung.",
];

const whyUs = [
  "Fachkundige Betreuung.",
  "Maßgeschneiderte Lösungen, abgestimmt auf Ihre betrieblichen Abläufe.",
  "Verlässliche Unterstützung, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.",
  "Klarheit und Sicherheit in allen Fragen des Arbeitsschutzes.",
];

export default function ArbeitsschutzPage() {
  return (
    <div>
      <ArbeitsschutzJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "Arbeitsschutz" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Arbeitsschutz.jpeg"
          alt="Arbeitsschutz – Fachkraft für Arbeitssicherheit"
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
              Arbeitsschutz
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Grundbetreuung und betriebsspezifische Betreuung gemäß ASiG und DGUV&nbsp;Vorschrift&nbsp;2
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

        <div className="space-y-12">
          {sections.map((sec) => (
            <section key={sec.title}>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">{sec.title}</h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-16 p-6 sm:p-8 rounded-xl bg-slate-50">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Arbeitsschutz mit System – Verlässliche Betreuung für Ihr Unternehmen</h2>
          <p className="text-slate-600 mb-6">
            Arbeitsschutz ist eine zentrale Verantwortung jedes Unternehmens. Mit der richtigen Betreuung werden komplexe gesetzliche Anforderungen übersichtlich und gut umsetzbar. Wir unterstützen Sie von der Gefährdungsbeurteilung bis zu technischen Prüfungen – rechtssicher, praxisnah und passend zu Ihren Abläufen.
          </p>
          <ul className="space-y-2 text-slate-600 mb-6">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-primary-500 shrink-0">✔</span>
                {h}
              </li>
            ))}
          </ul>
          <p className="text-slate-700 font-medium mb-2">Warum mit uns?</p>
          <ul className="space-y-2 text-slate-600">
            {whyUs.map((w) => (
              <li key={w} className="flex gap-2">
                <span className="text-primary-500 shrink-0">✔</span>
                {w}
              </li>
            ))}
          </ul>
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
