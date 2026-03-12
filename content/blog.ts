/**
 * Blogbeiträge für die Wissen-Seite.
 * Interne Beiträge mit content; keine „Weiterlesen“-Hinweise.
 */
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getraenke-am-arbeitsplatz",
    title: "Muss der Arbeitgeber Getränke zur Verfügung stellen?",
    excerpt:
      "Getränke am Arbeitsplatz: Was Arbeitgeber laut Fürsorgepflicht, ArbStättV und ASR A4.1 bereitstellen müssen – praxisnahe Beispiele für Büro, Sommerhitze und Baustelle.",
    date: "2025-06-19",
    content: [
      "Ausreichend Getränke am Arbeitsplatz zu trinken, fördert Konzentration, Leistungsfähigkeit und Gesundheit der Beschäftigten. Viele Arbeitgeber fragen sich deshalb: Müssen Getränke im Betrieb kostenlos zur Verfügung gestellt werden – und wenn ja, ab wann gilt eine Pflicht?",
      "Rechtlich ist vor allem die Fürsorgepflicht des Arbeitgebers entscheidend. Er muss für sichere, gesunde und zumutbare Arbeitsbedingungen sorgen und Gesundheitsgefahren am Arbeitsplatz so weit wie möglich reduzieren. Dazu kann in bestimmten Situationen auch die Bereitstellung von Getränken gehören.",
      "Unter normalen Bedingungen – etwa bei klassischen Bürotätigkeiten in klimatisierten Räumen und moderaten Temperaturen – besteht in der Regel keine ausdrückliche Pflicht, Getränke zu stellen. In diesen Fällen versorgen sich Beschäftigte üblicherweise selbst mit Wasser, Kaffee oder anderen Getränken.",
      "Steigen die Temperaturen, greifen jedoch konkret die Arbeitsstättenverordnung (ArbStättV) und die Technische Regel ASR A4.1. Ab etwa 26 °C Raumtemperatur sollten Arbeitgeber geeignete Getränke, zum Beispiel Wasser oder ungesüßten Tee, bereitstellen. Ab 30 °C wird die Bereitstellung von Getränken zu einer klaren Pflicht, um gesundheitliche Risiken wie Kreislaufprobleme oder Dehydrierung zu vermeiden. Alkoholische Getränke sind aus Arbeitsschutzsicht selbstverständlich ausgeschlossen.",
      "Bei Arbeiten im Freien – etwa auf Baustellen, in der Landwirtschaft oder im Straßenbau – gelten strengere Anforderungen. Hier müssen Arbeitgeber dauerhaft für eine ausreichende Versorgung mit Trinkwasser oder anderen nicht-alkoholischen Getränken sorgen, unabhängig von der genauen Außentemperatur. Nur so lassen sich Hitze- und Gesundheitsgefahren im Sinne eines wirksamen Arbeitsschutzes reduzieren.",
    ],
  },
  {
    slug: "akteure-arbeitsschutz",
    title: "Akteure im Arbeitsschutz – wer kümmert sich um was?",
    excerpt:
      "Akteure im Arbeitsschutz einfach erklärt: Welche Aufgaben haben Arbeitgeber, Fachkraft für Arbeitssicherheit, Sicherheitsbeauftragte, Betriebsarzt und Arbeitsschutzausschuss?",
    date: "2025-03-06",
    content: [
      "Ein wirksamer Arbeitsschutz im Unternehmen entsteht nur, wenn Rollen und Verantwortlichkeiten klar geregelt sind. Gesetzliche Vorgaben definieren, wer welche Aufgaben übernimmt – vom Arbeitgeber über die Fachkraft für Arbeitssicherheit bis hin zu Sicherheitsbeauftragten und Betriebsarzt.",
      "Der Arbeitgeber trägt immer die Hauptverantwortung. Nach dem Arbeitsschutzgesetz (ArbSchG) ist er verpflichtet, geeignete Schutzmaßnahmen zu planen, einzuführen, regelmäßig zu prüfen und bei Bedarf anzupassen. Er kann Aufgaben zwar delegieren, die Gesamtverantwortung für Sicherheit und Gesundheit der Beschäftigten bleibt aber bei ihm.",
      "Die Fachkraft für Arbeitssicherheit (FaSi bzw. Sifa) unterstützt Arbeitgeber und Führungskräfte fachlich. Sie berät zu Arbeitsschutzvorschriften, bewertet Gefährdungen und entwickelt gemeinsam mit dem Unternehmen geeignete Maßnahmen. In der Regel hat sie keine direkte Weisungsbefugnis, wird in akuten Gefahrensituationen aber häufig als zentrale Expertin hinzugezogen.",
      "Sicherheitsbeauftragte sind Beschäftigte, die zusätzlich zu ihrer eigentlichen Tätigkeit für das Thema Sicherheit sensibilisiert sind. Sie helfen dabei, Risiken frühzeitig zu erkennen, auf unsichere Verhaltensweisen aufmerksam zu machen und stehen Kolleginnen und Kollegen als Ansprechpartner zur Verfügung – ohne formale Weisungsbefugnis, aber mit hohem Praxisbezug.",
      "Der Betriebsarzt bringt medizinisches Fachwissen in den Arbeitsschutz ein. Er beurteilt arbeitsbedingte Gesundheitsrisiken, führt Vorsorgeuntersuchungen durch und unterstützt dabei, Arbeitsplätze ergonomisch und gesundheitsschonend zu gestalten. So trägt er zur langfristigen Gesundheit der Beschäftigten bei.",
      "Ab 20 Beschäftigten ist ein Arbeitsschutzausschuss (ASA) vorgeschrieben. In diesem Gremium arbeiten Arbeitgeber, Betriebsarzt, Fachkraft für Arbeitssicherheit und Vertretungen der Beschäftigten zusammen. Der ASA berät regelmäßig über Unfallverhütung, Präventionsmaßnahmen und Verbesserungen im betrieblichen Arbeitsschutz.",
      "Je nach Branche und Gefährdungslage können weitere Beauftragte hinzukommen, etwa für Brandschutz, Gefahrstoffe oder Laserschutz. Sie kümmern sich um spezielle Risiken und stellen sicher, dass gesetzliche Anforderungen und technische Regeln vor Ort umgesetzt werden.",
    ],
  },
  {
    slug: "bestellung-fachkraft-arbeitssicherheit",
    title: "Bestellung der Fachkraft für Arbeitssicherheit (Sifa/FaSi)",
    excerpt:
      "Fachkraft für Arbeitssicherheit bestellen: Welche Pflichten ergeben sich aus ASiG und DGUV Vorschrift 2 und wie läuft die schriftliche Bestellung ab?",
    date: "2024-07-18",
    content: [
      "Nach dem Arbeitssicherheitsgesetz (ASiG) und der DGUV Vorschrift 2 „Betriebsärzte und Fachkräfte für Arbeitssicherheit“ sind Arbeitgeber verpflichtet, eine Fachkraft für Arbeitssicherheit (Sifa bzw. FaSi) zu bestellen. Diese externe oder interne Fachkraft unterstützt den Arbeitgeber bei allen Fragen rund um Arbeitssicherheit und Unfallverhütung.",
      "Die Fachkraft für Arbeitssicherheit berät zu gesetzlichen Anforderungen, beurteilt Gefährdungen und entwickelt gemeinsam mit dem Unternehmen geeignete Schutzmaßnahmen. Ein wichtiger Schwerpunkt liegt auf der menschengerechten Gestaltung von Arbeitssystemen – von der ergonomischen Arbeitsplatzgestaltung über sichere Arbeitsabläufe bis hin zu Schulungen und Unterweisungen. So trägt sie wesentlich dazu bei, Sicherheit und Gesundheit auf allen Ebenen des Unternehmens zu verankern.",
      "Die Bestellung der Fachkraft für Arbeitssicherheit muss grundsätzlich schriftlich erfolgen. Viele Berufsgenossenschaften und Unfallkassen stellen dafür Musterbestellschreiben zur Verfügung, zum Beispiel die BGHM (Berufsgenossenschaft Holz und Metall). Diese Vorlagen erleichtern es, alle rechtlich relevanten Punkte – von Aufgabenbeschreibung bis Qualifikation – eindeutig zu regeln.",
      "Mit einer fristgerechten und ordnungsgemäßen Bestellung erfüllen Arbeitgeber eine zentrale Pflicht des Arbeitsschutzes. Gleichzeitig schaffen sie die Grundlage für eine systematische, professionelle Betreuung in Fragen der Sicherheit und des Gesundheitsschutzes im Betrieb.",
    ],
  },
  {
    slug: "brandschutz-lithium-ionen-batterien",
    title: "Brandschutz beim Umgang mit Lithium-Ionen-Batterien – Begriffe und Maßnahmen",
    excerpt:
      "Brandschutz bei Lithium-Ionen-Batterien: Wichtige Begriffe, typische Gefahren und praktische Sicherheitsmaßnahmen für Lagerung, Nutzung und Brandbekämpfung.",
    date: "2025-02-25",
    content: [
      "Lithium-Ionen-Batterien (LIB) sind aus unserem Alltag nicht mehr wegzudenken – von Smartphones über E-Bikes bis hin zu Elektroautos. Trotz ihrer hohen Energiedichte bergen sie jedoch Risiken, insbesondere Brandgefahren. Wer die wichtigsten Begriffe und Sicherheitsmaßnahmen im Brandschutz kennt, kann Risiken minimieren und Unfälle vermeiden.",
      "Wichtige Begriffe im Überblick: Eine Lithium-Ionen-Zelle ist eine einzelne wiederaufladbare Zelle mit Anode, Kathode, Elektrolyt und Separator. Kritische LIB sind Batterien, die durch innere Schäden oder fehlerhafte Handhabung eine erhöhte Brandgefahr aufweisen. Unter Tiefentladung versteht man das Entladen unter die minimale zulässige Spannung – dies kann zu Schäden und inneren Kurzschlüssen führen. Bei der Dendriten-Bildung entstehen Kristallstrukturen im Inneren der Batterie, die den Separator durchstoßen können und damit eine potenzielle Brandursache darstellen. Ein sicherer Ort ist ein speziell gesicherter Bereich, in dem defekte oder beschädigte LIB gelagert werden, um Brände zu verhindern.",
      "Für die Lagerung von Lithium-Ionen-Batterien gilt: kühl und trocken aufbewahren, beschädigte oder defekte Akkus nicht unbeaufsichtigt lassen und bei größeren Akkus ausreichende Sicherheitsabstände einhalten. So lassen sich Risiken bereits im Vorfeld deutlich reduzieren.",
      "Auch bei der Nutzung sind klare Sicherheitsregeln zu beachten: Es sollten nur zugelassene Ladegeräte verwendet werden, Überladung und Tiefentladung sind zu vermeiden und Akkus dürfen niemals mechanisch beschädigt werden. Sorgfalt im Alltagseinsatz ist ein wesentlicher Baustein des vorbeugenden Brandschutzes.",
      "Kommt es dennoch zu einem Brand, sind geeignete Maßnahmen zur Brandbekämpfung entscheidend: Eingesetzt werden sollten Wassernebel oder speziell für Lithium-Ionen-Batterien geeignete Löschmittel. Brennende Akkus dürfen nur unter Schutzmaßnahmen entsorgt werden; gerät ein Brand außer Kontrolle, ist umgehend die Feuerwehr zu alarmieren.",
      "Wer diese Begriffe und Maßnahmen kennt und im Alltag berücksichtigt, trägt maßgeblich dazu bei, den sicheren Umgang mit Lithium-Ionen-Batterien zu gewährleisten und Brandereignisse zu vermeiden.",
    ],
  },
  {
    slug: "brandschutz-brennbare-stoffe",
    title: "Brandschutz: Brennbare Stoffe – Gefahren und Eigenschaften",
    excerpt:
      "Brennbare Stoffe im Brandschutz: Gefahren, Brandverhalten und wichtige sicherheitstechnische Kenngrößen einfach erklärt – mit anschaulichen Praxisbeispielen.",
    date: "2025-02-13",
    content: [
      "Unter dem Begriff „brennbarer Stoff“ werden im Brandschutz zahlreiche Materialien in unterschiedlichen Aggregatzuständen zusammengefasst: gasförmig, flüssig oder fest. Dazu zählen auch Dämpfe, Nebel und Stäube, die sich in Verbindung mit Luft oder Sauerstoff entzünden können.",
      "Das Brandverhalten eines Stoffes hängt von mehreren Faktoren ab – insbesondere von seinen chemischen und physikalischen Eigenschaften, vom Aggregatzustand sowie von Umgebungseinflüssen wie Temperatur oder Luftfeuchtigkeit. Im Gegensatz zu einer festen Materialkonstante ist das Brandverhalten veränderlich und kann sich je nach Situation deutlich unterscheiden.",
      "Eine große Rolle spielt die Oberflächenvergrößerung: Ein Holzklotz schwärzt sich zunächst nur in der Flamme, Holzwolle ist leicht entflammbar und aufgewirbelter Holzstaub kann sogar explosionsartig verbrennen. Ähnlich verhält es sich mit Metallen: Stahl gilt allgemein als nicht brennbar, doch feine Stahlwolle besitzt eine große Oberfläche und lässt sich bereits mit einer 9-V-Batterie entzünden. Aluminiumstaub kann explosionsartig verbrennen und dabei erhebliche Wärmemengen freisetzen.",
      "Auch in der Metallbearbeitung auftretende Kühlschmierstoff-Aerosole und -Dämpfe können sich entzünden – etwa durch heiße Oberflächen, Funken oder glühende Späne. Solche Prozesse erfordern deshalb besondere Aufmerksamkeit im betrieblichen Brandschutz.",
      "Zur Beurteilung des Brandverhaltens werden sicherheitstechnische Kenngrößen herangezogen, unter anderem die Zündtemperatur als Mindesttemperatur für eine Selbstentzündung ohne Fremdzündquelle, der Flammpunkt als niedrigste Temperatur, bei der sich über einer Flüssigkeit ein zündfähiges Dampf-Luft-Gemisch bildet, sowie die Verbrennungsgeschwindigkeit, also die Geschwindigkeit, mit der eine Substanz verbrennt.",
    ],
  },
  {
    slug: "dguv-vorschrift-2",
    title: "DGUV Vorschrift 2 – Regeln und Pflichten für Unternehmen",
    excerpt:
      "DGUV Vorschrift 2: Die wichtigsten Änderungen ab 2025, neue Regeln für die betriebliche Betreuung und praktische Auswirkungen für Unternehmen zusammengefasst.",
    date: "2025-02-06",
    content: [
      "Die neue Fassung der DGUV Vorschrift 2 tritt 2025 in Kraft und bringt wesentliche Verbesserungen für die betriebliche Gesundheits- und Sicherheitsbetreuung mit sich. Ziel ist es, die Betreuung praxisnäher, verständlicher und effizienter zu gestalten, ohne die bestehenden Sicherheitsstandards zu senken.",
      "Ein zentraler Punkt ist die verbesserte Verständlichkeit und Struktur der Vorschrift. Die bisherige Fassung von 2011 galt vielen als unübersichtlich und schwer zugänglich. Die Neufassung trennt nun deutlicher zwischen verpflichtenden Vorschriften und empfohlenen Regelungen, was die Anwendung im Alltag erleichtert und Rechtssicherheit schafft.",
      "Zudem wurden gezielte Anpassungen für eine bessere Praxisanwendung vorgenommen. Begriffe wie die „Grundbetreuung“ werden klarer definiert und einheitlich für alle Betriebe verwendet. Auch die Aufgaben von Fachkräften für Arbeitssicherheit und Betriebsärzten sind verständlicher gefasst, sodass Rollen, Zuständigkeiten und Erwartungen transparenter werden.",
      "Ein weiterer Baustein ist der Einsatz digitaler Technologien. Künftig können digitale Kommunikationsmittel systematischer genutzt werden, um Ressourcen effizienter einzusetzen und die Betreuung flexibler zu gestalten. Teile der betriebsärztlichen und sicherheitstechnischen Betreuung können so auch digital erfolgen – ein Vorteil insbesondere vor dem Hintergrund veränderter Arbeitswelten und mobiler Arbeitsformen.",
      "Neu ist außerdem die Erweiterung der Qualifikationen: Neben klassischen technischen und naturwissenschaftlichen Fachrichtungen können nun auch Absolventinnen und Absolventen aus anderen Bereichen wie Psychologie oder Biologie als Fachkräfte für Arbeitssicherheit eingesetzt werden. Diese Interdisziplinarität ermöglicht eine ganzheitlichere Betrachtung von Sicherheit und Gesundheit im Unternehmen.",
      "Für kleinere Betriebe wurden die Betreuungsmodelle vereinfacht und zugänglicher gestaltet. Insbesondere Kleinstbetriebe profitieren von angepassten Lösungen, die die Umsetzung erleichtern und gleichzeitig ein angemessenes Schutzniveau sicherstellen.",
      "Insgesamt trägt die neue DGUV Vorschrift 2 dazu bei, die betriebliche Betreuung ressourcenschonend und zeitgemäß zu organisieren. Unternehmen und Fachkräfte erhalten eine klarere Struktur und praxistaugliche Vorgaben, um Gesundheit und Sicherheit nachhaltig zu sichern.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
