import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { blogPosts } from "@/content/blog";

const DEFAULT_BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

/** Host der zweiten Domain (Punycode) für eigene Sitemap in der GSC. */
const BRANDSCHUTZ_KOELN_HOST = "xn--brandschutzkln-6pb.com";

function getBaseUrl(): string {
  try {
    const headersList = headers();
    const host = headersList.get("host") ?? "";
    const forwardedHost = headersList.get("x-forwarded-host");
    const hostToUse = forwardedHost ?? host;
    if (hostToUse && (hostToUse.includes(BRANDSCHUTZ_KOELN_HOST) || hostToUse.includes("brandschutzkoeln"))) {
      return `https://${hostToUse.replace(/^www\./, "")}`;
    }
  } catch {
    // headers() nicht verfügbar (z. B. Build)
  }
  return DEFAULT_BASE_URL;
}

const staticRoutes = [
  "",
  "/leistungen",
  "/ueber-uns",
  "/wissen",
  "/wissen/blog",
  "/wissen/faq",
  "/wissen/checklisten",
  "/wissen/glossar",
  "/wissen/rechner",
  "/kontakt",
  "/impressum",
  "/arbeitsschutz",
  "/brandschutz",
  "/sigeko",
  "/elektrosicherheit",
  "/schulungen",
  "/managementsysteme",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/leistungen" ? "weekly" : path.startsWith("/wissen") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/leistungen" || path === "/kontakt" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/wissen/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
