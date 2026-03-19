import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/sigeko",
  title: "SiGeKo Köln – Baustellenkoordination & Arbeitsschutz",
  description: "Sicherheits- und Gesundheitsschutzkoordination gemäß RAB 30. SiGe-Plan, Sicherheitseinweisungen, Baustellenkontrollen.",
  keywords: ["SiGeKo Köln", "Sicherheits- und Gesundheitsschutzkoordination", "RAB 30", "SiGe-Plan", "Baustellenkoordination"],
});

function SiGeKoJsonLd() {
  const url = `${BASE_URL}/sigeko`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SiGeKo – Sicherheits- und Gesundheitsschutzkoordination in Köln",
    description:
      "Sicherheits- und Gesundheitsschutzkoordination gemäß RAB 30 inklusive SiGe-Plan, Sicherheitseinweisungen, Baustellenkontrollen und Dokumentation.",
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Köln und Umgebung",
    },
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Health and Safety +",
      url: BASE_URL,
    },
    serviceType: ["SiGeKo", "Baustellensicherheit"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const listItems = [
  "Unterstützung bei der Vorankündigung der Baustelle an die zuständige Behörde",
  "Ausarbeitung des Sicherheits- und Gesundheitsschutzplans (SiGe-Plan)",
  "Terminplanung und Durchführung von Sicherheitseinweisungen",
  "Erstellung der Dokumentation zum Sicherheits- und Gesundheitsschutz",
  "Laufende Baustellenkontrollen zur Einhaltung des SiGe-Plans auf der Baustelle",
  "Überprüfung, ob die Verpflichtungen aus der Baustelle eingehalten werden, Sicherheitsbegehungen",
  "Protokollierung sicherheitsrelevanter Mängel und Kontrolle der Mängelbeseitigung",
  "Beratung zur bestmöglichen Mängelbeseitigung",
  "Ausarbeitung der Unterlage für spätere Arbeiten (Instandhaltung nach Fertigstellung Baustelle)",
];

export default function SiGeKoPage() {
  return (
    <div>
      <SiGeKoJsonLd />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/SiGeko.jpeg"
          alt="SiGeKo – Sicherheits- und Gesundheitsschutzkoordination"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
            <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-2">Unsere Leistung</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              SiGeKo
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Sicherheits- und Gesundheitsschutzkoordination gemäß RAB&nbsp;30
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Jetzt Angebot anfragen
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-12">
            {listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <section className="p-6 sm:p-8 rounded-xl bg-slate-50">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">Optimale Sicherheit auf Ihrer Baustelle</h2>
            <p className="text-slate-600 mb-4">
              Die Sicherheit auf Baustellen hat oberste Priorität. Als erfahrene Sicherheits- und Gesundheitsschutzkoordinatoren (SiGeKo) unterstützen wir Sie dabei, dass die gesetzlichen Vorgaben eingehalten werden und die Sicherheit aller Beteiligten gewährleistet ist. Von der Planung bis zur Fertigstellung der Baustelle begleiten wir Sie mit einer professionellen Koordination aller sicherheitsrelevanten Aspekte.
            </p>
            <p className="text-slate-600 mb-4">
              Unsere Leistungen umfassen die Unterstützung bei der Vorankündigung der Baustelle an die zuständige Behörde, die Ausarbeitung des Sicherheits- und Gesundheitsschutzplans (SiGe-Plan) sowie die Terminplanung und Durchführung von Sicherheitsunterweisungen. Darüber hinaus erstellen wir alle erforderlichen Dokumentationen und führen laufende Baustellenkontrollen zur Einhaltung des SiGe-Plans durch.
            </p>
            <p className="text-slate-600">
              Sicherheitsrelevante Mängel protokollieren wir detailliert und unterstützen Sie bei der bestmöglichen Mängelbeseitigung. Abschließend erarbeiten wir alle notwendigen Unterlagen für spätere Arbeiten, um die Instandhaltung nach Fertigstellung der Baustelle sicherzustellen. Mit unserer Erfahrung und Fachkompetenz unterstützen wir Sie bei einer rechtssicheren, effizienten und sicheren Baustellenkoordination. Lassen Sie sich unverbindlich beraten und profitieren Sie von unserer umfassenden Unterstützung im Bereich Sicherheits- und Gesundheitsschutzkoordination.
            </p>
          </section>

          <div className="mt-12 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-600 mb-4">Haben Sie Fragen oder benötigen ein individuelles Angebot?</p>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Kostenlose Erstberatung anfragen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
