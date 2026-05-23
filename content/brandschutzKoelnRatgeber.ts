/** Kuratierte Deep-Dives auf brandschutzkoeln.com (eigenes Netzwerk, kein Duplicate Content). */
export const BAUORDNUNG_KOELN_BOX = {
  hubUrl: "https://brandschutzkoeln.com/ratgeber",
  hubLabel: "Ratgeber BauO NRW & Köln",
  intro:
    "Ausführliche Artikel zu Genehmigung, Nutzungsänderung und BauO NRW – mit anonymisierten Praxisfällen aus Köln und Umgebung:",
  links: [
    {
      href: "https://brandschutzkoeln.com/ratgeber/gebaeudeklassen-brandschutz-bauo-nrw",
      label: "Gebäudeklassen und Brandschutz",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
      label: "Sonderbauten",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/brandschutzkonzept-wann-noetig",
      label: "Brandschutzkonzept oder Stellungnahme?",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/flucht-und-rettungswege-bauo-nrw",
      label: "Flucht- und Rettungswege",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/umbau-nutzungsaenderung-brandschutz",
      label: "Umbau und Nutzungsänderung",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln",
      label: "Zwischenbescheid der Bauaufsicht",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/bauaufsicht-unterlagen-koeln",
      label: "Bauaufsicht und Unterlagen in Köln",
    },
    {
      href: "https://brandschutzkoeln.com/ratgeber/sprinkler-trockenbau-nutzungsaenderung-bauo-nrw",
      label: "Sprinkler und Trockenbau (Praxisfall)",
    },
  ],
} as const;

/** Blog-Slugs mit Verweis auf brandschutzkoeln statt nicht vorhandener BauO-Blogs. */
export const BLOG_BAUO_KOELN_LINKS: Record<string, { href: string; label: string }> = {
  "brandschutzkonzept-erstellen": {
    href: "https://brandschutzkoeln.com/ratgeber/brandschutzkonzept-wann-noetig",
    label: "Genehmigung & Konzept in Köln (brandschutzkoeln.com)",
  },
};
