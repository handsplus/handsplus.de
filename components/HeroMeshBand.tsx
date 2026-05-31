import type { ReactNode } from "react";
import { HeroMeshBackground } from "@/components/HeroMeshBackground";

/** Zurück-Link im grünen Mesh-Hero (Wissen-Unterseiten). */
export const heroBackLinkClass =
  "text-sm text-white/80 hover:text-white underline decoration-white/30 underline-offset-2 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-[#256358] rounded";

type HeroMeshBandProps = {
  children: ReactNode;
  /** Noch kompakterer Streifen (z. B. Wissen-Hub) */
  compact?: boolean;
};

/** Kompakter Mesh-Hero für Unterseiten – schmaler als die Startseite. */
export function HeroMeshBand({ children, compact = false }: HeroMeshBandProps) {
  return (
    <section data-hero className="relative overflow-hidden text-white">
      <HeroMeshBackground />
      <div
        className={`relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
          compact ? "py-10 sm:py-12 lg:py-14" : "py-12 sm:py-14 lg:py-16"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
