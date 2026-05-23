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

function isExternal(href: string): boolean {
  return /^https?:\/\//i.test(href.trim());
}

function isLinkable(href: string): boolean {
  const path = href.trim().split("#")[0];
  return isExternal(path) || KNOWN_PATHS.has(path);
}

type Segment =
  | { type: "text"; value: string }
  | { type: "link"; href: string; external: boolean; label?: string };

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
    const raw = match[1].trim();
    const pipe = raw.indexOf("|");
    const href = (pipe >= 0 ? raw.slice(0, pipe) : raw).trim();
    const explicitLabel = pipe >= 0 ? raw.slice(pipe + 1).trim() : undefined;
    if (isLinkable(href)) {
      segments.push({
        type: "link",
        href,
        external: isExternal(href),
        label: explicitLabel,
      });
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

const linkClass =
  "font-medium text-primary-800 underline decoration-primary-200 underline-offset-2 hover:text-primary-900";

export function ContentText({ text, className }: { text: string; className?: string }) {
  const segments = parseContentSegments(text);
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        if (seg.type === "text") {
          return <span key={i}>{seg.value}</span>;
        }
        const label = seg.label ?? pathToLabel(seg.href);
        if (seg.external) {
          return (
            <a key={i} href={seg.href} className={linkClass} rel="noopener noreferrer" target="_blank">
              {label}
            </a>
          );
        }
        return (
          <Link key={i} href={seg.href} className={linkClass}>
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
  if (isExternal(href)) {
    try {
      const u = new URL(href);
      if (u.hostname.includes("brandschutzkoeln")) {
        const slug = u.pathname.split("/").filter(Boolean).pop() ?? "";
        return slug.replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()) || "brandschutzkoeln.com";
      }
      return u.hostname.replace(/^www\./, "");
    } catch {
      return href;
    }
  }
  const blog = blogPosts.find((p) => `/wissen/blog/${p.slug}` === href);
  if (blog) return blog.title;
  const ratgeber = ratgeberPosts.find((p) => `/wissen/ratgeber/${p.slug}` === href);
  if (ratgeber) return ratgeber.title;
  const part = href.split("/").filter(Boolean).pop() ?? href;
  return part.replace(/-/g, " ");
}
