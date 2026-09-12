import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ServiceWissenLinks } from "@/components/ServiceWissenLinks";

export const metadata = pageMetadata({
  path: "/sigeko",
  title: "SiGeKo im H&S+-Portfolio – Baustellenkoordination",
  description:
    "Health and Safety + übernimmt SiGeKo nach BaustellV. Die Fachseite für Köln und NRW ist sigeko.koeln – SiGe-Plan, Begehungen, Einweisungen.",
  keywords: [
    "SiGeKo",
    "Health and Safety Plus",
    "BaustellV",
    "RAB 30",
    "Baustellenkoordination",
  ],
  openGraphImage: "/SiGeko.jpeg",
});

function SiGeKoJsonLd() {
  const url = `${BASE_URL}/sigeko`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SiGeKo – Überblick im H&S+-Portfolio",
    description:
      "Sicherheits- und Gesundheitsschutzkoordination nach BaustellV. Vertiefung und lokale Leistung: sigeko.koeln.",
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Köln und Nordrhein-Westfalen",
    },
    provider: {
      "@type": "Organization",
      "@id": `${BASE_URL}#organization`,
      name: "Health and Safety +",
      url: BASE_URL,
    },
    serviceType: ["SiGeKo", "Baustellenkoordination"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SiGeKoPage() {
  return (
    <div>
      <SiGeKoJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "SiGeKo" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/SiGeko.jpeg"
          alt="SiGeKo – Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 w-full">
            <p className="text-sm font-medium text-white/70 uppercase tracking-widest mb-2">
              Leistung im H&S+-Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
              SiGeKo
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Baustellenkoordination nach BaustellV – Fachseite für Köln und NRW: sigeko.koeln
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Health and Safety + übernimmt die Sicherheits- und Gesundheitsschutzkoordination
            nach Baustellenverordnung – SiGe-Plan, Vorankündigung, Begehungen, Einweisungen und
            Dokumentation. Abstimmung mit Arbeitsschutz, Brandschutz und Elektrosicherheit aus
            einer Hand.
          </p>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Alle Details, Ratgeber und die lokale SiGeKo-Leistung für Köln und NRW stehen auf der
            Fachdomain.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://sigeko.koeln/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Zur SiGeKo-Fachseite sigeko.koeln
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
            >
              Erstberatung über H&S+
            </Link>
          </div>

          <ServiceWissenLinks
            ratgeberSlugs={["sigeko-baustelle", "arbeitsschutz-unternehmen"]}
            blogSlugs={[
              "sigeko-pflicht-wann-braucht-man-sigeko",
              "sigeko-kosten-honorar-orientierung",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
