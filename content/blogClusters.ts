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
};

export function getPillarSlugForBlog(slug: string): string | undefined {
  return blogPillarBySlug[slug];
}
