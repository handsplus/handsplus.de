import Link from "next/link";
import { getPostBySlug } from "@/content/blog";

export function ClusterRelatedPosts({
  slugs,
  title = "Weitere Artikel zum Thema",
}: {
  slugs: string[];
  title?: string;
}) {
  const posts = slugs.map((s) => getPostBySlug(s)).filter(Boolean);
  if (posts.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200" aria-labelledby="cluster-related">
      <h2 id="cluster-related" className="text-lg font-semibold text-slate-900">
        {title}
      </h2>
      <ul className="mt-4 space-y-2">
        {posts.map((post) => (
          <li key={post!.slug}>
            <Link
              href={`/wissen/blog/${post!.slug}`}
              className="text-sm text-primary-800 hover:text-primary-900 underline underline-offset-2 decoration-primary-200"
            >
              {post!.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
