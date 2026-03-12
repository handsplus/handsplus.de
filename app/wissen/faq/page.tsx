import Link from "next/link";
import { faqItems } from "@/content/faq";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/wissen/faq",
  title: "FAQ – Häufige Fragen zu Arbeitsschutz, Brandschutz & SiGeKo | H&S+",
  description: "Häufige Fragen zu Fachkraft für Arbeitssicherheit, Gefährdungsbeurteilung, SiGeKo, Brandschutzbeauftragtem, Elektroprüfung und Betreuung in Köln. Klare Antworten von H&S+.",
  keywords: [
    "FAQ Arbeitsschutz",
    "Gefährdungsbeurteilung",
    "SiGeKo",
    "Brandschutzbeauftragter",
    "Fachkraft für Arbeitssicherheit",
    "Köln",
    "Elektroprüfung",
    "DGUV",
  ],
});

function FaqJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function WissenFaqPage() {
  return (
    <>
      <FaqJsonLd />
      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8" aria-label="Breadcrumb">
            <Link
              href="/wissen"
              className="text-sm text-primary-800 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            >
              ← Zurück zu Wissen
            </Link>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Häufige Fragen
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Die wichtigsten Fragen zu Arbeitsschutz, Brandschutz und SiGeKo – kurz und praxisnah beantwortet.
          </p>

          <section
            className="mt-10 p-6 sm:p-8 rounded-xl border border-slate-200 bg-white shadow-sm"
            aria-labelledby="faq-heading"
          >
            <h2 id="faq-heading" className="sr-only">
              Übersicht der Fragen und Antworten
            </h2>

            <div className="space-y-2">
              {faqItems.map((item) => (
                <details
                  key={item.id}
                  id={item.id}
                  className="group rounded-lg border border-slate-200 bg-slate-50/50 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-3.5 px-5 text-left text-base font-semibold text-slate-900 hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="border-t border-slate-200 bg-white px-5 py-4">
                    <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/wissen"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Zurück zu Wissen
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Kostenlose Erstberatung anfordern
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
