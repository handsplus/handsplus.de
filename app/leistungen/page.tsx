import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { serviceIcons } from "@/lib/serviceIcons";

const services = [
  { title: "Arbeitsschutz", description: "Grundbetreuung und betriebsspezifische Betreuung im Arbeitsschutz", href: "/arbeitsschutz", image: "/Arbeitsschutz.jpeg" },
  { title: "Brandschutz", description: "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz", href: "/brandschutz", image: "/Brandschutz.jpeg" },
  { title: "SiGeKo", description: "Sicherheits- und Gesundheitsschutzkoordination", href: "/sigeko", image: "/SiGeko.jpeg" },
  { title: "Elektrosicherheit", description: "Elektrosicherheit zum Schutz von Beschäftigten und Unternehmen vor Gefahren durch elektrischen Strom.", href: "/elektrosicherheit", image: "/Elektrosicherheit.jpeg" },
  { title: "Schulungen", description: "Schulungs- und Weiterbildungsangebote, die individuell auf Sie abgestimmt und zeitlich flexibel gestaltet werden – online oder vor Ort.", href: "/schulungen", image: "/Schulungen.jpeg" },
  { title: "Managementsysteme", description: "Einführung, Pflege, Auditierung und Optimierung von Managementsystemen (ISO 9001, ISO 45001, AMS VBG, AMS BAU)", href: "/managementsysteme", image: "/Managementsysteme.jpeg" },
];

export const metadata = pageMetadata({
  path: "/leistungen",
  title: "Leistungen im Arbeitsschutz & Brandschutz – Ihre Experten",
  description: "Arbeitsschutz, SiGeKo, Brandschutz, Elektrosicherheit, Schulungen und Managementsysteme. Qualitativ hochwertige Betreuung, die an Ihre Bedürfnisse angepasst ist.",
  keywords: ["Leistungen Arbeitsschutz", "Brandschutz Köln", "Brandschutz Sachverständiger", "SiGeKo", "Schulungen Arbeitsschutz", "Fachkraft für Arbeitssicherheit"],
});

function LeistungenJsonLd() {
  const url = `${BASE_URL}/leistungen`;
  const items = [
    { name: "Arbeitsschutz", url: `${BASE_URL}/arbeitsschutz` },
    { name: "Brandschutz", url: `${BASE_URL}/brandschutz` },
    { name: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination", url: `${BASE_URL}/sigeko` },
    { name: "Elektrosicherheit", url: `${BASE_URL}/elektrosicherheit` },
    { name: "Schulungen", url: `${BASE_URL}/schulungen` },
    { name: "Managementsysteme", url: `${BASE_URL}/managementsysteme` },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Leistungen von Health and Safety +",
    url,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function LeistungenPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <LeistungenJsonLd />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Unsere Leistungen – Arbeitsschutz, SiGeKo, Brandschutz, Elektrosicherheit, Schulungen und Managementsysteme
        </h1>
        <p className="mt-6 text-lg text-slate-600">
          Wir sorgen für eine qualitativ hochwertige Betreuung, die an Ihre Bedürfnisse angepasst ist.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.href} className="border border-slate-200 rounded-xl bg-white hover:border-primary-200 hover:shadow-md transition-[border-color,box-shadow] duration-200 overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={s.image}
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
                  <h2 className="text-lg font-semibold text-slate-900 m-0">{s.title}</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                <Link href={s.href} className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900">
                  Mehr erfahren
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-slate-200 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
