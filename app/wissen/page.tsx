import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { faqItems } from "@/content/faq";
import { blogPosts } from "@/content/blog";

/** Beliebte FAQ – für Schnellzugriff und SEO */
const featuredFaqIds = [
  "fachkraft-arbeitssicherheit",
  "brandschutzbeauftragter-pflicht",
  "brandschutzhelfer-anzahl",
  "unterweisung-haeufigkeit",
  "kosten-erstberatung",
  "sigeko-kosten-honorar",
  "ablauf-zusammenarbeit",
  "sigeko-wann",
];

/** Empfohlene Blogbeiträge – thematisch stark und suchrelevant */
const featuredBlogSlugs = [
  "dguv-vorschrift-2",
  "asr-a2-2-brandschutzhelfer",
  "bestellung-fachkraft-arbeitssicherheit",
  "unterweisung-arbeitsschutz-fristen",
  "akteure-arbeitsschutz",
  "gefaehrdungsbeurteilung-ablauf",
  "getraenke-am-arbeitsplatz",
  "brandschutz-lithium-ionen-batterien",
  "sigeko-kosten-honorar-orientierung",
];

export const metadata = pageMetadata({
  path: "/wissen",
  title: "Wissen & Ressourcen – FAQ, Checklisten, Glossar, Rechner | H&S+",
  description: "Checklisten, FAQ, Glossar, Rechner und Schulungstermine – alles auf einen Blick. Wissen zu Arbeitsschutz, Brandschutz und SiGeKo.",
  keywords: ["Wissen Arbeitsschutz", "FAQ Brandschutz", "Blog SiGeKo", "Checklisten", "Glossar", "Rechner ASR A2.2", "SiGeKo Honorar"],
});

const resources = [
  {
    title: "Checklisten & Selbstbewertung",
    description: "Gefährdungsbeurteilung, Brandschutz und SiGeKo im Check.",
    href: "/wissen/checklisten",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Häufige Fragen (FAQ)",
    description: "Antworten zu Arbeitssicherheit, Brandschutz, SiGeKo und mehr.",
    href: "/wissen/faq",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Glossar",
    description: "Begriffe aus Arbeitssicherheit, Brandschutz und SiGeKo kurz erklärt.",
    href: "/wissen/glossar",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Rechner",
    description: "Brandschutzhelfer-Anzahl (ASR A2.2), SiGeKo-Honorar-Orientierung.",
    href: "/wissen/rechner",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Schulungstermine anfragen",
    description: "Termine für Schulungen und Unterweisungen individuell auf Anfrage.",
    href: "/kontakt",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Blog Beiträge",
    description: "Aktuelle Beiträge zu Arbeitssicherheit, Brandschutz und SiGeKo.",
    href: "/wissen/blog",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

export default function WissenPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          Wissen & Ressourcen
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl">
          Checklisten, FAQ, Glossar, Rechner und Schulungstermine – alles auf einen Blick.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-6 rounded-xl border border-slate-200 bg-white hover:border-primary-200 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center" aria-hidden>
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900">
                    Mehr erfahren
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Beliebte FAQ */}
        <section className="mt-16 sm:mt-20" aria-labelledby="beliebte-faq-heading">
          <h2 id="beliebte-faq-heading" className="text-2xl font-bold tracking-tight text-slate-900">
            Beliebte FAQ
          </h2>
          <p className="mt-2 text-slate-600">
            Die wichtigsten Fragen zu Arbeitsschutz, Brandschutz und SiGeKo – direkt zur Antwort.
          </p>
          <ul className="mt-6 space-y-3">
            {featuredFaqIds
              .map((id) => faqItems.find((item) => item.id === id))
              .filter(Boolean)
              .map((item) => (
                <li key={item!.id}>
                  <Link
                    href={`/wissen/faq#${item!.id}`}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-left transition-colors hover:border-primary-200 hover:bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <span className="flex-shrink-0 mt-0.5 text-primary-600" aria-hidden>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span className="font-medium text-slate-900">{item!.question}</span>
                    <span className="ml-auto flex-shrink-0 text-primary-800">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4">
            <Link href="/wissen/faq" className="text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2">
              Alle FAQ ansehen
            </Link>
          </p>
        </section>

        {/* Empfohlene Blogbeiträge */}
        <section className="mt-16 sm:mt-20" aria-labelledby="empfohlene-blog-heading">
          <h2 id="empfohlene-blog-heading" className="text-2xl font-bold tracking-tight text-slate-900">
            Empfohlene Blogbeiträge
          </h2>
          <p className="mt-2 text-slate-600">
            Aktuelle und oft gesuchte Themen – kompakt und praxisnah.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBlogSlugs
              .map((slug) => blogPosts.find((p) => p.slug === slug))
              .filter(Boolean)
              .map((post) => (
                <li key={post!.slug}>
                  <Link
                    href={`/wissen/blog/${post!.slug}`}
                    className="block h-full rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-primary-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  >
                    <h3 className="font-semibold text-slate-900">{post!.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post!.excerpt}</p>
                    <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-800">
                      Weiterlesen
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
          <p className="mt-4">
            <Link href="/wissen/blog" className="text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2">
              Alle Blogbeiträge ansehen
            </Link>
          </p>
        </section>

        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Kostenlose Erstberatung anfordern
          </Link>
        </div>
      </div>
    </div>
  );
}
