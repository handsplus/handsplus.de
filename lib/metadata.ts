import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://handsplus.de";
const BRAND_SUFFIX = " | H&S+";

/** Max length for meta description (SEO best practice). */
const META_DESC_MAX = 160;

/**
 * Entfernt manuelles „| H&S+“ / „| handsplus.de“ – das Layout hängt „| H&S+“ per template an.
 */
export function normalizePageTitle(title: string): string {
  let t = title.trim();
  while (/\s\|\s*H&S\+\s*$/i.test(t)) {
    t = t.replace(/\s\|\s*H&S\+\s*$/i, "").trim();
  }
  t = t.replace(/\s\|\s*handsplus\.de\s*$/i, "").trim();
  return t;
}

/** Vollständiger Anzeige-Titel mit Marke (für Open Graph / Twitter). */
export function brandedPageTitle(title: string): string {
  return `${normalizePageTitle(title)}${BRAND_SUFFIX}`;
}

/** Erweitert Seiten-Metadaten um Canonical, Open Graph und Twitter für maximale Sichtbarkeit & Auffindbarkeit. */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  openGraphImage,
  openGraphType = "website",
  publishedTime,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Optional: page-specific OG image path (e.g. "/og-blog.jpg"). Defaults to site logo. */
  openGraphImage?: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
}): Metadata {
  const url = path.startsWith("/") ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;
  const desc = description.slice(0, META_DESC_MAX).trim();
  const imageUrl = openGraphImage ? `${BASE_URL}${openGraphImage}` : `${BASE_URL}/logo.png`;
  const segmentTitle = normalizePageTitle(title);
  const fullTitle = brandedPageTitle(title);

  return {
    title: segmentTitle,
    description: desc,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: openGraphType,
      locale: "de_DE",
      url,
      siteName: "H&S+ Health and Safety +",
      title: fullTitle,
      description: desc,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: imageUrl, width: 512, height: 512, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [imageUrl],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export { BASE_URL };
