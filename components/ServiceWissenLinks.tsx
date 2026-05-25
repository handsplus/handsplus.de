import Link from "next/link";
import { getPostBySlug } from "@/content/blog";
import { getRatgeberBySlug } from "@/content/ratgeber";

export function ServiceWissenLinks({
  ratgeberSlugs,
  blogSlugs,
}: {
  ratgeberSlugs: string[];
  blogSlugs: string[];
}) {
  const guides = ratgeberSlugs.map((s) => getRatgeberBySlug(s)).filter(Boolean);
  const posts = blogSlugs.map((s) => getPostBySlug(s)).filter(Boolean);
  if (!guides.length && !posts.length) return null;

  return (
    <section className="mt-14 rounded-xl border border-primary-200 bg-primary-50/50 p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-slate-900">Vertiefung im Wissen-Bereich</h2>
      <p className="mt-3 text-slate-600 leading-relaxed">
        Ausführliche Ratgeber und Fachartikel zu Pflichten und Praxis – hier auf der Leistungsseite:
        Was wir für Sie übernehmen.
      </p>
      {guides.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">Ratgeber</p>
          <ul className="mt-3 space-y-2">
            {guides.map((g) => (
              <li key={g!.slug}>
                <Link
                  href={`/wissen/ratgeber/${g!.slug}`}
                  className="text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
                >
                  {g!.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {posts.length > 0 && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">Fachartikel</p>
          <ul className="mt-3 space-y-2">
            {posts.map((p) => (
              <li key={p!.slug}>
                <Link
                  href={`/wissen/blog/${p!.slug}`}
                  className="text-sm text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
                >
                  {p!.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
