const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

type Crumb = { name: string; path?: string };

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const crumbs = [{ name: "Startseite", path: "" }, ...items];
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path !== undefined ? { item: `${BASE_URL}${c.path}` } : {}),
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
