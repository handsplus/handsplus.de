import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/wissen/blog",
  title: "Blog – Arbeitsschutz & Brandschutz | H&S+",
  description: "Praxisnahe Beiträge zu Arbeitsschutz, Brandschutz, SiGeKo und betrieblicher Sicherheit – von H&S+ in Köln.",
  keywords: ["Blog Arbeitsschutz", "Blog Brandschutz", "Fachartikel SiGeKo", "Wissen Arbeitssicherheit"],
});

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

export default function WissenBlogPage() {
  return (
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
          Blogbeiträge
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          Praxisnahe Beiträge zu aktuellen Themen im Arbeitsschutz und Brandschutz.
        </p>

        <ul className="mt-10 space-y-6 list-none pl-0" role="list">
          {blogPosts.map((post) => (
            <li
              key={post.slug}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-primary-200 hover:shadow-md transition-all"
            >
              <Link
                href={`/wissen/blog/${post.slug}`}
                className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg -m-2 p-2"
              >
                <time className="text-sm text-slate-500" dateTime={post.date}>
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-1 text-xl font-semibold text-slate-900 hover:text-primary-800 transition-colors">
                  {post.title}
                </h2>
                <p className="mt-2 text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-800">
                  Beitrag lesen
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>

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
  );
}
