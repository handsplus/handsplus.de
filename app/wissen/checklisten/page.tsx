import { pageMetadata } from "@/lib/metadata";
import { ChecklistenContent } from "@/components/ChecklistenContent";

export const metadata = pageMetadata({
  path: "/wissen/checklisten",
  title: "Checklisten – Arbeitssicherheit, Brandschutz, SiGeKo | H&S+",
  description: "Selbstbewertung: Checklisten für Gefährdungsbeurteilung, Brandschutz und SiGeKo – praxisnah von H&S+.",
  keywords: ["Checklisten Arbeitsschutz", "Gefährdungsbeurteilung", "Brandschutz Checkliste", "SiGeKo", "Selbstbewertung"],
});

export default function ChecklistenPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChecklistenContent />
      </div>
    </div>
  );
}
