const PARTNER_LOGOS = [
  { name: "TÜV Rheinland", src: "/partner-logos/tuv-rheinland.png" },
  { name: "UIO", src: "/partner-logos/uio.png" },
  { name: "VdS", src: "/partner-logos/vds-source.png" },
  { name: "DEKRA", src: "/partner-logos/dekra.svg" },
  { name: "Hochschule Rhein-Waal", src: "/partner-logos/hochschule-rhein-waal.png" },
  { name: "BEW – Das Bildungszentrum für die Ver- und Entsorgungswirtschaft", src: "/partner-logos/bew.png" },
] as const;

/** Anzeige-Breite der Logos: max 110px (sm) / 120px (md+). Native img = weniger Client-JS/TBT als next/image. */
const LOGO_WIDTH = 120;
const LOGO_HEIGHT = 65;

export function PartnerLogosStrip() {
  return (
    <section
      className="w-full py-6 sm:py-8 bg-white border-b border-slate-200"
      aria-label="Partner und Zertifizierungen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">Unsere Partner</h2>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 sm:gap-x-10 md:gap-x-12">
          {PARTNER_LOGOS.map(({ name, src }) => (
            <img
              key={name}
              src={src}
              alt={name}
              width={LOGO_WIDTH}
              height={LOGO_HEIGHT}
              loading="lazy"
              decoding="async"
              className={`w-auto object-contain ${name === "DEKRA" ? "h-7 sm:h-8 md:h-9" : "h-9 sm:h-10 md:h-11"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
