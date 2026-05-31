import type { ReactNode } from "react";
import { GOOGLE_REVIEWS_URL, googleReviews, type GoogleReview } from "@/content/googleReviews";

function StarRow() {
  return (
    <span className="text-amber-500 text-sm tracking-wide" aria-label="5 von 5 Sternen">
      ★★★★★
    </span>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StarRow />
        {review.topic && (
          <span className="text-xs font-medium text-primary-800 bg-primary-50 px-2 py-0.5 rounded">
            {review.topic}
          </span>
        )}
      </div>
      <blockquote className="mt-4 flex-1 text-sm sm:text-base text-slate-700 leading-relaxed">
        „{review.quote}"
      </blockquote>
      <figcaption className="mt-5 pt-4 border-t border-slate-100 text-sm text-slate-600">
        <span className="font-semibold text-slate-900">{review.author}</span>
        {review.role && <span className="text-slate-500"> · {review.role}</span>}
        <span className="block mt-0.5 text-xs text-slate-500">
          Google-Bewertung
          {review.relativeTime ? ` · ${review.relativeTime}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}

type GoogleReviewSectionProps = {
  /** Welche Reviews anzeigen – Standard: alle */
  ids?: string[];
  className?: string;
  /** Optional: Footer statt Standard-Google-Link (z. B. Startseite mit Link zu Über uns) */
  footerNote?: ReactNode;
};

export function GoogleReviewSection({ ids, className = "", footerNote }: GoogleReviewSectionProps) {
  const items = ids
    ? ids.map((id) => googleReviews.find((r) => r.id === id)).filter(Boolean) as GoogleReview[]
    : googleReviews;

  return (
    <section className={`py-16 sm:py-20 bg-white ${className}`} aria-labelledby="google-reviews-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="google-reviews-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
          Das sagen unsere Kunden
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <StarRow />
          <span className="text-slate-700 font-semibold">5,0</span>
          <span className="text-slate-500 text-sm">bei Google</span>
        </div>
        <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base">
          Ausgewählte Bewertungen von Kundinnen und Kunden – zu Arbeitsschutz, Brandschutz, SiGeKo und
          Gefährdungsbeurteilung.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <p className="mt-10 text-sm">
          {footerNote ?? (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-primary-800 hover:text-primary-900 underline decoration-primary-200 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            >
              Alle Google-Bewertungen ansehen
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </p>
      </div>
    </section>
  );
}
