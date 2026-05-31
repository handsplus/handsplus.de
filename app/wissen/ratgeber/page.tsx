import Link from "next/link";
import { HeroMeshBand, heroBackLinkClass } from "@/components/HeroMeshBand";
import { pageMetadata } from "@/lib/metadata";
import { ratgeberPosts } from "@/content/ratgeber";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";

export const metadata = pageMetadata({
  path: "/wissen/ratgeber",
  title: "Ratgeber Arbeitsschutz, Brandschutz & SiGeKo Köln NRW",
  description:
    "Umfassende Ratgeber zu Arbeitsschutz im Unternehmen, betrieblichem Brandschutz, SiGeKo, Gefährdungsbeurteilung, BauO NRW und Elektrosicherheit – Praxiswissen für Köln und NRW.",
  keywords: [
    "Ratgeber Arbeitsschutz",
    "Brandschutz Betrieb",
    "SiGeKo Ratgeber",
    "Gefährdungsbeurteilung",
    "BauO NRW Brandschutz",
    "DGUV Vorschrift 3",
  ],
});

export default function RatgeberHubPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Wissen", path: "/wissen" }, { name: "Ratgeber" }]} />
      <HeroMeshBand compact>
        <nav aria-label="Breadcrumb">
          <Link href="/wissen" className={heroBackLinkClass}>
            ← Wissen & Ressourcen
          </Link>
        </nav>
        <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight max-w-3xl m-0">
          Ratgeber – Arbeitsschutz, Brandschutz & SiGeKo
        </h1>
        <p className="mt-4 text-lg text-white/90 max-w-2xl leading-snug">
          Unsere Ratgeber bündeln Pflichten, Organisation und Praxis für Unternehmen in Köln und NRW.
          Sie ergänzen den Blog mit vertiefenden Übersichten zu den wichtigsten Themenfeldern.
        </p>
      </HeroMeshBand>

      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratgeberPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/wissen/ratgeber/${post.slug}`}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] hover:border-primary-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                  {post.tag}
                </span>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">{post.title}</h2>
                <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-800">
                  Ratgeber lesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 text-center">
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
