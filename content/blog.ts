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
  {
    slug: "asr-a2-2-brandschutzhelfer",
    title: "ASR A2.2 Brandschutzhelfer – Anzahl, Schulung und Pflicht",
    excerpt:
      "Brandschutzhelfer gemäß ASR A2.2: Wie viele braucht der Betrieb, welche Schulungsinhalte sind nötig und wie oft muss geschult werden? Praxisnah zusammengefasst.",
    date: "2025-03-12",
    content: [
      "Die Technische Regel für Arbeitsstätten ASR A2.2 „Maßnahmen gegen Brände“ verlangt, dass Arbeitgeber eine ausreichende Anzahl von Brandschutzhelfern ausbilden lassen. Brandschutzhelfer unterstützen im Brandfall bei der Evakuierung, der Bedienung von Löschgeräten und der Sicherstellung der Brandschutzordnung. Sie ersetzen keinen Brandschutzbeauftragten, ergänzen aber die betriebliche Brandschutzorganisation.",
      "Die erforderliche Anzahl an Brandschutzhelfern ergibt sich aus der Gefährdungsbeurteilung. Ausschlaggebend sind unter anderem die Anzahl der Beschäftigten, die räumliche Verteilung (z. B. mehrere Gebäude oder Stockwerke), die Fluchtwegplanung und ob besondere Gefährdungen bestehen. In der Praxis werden häufig etwa 5 bis 10 % der Beschäftigten als Brandschutzhelfer ausgebildet; in Kleinstbetrieben oft mindestens eine Person pro Schicht oder Gebäudebereich.",
      "Die Ausbildung muss die Inhalte der ASR A2.2 abdecken: u. a. Gefahren durch Brände, betriebliche Brandschutzorganisation, Verhalten im Brandfall, Wirkungsweise und Handhabung von Löschgeräten sowie Evakuierung. Die Schulung umfasst in der Regel theoretische und praktische Anteile (z. B. Löschübung). Eine Wiederholungsschulung ist in angemessenen Abständen erforderlich – typischerweise alle drei bis fünf Jahre, sofern keine besonderen Anlässe vorliegen.",
      "Arbeitgeber müssen die Zahl der Brandschutzhelfer festlegen, die Ausbildung sicherstellen und die Teilnahme dokumentieren. Wer unsicher ist, wie viele Brandschutzhelfer im eigenen Betrieb nötig sind, kann sich an einer Gefährdungsbeurteilung orientieren oder eine Fachkraft für Arbeitsschutz bzw. einen Brandschutzbeauftragten hinzuziehen. Wir beraten Sie in Köln und NRW zur richtigen Anzahl, führen Brandschutzhelfer-Schulungen durch und unterstützen bei der Dokumentation.",
    ],
  },
  {
    slug: "unterweisung-arbeitsschutz-fristen",
    title: "Unterweisung im Arbeitsschutz – Fristen, Inhalte und Dokumentation",
    excerpt:
      "Unterweisungspflicht nach ArbSchG: Wie oft unterweisen, was muss rein und wie dokumentieren? Die wichtigsten Punkte für Arbeitgeber und Verantwortliche.",
    date: "2025-03-01",
    content: [
      "Die Unterweisung ist eine zentrale Pflicht des Arbeitgebers nach dem Arbeitsschutzgesetz (ArbSchG). Beschäftigte müssen über die bei ihrer Arbeit auftretenden Gefahren und die zu treffenden Schutzmaßnahmen unterwiesen werden – und zwar in ausreichender Zahl und mindestens einmal jährlich. Bei neuen Beschäftigten ist die Unterweisung vor der ersten Tätigkeit erforderlich.",
      "Neben der jährlichen Wiederholung sind zusätzliche Unterweisungen nötig, wenn sich die Tätigkeit oder die Gefährdungen wesentlich ändern, neue Arbeitsmittel oder Stoffe eingeführt werden oder besondere Vorkommnisse (z. B. Unfälle, Beinahe-Unfälle) es erfordern. Die Unterweisung muss in einer für die Beschäftigten verständlichen Form und Sprache erfolgen.",
      "Inhaltlich muss die Unterweisung die konkreten Arbeitsplätze und Tätigkeiten betreffen: Welche Gefahren bestehen, welche Schutzmaßnahmen und Verhaltensregeln gelten, wie sind Notfälle zu handhaben? Je nach Betrieb können Themen wie Brandschutz, Gefahrstoffe, Elektrosicherheit, Ergonomie oder PSA hinzukommen. Die Unterweisung darf nicht nur aus dem Verteilen von Merkblättern bestehen; ein dialogischer Austausch und die Möglichkeit für Rückfragen sind wichtig.",
      "Der Arbeitgeber muss die Durchführung der Unterweisungen dokumentieren – in der Regel mit Datum, Thema, Namen der Unterwiesenen und des Unterweisenden. So kann im Nachhinein nachgewiesen werden, dass die Pflicht erfüllt wurde. Wir unterstützen Sie bei der Planung und Durchführung von Unterweisungen zu Arbeitsschutz, Brandschutz und weiteren Themen – vor Ort in Köln und NRW oder in Abstimmung mit Ihren Abläufen.",
    ],
  },
  {
    slug: "gefaehrdungsbeurteilung-ablauf",
    title: "Gefährdungsbeurteilung erstellen – Ablauf, Pflichten und Aktualisierung",
    excerpt:
      "Gefährdungsbeurteilung nach ArbSchG: Wer ist verantwortlich, welche Schritte gehören dazu und wann muss sie aktualisiert werden? Kurz und praxisnah erklärt.",
    date: "2025-02-18",
    content: [
      "Die Gefährdungsbeurteilung ist die zentrale Grundlage des betrieblichen Arbeitsschutzes. Nach dem Arbeitsschutzgesetz (ArbSchG) muss der Arbeitgeber die für die Beschäftigten mit ihrer Arbeit verbundenen Gefährdungen ermitteln und beurteilen sowie die erforderlichen Maßnahmen des Arbeitsschutzes festlegen, umsetzen und auf Wirksamkeit prüfen. Ohne Gefährdungsbeurteilung fehlt die systematische Basis für Unterweisungen, Betriebsanweisungen und technische Schutzmaßnahmen.",
      "Der Ablauf umfasst typischerweise: Arbeitsbereiche und Tätigkeiten erfassen, Gefährdungen identifizieren (z. B. aus ArbStättV, BetrSichV, GefStoffV, Lärm, psychische Belastung), Risiken beurteilen, Schutzmaßnahmen festlegen und priorisieren, Maßnahmen umsetzen und deren Wirksamkeit prüfen, Gefährdungsbeurteilung dokumentieren und bei Änderungen aktualisieren. Die Dokumentation muss für Außenstehende (z. B. Aufsichtsbehörden, Berufsgenossenschaft) nachvollziehbar sein.",
      "Der Arbeitgeber trägt die Verantwortung für die Durchführung; er kann sich dabei fachkundig unterstützen lassen. Eine Fachkraft für Arbeitsschutz darf die Gefährdungsbeurteilung fachlich erstellen und den Prozess begleiten. In vielen Betrieben übernimmt die externe oder interne FaSi die Erstellung, der Arbeitgeber bestätigt und setzt die Maßnahmen um.",
      "Eine einmal erstellte Gefährdungsbeurteilung ist nicht „fertig für immer“. Sie muss regelmäßig überprüft und bei wesentlichen Änderungen (neue Tätigkeiten, neue Stoffe, Unfälle, neue Erkenntnisse) aktualisiert werden. Wir erstellen und aktualisieren für Sie Gefährdungsbeurteilungen, die rechtssicher und in der Praxis umsetzbar sind – in Köln, NRW und auf Wunsch darüber hinaus.",
    ],
  },
  {
    slug: "sigeko-kosten-honorar-orientierung",
    title: "SiGeKo-Kosten und Honorar – Orientierung für Bauherren und Planer",
    excerpt:
      "Was kostet ein SiGeKo? Honorar-Orientierung für Sicherheits- und Gesundheitsschutzkoordination auf der Baustelle – Faktoren, Richtwerte und transparente Angebote.",
    date: "2025-01-28",
    content: [
      "Die Sicherheits- und Gesundheitsschutzkoordination (SiGeKo) ist bei Baustellen mit mehreren Arbeitgebern oder Selbstständigen gesetzlich vorgesehen (RAB 30). Bauherren und Planer fragen sich oft: Was kostet ein SiGeKo, und woran kann man sich orientieren?",
      "Das Honorar hängt von vielen Faktoren ab: Art und Größe des Bauvorhabens, Bauphase (Planung vs. Ausführung), Laufzeit, Anzahl der Einweisungen und Baustellenbegehungen, Umfang der Dokumentation (SiGe-Plan, Sicherheits- und Gesundheitsschutzplan, Unterlagen für die Baustelle). Pauschale Preise sind daher nicht seriös – ein Einfamilienhaus-Neubau erfordert einen anderen Aufwand als ein Gewerbe-Neubau oder eine Sanierung mit vielen Gewerken.",
      "Richtwerte und Honorarrahmen werden von verschiedenen Stellen veröffentlicht, z. B. von Architektenkammern oder Fachverbänden. Sie dienen als grobe Orientierung, ersetzen aber keine individuelle Angebotserstellung. Wichtig ist eine klare Leistungsbeschreibung: Was ist im Honorar enthalten (SiGe-Plan, Einweisungen, Begehungen, Dokumentation), welche Termine sind geplant, wie ist die Kommunikation geregelt?",
      "Wir übernehmen die SiGeKo für Ihr Bauvorhaben in Köln und NRW und erstellen Ihnen ein transparentes Angebot nach Klärung von Umfang und Anforderungen. Auf unserer Wissen-Seite finden Sie zudem einen Rechner zur groben Honorar-Orientierung. Für ein unverbindliches Angebot und eine kostenlose Erstberatung sprechen Sie uns gerne an.",
    ],
  },
  {
    slug: "brandschutz-sachverstaendiger-koeln",
    title: "Brandschutz Sachverständiger in Köln – Aufgaben, Qualifikation und Einsatzgebiete",
    excerpt:
      "Was macht ein Brandschutz Sachverständiger? Aufgaben, erforderliche Qualifikationen und wann Unternehmen, Bauherren oder Hausverwaltungen einen Sachverständigen für Brandschutz in Köln beauftragen sollten.",
    date: "2026-05-04",
    content: [
      "Ein Brandschutz Sachverständiger ist eine hochqualifizierte Fachperson, die Gebäude, Anlagen und betriebliche Abläufe hinsichtlich des vorbeugenden und abwehrenden Brandschutzes bewertet. Sachverständige erstellen Brandschutzkonzepte, prüfen die Einhaltung baurechtlicher Vorgaben und beraten Bauherren, Architekten, Hausverwaltungen und Unternehmen bei komplexen Brandschutzfragen.",
      "Zu den typischen Aufgaben gehören die Erstellung und Prüfung von Brandschutzkonzepten nach Landesbauordnung (BauO NRW), die Bewertung von Flucht- und Rettungswegen, die Begutachtung von Brandschutzmaßnahmen im Bestand sowie die fachliche Begleitung von Baugenehmigungsverfahren. Darüber hinaus erstellen Sachverständige Brandschutzgutachten, etwa bei Abweichungen von den bauordnungsrechtlichen Anforderungen oder bei Sonderbauten wie Hotels, Versammlungsstätten oder Industriebauten.",
      "Die Qualifikation eines Brandschutz Sachverständigen geht deutlich über die eines Brandschutzbeauftragten hinaus. In der Regel verfügen Sachverständige über ein ingenieurwissenschaftliches Studium, eine Weiterbildung im vorbeugenden Brandschutz sowie mehrjährige Berufserfahrung. Anerkennungen erfolgen über Institutionen wie Architektenkammern, Ingenieurkammern oder durch öffentliche Bestellung und Vereidigung.",
      "In Köln und NRW ist die Nachfrage nach Brandschutz Sachverständigen besonders hoch – sowohl bei Neubauten als auch bei Bestandsgebäuden, die an aktuelle Brandschutzanforderungen angepasst werden müssen. Typische Anlässe sind Nutzungsänderungen (z. B. Büro zu Wohnraum), Erweiterungen, Sanierungen oder behördliche Auflagen nach Begehungen.",
      "Health and Safety + bietet als Brandschutz Sachverständiger in Köln und Umgebung umfassende Leistungen: von der Erstellung von Brandschutzkonzepten über die Prüfung bestehender Brandschutzmaßnahmen bis hin zur fachlichen Begleitung im Baugenehmigungsverfahren. Kombiniert mit unserer Expertise als Brandschutzbeauftragte und Fachkraft für Arbeitssicherheit erhalten Sie alle Leistungen aus einer Hand.",
    ],
  },
  {
    slug: "strafen-arbeitsschutz",
    title: "Welche Strafen gibt es im Arbeitsschutz? Bußgelder, Haftung und Konsequenzen",
    excerpt:
      "Strafen im Arbeitsschutz: Welche Bußgelder drohen bei Verstößen, wer haftet und welche Konsequenzen können bis hin zur Strafanzeige führen? Überblick für Arbeitgeber.",
    date: "2026-05-04",
    content: [
      "Verstöße gegen den Arbeitsschutz können erhebliche Konsequenzen nach sich ziehen – von Bußgeldern über Haftungsansprüche bis hin zu strafrechtlichen Folgen. Arbeitgeber sollten die wichtigsten Regelungen kennen, um Risiken zu vermeiden und ihrer Verantwortung gerecht zu werden.",
      "Das Arbeitsschutzgesetz (ArbSchG) sieht in § 25 und § 26 Bußgeld- und Strafvorschriften vor. Ordnungswidrigkeiten – etwa die fehlende Gefährdungsbeurteilung, unterlassene Unterweisungen oder Nichteinhaltung von Auflagen der Aufsichtsbehörde – können mit Bußgeldern bis zu 25.000 Euro je Einzelverstoß geahndet werden. Bei wiederholten oder vorsätzlichen Verstößen können die Beträge deutlich höher ausfallen.",
      "Kommt es infolge mangelhaften Arbeitsschutzes zu Unfällen mit Personenschaden, drohen darüber hinaus strafrechtliche Konsequenzen. Fahrlässige Körperverletzung (§ 229 StGB) kann mit Geldstrafe oder Freiheitsstrafe bis zu drei Jahren bestraft werden. Bei Todesfolge kommt fahrlässige Tötung (§ 222 StGB) in Betracht – mit Freiheitsstrafe bis zu fünf Jahren. Die strafrechtliche Verantwortung trifft in der Regel die Person, die organisatorisch für den Arbeitsschutz zuständig war.",
      "Neben dem Strafrecht spielen auch zivilrechtliche Haftung und Regress der Berufsgenossenschaft eine Rolle. Hat der Arbeitgeber den Arbeitsunfall durch grobe Fahrlässigkeit oder Vorsatz verursacht, kann die Berufsgenossenschaft Regressansprüche geltend machen. Beschäftigte können unter bestimmten Voraussetzungen Schmerzensgeld und Schadensersatz fordern.",
      "Die Gewerbeaufsichtsämter und Berufsgenossenschaften führen regelmäßig Betriebsbegehungen durch. Bei festgestellten Mängeln werden Auflagen erteilt, deren Nichtbefolgung zu weiteren Sanktionen führt. In schweren Fällen kann eine Betriebsstilllegung angeordnet werden.",
      "Eine systematische Arbeitsschutzorganisation mit aktuellen Gefährdungsbeurteilungen, regelmäßigen Unterweisungen und dokumentierten Maßnahmen ist der beste Schutz vor Sanktionen. Als Fachkraft für Arbeitssicherheit in Köln unterstützen wir Unternehmen dabei, alle gesetzlichen Anforderungen zu erfüllen und Haftungsrisiken zu minimieren.",
    ],
  },
  {
    slug: "pflichtuebertragung-arbeitsschutz",
    title: "Pflichtenübertragung im Arbeitsschutz – rechtssicher delegieren",
    excerpt:
      "Pflichtenübertragung im Arbeitsschutz: Wie Arbeitgeber Arbeitsschutzpflichten rechtssicher an Führungskräfte delegieren – Voraussetzungen, Form und typische Fehler.",
    date: "2026-05-04",
    content: [
      "Der Arbeitgeber trägt nach dem Arbeitsschutzgesetz (ArbSchG) die Gesamtverantwortung für Sicherheit und Gesundheit der Beschäftigten. In der Praxis kann er jedoch nicht alle Pflichten persönlich wahrnehmen – insbesondere in größeren Betrieben mit mehreren Standorten oder Abteilungen. Daher sieht § 13 ArbSchG die Möglichkeit der Pflichtenübertragung vor.",
      "Durch eine schriftliche Pflichtenübertragung kann der Arbeitgeber einzelne Arbeitsschutzpflichten an zuverlässige und fachkundige Personen delegieren – typischerweise Führungskräfte, Abteilungsleiter oder Meister. Die Übertragung muss schriftlich erfolgen, die konkreten Pflichten klar benennen und sicherstellen, dass der Empfänger über die nötigen Befugnisse, Mittel und Qualifikationen verfügt.",
      "Wichtig: Die Gesamtverantwortung des Arbeitgebers bleibt bestehen. Er muss die Einhaltung der übertragenen Pflichten überwachen (Aufsichtspflicht) und bei Bedarf eingreifen. Eine Pflichtenübertragung ohne anschließende Kontrolle entlastet den Arbeitgeber im Schadensfall nicht.",
      "Typische Fehler bei der Pflichtenübertragung sind: rein mündliche Delegation ohne schriftliche Dokumentation, zu allgemeine Formulierungen ohne konkrete Aufgabenbeschreibung, Übertragung an Personen ohne ausreichende Qualifikation oder Weisungsbefugnis sowie fehlende Nachkontrolle. All dies kann dazu führen, dass die Übertragung rechtlich unwirksam ist und der Arbeitgeber im Haftungsfall vollständig verantwortlich bleibt.",
      "Für eine rechtssichere Pflichtenübertragung empfiehlt sich ein strukturiertes Vorgehen: Zunächst die relevanten Arbeitsschutzpflichten identifizieren, dann geeignete Empfänger auswählen, die Übertragung schriftlich dokumentieren und regelmäßig überprüfen, ob die Pflichten tatsächlich wahrgenommen werden. Als Fachkraft für Arbeitssicherheit unterstützen wir Unternehmen in Köln und NRW bei der Erstellung rechtssicherer Übertragungsdokumente und der Schulung von Führungskräften.",
    ],
  },
  {
    slug: "brandschutzbeauftragter-aufgaben-pflichten",
    title: "Brandschutzbeauftragter – Aufgaben, Pflichten und Bestellung",
    excerpt:
      "Brandschutzbeauftragter im Unternehmen: Welche Aufgaben hat er, wann ist die Bestellung Pflicht und welche Qualifikation braucht er? Alles Wichtige für Arbeitgeber.",
    date: "2026-05-04",
    content: [
      "Der Brandschutzbeauftragte ist eine vom Arbeitgeber bestellte Person, die den betrieblichen Brandschutz organisiert, überwacht und weiterentwickelt. Anders als Brandschutzhelfer, die im Ernstfall erste Löschmaßnahmen einleiten, ist der Brandschutzbeauftragte strategisch und beratend tätig – er ist die zentrale Ansprechperson für alle Brandschutzfragen im Unternehmen.",
      "Die Aufgaben des Brandschutzbeauftragten umfassen unter anderem: Erstellung und Aktualisierung der Brandschutzordnung (Teile A, B und C nach DIN 14096), Durchführung von Brandschutzbegehungen, Organisation von Evakuierungsübungen, Überwachung der Brandschutzeinrichtungen (Feuerlöscher, Brandmeldeanlagen, Rauch- und Wärmeabzugsanlagen), Zusammenarbeit mit Behörden und Feuerwehr sowie die Schulung von Brandschutzhelfern und Beschäftigten.",
      "Eine gesetzliche Pflicht zur Bestellung eines Brandschutzbeauftragten besteht für bestimmte Gebäudearten und Nutzungen – etwa für Sonderbauten nach Landesbauordnung (z. B. Versammlungsstätten, Krankenhäuser, Hotels, Hochhäuser), für Industriebauten nach IndBauRL oder wenn die Baugenehmigung dies als Auflage vorsieht. Darüber hinaus fordern viele Feuerversicherer und Berufsgenossenschaften die Bestellung eines Brandschutzbeauftragten als Voraussetzung für den Versicherungsschutz.",
      "Die Qualifikation des Brandschutzbeauftragten ist in der DGUV Information 205-003 (ehemals BGI 847) und der vfdb-Richtlinie 12-09/01 geregelt. Die Ausbildung umfasst typischerweise 64 Unterrichtseinheiten und deckt baulichen, anlagentechnischen und organisatorischen Brandschutz ab. Regelmäßige Fortbildungen sind erforderlich, um den aktuellen Stand der Technik und der Vorschriften zu kennen.",
      "Als externer Brandschutzbeauftragter in Köln und NRW übernehmen wir alle genannten Aufgaben für Ihr Unternehmen. Von der Erstellung der Brandschutzordnung über regelmäßige Begehungen bis zur Schulung Ihrer Mitarbeiter – Sie erhalten professionellen Brandschutz ohne eigene Personalkapazitäten aufbauen zu müssen.",
    ],
  },
  {
    slug: "sigeko-pflicht-wann-braucht-man-sigeko",
    title: "SiGeKo-Pflicht – Wann braucht man einen SiGeKo auf der Baustelle?",
    excerpt:
      "Wann ist ein SiGeKo Pflicht? Voraussetzungen nach BaustellV und RAB 30, Aufgaben des Sicherheits- und Gesundheitsschutzkoordinators und Verantwortung des Bauherrn.",
    date: "2026-05-04",
    content: [
      "Die Baustellenverordnung (BaustellV) verpflichtet Bauherren, einen Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) zu bestellen, wenn auf einer Baustelle Beschäftigte mehrerer Arbeitgeber gleichzeitig oder nacheinander tätig werden. Diese Regelung gilt unabhängig von der Größe des Bauvorhabens – auch bei kleineren Projekten wie Einfamilienhäusern kann die SiGeKo-Pflicht greifen.",
      "Konkret ist ein SiGeKo erforderlich, wenn mindestens zwei Unternehmen gleichzeitig auf der Baustelle arbeiten oder wenn besonders gefährliche Arbeiten ausgeführt werden (Anhang II der BaustellV). Dazu zählen unter anderem Arbeiten mit Absturzgefahr, Arbeiten in Gräben und Schächten, Abbrucharbeiten, Arbeiten mit Gefahrstoffen oder Arbeiten in der Nähe von Hochspannungsleitungen.",
      "Der SiGeKo unterstützt den Bauherrn bereits in der Planungsphase, indem er sicherheitsrelevante Aspekte in die Planung einbringt. Während der Ausführung koordiniert er die Sicherheitsmaßnahmen der verschiedenen Gewerke, erstellt und pflegt den Sicherheits- und Gesundheitsschutzplan (SiGe-Plan) und führt regelmäßige Baustellenbegehungen durch. Ziel ist es, Gefährdungen durch das Zusammenwirken verschiedener Unternehmen zu minimieren.",
      "Die Verantwortung für die Bestellung liegt immer beim Bauherrn. Er kann die SiGeKo-Aufgabe an einen geeigneten Dritten übertragen – der Bauherr bleibt jedoch in der Pflicht sicherzustellen, dass der SiGeKo seine Aufgaben auch tatsächlich wahrnimmt. Wer keinen SiGeKo bestellt, obwohl die Voraussetzungen vorliegen, begeht eine Ordnungswidrigkeit.",
      "Die Qualifikation des SiGeKo wird durch die Regeln zum Arbeitsschutz auf Baustellen (RAB 30) definiert. Danach muss der SiGeKo über baufachliche Kenntnisse, arbeitsschutzfachliche Kenntnisse sowie spezielle Koordinatorenkenntnisse verfügen. In der Praxis sind dies häufig Ingenieure oder Architekten mit einer Zusatzqualifikation als SiGeKo.",
      "Als qualifizierter SiGeKo in Köln und NRW begleiten wir Ihr Bauvorhaben von der Planung bis zur Fertigstellung. Wir erstellen den SiGe-Plan, führen regelmäßige Begehungen durch und dokumentieren alle Maßnahmen – damit Sie als Bauherr Ihre gesetzlichen Pflichten zuverlässig erfüllen. Vereinbaren Sie eine kostenlose Erstberatung.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
