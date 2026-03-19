import { ContactForm } from "@/components/ContactForm";
import { ContactStrip } from "@/components/ContactStrip";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/kontakt",
  title: "Kontakt – Arbeitsschutz & Brandschutz Beratung in Köln",
  description: "Jetzt kostenlose und unverbindliche Erstberatung sichern. Telefon, E-Mail, WhatsApp. Onlineunterweisung möglich.",
  keywords: ["Kontakt H&S+", "Erstberatung Arbeitsschutz", "Köln Beratung", "Brandschutz Beratung"],
});

export default function KontaktPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24 min-h-[50vh] text-slate-800 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Jetzt kostenlose Erstberatung sichern!
        </h1>
        <p className="text-lg text-slate-600 mb-2">
          Onlineunterweisung möglich! Mitarbeiterunterweisungen smart managen!
        </p>
        <div className="mb-10">
          <ContactStrip />
        </div>

        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-4">
            Jetzt kostenlose und unverbindliche Erstberatung sichern!
          </h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
