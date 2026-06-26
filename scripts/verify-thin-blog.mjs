import { THIN_BLOG_EXPANSIONS } from "./data/thin-blog-expansions.mjs";

const { blogPosts } = await import("../content/blog.ts");

function wordCount(post) {
  return (post.content || [])
    .filter((x) => !x.startsWith("H2::"))
    .join(" ")
    .replace(/\[Link:[^\]]+\]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
}

const slugs = Object.keys(THIN_BLOG_EXPANSIONS);
let under = 0;
for (const slug of slugs) {
  const p = blogPosts.find((x) => x.slug === slug);
  const w = wordCount(p);
  if (w < 250) {
    under++;
    console.log("UNTER 250:", w, slug);
  } else {
    console.log("OK:", w, slug);
  }
}
console.log(`\n${slugs.length - under}/${slugs.length} ≥ 250 Wörter`);
