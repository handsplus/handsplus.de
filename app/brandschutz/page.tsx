import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ServiceWissenLinks } from "@/components/ServiceWissenLinks";

export const metadata = pageMetadata({
  path: "/brandschutz",
  title: "Brandschutz Köln NRW – Betrieb, BauO, Sonderbau und Konzepte",
  description:
    "Brandschutz in Köln und NRW: Brandschutzkonzept und BauO/Sonderbau, betriebliche Organisation (BSO, BSB), Prüfungen, Schulungen und Abstimmung Genehmigung mit Betrieb.",
  keywords: [
    "Brandschutz Köln",
    "Brandschutzbeauftragter",
    "Brandschutzkonzept",
    "Sonderbau Brandschutz",
    "BauO NRW Brandschutz",
    "Nutzungsänderung Brandschutz",
    "Brandschutzordnung",
    "Brandschutzhelfer",
  ],
  openGraphImage: "/Brandschutz.jpeg",
});

function BrandschutzJsonLd() {
  const url = `${BASE_URL}/brandschutz`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brandschutzberatung – Bauordnung, Sonderbau und betrieblicher Brandschutz in Köln und NRW",
    description:
      "Begleitung von Brandschutzkonzept, brandschutztechnischen Stellungnahmen und Bewertungen (BauO NRW, Sonderbau) sowie betrieblichem Brandschutz: BSO, BSB, Prüfungen, Schulungen und Evakuierung.",
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
    serviceType: [
      "Brandschutz",
      "Brandschutzkonzept",
      "Brandschutzbeauftragter",
      "Brandschutzordnung",
      "Brandschutzhelfer",
    ],
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
    title: "Bauordnung, Sonderbau und Brandschutzkonzept",
    intro:
      "Für Neubau, Erweiterung, Nutzungsänderung und Sonderbauten (z. B. Versammlungsstätte, Hotel, Industrie, Hochhaus) sind brandschutztechnische Konzepte, Stellungnahmen und Bewertungen nach BauO NRW die Grundlage der Genehmigung. Wir begleiten Bauherren, Betreiber und Planende von der ersten Einordnung bis zur Abstimmung mit Bauaufsicht und Prüfsachverständigen.",
    items: [
      "Brandschutzkonzept, brandschutztechnische Stellungnahmen und Bewertungen (auch bei Abweichungen)",
      "Nutzungsänderungen und Umnutzung im Bestand (Gewerbe, Wohnen, Mischnutzung)",
      "Sonderbau-Einordnung, Rettungswege und Brandabschnitte im Entwurf",
      "Begleitung im Baugenehmigungsverfahren und bei behördlichen Auflagen",
      "Abstimmung mit Architektur, TGA und späterem Gebäudebetrieb",
      "Feuerwehrpläne – Erstellung, Aktualisierung und Abstimmung mit dem Brandschutzkonzept",
    ],
    links: [
      { href: "/wissen/ratgeber/bauordnung-nrw-brandschutz", label: "Ratgeber BauO NRW Brandschutz" },
      { href: "/wissen/blog/bhkg-nrw-einfach-erklaert", label: "Blog BHKG NRW einfach erklärt" },
      { href: "/wissen/blog/brandschutzkonzept-erstellen", label: "Blog: Brandschutzkonzept erstellen" },
      { href: "https://brandschutzkoeln.com/ratgeber", label: "Vertiefung Genehmigung und Köln (brandschutzkoeln.com)" },
    ],
  },
  {
    title: "Betrieb und Organisation",
    intro:
      "Nach Eröffnung oder bei laufender Nutzung trägt der Betreiber die Pflege des Brandschutzes. Genehmigung und Konzept nützen nur, wenn BSO, Pläne, technische Anlagen und Unterweisungen zum IST-Zustand passen. Schwerpunkt unserer Betreuung: organisatorischer und betrieblicher Brandschutz nach ArbStättV, ASR A2.2/A2.3 und DGUV 205-003.",
    items: [
      "Brandschutzordnung nach DIN 14096 (Teil A/B/C) – Erstellung und Fortschreibung",
      "Brandschutzbeauftragter: Bestellung, Jahresprogramm, Begehungen, Maßnahmenlisten",
      "Gefährdungsbeurteilung Brandgefahr, Abstimmung mit Arbeitssicherheit",
      "Alarm- und Evakuierungsplan (DGUV 205-033), Räumungsübungen",
      "Flucht- und Rettungspläne nach ASR A2.3 und DIN ISO 23601 – Erstellung, Aktualisierung und Aushang",
      "Behörden, Versicherer und interne Audits – Vorbereitung und Nachverfolgung",
    ],
    links: [
      { href: "/wissen/ratgeber/brandschutz-betrieb", label: "Ratgeber betrieblicher Brandschutz" },
      { href: "/wissen/blog/bhkg-nrw-einfach-erklaert", label: "Blog BHKG NRW einfach erklärt" },
      { href: "/wissen/blog/brandschutzordnung-din-14096", label: "Blog: BSO nach DIN 14096" },
      { href: "/wissen/blog/brandschutzbeauftragter-aufgaben-pflichten", label: "Blog: Brandschutzbeauftragter" },
      { href: "/wissen/blog/flucht-und-rettungsplan-erstellen", label: "Blog: Flucht- und Rettungsplan" },
    ],
  },
  {
    title: "Baulich und technisch im Bestand",
    intro:
      "Im laufenden Betrieb prüfen wir, ob bauliche und anlagentechnische Schutzmaßnahmen wirken – nicht nur auf dem Papier. Dazu gehören Rettungswege, Feuerschutzabschlüsse, Brandmeldeanlagen, Löscher und RWA sowie die Konsequenzen aus Umbauten ohne Nachführung.",
    items: [
      "Begehungen: Rettungswege, Brandschutztüren, Brandlasten, Abschottungen",
      "Organisation von Prüf- und Wartungsfristen (BMA, Löscher, RWA, Notlicht)",
      "Ausstattung mit Feuerlöscheinrichtungen und Löschmittelwahl",
      "Li-Ion-Ladezonen, Heißarbeit, brennbare Stoffe in die GBU einbinden",
      "Mängelmeldung, Verantwortliche, Fristen und Nachkontrolle",
      "Abgleich genehmigtes Konzept mit betrieblichem IST-Zustand",
    ],
    links: [
      { href: "/wissen/blog/vorbeugender-brandschutz-massnahmen", label: "Blog: Vorbeugender Brandschutz" },
      { href: "/wissen/blog/brandschutz-lithium-ionen-batterien", label: "Blog: Li-Ion-Brandschutz" },
    ],
  },
  {
    title: "Schulung und Übungen",
    intro:
      "Wirksamer Brandschutz braucht geschulte Menschen – jährliche Unterweisung für alle, Ausbildung von Brandschutzhelfern und Einweisung der Rollen aus BSO Teil C. Schulung und Übung sind getrennt zu planen und zu dokumentieren.",
    items: [
      "Jährliche Brandschutzunterweisung (betriebsspezifisch, BSO Teil B)",
      "Ausbildung und Fortbildung Brandschutzhelfer nach ASR A2.2 / DGUV 205-023",
      "Evakuierungsübungen mit Auswertung und Maßnahmenliste",
      "Einweisung Leitstelle, Etagenbeauftragte und Führung (BSO Teil C)",
      "Unterstützung der Führungskräfte bei Unterweisungen und Dokumentation",
    ],
    links: [
      { href: "/wissen/blog/brandschutzschulungen-unternehmen", label: "Blog: Brandschutzschulungen" },
      { href: "/wissen/blog/asr-a2-2-brandschutzhelfer", label: "Blog: Brandschutzhelfer ASR A2.2" },
    ],
  },
];

const anlaesse = [
  {
    label: "Planung und Genehmigung",
    items: ["Neubau und Erweiterung", "Nutzungsänderung / Umnutzung", "Sonderbau und erhöhtes Personenaufkommen"],
  },
  {
    label: "Bestand und Betrieb",
    items: [
      "Behördliche Auflage oder Versicherer-Audit",
      "Umbau ohne aktualisierte Pläne oder BMA",
      "Neue Ladezonen (E-Fahrzeuge, Stapler), Veranstaltungen",
    ],
  },
  {
    label: "Organisation",
    items: [
      "Einführung oder Fortschreibung der BSO",
      "Bestellung Brandschutzbeauftragter",
      "Übernahme Gebäude / neuer Standort in Köln oder NRW",
    ],
  },
];

const highlights = [
  "Durchgängige Begleitung: von Konzept und Genehmigung bis zum Betrieb",
  "Durchgängige Betreuung: Stellungnahmen, Bewertungen, Konzept und betrieblicher Brandschutz aus einer Hand",
  "Praxis aus Begehungen und Audits – Maßnahmen mit Verantwortlichen und Fristen",
  "Verzahnung mit Fachkraft für Arbeitssicherheit, SiGeKo und Elektrosicherheit",
  "Köln und NRW – ein Ansprechpartner, dokumentierte Betreuung und Unterlagen",
];

export default function BrandschutzPage() {
  return (
    <div>
      <BrandschutzJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "Brandschutz" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Brandschutz.jpeg"
          alt="Brandschutz – Beratung von Bauordnung bis Betrieb"
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
              Brandschutz
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Von BauO und Sonderbau über Brandschutzkonzept bis zum laufenden Betrieb in Köln und NRW
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
            Health and Safety+ begleitet Unternehmen, Bauherren und Betreiber in Köln und NRW beim Brandschutz –{" "}
            <strong className="font-semibold text-slate-900">von der Baugenehmigung bis zum laufenden Betrieb</strong>.
            Wir erstellen{" "}
            <strong className="font-semibold text-slate-900">
              brandschutztechnische Konzepte, Stellungnahmen und Bewertungen nach Bauordnung
            </strong>{" "}
            (Sonderbau, Nutzungsänderung) und übernehmen den{" "}
            <strong className="font-semibold text-slate-900">betrieblichen Brandschutz</strong> mit Brandschutzordnung,
            Brandschutzbeauftragtem, Prüfungen und Schulungen – aus einer Hand.
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
                {block.links && block.links.length > 0 && (
                  <ul className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    {block.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
                          {...(l.href.startsWith("http") ? { rel: "noopener noreferrer", target: "_blank" } : {})}
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

          <section className="mt-14 p-6 sm:p-8 rounded-xl bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Aus einer Hand</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              <strong className="font-medium text-slate-800">Health and Safety+</strong> begleitet Sie in Köln und NRW
              durchgängig: brandschutztechnische Konzepte, Stellungnahmen und Bewertungen (BauO, Sonderbau,
              Nutzungsänderung) sowie betrieblicher Brandschutz mit Brandschutzbeauftragtem, BSO, Begehungen, GBU
              Brandgefahr, Schulungen und Übungen – inklusive Abstimmung mit Bauaufsicht, Versicherer und Facility.
            </p>
          </section>

          <section className="mt-14 p-6 sm:p-8 rounded-xl border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              Brandschutz mit System – für Köln und NRW
            </h2>
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
            ratgeberSlugs={["brandschutz-betrieb", "bauordnung-nrw-brandschutz"]}
            blogSlugs={[
              "bhkg-nrw-einfach-erklaert",
              "brandschutzkonzept-erstellen",
              "brandschutzordnung-din-14096",
              "brandschutzbeauftragter-aufgaben-pflichten",
              "brandschutz-sachverstaendiger-koeln",
              "vorbeugender-brandschutz-massnahmen",
            ]}
          />

          <div className="mt-14 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Neubau, Nutzungsänderung oder Betrieb – wir klären in der Erstberatung, welche Leistungen Sie brauchen.
            </p>
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
