import { pageMetadata } from "@/lib/metadata";
import { RechnerContent } from "@/components/RechnerContent";

export const metadata = pageMetadata({
  path: "/wissen/rechner",
  title: "Rechner: Brandschutzhelfer (ASR A2.2) & SiGeKo-Honorar | H&S+",
  description: "Brandschutzhelfer-Anzahl nach ASR A2.2, SiGeKo-Honorar-Orientierung – nützliche Rechner für die Praxis.",
  keywords: ["Brandschutzhelfer Rechner", "ASR A2.2", "SiGeKo Honorar", "Rechner Arbeitsschutz"],
});

export default function RechnerPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <RechnerContent />
      </div>
    </div>
  );
}
