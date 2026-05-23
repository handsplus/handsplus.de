import { BLOG_BAUO_KOELN_LINKS } from "@/content/brandschutzKoelnRatgeber";

export function BlogBauordnungKoelnTeaser({ slug }: { slug: string }) {
  const item = BLOG_BAUO_KOELN_LINKS[slug];
  if (!item) return null;
  return (
    <aside className="mt-8 rounded-lg border border-teal-200 bg-teal-50/40 p-4 text-sm text-slate-700">
      <p className="font-medium text-slate-900">Genehmigung & BauO in Köln</p>
      <p className="mt-1">
        Vertiefung mit Praxisfällen:{" "}
        <a
          href={item.href}
          className="font-medium text-teal-900 underline decoration-teal-300 underline-offset-2"
          rel="noopener noreferrer"
          target="_blank"
        >
          {item.label}
        </a>
      </p>
    </aside>
  );
}
