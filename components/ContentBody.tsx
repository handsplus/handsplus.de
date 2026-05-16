import type { RatgeberSection } from "@/content/ratgeber";
import { ContentText } from "@/lib/contentLinks";

function headingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß]+/gi, "-")
    .replace(/^-|-$/g, "");
}

export function ContentBody({ sections }: { sections: RatgeberSection[] }) {
  return (
    <>
      {sections.map((section, idx) => (
        <section key={idx}>
          {section.h2 && (
            <h2
              id={headingId(section.h2)}
              className="text-xl sm:text-2xl font-semibold text-slate-900 mt-10 first:mt-0 scroll-mt-24"
            >
              {section.h2}
            </h2>
          )}
          {section.h3 && (
            <h3 className="text-lg font-semibold text-slate-800 mt-6">{section.h3}</h3>
          )}
          {section.paragraphs?.map((p, i) => (
            <p key={i} className="mt-4 text-slate-600 leading-relaxed">
              <ContentText text={p} />
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-600">
              {section.list.map((item, i) => (
                <li key={i}>
                  <ContentText text={item} />
                </li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-primary-800 text-white">
                    {section.table.headers.map((h) => (
                      <th key={h} className="px-4 py-3 text-left font-semibold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 === 1 ? "bg-slate-50" : "bg-white"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 text-slate-700 align-top border-t border-slate-100">
                          <ContentText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      ))}
    </>
  );
}