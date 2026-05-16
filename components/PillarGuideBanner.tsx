import Link from "next/link";
import { getRatgeberBySlug } from "@/content/ratgeber";

export function PillarGuideBanner({ pillarSlug }: { pillarSlug: string }) {
  const pillar = getRatgeberBySlug(pillarSlug);
  if (!pillar) return null;

  return (
    <aside className="mb-8 rounded-lg border border-primary-200 bg-primary-50/60 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-800">Ratgeber</p>
      <p className="mt-1 text-sm text-slate-700">
        Vertiefender Überblick:{" "}
        <Link
          href={`/wissen/ratgeber/${pillar.slug}`}
          className="font-medium text-primary-900 underline decoration-primary-300 underline-offset-2 hover:text-primary-950"
        >
          {pillar.title}
        </Link>
      </p>
    </aside>
  );
}
