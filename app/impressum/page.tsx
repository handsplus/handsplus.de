import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/impressum",
  title: "Impressum & Datenschutz",
  description: "Impressum und Datenschutzhinweise von Health and Safety + – Rechtliche Informationen und Kontakt.",
  keywords: ["Impressum", "Datenschutz", "Health and Safety Plus", "Köln"],
});

export default function ImpressumPage() {
  return (
    <div className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Impressum & Datenschutz</h1>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
          <p className="mt-4 text-slate-600">
            Health and Safety +<br />
            Barcelona-Allee 12<br />
            51103 Köln
          </p>
          <p className="mt-4 text-slate-600">
            E-Mail: kontakt@handsplus.de<br />
            Telefon: 0152 282 61619
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-slate-900">Datenschutz</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Personenbezogene Daten werden nur erhoben, verarbeitet und genutzt, soweit es für die Abwicklung von Anfragen und Verträgen erforderlich ist. Eine Weitergabe an Dritte erfolgt nur im gesetzlich vorgesehenen Rahmen. Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten.
          </p>
        </section>

        <div className="mt-12">
          <Link href="/" className="text-primary-800 font-medium hover:text-primary-900">
            ← Zurück zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
