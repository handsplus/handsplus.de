import Link from "next/link";
import { getRatgeberBySlug } from "@/content/ratgeber";

export function ServiceRatgeberTeaser({ ratgeberSlug }: { ratgeberSlug: string }) {
  const guide = getRatgeberBySlug(ratgeberSlug);
  if (!guide) return null;

  return (
    <section className="mt-12 rounded-xl border border-primary-200 bg-primary-50/50 p-6 sm:p-8">
      <h2 className="text-lg font-semibold text-slate-900">Ratgeber zum Thema</h2>
      <p className="mt-2 text-slate-600">
        Ausführlicher Leitfaden mit Pflichten, Organisation und Praxisbezug für Köln und NRW.
      </p>
      <Link
        href={`/wissen/ratgeber/${guide.slug}`}
        className="mt-4 inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2"
      >
        {guide.title} – Ratgeber lesen
      </Link>
    </section>
  );
}
