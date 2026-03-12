import Link from "next/link";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

const services = [
  { title: "Arbeitsschutz", description: "Grundbetreuung und betriebsspezifische Betreuung im Arbeitsschutz", href: "/arbeitsschutz" },
  { title: "SiGeKo", description: "Sicherheits- und Gesundheitsschutzkoordination", href: "/sigeko" },
  { title: "Brandschutz", description: "Beratung und Unterstützung im baulichen, anlagentechnischen und organisatorischen Brandschutz", href: "/brandschutz" },
  { title: "Schulungen", description: "Schulungs- und Weiterbildungsangebote, die individuell auf Sie abgestimmt und zeitlich flexibel gestaltet werden – online oder vor Ort.", href: "/schulungen" },
  { title: "Elektrosicherheit", description: "Elektrosicherheit zum Schutz von Beschäftigten und Unternehmen vor Gefahren durch elektrischen Strom.", href: "/elektrosicherheit" },
  { title: "Managementsysteme", description: "Einführung, Pflege, Auditierung und Optimierung von Managementsystemen (ISO 9001, ISO 45001, AMS VBG, AMS BAU)", href: "/managementsysteme" },
];

export const metadata = pageMetadata({
  path: "/leistungen",
  title: "Leistungen im Arbeitsschutz & Brandschutz – Ihre Experten",
  description: "Arbeitsschutz, SiGeKo, Brandschutz, Elektrosicherheit, Schulungen und Managementsysteme. Qualitativ hochwertige Betreuung, die an Ihre Bedürfnisse angepasst ist.",
  keywords: ["Leistungen Arbeitsschutz", "Brandschutz Köln", "SiGeKo", "Schulungen Arbeitsschutz", "Fachkraft für Arbeitssicherheit"],
});

function LeistungenJsonLd() {
  const url = `${BASE_URL}/leistungen`;
  const items = [
    { name: "Arbeitsschutz", url: `${BASE_URL}/arbeitsschutz` },
    { name: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination", url: `${BASE_URL}/sigeko` },
    { name: "Brandschutz", url: `${BASE_URL}/brandschutz` },
    { name: "Schulungen", url: `${BASE_URL}/schulungen` },
    { name: "Elektrosicherheit", url: `${BASE_URL}/elektrosicherheit` },
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
    <div className="py-16 sm:py-20 lg:py-24" style={{ padding: "4rem 0" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <LeistungenJsonLd />
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900" style={{ fontSize: "1.875rem", fontWeight: 700, color: "#0f172a", margin: 0 }}>
          Unsere Leistungen – Arbeitsschutz, SiGeKo, Brandschutz, Elektrosicherheit, Schulungen und Managementsysteme
        </h1>
        <p className="mt-6 text-lg text-slate-600" style={{ marginTop: "1.5rem", fontSize: "1.125rem", color: "#475569" }}>
          Wir sorgen für eine qualitativ hochwertige Betreuung, die an Ihre Bedürfnisse angepasst ist.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: "3rem", display: "grid", gridTemplateColumns: "repeat(1, 1fr)", gap: "2rem" }}>
          {services.map((s) => (
            <div key={s.href} className="border border-slate-200 rounded-xl p-6 bg-white hover:border-primary-200 hover:shadow-md transition-all" style={{ border: "1px solid #e2e8f0", borderRadius: "0.75rem", padding: "1.5rem", backgroundColor: "#fff" }}>
              <h2 className="text-lg font-semibold text-slate-900" style={{ fontSize: "1.125rem", fontWeight: 600, color: "#0f172a", margin: 0 }}>{s.title}</h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed" style={{ marginTop: "0.75rem", fontSize: "0.875rem", color: "#475569", lineHeight: 1.6 }}>{s.description}</p>
              <Link href={s.href} className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900" style={{ marginTop: "1rem", fontSize: "0.875rem", fontWeight: 500, color: "#3b7564" }}>
                Mehr erfahren
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ marginLeft: "0.25rem", width: "1rem", height: "1rem" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-slate-200 text-center" style={{ marginTop: "3rem", paddingTop: "2.5rem", borderTop: "1px solid #e2e8f0", textAlign: "center" }}>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1.5rem", borderRadius: "0.5rem", backgroundColor: "#3b7564", color: "#fff", fontWeight: 500 }}
          >
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  );
}
