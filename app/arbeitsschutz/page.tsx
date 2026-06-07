import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ServiceWissenLinks } from "@/components/ServiceWissenLinks";

export const metadata = pageMetadata({
  path: "/arbeitsschutz",
  title: "Arbeitsschutz Köln NRW – Externe Fachkraft für Arbeitssicherheit",
  description:
    "Externe Fachkraft für Arbeitssicherheit in Köln und NRW: Betreuung nach ASiG und DGUV Vorschrift 2, Gefährdungsbeurteilungen, Begehungen, ASA, Unterweisungen und Prüfkoordination – aus einer Hand mit Brandschutz und SiGeKo.",
  keywords: [
    "Arbeitsschutz Köln",
    "Fachkraft für Arbeitssicherheit",
    "externe Fachkraft für Arbeitssicherheit",
    "DGUV Vorschrift 2",
    "Gefährdungsbeurteilung",
    "ASiG",
    "Arbeitsschutz NRW",
  ],
  openGraphImage: "/Arbeitsschutz.jpeg",
});

function ArbeitsschutzJsonLd() {
  const url = `${BASE_URL}/arbeitsschutz`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Arbeitsschutz – Externe Fachkraft für Arbeitssicherheit in Köln und NRW",
    description:
      "Externe Fachkraft für Arbeitssicherheit: Grund- und betriebsspezifische Betreuung nach ASiG und DGUV Vorschrift 2, Gefährdungsbeurteilungen, Begehungen, Arbeitsschutzausschuss, Unterweisungen und Prüfkoordination in Köln und NRW.",
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Köln und Nordrhein-Westfalen",
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

const serviceBlocks = [
  {
    title: "Fachkraft für Arbeitssicherheit – Betreuung nach ASiG und DGUV Vorschrift 2",
    intro:
      "Als externe Fachkraft für Arbeitssicherheit übernehmen wir die sicherheitstechnische Betreuung nach schriftlicher Bestellung – Grund- und Zusatzbetreuung nach DGUV Vorschrift 2, mit Begehungen und nachvollziehbarer Dokumentation.",
    items: [
      "Bestellung, Betreuungsplan, Ist-Zustandserfassung und SiFa-Jahresbericht",
      "Arbeitsschutzausschuss, Pflichtenübertragung, Abstimmung mit Betriebsarzt und Betriebsrat",
      "Jahrespauschale oder modulare Betreuung – transparent nach Leistungsumfang",
    ],
    links: [
      { href: "/wissen/ratgeber/arbeitsschutz-unternehmen", label: "Ratgeber Arbeitsschutz im Unternehmen" },
      { href: "/wissen/blog/externe-fachkraft-arbeitssicherheit-koeln", label: "Blog: Externe Fachkraft Köln" },
      { href: "/wissen/blog/dguv-vorschrift-2", label: "Blog: DGUV Vorschrift 2" },
    ],
  },
  {
    title: "Gefährdungsbeurteilung",
    intro:
      "Die Gefährdungsbeurteilung steuert Maßnahmen, Unterweisungen und Investitionen. Wir erstellen und fortschreiben sie tätigkeits- und standortbezogen – mit Begehung, nicht als Textbaustein.",
    items: [
      "Arbeitsplätze, Maschinen, Gefahrstoffe, psychische Belastung, Mutterschutz",
      "Homeoffice, Fremdfirmen und Baustellen-Schnittstellen",
      "Maßnahmen mit Verantwortlichen, Fristen und Nachkontrolle",
    ],
    links: [
      { href: "/wissen/ratgeber/gefaehrdungsbeurteilung", label: "Ratgeber Gefährdungsbeurteilung" },
      { href: "/wissen/blog/gefaehrdungsbeurteilung-ablauf", label: "Blog: Ablauf Gefährdungsbeurteilung" },
    ],
  },
  {
    title: "Unterweisungen und Arbeitsschutzausschuss",
    intro:
      "Unterweisungen aus der Gefährdungsbeurteilung – dokumentiert und nachvollziehbar. ASA-Sitzungen bereiten wir vor und protokollieren mit Maßnahmenstatus.",
    items: [
      "Erst-, Wiederholungs- und anlassbezogene Unterweisungen",
      "ASA: Vorbereitung, Moderation, Protokoll",
      "Schulung von Sicherheitsbeauftragten und Führungskräften",
    ],
    links: [
      { href: "/wissen/blog/unterweisung-arbeitsschutz-fristen", label: "Blog: Unterweisung Fristen" },
      { href: "/schulungen", label: "Leistung Schulungen" },
    ],
  },
  {
    title: "Begehungen und Dokumentation",
    intro:
      "Betriebsbegehungen mit Maßnahmenplan und Nachverfolgung – Vorbereitung auf BG und Gewerbeaufsicht mit konsistenter Dokumentation.",
    items: [
      "Sicherheitsbegehungen und Arbeits-/Betriebsanweisungen",
      "Gefahrstoffmanagement und Ersthelfer-Organisation",
      "Unterstützung bei Auflagen und behördlichen Nachweisen",
    ],
    links: [
      { href: "/wissen/blog/sifa-jahresbericht-was-gehoert-rein", label: "Blog: SiFa-Jahresbericht" },
      { href: "/wissen/blog/akteure-arbeitsschutz", label: "Blog: Akteure im Arbeitsschutz" },
    ],
  },
  {
    title: "Technische Prüfungen – Koordination",
    intro:
      "Wir koordinieren Prüfkalender und Inventar für Elektro, Regale und Arbeitsmittel – die Prüfung selbst erfolgt durch befähigte Personen bzw. Prüfdienstleister.",
    items: [
      "DGUV Vorschrift 3, Regalinspektion, Leitern und Hubwagen",
      "Verknüpfung mit Gefährdungsbeurteilung und Jahresbegehung",
    ],
    links: [
      { href: "/elektrosicherheit", label: "Leistung Elektrosicherheit" },
      { href: "/wissen/ratgeber/elektrosicherheit-dguv-v3", label: "Ratgeber Elektrosicherheit" },
    ],
  },
];

const anlaesse = [
  {
    label: "KMU und Mittelstand",
    items: [
      "Externe Fachkraft statt interne Vollzeit",
      "Gefährdungsbeurteilung und Unterweisungen auf einen Stand",
    ],
  },
  {
    label: "Handwerk, Technik, Logistik",
    items: [
      "Gefahrstoffe, Maschinen, Baustellen-Schnittstellen",
      "Prüfkalender DGUV V3 und BetrSichV",
    ],
  },
  {
    label: "Sozialwirtschaft und Verwaltung",
    items: [
      "KiTa, Ergonomie, psychische Belastung",
      "Mehrere Standorte und Trägerstrukturen",
    ],
  },
];

const highlights = [
  "Betreuung nach DGUV Vorschrift 2 – mit Begehung, nicht nur auf dem Papier",
  "Gefährdungsbeurteilung, ASA, Unterweisungen und SiFa-Jahresbericht aus einer Hand",
  "Brandschutz, SiGeKo und Elektrosicherheit – ein Ansprechpartner in Köln und NRW",
];

export default function ArbeitsschutzPage() {
  return (
    <div>
      <ArbeitsschutzJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "Arbeitsschutz" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Arbeitsschutz.jpeg"
          alt="Arbeitsschutz – externe Fachkraft für Arbeitssicherheit in Köln und NRW"
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
              Externe Fachkraft für Arbeitssicherheit – Grund- und Zusatzbetreuung nach ASiG und DGUV&nbsp;Vorschrift&nbsp;2
              in Köln und NRW
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
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Health and Safety+ übernimmt in Köln und NRW die{" "}
            <strong className="font-semibold text-slate-900">externe Fachkraft für Arbeitssicherheit</strong> – Grund-
            und Zusatzbetreuung nach ASiG und DGUV Vorschrift 2. Von Gefährdungsbeurteilung und Begehungen bis ASA und
            Unterweisungen – abgestimmt mit{" "}
            <Link href="/brandschutz" className="text-primary-800 hover:text-primary-900 underline underline-offset-2">
              Brandschutz
            </Link>
            ,{" "}
            <Link href="/sigeko" className="text-primary-800 hover:text-primary-900 underline underline-offset-2">
              SiGeKo
            </Link>{" "}
            und{" "}
            <Link
              href="/elektrosicherheit"
              className="text-primary-800 hover:text-primary-900 underline underline-offset-2"
            >
              Elektrosicherheit
            </Link>{" "}
            aus einer Hand.
          </p>

          <div className="mt-14 space-y-14">
            {serviceBlocks.map((block) => (
              <section key={block.title}>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">{block.title}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{block.intro}</p>
                <ul className="mt-5 list-disc pl-6 space-y-2 text-slate-600">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {block.links.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {block.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-14">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Typische Anlässe</h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-3">
              {anlaesse.map((group) => (
                <div key={group.label}>
                  <p className="text-sm font-semibold text-slate-900">{group.label}</p>
                  <ul className="mt-3 list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 p-6 sm:p-8 rounded-xl border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Arbeitsschutz mit System – für Köln und NRW
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Auf Wunsch auch{" "}
              <Link href="/managementsysteme" className="text-primary-800 hover:text-primary-900 underline underline-offset-2">
                ISO 45001 und Managementsysteme
              </Link>{" "}
              – auf Basis einer lebendigen Gefährdungsbeurteilung. Ausführliche SiFa-Betreuung in Köln:{" "}
              <a
                href="https://www.arbeitssicherheit.nrw/fachkraft-fuer-arbeitssicherheit-koeln"
                className="text-primary-800 hover:text-primary-900 underline underline-offset-2"
                rel="noopener noreferrer"
              >
                arbeitssicherheit.nrw – Fachkraft für Arbeitssicherheit Köln
              </a>
              .
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="text-primary-600 shrink-0 font-semibold" aria-hidden>
                    ✓
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <ServiceWissenLinks
            ratgeberSlugs={["arbeitsschutz-unternehmen", "gefaehrdungsbeurteilung"]}
            blogSlugs={[
              "externe-fachkraft-arbeitssicherheit-koeln",
              "arbeitsschutzgesetz-arbschg-uebersicht",
              "pflichtuebertragung-arbeitsschutz",
            ]}
          />

          <div className="mt-14 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Wir klären in der Erstberatung Betreuungsumfang, Stand der Gefährdungsbeurteilung und Prioritäten – unverbindlich.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Erstberatung anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
