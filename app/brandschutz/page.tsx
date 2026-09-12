import Link from "next/link";
import Image from "next/image";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { BreadcrumbJsonLd } from "@/lib/breadcrumbJsonLd";
import { ServiceWissenLinks } from "@/components/ServiceWissenLinks";

export const metadata = pageMetadata({
  path: "/brandschutz",
  title: "Brandschutz im H&S+-Portfolio – Konzept, Betrieb, Organisation",
  description:
    "Health and Safety + begleitet Brandschutz von der Bauordnung bis zum Betrieb. Die Fachseite für Köln ist brandschutzkoeln.com.",
  keywords: [
    "Brandschutz",
    "Health and Safety Plus",
    "Brandschutzkonzept",
    "Brandschutzbeauftragter",
    "Brandschutzordnung",
  ],
  openGraphImage: "/Brandschutz.jpeg",
});

function BrandschutzJsonLd() {
  const url = `${BASE_URL}/brandschutz`;
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Brandschutz – Überblick im H&S+-Portfolio",
    description:
      "Brandschutzkonzept, Stellungnahmen und betrieblicher Brandschutz. Vertiefung Köln: brandschutzkoeln.com.",
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
    serviceType: ["Brandschutz", "Brandschutzkonzept", "Brandschutzbeauftragter"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function BrandschutzPage() {
  return (
    <div>
      <BrandschutzJsonLd />
      <BreadcrumbJsonLd items={[{ name: "Leistungen", path: "/leistungen" }, { name: "Brandschutz" }]} />
      <section className="relative h-80 sm:h-96 lg:h-[28rem] w-full">
        <Image
          src="/Brandschutz.jpeg"
          alt="Brandschutz – Beratung von Bauordnung bis Betrieb"
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
              Brandschutz
            </h1>
            <p className="mt-3 text-lg sm:text-xl text-white/90 max-w-3xl">
              Von BauO und Konzept bis zum laufenden Betrieb – Fachseite Köln: brandschutzkoeln.com
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-700 leading-relaxed">
            Health and Safety + begleitet Brandschutz von der Genehmigung bis zum Betrieb:
            Konzepte und Stellungnahmen nach BauO NRW, Brandschutzordnung, Brandschutzbeauftragter,
            Prüfungen und Schulungen.
          </p>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Ratgeber, Konzepte und die lokale Leistung für Köln stehen auf der Fachdomain.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://brandschutzkoeln.com/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors"
            >
              Zur Brandschutz-Fachseite brandschutzkoeln.com
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-300 text-slate-800 font-medium hover:bg-slate-50 transition-colors"
            >
              Erstberatung über H&S+
            </Link>
          </div>

          <ServiceWissenLinks
            ratgeberSlugs={["brandschutz-betrieb", "bauordnung-nrw-brandschutz"]}
            blogSlugs={[
              "brandschutzkonzept-erstellen",
              "brandschutzordnung-din-14096",
              "brandschutzbeauftragter-aufgaben-pflichten",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
