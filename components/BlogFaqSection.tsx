import { ContentText } from "@/lib/contentLinks";

export type BlogFaqItem = { question: string; answer: string };

function BlogFaqJsonLd({ faq, url }: { faq: BlogFaqItem[]; url: string }) {
  if (!faq.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\[Link:[^\]]+\]/g, "").trim(),
      },
    })),
    url,
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function BlogFaqSection({ faq, pageUrl }: { faq: BlogFaqItem[]; pageUrl: string }) {
  if (!faq.length) return null;
  return (
    <>
      <BlogFaqJsonLd faq={faq} url={pageUrl} />
      <section
        className="mt-12 pt-10 border-t-2 border-teal-200"
        aria-labelledby="blog-faq-heading"
      >
        <h2 id="blog-faq-heading" className="text-2xl font-bold tracking-tight text-slate-900">
          Häufige Fragen (FAQ)
        </h2>
        <dl className="mt-6 space-y-4">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-xl border border-teal-200/80 bg-teal-50/50 p-5 sm:p-6 shadow-sm"
            >
              <dt className="flex gap-3 text-base sm:text-lg font-semibold text-slate-900">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-800 text-xs font-bold text-white"
                  aria-hidden
                >
                  ?
                </span>
                {item.question}
              </dt>
              <dd className="mt-3 pl-9 text-slate-600 leading-relaxed">
                <ContentText text={item.answer} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
