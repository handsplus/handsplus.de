/**
 * FAQ-Daten für die Wissen-Seite.
 * Semantische IDs für Ankerlinks und Barrierefreiheit; Inhalte für SEO und Nutzer.
 */
export type FaqItem = { id: string; question: string; answer: string };

export const faqItems: FaqItem[] = [
  {
    id: "fachkraft-arbeitssicherheit",
    question: "Brauche ich eine Fachkraft für Arbeitssicherheit?",
    answer:
      "Ja, wenn Sie als Arbeitgeber Beschäftigte haben, schreibt das Arbeitssicherheitsgesetz (ASiG) in Verbindung mit der DGUV Vorschrift 2 die Bestellung einer Fachkraft für Arbeitssicherheit (FaSi) vor. Die FaSi unterstützt Sie beim Arbeitsschutz und der Unfallverhütung – in der Grundbetreuung oder betriebsspezifisch. Wir übernehmen diese Aufgabe als externe FaSi und passen den Umfang an Ihre Branche und Betriebsgröße an.",
  },
  {
    id: "gefaehrdungsbeurteilung",
    question: "Was ist eine Gefährdungsbeurteilung und wer erstellt sie?",
    answer:
      "Die Gefährdungsbeurteilung ist die zentrale Pflicht des Arbeitgebers nach Arbeitsschutzgesetz (ArbSchG): Sie ermittelt Gefahren für Sicherheit und Gesundheit der Beschäftigten und legt geeignete Maßnahmen fest. Der Arbeitgeber ist verantwortlich für die Durchführung; eine Fachkraft für Arbeitssicherheit darf ihn dabei fachkundig unterstützen und die Gefährdungsbeurteilung z. B. nach ArbSchG, BetrSichV, GefStoffV oder ArbStättV fachlich erstellen. Wir erstellen für Sie Gefährdungsbeurteilungen, die rechtssicher und praxisnah umsetzbar sind.",
  },
  {
    id: "sigeko-wann",
    question: "Wann wird ein SiGeKo (Sicherheits- und Gesundheitsschutzkoordinator) benötigt?",
    answer:
      "Ein SiGeKo ist erforderlich, wenn auf einer Baustelle mehrere Arbeitgeber oder Selbstständige gleichzeitig tätig werden (RAB 30). Der Bauherr bestellt einen SiGeKo für die Koordination von Sicherheit und Gesundheitsschutz – von der Planung (SiGe-Plan) über Sicherheitseinweisungen bis zu Baustellenkontrollen. Wir übernehmen die SiGeKo-Aufgaben für Ihr Bauvorhaben in Köln und Umgebung und sorgen für eine rechtskonforme, lückenlose Dokumentation.",
  },
  {
    id: "brandschutzbeauftragter-pflicht",
    question: "Wann brauche ich einen Brandschutzbeauftragten?",
    answer:
      "Die Notwendigkeit ergibt sich aus Landesbauordnung (z. B. BauO NRW), aus Gefährdungsbeurteilungen (ASR A2.2) oder aus Vorgaben von Behörden und Feuerversicherern. Typischerweise sind Brandschutzbeauftragte in Betrieben mit erhöhtem Brandrisiko, besonderen Nutzungen oder größeren Liegenschaften vorgesehen. Wir beraten Sie, ob und in welchem Umfang ein Brandschutzbeauftragter oder Brandschutzmanager für Sie erforderlich ist, und übernehmen die Aufgaben als zertifizierte Brandschutzbeauftragte und Brandschutzmanager (VdS).",
  },
  {
    id: "elektropruefung-haeufigkeit",
    question: "Wie oft müssen elektrische Anlagen und Betriebsmittel geprüft werden?",
    answer:
      "Die Prüffristen ergeben sich aus der DGUV Vorschrift 3 (ehemals BGV A3), der Betriebssicherheitsverordnung und den Herstellerangaben. Ortsfeste Anlagen werden in der Regel in festgelegten Intervallen (z. B. alle vier Jahre oder kürzer bei erhöhter Gefährdung) geprüft; ortsveränderliche elektrische Betriebsmittel je nach Einsatz und Gefährdung (z. B. jährlich oder alle zwei Jahre). Als verantwortliche Elektrofachkraft (VEFK) führen wir Prüfungen durch und unterstützen Sie bei der Dokumentation und Einhaltung der Fristen.",
  },
  {
    id: "einsatzgebiet-koeln",
    question: "In welchem Gebiet sind Sie tätig – nur in Köln?",
    answer:
      "Unser Schwerpunkt liegt in Köln und der Region. Wir sind vor Ort für Sie da – bei Begehungen, Unterweisungen, Behördenterminen und Baustellen. Für Beratung, Konzepte, Gefährdungsbeurteilungen und Dokumentation arbeiten wir auch überregional, wo es sinnvoll ist. Gerne besprechen wir mit Ihnen den passenden Umfang und die Einsatzgebiete.",
  },
  {
    id: "ablauf-zusammenarbeit",
    question: "Wie läuft die Zusammenarbeit mit Ihnen ab?",
    answer:
      "Nach einer unverbindlichen Erstberatung (kostenlos und unkompliziert) klären wir Ihren Bedarf: z. B. Grund- oder betriebsspezifische Betreuung, SiGeKo für ein Bauvorhaben, Brandschutz oder Elektrosicherheit. Wir vereinbaren den Leistungsumfang, die Frequenz von Vor-Ort-Terminen und die Kommunikation. Sie haben einen festen Ansprechpartner, klare Absprachen und rechtssichere Dokumentation. Ob einmalige Projekte oder langfristige Betreuung – wir passen uns Ihren Abläufen an.",
  },
  {
    id: "schulungen-unterweisungen",
    question: "Bieten Sie auch Schulungen und Unterweisungen an?",
    answer:
      "Ja. Wir bieten maßgeschneiderte Schulungen und Unterweisungen – z. B. zu Arbeitsschutz, Brandschutz (inkl. Brandschutzhelfer gemäß ASR A2.2), Gefahrstoffen oder Elektrosicherheit – online oder vor Ort in Köln und Umgebung. Die Inhalte sind verständlich, praxisnah und an Ihre betrieblichen Abläufe angepasst. Termine und Dauer können wir flexibel mit Ihnen abstimmen.",
  },
  {
    id: "qualifikationen-zertifizierungen",
    question: "Welche Qualifikationen und Zertifizierungen haben Sie?",
    answer:
      "Unser Team verfügt unter anderem über: Fachkraft für Arbeitssicherheit gemäß § 7 ASiG, zertifizierte Brandschutzbeauftragte und Brandschutzmanager (VdS), Sicherheits- und Gesundheitsschutzkoordinator (z. B. TÜV), Arbeitsschutzmanager nach DIN ISO 45001 sowie Sachverständige für Elektrotechnik und Arbeitsschutz. Wir arbeiten rechtskonform, praxisnah und verantwortungsvoll und bilden uns regelmäßig fort.",
  },
  {
    id: "kosten-erstberatung",
    question: "Was kostet die Betreuung und ist die Erstberatung wirklich kostenlos?",
    answer:
      "Die Kosten hängen vom Leistungsumfang ab: z. B. Art der Betreuung (Grund- oder betriebsspezifisch), Anzahl der Beschäftigten, Branche, Objekte und gewünschte Vor-Ort-Termine. Die Erstberatung bei uns ist kostenlos und unverbindlich. Darin besprechen wir Ihren Bedarf und geben Ihnen eine transparente Einschätzung – ohne Verpflichtung. So können Sie in Ruhe entscheiden.",
  },
];
