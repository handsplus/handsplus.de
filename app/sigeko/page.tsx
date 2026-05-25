import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ServiceWissenLinks } from "@/components/ServiceWissenLinks";

export const metadata = pageMetadata({
  path: "/sigeko",
  title: "SiGeKo Köln NRW – Baustellenkoordination nach BaustellV",
  description:
    "SiGeKo in Köln und NRW: Koordination nach BaustellV und RAB 30, SiGe-Plan, Vorankündigung, Begehungen, Einweisungen, Übergaben und Dokumentation für Neubau und Umbau.",
  keywords: [
    "SiGeKo Köln",
    "Sicherheits- und Gesundheitsschutzkoordination",
    "BaustellV",
    "RAB 30",
    "SiGe-Plan",
    "Baustellenkoordination",
    "Baustellenbegehung",
  ],
  openGraphImage: "/SiGeko.jpeg",
});

function SiGeKoJsonLd() {
  const url = `${BASE_URL}/sigeko`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination in Köln und NRW",
    description:
      "Koordination nach BaustellV: SiGe-Plan, Vorankündigung, Baustellenbegehungen, Einweisungen, Übergaben, Dokumentation und Abstimmung besonders gefährlicher Arbeiten.",
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
    serviceType: ["SiGeKo", "Baustellensicherheit", "Baustellenkoordination"],
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
    title: "Vorplanung – SiGe-Plan und Information",
    intro:
      "In der Planungsphase bringt der Koordinator für die Planung sicherheitsrelevante Aspekte in die Ausführungsplanung ein: Verkehrs- und Rettungswege auf der Baustelle, Logistik, Kranstellplätze, Sozial- und Sanitärräume, Absturzsicherung und Schnittstellen zwischen Gewerken. Der SiGe-Plan ist die zentrale Unterlage – versioniert, am Bauzaun ausgehängt und für alle Betriebe nachvollziehbar.",
    items: [
      "SiGe-Plan erstellen und fortschreiben (Versionen bei Planungs- oder Bauablaufänderungen)",
      "Vorankündigung und Information der ausführenden Unternehmen",
      "Baustellenordnung und Regelungen zu Querschnittsthemen (Verkehr, Lärm, Nachbarschaft)",
      "Benennung besonders gefährlicher Arbeiten nach Anhang II BaustellV im Plan",
      "Abstimmung mit Bauleitung, Planung und Bauherr zu Bauzeitenplan und Gewerkefolge",
      "Vorbereitung übergeordneter Gefährdungsbeurteilung des Bauvorhabens bei komplexen Schnittstellen",
    ],
    links: [
      { href: "/wissen/ratgeber/sigeko-baustelle", label: "Ratgeber SiGeKo auf der Baustelle" },
      { href: "/wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko", label: "Blog: Wann SiGeKo-Pflicht?" },
      { href: "/wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw", label: "Blog: Projektverlauf Neubau" },
    ],
  },
  {
    title: "Ausführung – Koordination, Begehungen, Übergaben",
    intro:
      "In der Ausführungsphase koordiniert der SiGeKo die Sicherheitsmaßnahmen der Unternehmen vor Ort. Er ersetzt keine Gewerke-Verantwortung – er macht Schnittstellen sichtbar, dokumentiert Mängel mit Verantwortlichen und Fristen und moderiert Übergaben zwischen Bauabschnitten.",
    items: [
      "Baustellenbegehungen mit Fotos, Priorisierung und Nachverfolgung offener Punkte",
      "Projektbezogene Sicherheitseinweisungen und Abstimmung mit Bauleitung",
      "Übergabeprotokolle zwischen Gewerken (z. B. Abbruch → Rohbau → Gerüst → Ausbau)",
      "Koordination bei gleichzeitigen oder nacheinander tätigen Unternehmen",
      "Dokumentation zum Sicherheits- und Gesundheitsschutz für Behörde und Beteiligte",
      "Unterlagen für spätere Arbeiten / Instandhaltung nach Fertigstellung",
    ],
    links: [
      { href: "/wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln", label: "Blog: Begehung Abbruch/Seitenschutz" },
      { href: "/wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt", label: "Blog: GBU bei Schnittstellen" },
      { href: "/wissen/blog/rauchen-baustelle-arbstattv-sigeko", label: "Blog: Rauchen auf der Baustelle" },
    ],
  },
  {
    title: "Besonders gefährliche Arbeiten und Baustellenrisiken",
    intro:
      "Anhang-II-Tätigkeiten (Absturz, Abbruch, Gräben, Gefahrstoffe, Hochspannungsnähe u. a.) erfordern frühzeitige Planung, geeignete Aufsicht und dokumentierte Maßnahmen. Unser fachlicher Hintergrund zu Baustellenrisiken – Absturz, Abbruch, Elektro, Verkehr, Fremdfirmen – fließt in Plan und Begehungen ein, ohne BG-Vorlagen zu kopieren.",
    items: [
      "Absturzsicherung und Seitenschutz in Abbruch- und Rohbauphasen",
      "Abbruchkoordination: Abbruchanweisung, statische Bewertung, Aufsichtsführender",
      "Baustellenstrom und ortsveränderliche Geräte – Schnittstelle zur Elektrosicherheit",
      "Fremdfirmen und Subunternehmer: gemeinsame Begehung, gegenseitige Gefährdungen",
      "Staub, Lärm, Verkehr und Nachbarschaft – Querschnitt im SiGe-Plan",
      "Bestand und laufender Betrieb: Dach-, Klima- und Innenausbauarbeiten",
    ],
    links: [
      { href: "/wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln", label: "Blog: Dacharbeiten im Bestand" },
      { href: "/wissen/ratgeber/elektrosicherheit-dguv-v3", label: "Ratgeber Elektrosicherheit DGUV V3" },
    ],
  },
  {
    title: "Honorar und Leistungsumfang",
    intro:
      "SiGeKo-Honorare sind kein Standard-LV: Sie hängen von Gewerkeanzahl, Bauphase, Begehungsrhythmus, innerstädtischem Umfeld und Zusatzleistungen ab. Wir kalkulieren transparent nach Leistungsblöcken – Vorplanung, Ausführung, dokumentierte Begehungen – mit klarer Regelung zu Mehrleistungen.",
    items: [
      "Angebot mit Leistungsverzeichnis (Plan, Begehungen, Einweisungen, Dokumentation)",
      "Pauschalen pro Phase oder Monatspauschale bei Dauerbaustellen",
      "Zusatzleistungen: erweiterte GBU, Prüfung Gewerke-GBUs, Sonderbegehungen",
      "Honorar-Rechner zur groben Orientierung auf der Wissen-Seite",
    ],
    links: [
      { href: "/wissen/blog/sigeko-kosten-honorar-orientierung", label: "Blog: Honorar-Orientierung" },
      { href: "/wissen/blog/sigeko-koeln-kosten", label: "Blog: SiGeKo-Kosten Köln" },
      { href: "/wissen/blog/sigeko-innenausbau-bestand-leistungsumfang", label: "Blog: Leistungsumfang Bestand" },
      { href: "/wissen/rechner", label: "Honorar-Rechner" },
    ],
  },
];

const anlaesse = [
  {
    label: "Neubau und Rohbau",
    items: [
      "Mehrere Gewerke ab Rohbau",
      "SiGe-Plan und Erstbegehung vor Baubeginn",
      "Kran, Logistik, innerstädtische Zufahrt",
    ],
  },
  {
    label: "Umbau und Bestand",
    items: [
      "Abbruch- und Rückbauphase",
      "Innenausbau bei laufendem Betrieb in der Nähe",
      "Dach-, Klima- und Wartungsarbeiten",
    ],
  },
  {
    label: "Organisation und Pflicht",
    items: [
      "Klärung SiGeKo-Pflicht nach BaustellV",
      "Übergaben und Baustellenordnung",
      "Behörde, BG oder Nachbarschaftsdruck",
    ],
  },
];

const highlights = [
  "Zwei Phasen nach BaustellV: Vorplanung mit SiGe-Plan und Ausführungskoordination vor Ort",
  "Dokumentierte Begehungen mit Verantwortlichen, Fristen und Wirksamkeitskontrolle",
  "Schnittstellen zu Fachkraft für Arbeitssicherheit, Brandschutz und Elektrosicherheit",
  "Praxis aus innerstädtischen Projekten in Köln – Abbruch, Umbau, Neubau, Bestand",
  "Transparente Angebote nach Leistungsumfang – kein anonymes „Nur-Plan“-Paket",
];

export default function SiGeKoPage() {
  return (
    <div>
      <SiGeKoJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "SiGeKo" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/SiGeko.jpeg"
          alt="SiGeKo – Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle"
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
              SiGeKo
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Sicherheits- und Gesundheitsschutzkoordination nach BaustellV – von SiGe-Plan bis Baustellenbegehung in
              Köln und NRW
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
            Auf Baustellen mit mehreren Arbeitgebern koordiniert der{" "}
            <strong className="font-semibold text-slate-900">
              Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo)
            </strong>{" "}
            nach Baustellenverordnung das Zusammenwirken der Gewerke. Health and Safety+ begleitet Bauherren und
            ausführende Unternehmen in Köln und NRW in zwei Phasen:{" "}
            <strong className="font-semibold text-slate-900">Vorplanung mit SiGe-Plan</strong> und{" "}
            <strong className="font-semibold text-slate-900">Ausführungskoordination</strong> mit Begehungen,
            Einweisungen und Übergaben. Der Bauherr bleibt verantwortlich – wir sorgen für nachvollziehbare Dokumentation
            und wirksame Schnittstellen.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            Qualifikation und Vorgehen orientieren sich an den Regeln zum Arbeitsschutz auf Baustellen (RAB 30). Wo
            Baustelle und Betrieb zusammentreffen, stimmen wir uns mit Fachkraft für Arbeitssicherheit, Brandschutz und
            Elektrosicherheit ab.
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
              <strong className="font-medium text-slate-800">Health and Safety+</strong> verbindet SiGeKo mit
              Fachkraft für Arbeitssicherheit nach DGUV Vorschrift 2, betrieblichem Brandschutz (Brandschutzordnung,
              Brandschutzbeauftragter) und Elektrosicherheit nach DGUV V3 – ein Ansprechpartner für Baustelle und
              späteren Betrieb in Köln und NRW.
            </p>
          </section>

          <section className="mt-14 p-6 sm:p-8 rounded-xl border border-slate-200">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              SiGeKo mit System – für Köln und NRW
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
            ratgeberSlugs={["sigeko-baustelle", "arbeitsschutz-unternehmen"]}
            blogSlugs={[
              "sigeko-pflicht-wann-braucht-man-sigeko",
              "sigeko-begehung-seitenschutz-abbruch-koeln",
              "sigeko-kosten-honorar-orientierung",
              "gbu-schnittstelle-mehrere-gewerke-bauprojekt",
              "sigeko-projektverlauf-neubau-wohngebaeude-nrw",
            ]}
          />

          <div className="mt-14 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">
              Neubau, Umbau oder Bestand – wir klären in der Erstberatung Pflicht, Umfang und Honorar.
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
