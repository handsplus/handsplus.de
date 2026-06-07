import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, blogPosts } from "@/content/blog";
import {
  getPillarSlugForBlog,
  getRelatedBlogSlugs,
  getRelatedPostsTitle,
} from "@/content/blogClusters";
import { BlogBauordnungKoelnTeaser } from "@/components/BlogBauordnungKoelnTeaser";
import { BlogFaqSection } from "@/components/BlogFaqSection";
import { BlogTableOfContents } from "@/components/BlogTableOfContents";
import { ClusterRelatedPosts } from "@/components/ClusterRelatedPosts";
import { PillarGuideBanner } from "@/components/PillarGuideBanner";
import { ContentText } from "@/lib/contentLinks";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const keywords = extractBlogKeywords(post.title, post.excerpt);
  return pageMetadata({
    path: `/wissen/blog/${post.slug}`,
    title: `${post.title} | Blog`,
    description: post.excerpt,
    keywords,
    openGraphType: "article",
    publishedTime: post.date,
  });
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

function blogHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
}

const BLOG_H2_PREFIX = "H2::";

const STOP_WORDS = new Set([
  "für",
  "und",
  "der",
  "die",
  "das",
  "mit",
  "nach",
  "einfach",
  "erklärt",
  "blog",
  "sowie",
  "oder",
  "beim",
  "eine",
  "einer",
  "eines",
  "über",
  "alle",
  "was",
  "wie",
  "wann",
  "pflichten",
  "praxis",
  "praxisnah",
  "betriebe",
]);

function extractBlogKeywords(title: string, excerpt: string): string[] {
  const raw = `${title} ${excerpt}`.toLowerCase();
  const tokens = raw.match(/[a-zäöüß0-9§]+/gi) ?? [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of tokens) {
    if (t.length < 4 || STOP_WORDS.has(t) || seen.has(t)) continue;
    seen.add(t);
    out.push(t);
    if (out.length >= 10) break;
  }
  if (!out.includes("köln")) out.push("Köln");
  if (!out.includes("nrw")) out.push("NRW");
  return out.slice(0, 12);
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post || !post.content) notFound();

  const pillarSlug = getPillarSlugForBlog(post.slug);
  const url = `${BASE_URL}/wissen/blog/${post.slug}`;
  const h2Headings = post.content
    .filter((b) => b.startsWith(BLOG_H2_PREFIX))
    .map((b) => b.slice(BLOG_H2_PREFIX.length));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
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
    isPartOf: { "@type": "WebSite", "@id": BASE_URL, name: "H&S+ Health and Safety +" },
  };

  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: "Wissen", path: "/wissen" }, { name: "Blog", path: "/wissen/blog" }, { name: post.title }]} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-8" aria-label="Breadcrumb">
          <Link
            href="/wissen/blog"
            className="text-sm text-primary-800 hover:text-primary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
          >
            ← Zurück zu Blogbeiträge
          </Link>
        </nav>

        <article itemScope itemType="https://schema.org/Article">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>Health and Safety +</span>
          </div>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            {post.title}
          </h1>
          {pillarSlug && <PillarGuideBanner pillarSlug={pillarSlug} />}
          <BlogBauordnungKoelnTeaser slug={post.slug} />
          {h2Headings.length >= 2 && <BlogTableOfContents headings={h2Headings} />}
          <div className="mt-8 space-y-6 text-slate-600 leading-relaxed">
            {post.content.map((block, i) => {
              if (block.startsWith(BLOG_H2_PREFIX)) {
                const h2 = block.slice(BLOG_H2_PREFIX.length);
                return (
                  <h2
                    key={i}
                    id={blogHeadingId(h2)}
                    className="text-xl sm:text-2xl font-semibold text-slate-900 scroll-mt-24"
                  >
                    {h2}
                  </h2>
                );
              }
              return (
                <p key={i}>
                  <ContentText text={block} />
                </p>
              );
            })}
          </div>
          {post.faq && post.faq.length > 0 && (
            <BlogFaqSection faq={post.faq} pageUrl={url} />
          )}
        </article>

        <ClusterRelatedPosts
          slugs={getRelatedBlogSlugs(post.slug, 4)}
          title={getRelatedPostsTitle(post.slug) ?? "Weitere Artikel zum Thema"}
        />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/wissen/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 text-slate-700 font-medium hover:border-slate-400 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Zurück zu Blogbeiträge
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
  );
}
