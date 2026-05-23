import { BAUORDNUNG_KOELN_BOX } from "@/content/brandschutzKoelnRatgeber";

export function BauordnungKoelnBox() {
  const { hubUrl, hubLabel, intro, links } = BAUORDNUNG_KOELN_BOX;
  return (
    <aside
      className="my-10 rounded-xl border border-teal-200 bg-teal-50/50 p-5 sm:p-6"
      aria-labelledby="bauo-koeln-box"
    >
      <p id="bauo-koeln-box" className="text-xs font-semibold uppercase tracking-wide text-teal-800">
        BauO NRW & Genehmigung Köln
      </p>
      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{intro}</p>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className="font-medium text-teal-900 underline decoration-teal-300 underline-offset-2 hover:text-teal-950"
              rel="noopener noreferrer"
              target="_blank"
            >
              {label} →
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-slate-500">
        Ausführliche Ratgeber auf{" "}
        <a
          href={hubUrl}
          className="text-teal-800 underline underline-offset-2 hover:text-teal-900"
          rel="noopener noreferrer"
          target="_blank"
        >
          {hubLabel}
        </a>{" "}
        (Health and Safety+ · gleiches Team).
      </p>
    </aside>
  );
}
