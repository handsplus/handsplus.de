const PARTNER_LOGOS = [
  { name: "TÜV Rheinland", src: "/partner-logos/tuv-rheinland.png" },
  { name: "UIO", src: "/partner-logos/uio.png" },
  { name: "VdS", src: "/partner-logos/vds-source.png" },
  { name: "DEKRA", src: "/partner-logos/dekra.svg" },
  { name: "Hochschule Rhein-Waal", src: "/partner-logos/hochschule-rhein-waal.png" },
  { name: "BEW – Das Bildungszentrum für die Ver- und Entsorgungswirtschaft", src: "/partner-logos/bew.png" },
] as const;

export function PartnerLogosStrip() {
  return (
    <section
      className="w-full py-6 sm:py-8 bg-white border-b border-slate-200"
      aria-label="Partner und Zertifizierungen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Unsere Partner</h2>
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 sm:gap-x-8 md:gap-x-10">
          {PARTNER_LOGOS.map(({ name, src }) => (
            <div
              key={name}
              className="flex items-center justify-center shrink-0 h-9 sm:h-10 md:h-11 overflow-hidden"
            >
              <img
                src={src}
                alt={name}
                width={120}
                height={48}
                className="h-full w-auto max-h-full max-w-[110px] sm:max-w-[120px] object-contain object-center"
                style={{ maxHeight: "100%" }}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
