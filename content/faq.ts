/**
 * FAQ-Daten für die Wissen-Seite.
 * Semantische IDs für Ankerlinks; Antworten mit [Link: url|Label] für ContentText.
 */
export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category?: "arbeitsschutz" | "brandschutz" | "sigeko" | "elektro" | "allgemein";
};

export const faqItems: FaqItem[] = [
  {
    id: "fachkraft-arbeitssicherheit",
    category: "arbeitsschutz",
    question: "Brauche ich eine Fachkraft für Arbeitssicherheit?",
    answer:
      "Wenn Sie Beschäftigte haben, schreibt das Arbeitssicherheitsgesetz (ASiG) in Verbindung mit der [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2] die Bestellung einer Fachkraft für Arbeitssicherheit vor – mit Grund- und ggf. betriebsspezifischer Betreuung nach Betriebsart und Beschäftigtenzahl. Sie berät zu Gefährdungsbeurteilung, Begehungen, Unterweisungen und ASA. Viele KMU in Köln und NRW beauftragen extern – Details: [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung] und [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber Arbeitsschutz].",
  },
  {
    id: "gefaehrdungsbeurteilung",
    category: "arbeitsschutz",
    question: "Was ist eine Gefährdungsbeurteilung und wer erstellt sie?",
    answer:
      "Die Gefährdungsbeurteilung nach § 5 ArbSchG ist die zentrale Pflicht des Arbeitgebers: Gefährdungen ermitteln und bewerten, Maßnahmen nach dem STOP-Prinzip festlegen und auf Wirksamkeit prüfen. Der Arbeitgeber bleibt verantwortlich; die Fachkraft für Arbeitssicherheit darf fachkundig erstellen und fortschreiben (ArbSchG, BetrSichV, GefStoffV, ArbStättV). Vertiefung: [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber Gefährdungsbeurteilung] · [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|Ablauf in der Praxis].",
  },
  {
    id: "gefaehrdungsbeurteilung-aktualisierung",
    category: "arbeitsschutz",
    question: "Wie oft muss die Gefährdungsbeurteilung aktualisiert werden?",
    answer:
      "Es gibt kein fixes Jahresintervall – entscheidend ist Aktualität. Pflicht zur Überprüfung bei Änderungen von Tätigkeiten, Arbeitsmitteln, Stoffen oder Organisation, bei neuen Erkenntnissen sowie nach Unfällen und Beinahe-Unfällen. Wir unterstützen Erststellung und Review – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber] · [Link: /kontakt|Kontakt].",
  },
  {
    id: "unterweisung-haeufigkeit",
    category: "arbeitsschutz",
    question: "Wie oft muss eine Unterweisung im Arbeitsschutz erfolgen?",
    answer:
      "Nach § 12 ArbSchG: vor Tätigkeitsbeginn, bei wesentlichen Änderungen und in der Regel mindestens jährlich – verständlich, während der Arbeitszeit, dokumentiert. Inhalte aus der Gefährdungsbeurteilung ableiten, nicht generische Folien. [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Fristen und Nachweise] · [Link: /schulungen|Schulungen].",
  },
  {
    id: "externe-interne-fachkraft",
    category: "arbeitsschutz",
    question: "Externe oder interne Fachkraft für Arbeitssicherheit – was ist sinnvoll?",
    answer:
      "Beides ist zulässig. Intern kennt man den Betrieb sehr gut; extern bringt Erfahrung aus vielen Branchen, Skalierung und entlastet von Fortbildungspflicht. Viele KMU wählen externe Betreuung – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft Köln] · [Link: /arbeitsschutz|Leistung Arbeitsschutz].",
  },
  {
    id: "arbeitsschutzausschuss",
    category: "arbeitsschutz",
    question: "Wann brauche ich einen Arbeitsschutzausschuss (ASA)?",
    answer:
      "Nach ASiG § 11 ist in größeren Betrieben ein Arbeitsschutzausschuss einzurichten (Schwellen und Teilzeitregelung in der DGUV Vorschrift 2). Er berät zu Arbeitsschutz und Unfallverhütung und tagt mindestens vierteljährlich. [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz] · [Link: /wissen/blog/asa-sitzung-praxis-kita-arbeitsschutz|ASA in der Praxis].",
  },
  {
    id: "sigeko-wann",
    category: "sigeko",
    question: "Wann wird ein SiGeKo benötigt?",
    answer:
      "Nach Baustellenverordnung (BaustellV), wenn auf einer Baustelle mehrere Arbeitgeber oder Selbstständige tätig werden oder besonders gefährliche Arbeiten (Anhang II) anfallen. Der Bauherr bestellt einen Koordinator für Planung (SiGe-Plan, Vorankündigung) und Ausführung (Begehungen, Einweisungen, Übergaben). [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Wann SiGeKo-Pflicht?] · [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo].",
  },
  {
    id: "sigeko-kosten-honorar",
    category: "sigeko",
    question: "Was kostet ein SiGeKo – gibt es eine Honorar-Orientierung?",
    answer:
      "Das Honorar hängt von Gewerkezahl, Bauphase, Begehungsrhythmus und Leistungsumfang ab (Plan, Ausführung, Dokumentation) – keine sinnvolle Pauschale für alle Projekte. Orientierung: [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Blog] · [Link: /wissen/rechner|Honorar-Rechner] auf der Wissen-Seite.",
  },
  {
    id: "brandschutzbeauftragter-pflicht",
    category: "brandschutz",
    question: "Wann brauche ich einen Brandschutzbeauftragten?",
    answer:
      "Die Notwendigkeit folgt aus Gefährdungsbeurteilung (Brandgefahr), Nutzung, Behörden- oder Versicherervorgaben und oft aus der Bauordnung bei Genehmigung oder Nutzungsänderung. In Betrieben mit erhöhtem Brandrisiko ist eine schriftliche Bestellung mit Qualifikation (z. B. DGUV 205-003) üblich. [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] · [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz].",
  },
  {
    id: "brandschutzhelfer-anzahl",
    category: "brandschutz",
    question: "Wie viele Brandschutzhelfer brauche ich?",
    answer:
      "Nach ASR A2.2 in der Regel etwa 5 % der Beschäftigten, betrieblich in der Gefährdungsbeurteilung festlegen; in kleinen Betrieben mindestens eine Person. Ausbildung nach DGUV 205-023 (meist etwa 3–4 Unterrichtseinheiten inkl. Löschübung). [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] · [Link: /wissen/rechner|Rechner zur Orientierung].",
  },
  {
    id: "elektropruefung-haeufigkeit",
    category: "elektro",
    question: "Wie oft müssen elektrische Betriebsmittel geprüft werden?",
    answer:
      "Nach DGUV Vorschrift 3 und BetrSichV – Intervalle aus Gerätetyp, Umgebung und Gefährdungsbeurteilung: Büro oft 24 Monate, Werkstatt/Baustelle 6–12 Monate, ortsfest länger. Überschrittene Frist: Gerät stilllegen. [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Ratgeber Elektrosicherheit] · [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3 Blog].",
  },
  {
    id: "schulungen-unterweisungen",
    category: "allgemein",
    question: "Bieten Sie Schulungen und Unterweisungen an?",
    answer:
      "Ja – Arbeitsschutz, Brandschutz (inkl. Brandschutzhelfer), Gefahrstoffe und Elektrosicherheit, online oder vor Ort in Köln und NRW. Inhalte aus Ihrer Gefährdungsbeurteilung, dokumentiert. [Link: /schulungen|Leistung Schulungen] · [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung Fristen].",
  },
  {
    id: "einsatzgebiet-koeln",
    category: "allgemein",
    question: "In welchem Gebiet sind Sie tätig?",
    answer:
      "Schwerpunkt Köln und NRW – Begehungen, Unterweisungen, ASA und Baustellen vor Ort. Beratung, Konzepte und Dokumentation auch überregional nach Absprache. [Link: /kontakt|Kontakt].",
  },
  {
    id: "ablauf-zusammenarbeit",
    category: "allgemein",
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "In der Erstberatung klären wir Bedarf und Prioritäten – Arbeitsschutz, Brandschutz, SiGeKo oder Elektrosicherheit. Danach Angebot mit Leistungsumfang, festem Ansprechpartner und klarer Dokumentation. Einmalige Projekte oder laufende Betreuung – modular. [Link: /leistungen|Leistungen] · [Link: /kontakt|Erstberatung].",
  },
  {
    id: "kosten-erstberatung",
    category: "allgemein",
    question: "Was kostet die Betreuung – und ist die Erstberatung unverbindlich?",
    answer:
      "Kosten hängen von Betreuungsumfang (DGUV V2), Beschäftigtenzahl, Branche, Begehungsfrequenz und Zusatzleistungen ab. Die Erstberatung ist unverbindlich – Sie erhalten eine transparente Einschätzung ohne Verpflichtung. SiGeKo: [Link: /wissen/rechner|Honorar-Rechner].",
  },
  {
    id: "qualifikationen-zertifizierungen",
    category: "allgemein",
    question: "Welche Qualifikationen hat Ihr Team?",
    answer:
      "Unter anderem: Fachkraft für Arbeitssicherheit (ASiG), Brandschutzbeauftragte (DGUV 205-003), SiGeKo (RAB 30), Arbeitsschutzmanagement (ISO 45001) sowie Sachverständige für Elektrotechnik und Brandschutz. [Link: /ueber-uns|Über uns].",
  },
];

/** Reihenfolge der Kategorien auf der FAQ-Seite */
export const faqCategoryOrder = [
  { key: "arbeitsschutz" as const, label: "Arbeitsschutz" },
  { key: "brandschutz" as const, label: "Brandschutz" },
  { key: "sigeko" as const, label: "SiGeKo" },
  { key: "elektro" as const, label: "Elektrosicherheit" },
  { key: "allgemein" as const, label: "Zusammenarbeit & Kosten" },
];
