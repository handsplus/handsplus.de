import { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.handsplus.de";

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
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/leistungen" ? "weekly" : path.startsWith("/wissen") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/leistungen" || path === "/kontakt" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/wissen/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
