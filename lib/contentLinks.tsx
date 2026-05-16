import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { ratgeberPosts } from "@/content/ratgeber";

const KNOWN_PATHS = new Set([
  "/",
  "/leistungen",
  "/kontakt",
  "/arbeitsschutz",
  "/brandschutz",
  "/sigeko",
  "/elektrosicherheit",
  "/schulungen",
  "/managementsysteme",
  "/ueber-uns",
  "/wissen",
  "/wissen/blog",
  "/wissen/faq",
  "/wissen/glossar",
  "/wissen/rechner",
  "/wissen/checklisten",
  "/wissen/ratgeber",
  ...blogPosts.map((p) => `/wissen/blog/${p.slug}`),
  ...ratgeberPosts.map((p) => `/wissen/ratgeber/${p.slug}`),
]);

const LINK_RE = /\[Link:\s*([^\]]+)\]/g;

function isLinkable(href: string): boolean {
  const path = href.trim().split("#")[0];
  return KNOWN_PATHS.has(path);
}

type Segment = { type: "text"; value: string } | { type: "link"; href: string; label?: string };

export function parseContentSegments(text: string): Segment[] {
  const segments: Segment[] = [];
  let last = 0;
  const re = new RegExp(LINK_RE.source, LINK_RE.flags);
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    const index = match.index;
    if (index > last) {
      segments.push({ type: "text", value: text.slice(last, index) });
    }
    const href = match[1].trim();
    if (isLinkable(href)) {
      segments.push({ type: "link", href });
    } else {
      segments.push({ type: "text", value: match[0] });
    }
    last = index + match[0].length;
  }
  if (last < text.length) {
    segments.push({ type: "text", value: text.slice(last) });
  }
  return segments.length ? segments : [{ type: "text", value: text }];
}

export function ContentText({ text, className }: { text: string; className?: string }) {
  const segments = parseContentSegments(text);
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return <span key={i}>{seg.value}</span>;
        }
        const label = seg.label ?? pathToLabel(seg.href);
        return (
          <Link
            key={i}
            href={seg.href}
            className="font-medium text-primary-800 underline decoration-primary-200 underline-offset-2 hover:text-primary-900"
          >
            {label}
          </Link>
        );
      })}
    </span>
  );
}

function pathToLabel(href: string): string {
  if (href === "/kontakt") return "Kontakt";
  if (href === "/arbeitsschutz") return "Arbeitsschutz";
  if (href === "/brandschutz") return "Brandschutz";
  if (href === "/sigeko") return "SiGeKo";
  if (href === "/elektrosicherheit") return "Elektrosicherheit";
  const blog = blogPosts.find((p) => `/wissen/blog/${p.slug}` === href);
  if (blog) return blog.title;
  const ratgeber = ratgeberPosts.find((p) => `/wissen/ratgeber/${p.slug}` === href);
  if (ratgeber) return ratgeber.title;
  const part = href.split("/").filter(Boolean).pop() ?? href;
  return part.replace(/-/g, " ");
}
