"use client";

import { useEffect, useState } from "react";

export function BlogTableOfContents({ headings }: { headings: string[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (headings.length < 2) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 0.25, 0.5] }
    );
    headings.forEach((h) => {
      const id = headingId(h);
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      className="mb-8 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:p-5"
      aria-label="Inhaltsverzeichnis"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Inhalt</p>
      <ol className="mt-3 space-y-2">
        {headings.map((h) => {
          const id = headingId(h);
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm leading-snug underline-offset-2 hover:underline ${
                  active === id ? "font-semibold text-primary-900" : "text-primary-800"
                }`}
              >
                {h}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
}
