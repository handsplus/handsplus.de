import Image from "next/image";

const PARTNER_LOGOS = [
  {
    name: "TÜV Rheinland",
    src: "/partner-logos/tuv-rheinland.svg",
    width: 180,
    height: 160,
  },
  {
    name: "UIO",
    src: "/partner-logos/uio.svg",
    width: 320,
    height: 200,
  },
  {
    name: "VdS",
    src: "/partner-logos/vds.svg",
    width: 70,
    height: 40,
  },
  {
    name: "DEKRA",
    src: "/partner-logos/dekra.svg",
    width: 100,
    height: 40,
  },
  {
    name: "Hochschule Rhein-Waal",
    src: "/partner-logos/hochschule-rhein-waal.svg",
    width: 200,
    height: 80,
  },
  {
    name: "BEW – Das Bildungszentrum für die Ver- und Entsorgungswirtschaft",
    src: "/partner-logos/bew.svg",
    width: 200,
    height: 132,
  },
] as const;

export function PartnerLogosStrip() {
  return (
    <section
      className="w-full py-4 sm:py-5 bg-[#f8f8f8] border-t border-slate-200/80"
      aria-label="Partner und Zertifizierungen"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-start gap-x-6 gap-y-4 sm:gap-x-8 sm:gap-y-4">
          {PARTNER_LOGOS.map((partner) => {
            const isTuvOrHsrw = partner.name === "TÜV Rheinland" || partner.name === "Hochschule Rhein-Waal";
            return (
              <div
                key={partner.name}
                className={`flex items-center justify-center opacity-90 hover:opacity-100 transition-all ${isTuvOrHsrw ? "h-10 sm:h-12" : "h-9 sm:h-10"} ${partner.name === "TÜV Rheinland" || partner.name === "UIO" || partner.name === "VdS" || partner.name === "DEKRA" || partner.name === "Hochschule Rhein-Waal" || partner.name === "BEW – Das Bildungszentrum für die Ver- und Entsorgungswirtschaft" ? "" : "grayscale hover:grayscale-0"}`}
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={`object-contain object-center w-auto ${isTuvOrHsrw ? "max-h-10 sm:max-h-12" : "max-h-9 sm:max-h-10"}`}
                  loading="lazy"
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
