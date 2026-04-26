import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

/** Max length for meta description (SEO best practice). */
const META_DESC_MAX = 160;

/** Erweitert Seiten-Metadaten um Canonical, Open Graph und Twitter für maximale Sichtbarkeit & Auffindbarkeit. */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  openGraphImage,
}: {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Optional: page-specific OG image path (e.g. "/og-blog.jpg"). Defaults to site logo. */
  openGraphImage?: string;
}): Metadata {
  const url = path.startsWith("/") ? `${BASE_URL}${path}` : `${BASE_URL}/${path}`;
  const desc = description.slice(0, META_DESC_MAX).trim();
  const imageUrl = openGraphImage ? `${BASE_URL}${openGraphImage}` : `${BASE_URL}/logo.png`;

  return {
    title,
    description: desc,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: "H&S+ Health and Safety +",
      title,
      description: desc,
      images: [{ url: imageUrl, width: 512, height: 512, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [imageUrl],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}

export { BASE_URL };
