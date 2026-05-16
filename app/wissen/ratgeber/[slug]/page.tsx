import Link from "next/link";
import { notFound } from "next/navigation";
import { getRatgeberBySlug, ratgeberPosts, type RatgeberSection } from "@/content/ratgeber";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ContentBody } from "@/components/ContentBody";
import { ContentText } from "@/lib/contentLinks";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return ratgeberPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getRatgeberBySlug(params.slug);
  if (!post) return {};
  return pageMetadata({
    path: `/wissen/ratgeber/${post.slug}`,
    title: post.titleTag,
    description: post.metaDescription,
  });
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
}

function TableOfContents({ sections }: { sections: RatgeberSection[] }) {
  const headings = sections.filter((s) => s.h2).map((s) => s.h2!);
  if (headings.length < 3) return null;
  return (
    <nav
      className="mb-10 rounded-lg border border-slate-200 bg-slate-50/80 p-5"
      aria-label="Inhaltsverzeichnis"
    >
      <p className="text-sm font-semibold text-slate-900">Inhalt</p>
      <ol className="mt-3 list-decimal pl-5 space-y-1.5 text-sm text-slate-600">
        {headings.map((h) => (
          <li key={h}>
            <a
              href={`#${slugifyHeading(h)}`}
              className="hover:text-primary-800 underline-offset-2 hover:underline"
            >
              {h}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function RatgeberFaqJsonLd({
  faq,
  url,
}: {
  faq: { question: string; answer: string }[];
  url: string;
}) {
  if (!faq.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\[Link:\s*[^\]]+\]/g, "").trim(),
      },
    })),
    url,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default function RatgeberPostPage({ params }: { params: { slug: string } }) {
  const post = getRatgeberBySlug(params.slug);
  if (!post) notFound();

  const url = `${BASE_URL}/wissen/ratgeber/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Health and Safety +",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "H&S+ Health and Safety +",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "de-DE",
  };

  return (
    <main className="py-16 sm:py-20 lg:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <RatgeberFaqJsonLd faq={post.faq} url={url} />
      <BreadcrumbJsonLd
        items={[
          { name: "Wissen", path: "/wissen" },
          { name: "Ratgeber", path: "/wissen/ratgeber" },
          { name: post.title },
        ]}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" itemScope itemType="https://schema.org/Article">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/wissen/ratgeber"
            className="text-sm text-primary-800 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
          >
            ← Zurück zu Ratgeber
          </Link>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">{post.tag}</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{post.title}</h1>

        <TableOfContents sections={post.sections} />

        <ContentBody sections={post.sections} />

        {post.faq.length > 0 && (
          <section className="mt-14 pt-10 border-t-2 border-amber-200" aria-labelledby="ratgeber-faq">
            <h2 id="ratgeber-faq" className="text-xl font-semibold text-slate-900">
              Häufige Fragen (FAQ)
            </h2>
            <dl className="mt-6 space-y-6">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <dt className="text-lg font-medium text-slate-900">{item.question}</dt>
                  <dd className="mt-2 text-slate-600 leading-relaxed">
                    <ContentText text={item.answer} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <aside className="mt-12 rounded-lg border-l-4 border-amber-400 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Verfasst von Health and Safety+ (H&S+)</p>
          <p className="mt-2">
            Health and Safety+ begleitet Unternehmen, Bauherren und Betreiber in Köln und ganz NRW bei
            Arbeitsschutz, betrieblichem Brandschutz, SiGeKo und Elektrosicherheit.
          </p>
        </aside>

        <section className="mt-10 rounded-xl bg-gradient-to-br from-primary-800 to-primary-700 p-6 text-white">
          <p className="font-semibold text-lg">Kostenlose Erstberatung</p>
          <p className="mt-2 text-primary-100 text-sm">
            Praxisberatung in Köln und NRW – modular zu Ihren internen Strukturen.
          </p>
          <p className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-400 text-slate-900 font-medium hover:bg-amber-300 transition-colors"
            >
              Termin vereinbaren
            </Link>
            <Link
              href={post.servicePath}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-white/40 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Zur Leistungsseite
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
