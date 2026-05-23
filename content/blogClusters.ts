/**
 * Hub-and-Spoke: Blog → Ratgeber-Pillar (SEO-Masterplan Cluster-Zuordnung).
 */
export const blogPillarBySlug: Record<string, string> = {
  "dguv-vorschrift-2": "arbeitsschutz-unternehmen",
  "asr-a2-2-brandschutzhelfer": "brandschutz-betrieb",
  "bestellung-fachkraft-arbeitssicherheit": "arbeitsschutz-unternehmen",
  "unterweisung-arbeitsschutz-fristen": "arbeitsschutz-unternehmen",
  "akteure-arbeitsschutz": "arbeitsschutz-unternehmen",
  "gefaehrdungsbeurteilung-ablauf": "gefaehrdungsbeurteilung",
  "getraenke-am-arbeitsplatz": "arbeitsschutz-unternehmen",
  "brandschutz-lithium-ionen-batterien": "brandschutz-betrieb",
  "brandschutz-brennbare-stoffe": "brandschutz-betrieb",
  "sigeko-kosten-honorar-orientierung": "sigeko-baustelle",
  "brandschutz-sachverstaendiger-koeln": "brandschutz-betrieb",
  "strafen-arbeitsschutz": "arbeitsschutz-unternehmen",
  "pflichtuebertragung-arbeitsschutz": "arbeitsschutz-unternehmen",
  "brandschutzbeauftragter-aufgaben-pflichten": "brandschutz-betrieb",
  "sigeko-pflicht-wann-braucht-man-sigeko": "sigeko-baustelle",
  "externe-fachkraft-arbeitssicherheit-koeln": "arbeitsschutz-unternehmen",
  "arbeitsschutzberatung-unternehmen": "arbeitsschutz-unternehmen",
  "sicherheitsbeauftragte-schulung-koeln": "arbeitsschutz-unternehmen",
  "arbeitsschutz-dienstleister-nrw": "arbeitsschutz-unternehmen",
  "arbeitsschutzgesetz-arbschg-uebersicht": "arbeitsschutz-unternehmen",
  "brandschutzordnung-din-14096": "brandschutz-betrieb",
  "brandschutzschulungen-unternehmen": "brandschutz-betrieb",
  "gefaehrdungsbeurteilung-schwangere-mutterschutz": "gefaehrdungsbeurteilung",
  "psychische-gefaehrdungsbeurteilung-arbeitsplatz": "gefaehrdungsbeurteilung",
  "betriebsanweisungen-gefahrstoffe": "gefaehrdungsbeurteilung",
  "flucht-und-rettungsplan-erstellen": "brandschutz-betrieb",
  "dguv-vorschrift-3-elektropruefung": "elektrosicherheit-dguv-v3",
  "iso-45001-arbeitsschutzmanagementsystem": "arbeitsschutz-unternehmen",
  "brandschutzkonzept-erstellen": "bauordnung-nrw-brandschutz",
  "vorbeugender-brandschutz-massnahmen": "brandschutz-betrieb",
  "ergonomie-kueche-kita-gefaehrdungsbeurteilung": "gefaehrdungsbeurteilung",
  "sifa-jahresbericht-was-gehoert-rein": "arbeitsschutz-unternehmen",
  "ist-zustandserfassung-externe-fasi": "arbeitsschutz-unternehmen",
  "pruefpflicht-handhubwagen-arbeitssicherheit": "gefaehrdungsbeurteilung",
  "externe-fasi-erstes-vertragsjahr-ablauf": "arbeitsschutz-unternehmen",
  "asa-sitzung-praxis-kita-arbeitsschutz": "arbeitsschutz-unternehmen",
  "unterweisung-arbeitssicherheit-pflicht": "arbeitsschutz-unternehmen",
  "sigeko-begehung-seitenschutz-hotelumbau-koeln": "sigeko-baustelle",
  "rauchen-baustelle-arbstattv-sigeko": "sigeko-baustelle",
  "gbu-schnittstelle-mehrere-gewerke-bauprojekt": "sigeko-baustelle",
  "sigeko-projektverlauf-neubau-wipperfuerth": "sigeko-baustelle",
  "sigeko-dacharbeiten-absturz-bestand-koeln": "sigeko-baustelle",
  "sigeko-innenausbau-bestand-leistungsumfang": "sigeko-baustelle",
  "sigeko-koeln-kosten": "sigeko-baustelle",
};

export function getPillarSlugForBlog(slug: string): string | undefined {
  return blogPillarBySlug[slug];
}

/** Andere Blog-Beiträge im selben Pillar-Cluster (max. limit, ohne aktuellen Slug). */
export function getRelatedBlogSlugs(slug: string, limit = 4): string[] {
  const pillar = blogPillarBySlug[slug];
  if (!pillar) return [];
  return Object.entries(blogPillarBySlug)
    .filter(([s, p]) => p === pillar && s !== slug)
    .map(([s]) => s)
    .slice(0, limit);
}

/** Blog-Beiträge, die zu einem Ratgeber-Pillar gehören. */
export function getBlogSlugsForPillar(pillarSlug: string, limit = 5): string[] {
  return Object.entries(blogPillarBySlug)
    .filter(([, p]) => p === pillarSlug)
    .map(([s]) => s)
    .slice(0, limit);
}
