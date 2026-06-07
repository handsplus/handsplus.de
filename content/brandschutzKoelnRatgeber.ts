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
  "bauordnung-nrw-einfach-erklaert": {
    href: "https://brandschutzkoeln.com/ratgeber/bauaufsicht-unterlagen-koeln",
    label: "Bauaufsicht & Unterlagen in Köln (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-1-versammlungsstaetten": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-2-beherbergungsstaetten": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-3-verkaufsstaetten": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-4-hochhaeuser": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-5-garagen": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-6-elektrische-anlagen": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "sonderbauverordnung-teil-7-schlussvorschriften": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutz (brandschutzkoeln.com)",
  },
  "brandverhuetungsschau-bhkg-nrw": {
    href: "https://brandschutzkoeln.com/ratgeber",
    label: "Ratgeber Brandschutz Köln (brandschutzkoeln.com)",
  },
  "bma-leitstelle-bhkg-nrw": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & BMA (brandschutzkoeln.com)",
  },
  "brandsicherheitswache-bhkg-nrw": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Veranstaltungen (brandschutzkoeln.com)",
  },
  "baupruefvo-nrw-einfach-erklaert": {
    href: "https://brandschutzkoeln.com/ratgeber/bauantrag-brandschutz-unterlagen-koeln",
    label: "Bauantrag & Unterlagen Köln (brandschutzkoeln.com)",
  },
  "bhkg-nrw-einfach-erklaert": {
    href: "https://brandschutzkoeln.com/ratgeber",
    label: "Ratgeber Brandschutz Köln (brandschutzkoeln.com)",
  },
  "brandschutzkonzept-paragraph-9-baupruefvo": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & Brandschutzkonzept (brandschutzkoeln.com)",
  },
  "brandschutzkonzept-betrieb-brandverhuetungsschau": {
    href: "https://brandschutzkoeln.com/ratgeber",
    label: "Ratgeber Brandschutz Köln (brandschutzkoeln.com)",
  },
  "pruefvo-nrw-einfach-erklaert": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & technische Anlagen (brandschutzkoeln.com)",
  },
  "wirk-prinzip-pruefung-pruefvo-nrw": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sonderbauten & BMA-Kopplungen (brandschutzkoeln.com)",
  },
  "bma-pruefung-pruefvo-nrw-fristen": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "BMA-Prüfung Sonderbauten (brandschutzkoeln.com)",
  },
  "sprinkler-rwa-pruefung-pruefvo-nrw": {
    href: "https://brandschutzkoeln.com/ratgeber/sonderbauten-brandschutz",
    label: "Sprinkler & RWA Sonderbauten (brandschutzkoeln.com)",
  },
};
