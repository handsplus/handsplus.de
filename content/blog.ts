/**
 * Blogbeiträge für die Wissen-Seite.
 * Interne Beiträge mit content; keine „Weiterlesen“-Hinweise.
 * Absätze mit Präfix "H2::" werden als Zwischenüberschrift gerendert.
 */
export type BlogFaqItem = { question: string; answer: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateModified?: string;
  content?: string[];
  faq?: BlogFaqItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "getraenke-am-arbeitsplatz",
    title: "Muss der Arbeitgeber Getränke zur Verfügung stellen?",
    excerpt:
      "Getränke am Arbeitsplatz: Was Arbeitgeber laut Fürsorgepflicht, ArbStättV und ASR A3.5 (Raumtemperatur) bereitstellen müssen – praxisnah für Betriebe in Köln und NRW.",
    date: "2025-04-10",
    dateModified: "2026-05-26",
    content: [
      "Ausreichend zu trinken unterstützt Konzentration, Leistungsfähigkeit und Gesundheit. Viele Arbeitgeber fragen, ob Getränke am Arbeitsplatz kostenlos bereitgestellt werden müssen – und ab wann das Pflicht ist. Die Antwort hängt von Raumtemperatur, Tätigkeit und Arbeitsort ab, nicht von Kulanz. Das gilt für Betriebe in Köln und NRW genauso wie bundesweit.",
      "H2::Was gilt rechtlich?",
      "Rechtliche Grundlage ist die Fürsorgepflicht des Arbeitgebers nach ArbSchG: sichere, gesunde und zumutbare Arbeitsbedingungen. Konkretisiert wird das durch ArbStättV und ASR A3.5 „Raumtemperatur“. Ab 26 °C Raumtemperatur sollen, ab 30 °C müssen geeignete Getränke bereitgestellt werden. Getränke ersetzen weder Lüftung noch Pausen oder ergonomische Arbeitsgestaltung – sie sind aber ein wichtiger Baustein bei thermischer Belastung.",
      "In klimatisierten Büroräumen bei moderaten Temperaturen besteht keine ausdrückliche Pflicht, Getränke zu stellen. Beschäftigte versorgen sich dort üblicher selbst. Sobald die Raumtemperatur steigt, ändert sich die Pflichtenlage.",
      "Ab etwa 26 °C Raumtemperatur sollten Arbeitgeber geeignete Getränke bereitstellen, etwa Wasser oder ungesüßten Tee. Ab 30 °C wird die Bereitstellung zur klaren Pflicht, um Kreislaufprobleme und Dehydrierung zu vermeiden. Alkoholische Getränke sind ausgeschlossen.",
      "H2::Umsetzung in der Praxis",
      "Bei Arbeiten im Freien – auf Baustellen, in der Landwirtschaft oder im Straßenbau – müssen dauerhaft ausreichend Trinkwasser oder andere nicht-alkoholische Getränke bereitstehen, unabhängig von der Außentemperatur. Das gilt auch bei kurzen Einsätzen mit hoher körperlicher Belastung.",
      "Organisatorisch empfiehlt sich eine feste Ansprechperson, nachfüllbare Behälter, hygienische Bereitstellung (einzeln nutzbare Becher), eine klar gekennzeichnete Trinkwasserstelle sowie die Einbindung in Unterweisung und Gefährdungsbeurteilung zur thermischen Belastung. Auf Baustellen ist dauerhaft Trinkwasser nach ArbStättV-Anhang vorzusehen, abgestimmt mit SiGe-Plan und Sozialräumen – [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo].",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Begehungen fällt häufig auf, dass keine Temperaturprotokolle geführt werden, Trinkwasser nur sporadisch bereitsteht oder die Maßnahmen nicht in der Gefährdungsbeurteilung verankert sind. Vor Prüfungen sollten Sie deshalb klären, ob die thermische Belastung bewertet ist, wer für Nachfüllung und Hygiene zuständig ist und ob Beschäftigte in der [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung] informiert wurden. Die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und der Betriebsarzt sollten bei der Bewertung eingebunden sein.",
      "Zur Nachweisführung eignen sich Temperaturprotokolle in Hitzeperioden, Belege über die Bereitstellung und ein Eintrag in der Gefährdungsbeurteilung. Überblick zu technischen Regeln der Kommission für Arbeitsschutz: [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt]. Health and Safety+ berät zu ArbStättV und ASR A3.5 – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Muss der Arbeitgeber Getränke kostenlos bereitstellen?",
        answer:
          "Im Büro bei normalen Temperaturen in der Regel nein. Ab 26 °C Raumtemperatur soll, ab 30 °C muss der Arbeitgeber geeignete Getränke bereitstellen. Im Freien und auf Baustellen gilt die Pflicht zur Trinkwasserversorgung unabhängig von der Außentemperatur.",
      },
      {
        question: "Was sind typische Mängel bei Getränken am Arbeitsplatz?",
        answer:
          "Kein Trinkwasser trotz Hitze oder Außenarbeit, fehlende Temperaturmessung, unhygienische Bereitstellung, keine Einbindung in Gefährdungsbeurteilung und Unterweisung sowie fehlende Verantwortlichkeit für Nachfüllung.",
      },
      {
        question: "Gilt das in Köln und NRW?",
        answer:
          "Ja – ArbStättV und ASR A3.5 gelten bundesweit. Berufsgenossenschaft und Gewerbeaufsicht prüfen in Köln und NRW bei Begehungen auch die Versorgung bei thermischer Belastung.",
      },
      {
        question: "Welche Getränke sind geeignet?",
        answer:
          "Wasser, ungesüßter Tee oder vergleichbare nicht-alkoholische Getränke. Alkoholische Getränke sind ausgeschlossen. Bei starker körperlicher Belastung sollten Beschäftigte ausreichend und regelmäßig trinken können.",
      },
    ],
  },
  {
    slug: "akteure-arbeitsschutz",
    title: "Akteure im Arbeitsschutz – wer kümmert sich um was?",
    excerpt:
      "Akteure im Arbeitsschutz: Aufgaben von Arbeitgeber, Fachkraft für Arbeitssicherheit, Betriebsarzt, SiBe und Betriebsrat – praxisnah für Köln und NRW.",
    date: "2025-04-17",
    dateModified: "2026-05-26",
    content: [
      "Wirksamer Arbeitsschutz entsteht nur mit klaren Rollen. Gesetzlich sind Arbeitgeber, Fachkraft für Arbeitssicherheit, Betriebsarzt, Sicherheitsbeauftragte und bei mehr als 20 Beschäftigten der Arbeitsschutzausschuss (ASA, ASiG § 11) zentral – ergänzt durch Spezialbeauftragte je Gefährdung – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Der Arbeitgeber trägt die Gesamtverantwortung nach ArbSchG: Schutzmaßnahmen planen, einführen, prüfen, anpassen. Delegation (z. B. [Link: /wissen/blog/pflichtuebertragung-arbeitsschutz|Pflichtenübertragung]) entbindet nicht – Aufsicht und Ressourcen bleiben beim Arbeitgeber.",
      "Die Fachkraft für Arbeitssicherheit berät zu Vorschriften, Gefährdungen und Maßnahmen – in der Regel ohne direkte Weisungsbefugnis, in akuten Gefahrensituationen aber zentral. Pflicht: [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftliche Bestellung] nach ASiG und DGUV Vorschrift 2.",
      "Der Betriebsarzt bringt arbeitsmedizinische Expertise: Vorsorge, arbeitsbedingte Risiken, ergonomische Arbeitsplatzgestaltung. Fachkraft für Arbeitssicherheit und Betriebsarzt ersetzen sich nicht – sie ergänzen sich in Gefährdungsbeurteilung und ASA.",
      "H2::Umsetzung in der Praxis",
      "Arbeitsschutzausschuss (ASA) nach ASiG § 11: Der Arbeitgeber bildet ihn in Betrieben mit mehr als 20 Beschäftigten. Bei der Zählung zählen Teilzeitkräfte mit bis zu 20 Stunden pro Woche mit 0,5 und mit bis zu 30 Stunden mit 0,75. Der ASA setzt sich zusammen aus dem Arbeitgeber oder einem Beauftragten, zwei vom Betriebsrat bestimmten Betriebsratsmitgliedern, Betriebsärzten, Fachkräften für Arbeitssicherheit und Sicherheitsbeauftragten nach § 22 SGB VII.",
      "Aufgabe des ASA ist es, Anliegen des Arbeitsschutzes und der Unfallverhütung zu beraten – er tritt mindestens einmal vierteljährlich zusammen. In der Praxis werden dort Unfälle, Beinahe-Ereignisse, Maßnahmenstände und geplante Änderungen besprochen; der ASA ersetzt nicht die tägliche Führungsverantwortung. Beispiel aus der Beratung: [Link: /wissen/blog/asa-sitzung-praxis-kita-arbeitsschutz|ASA-Protokoll KiTa-Träger].",
      "Spezialbeauftragte (Brandschutz, Gefahrstoffe, Laser) decken Teilrisiken ab. Schnittstellen zu [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz] und [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit] in einem Betreuungsplan vermeiden Doppelarbeit.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Prüfungen fällt häufig auf, dass Rollen unklar sind, die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung der Fachkraft für Arbeitssicherheit] fehlt oder der ASA bei mehr als 20 Beschäftigten nicht gebildet wird. Vor Begehungen sollten schriftliche Bestellungen, Betreuungsplan und ASA-Protokolle nachvollziehbar sein.",
      "Praxis Köln/NRW: Rollenklärung im Erstgespräch spart Konflikte bei BG-Begehungen. Health and Safety+ begleitet ASA, Bestellung der Fachkraft für Arbeitssicherheit und SiBe-Schulungen – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer muss im Betrieb welche Rolle im Arbeitsschutz einnehmen?",
        answer:
          "Der Arbeitgeber trägt die Gesamtverantwortung. Pflichtakteure sind je nach Betrieb die Fachkraft für Arbeitssicherheit und der Betriebsarzt, ab 20 Beschäftigten der Arbeitsschutzausschuss sowie bei Bedarf Sicherheitsbeauftragte und Spezialbeauftragte (Brandschutz, Gefahrstoffe).",
      },
      {
        question: "Was sind typische Mängel bei den Akteuren im Arbeitsschutz?",
        answer:
          "Fehlende schriftliche Bestellung der Fachkraft für Arbeitssicherheit, kein Betriebsarzt trotz Pflicht, ASA nicht gebildet oder ohne Protokolle, unklare Abgrenzung zwischen Beratung und Weisungsbefugnis, Spezialbeauftragte benannt aber nicht eingebunden.",
      },
      {
        question: "Gilt das in Köln und NRW?",
        answer:
          "Ja – ASiG, ArbSchG und DGUV Vorschrift 2 gelten bundesweit. Berufsgenossenschaft und Gewerbeaufsicht prüfen in Köln und NRW, ob die vorgesehenen Akteure bestellt und wirksam eingebunden sind.",
      },
      {
        question: "Wo vertiefen sich einzelne Rollen?",
        answer:
          "Zu [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung SiFa], [Link: /wissen/blog/sicherheitsbeauftragte-schulung-koeln|Sicherheitsbeauftragte], [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] und [Link: /wissen/blog/asa-sitzung-praxis-kita-arbeitsschutz|ASA in der Praxis].",
      },
    ],
  },
  {
    slug: "bestellung-fachkraft-arbeitssicherheit",
    title: "Bestellung der Fachkraft für Arbeitssicherheit",
    excerpt:
      "Fachkraft für Arbeitssicherheit bestellen: Pflichten nach ASiG und DGUV V2, schriftliche Bestellung, Umfang und Betreuung – praxisnah für Köln und NRW.",
    date: "2025-04-24",
    dateModified: "2026-05-26",
    content: [
      "Nach ASiG § 5 und DGUV Vorschrift 2 bestellt der Arbeitgeber eine Fachkraft für Arbeitssicherheit – intern oder extern. Ohne schriftliche Bestellung fehlt die nachweisbare Grundlage für die sicherheitstechnische Betreuung – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Die Fachkraft für Arbeitssicherheit unterstützt den Arbeitgeber nach ASiG § 6 bei Arbeitsschutz und Unfallverhütung: Beratung zu Gefährdungen und Maßnahmen, Begehungen, Prüfung von Anlagen und Arbeitsverfahren vor der Einführung, Mitwirkung bei [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen]. Sie ersetzt nicht die Geschäftsführung.",
      "Die Bestellung erfolgt schriftlich durch den Arbeitgeber. Sie legt den Betreuungsumfang fest (Grund- und betriebsspezifische Anteile nach DGUV Vorschrift 2), die übertragenen Aufgaben, den Zugang zu Informationen, Unterlagen und Arbeitsstätten, die vorgesehene Arbeitszeit sowie die erforderliche Qualifikation. Bei sicherheitstechnischer Beratung gilt Weisungsfreiheit gegenüber unmittelbaren Vorgesetzten – vergleichbar der Stellung des Betriebsarztes. Der Arbeitgeber stellt nach ASiG § 5 die zur Aufgabenerfüllung erforderlichen Mittel bereit.",
      "Grundbetreuung vs. betriebsspezifische Betreuung (DGUV V2): Grundbetreuung nach Betriebsart und Beschäftigtenzahl; betriebsspezifisch nach individuellen Gefährdungen (Maschinen, Gefahrstoffe, Höhenarbeit). Beides gehört ins Angebot und in die Bestellung.",
      "H2::Umsetzung in der Praxis",
      "Interne Fachkräfte für Arbeitssicherheit kennen den Betrieb aus der Nähe; dafür brauchen sie nachweisbare Qualifikation, Vertretung bei Urlaub und regelmäßige Fortbildung. Externe Fachkräfte bringen branchenübergreifende Erfahrung und Neutralität mit – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft Köln].",
      "In der Praxis scheitert die Betreuung oft an mündlichen Bestellungen ohne schriftliche Grundlage, fehlender vertraglich verankerter Arbeitszeit oder unzureichenden Zugangsrechten zu Gefahrstoffen und Maschinen. Das führt bei Berufsgenossenschafts-Prüfungen zu Lücken und erhöht das Haftungsrisiko.",
      "Health and Safety+ erstellt Bestellungen und übernimmt die Funktion der Fachkraft für Arbeitssicherheit in Köln und NRW – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber], [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann muss eine Fachkraft für Arbeitssicherheit bestellt werden?",
        answer:
          "Grundsätzlich jeder Arbeitgeber nach ASiG § 5 – intern oder extern. Umfang richtet sich nach DGUV Vorschrift 2 (Grund- und betriebsspezifische Betreuung). Ausnahmen nur in eng begrenzten Fällen prüfen.",
      },
      {
        question: "Was muss die schriftliche Bestellung enthalten?",
        answer:
          "Aufgaben, Betreuungsumfang, Arbeitszeit, Zugang zu Arbeitsstätten und Unterlagen, Qualifikation und Weisungsfreiheit bei sicherheitstechnischer Beratung. Mündliche Bestellungen reichen bei Prüfungen nicht.",
      },
      {
        question: "Gilt das in Köln und NRW?",
        answer:
          "Ja – ASiG und DGUV V2 gelten bundesweit. Berufsgenossenschaft und Gewerbeaufsicht in NRW prüfen Bestellung, Betreuungsplan und Jahresbericht betriebsspezifisch.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "Zu [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2], [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft Köln] und [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht].",
      },
    ],
  },
  {
    slug: "brandschutz-lithium-ionen-batterien",
    title: "Brandschutz bei Lithium-Ionen-Batterien – Gefahren, Ladezonen und Thermal Runaway",
    excerpt:
      "Li-Ion-Brandschutz im Betrieb: Thermal Runaway, Ladezonen, Quarantäne kritischer Batterien, Löschkonzept und Unterweisung – praxisnah für Köln und NRW.",
    date: "2025-03-18",
    dateModified: "2026-05-26",
    content: [
      "Lithium-Ionen-Batterien (LIB) sind in Betrieben längst Standard: Staplerflotten, interne E-Fahrzeuge, E-Bikes der Beschäftigten, Messgeräte, Akku-Werkzeuge, mobile IT und zunehmend PV-Speicher. Ihre hohe Energiedichte macht sie effizient – und im Brandfall schwer beherrschbar. Dieser Artikel ordnet die betrieblichen Pflichten ein; der [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz] verknüpft Li-Ion mit Gefahrstoffen, Prüffristen und Organisation – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Lithium-Ionen-Brände verhalten sich anders als klassische Feststoffbrände. Bei einem normalen Feststoffbrand löscht man Flammen und kühlt Brandlast. Bei LIB kann ein innerer Kurzschluss oder mechanischer Schaden einen Thermal Runaway auslösen – eine Kettenreaktion in der Zelle mit starker Wärme- und Gasfreisetzung, oft ohne äußere Flamme zuerst. Der Brand kann Stunden später wieder aufflammen; einmal gelöschte Pakete können erneut in Brand geraten. Deshalb reicht „Feuerlöscher wie üblich“ bei größeren Akkus oft nicht.",
      "Begriffe, die in der Gefährdungsbeurteilung und Unterweisung vorkommen sollten: Zelle (kleinste Einheit) und Modul/Pack (zusammengesetzte Batterie). Kritische LIB: beschädigt, aufgebläht, heiß nach Ladung, Geruch, unbekannte Herkunft oder nach Sturz/Wassereintritt – nicht weiter laden, sondern quarantänieren. Tiefentladung und unsachgemäßes Laden erhöhen Innenschäden. Quarantäne-/Sicherungsort: abgeschotteter Bereich mit Überwachung, Abstand zu brennbaren Stoffen, klare Kennzeichnung und Meldeweg an Leitung/BSB – kein offenes Regal im Flur.",
      "Rechtliche Einordnung im Betrieb: Die Brandgefährdung gehört in die Gefährdungsbeurteilung nach § 5 ArbSchG und ASR A2.2. Für elektrische Anlagen und Ladestationen ergänzen DGUV Information 205-041 und TRBS 3151 (Prüfung, Schutzmaßnahmen). Versicherer orientieren Ladeinfrastruktur oft an VdS 3885 (Abstände, Lüftung, Überwachung) – auch wenn nicht jede Ladezone formal zertifiziert ist, sind die Grundsätze faktischer Maßstab bei Audits.",
      "Im Betrieb treten LIB in vielen Formen auf: beim Stapler-Batteriewechsel und -lager, in Ladehäuschen im Hof, an E-Bike-Parkplätzen, in Werkstätten mit defekten Akku-Werkzeugen, bei Rücksendungen mit unbekanntem Akkuzustand, in Lade-Schränken für Geräte oder bei Firmenwagen mit Wallbox in der Tiefgarage. Je Szenario gelten andere Energiemengen und Maßnahmen – eine pauschale „Achtung Akku“-Unterweisung reicht nicht.",
      "Zur Vorbeugung bei der Handhabung gelten nur Original- oder vom Hersteller freigegebene Ladegeräte, kein mechanisches Beschädigen, keine Lagerung in der Sonne oder neben Heizquellen und Transport kritischer Zellen nur in zugelassenen Behältern. Privat-Akkus sollten nicht unkontrolliert in Büros geladen werden, wenn der Betrieb E-Bikes oder Geräte bereitstellt – die Regel gehört in BSO Teil B und Hausordnung. Elektrische Betriebsmittel und Leitungen: [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|DGUV V3].",
      "H2::Umsetzung in der Praxis",
      "Ladezonen planen: Ausreichender Abstand zwischen Ladestationen und zu brennbaren Lagern (Verpackung, Folien, Öle). Gute Belüftung oder Abluft bei geschlossenen Räumen; Rauch-/Wärmemelder und BMA-Zonen abstimmen mit [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragtem]. Keine zweite Nutzung des Laderaums als Archiv. Sichtbare Regeln: max. Ladezeit, wer meldet Aufblähung, wer schaltet bei Rauch ab. Fortschreibung der [Link: /wissen/blog/brandschutzordnung-din-14096|BSO], wenn Ladezonen neu dazukommen.",
      "Lager und Quarantäne: Volle und leere Staplerbatterien getrennt führen, wenn Hersteller/Versicherer es verlangen. Kritische LIB in feuerbeständigem oder zumindest abgeschottetem Bereich, nicht im Rettungsweg. Entsorgung nur über zertifizierte Entsorgungsfachbetriebe – keine Mülltonne. Dokumentation: Wer hat wann was in Quarantäne gelegt, wer hat Freigabe zur Entsorgung.",
      "Brandfall und Löschkonzept: Ziel ist Kühlung und Unterbindung der Kettenreaktion – bei größeren Packs oft viel Wasser (Wassernebel oder Strahl unter Schutzmaßnahmen), nicht „kurz CO₂ drauf“. [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] können Entstehungsbrände an kleinen Geräten begrenzen; bei Thermal Runaway an Stapler- oder Fahrzeugbatterien: Räumen, Bereich sperren, Feuerwehr (112), BMA. Kein Löschen um jeden Preis – Rauchgas und Wiederentzündung gefährden Helfer. BSO Teil B und Alarmplan müssen das Verhalten festhalten.",
      "Organisatorisch sollte der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] in Gefährdungsbeurteilung und Ladekonzept eingebunden sein. Alle Beschäftigten mit Zugang zum Ladebereich brauchen eine [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|jährliche Unterweisung], die Brandschutzhelfer-Schulung um LIB-Szenarien erweitert werden sollte. Sinnvoll sind Übungen wie „Rauch aus Ladehäuschen“ statt nur Bürobrand. Technische Brandmeldeanlagen und organisatorische Regeln greifen ineinander – siehe [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz]. Fluchtwege müssen frei bleiben, wenn E-Bikes im Flur abgestellt werden – ein Standardthema bei Begehungen.",
      "Häufige Befunde sind Ladekabel an Kartons, defekte Akkus im Werkzeugwagen, fehlende Quarantäne-Regeln oder Wallboxen in Tiefgaragen ohne Abstimmung mit Brandschutzkonzept, Bauaufsicht oder [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragtem]. Auch BMA-Störungen werden manchmal quittiert, während die Ladezone unverändert genutzt wird. Jeder Befund braucht eine Maßnahme mit Verantwortlichem und Frist – nicht nur ein Protokoll.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Ladezonen in der Gefährdungsbeurteilung verankert sein, Quarantäne-Regeln schriftlich vorliegen und Beschäftigte unterwiesen sein. Die Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt gehört dazu.",
      "Health and Safety+ unterstützt in Köln und NRW die Gefährdungsbeurteilung zu Brandgefahr mit Li-Ion-Schwerpunkt, Ladezonen-Konzept, BSO-Passagen, Unterweisung und Abstimmung mit Versicherer und Wartung – [Link: /brandschutz|Leistungen Brandschutz] (betrieblich und bauordnungsrechtlich). [Link: /kontakt|Kontakt], wenn Ladeinfrastruktur neu geplant oder nach einem Beinahe-Brand nachgesteuert werden soll.",
    ],
    faq: [
      {
        question: "Welche Betriebe brauchen ein Li-Ion-Löschkonzept?",
        answer:
          "Überall, wo Lithium-Ionen-Batterien geladen, gelagert oder repariert werden – Staplerflotten, E-Bikes, Werkzeuge, Wallboxen, PV-Speicher. Die Brandgefahr gehört in die Gefährdungsbeurteilung nach § 5 ArbSchG.",
      },
      {
        question: "Was ist Thermal Runaway und warum reicht CO₂ oft nicht?",
        answer:
          "Eine Kettenreaktion in der Zelle mit starker Wärme- und Gasfreisetzung. Der Brand kann stundenlang wieder aufflammen – bei größeren Packs ist Kühlung (Wasser/Wassernebel) oft nötig, nicht kurzes Löschen.",
      },
      {
        question: "Was sind typische Mängel bei Li-Ion-Brandschutz?",
        answer:
          "Ladezonen neben brennbaren Lagern, defekte Akkus ohne Quarantäne, fehlende Unterweisung, keine BMA-Abstimmung und Wallboxen ohne Abstimmung mit Brandschutzkonzept – häufig in Köln und NRW bei Begehungen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter], [Link: /wissen/blog/brandschutzordnung-din-14096|BSO DIN 14096] und [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz].",
      },
    ],
  },
  {
    slug: "brandschutz-brennbare-stoffe",
    title: "Brandschutz: Brennbare Stoffe – Brandverhalten und Maßnahmen im Betrieb",
    excerpt:
      "Brennbare Stoffe im Betrieb: Feststoff, Flüssigkeit, Gas und Staub – Brandverhalten, TRGS 800 und Lagerung – praxisnah für Köln und NRW.",
    date: "2025-03-20",
    dateModified: "2026-05-26",
    content: [
      "Brennbare Stoffe sind im Betrieb selten nur „ein Gefahrstoff im Regal“ – sie sind Papierstapel, Verpackungsfolien, Lackreste, Gase in Flaschen, Holzstaub in der Halle und Kühlschmiermittel-Dämpfe an der Maschine. Für Brandschutz und Arbeitssicherheit zählt das tatsächliche Brandverhalten vor Ort, nicht nur die Etikette auf dem Gebinde. Einordnung im Gesamtkonzept: [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz] und [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Aggregatzustände bestimmen die Gefahr: Feststoffe glimmen oder brennen ab (Holz, Kunststoff, Textil). Flüssigkeiten bilden oft zündfähige Dämpfe (Lösemittel, Kraftstoff, Reiniger). Gase und verdampfte Stoffe entzünden sich schnell. Stäube und Nebel können explosionsartig reagieren, wenn Konzentration und Zündquelle zusammentreffen – klassisch in Holzverarbeitung, Metallbearbeitung, Lebensmittel- und Chemieprozessen.",
      "Oberfläche schlägt Masse: Ein Holzblock schwärzt langsam; Holzwolle oder aufgewirbelter Staub entzündet sich deutlich schneller. Feine Metallspäne (Aluminium, Magnesium) können bei Funken oder Hitze heftig reagieren – in Werkstäten deshalb Absaugung, keine offenen Behälter mit Spänen neben Schleifmaschinen. Die 9-V-Batterie-Stahlwolle-Demo zeigt das Prinzip: große Oberfläche, kleine Energiezufuhr genügt.",
      "Kenngrößen – nur so viel wie die Gefährdungsbeurteilung braucht: Flammpunkt und Zündtemperatur bei Flüssigkeiten (wann entsteht zündfähiges Gemisch, wann Selbstentzündung). Untere Explosionsgrenze (UEG) bei Gasen und Stäuben für explosionsfähige Atmosphäre. Im Betrieb wichtiger als Formeln: Wo kann sich Dampf sammeln? Wo wird Staub aufgewirbelt? Wo liegt offene Flüssigkeit?",
      "Gefahrstoffrecht und Brandschutz: TRGS 800 verlangt Lagerung, Mengenbegrenzung und Betriebsanweisungen für brennbare Flüssigkeiten und Gase. Das Gefahrstoffverzeichnis und die Gefährdungsbeurteilung liefern die Substitutions- und Schutzmaßnahmen; [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen] müssen zum Lagerort passen, nicht nur in der Verwaltung liegen. TRGS-Überblick: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS einfach erklärt]. Brandschutzliche Maßnahmen: Abstand zu Zündquellen, Lüftung, Auffangwannen, keine Lagerung in Rettungswegen.",
      "Lager und Brandlasten: Getrennte Lager für brennbare Flüssigkeiten (Sicherheitschränke, Technikräume), Kennzeichnung, Begrenzung der Tagesmenge im Arbeitsbereich. Verpackungsmaterial und Papier nicht im Flur stapeln – wiederkehrender Befund bei Begehungen. Paletten und Folien in Lagern: Zugang zu Löschern und Meldern freihalten; Regalprüfung und Brandschutzbegehung zusammen denken.",
      "H2::Umsetzung in der Praxis",
      "Prozesse: Heißarbeit nur mit dokumentierter Freigabe (Schweißen neben Lösemittellager). Kühlschmierstoffe: Aerosole und Dämpfe an heißen Werkstücken, Funken von Werkzeugen – Absaugung und Reinigung. Lackierung, Druckerei, Reinigung: Lüftung und Explosionsschutz wo erforderlich. Nach Prozessänderung Gefährdungsbeurteilung und BSO Teil B anpassen.",
      "Staubexplosion vermeiden: Regelmäßige Reinigung statt „Staubschicht als Dämmung“, geerdete Absauganlagen, Funkenarmut bei Wartung, keine Druckluft-Reinigung in geschlossenen Räumen mit Staubbelastung ohne Konzept. Bei neuen Anlagen: Herstellerangaben und Gefährdungsbeurteilung vor Inbetriebnahme.",
      "Brandfall: Richtiges Löschmittel – Wasser nicht bei brennenden Metallen oder elektrischen Anlagen unter Spannung; Fettbrand in Küchen nicht mit Wasserstrahl. BSH und BSO Teil B regeln, wer löscht und wann Evakuierung Vorrang hat. [Link: /wissen/blog/brandschutzschulungen-unternehmen|Unterweisung] mit konkreten Stoffen des Standorts, nicht nur „ABC-Löscher“.",
      "Organisation: BSB und Fachkraft für Arbeitssicherheit gemeinsam begehen Lager und Werkstätten – ein Protokoll, zwei Bewertungsspalten (Gefahrstoff / Brandschutz). Alarmplan: Leckage brennbarer Flüssigkeit, Rauch aus Technikraum. Schnittstelle [Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion]: brennbare Stoffe neben Ladezonen sind verboten.",
      "Häufige Mängel sind Aceton-Reste im Büroregal, Folienrollen im Rettungsweg, offene Lacktonnen ohne Lüftung oder jahrelang angesammelter Staub unter Dachsparren. Jeder Befund braucht eine Maßnahme mit Verantwortlichem, Frist und Nachkontrolle.",
      "Health and Safety+ unterstützt in Köln und NRW Gefährdungsbeurteilungen zu Brand- und Gefahrstoffthemen, Lagerkonzepte nach TRGS 800, Betriebsanweisungen und brandschutzliche Begehungen. [Link: /kontakt|Kontakt] bei neuem Lager oder nach Beinahe-Brand mit brennbaren Stoffen.",
    ],
    faq: [
      {
        question: "Welche brennbaren Stoffe sind im Betrieb relevant?",
        answer:
          "Nicht nur Gefahrstoffe im Regal: Papier, Folien, Lacke, Gase, Holzstaub, Kühlschmiermittel-Dämpfe. Entscheidend ist das Brandverhalten vor Ort – in GBU und [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen] abbilden.",
      },
      {
        question: "Was regelt TRGS 800 für brennbare Stoffe?",
        answer:
          "Lagerung, Mengenbegrenzung, Betriebsanweisungen und Schutzmaßnahmen für brennbare Flüssigkeiten und Gase. Brandschutz und Gefahrstoffrecht greifen ineinander – ein Protokoll für beide Spalten bei Begehungen.",
      },
      {
        question: "Typische Mängel in Köln und NRW?",
        answer:
          "Aceton im Büroregal, Folien im Rettungsweg, offene Lacktonnen ohne Lüftung, Staubschichten unter Dachsparren und fehlende Heißarbeit-Freigabe neben Lösemittellager.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/trgs-einfach-erklaert|TRGS], [Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion-Brandschutz] und [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz].",
      },
    ],
  },
  {
    slug: "dguv-vorschrift-2",
    title: "DGUV Vorschrift 2 – Regeln und Pflichten für Unternehmen",
    excerpt:
      "DGUV Vorschrift 2 (Neufassung 2025): Grund- und betriebsspezifische Betreuung, Betreuungsplan, Bestellung und Jahresbericht – was Arbeitgeber in NRW umsetzen sollten.",
    date: "2025-03-22",
    dateModified: "2026-05-26",
    content: [
      "Die DGUV Vorschrift 2 regelt die betriebliche Betreuung durch Betriebsärzte und Fachkräfte für Arbeitssicherheit auf Grundlage des Arbeitssicherheitsgesetzes (ASiG). Die Neufassung von 2025 macht Pflichten, Betreuungsumfang und Dokumentation verständlicher – ohne das Schutzniveau zu senken. Für Arbeitgeber in Köln und NRW ist sie die zentrale Referenz neben der [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftlichen Bestellung] der Fachkraft für Arbeitssicherheit.",
      "H2::Was gilt rechtlich?",
      "Struktur der Vorschrift: Verpflichtende Regelungen sind von empfohlenen Regelungen getrennt. Klar definiert sind Grundbetreuung (abhängig von Betriebsart und Beschäftigtenzahl nach Anlagen in der DGUV V2) und betriebsspezifische Betreuung (zusätzlich nach den individuellen Gefährdungen des Betriebs – Maschinen, Gefahrstoffe, Höhenarbeit, psychische Belastung). Beide Anteile müssen im Betreuungsvertrag, in der Bestellung und im Betreuungsplan nachvollziehbar sein.",
      "Betreuungsplan und Jahresbericht: Der Arbeitgeber führt einen Betreuungsplan, der Grund- und Zusatzleistungen, Termine und Verantwortlichkeiten festhält. Die Fachkraft für Arbeitssicherheit erstellt nach § 5 DGUV V2 einen Jahresbericht für die Geschäftsführung – Inhalte: Gefährdungsbeurteilungen, Begehungen, Unterweisungen, Unfälle, offene Maßnahmen, Vorschläge für das kommende Jahr. Der Bericht ist keine Formalität, sondern Steuerungsinstrument für den [Link: /wissen/blog/akteure-arbeitsschutz|Arbeitsschutzausschuss] bei mehr als 20 Beschäftigten.",
      "Digitale Betreuung: Teile der betriebsärztlichen und sicherheitstechnischen Betreuung können digital erfolgen – sinnvoll bei mehreren Standorten, Außendienst und Homeoffice. Grenzen bleiben: [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen] mit Verständnisabfrage, Begehungen und Wirksamkeitskontrollen vor Ort sind oft unverzichtbar.",
      "H2::Umsetzung in der Praxis",
      "Zur Qualifikation der Fachkraft für Arbeitssicherheit gelten neben klassischen technischen Fachrichtungen unter Voraussetzungen auch andere Studiengänge wie Psychologie oder Biologie – relevant für [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische Gefährdungsbeurteilungen] und ganzheitliche Betrachtung von Arbeitsbedingungen.",
      "Kleinstbetriebe: Die Vorschrift sieht zugänglichere Modelle vor, wenn das Gefährdungspotenzial es erlaubt – nicht weniger Schutz, sondern angepasste Intensität und Dokumentation.",
      "Nach der Neufassung 2025 zeigen sich häufig alte Betreuungsverträge ohne Anpassung, zu wenig eingeplante Arbeitszeit der Fachkraft für Arbeitssicherheit, psychische Belastung weiterhin ohne GBU-Eintrag oder Jahresberichte ohne Bezug zu real umgesetzten Maßnahmen.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Betreuungsplan, Bestellung und Jahresbericht auf dem aktuellen Stand sein und die Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt nachweisbar sein.",
      "Health and Safety+ passt Betreuungsverträge, Bestellungen und Betreuungspläne in Köln und NRW an die DGUV V2 an – intern oder extern als [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|Fachkraft für Arbeitssicherheit]. Einordnung im DGUV-Regelwerk: [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV einfach erklärt]. Vertiefung: [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz im Unternehmen], [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt die DGUV Vorschrift 2?",
        answer:
          "Betriebliche Betreuung durch Betriebsärzte und Fachkräfte für Arbeitssicherheit: Grund- und betriebsspezifische Anteile, Betreuungsplan, Bestellung und SiFa-Jahresbericht nach ASiG.",
      },
      {
        question: "Was ändert die Neufassung 2025?",
        answer:
          "Klarere Trennung verpflichtender und empfohlener Regelungen, präzisere Definition von Grund- und Zusatzbetreuung, Regelungen zur digitalen Betreuung – Schutzniveau bleibt gleich.",
      },
      {
        question: "Typische Mängel bei DGUV V2-Umsetzung?",
        answer:
          "Alte Betreuungsverträge, zu wenig eingeplante SiFa-Zeit, fehlende GBU zu psychischer Belastung, Jahresberichte ohne Bezug zu umgesetzten Maßnahmen – auch in Köln und NRW häufig.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung SiFa], [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Hub] und [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|Jahresbericht].",
      },
    ],
  },
  {
    slug: "asr-a2-2-brandschutzhelfer",
    title: "ASR A2.2 Brandschutzhelfer – Anzahl, Schulung und Pflicht",
    excerpt:
      "Brandschutzhelfer nach ASR A2.2 und DGUV 205-023: Anzahl (in der Regel 5 %), Schulungsdauer und Wiederholung – praxisnah für Köln und NRW.",
    date: "2025-05-11",
    dateModified: "2026-05-26",
    content: [
      "Die ASR A2.2 „Maßnahmen gegen Brände“ verpflichtet Arbeitgeber, eine ausreichende Anzahl von Brandschutzhelfern auszubilden und zu unterweisen. Sie sind die operativen Helfer in den ersten Minuten eines Brandes – nicht der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte], der organisiert und berät. Überblick ASR: [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt]. Rechtlich ergänzen sich ArbStättV, ASR A2.2, die [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] Teil B und die DGUV Information 205-023 (Ausbildung und Befähigung von Brandschutzhelfern) – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Warum Brandschutzhelfer trotz BMA? Technische Anlagen melden und entrauchen – sie löschen aber keine Entstehungsbrände an Papierkörben, Küchen oder Maschinen. In den ersten Minuten entscheidet menschliches Handeln über Evakuierung und begrenztes Löschen. Wer nur auf die Brandmeldeanlage setzt, ohne ausgebildete Helfer, hat eine Lücke in der betrieblichen Organisation.",
      "Anzahl: ASR A2.2 Abs. 7.3 verlangt eine ausreichende Anzahl – aus der Gefährdungsbeurteilung (Brandgefahr). Ein Anteil von 5 % der Beschäftigten ist in der Regel ausreichend; bei erhöhter Brandgefährdung, vielen Personen, eingeschränkter Mobilität oder großer räumlicher Ausdehnung können mehr erforderlich sein. Schichtbetrieb, Urlaub und Krankheit einplanen – in Kleinstbetrieben mindestens eine qualifizierte Person pro relevantem Bereich oder Schicht.",
      "Abgrenzung: Die jährliche Brandschutzunterweisung aller Beschäftigten nach § 12 ArbSchG (BSO Teil B) ersetzt nicht die fachkundige Unterweisung der benannten Brandschutzhelfer nach ASR A2.2 und DGUV Information 205-023 – inklusive Löschübung.",
      "Ausbildungsinhalte nach ASR A2.2 und DGUV Information 205-023 umfassen Brandgefahren und -klassen, die betriebliche Brandschutzorganisation (Brandschutzordnung, Alarm, Sammelstelle), Verhalten im Brandfall mit Priorität Menschenrettung und Evakuierung vor riskantem Löschen, Wirkungsweise von Löschmitteln, Handhabung tragbarer Feuerlöscher und gegebenenfalls Wandhydranten. Brandschutzhelfer bekämpfen nur Entstehungsbrände und ziehen sich bei Überwältigung sofort zurück. Sie lernen den Umgang mit Rauch (niedrig bleiben), verzichten auf Aufzüge und wissen, wie sie mit der Feuerwehr zusammenarbeiten – etwa durch freihaltende Zufahrten und benannte Ansprechpartner.",
      "CO₂-Löscher und Spezialfälle: Nur wenn im Betrieb vorgesehen und in der Ausbildung behandelt – streng nach DGUV 205-034 (Erstickungsgefahr, Einsatzart, kein wahloses Löschen in Serverräumen). Fettbrand in Küchen: kein Wasser, passende Löschgeräte. Wandhydrant: Schlauchführung und Teamarbeit üben, nicht nur Theorie.",
      "H2::Umsetzung in der Praxis",
      "Dauer und Ablauf nach DGUV Information 205-023: mindestens 2 Unterrichtseinheiten à 45 Minuten Theorie (Brandgefahren, betriebliche Organisation, Verhalten im Brandfall, Löschmittel und Feuerlöscher) plus eine praxisbezogene Übungseinheit. Pro Teilnehmer sind erfahrungsgemäß etwa 5 bis 10 Minuten Übungszeit an Feuerlöscheinrichtungen oder am Brandsimulator vorgesehen – die Gesamtdauer liegt damit meist bei etwa drei bis vier Unterrichtseinheiten, nicht bei einem ganzen Tag. Betriebsspezifische Besonderheiten (Alarmkette, Fluchtwege, Küche, Wandhydrant) können Theorie und Praxis verlängern. Abschluss: Einweisung in den betrieblichen Zuständigkeitsbereich und schriftlicher Nachweis mit Datum und Unterrichtseinheiten. Der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] oder die Fachkraft für Arbeitssicherheit stimmen Inhalt und Dokumentation mit der Gefährdungsbeurteilung ab.",
      "Wiederholung: ASR A2.2 empfiehlt für normale Brandgefährdung, die fachkundige Unterweisung mit Löschübung in Abständen von zwei bis fünf Jahren zu wiederholen – das konkrete Intervall legt der Arbeitgeber in der Gefährdungsbeurteilung fest. Nach wesentlichen betrieblichen Änderungen (Umbau, neue Küche, neue Löschtechnik, Personalwechsel in Schlüsselbereichen) ist eine anlassbezogene Auffrischung der betroffenen Brandschutzhelfer erforderlich.",
      "Löscheinrichtungen nach ASR A2.2: Grundausstattung mit Handfeuerlöschern nach Grundfläche und Brandgefahr; maximal etwa 20 Meter zum nächsten Löscher, Wartung alle zwei Jahre durch Fachkundigen. BSH kennen Standorte und prüfen bei Begehungen Erreichbarkeit – Wartung bleibt beim Fachbetrieb ([Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber Prüffristen]).",
      "Dokumentation: schriftliche Festlegung der Anzahl und Namen, Ausbildungsnachweise, Vertretungsregel pro Schicht, Einsatz in Übungsprotokollen. In der Praxis zeigen sich häufig benannte Brandschutzhelfer ohne Schulung, Unterweisungen ohne Löschpraxis, fehlende Abdeckung der Nachtschicht oder die Verwechslung mit Ersthelfern und der allgemeinen Brandschutzunterweisung aller Beschäftigten.",
      "Health and Safety+ plant in Köln und NRW die Anzahl Brandschutzhelfer, führt Schulungen nach ASR A2.2/DGUV 205-023 durch und verknüpft sie mit BSO und Evakuierungsübungen. [Link: /kontakt|Kontakt] zur Bestandsaufnahme.",
    ],
    faq: [
      {
        question: "Wie viele Brandschutzhelfer braucht ein Betrieb?",
        answer:
          "ASR A2.2 verlangt eine ausreichende Anzahl aus der Gefährdungsbeurteilung – in der Regel etwa 5 % der Beschäftigten, bei erhöhter Brandgefahr mehr. Schichtbetrieb und Vertretung einplanen.",
      },
      {
        question: "Wie lange dauert die Ausbildung?",
        answer:
          "Nach DGUV Information 205-023 mindestens 2 UE Theorie plus praxisbezogene Löschübung – insgesamt meist drei bis vier UE. Wiederholung alle zwei bis fünf Jahre, anlassbezogen nach Umbauten.",
      },
      {
        question: "Typische Mängel bei Brandschutzhelfern?",
        answer:
          "Benannt aber nie geschult, Schulung ohne Löschpraxis, keine Nachtschicht abgedeckt, Verwechslung mit Ersthelfer oder allgemeiner Brandschutzunterweisung aller Beschäftigten.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/brandschutzordnung-din-14096|BSO DIN 14096], [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] und [Link: /wissen/blog/asr-einfach-erklaert|ASR-Hub].",
      },
    ],
  },
  {
    slug: "unterweisung-arbeitsschutz-fristen",
    title: "Unterweisung im Arbeitsschutz – Fristen, Inhalte und Dokumentation",
    excerpt:
      "Unterweisung nach § 12 ArbSchG: Pflichten, Anlässe, Inhalte aus der Gefährdungsbeurteilung, Dokumentation und Präsenzanforderungen – praxisnah für Köln und NRW.",
    date: "2025-05-13",
    dateModified: "2026-05-26",
    content: [
      "Die Unterweisung der Beschäftigten ist nach § 12 ArbSchG eine zentrale Pflicht des Arbeitgebers. Sie leitet sich in erster Linie aus der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] ab: Beschäftigte sollen die am Arbeitsplatz bestehenden Unfall- und Gesundheitsgefahren kennen und sich entsprechend den festgelegten Schutzmaßnahmen verhalten. Die Fachkraft für Arbeitssicherheit und der Betriebsarzt wirken bei Inhalt und Durchführung mit – die Verantwortung für ausreichende und angemessene Unterweisung während der Arbeitszeit bleibt beim Arbeitgeber – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Nach § 12 Abs. 1 ArbSchG verlangt der Gesetzgeber Anweisungen und Erläuterungen, die auf den Arbeitsplatz oder Aufgabenbereich ausgerichtet sind. Unterweisen müssen Sie bei der Einstellung, bei Veränderungen im Aufgabenbereich, bei Einführung neuer Arbeitsmittel oder Technologien – jeweils vor Aufnahme der Tätigkeit. Die Unterweisung ist an die Gefährdungsentwicklung anzupassen und erforderlichenfalls regelmäßig zu wiederholen. In der betrieblichen Praxis und nach Auslegung der Arbeitsschutzverwaltung NRW bedeutet das für Beschäftigte in der Regel mindestens eine jährliche Unterweisung; jugendliche Auszubildende sind nach § 29 JArbSchG mindestens halbjährlich zu unterweisen – [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|Jugendarbeitsschutz].",
      "Anlassbezogene Unterweisung ist zusätzlich erforderlich, wenn sich die Gefährdungslage ändert – etwa nach Fortschreibung der Gefährdungsbeurteilung, Umbauten, neuen Stoffen oder nach Arbeitsunfällen und Beinahe-Ereignissen. Bei Arbeitnehmerüberlassung trägt der Entleiher die Unterweisungspflicht nach § 12 Abs. 2 ArbSchG; der Verleiher muss sicherstellen, dass vor Tätigkeitsbeginn unterwiesen wurde. Leiharbeitnehmer, Werkstudenten und befristet Beschäftigte unterliegen derselben Pflicht.",
      "Inhalte orientieren sich an den Ergebnissen der Gefährdungsbeurteilung: arbeitsplatzspezifische Gefahren, Maßnahmen nach dem STOP-Prinzip (Substitution, Technik, Organisation, Person), Verhalten im Notfall (Brand, Verletzung, Evakuierung), persönliche Schutzausrüstung und ergonomische Regeln. Querschnittsthemen wie [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz], [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit] oder Gefahrstoffe werden arbeitsplatzbezogen verknüpft – nicht als generische Standardfolien ohne Bezug zum Betrieb. Für Gefahrstoffe gelten ergänzend § 14 GefStoffV und TRGS 555; für Arbeitsmittel § 12 BetrSichV.",
      "H2::Umsetzung in der Praxis",
      "Form und Durchführung: Die Unterweisung erfolgt während der Arbeitszeit, in verständlicher Sprache und mit Möglichkeit zur Verständnisabfrage. Digitale oder EDV-gestützte Formate sind zulässig, wenn Beschäftigte bei Fragen eine Ansprechperson erreichen und das Verständnis nachweisbar ist. Für Themen wie PSA (§ 3 PSA-BV), Biostoffe (§ 14 BioStoffV), Gefahrstoffe (§ 14 Abs. 2 GefStoffV) und die Verwendung von Arbeitsmitteln (§ 12 BetrSichV) empfiehlt die Arbeitsschutzverwaltung NRW die Durchführung in Präsenz – mit Demonstration am Arbeitsplatz, wo es die Gefährdung erfordert.",
      "Dokumentation: Unterweisungen sind nachvollziehbar festzuhalten – Datum, Thema, Teilnehmer, unterweisende Person, Bezug zur Version der Gefährdungsbeurteilung oder Betriebsanweisung. Getrennte Nachweise für Arbeitsschutz, Gefahrstoffe und Brandschutz erleichtern Audits durch Berufsgenossenschaft und Gewerbeaufsicht. Lücken entstehen typischerweise, wenn die Unterweisung älter als ein Jahr ist, die Gefährdungsbeurteilung oder Brandschutzordnung aber kürzlich geändert wurde.",
      "Häufig fehlt eine fachliche Unterweisung am Arbeitsplatz und es bleibt bei einer allgemeinen HR-Einführung. Nach Umbauten oder Prozessänderungen wird oft keine Nachunterweisung durchgeführt, oder die Unterweisung erfolgt in einer Sprache, die Beschäftigte nicht verstehen, ohne Dolmetschung oder verständliche Visualisierung. Für Jugendliche gelten besondere Regeln – [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|halbjährliche Unterweisung und Aushang]. Health and Safety+ – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz im Unternehmen]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie oft muss unterwiesen werden?",
        answer:
          "Bei Einstellung, bei Veränderungen, vor neuen Arbeitsmitteln – und erforderlichenfalls regelmäßig wiederholt. In NRW in der Praxis mindestens jährlich; Auszubildende halbjährlich nach JArbSchG.",
      },
      {
        question: "Was muss dokumentiert werden?",
        answer:
          "Datum, Thema, Teilnehmer, unterweisende Person, Bezug zur GBU- oder Betriebsanweisungsversion. Getrennte Nachweise für Arbeitsschutz, Gefahrstoffe und Brandschutz erleichtern Audits.",
      },
      {
        question: "Darf Unterweisung digital erfolgen?",
        answer:
          "Ja, wenn Verständnis nachweisbar und Ansprechperson erreichbar ist. Für PSA, Gefahrstoffe und Arbeitsmittel empfiehlt die Arbeitsschutzverwaltung NRW oft Präsenz mit Demonstration am Arbeitsplatz.",
      },
      {
        question: "Typische Mängel in Köln und NRW?",
        answer:
          "Unterweisung älter als ein Jahr bei geänderter GBU, nur HR-Einführung statt arbeitsplatzbezogener Unterweisung, fehlende Nachunterweisung nach Umbau, Sprache ohne Verständlichkeit.",
      },
    ],
  },
  {
    slug: "gefaehrdungsbeurteilung-ablauf",
    title: "Gefährdungsbeurteilung erstellen – Ablauf, Pflichten und Aktualisierung",
    excerpt:
      "Gefährdungsbeurteilung nach § 5 und § 6 ArbSchG: systematischer Ablauf, Mitwirkung, Dokumentation und Fortschreibung – für Betriebe in Köln und NRW.",
    date: "2025-05-15",
    dateModified: "2026-05-26",
    content: [
      "Nach § 5 ArbSchG hat der Arbeitgeber durch eine Beurteilung der mit der Arbeit verbundenen Gefährdung zu ermitteln, welche Maßnahmen des Arbeitsschutzes erforderlich sind. Die Gefährdungsbeurteilung ist damit die Grundlage für [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen], Betriebsanweisungen, Investitionen und Themen im Arbeitsschutzausschuss. Sie gilt für jeden Betrieb – unabhängig von Branche und Beschäftigtenzahl – und umfasst alle Arbeitsbereiche, für die der Arbeitgeber Einfluss hat (einschließlich Homeoffice, Zeitarbeit und Tätigkeiten bei Kunden) – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Nach § 5 Abs. 2 ArbSchG erfolgt die Beurteilung je nach Art der Tätigkeiten; bei gleichartigen Arbeitsbedingungen genügt die Beurteilung eines repräsentativen Arbeitsplatzes oder einer Tätigkeit. In § 5 Abs. 3 sind Gefährdungsquellen benannt: Arbeitsstätte und Arbeitsplatz, physikalische, chemische und biologische Einwirkungen, Arbeitsmittel und -stoffe, Arbeits- und Fertigungsverfahren, Arbeitszeit und deren Zusammenwirken, Qualifikation und Unterweisung sowie psychische Belastung. Ergänzend gelten Fachvorschriften wie ArbStättV, BetrSichV, GefStoffV, BioStoffV, Lärm- und [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Mutterschutzrecht] (vorausschauend § 10 MuSchG) sowie Schnittstellen bei mehreren Arbeitgebern auf Baustellen.",
      "Bewährtes Vorgehen (orientiert an der Arbeitsschutzverwaltung NRW): (1) Vorbereitung und Abgrenzung der Bereiche, (2) Ermittlung der Gefährdungen – idealerweise mit Beteiligung der Beschäftigten, die ihre Arbeitsplätze am besten kennen, (3) Beurteilung des Risikos mit nachvollziehbarer Methode, (4) Festlegen konkreter Maßnahmen nach dem STOP-Prinzip (Substitution, Technik, Organisation, Person), (5) Umsetzung mit Verantwortlichen, Fristen und Ressourcen, (6) Überprüfung der Wirksamkeit, (7) Fortschreibung bei Änderungen, (8) Dokumentation nach § 6 ArbSchG. Vertiefung mit Tabellen und Beispielen: [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber Gefährdungsbeurteilung].",
      "Verantwortung und Mitwirkung: Die Gefährdungsbeurteilung obliegt dem Arbeitgeber. Fachlich erstellen und begleiten in der Regel die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und der Betriebsarzt; Beschäftigte und Führungskräfte liefern IST-Wissen aus dem Arbeitsalltag. Der Arbeitgeber bestätigt das Ergebnis, stellt Mittel bereit und setzt Maßnahmen um – eine dokumentierte Beurteilung ohne Umsetzung und Wirksamkeitskontrolle erfüllt die Pflicht nach § 3 ArbSchG nicht.",
      "H2::Umsetzung in der Praxis",
      "Fortschreibung: Die Gefährdungsbeurteilung ist keine einmalige Akte. Sie ist bei Bedarf zu aktualisieren – unverzüglich bei maßgeblichen Änderungen der Arbeitsbedingungen, neuen Arbeitsverfahren oder Arbeitsmitteln, neuen Erkenntnissen (Stand der Technik), Erfordernissen aus der arbeitsmedizinischen Vorsorge, Fristen aus Arbeitsschutzvorschriften, wenn Schutzmaßnahmen nicht wirksam sind oder nach einem Arbeitsunfall. Ergänzend empfiehlt sich ein planmäßiger Review, etwa im Jahresrhythmus mit der Fachkraft für Arbeitssicherheit.",
      "Dokumentation nach § 6 ArbSchG: Der Arbeitgeber muss Unterlagen führen, aus denen Ergebnis der Beurteilung, festgelegte Maßnahmen und das Ergebnis ihrer Überprüfung ersichtlich sind – inhaltlich je nach Art der Tätigkeiten und Zahl der Beschäftigten. Praxis: Bewertungsmethode, Maßnahmen mit Verantwortlichem und Termin, Nachweise der Wirksamkeitskontrolle, Version und Datum. Bei Prüfungen durch Berufsgenossenschaft und Gewerbeaufsicht zählt die Nachvollziehbarkeit vom IST-Zustand bis zur umgesetzten Maßnahme.",
      "Häufig liegen generische Textbausteine ohne Begehung vor, Maßnahmen ohne Verantwortliche und Fristen oder die psychische Belastung fehlt ganz. Auch Widersprüche zwischen aktualisierter Gefährdungsbeurteilung und veralteten Unterweisungsnachweisen sind typisch. Fallberichte aus der Beratung: [Link: /wissen/blog/ergonomie-kueche-kita-gefaehrdungsbeurteilung|Ergonomie in der KiTa-Küche], [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische Belastung]. Health and Safety+ – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz im Unternehmen]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer ist für die Gefährdungsbeurteilung verantwortlich?",
        answer:
          "Der Arbeitgeber nach § 5 ArbSchG. Fachlich erstellen und begleiten in der Regel SiFa und Betriebsarzt; Beschäftigte liefern IST-Wissen. Dokumentation ohne Umsetzung erfüllt die Pflicht nicht.",
      },
      {
        question: "Wann muss die GBU fortgeschrieben werden?",
        answer:
          "Unverzüglich bei maßgeblichen Änderungen, neuen Arbeitsmitteln, neuen Erkenntnissen, nach Unfällen oder wenn Maßnahmen nicht wirksam sind – ergänzend planmäßiger Review etwa jährlich.",
      },
      {
        question: "Was muss nach § 6 ArbSchG dokumentiert sein?",
        answer:
          "Ergebnis der Beurteilung, festgelegte Maßnahmen, Ergebnis der Wirksamkeitsprüfung – mit Bewertungsmethode, Verantwortlichen, Fristen und Version.",
      },
      {
        question: "Typische Mängel bei GBU in NRW?",
        answer:
          "Generische Textbausteine ohne Begehung, Maßnahmen ohne Verantwortliche, fehlende psychische Belastung, Widerspruch zwischen GBU und Unterweisungsnachweisen.",
      },
    ],
  },
  {
    slug: "sigeko-kosten-honorar-orientierung",
    title: "SiGeKo-Kosten und Honorar – Orientierung für Bauherren und Planer",
    excerpt:
      "SiGeKo-Honorar nach BaustellV: Leistungsumfang, Kalkulationsfaktoren, Vertragsmodelle und typische Angebotsmängel – Orientierung für Bauherren in NRW.",
    date: "2025-05-05",
    dateModified: "2026-05-26",
    content: [
      "Wer ein Bauvorhaben mit mehreren Unternehmen oder Selbstständigen plant, muss die Sicherheits- und Gesundheitsschutzkoordination (SiGeKo) nach Baustellenverordnung (BaustellV) und Regeln zum Arbeitsschutz auf Baustellen (RAB 30) einplanen. Die Frage nach den Kosten ist berechtigt – seriöse Antworten beginnen beim dokumentierten Leistungsumfang, nicht bei einer pauschalen Angabe pro Quadratmeter Baufläche – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Das Honorar folgt in erster Linie dem Aufwand in Vorplanung und Ausführung. In der Vorplanung entstehen Prüfung und Abstimmung der Planungsunterlagen, Erstellung und Fortschreibung des SiGe-Plans, Bewertung besonders gefährlicher Arbeiten nach Anhang II BaustellV sowie die Vorbereitung von Vorankündigung und Baustellenordnung. In der Ausführungsphase dominieren projektbezogene Einweisungen, Baustellenbegehungen, Koordination bei Lageänderungen, Übergabeprotokolle zwischen Bauabschnitten und die Nachverfolgung offener Maßnahmen. Ein Einfamilienhaus-Neubau und ein innerstädtischer Umbau mit Abbruch, parallelen Gewerken und ergänzender Gefährdungsbeurteilung liegen in unterschiedlichen Größenordnungen.",
      "Kalkulationsfaktoren, die in jedes Angebot gehören: Bauzeit und Schichtmodell, Anzahl der einweisenden Unternehmen, Häufigkeit und Tiefe der Begehungen, Versionierungsbedarf des SiGe-Plans, Anteil Anhang-II-Arbeiten, Logistik und Verkehrssicherung, Betrieb in sensiblen Umgebungen (Nachbarschaft, laufender Betrieb) sowie Zusatzleistungen wie übergeordnete Gefährdungsbeurteilung oder Prüfung von Gewerke-Gefährdungsbeurteilungen. Veröffentlichte Honorarrahmen von Kammern oder Fachverbänden können als Vergleich dienen, ersetzen aber keine projektbezogene Leistungsbeschreibung.",
      "Vertraglich bewährt sind Leistungsverzeichnisse mit klaren Bausteinen: Pauschale je Projektphase (Vorplanung / Ausführung), Monatspauschale bei Dauerbaustellen, Stundensätze mit Obergrenze oder Paketpreise für kleinere Vorhaben. Entscheidend sind verbindlich benannte Mengen – etwa Anzahl Begehungen, Einweisungen, Planversionen – sowie Regelungen zu Mehrleistungen, Erreichbarkeit und Reaktionszeiten bei akuten Mängeln. Fehlende Punkte im Vertrag führen später zu Nachforderungen und Streit über den Pflichtumfang.",
      "Angebote mit nur „SiGe-Plan ohne Koordination“ oder ohne Ausführungsphase decken die Pflichten des Bauherrn nach BaustellV in der Regel nicht ab. Gleiches gilt, wenn Begehungen, Einweisungen oder die Vorankündigung nicht beschrieben sind. Der Bauherr bleibt verantwortlich – auch bei externer Vergabe –; das Honorar sollte deshalb den nachweisbaren Pflichtenkatalog abdecken, nicht nur ein Planungsdokument.",
      "H2::Umsetzung in der Praxis",
      "Wirtschaftlich betrachtet lohnt sich eine vollständige Koordination: dokumentierte Begehungen und ein aktueller SiGe-Plan verringern das Risiko von Baustellenstillständen durch Berufsgenossenschaft oder Gewerbeaufsicht, Nacharbeiten an Absturzsicherungen und Konflikten zwischen Gewerken. Das Honorar ist damit Teil des Projektrisikomanagements, nicht eine Nebenposition.",
      "Abgrenzung: Der SiGeKo koordiniert das Zusammenwirken der Unternehmen auf der Baustelle. Er ersetzt weder die Gefährdungsbeurteilung und Organisation der ausführenden Betriebe noch die Fachkraft für Arbeitssicherheit im späteren Betrieb noch den betrieblichen Brandschutz nach Eröffnung. Rollen und Honorare sollten im Angebot getrennt ausgewiesen werden.",
      "In Köln und NRW erhöhen innerstädtische Logistik, Abbruchphasen und parallele Gewerke den Koordinationsaufwand spürbar – das gehört in die Kalkulation, nicht auf die Schlussrechnung. Vertiefung Leistungskatalog Bestand: [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Innenausbau im Bestand]. Köln-spezifische Faktoren: [Link: /wissen/blog/sigeko-koeln-kosten|SiGeKo-Kosten Köln].",
      "H2::Typische Mängel und Vorbereitung",
      "Bei der Angebotsprüfung sollten Sie klären, ob Vorplanung und Ausführungsphase abgedeckt sind, Begehungen und Einweisungen verbindlich benannt werden und Mehrleistungen bei Lageänderungen geregelt sind. Ein Angebot nur für den SiGe-Plan ohne Koordination deckt die BaustellV-Pflichten in der Regel nicht ab.",
      "Health and Safety+ erstellt SiGeKo-Angebote für Köln und NRW auf Basis von Leistungsverzeichnis und Risikoprofil. Grobe Orientierung: [Link: /wissen/rechner|Honorar-Rechner]. Pflichten und Ablauf: [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo auf der Baustelle], [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Wann SiGeKo Pflicht ist]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wovon hängt das SiGeKo-Honorar ab?",
        answer:
          "Von Bauzeit, Anzahl Gewerke, Begehungstiefe, Anhang-II-Anteil, Logistik und ob Vorplanung und Ausführung abgedeckt sind – nicht von pauschalem Euro pro Quadratmeter.",
      },
      {
        question: "Was sollte im Leistungsverzeichnis stehen?",
        answer:
          "Pauschalen je Phase oder Monatspauschale, verbindliche Mengen (Begehungen, Einweisungen, Planversionen), Mehrleistungsregelung und Reaktionszeiten bei akuten Mängeln.",
      },
      {
        question: "Typische Angebotsmängel?",
        answer:
          "SiGe-Plan ohne Ausführungsphase, keine Begehungen, fehlende Vorankündigung, Generalunternehmer-Modell ohne SiGeKo – in Köln und NRW häufig bei innerstädtischen Umbauten.",
      },
      {
        question: "Wo Orientierung finden?",
        answer:
          "[Link: /wissen/rechner|Honorar-Rechner], [Link: /wissen/blog/sigeko-koeln-kosten|Kosten Köln] und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      },
    ],
  },
  {
    slug: "brandschutz-sachverstaendiger-koeln",
    title: "Brandschutz Sachverständiger in Köln – Abgrenzung, Aufgaben und wann nötig",
    excerpt:
      "Brandschutz-Sachverständiger und Brandschutzbeauftragter: Abgrenzung, Aufgaben im Genehmigungsverfahren und betriebliche Organisation in Köln und NRW.",
    date: "2025-04-22",
    dateModified: "2026-05-26",
    content: [
      "Der Begriff „Brandschutz-Sachverständiger“ wird häufig mit dem [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragten] verwechselt – es sind getrennte Rollen. Der Sachverständige im bauordnungsrechtlichen Sinne erstellt oder prüft Nachweise für die Bauaufsicht: Brandschutzkonzept, Brandschutznachweis, Stellungnahmen bei Abweichungen von Technischen Baubestimmungen, Begleitung von Sonderbauten und Nutzungsänderungen. Der Brandschutzbeauftragte organisiert den laufenden betrieblichen Brandschutz nach ArbStättV und DGUV Information 205-003. Beide können zusammenarbeiten, ersetzen einander nicht – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Zu den Leistungen eines Brandschutz-Sachverständigen gehören Erarbeitung von Brandschutzkonzept und -nachweis nach Bauordnung NRW, Bewertung von Flucht- und Rettungswegen, Brandabschnitten und Feuerwiderständen im Planungsstadium, Abstimmung mit Architektur und technischer Gebäudeausrüstung, Begleitung im Baugenehmigungsverfahren sowie Gutachten im Bestand bei Nutzungsänderungen, behördlichen Auflagen oder Versichereranforderungen. Vertiefung: [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept erstellen], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Bauordnung NRW – Brandschutz].",
      "Wann ein Sachverständiger erforderlich oder faktisch unverzichtbar ist: bei Sonderbauten (Versammlungsstätten, Krankenhäuser, Hochhäuser, Industriebau), komplexen Nutzungsänderungen, Abweichungen vom Muster-Vorhaben, Prüfungen durch die Bauaufsicht oder beauftragte Prüfsachverständige, sowie bei Auflagen von Versicherern. Ein einfaches Bürogebäude im Regelbau ohne Abweichungen benötigt oft kein separates Konzept – für den Betrieb nach Eröffnung gelten dennoch [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz], Brandschutzordnung und Unterweisungen.",
      "Zur Qualifikation und Prüfung: Brandschutznachweise erfordern fundierte Kenntnisse der Bauordnung, Technischer Baubestimmungen und brandschutztechnischer Planung – deutlich über der Ausbildung des Brandschutzbeauftragten (organisatorischer Schwerpunkt, DGUV 205-003). Die Bauaufsicht oder ein Prüfsachverständiger prüft, ob die vorgelegte Sachkunde zum Vorhaben passt. Konzeptautor und Prüfer sollten getrennt sein, wenn Interessenkonflikte drohen – als Bauherr oder Betreiber die Rollen und Ansprechpartner vorab klären.",
      "Im Genehmigungsverfahren verläuft der Ablauf vereinfacht so: Planung und Abstimmung, Erstellung von Konzept und Nachweis, Einreichung bei der Bauaufsicht, Prüfung, etwaige Auflagen und bauliche Umsetzung bis zur Abnahme. Parallel sollte der betriebliche Brandschutz vorbereitet werden ([Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung], Brandmeldekonzept, [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer]), damit nach Eröffnung genehmigte Planung und IST-Betrieb übereinstimmen.",
      "H2::Umsetzung in der Praxis",
      "Bestand und Umbau in Köln und NRW: typische Anlässe sind Umnutzung Gewerbe zu Wohnen, Hotel-Erweiterungen, Umwidmung von Lager- in Büroflächen oder Aufstockungen. Dann sind IST-Aufnahme, Abgleich mit früheren Genehmigungen und ein angepasstes brandschutztechnisches Konzept erforderlich. Der Brandschutzbeauftragte im Betrieb dokumentiert laufende Mängel; bauordnungsrechtliche Bewertung und Nachweise obliegen dem Sachverständigen.",
      "Nach Eröffnung endet die Rolle des Sachverständigen im Genehmigungsverfahren nicht automatisch: größere Umbauten, neue Auflagen oder Nutzungsänderungen können erneute Nachweise erfordern. Unterweisungen, Wartung von Brandmeldeanlage und Löscheinrichtungen, Übungen und Begehungen liegen beim Arbeitgeber bzw. Brandschutzbeauftragten – nicht beim Sachverständigen.",
      "Honorar und Terminplanung: Kosten hängen von Objektgröße, Sonderbau-Kategorie und Umfang der Abweichungen ab. Seriöse Angebote basieren auf einer Leistungsbeschreibung (Konzept, Baubegleitung, Gutachten, Stellungnahmen) nach vorheriger Objektbegehung. Der Zeitplan sollte mit Architektur und Gebäudetechnik abgestimmt sein, damit Genehmigung und Ausführung nicht auseinanderlaufen.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Genehmigungsunterlagen, betriebliche Brandschutzorganisation und die Abstimmung zwischen Sachverständigem und [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] nachvollziehbar sein.",
      "Health and Safety+ in Köln und NRW deckt beide Ebenen ab – wie auf unserer [Link: /brandschutz|Leistungsseite Brandschutz]: brandschutztechnische Konzepte, Stellungnahmen und Bewertungen nach BauO NRW (Neubau, Sonderbau, Nutzungsänderung, Genehmigungsverfahren) sowie [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz] mit Brandschutzordnung, Brandschutzbeauftragter, Begehungen und Brandschutzhelfern. Genehmigung und laufender Betrieb werden abstimmbar aus einer Hand – ohne externe „Lücken“ zwischen Konzept und Organisation. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was ist der Unterschied Sachverständiger und Brandschutzbeauftragter?",
        answer:
          "Der Sachverständige erstellt bauordnungsrechtliche Nachweise (Konzept, Nachweis, Stellungnahmen). Der BSB organisiert laufenden betrieblichen Brandschutz nach ArbStättV – beide Rollen ergänzen sich.",
      },
      {
        question: "Wann braucht man einen Brandschutz-Sachverständigen?",
        answer:
          "Bei Sonderbauten, Nutzungsänderungen, Abweichungen von Technischen Baubestimmungen, behördlichen Auflagen oder Versichereranforderungen – nicht bei jedem Regelbau.",
      },
      {
        question: "Typische Mängel in Köln?",
        answer:
          "Konzept und betriebliche Organisation widersprechen sich, BSB fehlt nach Eröffnung, Genehmigungsunterlagen veraltet bei Umbau, Rollenverwechslung zwischen Sachverständigem und BSB.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO NRW] und [Link: /brandschutz|Leistungen Brandschutz].",
      },
    ],
  },
  {
    slug: "strafen-arbeitsschutz",
    title: "Welche Strafen gibt es im Arbeitsschutz? Bußgelder, Haftung und Konsequenzen",
    excerpt:
      "Konsequenzen bei Verstößen im Arbeitsschutz: Bußgelder nach § 25 ArbSchG und Verordnungen, Strafrecht, Regress und Aufsicht – Überblick für Arbeitgeber in NRW.",
    date: "2025-05-08",
    dateModified: "2026-05-26",
    content: [
      "Verstöße gegen Arbeitsschutzpflichten können auf mehreren Ebenen wirken: Ordnungswidrigkeiten mit Geldbuße, strafrechtliche Verfahren bei Personenschäden, zivilrechtliche Ansprüche und Regress der Berufsgenossenschaft, dazu behördliche Auflagen und Betriebsstilllegungen. Für Arbeitgeber und Geschäftsführung ist entscheidend, dass Pflichten nicht nur formal erfüllt, sondern wirksam umgesetzt und nachweisbar dokumentiert werden – beginnend mit der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Bußgelder nach § 25 ArbSchG: Das Gesetz selbst enthält nur wenige eigenständige Tatbestände; häufig greifen Verstöße über Rechtsverordnungen (BetrSichV, ArbStättV, GefStoffV u. a.), die auf § 25 Abs. 1 ArbSchG verweisen. Nach § 25 Abs. 2 ArbSchG sind Geldbußen in vielen Fällen bis zu 5.000 Euro möglich; bei Zuwiderhandlung des Arbeitgebers oder einer verantwortlichen Person gegen eine vollziehbare Anordnung nach § 22 Abs. 3 ArbSchG bis zu 30.000 Euro. Konkrete Regelsätze finden sich in Bußgeldkatalogen der Länder und Unfallversicherungsträger – die Bemessung erfolgt im Einzelfall nach OWiG.",
      "Bußgeldrelevant sind in der Praxis häufig fehlende oder veraltete Gefährdungsbeurteilungen, keine oder unzureichende [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung], nicht umgesetzte Maßnahmen aus Begehungen oder Verstöße gegen Auflagen der Gewerbeaufsicht oder der Berufsgenossenschaft. Weitere Obergrenzen gelten in Spezialgesetzen – etwa im [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Mutterschutzgesetz] oder in der Gefahrstoffverordnung. Mehrere Verstöße können nebeneinander geahndet werden.",
      "Strafrecht bei Personenschaden: Kommt es durch Pflichtverletzungen zu Körperverletzung oder Tod, können fahrlässige Körperverletzung (§ 229 StGB) oder fahrlässige Tötung (§ 222 StGB) relevant werden. In der Regel richtet sich die Verfolgung gegen Geschäftsführung, Betriebsleitung oder faktisch Verantwortliche. Eine [Link: /wissen/blog/pflichtuebertragung-arbeitsschutz|Pflichtenübertragung] nach § 13 ArbSchG entbindet den Arbeitgeber nicht von der Gesamtverantwortung und schützt nicht automatisch vor strafrechtlicher oder zivilrechtlicher Haftung.",
      "H2::Umsetzung in der Praxis",
      "Zivilrecht und Regress: Bei grober Fahrlässigkeit oder Vorsatz des Arbeitgebers kann die Unfallversicherung Regress geltend machen; Geschädigte können Schadensersatz- und Schmerzensgeldansprüche prüfen. Fehlende Organisation (keine Fachkraft für Arbeitssicherheit, keine Wirksamkeitskontrolle von Maßnahmen) verschärft die Bewertung im Schadensfall.",
      "Aufsicht durch Gewerbeaufsicht und Berufsgenossenschaft: Begehungen können zu Anordnungen, Nachweispflichten und in schweren Fällen zur Untersagung von Tätigkeiten oder Stilllegung führen. Nachvollziehbare Maßnahmenlisten mit Verantwortlichen, Fristen und Nachkontrolle dokumentieren den organisatorischen Eifer – offene Punkte ohne Verfolgung verschlechtern das Bild bei der nächsten Prüfung.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Gefährdungsbeurteilung, Unterweisungsnachweise und Maßnahmenpläne aktuell sein – das reduziert Bußgeld- und Haftungsrisiken. Die Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt gehört dazu.",
      "Vorbeugung in Köln und NRW: Systematischer Arbeitsschutz mit Fachkraft für Arbeitssicherheit, Betriebsarzt, Arbeitsschutzausschuss (bei mehr als 20 Beschäftigten), Prüfkalender und dokumentierten Unterweisungen reduziert Bußgeld-, Haftungs- und Stillstandsrisiken. Vertiefung: [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /wissen/blog/arbschg-gewerbeaufsicht-begehung-nrw|Behörde und Begehung], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz im Unternehmen]. Health and Safety+ berät Arbeitgeber in Köln und NRW – [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Welche Bußgelder drohen im Arbeitsschutz?",
        answer:
          "Nach § 25 ArbSchG oft bis 5.000 Euro; bei Zuwiderhandlung gegen vollziehbare Anordnungen bis 30.000 Euro. Spezialgesetze können höhere Obergrenzen haben.",
      },
      {
        question: "Wann wird es strafrechtlich relevant?",
        answer:
          "Bei Personenschaden durch Pflichtverletzung können fahrlässige Körperverletzung (§ 229 StGB) oder fahrlässige Tötung (§ 222 StGB) relevant werden – auch für Geschäftsführung.",
      },
      {
        question: "Was verschärft die Bewertung im Schadensfall?",
        answer:
          "Fehlende Organisation, keine SiFa, keine Wirksamkeitskontrolle, [Link: /wissen/blog/pflichtuebertragung-arbeitsschutz|Pflichtenübertragung] ohne Aufsicht – Regress der BG möglich.",
      },
      {
        question: "Wie vorbeugen in NRW?",
        answer:
          "Systematischer Arbeitsschutz mit SiFa, Betriebsarzt, ASA ab 20 Beschäftigten, Prüfkalender und dokumentierten Unterweisungen – siehe [Link: /wissen/blog/arbschg-gewerbeaufsicht-begehung-nrw|Behörde und Begehung].",
      },
    ],
  },
  {
    slug: "pflichtuebertragung-arbeitsschutz",
    title: "Pflichtenübertragung im Arbeitsschutz – rechtssicher delegieren",
    excerpt:
      "Pflichtenübertragung nach § 13 ArbSchG: Voraussetzungen, Schriftform, Aufsichtspflicht des Arbeitgebers und Abgrenzung zur SiFa – praxisnah für Köln und NRW.",
    date: "2025-03-25",
    dateModified: "2026-05-26",
    content: [
      "Der Arbeitgeber trägt die Gesamtverantwortung für Sicherheit und Gesundheit der Beschäftigten nach ArbSchG. § 13 ArbSchG erlaubt, einzelne Arbeitsschutzpflichten schriftlich an zuverlässige, fachkundige Personen zu übertragen – typisch Abteilungsleiter, Meister oder Standortleiter. Die Übertragung entbindet nicht: Der Arbeitgeber muss die Einhaltung überwachen und bleibt im Schadensfall adressierbar – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Voraussetzungen: Die Empfängerin oder der Empfänger muss zuverlässig und fachkundig sein – nachgewiesene Kenntnisse im jeweiligen Aufgabenbereich, ausreichende Befugnisse und Zeit. Pauschale Formulierungen wie „alle Arbeitsschutzpflichten“ sind unzulässig; übertragen werden konkrete Aufgaben (z. B. Fortschreibung der Gefährdungsbeurteilung im Bereich, Durchführung von Begehungen, Organisation von Unterweisungen, PSA-Beschaffung, Gefahrstofflager).",
      "Die Übertragung erfolgt schriftlich: Aufgabenbeschreibung, Zuständigkeitsbereich, erforderliche Mittel, Berichtswege an den Arbeitgeber und Datum der Bestätigung durch beide Seiten. Mündliche Delegation ist im Streitfall nicht nachweisbar und wird von Berufsgenossenschaft und Gewerbeaufsicht kritisch bewertet.",
      "Aufsichtspflicht des Arbeitgebers: Einladung in den Arbeitsschutzausschuss (bei mehr als 20 Beschäftigten), regelmäßige Berichte, Stichproben bei Begehungen und Unterweisungen, Nachverfolgung offener Maßnahmen. Übertragung ohne Kontrolle entlastet im Bußgeld- oder Strafverfahren nicht – siehe [Link: /wissen/blog/strafen-arbeitsschutz|Konsequenzen bei Verstößen].",
      "H2::Umsetzung in der Praxis",
      "Abgrenzung zur Fachkraft für Arbeitssicherheit: Die Fachkraft berät nach ASiG und DGUV Vorschrift 2 sicherheitstechnisch – das ist keine Pflichtenübertragung der Gesamtverantwortung. Sie hat in der Regel keine Weisungsbefugnis über Führungskräfte; die übertragene Person setzt organisatorisch um. Betriebsarzt und Fachkraft für Arbeitssicherheit wirken bei Gefährdungsbeurteilung und ASA mit, ersetzen aber nicht die vom Arbeitgeber benannte Führungskraft im Bereich.",
      "Häufig scheitert die Übertragung an Empfänger ohne Qualifikation oder ohne Weisungsbefugnis gegenüber dem Team, fehlender Einarbeitung in übertragene Pflichten oder fehlender Dokumentation der Kontrolle durch den Arbeitgeber. Die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung der Fachkraft für Arbeitssicherheit] ersetzt keine interne Organisationsverantwortung.",
      "Praxis Köln/NRW: Übertragungsschreiben mit Anhang (Checkliste Begehung, Unterweisungsmatrix), jährlicher Review im ASA, Abgleich mit [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung]. Health and Safety+ – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was darf nach § 13 ArbSchG übertragen werden?",
        answer:
          "Einzelne konkrete Aufgaben – z. B. Begehungen, Unterweisungen, GBU-Fortschreibung im Bereich – an zuverlässige, fachkundige Personen. Pauschale Übertragung aller Pflichten ist unzulässig.",
      },
      {
        question: "Entbindet Übertragung den Arbeitgeber?",
        answer:
          "Nein – Gesamtverantwortung und Aufsichtspflicht bleiben. Der Arbeitgeber muss Einhaltung überwachen; bei Bußgeld oder Strafverfahren bleibt er adressierbar.",
      },
      {
        question: "Typische Fehler bei Pflichtenübertragung?",
        answer:
          "Mündliche Delegation, Empfänger ohne Qualifikation oder Weisungsbefugnis, keine schriftliche Aufgabenbeschreibung, keine Kontrolle durch Leitung – häufig in Köln und NRW.",
      },
      {
        question: "Abgrenzung zur SiFa?",
        answer:
          "Die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] berät sicherheitstechnisch – das ist keine Pflichtenübertragung der Gesamtverantwortung. Siehe [Link: /wissen/blog/akteure-arbeitsschutz|Akteure].",
      },
    ],
  },
  {
    slug: "brandschutzbeauftragter-aufgaben-pflichten",
    title: "Brandschutzbeauftragter – Aufgaben, Pflichten und Bestellung",
    excerpt:
      "Brandschutzbeauftragter nach DGUV Information 205-003: Aufgabenprofil, schriftliche Bestellung, Qualifikation und Abgrenzung zu Brandschutzhelfern – für Betriebe in NRW.",
    date: "2025-05-19",
    dateModified: "2026-05-26",
    content: [
      "Der Brandschutzbeauftragte berät den Arbeitgeber in Fragen des vorbeugenden, abwehrenden und organisatorischen Brandschutzes im Betrieb. Er ersetzt weder die Feuerwehr noch die [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer]: Letztere sind für Entstehungsbrände und Evakuierung im Ernstfall ausgebildet; der Brandschutzbeauftragte plant, koordiniert, begeht und dokumentiert den betrieblichen Brandschutz dauerhaft. Qualifikation, Bestellung und Aufgabenprofil orientieren sich an der DGUV Information 205-003 (Ausbildung nach vfdb-Richtlinie 12-09/01) – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Ob und in welchem Umfang ein Brandschutzbeauftragter benötigt wird, ergibt sich aus der Gefährdungsbeurteilung zur Brandgefahr nach § 5 ArbSchG – nicht aus einer starren Mitarbeiterzahl. Entscheidend sind Nutzungsart, Brandlasten, bauliche Besonderheiten, Personenaufkommen, technische Anlagen (Brandmeldeanlage, Rauch- und Wärmeabzug, Sprinkler) sowie Auflagen aus Genehmigungen, Versicherung oder Sonderbauvorschriften (z. B. Versammlungsstätten, Krankenhäuser, Hotels, Hochhäuser). In Objekten mit mehreren Nutzern und gemeinsamen Rettungswegen ist oft ein koordinierender Brandschutzbeauftragter erforderlich.",
      "Die Bestellung erfolgt schriftlich durch den Arbeitgeber: Zuständigkeitsbereich, Aufgaben, Zugang zu Unterlagen und Räumen, ausreichende Arbeitszeit und Arbeitsmittel. Der Brandschutzbeauftragte ist unmittelbar dem Arbeitgeber unterstellt und bei brandschutzfachlichen Entscheidungen weisungsfrei; Benachteiligung wegen der Tätigkeit ist unzulässig. Die Gesamtverantwortung bleibt beim Arbeitgeber; der Brandschutzbeauftragte berät, die Leitung entscheidet und stellt Ressourcen bereit.",
      "Externe Beauftragung ist zulässig und in kleineren und mittleren Betrieben häufig sinnvoll, wenn intern niemand die erforderliche Ausbildung (in der Regel 64 Unterrichtseinheiten à 45 Minuten, Abschlussprüfung schriftlich und mündlich) absolvieren kann. Vertraglich sollten Qualifikationsnachweis, Einbindung in Neu- und Umbauten, Erreichbarkeit im Ernstfall und Schnittstellen zu Facility, [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Fachkraft für Arbeitssicherheit] und Versicherer festgehalten werden. Fortbildung: mindestens 16 Unterrichtseinheiten innerhalb von drei Jahren. Bei behördlich vorgeschriebener Bestellung kann die Zustimmung der Bauaufsicht zur Person erforderlich sein.",
      "H2::Umsetzung in der Praxis",
      "Das Aufgabenprofil der DGUV 205-003 umfasst 26 Einzelaufgaben, von denen im Bestellungsschreiben die betriebsrelevanten übernommen werden. In der Praxis bündeln sich die Inhalte in fünf Handlungsfeldern. Zur Organisation gehören Erstellung und Fortschreibung der [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] nach DIN 14096, Flucht- und Rettungspläne, Alarm- und Feuerwehrpläne, Räumungsübungen und die Unterstützung der Brandschutzunterweisung. Bei Gefährdungsbeurteilung und Konzepten geht es um Brand- und Explosionsgefahren, Betriebsanweisungen, Umsetzung des Brandschutzkonzepts und Ersatzmaßnahmen bei Ausfall technischer Anlagen. Begehungen und Mängelmanagement umfassen Fluchtwege, Kennzeichnung, Heißarbeit und die Nachverfolgung offener Punkte. Technik und Lagerung betreffen Löschmittel, Prüfung und Wartung sowie brennbare Stoffe. Schnittstellen bestehen zu Behörden, Feuerwehr, Versicherer, Berufsgenossenschaft sowie zur Begleitung von Investitionen, Nutzungsänderungen und der Aus- und Fortbildung der Brandschutzhelfer.",
      "Arbeitszeit und Ressourcen: Die DGUV nennt kein fixes Stundenkontingent – der Aufwand folgt Risiko und Objektgröße. Orientierungswerte in Anhang 2 der DGUV 205-003 (z. B. größeres Einzelhandelsobjekt) liegen für laufende Aufgaben deutlich über 180 Stunden pro Jahr; kleine Bürostandorte benötigen weniger, Campus- und Industrieobjekte mehr. Ohne vereinbarte Zeit und Budget bleibt die Funktion in Audits nicht nachweisbar.",
      "Abgrenzung: Die Fachkraft für Arbeitssicherheit und der Brandschutzbeauftragte arbeiten bei Gefährdungsbeurteilung, Begehungen und Arbeitsschutzausschuss zusammen, ohne Rollen zu vermischen. In Betrieben mit anerkannter Werkfeuerwehr können Aufgaben des Brandschutzbeauftragten an deren Leitung übertragen werden, wenn Qualifikation und Kapazität dem DGUV-Profil entsprechen.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Begehungen fällt häufig auf, dass der BSB benannt aber nicht ausreichend freigestellt ist, die [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] veraltet ist oder Brandschutzhelfer ohne Löschübung geschult wurden. Vor Prüfungen sollten Bestellung, Aufgabenprofil und Begehungsprotokolle nachvollziehbar sein.",
      "Health and Safety+ in Köln und NRW: [Link: /brandschutz|Brandschutz] von Konzept und Genehmigung bis zum Betrieb – hier u. a. externe Funktion des Brandschutzbeauftragten, Brandschutzordnung, Begehungen und Übungen. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann braucht ein Betrieb einen Brandschutzbeauftragten?",
        answer:
          "Wenn die Gefährdungsbeurteilung zur Brandgefahr es erfordert – abhängig von Nutzung, Brandlasten, Personenaufkommen und technischen Anlagen, nicht pauschal ab Mitarbeiterzahl.",
      },
      {
        question: "Welche Qualifikation braucht der BSB?",
        answer:
          "Ausbildung nach DGUV Information 205-003 / vfdb-Richtlinie 12-09/01 – in der Regel 64 UE plus Abschlussprüfung, Fortbildung 16 UE in drei Jahren.",
      },
      {
        question: "Typische Mängel beim BSB?",
        answer:
          "Keine vereinbarte Arbeitszeit, BSO veraltet, keine Evakuierungsübungen, Verwechslung mit Brandschutzhelfer, fehlende Schnittstelle zur SiFa bei Begehungen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer], [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Fluchtplan] und [Link: /brandschutz|Leistungen Brandschutz].",
      },
    ],
  },
  // BaustellV-Hub: Baustellenverordnung – Megabrain-Einstieg
  {
    slug: "baustellv-einfach-erklaert",
    title: "BaustellV einfach erklärt – Pflichten für Bauherren und Baustellen in NRW",
    excerpt:
      "Baustellenverordnung (BaustellV): SiGeKo, SiGe-Plan, Vorankündigung, Anhang II, Bauherrpflichten – praxisnah für Köln und NRW (Stand Dezember 2025).",
    date: "2026-05-26",
    dateModified: "2026-05-26",
    content: [
      "Neubau, Umbau oder Abbruch: Sobald auf einer Baustelle mehrere Unternehmen tätig sind, greift die Baustellenverordnung (BaustellV). Sie setzt die EU-Baustellenrichtlinie um und ergänzt das [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG] auf zeitlich begrenzten Baustellen. Dieser Artikel ordnet die Pflichten für Bauherren, SiGeKo und ausführende Betriebe – ohne Gesetzestext abzutippen – und richtet sich an Projekte in Köln und NRW.",
      "H2::Was ist eine Baustelle?",
      "Nach § 1 BaustellV ist Baustelle der Ort, an dem ein Bauvorhaben ausgeführt wird – also Errichten, Ändern oder Abbruch baulicher Anlagen, nicht Bergbau. Ziel der Verordnung ist eine wesentliche Verbesserung von Sicherheit und Gesundheitsschutz der Beschäftigten auf Baustellen.",
      "H2::Die drei Pflichtfelder",
      "Die BaustellV bündelt die Pflichten in drei Bereichen: Planung, SiGe-Plan und Koordination.",
      "Bei der Planung (§ 2) müssen gleichzeitige und nacheinander folgende Arbeiten so eingeteilt werden, dass die Präventionsgrundsätze des § 4 ArbSchG eingehalten werden. Große Baustellen müssen außerdem spätestens zwei Wochen vor Baustelleneinrichtung bei der Behörde angekündigt werden – wenn voraussichtlich mehr als 30 Arbeitstage und mehr als 20 gleichzeitig Beschäftigte oder insgesamt mehr als 500 Personentage anfallen. Der Aushang nach Anhang I muss auf der Baustelle sichtbar sein. Details: [Link: /wissen/blog/baustellv-vorankuendigung-sige-plan|Vorankündigung und SiGe-Plan].",
      "Der SiGe-Plan (§ 2 Abs. 3) ist nötig, wenn die Vorankündigung auf mehrere Arbeitgeber trifft – oder wenn mehrere Arbeitgeber und besonders gefährliche Arbeiten nach Anhang II zusammenkommen. Er muss vor Baustelleneinrichtung vorliegen und bei Änderungen fortgeschrieben werden. Ist nur ein Arbeitgeber tätig, kann in manchen Fällen die Unterrichtung über Geländeumstände statt eines vollständigen Plans genügen.",
      "Zur Koordination (§ 3) bestellt der Bauherr bei mehreren Arbeitgebern einen SiGeKo. Dieser arbeitet in Planungs- und Ausführungsphase – etwa beim Erstellen des Plans, bei der Organisation der Zusammenarbeit, bei Anpassungen und Begehungen. Der Bauherr bleibt verantwortlich (§ 3 Abs. 1a, § 4). Mehr dazu: [Link: /wissen/blog/baustellv-sigeko-koordination-aufgaben|SiGeKo-Aufgaben].",
      "Jeder ausführende Betrieb hat zudem eigene Pflichten (§ 5–6 BaustellV): Er sorgt für sichere Arbeitsmittel, ordnet Stoffe und Abfälle, plant den Zeitablauf mit anderen Gewerken und beachtet den SiGe-Plan. Das gilt auch für Unternehmer ohne eigene Beschäftigte.",
      "H2::Anhang II und Konsequenzen",
      "Besonders gefährliche Arbeiten – etwa Absturz aus mehr als 7 m, Baugruben über 5 m, Sprengstoff, Hochspannung in weniger als 5 m Abstand, BioStoffe der Risikogruppe 3/4, bestimmte Gefahrstoffe, Tunnel oder Druckluft – sollten früh im SiGe-Plan benannt werden. Vertiefung: [Link: /wissen/blog/baustellv-anhang-ii-gefaehrliche-arbeiten|Anhang II im Detail].",
      "Nach § 7 BaustellV drohen Ordnungswidrigkeiten bei fehlender Vorankündigung oder fehlendem SiGe-Plan – Bußgeld nach § 25 ArbSchG, bei Gefährdung Strafrecht nach § 26 ArbSchG. Parallel gelten für ausführende Betriebe [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 ArbSchG] und [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38].",
      "H2::Praxis Köln und NRW",
      "Beim innerstädtischen Umbau in Köln lösen Abbruch und mehrere Gewerke häufig SiGeKo-Pflicht und Anhang II Nr. 1 aus – dokumentiert in [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch Köln]. Beim EFH-Neubau in NRW wirken Rohbau, Dach und Elektro oft nacheinander; damit sind mehrere Arbeitgeber beteiligt, auch wenn die Bausumme gering ist – siehe [Link: /wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw|Projektverlauf Neubau].",
      "H2::Spokes und Checkliste",
      "Vertiefende Artikel: [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Wann SiGeKo?], [Link: /wissen/blog/baustellv-vorankuendigung-sige-plan|Vorankündigung], [Link: /wissen/blog/baustellv-sigeko-koordination-aufgaben|Koordination], [Link: /wissen/blog/baustellv-anhang-ii-gefaehrliche-arbeiten|Anhang II]. Praxis: [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU Schnittstellen], [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar].",
      "Vor Baustart sollten Bauherren geklärt haben, ob mehrere Arbeitgeber beteiligt sind, ein SiGeKo bestellt ist, der SiGe-Plan vor Baustart vorliegt, die Vorankündigung fristgerecht übermittelt wurde und Anhang-II-Arbeiten im Plan benannt sind. Health and Safety+ – [Link: /sigeko|Leistungen SiGeKo], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab wann gilt die BaustellV?",
        answer:
          "Sobald ein Bauvorhaben (Neubau, Umbau, Abbruch) an einem Ort ausgeführt wird – nicht erst ab einer bestimmten Bausumme.",
      },
      {
        question: "Braucht jedes Einfamilienhaus einen SiGeKo?",
        answer:
          "Ja, wenn Beschäftigte mehrerer Arbeitgeber gleichzeitig oder nacheinander tätig sind – typisch ab zweitem Gewerk. Auch Innenausbau mit mehreren Firmen.",
      },
      {
        question: "Was ist der Unterschied BaustellV und DGUV V38?",
        answer:
          "BaustellV: Bauherr/SiGeKo koordiniert. DGUV V38: UVV für ausführende Unternehmen. Beide parallel – siehe [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38].",
      },
      {
        question: "Wann Vorankündigung an die Behörde?",
        answer:
          "Wenn voraussichtlich mehr als 30 Arbeitstage und mehr als 20 gleichzeitig Beschäftigte – oder mehr als 500 Personentage. Zwei Wochen vor Baustelleneinrichtung.",
      },
      {
        question: "Was änderte die Novelle Dezember 2025?",
        answer:
          "Aktualisierung EU-Vollzitate und Anpassungen im Anhang II (Gefahrstoffkategorien CLP) – inhaltlich SiGeKo-Logik unverändert zentral.",
      },
    ],
  },
  {
    slug: "baustellv-vorankuendigung-sige-plan",
    title: "BaustellV Vorankündigung und SiGe-Plan – Fristen und Inhalte",
    excerpt:
      "§ 2 BaustellV: Vorankündigung Anhang I, SiGe-Plan-Pflicht, 30-Tage/20-Beschäftigte-Regel, 500 Personentage – für Bauherren in Köln und NRW.",
    date: "2026-06-02",
    dateModified: "2026-05-26",
    content: [
      "Bevor die Baustelle eingerichtet wird, regelt § 2 BaustellV drei Dinge: die behördliche Ankündigung, den SiGe-Plan und – in bestimmten Fällen – eine vereinfachte Unterrichtung. Wer als Bauherr den SiGeKo oder Plan erst „später“ einplant, riskiert Bußgelder und chaotische Einweisungen zum Baustart – in Köln, NRW und überall sonst gleichermaßen.",
      "H2::Was gilt rechtlich?",
      "Eine Vorankündigung an die zuständige Behörde ist Pflicht, wenn voraussichtlich mehr als 30 Arbeitstage und mehr als 20 Beschäftigte gleichzeitig auf der Baustelle arbeiten – oder wenn der Gesamtumfang 500 Personentage übersteigt (§ 2 Abs. 2 BaustellV). Die Meldung muss spätestens zwei Wochen vor Baustelleneinrichtung erfolgen. Mindestinhalt ist Anhang I: Ort und Art des Vorhabens, Bauherr, Koordinator, Beginn, Dauer und Zahl der Arbeitgeber. Der Aushang muss für alle sichtbar sein und bei wesentlichen Änderungen aktualisiert werden.",
      "Zusätzlich braucht es in vielen Fällen einen SiGe-Plan (§ 2 Abs. 3): wenn die Vorankündigung auf mehrere Arbeitgeber trifft – oder wenn mehrere Arbeitgeber und besonders gefährliche Arbeiten nach Anhang II anstehen. Der Plan muss vor Baustelleneinrichtung fertig sein, anwendbare Vorschriften erkennen lassen, Maßnahmen für Anhang II enthalten und auch betriebliche Tätigkeiten auf dem Gelände berücksichtigen.",
      "Ist dagegen nur ein Arbeitgeber tätig, aber Vorankündigung oder Anhang II greifen, genügt nach § 2 Abs. 4 die Unterrichtung dieses Arbeitgebers über Geländeumstände, die sonst in einen SiGe-Plan einfließen würden – kein voller Plan, aber dennoch klare Information vor Arbeitsbeginn.",
      "H2::Umsetzung in der Praxis",
      "Die Personentage-Rechnung überrascht viele Bauherren: 10 Beschäftigte an 60 Tagen ergeben 600 Personentage – damit ist die Vorankündigungsschwelle erreicht, auch wenn nie 20 Personen gleichzeitig arbeiten. Auch kleinere Baustellen mit wenigen Gewerken nacheinander können betroffen sein.",
      "Ein guter SiGe-Plan beschreibt verständlich, welche Gefährdungen wo auftreten – von Verkehrsführung und Absturz über Elektro, Lärm und Staub bis zu besonders gefährlichen Arbeiten nach Anhang II. Dazu gehören verantwortliche Gewerke, Einweisungen, Notfall und Baustellenordnung. Jede Version trägt Datum und Stand; ändert sich die Lage, muss der Koordinator den Plan nach § 3 Abs. 3 anpassen.",
      "Für die Vorankündigung nach Anhang I brauchen Sie mindestens: Ort und Art des Vorhabens, Name und Anschrift des Bauherrn, Name und Anschrift des Koordinators, voraussichtlichen Beginn und Dauer sowie die Zahl der beteiligten Arbeitgeber. In Köln geht die Meldung an die zuständige Bauaufsicht; der Aushang muss für alle Gewerke gut sichtbar sein.",
      "Als Rechenbeispiel ergeben 8 Beschäftigte an 65 Tagen 520 Personentage – damit fällt die Vorankündigung an, auch ohne 20 gleichzeitig Beschäftigte. Beim Einfamilienhaus mit drei Gewerken nacheinander entsteht der SiGe-Plan oft über Anhang II (§ 2 Abs. 3 lit. b), nicht über die Vorankündigung – erklärt im Artikel [Link: /wissen/blog/baustellv-anhang-ii-gefaehrliche-arbeiten|Anhang II].",
      "Typische Fehler sind eine Vorankündigung erst nach Baubeginn, ein fehlender Aushang, ein generischer Plan ohne Bezug zum Projekt oder die fälschliche Annahme, ein Generalunternehmer mit Subunternehmern gelte als „ein Arbeitgeber“. Fallstudien: [Link: /wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw|Neubau NRW], [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Köln].",
      "H2::Checkliste",
      "Vor Baustart sollten Schwellenwert, Anhang-I-Angaben, SiGe-Plan vor Erstbetritt der Gewerke und sichtbarer Aushang geklärt sein. Health and Safety+ – [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer ist „nach § 4 Verantwortlicher“?",
        answer:
          "Der Bauherr – oder ein von ihm schriftlich Beauftragter, der Maßnahmen nach § 2 und § 3 in eigener Verantwortung trifft.",
      },
      {
        question: "Reicht ein SiGe-Plan nur in der Planungsphase?",
        answer:
          "Nein – in der Ausführung muss der Koordinator den Plan bei relevanten Änderungen anpassen lassen (§ 3 Abs. 3).",
      },
      {
        question: "Bußgeld bei fehlender Vorankündigung?",
        answer:
          "Ja – § 7 Abs. 1 Nr. 1 BaustellV i. V. m. § 25 ArbSchG, wenn nicht, nicht richtig, nicht vollständig oder nicht rechtzeitig übermittelt.",
      },
      {
        question: "Wo SiGe-Plan ablegen?",
        answer:
          "Baustelle zugänglich für AG, Koordinator und Behörde – digital plus Ausdruck üblich; Gewerke müssen relevante Teile kennen.",
      },
      {
        question: "Braucht ein EFH-Neubau Vorankündigung?",
        answer:
          "Selten über 30/20 oder 500 Personentage – aber mehrere Gewerke nacheinander lösen SiGeKo und ggf. SiGe-Plan über Anhang II (§ 2 Abs. 3 lit. b), nicht über Vorankündigung.",
      },
      {
        question: "SiGe-Plan ohne mehrere Arbeitgeber?",
        answer:
          "Bei nur einem AG: Unterrichtung nach § 2 Abs. 4 statt vollem Plan, wenn Vorankündigung oder Anhang II greift. SiGeKo entfällt ohne mehrere AG.",
      },
    ],
  },
  {
    slug: "baustellv-sigeko-koordination-aufgaben",
    title: "BaustellV SiGeKo – Aufgaben in Planung und Ausführung (§ 3–4)",
    excerpt:
      "SiGeKo nach § 3 BaustellV: Koordinator Planung/Ausführung, Bauherrpflicht § 4, RAB 30, Abgrenzung zur Unternehmerverantwortung – für Köln und NRW.",
    date: "2026-06-09",
    dateModified: "2026-05-26",
    content: [
      "Wenn auf einer Baustelle mehrere Unternehmen gleichzeitig oder nacheinander arbeiten, braucht es einen Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo). Er ist nicht der „Sicherheitsmann“ eines einzelnen Gewerkes, sondern koordiniert das Zusammenwirken aller Beteiligten. § 3 und § 4 der Baustellenverordnung (BaustellV) regeln seine Aufgaben und die Verantwortung des Bauherrn – in Köln, NRW und bundesweit nach den Regeln der Arbeitsgemeinschaft Baustelle (RAB 30).",
      "H2::Was gilt rechtlich?",
      "Sobald Beschäftigte mehrerer Arbeitgeber auf derselben Baustelle tätig sind, muss ein Koordinator bestellt werden (§ 3 Abs. 1 BaustellV). Der Bauherr kann die Aufgaben selbst übernehmen oder schriftlich an eine qualifizierte Person übertragen – etwa an einen externen SiGeKo oder an den Bauleiter, sofern die erforderlichen Kenntnisse nachweisbar sind. Wichtig: Eine Beauftragung entbindet den Bauherrn nicht von der Verantwortung (§ 3 Abs. 1a).",
      "In der Planungsphase koordiniert der SiGeKo die Maßnahmen nach § 2 Abs. 1 BaustellV. Dazu gehört, einen SiGe-Plan (Sicherheits- und Gesundheitsschutzplan) zu erstellen oder erstellen zu lassen und eine Unterlage für spätere Arbeiten an der fertigen Anlage zusammenzustellen – zum Beispiel für Instandhaltung, Umbauten oder Reparaturen (§ 3 Abs. 2).",
      "In der Ausführungsphase sorgt der Koordinator dafür, dass die Präventionsgrundsätze des Arbeitsschutzgesetzes im Zusammenspiel aller Gewerke beachtet werden. Er achtet darauf, dass Arbeitgeber und auch Unternehmer ohne Beschäftigte SiGe-Plan und Koordinationshinweise einhalten, passt den Plan bei relevanten Änderungen an, organisiert die Zusammenarbeit und koordiniert die Überwachung der Arbeitsverfahren (§ 3 Abs. 3).",
      "Die Gesamtverantwortung liegt beim Bauherrn (§ 4 BaustellV): Er trifft die Maßnahmen nach § 2 und § 3 selbst – oder beauftragt dazu schriftlich eine andere Person, die in seiner Verantwortung handelt. Ohne klare schriftliche Regelung und ohne ausreichende Qualifikation des Koordinators entsteht schnell eine Lücke zwischen Papier und Baustelle.",
      "H2::Umsetzung in der Praxis",
      "In der Planungsphase geht es vor allem darum, Gefährdungen früh zu erkennen und im SiGe-Plan festzuhalten – einschließlich besonders gefährlicher Arbeiten nach Anhang II der BaustellV. Außerdem bereitet der Koordinator Unterlagen vor, die nach Fertigstellung der Baustelle für Betrieb und Instandhaltung weiter genutzt werden können. Erst wenn diese Grundlagen stehen, sollten die ersten Gewerke auf die Fläche.",
      "Sobald die Baustelle läuft, verschiebt sich der Schwerpunkt: Der SiGeKo führt Begehungen durch, stellt sicher, dass jedes Gewerk vor Arbeitsbeginn unterwiesen wird, und passt den Plan an, wenn sich etwas ändert – etwa durch einen neuen Kran, andere Witterung oder einen wechselnden Subunternehmer. Protokolle gehen an Bauherr und beteiligte Unternehmen; so bleibt nachvollziehbar, was wann vereinbart wurde.",
      "Wer SiGeKo werden will, braucht nach RAB 30 baufachliche, arbeitsschutzfachliche und koordinatorspezifische Kenntnisse. In der Ausschreibung sollte der Nachweis verlangt werden. In der Praxis übernehmen oft eine [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] mit SiGeKo-Zusatzqualifikation oder ein erfahrener Bauleiter mit entsprechender Fortbildung die Rolle.",
      "Planung und Ausführung dürfen dieselbe Person betreuen – bei größeren Projekten ist eine Trennung jedoch sinnvoll. Dann sollte ein schriftliches Übergabeprotokoll festhalten, welche offenen Punkte aus der Planung in die Ausführung mitgenommen werden.",
      "Der SiGeKo ersetzt weder die Gefährdungsbeurteilung noch die Unterweisung der Beschäftigten in den ausführenden Betrieben – und auch nicht Prüfungen nach der Betriebssicherheitsverordnung (BetrSichV). Er koordiniert das Zusammenwirken; die Umsetzung der Maßnahmen bleibt bei den jeweiligen Unternehmern. Ob ein SiGeKo überhaupt nötig ist, klären Sie im [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Pflicht-Check].",
      "Dokumentierte Begehungen, Einweisungen und Übergaben zwischen Rohbau und Ausbau sind in der Praxis entscheidend – etwa bei [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Abbruch in Köln], [Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|Dacharbeiten im Bestand] oder [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Innenausbau im Bestand].",
      "H2::Typische Mängel",
      "Häufig wird der SiGeKo erst bestellt, wenn der Rohbau bereits läuft – dann fehlen oft rechtzeitige Einweisungen und ein vollständiger SiGe-Plan vor Baustart. Auch bei Kranumstellungen, neuen Subunternehmern oder Wetterereignissen wird der Plan nicht fortgeschrieben, obwohl § 3 Abs. 3 das verlangt.",
      "Weitere Schwachstellen: Der Koordinator hat keinen Zugang zu aktuellen Plänen, Begehungen finden ohne Protokoll statt, oder das Honorar deckt nur die Planung, nicht die Ausführungsphase ab. Honorar-Orientierung: [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|SiGeKo-Kosten]. Gesamtüberblick: [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub]. Health and Safety+ – [Link: /sigeko|Leistungen SiGeKo], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Kann der Architekt SiGeKo sein?",
        answer:
          "Wenn RAB-30-Qualifikation und ausreichende Befugnisse/Zeit vorliegen – fachliche und koordinatorspezifische Kenntnisse sind Pflicht.",
      },
      {
        question: "Ein SiGeKo für Planung und Ausführung?",
        answer:
          "Zulässig – Aufgabenliste muss beide Phasen abdecken; bei Komplexität Trennung empfohlen.",
      },
      {
        question: "Haftet der SiGeKo für Unfälle?",
        answer:
          "Unternehmer und AG bleiben primär verantwortlich; SiGeKo haftet bei Pflichtverletzung in seiner Koordinationsrolle – Bauherr bleibt verantwortlich für Wirksamkeit der Organisation.",
      },
      {
        question: "ASA oder SiGeKo auf der Baustelle?",
        answer:
          "Arbeitsschutzausschuss gilt im Betrieb des ausführenden Unternehmens – SiGeKo koordiniert baustellenübergreifend. Beides kann parallel nötig sein.",
      },
    ],
  },
  {
    slug: "baustellv-anhang-ii-gefaehrliche-arbeiten",
    title: "BaustellV Anhang II – besonders gefährliche Arbeiten im SiGe-Plan",
    excerpt:
      "Alle 10 Tätigkeiten Anhang II BaustellV: Absturz, Sprengstoff, Hochspannung, Gefahrstoffe – SiGe-Plan-Pflicht, Matrix und Praxis für Bauherren in Köln und NRW.",
    date: "2026-06-16",
    dateModified: "2026-05-26",
    content: [
      "Dacharbeiten, Abbruch, Sprengungen oder Tiefgaragenbau – viele Baustellen in Köln und NRW lösen Anhang II der Baustellenverordnung aus. Dann reicht im SiGe-Plan kein allgemeiner Hinweis wie „Vorsicht Absturz“: Es sind benannte Tätigkeiten, verantwortliche Gewerke, konkrete Maßnahmen und Nachweise nötig. Stand BaustellV: zuletzt geändert Dezember 2025 (CLP-Anpassung Anhang II). Überblick: [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub].",
      "H2::Wann Anhang II den SiGe-Plan auslöst",
      "Nach § 2 Abs. 3 BaustellV ist ein SiGe-Plan vor Baustelleneinrichtung nötig, wenn (A) eine Vorankündigung erforderlich ist und mehrere Arbeitgeber tätig werden – oder (B) mehrere Arbeitgeber und besonders gefährliche Arbeiten nach Anhang II anstehen, auch wenn die Vorankündigungsschwellen (30 Tage/20 Beschäftigte oder 500 Personentage) nicht erreicht sind. Nacheinander tätige Gewerke zählen mit – typisch beim EFH-Neubau: Maurer, Dachdecker und Elektro nacheinander bedeuten mehrere Arbeitgeber.",
      "Wenn nur ein Arbeitgeber tätig ist, aber Vorankündigung oder Anhang II greift, regelt § 2 Abs. 4 BaustellV eine abgemilderte Pflicht: Statt eines vollständigen SiGe-Plans ist der Arbeitgeber über Geländeumstände zu unterrichten, die sonst in den Plan einfließen würden. Die SiGeKo-Pflicht nach § 3 bleibt bei mehreren Arbeitgebern unabhängig davon – siehe [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|SiGeKo-Pflicht].",
      "Anhang II definiert die Tätigkeit, nicht die gesamte Baustelle: Nicht jede Baustelle braucht alle zehn Punkte, aber jeder getroffene Punkt muss im SiGe-Plan mit Maßnahmen beschrieben sein. Bei Lageänderungen passt der Koordinator den Plan an (§ 3 Abs. 3).",
      "H2::Alle zehn Tätigkeiten nach Anhang II",
      "Anhang II listet zehn Tätigkeiten, die besonders gefährlich sein können. Nicht jede Baustelle löst alle aus – aber jeder zutreffende Punkt muss im SiGe-Plan mit konkreten Maßnahmen stehen.",
      "Punkt 1 betrifft Versinken oder Verschüttung in Baugruben oder Gräben tiefer als 5 Meter sowie Abstürze aus mehr als 7 Metern Höhe. Im SiGe-Plan gehören Baugrubenkonzept, Verbau, Absturzsicherung, sicherer Zugang und Begehungsintervalle – Beispiel aus der Praxis: [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch Köln].",
      "Punkt 2 umfasst biologische und chemische Gefahrstoffe: Biostoffe der Risikogruppe 3 oder 4 sowie bestimmte CLP-Stoffe (explosiv, entzündbare Flüssigkeiten, akute Toxizität, CMR-Stoffe). Der Plan sollte Stoffliste, Lagerzonen, Schutzmaßnahmen, Unterweisung und Entsorgung festhalten – siehe [Link: /wissen/blog/trgs-einfach-erklaert|TRGS].",
      "Punkt 3 gilt für ionisierende Strahlung, wenn Kontroll- oder Überwachungsbereiche nach Strahlenschutzrecht nötig sind. Der Plan regelt Zutritt, Messungen, den Einsatz einer Fachfirma und die Abgrenzung zu anderen Gewerken.",
      "Punkt 4 betrifft Arbeiten in weniger als 5 Metern Abstand zu Hochspannungsleitungen. Zu dokumentieren sind Abstandsvorgaben, Freischaltung, Fachbetrieb, Sperrbereich und Einweisung.",
      "Punkt 5 gilt bei unmittelbarer Ertrinkungsgefahr durch Wasser oder wasserführende Gruben. Absperrung, Rettungsmittel, Aufsicht und Wetterregeln gehören in den SiGe-Plan.",
      "Punkt 6 umfasst Brunnenbau, unterirdische Erdarbeiten und Tunnelbau – mit Themen wie Gas, Einsturz, Belüftung, Fluchtwege und Fachaufsicht.",
      "Punkt 7 betrifft Arbeiten mit Tauchgeräten; Punkt 8 Arbeiten in Druckluft (Druckkammer). Beide erfordern Fachfirmen, medizinische Voraussetzungen, klare Kommunikation und Notfallpläne.",
      "Punkt 9 gilt beim Einsatz von Sprengstoff oder Sprengschnüren – Sprengplan, Sicherheitsradius, Evakuierung, Nachkontrolle und Behördenabstimmung gehören schriftlich in den Plan.",
      "Punkt 10 betrifft den Auf- oder Abbau schwerer Massivbauelemente mit kraftbetriebenen Hebe- oder Versetzgeräten – oft zusammen mit Punkt 1. Im Plan: Kranabstimmung, Anschlagmittel, Sperrbereich und Einweisung.",
      "H2::Matrix: Gewerk, Anhang II, Maßnahme",
      "Im SiGe-Plan sollte für jedes Gewerk erkennbar sein, welcher Anhang-II-Punkt gilt, wer verantwortlich ist und welche Maßnahme vor Arbeitsbeginn steht. Die folgende Zuordnung dient der Orientierung und muss projektspezifisch ausgefüllt werden.",
      "Beim Rohbau oder Abbruch greifen häufig Punkt 1 (Baugrube, Absturz) und gegebenenfalls Punkt 9 (Sprengung). Verantwortlich ist der Abbruch- oder Rohbau-Arbeitgeber; im Plan stehen Verbau, Seitenschutz, Absturzsicherung am Dach und ggf. ein Sprengkonzept – siehe [Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|Dacharbeiten Bestand Köln].",
      "Dachdecker und Gerüstbauer lösen oft Punkt 1 aus (Absturz über 7 m). Sie planen Fangnetz, Anker, den Übergang zwischen Gerüst und Dach sowie wetterbedingte Einschränkungen.",
      "Elektro und Tiefbau können Punkt 4 (Nähe zur Hochspannung) und Punkt 6 (Gräben) betreffen – mit Kabelplänen, Grabungsfreigabe und Abstand zur Leitung.",
      "Sanitär und Klima bearbeiten Punkt 2 (Lösemittel), selten Punkt 8 (Druckluft) – Lagerung von Gefahrstoffen, Lüftung und Freigabe für Heißarbeit sind zu regeln.",
      "Kranarbeiten und Massivbau fallen unter Punkt 10, oft zusammen mit Punkt 1 – Lastweg, Einweisung zu Anschlagmitteln und Absperrung, abgestimmt mit [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU-Schnittstellen].",
      "Die Matrix gehört als Tabelle oder Anlage in den SiGe-Plan – nicht nur im Kopf des Koordinators. Planversion und Standdatum sollten bei jeder Anpassung mitgeführt werden. Treffen auf ein Gewerk mehrere Punkte zu, legen Sie Priorität und Reihenfolge fest – etwa erst Verbau, dann Absturzsicherung am Dach.",
      "H2::§ 2 Abs. 3 und Abs. 4 im Vergleich",
      "Ein vollständiger SiGe-Plan ist nach § 2 Abs. 3 erforderlich, wenn mehrere Arbeitgeber tätig werden und entweder eine Vorankündigung oder Anhang-II-Arbeiten zusammenkommen. Der Plan muss vor Baustelleneinrichtung vorliegen, fortgeschrieben werden und alle relevanten Maßnahmen enthalten. Typisch ist ein Einfamilienhaus mit Dachdecker und Absturz über 7 m: SiGe-Plan nötig, obwohl keine Vorankündigung anfällt.",
      "Greifen Vorankündigung oder Anhang II bei nur einem Arbeitgeber, genügt nach § 2 Abs. 4 die Unterrichtung über Geländeumstände statt eines vollen Plans. Das ersetzt keinen SiGeKo bei mehreren Arbeitgebern. Ein häufiger Irrtum: Ein Generalunternehmer mit Subunternehmern zählt rechtlich als mehrere Arbeitgeber – nicht als ein einziger.",
      "H2::Praxis Köln und NRW",
      "Beim innerstädtischen Umbau in Köln löst die Abbruchphase fast immer Punkt 1 aus; enge Grundstücke verstärken Wechselwirkungen zwischen Gewerken – dokumentiert in [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|SiGeKo-Begehung Abbruch]. Beim Wohngebäude-Neubau in NRW folgen Rohbau, Dach und Innenausbau nacheinander; der Dachdecker löst Punkt 1 auch unter 7 m oft über Gerüst und Dachkante aus – früh im Plan benennen, nicht erst bei der Begehung klären.",
      "Bei Kontrollen achten Behörde und Berufsgenossenschaft darauf, ob die Anhang-II-Tätigkeit im Plan genannt ist, die Maßnahme dem Gewerk zugeordnet wurde, die Einweisung vor Start erfolgte und der Plan nach Änderungen aktualisiert wurde – siehe [Link: /wissen/blog/baustellv-vorankuendigung-sige-plan|Vorankündigung und Plan].",
      "Auch Unternehmer ohne Beschäftigte nach § 6 BaustellV müssen SiGe-Plan und Hinweise des Koordinators beachten – zum Beispiel beim Ein-Mann-Abbruch mit anschließendem Subunternehmer.",
      "H2::Checkliste für den SiGe-Plan",
      "Vor Baustart sollten Sie wissen, welche Anhang-II-Nummern in welcher Bauphase gelten, welches Gewerk und welcher Arbeitgeber dafür verantwortlich ist und welche Maßnahme vor dem Erstbetritt des Gewerks gilt. Klären Sie außerdem, wer wann einweist und wie das dokumentiert wird.",
      "Legen Sie Begehungsrhythmus, Umgang mit Änderungen (Kran, Wetter, neuer Subunternehmer), Notfall und Erste Hilfe fest – und stimmen Sie das mit [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38] und [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 ArbSchG] ab.",
      "H2::Typische Mängel bei Begehungen",
      "Oft fehlt die nummerierte Zuordnung zu Anhang II, die Absturzsicherung ist nur für ein Gewerk geplant und der Dachdecker wurde „vergessen“, oder eine Sprengung erfolgt ohne dokumentierte Nachkontrolle. Auch der Abstand zur Hochspannung steht nicht in der Einweisung, der Plan ist nach Kranumstellung veraltet, oder Gefahrstoffe nach Punkt 2 haben kein Lagerkonzept.",
      "Health and Safety+ unterstützt SiGeKo und SiGe-Plan in Köln und NRW – [Link: /wissen/blog/baustellv-sigeko-koordination-aufgaben|SiGeKo-Aufgaben], [Link: /sigeko|Leistungen], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Reicht Gerüst unter 7 m Höhe?",
        answer:
          "Anhang II Nr. 1 Absturz gilt ab mehr als 7 m. Darunter greift die Norm für Absturz oft nicht – ArbSchG, DGUV V38 und TRBS gelten trotzdem. Im SiGe-Plan Absturzthemen dennoch abbilden, besonders an Dachkanten und offenen Decken.",
      },
      {
        question: "Welche Anhang-II-Punkte löst ein EFH-Neubau aus?",
        answer:
          "Häufig Nr. 1 (Baugrube, Dach/Absturz am Gerüst), ggf. Nr. 10 (Kran/Elemente). Nr. 2 nur bei relevanten Stoffen. Entscheidend: mehrere Gewerke nacheinander → SiGeKo und Plan prüfen, nicht pauschal „kein Anhang II“.",
      },
      {
        question: "Innenausbau ohne Absturz – Anhang II?",
        answer:
          "Möglich – prüfen ob Nr. 2 (Lösemittel, Kleber), Nr. 10 (Massivteile mit Kran) oder Nr. 4 (Tiefbauanschluss) greifen. Innenausbau im Bestand: [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Leistungsumfang SiGeKo].",
      },
      {
        question: "Wer führt Anhang-II-Arbeiten aus?",
        answer:
          "Das jeweilige ausführende Gewerk – SiGeKo koordiniert, benennt Maßnahmen im Plan und dokumentiert Begehungen. Unternehmerhaftung bleibt beim AG/Unternehmer.",
      },
      {
        question: "Sprengarbeit – wer koordiniert?",
        answer:
          "Sprengfirma (Fachausführung), SiGeKo (Plan, Schnittstellen), Bauleitung (Termin, Nachbarschaft). Sicherheitsradius, Evakuierung, Nachkontrolle schriftlich im SiGe-Plan und Begehungsprotokoll.",
      },
      {
        question: "Braucht Anhang II immer einen SiGeKo?",
        answer:
          "SiGeKo bei mehreren AG (§ 3). SiGe-Plan-Pflicht besonders bei § 2 Abs. 3 – mehrere AG plus Anhang II oder Vorankündigung mit mehreren AG. Ein AG allein: Unterrichtung nach § 2 Abs. 4 statt vollem Plan – Details im [Link: /wissen/blog/baustellv-vorankuendigung-sige-plan|Vorankündigungs-Artikel].",
      },
    ],
  },
  {
    slug: "sigeko-pflicht-wann-braucht-man-sigeko",
    title: "SiGeKo-Pflicht – Wann braucht man einen SiGeKo auf der Baustelle?",
    excerpt:
      "SiGeKo-Pflicht nach BaustellV: wann Koordination Pflicht ist, Anhang II, Planungs- und Ausführungsphase, Bauherrpflichten und typische Fehler – für Bauherren in Köln und NRW.",
    date: "2025-03-27",
    dateModified: "2026-05-26",
    content: [
      "Die Baustellenverordnung (BaustellV) verpflichtet Bauherren, einen Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) zu bestellen, wenn auf einer Baustelle Beschäftigte mehrerer Arbeitgeber gleichzeitig oder nacheinander tätig werden. Gesamtüberblick: [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV einfach erklärt]. Die Pflicht hängt nicht vom Bauvolumen ab – auch Einfamilienhaus-Neubau, Innenausbau im Bestand oder innerstädtischer Umbau können betroffen sein – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Zwei Auslöser sind zu trennen: (1) Koordinationspflicht – mehrere Arbeitgeber auf der Baustelle; der SiGeKo koordiniert das Zusammenwirken der Unternehmen nach RAB 30. (2) Besonders gefährliche Arbeiten nach Anhang II BaustellV – dann gelten erhöhte Anforderungen an Planung, Aufsicht und Dokumentation im SiGe-Plan, auch wenn nur wenige Gewerke nacheinander tätig werden.",
      "Anhang II (Auswahl, nicht abschließend): Arbeiten mit Absturzgefahr (Dach, Gerüst, Abbruch in Höhe), Arbeiten in Gräben, Schächten, Tunneln und unter Tage, Abbruch- und Sprengarbeiten, Arbeiten mit erheblicher Gefahr durch Gefahrstoffe oder biologische Arbeitsstoffe, Arbeiten in der Nähe von Hochspannungsleitungen, große Höhenunterschiede bei gleichzeitigen Tätigkeiten. Der SiGe-Plan muss diese Tätigkeiten benennen und Schutzmaßnahmen den Gewerken zuordnen – nicht nur allgemeine Hinweise.",
      "Vorplanungsphase: Der Koordinator für die Planung (SiGeKo Planung) bringt sicherheitsrelevante Aspekte in die Planung ein – Rettungswege, Baustellenlogistik, Kranstellplätze, temporäre Elektroinstallation, Sozialräume, Absturzsicherung in der Ausführungsplanung. Wer den SiGeKo erst nach Baubeginn bestellt, verschenkt den größten Hebel; Vorankündigung und Baustellenordnung leiden unter verspäteter Einbindung.",
      "Ausführungsphase: Der Koordinator für die Ausführung (SiGeKo Ausführung) koordiniert die Maßnahmen der Unternehmen, pflegt und versioniert den SiGe-Plan, führt Begehungen durch, begleitet Einweisungen und dokumentiert Übergaben zwischen Bauabschnitten. Er ersetzt keine Unternehmerverantwortung – jeder ausführende Betrieb bleibt für seine Beschäftigten und seine eigene Gefährdungsbeurteilung zuständig.",
      "Neben der BaustellV bleibt die Koordination auf gemeinsamen Arbeitsplätzen nach [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 ArbSchG] und DGUV-Regeln relevant: bei gegenseitiger Gefährdung benennen Unternehmen eine Person, die Arbeiten abstimmt; bei besonderen Gefahren mit Weisungsbefugnis. Das entbindet den Bauherrn nicht von der SiGeKo-Pflicht nach BaustellV – beide Ebenen laufen parallel.",
      "H2::Umsetzung in der Praxis",
      "Bauherrpflichten (Kern): Koordinator bestellen und auf Qualifikation achten, SiGe-Plan erstellen lassen und bei Lageänderungen fortzuschreiben, Vorankündigung an die zuständige Behörde, Information der einweisenden Unternehmen, Mittel, Zugang und Unterlagen für den SiGeKo. Einzelne Aufgaben können an Projektleitung oder Architektur übertragen werden – die Verantwortung für Wirksamkeit bleibt beim Bauherrn. Fehlt der Koordinator trotz Voraussetzungen, drohen Ordnungswidrigkeiten und Stillstandsrisiken bei Begehungen.",
      "Die Qualifikation nach RAB 30 umfasst baufachliche, arbeitsschutzfachliche und koordinatorspezifische Kenntnisse – in der Praxis häufig bei Ingenieuren, Architekten oder Fachkräften für Arbeitssicherheit mit SiGeKo-Zusatzqualifikation. Nachweise, Fortbildung und Referenzprojekte gehören in die Ausschreibung, nicht nur in den Preisvergleich.",
      "Häufig fehlt die Versionierung des SiGe-Plans und eine Fortschreibung bei Lageänderungen, Begehungen finden nur bei Behördenbesuch statt, Übergaben zwischen Rohbau und Ausbau sind undokumentiert oder die Baustellenordnung widerspricht der ArbStättV – dazu [Link: /wissen/blog/rauchen-baustelle-arbstattv-sigeko|Rauchen auf der Baustelle].",
      "Praxis Köln/NRW: Enge Grundstücke, Abbruch und Nachbarschaft erhöhen den Koordinationsbedarf. Begehungsberichte zu Seitenschutz und Absturz in der Abbruchphase: [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|SiGeKo-Begehung Abbruch]. Schnittstellen zwischen Gewerken: [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|Gefährdungsbeurteilung bei mehreren Gewerken].",
      "Ablauf ab Auftrag (Neubau-Beispiel): [Link: /wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw|Projektverlauf Wohngebäude]. Honorar: [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung] und [Link: /wissen/blog/sigeko-koeln-kosten|Kosten Köln].",
      "Health and Safety+ übernimmt SiGeKo in Köln und NRW – [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub], [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab wann ist ein SiGeKo Pflicht?",
        answer:
          "Wenn Beschäftigte mehrerer Arbeitgeber gleichzeitig oder nacheinander auf der Baustelle tätig sind – unabhängig vom Bauvolumen, auch beim EFH-Neubau mit mehreren Gewerken.",
      },
      {
        question: "Was löst Anhang II aus?",
        answer:
          "Besonders gefährliche Arbeiten wie Absturz über 7 m, Abbruch, Sprengung, Gefahrstoffe – dann erhöhte Anforderungen an SiGe-Plan und Dokumentation, auch ohne Vorankündigung.",
      },
      {
        question: "Typische Fehler bei SiGeKo-Pflicht?",
        answer:
          "SiGeKo erst nach Baubeginn, kein SiGe-Plan vor Baustart, keine Versionierung bei Lageänderung, undokumentierte Übergabe Rohbau/Ausbau – in Köln und NRW Standard.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar] und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      },
    ],
  },
  {
    slug: "externe-fachkraft-arbeitssicherheit-koeln",
    title: "Externe Fachkraft für Arbeitssicherheit in Köln – Vorteile, Ablauf und Kosten",
    excerpt:
      "Externe Fachkraft für Arbeitssicherheit in Köln und NRW: Pflicht nach ASiG, Betreuungsumfang nach DGUV V2, Ablauf, Kosten und Abgrenzung zur internen Betreuung.",
    date: "2025-03-29",
    dateModified: "2026-05-26",
    content: [
      "Nach ASiG § 5 und [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2] bestellt der Arbeitgeber eine Fachkraft für Arbeitssicherheit – intern oder extern. Die Wahl ist keine Formalität: Ohne schriftliche Bestellung, ausreichende Arbeitszeit und Zugang zu Arbeitsstätten und Unterlagen fehlt bei Begehungen der Berufsgenossenschaft oder Gewerbeaufsicht die Nachweisführung – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Für viele KMU in Köln und NRW ist externe Betreuung sinnvoll, wenn im Haus keine ASiG-Qualifikation, keine Vertretung bei Urlaub und Krankheit und kein ausreichendes Stundenkontingent für Grund- und betriebsspezifische Aufgaben vorhanden sind. Der Betriebsarzt bleibt parallel Pflicht – Fachkraft für Arbeitssicherheit und Betriebsarzt ergänzen sich ([Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz]).",
      "Vorteile extern: branchenübergreifende Erfahrung, aktuelle Rechts- und DGUV-Kenntnis, neutrale Benennung von Missständen gegenüber der Geschäftsführung, skalierbare Arbeitszeit nach Anlagen der DGUV V2. Schnittstellen zu [Link: /brandschutz|Brandschutz] (betrieblich und bauordnungsrechtlich) und [Link: /sigeko|SiGeKo] auf Baustellen können aus einer Hand abgestimmt werden – weniger Lücken zwischen Betrieb, Baustelle und Genehmigung.",
      "Ein typischer Ablauf sieht so aus. [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung] und Betreuungsplan mit Grund- und Zusatzbausteinen, danach [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftliche Bestellung] mit Arbeitszeit, Zugangsrechten und Reaktionszeiten, anschließend Erstellung und Fortschreibung von Gefährdungsbeurteilungen, Begehungen mit Maßnahmenplan, [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen], Vorbereitung des Arbeitsschutzausschusses bei mehr als 20 Beschäftigten, [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht] nach § 5 DGUV V2. Erstes Vertragsjahr strukturiert: [Link: /wissen/blog/externe-fasi-erstes-vertragsjahr-ablauf|Jahresablauf externe Betreuung].",
      "Kosten: Die Grundbetreuung richtet sich nach Betriebsart und Beschäftigtenzahl (Anlagen in der DGUV V2); betriebsspezifische Anteile nach Gefährdungen – Maschinen, Gefahrstoffe, Höhenarbeit, Außendienst, mehrere Standorte, psychische Belastung. Seriöse Angebote basieren auf Ist-Analyse und Begehung – keine undifferenzierte Pauschale „für alle Betriebe“ ohne Kenntnis des Betriebs.",
      "H2::Umsetzung in der Praxis",
      "Intern vs. Extern: Intern lohnt sich bei sehr spezifischer Technik, hohem Betreuungsvolumen und nachweisbarer Qualifikation im Haus mit Vertretung. Extern bei Wechselbelastung, fehlender Befähigung, mehreren Standorten oder wenn Neutralität gegenüber Führungskräften und dokumentierte Unabhängigkeit gefordert sind.",
      "Vertraglich klären: schriftliche Bestellung, verbindliche Arbeitszeit, Zugang zu Unterlagen und Arbeitsstätten, Reaktionszeiten bei akuten Mängeln, Abgrenzung Mehrleistungen, Vertretungsregelung. Die Geschäftsführung bleibt verantwortlich für Umsetzung und Budget der Maßnahmen – die Fachkraft für Arbeitssicherheit berät und dokumentiert, ersetzt die Leitung nicht.",
      "In der Praxis treten häufig folgende Fehler auf. Bestellung ohne Arbeitszeit. Gefährdungsbeurteilung nur als Vorlage ohne Begehung. Jahresbericht ohne Bezug zu umgesetzten Maßnahmen. Keine Einbindung in den Arbeitsschutzausschuss trotz mehr als 20 Beschäftigten.",
      "Health and Safety+ übernimmt in Köln und NRW die Funktion der externen Fachkraft für Arbeitssicherheit – [Link: /arbeitsschutz|Leistungen Arbeitsschutz], [Link: /brandschutz|Brandschutz], [Link: /sigeko|SiGeKo]. [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber Arbeitsschutz im Unternehmen], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann lohnt sich externe SiFa in Köln?",
        answer:
          "Bei fehlender interner Qualifikation, fehlender Vertretung, mehreren Standorten oder wenn neutrale Beratung gegenüber Führungskräften gefordert ist – Betriebsarzt bleibt parallel Pflicht.",
      },
      {
        question: "Was gehört in den Betreuungsvertrag?",
        answer:
          "Schriftliche Bestellung, verbindliche Arbeitszeit, Zugangsrechte, Reaktionszeiten, Abgrenzung Mehrleistungen, Vertretungsregelung – siehe [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2].",
      },
      {
        question: "Typische Mängel bei externer Betreuung?",
        answer:
          "Bestellung ohne Arbeitszeit, GBU nur als Vorlage ohne Begehung, Jahresbericht ohne Bezug zu Maßnahmen, keine ASA-Einbindung ab 20 Beschäftigten.",
      },
      {
        question: "Ablauf im ersten Jahr?",
        answer:
          "[Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung], Bestellung, GBU, Begehungen – strukturiert in [Link: /wissen/blog/externe-fasi-erstes-vertragsjahr-ablauf|erstem Vertragsjahr].",
      },
    ],
  },
  {
    slug: "arbeitsschutzberatung-unternehmen",
    title: "Arbeitsschutzberatung für Unternehmen – Leistungen, Ablauf und Nutzen",
    excerpt:
      "Arbeitsschutzberatung durch die Fachkraft für Arbeitssicherheit: Leistungen nach ArbSchG und ASiG, Ablauf, Abgrenzung zur Arbeitgeberverantwortung und Nutzen für Betriebe in Köln und NRW.",
    date: "2025-04-01",
    dateModified: "2026-05-26",
    content: [
      "Arbeitsschutzberatung verbindet gesetzliche Pflichten nach ArbSchG, ASiG und Unfallverhütungsvorschriften mit betrieblicher Umsetzbarkeit. Die Fachkraft für Arbeitssicherheit berät den Arbeitgeber in sicherheitstechnischen Fragen – sie ersetzt weder die Geschäftsführung noch die Verantwortung für Maßnahmen, Budget und Fristen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Rechtliche Grundlage: ASiG § 5 verpflichtet zur Bestellung; [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2] regelt Umfang (Grund- und betriebsspezifische Betreuung), Betreuungsplan und Jahresbericht. Die Beratung setzt die Pflichten aus § 3 ArbSchG (wirksamer Arbeitsschutz) und § 5 ArbSchG (Gefährdungsbeurteilung) in konkrete Maßnahmen um.",
      "Leistungsspektrum: Erstellung und Fortschreibung von [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilungen], Sicherheitsbegehungen mit priorisiertem Maßnahmenplan, organisatorische und technische Schutzmaßnahmen nach dem STOP-Prinzip, PSA-Beratung, [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen], Betriebsanweisungen, Vorbereitung des Arbeitsschutzausschusses bei mehr als 20 Beschäftigten, Stellungnahmen zu Einzelfragen (z. B. [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Prüfpflicht Handhubwagen]). Schnittstellen: [Link: /brandschutz|Brandschutz], [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit], bei Baustellen [Link: /sigeko|SiGeKo].",
      "Ein typischer Beratungsablauf beginnt mit Erstgespräch und Klärung des Betreuungsbedarfs, gefolgt von einer Ist-Analyse von Dokumentation, Arbeitsplätzen und Prozessen. Daraus entsteht eine priorisierte Maßnahmenliste mit Verantwortlichen und Fristen. Die Geschäftsführung setzt die Maßnahmen um, die Fachkraft für Arbeitssicherheit begleitet und kontrolliert die Wirksamkeit in regelmäßigen Reviews. Ein Bericht oder eine Gefährdungsbeurteilung ohne Follow-up und Nachkontrolle erfüllen die Pflichten nicht.",
      "Abgrenzung: Die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftliche Bestellung] regelt Umfang und Arbeitszeit. Betriebsarzt, [Link: /wissen/blog/sicherheitsbeauftragte-schulung-koeln|Sicherheitsbeauftragte] (bei mehr als 20 Beschäftigten) und [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] haben eigene Rollen – sie ergänzen die Beratung, ersetzen sie nicht ([Link: /wissen/blog/akteure-arbeitsschutz|Überblick Akteure]).",
      "H2::Umsetzung in der Praxis",
      "Dokumentation: Maßnahmenpläne, Protokolle von Begehungen und ASA, Unterweisungsnachweise und Versionen der Gefährdungsbeurteilung müssen zusammenpassen – typischer Befund bei Prüfungen sind widersprüchliche Datenstände.",
      "Nutzen über die reine Pflichterfüllung: weniger Arbeitsunfälle und Fehlzeiten, geringeres [Link: /wissen/blog/strafen-arbeitsschutz|Bußgeld- und Haftungsrisiko], bessere Vorbereitung auf Begehungen der Berufsgenossenschaft und Gewerbeaufsicht, nachvollziehbare Dokumentation für [Link: /wissen/blog/iso-45001-arbeitsschutzmanagementsystem|ISO 45001] oder Ausschreibungen.",
      "Für KMU in Köln und NRW: modulare Betreuung statt isolierter Einzelprojekte – ein Ansprechpartner für Arbeitsschutz, brandschutzliche Themen und bei Bedarf Baustellenkoordination. Auswahl externer Partner: [Link: /wissen/blog/arbeitsschutz-dienstleister-nrw|Arbeitsschutz-Dienstleister in NRW], [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft Köln].",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Prüfungen sollten Maßnahmenplan, Begehungsprotokolle und Unterweisungsnachweise zum gleichen Stand wie die Gefährdungsbeurteilung vorliegen. Widersprüchliche Datenstände sind ein häufiger Befund – die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] sollte vor Begehungen einen Abgleich durchführen.",
      "Health and Safety+ berät als Fachkraft für Arbeitssicherheit in Köln und NRW – [Link: /arbeitsschutz|Leistungen Arbeitsschutz], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was umfasst Arbeitsschutzberatung?",
        answer:
          "GBU, Begehungen, Maßnahmenplan, Unterweisungen, ASA-Vorbereitung, Betriebsanweisungen, Jahresbericht – die SiFa berät, die Geschäftsführung entscheidet und setzt um.",
      },
      {
        question: "Ersetzt Beratung die Arbeitgeberpflicht?",
        answer:
          "Nein – Verantwortung für Maßnahmen, Budget und Fristen bleibt bei der Leitung. SiFa hat in der Regel keine Weisungsbefugnis über Führungskräfte.",
      },
      {
        question: "Nutzen über Pflichterfüllung?",
        answer:
          "Weniger Unfälle, geringeres [Link: /wissen/blog/strafen-arbeitsschutz|Bußgeldrisiko], bessere Vorbereitung auf BG-Begehungen, Nachweise für [Link: /wissen/blog/iso-45001-arbeitsschutzmanagementsystem|ISO 45001].",
      },
      {
        question: "Für KMU in Köln und NRW?",
        answer:
          "Modulare Betreuung aus einer Hand – Arbeitsschutz, [Link: /brandschutz|Brandschutz], bei Bedarf [Link: /sigeko|SiGeKo]. Auswahl: [Link: /wissen/blog/arbeitsschutz-dienstleister-nrw|Dienstleister NRW].",
      },
    ],
  },
  {
    slug: "sicherheitsbeauftragte-schulung-koeln",
    title: "Sicherheitsbeauftragte Schulung in Köln – Pflicht, Inhalte und Ablauf",
    excerpt:
      "Sicherheitsbeauftragte nach § 22 SGB VII: Bestellung bei mehr als 20 Beschäftigten, Schulungsinhalte, Abgrenzung zur Fachkraft für Arbeitssicherheit und Praxis in Köln/NRW.",
    date: "2025-04-03",
    dateModified: "2026-06-26",
    content: [
      "Sicherheitsbeauftragte (SiBe) unterstützen den Arbeitgeber bei der Umsetzung des Arbeitsschutzes vor Ort. Nach § 22 SGB VII sind sie in Betrieben mit regelmäßig mehr als 20 Beschäftigten zu bestellen; die genaue Anzahl richtet sich nach DGUV Vorschrift 1 (Betriebsgröße, Gefährdung, Gebäudestruktur, Schichtbetrieb) – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Aufgaben: Gefahren früh erkennen und melden, Kollegen sensibilisieren, Schutzeinrichtungen im Blick behalten, Ansprechpartner für Beschäftigte – ohne Weisungsbefugnis gegenüber anderen. SiBe ergänzen [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt, ersetzen sie nicht.",
      "Bestellung schriftlich durch den Arbeitgeber; Einbindung in den Arbeitsschutzausschuss (bei mehr als 20 Beschäftigten) und in Begehungsprotokolle. Gemeldete Mängel gehen an Vorgesetzte oder die Fachkraft für Arbeitssicherheit – Follow-up und Maßnahmenstatus dokumentieren.",
      "Schulung: Der Arbeitgeber stellt sicher, dass SiBe ihre Aufgaben kennen – ArbSchG-Grundlagen, Rolle und Grenzen der SiBe, Gefahrenerkennung am Arbeitsplatz, Grundlagen Brandschutz und Erste Hilfe, Zusammenarbeit mit der Fachkraft für Arbeitssicherheit. Dauer in der Praxis oft ein bis zwei Tage; Auffrischung alle drei bis fünf Jahre empfohlen, anlassbezogen nach Unfällen oder Umbauten.",
      "H2::Umsetzung in der Praxis",
      "Abgrenzung: SiBe-Schulung ist nicht die [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung aller Beschäftigten] nach § 12 ArbSchG und nicht die Ausbildung [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] nach ASR A2.2/DGUV 205-023.",
      "Praxis Köln/NRW: betriebsspezifische Beispiele aus Lager, Werkstatt oder Sozialwirtschaft statt generischer Folien; SiBe als Brücke zwischen Belegschaft und Fachkraft für Arbeitssicherheit. Schulungsnachweise und Bestellungsurkunden archivieren.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten schriftliche Bestellungen, Schulungsnachweise und ein dokumentierter Meldeweg für SiBe-Mängel vorliegen. SiBe ersetzen weder SiFa noch die [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung aller Beschäftigten].",
      "Sicherheitsbeauftragte nach § 22 SGB VII unterstützen den Arbeitgeber bei Unfallverhütung – freiwillig, aber in vielen Betrieben in Köln und NRW Standard. Sie brauchen qualifizierte Schulung, klare Aufgabenbeschreibung und Einbindung in ASA und Begehungen.",
      "SiBe ersetzen weder [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] noch Betriebsarzt – Rollenklärung vermeidet Haftungslücken. [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber Arbeitsschutz].",
      "Health and Safety+ führt SiBe-Schulungen in Köln und NRW durch – [Link: /schulungen|Schulungen], [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab wann SiBe bestellen?",
        answer:
          "Nach § 22 SGB VII in Betrieben mit regelmäßig mehr als 20 Beschäftigten – genaue Anzahl nach DGUV V1 und Betriebsstruktur.",
      },
      {
        question: "Was lernen SiBe in der Schulung?",
        answer:
          "ArbSchG-Grundlagen, Rolle und Grenzen, Gefahrenerkennung, Brandschutz- und Erste-Hilfe-Grundlagen, Zusammenarbeit mit SiFa – nicht Weisungsbefugnis.",
      },
      {
        question: "Abgrenzung zu Brandschutzhelfer?",
        answer:
          "SiBe-Schulung ist nicht [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer-Ausbildung] und nicht die allgemeine Unterweisung nach § 12 ArbSchG.",
      },
      {
        question: "Typische Mängel in Köln?",
        answer:
          "SiBe benannt ohne Schulung, keine Einbindung in ASA, gemeldete Mängel ohne Follow-up, generische Folien statt betriebsspezifischer Beispiele.",
      },
    ],
  },
  {
    slug: "arbeitsschutz-dienstleister-nrw",
    title: "Arbeitsschutz Dienstleister in NRW finden – worauf Unternehmen achten sollten",
    excerpt:
      "Arbeitsschutz-Dienstleister in NRW: Qualifikation der Fachkraft für Arbeitssicherheit, Leistungsspektrum, Vertragsinhalte und Warnhinweise bei der Auswahl – für Arbeitgeber in Köln und NRW.",
    date: "2025-04-05",
    dateModified: "2026-06-26",
    content: [
      "Die Wahl des Arbeitsschutz-Dienstleisters in NRW entscheidet über Qualität der Betreuung, Revisionssicherheit bei BG-Begehungen und im Schadensfall – nicht nur über den Preis. Der Dienstleister handelt als Fachkraft für Arbeitssicherheit im Auftrag des Arbeitgebers; die Gesamtverantwortung bleibt bei der Geschäftsführung.",
      "H2::Was gilt rechtlich?",
      "Bei der Auswahl sollten Sie die Qualifikation prüfen: Nachweis der Befähigung nach [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2], Berufserfahrung und idealerweise Branchenkenntnis in Logistik, Handwerk, Sozialwirtschaft, Technik oder Bau. Fordern Sie Referenzprojekte, ein Beispiel einer [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftlichen Bestellung] und eines [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresberichts] an.",
      "Leistungsspektrum: Grund- und betriebsspezifische Betreuung, [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilungen], Begehungen, Unterweisungen, ASA-Vorbereitung, Jahresbericht – optional [Link: /brandschutz|Brandschutz] (betrieblich und Konzept), [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrokoordination], [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo]. Weniger Schnittstellen bedeuten weniger Lücken.",
      "Vertrag: verbindliche Arbeitszeit, Zugangsrechte, Reaktionszeiten, Abgrenzung Mehrleistungen, Kündigungs- und Vertretungsregelung. Ohne Arbeitszeit im Vertrag ist die Betreuung bei Prüfungen nicht nachweisbar.",
      "H2::Umsetzung in der Praxis",
      "Regionale Nähe Köln/NRW: kurze Wege für Begehungen und Akutfälle; Kenntnis der Praxis von Berufsgenossenschaft und Gewerbeaufsicht im Land.",
      "Kosten: Angebot nach [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung], keine undifferenzierte Pauschale ohne Analyse.",
      "Vor Vertragsabschluss lohnt sich ein strukturierter Vergleich: zwei bis drei Anbieter mit gleicher Betriebsbeschreibung (Beschäftigtenzahl, Gefährdungen, Standorte) anfragen, Betreuungsplan und Stundenumfang gegenüberstellen, Probebegehung vereinbaren. In Köln und NRW prüfen BG und Gewerbeaufsicht nicht nur die Bestellung, sondern ob die vereinbarte Zeit auch fachlich nachvollziehbar genutzt wird.",
      "Der [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber Arbeitsschutz im Unternehmen] bündelt Rollen, ASA und Betreuungsplan – einzelne Blogartikel vertiefen [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2] und [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung] vor der Anbieterwahl.",
      "Dokumentieren Sie die Auswahlentscheidung schriftlich – Anbietervergleich, vereinbarte Leistungen und Betreuungsumfang – für Revisionssicherheit bei BG-Begehungen.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei der Anbieterwahl sollten Qualifikationsnachweis, schriftliche Bestellung, verbindliche Arbeitszeit und ein Beispiel-Jahresbericht vorliegen – undifferenzierte Pauschalen ohne Ist-Analyse sind ein Warnsignal.",
      "Warnsignale sind fehlende schriftliche Bestellung, Copy-Paste-Gefährdungsbeurteilungen ohne Begehung oder Unterweisungen ohne Nachweis. Health and Safety+ – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft Köln], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Worauf bei Dienstleister-Auswahl achten?",
        answer:
          "Befähigung nach DGUV V2, Branchenerfahrung, Referenzprojekte, Leistungsspektrum (GBU, Begehung, ASA, optional Brandschutz/SiGeKo), vertragliche Arbeitszeit.",
      },
      {
        question: "Was muss im Vertrag stehen?",
        answer:
          "Arbeitszeit, Zugangsrechte, Reaktionszeiten, Mehrleistungen, Kündigung, Vertretung – ohne Arbeitszeit ist Betreuung bei Prüfungen nicht nachweisbar.",
      },
      {
        question: "Warnsignale bei Angeboten?",
        answer:
          "Keine schriftliche Bestellung, Copy-Paste-GBU ohne Begehung, Unterweisungen ohne Nachweis, Preis ohne Ist-Zustandserfassung.",
      },
      {
        question: "Regional Köln/NRW?",
        answer:
          "Kurze Wege für Begehungen, Kenntnis der BG- und Gewerbeaufsichtspraxis im Land – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe SiFa Köln].",
      },
    ],
  },
  {
    slug: "unterweisung-arbeitssicherheit-pflicht",
    title: "Unterweisung Arbeitssicherheit – gesetzliche Pflicht für jeden Arbeitgeber",
    excerpt:
      "Unterweisung nach § 12 ArbSchG: Pflichten, Anlässe, Inhalte aus der Gefährdungsbeurteilung, Organisation und Dokumentation – Überblick für Arbeitgeber in Köln und NRW.",
    date: "2025-04-07",
    dateModified: "2026-06-26",
    content: [
      "Nach § 12 ArbSchG hat der Arbeitgeber Beschäftigte über Arbeitsplatz-Gefahren und Schutzmaßnahmen zu unterweisen – ausreichend, verständlich, während der Arbeitszeit und nachvollziehbar dokumentiert. Die Inhalte leiten sich in erster Linie aus der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] ab – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Unterweisungspflichten bestehen vor Aufnahme der Tätigkeit, bei Veränderungen von Arbeitsmitteln, Stoffen oder Verfahren, nach Unfällen und Beinahe-Ereignissen, bei geänderter Gefährdungsbeurteilung und in der Regel mindestens jährlich. Jugendliche Auszubildende sind nach JArbSchG mindestens halbjährlich zu unterweisen. Bei Leiharbeit unterweist der Entleiher nach § 12 Abs. 2 ArbSchG.",
      "Inhalte: arbeitsplatzspezifische Gefahren und Maßnahmen nach STOP-Prinzip, Betriebsregeln, [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen] zu Gefahrstoffen, Notfallverhalten, PSA, Ergonomie. [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz] und [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit] als Querschnitt – getrennte Nachweise, wenn Inhalte unterschiedlich sind.",
      "Form: Präsenz oder digital mit Verständnisabfrage und erreichbarer Ansprechperson; für PSA, Gefahrstoffe und Arbeitsmittel empfiehlt die Arbeitsschutzverwaltung NRW oft Präsenz mit Demonstration am Arbeitsplatz.",
      "H2::Umsetzung in der Praxis",
      "Organisation: Unterweisungsmatrix (Thema × Zielgruppe × Frist), Verantwortliche, Jahresplan, Review im ASA. Fachkraft für Arbeitssicherheit und Betriebsarzt wirken bei Inhalt und Durchführung mit.",
      "Dokumentation: Datum, Thema, Teilnehmer, Referent, Bezug zur Version der Gefährdungsbeurteilung oder Betriebsanweisung. Lücken sind Standard-Befunde bei BG-Begehungen. Vertiefung: [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Fristen und Dokumentation].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor BG-Begehungen sollten Unterweisungsmatrix, aktuelle Nachweise und Bezug zur GBU-Version geprüft werden. Lücken entstehen typischerweise, wenn die Unterweisung älter als ein Jahr ist, die GBU aber kürzlich geändert wurde.",
      "In der Praxis scheitern Unterweisungen oft an fehlender Zielgruppenlogik: Büro, Produktion, Leiharbeit und Fremdfirmen auf Baustellen brauchen unterschiedliche Inhalte und Nachweise. Eine Matrix „Thema × Personengruppe × Frist“ ist der Standard bei BG-Begehungen in NRW.",
      "Digitale Formate sind zulässig, wenn Verständnis und Erreichbarkeit gesichert sind – bei PSA, Gefahrstoffen und Maschinen empfiehlt die Arbeitsschutzverwaltung NRW weiterhin Präsenz am Arbeitsplatz.",
      "Health and Safety+ plant und führt Unterweisungen in Köln und NRW durch – [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer muss unterweisen?",
        answer:
          "Der Arbeitgeber nach § 12 ArbSchG – ausreichend, verständlich, während der Arbeitszeit. SiFa und Betriebsarzt wirken bei Inhalt und Durchführung mit.",
      },
      {
        question: "Welche Anlässe lösen Unterweisung aus?",
        answer:
          "Einstellung, Verfahrensänderung, neue Arbeitsmittel, Unfälle, geänderte GBU – plus regelmäßige Wiederholung, in NRW meist jährlich.",
      },
      {
        question: "Leiharbeit – wer unterweist?",
        answer:
          "Der Entleiher nach § 12 Abs. 2 ArbSchG vor Tätigkeitsbeginn; der Verleiher stellt sicher, dass unterwiesen wurde.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Fristen und Dokumentation] und [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen Gefahrstoffe].",
      },
    ],
  },
  // ArbSchG-Hub: Arbeitsschutzgesetz – Megabrain-Einstieg
  {
    slug: "arbeitsschutzgesetz-arbschg-uebersicht",
    title: "ArbSchG einfach erklärt – Pflichten für Arbeitgeber in Köln und NRW",
    excerpt:
      "ArbSchG für Arbeitgeber: Prävention § 4, GBU § 5, Unterweisung § 12, Notfall § 10 und Behörde § 21 – Einstieg für Köln und NRW.",
    date: "2025-04-12",
    dateModified: "2026-05-26",
    content: [
      "Das Arbeitsschutzgesetz (ArbSchG) ist das zentrale Bundesgesetz für Sicherheit und Gesundheit bei der Arbeit – für nahezu alle Beschäftigungsverhältnisse, unabhängig von Betriebsgröße und Branche. Stand Gesetz: zuletzt geändert Dezember 2025. Dieser Artikel ordnet die Pflichten für Arbeitgeber in Köln, NRW und bundesweit – ohne Gesetzestext abzutippen, aber mit klarem Bezug zur Praxis.",
      "H2::Wer ist betroffen?",
      "Nach § 1 ArbSchG müssen Arbeitgeber Sicherheit und Gesundheitsschutz bei der Arbeit sichern und verbessern – in allen Tätigkeitsbereichen. Ausgenommen sind unter anderem private Hausangestellte sowie Seeschifffahrt und Bergbau, soweit dort Sonderrecht gilt. Das ArbSchG wird durch spezielle Gesetze ergänzt, nicht ersetzt: [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|Jugendarbeitsschutzgesetz], [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Mutterschutzgesetz], [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX] und auf Baustellen die [Link: /wissen/blog/baustellv-einfach-erklaert|Baustellenverordnung].",
      "H2::Pflichten des Arbeitgebers – die Säulen",
      "Die Grundpflichten des § 3 ArbSchG verlangen, dass der Arbeitgeber alle erforderlichen Maßnahmen trifft, ihre Wirksamkeit prüft und die nötige Organisation sowie Mittel bereitstellt. Die Kosten dürfen nicht auf Beschäftigte abgewälzt werden. § 4 formuliert die Präventionsgrundsätze: Gefahren an der Quelle bekämpfen, technische, arbeitsmedizinische und hygienische Aspekte berücksichtigen, individuelle Schutzmaßnahmen nur nachrangig einsetzen und schutzbedürftige Gruppen besonders beachten.",
      "Im Mittelpunkt steht die Gefährdungsbeurteilung nach § 5 ArbSchG, dokumentiert nach § 6. Der Arbeitgeber muss alle relevanten Gefährdungen ermitteln – einschließlich psychischer Belastung –, Maßnahmen nach dem STOP-Prinzip festlegen und die Unterlagen fortlaufend aktualisieren. Vertiefung: [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber].",
      "Unterweisungen nach § 12 ArbSchG müssen ausreichend, angemessen und am Arbeitsplatz vermittelt werden – bei Einstellung, bei Änderungen, bei neuen Arbeitsmitteln und regelmäßig wiederholt. Bei Arbeitnehmerüberlassung unterweist der Entleiher. Details: [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung – Fristen und Dokumentation].",
      "Für Notfälle verlangt § 10 ArbSchG Maßregeln zur Ersten Hilfe, Brandbekämpfung und Evakuierung – mit benannten Personen in einem angemessenen Verhältnis zur Beschäftigtenzahl und zu den Gefahren. Auch Besucher und Kunden sind zu berücksichtigen. Vertiefung: [Link: /wissen/blog/arbschg-erste-hilfe-notfallmassnahmen|Erste Hilfe und Notfall], [Link: /wissen/blog/asr-a4-3-erste-hilfe-arbeitsstaette|ASR A4.3 Erste Hilfe].",
      "Wenn Beschäftigte mehrerer Arbeitgeber am selben Ort tätig sind, greift § 8 ArbSchG: Die Arbeitgeber müssen zusammenarbeiten, einander informieren und Maßnahmen abstimmen – etwa auf Baustellen, bei Werkverträgen oder in gemeinsam genutzten Hallen. Vertiefung: [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 Zusammenarbeit], [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU bei mehreren Gewerken].",
      "Pflichten können nach § 13 ArbSchG schriftlich an zuverlässige, fachkundige Personen übertragen werden – die Gesamtverantwortung bleibt jedoch beim Arbeitgeber. Mehr dazu: [Link: /wissen/blog/pflichtuebertragung-arbeitsschutz|Pflichtenübertragung].",
      "H2::Organisation und Beteiligung",
      "In der Praxis setzen Arbeitgeber das ArbSchG vor allem über die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und den Betriebsarzt um – bestellt nach Arbeitssicherheitsgesetz (ASiG) und [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2]. Überblick zu den Rollen: [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz].",
      "Beschäftigte wirken nach § 16 Abs. 2 ArbSchG mit: Sie melden Gefahren und unterstützen den Arbeitgeber. § 17 gibt Vorschlags- und Beschwerderechte. Ab 20 Beschäftigten kann ein Arbeitsschutzausschuss nach ASiG § 11 nötig sein – nicht zu verwechseln mit § 11 ArbSchG, der die arbeitsmedizinische Vorsorge auf Wunsch der Beschäftigten regelt.",
      "Besondere Schutzgruppen haben eigene Gesetze: [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG], [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG], [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX]. Diese ergänzen die allgemeinen ArbSchG-Pflichten.",
      "H2::Behörde, Begehung und Konsequenzen",
      "Die staatliche Aufsicht regelt § 21 ArbSchG: Zuständige Behörden überwachen und beraten. Ab 2026 müssen die Länder mindestens 5 Prozent der Betriebe pro Kalenderjahr besichtigen (§ 21 Abs. 1a). § 22 gibt der Behörde Befugnisse zu Auskunft, Betretensrecht, Messungen und Anordnungen – bis hin zur Untersagung von Arbeit bei Gefahr. Vertiefung: [Link: /wissen/blog/arbschg-gewerbeaufsicht-begehung-nrw|Behörde und Begehung in NRW].",
      "Verstöße können Bußgelder nach § 25 ArbSchG nach sich ziehen – häufig bis 5.000 Euro, bei Zuwiderhandlung gegen vollziehbare Anordnungen bis 30.000 Euro. Bei Personenschaden greift Strafrecht nach § 26 ArbSchG. Mehr: [Link: /wissen/blog/strafen-arbeitsschutz|Konsequenzen bei Verstößen].",
      "H2::Vertiefende Artikel und Checkliste",
      "Neue Spokes im Blog: [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 Mehrere Arbeitgeber], [Link: /wissen/blog/arbschg-erste-hilfe-notfallmassnahmen|§ 10 Notfall], [Link: /wissen/blog/arbschg-gewerbeaufsicht-begehung-nrw|§ 21/22 Behörde]. Bereits vertieft: [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU], [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung], [Link: /wissen/blog/pflichtuebertragung-arbeitsschutz|Pflichtenübertragung].",
      "Vor einer Begehung sollten eine aktuelle Gefährdungsbeurteilung mit Maßnahmenplan, nachweisbare Unterweisungen, benannte Ersthelfer und Notfallorganisation, bei mehreren Arbeitgebern eine schriftliche Abstimmung sowie eingebundene Fachkraft für Arbeitssicherheit und Betriebsarzt geklärt sein. Health and Safety+ – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /arbeitsschutz|Leistungen], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Gilt das ArbSchG in jedem Betrieb?",
        answer:
          "Ja – unabhängig von der Beschäftigtenzahl. Auch Ein-Personen-Betriebe mit weiteren Beschäftigten brauchen Gefährdungsbeurteilung, Unterweisung und wirksame Organisation – Umfang nach Art der Tätigkeiten.",
      },
      {
        question: "Was ist der Unterschied § 11 ArbSchG und ASiG § 11?",
        answer:
          "§ 11 ArbSchG: arbeitsmedizinische Vorsorge auf Wunsch der Beschäftigten. ASiG § 11: Arbeitsschutzausschuss ab 20 Beschäftigten. Häufiger Fehler: Beteiligung der Beschäftigten fälschlich § 11 ArbSchG zugeordnet – richtig sind § 16 und § 17 ArbSchG.",
      },
      {
        question: "Was bringt die Novelle 2025 für Betriebe?",
        answer:
          "§ 21 Abs. 1a: Ab 2026 müssen Landesbehörden mindestens 5 Prozent der Betriebe pro Jahr besichtigen – strukturierte Nachweise werden wichtiger.",
      },
      {
        question: "Ersetzt das ArbSchG TRGS, DGUV oder BaustellV?",
        answer:
          "Nein – ArbSchG ist Rahmengesetz. Konkrete Anforderungen kommen aus Rechtsverordnungen und Unfallverhütungsvorschriften, in der GBU betriebsspezifisch verknüpft.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "Spokes zu § 8, § 10 und Behörde im Blog – plus [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf] und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung].",
      },
    ],
  },
  // ArbSchG-Spoke: § 8 Zusammenarbeit mehrerer Arbeitgeber
  {
    slug: "arbschg-mehrere-arbeitgeber-zusammenarbeit",
    title: "ArbSchG § 8 – Zusammenarbeit mehrerer Arbeitgeber am gemeinsamen Arbeitsplatz",
    excerpt:
      "Mehrere Arbeitgeber auf einem Arbeitsplatz: Pflichten nach § 8 ArbSchG, Information, Abstimmung, Leiharbeit und Baustelle – für Betriebe in Köln und NRW.",
    date: "2026-05-05",
    dateModified: "2026-05-26",
    content: [
      "Subunternehmer im gleichen Gebäude, Leiharbeit im Werk, mehrere Gewerke auf der Baustelle – sobald Beschäftigte verschiedener Arbeitgeber am selben Ort arbeiten, greift § 8 ArbSchG. In Köln und NRW läuft das parallel zu BaustellV/SiGeKo und DGUV-Regeln – alle Ebenen müssen zusammenpassen.",
      "H2::Was gilt rechtlich?",
      "Nach § 8 Abs. 1 ArbSchG gilt Folgendes. Arbeitgeber arbeiten bei Sicherheit und Gesundheitsschutz zusammen – gegenseitige Unterrichtung über Gefahren, Abstimmung der Maßnahmen. Je nach Tätigkeit reicht Information; bei gemeinsamen Gefahren braucht es schriftliche Abstimmung.",
      "Nach § 8 Abs. 2 ArbSchG gilt Folgendes. Der Arbeitgeber muss sich vergewissern, dass fremde Beschäftigte in seinem Betrieb angemessene Anweisungen erhalten haben – relevant bei Werkverträgen, Facility in fremden Hallen, Montage beim Kunden.",
      "Nach § 12 Abs. 2 ArbSchG gilt Folgendes. Bei Arbeitnehmerüberlassung unterweist der Entleiher – der Verleiher bleibt für sonstige Arbeitsschutzpflichten mitverantwortlich. Schnittstelle [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung].",
      "H2::Umsetzung in der Praxis",
      "Baustelle: SiGeKo nach [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV] koordiniert – § 8 ArbSchG bleibt für jeden einzelnen Arbeitgeber verbindlich. SiGe-Plan, Begehungen, Übergaben dokumentieren. [Link: /wissen/blog/baustellv-sigeko-koordination-aufgaben|SiGeKo-Aufgaben], [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU Schnittstellen].",
      "In einem Betrieb mit mehreren Arbeitgebern im Gebäude muss geklärt sein, wer Evakuierung, Erste Hilfe und gemeinsame Fluchtwege koordiniert. Die Abstimmung erfolgt schriftlich, inklusive der Frage, wer wen bei Gefahrstoff-Umfall, Brand oder Maschinenstillstand mit Schnittstellenrisiko informiert.",
      "Besonders gefährliche Bereiche nach § 9 ArbSchG dürfen nur unterwiesene Beschäftigte betreten. Bei mehreren Arbeitgebern muss festgelegt sein, wer den Zutritt kontrolliert und wer unterweist.",
      "H2::Typische Mängel und Checkliste",
      "Keine schriftliche Abstimmung trotz gemeinsamer Gefahren. Leiharbeiter starten ohne Entleiher-Unterweisung. SiGe-Plan existiert, aber kein Nachweis der §-8-Information zwischen Nachunternehmern. Subunternehmer ohne GBU-Schnittstelle.",
      "Zur Selbstkontrolle sollten Arbeitgeber prüfen, ob die Gefahrenliste ausgetauscht wurde, die Unterweisung von Entleiher und Leiharbeit dokumentiert ist und SiGe-Plan sowie Abstimmung versioniert sind. Health and Safety+ – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ersetzt SiGeKo § 8 ArbSchG?",
        answer:
          "Nein – SiGeKo koordiniert auf Baustellen nach BaustellV. Jeder Arbeitgeber bleibt für § 8 ArbSchG und eigene GBU verantwortlich.",
      },
      {
        question: "Wer unterweist Leiharbeitnehmer?",
        answer:
          "Der Entleiher nach § 12 Abs. 2 ArbSchG – vor Tätigkeitsbeginn, arbeitsplatzbezogen.",
      },
      {
        question: "Muss die Abstimmung schriftlich sein?",
        answer:
          "Bei gemeinsamen Gefahren und Behördenanfragen nach § 22 Abs. 1 ist schriftliche Vorlage des Abstimmungsergebnisses vorgesehen – in der Praxis immer dokumentieren.",
      },
      {
        question: "Gilt § 8 auch im Bürogebäude mit mehreren Mietern?",
        answer:
          "Wenn Beschäftigte verschiedener Arbeitgeber am selben Arbeitsplatz oder mit gegenseitiger Gefährdung tätig sind – ja, mindestens Information und Abstimmung bei gemeinsamen Risiken.",
      },
    ],
  },
  // ArbSchG-Spoke: § 10 Erste Hilfe und Notfall
  {
    slug: "arbschg-erste-hilfe-notfallmassnahmen",
    title: "ArbSchG § 10 – Erste Hilfe, Brandbekämpfung und Evakuierung",
    excerpt:
      "Notfallorganisation nach § 10 ArbSchG: Ersthelfer, Brandbekämpfung, Evakuierung, Benennung, Verhältnis zur Beschäftigtenzahl – für Betriebe in Köln und NRW.",
    date: "2026-05-12",
    dateModified: "2026-06-26",
    content: [
      "Unfall, Herzstillstand, Brand, Gasalarm – § 10 ArbSchG verlangt, dass der Arbeitgeber Maßnahmen zur Ersten Hilfe, Brandbekämpfung und Evakuierung trifft – passend zu Arbeitsstätte, Tätigkeiten und Beschäftigtenzahl. In Köln und NRW konkretisiert das die DGUV Vorschrift 1 und [Link: /wissen/blog/asr-a4-3-erste-hilfe-arbeitsstaette|ASR A4.3].",
      "H2::Was gilt rechtlich?",
      "Nach § 10 Abs. 1 ArbSchG gilt Folgendes. Maßregeln nach Art der Arbeitsstätte und Tätigkeiten; auch andere Personen (Besucher, Kunden) berücksichtigen. Verbindungen zu außerbetrieblichen Stellen (Rettungsdienst, Feuerwehr) sicherstellen.",
      "Nach § 10 Abs. 2 ArbSchG gilt Folgendes. Benennung von Beschäftigten für Erste Hilfe, Brandbekämpfung und Evakuierung – Anzahl, Ausbildung und Ausrüstung im angemessenen Verhältnis zu Beschäftigten und Gefahren. Betriebsrat anhören vor Benennung.",
      "Abgrenzung § 12 Unterweisung: Notfalltraining und jährliche Brandschutzunterweisung ergänzen die Organisation – ersetzen nicht die Benennung und Ausstattung. [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung].",
      "H2::Umsetzung in der Praxis",
      "Für Ersthelfer gelten folgende Anforderungen. DGUV Vorschrift 1 und ASR A4.3 regeln Anzahl und Qualifikation – abhängig von Beschäftigtenzahl und besonderen Gefahren (Gefahrstoffe, Absturz, alleinige Arbeit). Erste-Hilfe-Kästen, Augenspülung, Defi wo sinnvoll.",
      "Im Bereich Brandbekämpfung gehören dazu [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer], Löscher, [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan], [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung]. Evakuierung: Sammelplätze, Rollstuhl-Szenarien – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX].",
      "Notfallorganisation in GBU dokumentieren: Wer alarmiert? Wer führt Evakuierung? Wer spricht Rettungsdienst an? Übungen protokollieren – Mängel in Maßnahmenplan.",
      "§ 10 ArbSchG verlangt Erste-Hilfe-Einrichtungen, ausgebildete Ersthelfer und Notfallorganisation passend zur Betriebsgröße und Gefährdung. ASR A4.3 konkretisiert Erste-Hilfe-Räume, Ausrüstung und Kennzeichnung – in NRW prüfen BG und Gewerbeaufsicht Erreichbarkeit und Auffrischung der Ersthelfer.",
      "Auf Baustellen gelten zusätzliche Anforderungen an Sanitärräume und Erste Hilfe nach BaustellV – Abstimmung mit [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo].",
      "H2::Typische Mängel und Checkliste",
      "Ersthelfer benannt, aber Schulung abgelaufen. Defi vorhanden, niemand geschult. Fluchtplan hängt, Sammelstelle blockiert. Keine Berücksichtigung von Besuchern in großen Objekten.",
      "Zur Selbstkontrolle sollten Arbeitgeber prüfen, ob Benennung schriftlich, ob Ersthelfer/BSH-Quote erfüllt, ob Notfallnummern aktuell, ob Übung dokumentiert, ob Health and Safety+ – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie viele Ersthelfer braucht ein Betrieb?",
        answer:
          "Richtet sich nach DGUV V1 und ASR A4.3 – abhängig von Beschäftigtenzahl und besonderen Gefahren. In der GBU begründen, nicht pauschal schätzen.",
      },
      {
        question: "Kann der Geschäftsführer selbst Ersthelfer sein?",
        answer:
          "Ja, wenn er die erforderliche Ausbildung hat – § 10 Abs. 2 Satz 4 erlaubt, dass der Arbeitgeber Aufgaben selbst wahrnimmt.",
      },
      {
        question: "Reicht ein Erste-Hilfe-Kasten?",
        answer:
          "Nein – § 10 verlangt Organisation inkl. benannter Personen, Ausbildung und Abstimmung mit Evakuierung/Brand – nicht nur Material.",
      },
      {
        question: "Was hat § 11 ArbSchG damit zu tun?",
        answer:
          "§ 11 regelt arbeitsmedizinische Vorsorge auf Wunsch – ein anderes Thema als Erste Hilfe nach § 10.",
      },
    ],
  },
  // ArbSchG-Spoke: § 21/22 Behörde und Begehung
  {
    slug: "arbschg-gewerbeaufsicht-begehung-nrw",
    title: "ArbSchG § 21/22 – Gewerbeaufsicht, Begehung und Mindestquote ab 2026",
    excerpt:
      "Behördenaufsicht nach ArbSchG: Beratung, Betretensrecht, Anordnungen, 5-Prozent-Mindestbesichtigungsquote ab 2026 – für Betriebe in Köln und NRW.",
    date: "2026-05-19",
    dateModified: "2026-05-26",
    content: [
      "Gewerbeaufsicht, Berufsgenossenschaft und im Ernstfall auch die Feuerwehr – Arbeitgeber in Köln und NRW werden regelmäßig geprüft. § 21 und § 22 ArbSchG regeln die staatliche Aufsicht und die Befugnisse der Behörde. Die Novelle 2025 verschärft ab 2026 die Besichtigungsintensität spürbar.",
      "H2::Was gilt rechtlich?",
      "Nach § 21 Abs. 1 ArbSchG obliegt die Überwachung und Beratung den zuständigen staatlichen Behörden – in NRW der Gewerbeaufsicht. Welche Betriebe besichtigt werden, richtet sich nach dem Gefährdungspotenzial, nicht nach Willkür.",
      "Neu ab 2026 verlangt § 21 Abs. 1a, dass jedes Land mindestens 5 Prozent der vorhandenen Betriebe pro Kalenderjahr besichtigt. Für NRW bedeutet das: strukturierte Nachweise, aktuelle Gefährdungsbeurteilungen und vorbereitete Unterlagen werden zum Standard – auch in kleineren Betrieben.",
      "Das Zusammenwirken mit den Unfallversicherungsträgern ist in § 21 Abs. 2 und 3 geregelt: gemeinsame Beratungs- und Überwachungsstrategie sowie Datenaustausch nach Besichtigungen. In der Praxis kommen Besuche von Gewerbeaufsicht und Berufsgenossenschaft oft parallel vor – mit unterschiedlichen, aber teils überlappenden Schwerpunkten.",
      "Weitreichende Befugnisse hat die Behörde nach § 22 ArbSchG: Auskunft und Einsicht in Unterlagen, Betreten und Besichtigen der Arbeitsstätte, Messungen und Anordnungen. Weigert sich der Arbeitgeber, kann die Behörde Arbeit oder Arbeitsmittel untersagen. Zuwiderhandlung gegen vollziehbare Anordnungen kann Bußgelder bis 30.000 Euro nach § 25 ArbSchG auslösen.",
      "H2::Umsetzung in der Praxis",
      "Gut vorbereitet sind Betriebe, die eine aktuelle Gefährdungsbeurteilung mit Maßnahmenplan und Wirksamkeitskontrolle vorlegen können, Unterweisungsnachweise führen, die Betreuung durch Fachkraft für Arbeitssicherheit und Betriebsarzt nachweisen sowie Prüfbücher und – ab 20 Beschäftigten – Protokolle des Arbeitsschutzausschusses bereithalten. Der [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht] gehört dazu.",
      "Während einer Begehung sollte eine verantwortliche Person – idealerweise Geschäftsführung und Fachkraft für Arbeitssicherheit – die Behörde begleiten, Feststellungen protokollieren und Anordnungen fristgerecht umsetzen. Nachweise der Umsetzung rechtzeitig zurückmelden. Begehungen der Berufsgenossenschaft laufen oft ähnlich ab, mit anderem Fokus auf Unfallverhütung.",
      "Typische Prüfpunkte sind eine vollständige Gefährdungsbeurteilung einschließlich psychischer Belastung, arbeitsplatzbezogene Unterweisungen, Ersthelfer und Notfallorganisation sowie – bei mehreren Arbeitgebern am selben Ort – die Abstimmung nach § 8 ArbSchG. Vertiefung: [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 Zusammenarbeit].",
      "H2::Typische Mängel",
      "Häufig liegt zwar ein GBU-Ordner vor, aber ohne Nachweis der Umsetzung. Unterweisungen beschränken sich auf allgemeine HR-Folien statt auf den konkreten Arbeitsplatz. Anordnungen werden nicht fristgerecht umgesetzt oder es wird keine Fristverlängerung beantragt. Eine Fachkraft für Arbeitssicherheit ist bestellt, aber es fehlt ein Betreuungsplan.",
      "Konsequenzen bei Verstößen: [Link: /wissen/blog/strafen-arbeitsschutz|Bußgeld und Strafrecht]. Health and Safety+ bereitet Betriebe in Köln und NRW auf Begehungen vor – [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer prüft – Gewerbeaufsicht oder Berufsgenossenschaft?",
        answer:
          "Gewerbeaufsicht des Landes NRW für staatlichen Arbeitsschutz; Berufsgenossenschaft für Unfallverhütung – oft parallel, unterschiedliche Schwerpunkte.",
      },
      {
        question: "Was bedeutet 5-Prozent-Quote konkret?",
        answer:
          "Landesbehörden müssen jährlich mindestens 5 % der Betriebe besichtigen – erhöht die Wahrscheinlichkeit einer Prüfung auch in kleineren Betrieben.",
      },
      {
        question: "Darf die Behörde ohne Termin kommen?",
        answer:
          "Grundsätzlich zu Betriebs- und Arbeitszeiten Betretensrecht § 22 Abs. 2 – in Wohnungen nur mit Einverständnis oder bei dringender Gefahr.",
      },
      {
        question: "Was bei Anordnung?",
        answer:
          "Angemessene Frist setzen lassen, umsetzen, nachweisen – sonst Bußgeld oder Untersagung.",
      },
    ],
  },
  {
    slug: "brandschutzordnung-din-14096",
    title: "Brandschutzordnung nach DIN 14096 – Teile A, B und C in der Praxis",
    excerpt:
      "BSO nach DIN 14096: Pflichtinhalte in Teil A, B und C, Abgrenzung zu Alarm- und Fluchtwegplan sowie Fortschreibung – praxisnah für Köln und NRW.",
    date: "2025-04-14",
    dateModified: "2026-05-26",
    content: [
      "Die Brandschutzordnung (BSO) nach DIN 14096:2014 ist das zentrale betriebliche Regelwerk für Brandverhütung und Verhalten im Brandfall. Sie ergänzt die Pflichten aus ArbStättV und ASR A2.2/A2.3 und macht für Beschäftigte, Besucher und Einsatzkräfte verbindlich, was im Alltag und im Ernstfall gilt. Eine BSO ersetzt weder das genehmigte Brandschutzkonzept noch den Alarmplan nach DGUV 205-033 – alle Dokumente müssen zum Ist-Zustand des Gebäudes passen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Für nahezu jeden Betrieb mit Arbeitsstätte ist eine BSO sinnvoll. Ausdrücklich gefordert oder faktisch unverzichtbar wird sie bei Sonderbauten und Genehmigungsauflagen, bei Brandmeldeanlagen, Versammlungsstätten-Nutzung, erhöhter Brandgefahr (Gefahrstoffe, Heißarbeit) und wenn Feuerversicherer oder Behörden sie verlangen. Der Arbeitgeber bleibt verantwortlich; erstellt und fortgeschrieben wird sie in der Praxis durch den [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragten] mit Freigabe der Geschäftsführung.",
      "Vor der Erstellung klären: Welche Dokumente gibt es bereits? Flucht- und Rettungspläne (ASR A2.3), Alarm- und Evakuierungsplan (DGUV 205-033), Feuerwehrplan aus dem [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept], Prüfbücher BMA und Löscher. Die BSO verweist darauf und verhindert Widersprüche – typischer Fehler ist ein aktueller Aushang Teil A, aber veraltete Sammelstelle im [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Fluchtwegplan]. Gesamtüberblick: [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz].",
      "Teil A richtet sich an alle Personen im Gebäude – Beschäftigte, Besucher, Lieferanten, Leiharbeit. Er wird als gut sichtbarer Aushang (üblich DIN A4) an Eingängen und in Treppenhäusern geführt. Mindestinhalt: Brand entdecken und melden, keine Eigengefährdung, Türen schließen wo sinnvoll, Notruf 112, interne Alarmnummer, Fluchtweg zum Notausgang, Sammelplatz, Verbot von Aufzügen im Brandfall, Rauchverbot. In mehrsprachigen Betrieben die Kernbotschaften in den vor Ort üblichen Sprachen. Sinnvoll: Abstimmung mit Erste-Hilfe-Kurzinformation auf dem [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan], einheitliche Symbole nach ASR A1.3.",
      "Teil B ist das Regelwerk für alle Beschäftigten ohne besondere Brandschutzaufgaben – schriftlich oder digital, versioniert, jeder Neue erhält die aktuelle Fassung. Pflichtthemen: Rauchverbot und Zündquellen, Heißarbeit nur mit Freigabe nach DGUV Regel 100-500 (Feuerwache, Nachkontrolle), ortsveränderliche Elektrogeräte nur mit gültiger Prüfplakette, freihaltende Rettungswege, Lagerung brennbarer Stoffe nur in zugelassenen Zonen, Dekoration mindestens B1 oder Verbot, Verhalten bei Alarm und Evakuierung, Handfeuerlöscher und Wandhydranten nur im Rahmen der Unterweisung. Teil B ist die inhaltliche Grundlage der jährlichen Brandschutzunterweisung nach § 12 ArbSchG – Unterweisungsprotokoll und BSO-Version müssen zusammenpassen.",
      "Veranstaltungen, Filmlicht, temporäre Bühnen oder erhöhtes Personenaufkommen gehören in Teil B als Meldepflicht an den BSB – nicht als mündliche Absprache mit Facility. Sonst fehlt im Ernstfall die dokumentierte Sonderorganisation (Zusatz-Rettungsweg, Brandwache, geänderte Sammelstelle).",
      "Teil C ist das Handbuch für Einsatzkräfte: Brandschutzbeauftragter, Brandschutzhelfer, Leitstelle, Werkschutz, Facility-Führung, Führungskräfte. Inhaltlich: Rollen mit Stellvertretung, Alarmablauf Schritt für Schritt (BMA-Meldung, 112, Gebäudealarm, Räumungsfreigabe), Sammelstellen und Nachrollen, Schnittstelle BMA/RWA/Sprachalarm/Aufzugs-Rückruf, Schlüssel- und Zutrittslogik für Feuerwehr, Szenarien bei BMA-Ausfall oder gesperrtem Treppenhaus, Personen mit eingeschränkter Mobilität (Evakuierungshelfer, Personal-Notfallplan), technische Kurzdaten und Verweis auf Prüffristen. CO₂-Löscher nur mit Einsatzregeln nach DGUV 205-034. Teil C wird nicht an alle Beschäftigten verteilt – Zugang begrenzen, aber für Übungen und Audits vollständig.",
      "H2::Umsetzung in der Praxis",
      "Abgrenzung in der Praxis: Der Fluchtwegplan zeigt grafisch Wege und Löscher; die BSO regelt Verhalten und Pflichten. Der Alarmplan (oft BSO Teil C oder Anhang) beschreibt Meldekette und Alarmarten. Das Brandschutzkonzept nach BauO dokumentiert die bauliche Genehmigung – bei Umbau zuerst bauordnungsrechtlich prüfen, dann BSO und Pläne anpassen ([Link: /wissen/ratgeber/bauordnung-nrw-brandschutz]).",
      "Fortschreibung: DIN 14096 und DGUV 205-003 verlangen eine Gesamtprüfung mindestens alle zwei Jahre mit Versionsnummer und Datum. Zusätzlich sofort bei Umbau, geänderter BMA-Zonierung, neuem Heißarbeit-Konzept, Wechsel von BSB oder Leitstelle, neuen Ladezonen für Li-Ion-Batterien oder nach relevantem Probealarm/Beinahe-Brand. Nach jeder Änderung: Unterweisung auf geänderte Teil-B-Passagen, Einweisung der in Teil C genannten Rollen, Abgleich der Etagenpläne.",
      "Häufige Mängel aus Begehungen: Brandschotts ohne Kennzeichnung nach Umbau, Teil A stimmt nicht mit Sammelstelle auf dem Plan überein, Heißarbeit ohne dokumentierte Freigabe, Veranstaltung ohne BSB-Abstimmung. Maßnahmen mit Verantwortlichem und Frist im Protokoll führen – sonst hilft die BSO bei der nächsten Prüfung nicht.",
      "In Mehrgebäude-Standorten: gemeinsames Mindest-Teil B für den Arbeitgeber, gebäudespezifisches Teil C (eigene Sammelstellen, BMA-Zonen, Etagenbeauftragte). Probealarm erst nach Abgleich Zonenplan und Grundriss – sonst wird das falsche Gebäude geräumt.",
      "KMU ohne BMA: schlanke BSO mit Fokus auf Löscher, Fluchtwege, Unterweisung und jährliche Begehung reicht – Qualität der Umsetzung zählt mehr als Seitenzahl. Konzerne: einheitliche Mindeststandards, lokale Anpassung Teil C.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Begehungen prüfen Sie, ob BSO Teil A sichtbar hängt, Teil B arbeitsplatzbezogen ist und Fluchtpläne zum IST-Zustand passen. Nach Umbauten oder neuen Ladezonen muss die BSO fortgeschrieben werden.",
      "Health and Safety+ erstellt und fortgeschreibt BSO nach DIN 14096 in Köln und NRW – Teil A/B/C, Abstimmung mit Alarmplan, Plänen und Versicherer. Ergänzend: [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz], [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen]. [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kontakt] zur Bestandsaufnahme.",
    ],
    faq: [
      {
        question: "Was regelt DIN 14096?",
        answer:
          "Brandschutzordnung in drei Teilen: A (Allgemeines), B (Verhalten im Brandfall), C (für Feuerwehr). Pflicht zur Erstellung ergibt sich aus Gefährdungsbeurteilung und ArbStättV.",
      },
      {
        question: "Wer erstellt die BSO?",
        answer:
          "In der Regel der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] mit SiFa – abgestimmt auf Objekt, Nutzung und Alarmkonzept.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Generische Vorlage ohne Objektbezug, veraltete Fluchtpläne, fehlende Unterweisung zu Teil B, BMA-Konzept widerspricht BSO – in Köln und NRW häufig.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan], [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] und [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber Brandschutz].",
      },
    ],
  },
  {
    slug: "brandschutzschulungen-unternehmen",
    title: "Brandschutzschulungen im Unternehmen – Pflichten, Arten und Nachweise",
    excerpt:
      "Brandschutzschulungen: jährliche Unterweisung, BSH-Ausbildung, BSB-Qualifikation, BSO Teil C und Evakuierungsübungen – praxisnah für Köln und NRW.",
    date: "2025-04-16",
    dateModified: "2026-05-26",
    content: [
      "„Brandschutzschulung“ ist im Alltag ein Sammelbegriff – rechtlich und praktisch sind mehrere Formate zu trennen. Wer alles in einen Vortrag packt, erfüllt oft nur die Hälfte der Pflichten. Grundlage: § 12 ArbSchG (Unterweisung), ArbStättV mit ASR A2.2, DGUV Vorschrift 1 und die betriebliche [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung DIN 14096]. Überblick zur Organisation: [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Vier Ebenen im Überblick: (1) Jährliche Brandschutzunterweisung für alle Beschäftigten – Verhalten, Wege, Alarm. (2) Ausbildung [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] nach DGUV 205-023 mit Praxisübung. (3) Qualifikation und Fortbildung des [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragten] nach DGUV 205-003. (4) Einweisung von Rollen aus BSO Teil C und Alarmplan (Leitstelle, Etagenbeauftragte, Aufsicht bei Veranstaltungen) – nicht identisch mit der Massenunterweisung.",
      "Jährliche Unterweisung – Pflichtinhalt: Brandverhütung im Betrieb (Rauchverbot, Heißarbeit nur mit Freigabe, typische Brandlasten), Verhalten bei Brand und Rauch (Alarm auslösen, 112, kein Aufzug), Flucht- und Rettungswege und Sammelstelle am [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Fluchtwegplan], Lage der Löscher und Handfeuermelder, besondere Gefahren des Standorts (z. B. [Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion-Ladezone], Gefahrstofflager). Inhalt aus BSO Teil B – nicht generische Folien ohne Gebäudebezug.",
      "Wer muss wann unterwiesen werden: vor Aufnahme der Tätigkeit, bei Wechsel des Arbeitsplatzes oder neuer Gefährdung, nach wesentlicher Änderung der BSO oder Pläne, mindestens einmal jährlich. Neue und Leiharbeitnehmer, Praktikanten und regelmäßige Besucher/Fremdfirmen brauchen eine dokumentierte Einführung – oft verkürzt, aber mit gleichen Kernpunkten (Wege, Alarm, Sammelstelle). Sprache und Verständlichkeit an die Zielgruppe anpassen.",
      "Brandschutzhelfer-Ausbildung: Auswahl nach Gefährdungsbeurteilung zur Brandgefahr, Ausbildung mit Theorie und Löschübung, Bescheinigung aufbewahren. Fortbildung typischerweise alle drei bis fünf Jahre, praktische Wiederholung in sinnvollem Abstand. BSH ersetzen weder BSB noch die jährliche Unterweisung aller anderen – sie sind die operativen Helfer in den ersten Minuten, nicht die Gesamtorganisation.",
      "Brandschutzbeauftragter: Erstqualifikation (mindestens 64 UE nach DGUV 205-003) und Fortbildung sind vom Arbeitgeber zu ermöglichen – das ist keine „freiwillige Weiterbildung“. Der BSB plant und prüft Schulungen, er hält sie nicht allein ab. Externer BSB: Vertraglich klären, wer Unterweisungen und Übungen durchführt und wer dokumentiert.",
      "H2::Umsetzung in der Praxis",
      "BSO Teil C und Alarmplan: Personen mit besonderen Aufgaben (Geschäftsführung im Ernstfall, Leitstelle, Technik BMA, Veranstaltungsleitung) brauchen eine eigene, aktuelle Einweisung auf ihre Rolle – Meldekette, Freigaben, Sammelstellenabfrage. Das ist schlanker als BSH-Ausbildung, aber Pflicht und mit Datum zu dokumentieren. Nach Probealarm oder Beinahe-Brand: Nachbesprechung und ggf. Anpassung Teil C.",
      "Evakuierungsübung vs. Unterweisung: Die Übung testet Ablauf, Kommunikation und Wege unter Stress – sie ersetzt nicht die jährliche Unterweisung und umgekehrt. Frequenz nach Gefährdung und Vorgaben (Versicherer, Genehmigung, interne Policy); in vielen Objekten mindestens jährlich oder bei hohem Personenaufkommen öfter. Übungsprotokoll: Datum, Szenario, Dauer, Auffälligkeiten, Maßnahmen – Verknüpfung mit offener Maßnahlenliste des BSB.",
      "Dokumentation – Mindestinhalt je Format: Datum, Dauer, Ort, Referent/in, Themenliste, Teilnehmer mit Unterschrift oder digitalem Nachweis, Bezug zur BSO-Version. Getrennte Listen für Unterweisung, BSH-Kurs, BSB-Fortbildung, Teil-C-Einweisung, Übung. Bei Audits zählt die Lücke: Unterweisung vor 14 Monaten, aber BSO vor zwei Wochen geändert – ohne Nachunterweisung ist das ein Befund.",
      "Bündeln ohne zu vermischen: Brandschutz- und Arbeitsschutzunterweisung können im selben Termin stattfinden, wenn Inhalte und Teilnehmerlisten getrennt dokumentiert werden. ASA-Tagesordnung: Status Unterweisungsquote, überfällige BSH-Fortbildungen, geplante Übung, offene Maßnahmen aus letzter Begehung. [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|Vorbeugender Brandschutz]: Schulung wirkt nur, wenn Türen, BMA und Ladezonen im IST-Zustand stimmen.",
      "In der betrieblichen Umsetzung zeigen sich häufig folgende Schwachstellen. Eine Folie für alle Standorte. Keine Unterweisung von Leiharbeit. BSH-Zertifikat abgelaufen. Übung nur „theoretisch“ ohne Sammelstellenkontrolle. Teil C veraltet nach Personalwechsel. Maßnahme: Schulungsplan mit Verantwortlichen und Fristen im Brandschutzordner, nicht nur Kalendererinnerung.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor einer Begehung sollte geklärt sein, ob Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Health and Safety+ plant und führt in Köln und NRW Unterweisungen, BSH-Kurse, Übungen und Einweisungen Teil C betriebsspezifisch durch – abgestimmt mit BSO, Plänen und [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragtem]. [Link: /schulungen|Schulungen], [Link: /brandschutz|Leistungen Brandschutz]. [Link: /kontakt|Kontakt] zum Schulungskonzept und zur Lückenanalyse der Nachweise.",
    ],
    faq: [
      {
        question: "Welche Brandschutzschulungen braucht ein Betrieb?",
        answer:
          "Jährliche Unterweisung aller Beschäftigten (BSO Teil B) plus fachkundige Ausbildung der [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] nach ASR A2.2/DGUV 205-023.",
      },
      {
        question: "Was muss die allgemeine Unterweisung enthalten?",
        answer:
          "Alarmierung, Verhalten bei Brand, Fluchtwege, Sammelstelle, Meldeweg – betriebsspezifisch, nicht nur ABC-Löscher-Theorie.",
      },
      {
        question: "Evakuierungsübung – wie oft?",
        answer:
          "Aus Gefährdungsbeurteilung – bei Versammlungsstätten und komplexen Objekten häufiger. Protokoll mit Mängeln und Nachkontrolle.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Einmalige Schulung vor Jahren, keine Übung, BSH ohne Löschpraxis, Unterweisung nur per E-Mail ohne Verständnischeck.",
      },
    ],
  },
  {
    slug: "gefaehrdungsbeurteilung-schwangere-mutterschutz",
    title: "Gefährdungsbeurteilung für Schwangere – Pflichten nach dem Mutterschutzgesetz",
    excerpt:
      "GBU für Schwangere und Stillende nach MuSchG und ArbSchG: vorausschauend und anlassbezogen beurteilen – praxisnah für Köln und NRW.",
    date: "2025-04-18",
    dateModified: "2026-05-26",
    content: [
      "Die Mitteilung einer Schwangerschaft oder Stillzeit löst besondere Pflichten aus: Mutterschutzgesetz (MuSchG) und Arbeitsschutzgesetz (ArbSchG) verlangen eine Gefährdungsbeurteilung, die Mutter und Kind schützt – in jedem Betrieb, unabhängig von Größe und Branche. Überblick zum Gesetz: [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Mutterschutz MuSchG einfach erklärt] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Zwei Ebenen nach § 10 MuSchG: (1) Vorausschauend beurteilt der Arbeitgeber jeden Arbeitsplatz bereits in der allgemeinen [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] – welche Tätigkeiten grundsätzlich für Schwangere und Stillende ungeeignet sind. (2) Bei bekannter Schwangerschaft oder Stillzeit folgt unverzüglich die konkrete Beurteilung des tatsächlichen Arbeitsplatzes und die sofortige Umsetzung erforderlicher Maßnahmen – nicht „nach dem nächsten ASA-Termin“.",
      "Häufig relevant sind Gefahrstoffe und biologische Arbeitsstoffe in Kitas, Pflege, Labor oder Reinigung, regelmäßiges Heben oder Tragen von Lasten über 5 kg, langes Stehen ohne Pausen, Erschütterung und Vibration, Lärm, Hitze und Kälte, Nacht-, Sonn- und Feiertagsarbeit, Akkord, psychische Belastung, Absturz- und Stolpergefahr sowie Infektionsrisiken. Die Liste ist betriebsspezifisch zu ergänzen – keine Vorlage ohne Begehung.",
      "Maßnahmenhierarchie: Zuerst Arbeitsplatz umgestalten, Tätigkeiten anpassen oder geeigneten Arbeitsplatzwechsel prüfen – bevor ein betriebliches Beschäftigungsverbot nach § 16 MuSchG ausgesprochen wird. Das ist zu unterscheiden vom ärztlichen Beschäftigungsverbot nach § 16 Abs. 1 Satz 2 MuSchG. Stillzeit: eigene Bewertung (Hygiene, Pausen, geeigneter Raum) und Abstimmung mit Betriebsarzt und Fachkraft für Arbeitssicherheit.",
      "Mitwirkung: Beschäftigte sollen über Ergebnis und Maßnahmen informiert werden; Betriebsrat und Betriebsarzt wirken mit. Bei mehr als 20 Beschäftigten gehört das Thema in den [Link: /wissen/blog/akteure-arbeitsschutz|Arbeitsschutzausschuss] und in den [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht].",
      "H2::Umsetzung in der Praxis",
      "Dokumentation: Ergebnis der Beurteilung, festgelegte Maßnahmen mit Verantwortlichen und Fristen, Mitteilung an die Beschäftigte in verständlicher Form. Bei bestimmten Verstößen Meldepflicht nach § 27 MuSchG an die Aufsichtsbehörde. Bußgelder nach MuSchG können bis 30.000 Euro betragen – fehlende vorausschauende Beurteilung ist ein wiederkehrender Befund.",
      "Reform 2025: erweiterte Schutzfristen nach Fehlgeburt – in Gefährdungsbeurteilung, ASA und Personalprozessen berücksichtigen, nicht nur in der arbeitsmedizinischen Vorsorge.",
      "Parallel für andere schutzbedürftige Gruppen: [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|Jugendarbeitsschutz JArbSchG] mit eigenem GBU-Abschnitt und halbjährlicher Unterweisung. MuSchG vertieft: [Link: /wissen/blog/muschg-unzulaessige-taetigkeiten-schutzmasnahmen|unzulässige Tätigkeiten], [Link: /wissen/blog/muschg-aushang-mitteilung-dokumentation|Aushang und Dokumentation]. SGB IX: [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|Teilhabe am Arbeitsleben].",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Begehungen sollte geklärt sein, ob Schwangerschaften früh mitgeteilt werden können, eine arbeitsplatzbezogene GBU nach MuSchG vorliegt und Schutzmaßnahmen umgesetzt sind. Fehlende Kommunikationswege und veraltete Mutterschutz-GBU sind häufige Befunde in Köln und NRW.",
      "Health and Safety+ erstellt und fortgeschriebene Gefährdungsbeurteilungen in Köln und NRW – inklusive Mutterschutz und Schnittstellen zu Betriebsarzt und [Link: /arbeitsschutz|Arbeitsschutz]. [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|Ablauf Gefährdungsbeurteilung], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann muss der Arbeitgeber bei Schwangerschaft handeln?",
        answer:
          "Unverzüglich nach Mitteilung: arbeitsplatzbezogene GBU nach § 10 MuSchG, ggf. Umgestaltung, Versetzung oder Beschäftigungsverbot bis zur Wirksamkeit der Maßnahmen.",
      },
      {
        question: "Was gehört in die Mutterschutz-GBU?",
        answer:
          "Physikalische, chemische, biologische und psychische Belastungen, Heben/Tragen, Infektionsrisiken, Strahlung, Arbeitszeiten – abgestimmt mit Betriebsarzt.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Keine GBU nach Mitteilung, generische Vorlage, Gefahrstoffe ohne Substitutionsprüfung, fehlende Kommunikation an Vorgesetzte und SiFa.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG-Hub], [Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber].",
      },
    ],
  },
  {
    slug: "psychische-gefaehrdungsbeurteilung-arbeitsplatz",
    title: "Psychische Gefährdungsbeurteilung am Arbeitsplatz – Pflicht, Ablauf und Maßnahmen",
    excerpt:
      "Psychische Gefährdungsbeurteilung nach § 5 ArbSchG: Belastungsfaktoren, Methoden, Beteiligung, Maßnahmen und Dokumentation – für alle Betriebe in Köln und NRW.",
    date: "2025-04-20",
    dateModified: "2026-05-26",
    content: [
      "Psychische Belastung ist seit 2013 ausdrücklicher Bestandteil der Gefährdungsbeurteilung nach § 5 Abs. 3 Nr. 6 ArbSchG – für alle Betriebe, unabhängig von Beschäftigtenzahl. BAuA-Befunde zeigen: Viele Betriebe haben die Umsetzung noch nicht auf Praxisniveau gebracht – während Berufsgenossenschaft und Gewerbeaufsicht das Thema zunehmend gezielt prüfen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Gemeint sind Arbeitsbedingungen, nicht Diagnosen oder Krankheitsbilder der Beschäftigten. Typische Belastungsfaktoren: Aufgabeninhalt (Monotonie, Unter- oder Überforderung), Arbeitsorganisation (Zeitdruck, Unterbrechungen, Schicht, Erreichbarkeit außerhalb der Arbeitszeit), soziale Faktoren (Konflikte, Mobbing, fehlende Unterstützung), Arbeitsumgebung (Lärm, Enge, Hitze), Schnittstellen Homeoffice und mobile Arbeit (Entgrenzung, fehlende Abgrenzung).",
      "Vorgehen: Begehung und Befragung am Arbeitsplatz, Auswertung mit nachvollziehbarer Methode – z. B. COPSOQ, KFZA, WAI, strukturierte Workshops oder Interviews. Die GDA-Leitlinie „Psychische Gefährdungsbeurteilung“ empfiehlt Beteiligung der Beschäftigten und Führungskräfte. In Sozialträgern ist eine dreistufige Dokumentation (Betrieb, Bereich, Einrichtung) verbreitet – Beispiel: [Link: /wissen/blog/asa-sitzung-praxis-kita-arbeitsschutz|ASA bei KiTa-Träger].",
      "Maßnahmen nach dem STOP-Prinzip: klare Rollen und Zuständigkeiten, realistische Arbeitsplanung, Führungskräfteschulung, Pausen und Erholungszeiten, verbindliche Konflikt- und Mobbingprozesse, ergonomische und ruhige Arbeitsbereiche, Wirksamkeitskontrolle mit Fristen. Ergebnisse gehören ins ASA-Jahresprogramm bei mehr als 20 Beschäftigten.",
      "H2::Umsetzung in der Praxis",
      "Dokumentation nach § 6 ArbSchG: Bewertungsmethode, Maßnahmen, Verantwortliche, Wirksamkeitskontrolle – aggregiert, ohne personenbezogene Gesundheitsdaten in der allgemeinen Gefährdungsbeurteilung. Datenschutz und Mitbestimmung beachten; bei Einzelfällen arbeitsmedizinische Vorsorge und Betriebsarzt einbinden.",
      "Kein Einmalprojekt: Bei Umstrukturierung, hoher Fluktuation, neuen Arbeitsformen oder nach relevanten Vorfällen ist eine Fortschreibung erforderlich. Psychische Belastung muss mit physischer Gefährdungsbeurteilung und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen] zusammenpassen. Schnittstelle [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX Teilhabe] bei seelischen Behinderungen und psychischer GBU im GBU-Gesamtkonzept.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten psychische Belastungsfaktoren in der GBU benannt, Maßnahmen mit Verantwortlichen versehen und Beschäftigte in der [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung] informiert sein. Fehlende psychische GBU ist ein Standard-Befund bei BG-Begehungen in NRW.",
      "Die [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2] erweitert unter Voraussetzungen die Qualifikation der Fachkraft für Arbeitssicherheit (z. B. Psychologie) – sinnvoll für ganzheitliche Betreuung. Health and Safety+ erstellt psychische Gefährdungsbeurteilungen in Köln und NRW – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber Gefährdungsbeurteilung], [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|systematischer Ablauf], [Link: /arbeitsschutz|Arbeitsschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ist psychische GBU Pflicht?",
        answer:
          "Ja – § 5 Abs. 3 Nr. 6 ArbSchG verlangt Beurteilung psychischer Belastung. Sie gehört in die allgemeine GBU oder als eigener Baustein.",
      },
      {
        question: "Welche Faktoren bewerten?",
        answer:
          "Arbeitsinhalt, Arbeitsorganisation, Soziales, Arbeitsumgebung, neue Arbeitsformen – Methoden z. B. nach GDA oder BGM-Konzepten, mit Beteiligung der Beschäftigten.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Psychische Belastung fehlt ganz, nur Stichwort ohne Maßnahmen, keine Wirksamkeitskontrolle, keine Verknüpfung mit BGM oder ASA.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf], [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2] (Qualifikation SiFa) und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber].",
      },
    ],
  },
  {
    slug: "betriebsanweisungen-gefahrstoffe",
    title: "Betriebsanweisungen für Gefahrstoffe – Pflicht, Aufbau und Praxisbeispiele",
    excerpt:
      "Betriebsanweisungen für Gefahrstoffe nach GefStoffV und TRGS 555: Pflichtinhalte, Aufbau, Zugänglichkeit, Unterweisung und typische Fehler in Betrieben in Köln und NRW.",
    date: "2025-04-26",
    dateModified: "2026-05-26",
    content: [
      "Betriebsanweisungen (BA) für Gefahrstoffe sind nach § 14 GefStoffV und TRGS 555 die betriebsspezifische Kurzanweisung am Arbeitsplatz – verständlich, aktuell und für die konkrete Tätigkeit. Sie ersetzen nicht das Sicherheitsdatenblatt (SDB), sondern fassen die für Ihren Betrieb relevanten Gefahren und Maßnahmen zusammen. Einordnung in GefStoffV und TRGS: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS einfach erklärt] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Pflichtabschnitte nach TRGS 555 (Auswahl): Arbeitsbereich und Tätigkeit, Stoffbezeichnung und Kennzeichnung nach CLP, Gefahren für Mensch und Umwelt, Schutzmaßnahmen (technisch, organisatorisch, persönlich), Verhalten im Gefahrfall und Erste Hilfe, Entsorgung und Lagerung. Zusätzlich: Notfallnummern, Löschmittel, Abstimmung mit [Link: /wissen/blog/brandschutz-brennbare-stoffe|brennbaren Stoffen] und Lüftung.",
      "Basis der BA: aktuelles SDB plus Ergebnis der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] – verwendete Mengen, Verfahren, Absaugung, PSA am Platz, Substitution wo möglich. Jeder im Gefahrstoffverzeichnis geführte Stoff braucht eine passende BA; Mischungen und Prozesslösungen eigene Anweisungen.",
      "Zugänglichkeit: Aushang oder digital am Arbeitsplatz, für Beschäftigte jederzeit erreichbar; bei Sprachvielfalt piktogrammbasiert oder in den vor Ort üblichen Sprachen. Neue und Leiharbeitnehmer erhalten die aktuelle Fassung vor der ersten Tätigkeit.",
      "H2::Umsetzung in der Praxis",
      "Aktualisierung: bei geänderter Einstufung, neuem Produkt, geändertem Verfahren, Umbau der Lüftung oder Fortschreibung der Gefährdungsbeurteilung – Version und Datum auf der BA. Unterweisung nach § 14 GefStoffV: mündlich, arbeitsplatzbezogen, vor erster Tätigkeit und regelmäßig (in der Praxis mindestens jährlich) – mit Bezug zur BA-Version in der Dokumentation ([Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung]).",
      "In der Praxis treten häufig folgende Fehler auf. SDB-Auszug ohne Betriebsbezug. Veraltete BA nach Produktwechsel. BA nur in der Verwaltung, nicht am Lager. Keine Verknüpfung zwischen Unterweisungsliste und Gefahrstoffverzeichnis. Fehlende Abstimmung mit Brandschutz bei brennbaren Lösemitteln.",
      "Health and Safety+ erstellt und aktualisiert Betriebsanweisungen in Köln und NRW im Abgleich mit Gefährdungsbeurteilung und Gefahrstoffverzeichnis – [Link: /arbeitsschutz|Arbeitsschutz], Schnittstelle [Link: /brandschutz|Brandschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann braucht man Betriebsanweisungen für Gefahrstoffe?",
        answer:
          "Für jeden Gefahrstoff am Arbeitsplatz nach GefStoffV und TRGS 555 – verständlich, am Arbeitsplatz verfügbar, in Unterweisung eingebunden.",
      },
      {
        question: "Was muss drinstehen?",
        answer:
          "Gefahren, Schutzmaßnahmen, Verhalten im Notfall, Erste Hilfe, Entsorgung – abgestimmt auf Lagerort und Tätigkeit, nicht nur Sicherheitsdatenblatt-Kopie.",
      },
      {
        question: "Typische Mängel in Köln und NRW?",
        answer:
          "BA nur in der Verwaltung, veraltet nach Prozessänderung, fehlende Sprachversion, kein Bezug zur GBU und Unterweisung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/trgs-einfach-erklaert|TRGS], [Link: /wissen/blog/brandschutz-brennbare-stoffe|brennbare Stoffe] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU].",
      },
    ],
  },
  {
    slug: "flucht-und-rettungsplan-erstellen",
    title: "Flucht- und Rettungsplan erstellen – Pflicht, Vorschriften und DIN ISO 23601",
    excerpt:
      "Flucht- und Rettungsplan nach ASR A2.3 und DIN ISO 23601: Pflicht, Inhalt, lagerichtiger Aushang und Aktualisierung – praxisnah für Köln und NRW.",
    date: "2025-04-28",
    dateModified: "2026-05-26",
    content: [
      "Der Flucht- und Rettungsplan ist die grafische Orientierung im Brandfall – maßstabsnah, farbig, je Etage oder Gebäudeteil. Er zeigt Fluchtwege, Notausgänge, Sammelstellen-Symbol, Feuerlöscher, Handfeuermelder und Erste-Hilfe-Punkte. Rechtsgrundlagen: ArbStättV mit ASR A2.3 (Fluchtwege, Notausgänge, Fluchtwegpläne, Notbeleuchtung) und ASR A1.3 (Kennzeichnung). ASR-Überblick: [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt]. Gestaltung nach DIN ISO 23601; Symbole nach DIN EN ISO 7010 – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Abgrenzung der Pläne – häufige Verwechslung: Der Flucht- und Rettungsplan (Etagenplan für alle) ist nicht der Alarmplan (Rollen und Meldekette, DGUV 205-033, oft BSO Teil C), nicht der Feuerwehrplan aus dem Brandschutzkonzept (Zufahrt, Hydranten, Brandabschnitte für Einsatzkräfte) und nicht die [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] (Verhalten und Pflichten). Inhaltlich müssen Sammelstelle, interne Alarmnummer und Verhaltensregeln auf Plan, BSO Teil A und Alarmplan identisch sein.",
      "Wann Pflicht? ASR A2.3 verlangt Fluchtwegpläne, wenn Lage, Ausdehnung oder Nutzung eine Orientierungshilfe erfordern – typisch bei mehreren Etagen, verwinkelten Fluren, vielen ortsfremden Personen (Besucher, Kunden, Patienten), Versammlungsnutzung oder wenn Genehmigung/BSO es vorschreibt. In gewerblich genutzten Gebäuden ist ein Plan faktisch immer sinnvoll; fehlende Pläne sind ein Standard-Mangel bei Begehungen und Versicherer-Audits.",
      "Pflichtinhalt nach DIN ISO 23601: Format mindestens DIN A3, farbig, gut lesbar (laminiert oder hinter Glas). Grün: Fluchtwege mit Richtungspfeilen, Notausgänge, Verbindung zur Sammelstelle. Rot: Handfeuerlöscher, Wandhydranten, Brandmelder/Handfeuermelder. Erste Hilfe in den genormten Farben. Kennzeichnung „Sie sind hier“ am Aushangort. Kurzregeln Brandfall (Alarm, 112, kein Aufzug) und Legende. Sicherheitszeichen nur aus ISO 7010 – keine veralteten oder eigenen Symbole.",
      "Lagerichtige Darstellung: Der Plan wird am Aushang so ausgerichtet, dass oben der tatsächliche Blick nach vorne ist. Falsche Drehung ist ein klassischer Orientierungsfehler im Stress. Aushangorte: Haupteingang, Treppenhaus pro Etage, Rezeption, große Büroflächen, nach jeder Trennwand mit geändertem Weg. Nicht im Archiv – sichtbar im Flur.",
      "Baulich vs. betrieblich: Der Plan muss die genehmigten Rettungswege aus BauO/BSK abbilden, aber auch den Betriebs-IST-Zustand: temporäre Einbauten, Verschläge, zweite Rettungswege. Nach Umbau ohne Planaktualisierung entstehen gefährliche Diskrepanzen – Probealarme scheitern, weil Beschäftigte einer Plan-Fiktion folgen. Bauliche Tiefe: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz] und [Link: https://brandschutzkoeln.com/ratgeber/flucht-und-rettungswege-bauo-nrw|Flucht- und Rettungswege BauO NRW].",
      "H2::Umsetzung in der Praxis",
      "Brandlasten im Fluchtweg: ASR A2.3 verlangt freie, benutzbare Rettungswege – keine Paletten, Regale, Aktenstapel, Pflanzenkübel oder brennbare Dekoration in Fluren und Treppenräumen. Der Plan ist nur wirksam, wenn der Weg im Alltag frei bleibt; Begehungen dokumentieren Verstöße mit Foto und Frist. Türen in Fluchtrichtung müssen sich öffnen lassen, Brandschutztüren nicht gekeilt sein.",
      "Notbeleuchtung und Kennzeichnung: Fluchtwegleuchten und Rettungszeichen müssen bei Stromausfall funktionieren – ASR A2.3 fordert Erprobung und Wartung (monatlich Kurztest, jährlich Volltest, siehe [Link: /wissen/ratgeber/brandschutz-betrieb|Prüffristen im Ratgeber]). Plan und Beschilderung müssen zur gleichen Wegeführung führen.",
      "Erstellungsprozess: (1) Aktueller Grundriss und Nutzung, (2) Abgleich mit BSK/Feuerwehrplan, (3) Bestandsaufnahme Löscher/Melder/EH-Kästen, (4) Festlegung Sammelstelle mit Alarmplan, (5) Zeichnung DIN ISO 23601, (6) Freigabe BSB, (7) Aushang mit Foto-Nachweis, (8) Einweisung in Unterweisung/BSO. Bei Mischmieter-Gebäuden: klare Verantwortung, wer welchen Plan pflegt.",
      "Fortschreibung: mindestens alle zwei Jahre prüfen; sofort bei Umbau, geänderter Sammelstelle, neuen Löschern, geänderter BMA-Zonierung oder nach Übung mit Planabweichung. Version mit Datum auf dem Plan. Mehrsprachige Betriebe: Kerninformationen auf Plan oder daneben in den üblichen Sprachen.",
      "Räumungsübungen: Pläne werden erst durch Übung validiert. Jährliche Übung in größeren Objekten; Ergebnisse (blockierter Weg, unleserliche Leuchte, falsche Sammelstelle) in Maßnahmenliste und Planrevision. Mobilitätseingeschränkte Personen: Personal-Notfallpläne mit [Link: /wissen/blog/sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter|Schwerbehindertenvertretung] – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX]. Alarm- und Evakuierungskonzept: [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber Alarm und Evakuierung].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Fluchtpläne zum IST-Zustand passen, Rettungswege frei sind und Beschäftigte die Sammelstelle kennen. Nach Umbauten oder Nutzungsänderungen müssen Pläne aktualisiert und in der Unterweisung berücksichtigt werden.",
      "Health and Safety+ erstellt Flucht- und Rettungspläne in Köln und NRW – Bestandsaufnahme, DIN ISO 23601, Abstimmung mit [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragtem] und [Link: /wissen/blog/brandschutzordnung-din-14096|BSO]. [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann braucht man Flucht- und Rettungspläne?",
        answer:
          "Wenn aus Gefährdungsbeurteilung und Objektgröße/Komplexität erforderlich – ASR A2.3 und [Link: /wissen/blog/brandschutzordnung-din-14096|BSO DIN 14096] konkretisieren.",
      },
      {
        question: "Was muss ein Fluchtplan zeigen?",
        answer:
          "Standort, Fluchtwege, Notausgänge, Feuerlöscher, Sammelstelle, Brandmelder – verständlich, gut sichtbar, barrierefrei wo nötig.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Plan veraltet nach Umbau, Rettungsweg blockiert, falsche Orientierung, fehlende Beleuchtung der Notausgänge, keine Übung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer], [Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz] und [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber].",
      },
    ],
  },
  {
    slug: "dguv-vorschrift-3-elektropruefung",
    title: "DGUV Vorschrift 3 – Elektroprüfung: Pflichten, Prüffristen und Ablauf",
    excerpt:
      "DGUV Vorschrift 3: Prüfpflichten für ortsveränderliche und ortsfeste Betriebsmittel, Fristen aus der Gefährdungsbeurteilung, befähigte Person und Dokumentation – für Arbeitgeber in Köln und NRW.",
    date: "2025-04-30",
    dateModified: "2026-05-26",
    content: [
      "Die DGUV Vorschrift 3 (früher BGV A3) regelt die Prüfung elektrischer Anlagen und Betriebsmittel auf ihren ordnungsgemäßen Zustand. Sie verpflichtet jeden Arbeitgeber, Gefährdungen durch elektrischen Strom zu vermeiden – Stromunfälle, Brandgefahr durch Defekte und Ausfälle sicherheitsrelevanter Anlagen. Die Vorschrift gilt branchenübergreifend; die konkreten Fristen und Prüfumfänge leiten sich aus der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] ab – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Ortsveränderliche Betriebsmittel werden während des Betriebs bewegt oder getragen – Computer, Monitore, Verlängerungskabel, Werkzeug, Ladegeräte, Küchengeräte. Ortsfeste Anlagen und Betriebsmittel sind fest installiert – Verteilungen, Steckdosenanlagen, Beleuchtung, Maschinenanschlüsse, Wallboxen. Beide Kategorien gehören in den Prüfkalender; die Fachkraft für Arbeitssicherheit koordiniert in der Regel Fristen und Dokumentation, die Prüfung führt eine befähigte Person durch.",
      "Als Orientierung für Prüfintervalle gelten folgende Richtwerte, die in der Gefährdungsbeurteilung angepasst werden können. Ortsveränderliche Geräte in Büros und vergleichbaren Umgebungen oft alle 24 Monate. In Werkstätten und mit erhöhter Beanspruchung häufig 6 bis 12 Monate. Auf Baustellen oft 6 Monate. Ortsfeste Anlagen typischerweise alle 48 Monate. Verkürzung bei harter Umgebung, fehlender Schutzleitung, hoher Ausfallrate oder nach Reparatur. Verlängerung nur mit begründeter Risikobewertung und Nachweis.",
      "Prüfablauf in der Regel: Sichtprüfung (Gehäuse, Leitung, Stecker, Beschädigung), Messung der Schutzwerte (Schutzleiter, Isolation, ggf. Ableit- oder Berührungsstrom) und Funktionsprüfung. Dokumentation mit Prüfdatum, Prüfer, Ergebnis und nächstem Termin; sichtbare Prüfplakette am Gerät. Nicht bestandene Geräte sind zu sperren oder zu entfernen – bis zur Instandsetzung und Nachprüfung.",
      "H2::Umsetzung in der Praxis",
      "Befähigte Person nach BetrSichV und TRBS 1203: elektrotechnische Qualifikation, Berufserfahrung, Kenntnis der anzuwendenden Normen (VDE, DGUV V3). Der Arbeitgeber bleibt verantwortlich für die Organisation – auch bei externen Prüfdienstleistern. Schnittstelle [Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion-Ladeinfrastruktur] und temporäre Baustelleninstallationen nicht vergessen.",
      "Bei Prüfungen treten häufig folgende Befunde auf. Abgelaufene Plaketten trotz Nutzung. Verlängerungskabel ohne Prüfung. Fehlender Prüfkalender. Gefährdungsbeurteilung ohne elektrische Gefährdungen. Bei Unfällen durch mangelhafte Geräte drohen Bußgelder, Regress der Unfallversicherung und strafrechtliche Prüfung – [Link: /wissen/blog/strafen-arbeitsschutz|Konsequenzen Arbeitsschutz].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor einer Begehung sollte geklärt sein, ob Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Health and Safety+ koordiniert in Köln und NRW die Umsetzung der DGUV Vorschrift 3: Bestandsaufnahme, Prüffristen aus der Gefährdungsbeurteilung, Koordination befähigter Prüfstellen, Prüfplaketten und revisionssichere Dokumentation – [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Überblick], [Link: /elektrosicherheit|Elektrosicherheit], [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Ratgeber DGUV V3], [Link: /arbeitsschutz|Arbeitsschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt DGUV Vorschrift 3?",
        answer:
          "Prüfung ortsveränderlicher und ortsfester elektrischer Betriebsmittel und Anlagen – Schutz vor elektrischem Schlag und Brand durch defekte Leitungen und Geräte.",
      },
      {
        question: "Wie oft prüfen?",
        answer:
          "Nach Gefährdungsbeurteilung und Betriebsmittelart – ortsveränderlich oft jährlich, ortsfest in längeren Intervallen. Prüffristenkalender führen.",
      },
      {
        question: "Wer darf prüfen?",
        answer:
          "Elektrofachkraft oder befähigte Person nach DGUV V3 – Ergebnis dokumentieren, Mängel mit Frist und Verantwortlichem nachverfolgen.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Kein Prüfkalender, fehlende Plaketten, defekte Verlängerungskabel im Dauerbetrieb, Baustellen-Elektro ohne RCD – siehe [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit].",
      },
    ],
  },
  {
    slug: "iso-45001-arbeitsschutzmanagementsystem",
    title: "ISO 45001 – Arbeitsschutzmanagementsystem: Anforderungen, Einführung und Vorteile",
    excerpt:
      "ISO 45001 für Arbeitsschutzmanagement: Anforderungen, Einführung und Verknüpfung mit Gefährdungsbeurteilung und SiFa – praxisnah für Köln und NRW.",
    date: "2025-05-01",
    dateModified: "2026-05-26",
    content: [
      "ISO 45001:2018 (Nachfolger von OHSAS 18001) definiert Anforderungen an ein Arbeitsschutzmanagementsystem (SGA) – freiwillig, aber in Konzernen, Lieferketten und öffentlichen Ausschreibungen oft verlangt. Sie strukturiert, was der ArbSchG ohnehin fordert, in einen auditierbaren Prozess – ersetzt aber keine gesetzliche Pflichterfüllung ohne lebendige Praxis – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Aufbau nach High Level Structure (wie ISO 9001 und 14001): Kontext der Organisation, Führung und Verpflichtung der Leitung, Planung, Unterstützung, Betrieb, Leistungsbewertung, Verbesserung. Integration in ein bestehendes Qualitäts- oder Umweltmanagementsystem reduziert Doppelarbeit.",
      "Kerninhalte: Kontextanalyse (interne/externe Themen, interessierte Parteien), SGA-Politik der Geschäftsführung, Identifikation von Gefährdungen, Risiken und Chancen – verknüpft mit der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] nach § 5 ArbSchG, Ziele und Maßnahmenpläne mit Verantwortlichen, Beteiligung der Beschäftigten (§ 16/17 ArbSchG, ASA nach ASiG § 11), Kompetenz und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungen], Betrieb und Notfallvorsorge, interne Audits, Management-Review.",
      "Die Einführung beginnt meist mit einer Gap-Analyse gegen ISO 45001 und den Ist-Arbeitsschutz, gefolgt von einer Prozess- und Dokumentenlandkarte. Danach folgen Implementierung und Schulung, internes Audit und Zertifizierung durch eine akkreditierte Stelle – oft innerhalb von 6 bis 18 Monaten, abhängig von Betriebsgröße und Ausgangslage. Bestehende Dokumente wie Gefährdungsbeurteilungen, Begehungsprotokolle und SiFa-Jahresbericht sind Ausgangspunkt, nicht wegzuwerfen.",
      "H2::Umsetzung in der Praxis",
      "Nutzen: systematische Reduktion von Unfällen und Fehlzeiten, bessere Nachweisführung bei Kunden und Versicherern, Kultursignal „Sicherheit ist geführt“. Grenzen: Zertifikat ohne aktuelle Gefährdungsbeurteilung, wirksame Maßnahmen und Unterweisungen ist wertlos – Audits decken das auf.",
      "Schnittstellen: [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG], [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2], [Link: /brandschutz|Brandschutz] und bei Baustellen [Link: /sigeko|SiGeKo] in ein Gesamtkonzept einbinden.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Zertifizierungsaudit sollten GBU, Unterweisungen, Begehungsprotokolle und Management-Review auf denselben Datenstand gebracht werden. ISO 45001 ersetzt keine gesetzlichen Pflichten – sie strukturiert deren Nachweis.",
      "Health and Safety+ begleitet ISO 45001 in Köln und NRW – mit Praxis als Fachkraft für Arbeitssicherheit, nicht nur als Berater für Handbücher. [Link: /managementsysteme|Managementsysteme], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber Arbeitsschutz]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was ist ISO 45001?",
        answer:
          "Norm für Arbeitsschutzmanagementsysteme – PDCA-Zyklus, Führungsverpflichtung, Beteiligung, Risikobeurteilung, Wirksamkeitsprüfung. Freiwillig, nicht Gesetz.",
      },
      {
        question: "Unterschied zu gesetzlichem Arbeitsschutz?",
        answer:
          "ISO 45001 baut auf ArbSchG-Pflichten auf und macht Prozesse auditierbar – GBU, Unterweisung und SiFa-Betreuung bleiben Pflicht unabhängig von Zertifikat.",
      },
      {
        question: "Typische Lücken im Audit?",
        answer:
          "Dokumentation ohne Umsetzung, keine Beteiligung Beschäftigter, Management-Review ohne Maßnahmen, Widerspruch zwischen ISO-Dokumenten und IST-Begehung.",
      },
      {
        question: "Nutzen für Betriebe in Köln/NRW?",
        answer:
          "Strukturierte Nachweise für Ausschreibungen, Versicherer, Konzerne – Synergien mit [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU] und [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht].",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-erstellen",
    title: "Brandschutzkonzept erstellen – Inhalte, Pflicht und Ablauf nach Landesbauordnung",
    excerpt:
      "Brandschutzkonzept nach BauO NRW: Pflicht, Inhalte (baulich, technisch, organisatorisch), Genehmigungsverfahren und Schnittstelle zum betrieblichen Brandschutz.",
    date: "2025-05-02",
    dateModified: "2026-05-26",
    content: [
      "Ein Brandschutzkonzept ist ein ganzheitliches Dokument, das bauliche, anlagentechnische und organisatorische Maßnahmen zum Schutz von Personen und Sachwerten vor Brandgefahren beschreibt. Es bildet die zentrale Grundlage für den Brandschutznachweis im Baugenehmigungsverfahren und ist bei Sonderbauten, Gewerbe- und Industriebauten sowie bei Abweichungen von den Technischen Baubestimmungen nach BauO NRW in der Regel erforderlich.",
      "H2::Was gilt rechtlich?",
      "Das Brandschutzkonzept muss von einem qualifizierten Brandschutz-Sachverständigen erstellt werden. In Nordrhein-Westfalen sind dies staatlich anerkannte Sachverständige für die Prüfung des Brandschutzes oder Personen mit nachgewiesener Sachkunde im vorbeugenden Brandschutz. Die Erstellung erfordert fundierte Kenntnisse des Bauordnungsrechts, der technischen Baubestimmungen und der anerkannten Regeln der Technik.",
      "Der bauliche Brandschutz bildet das Fundament des Konzepts. Er umfasst die Einteilung des Gebäudes in Brandabschnitte und Brandbekämpfungsabschnitte, die Festlegung der Feuerwiderstandsdauer tragender und raumabschließender Bauteile, die Planung von Flucht- und Rettungswegen mit ausreichender Breite und maximalen Entfernungen, die Anforderungen an Fassaden und Dachkonstruktionen hinsichtlich Brandweiterleitung sowie die Ausführung von Durchführungen und Abschottungen bei Leitungs- und Lüftungsanlagen.",
      "Der anlagentechnische Brandschutz beschreibt die technischen Einrichtungen zur Branderkennung und -bekämpfung: Brandmeldeanlagen (BMA) mit automatischen und manuellen Meldern, Alarmierungseinrichtungen (Sirenen, Sprachalarmierung), Löschanlagen (Sprinkler, Gaslösch-, Schaumlöschanlagen), Rauch- und Wärmeabzugsanlagen (RWA) zur Entrauchung im Brandfall, Sicherheitsbeleuchtung und Sicherheitsstromversorgung sowie Feuerwehraufzüge und Wandhydranten. Art und Umfang der Anlagen richten sich nach der Nutzung, Größe und Gefährdung des Gebäudes.",
      "H2::Umsetzung in der Praxis",
      "Der organisatorische Brandschutz regelt die betrieblichen Maßnahmen: Erstellung der Brandschutzordnung nach DIN 14096 (Teile A, B und C), Bestellung eines Brandschutzbeauftragten, Ausbildung von Brandschutzhelfern, Erstellung von Flucht- und Rettungsplänen nach DIN ISO 23601, Planung und Durchführung von Räumungsübungen sowie Regelungen zur Instandhaltung und Prüfung der Brandschutzeinrichtungen.",
      "Das Brandschutzkonzept wird im Baugenehmigungsverfahren von der Bauaufsichtsbehörde oder einem Prüfsachverständigen für Brandschutz geprüft. Bei Bestandsgebäuden ist ein Brandschutzkonzept erforderlich, wenn wesentliche Nutzungsänderungen, Umbauten oder Erweiterungen geplant sind oder wenn die Bauaufsicht im Rahmen einer Begehung Mängel feststellt. Feuerversicherer verlangen zunehmend aktuelle Nachweise als Voraussetzung für den Versicherungsschutz.",
      "Nach Eröffnung: Genehmigtes Konzept und betrieblicher IST-Zustand müssen übereinstimmen – [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung], [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Fluchtpläne] und [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] pflegen den laufenden Betrieb. Abgrenzung: [Link: /wissen/blog/brandschutz-sachverstaendiger-koeln|Brandschutz-Sachverständiger vs. Brandschutzbeauftragter].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Genehmigung oder Behördenprüfung sollten Konzept, Fluchtwege und technische Anlagen konsistent sein und der betriebliche Brandschutz nach Eröffnung vorbereitet sein – Lücke zwischen genehmigter Planung und IST-Betrieb ist ein häufiger Befund.",
      "Health and Safety+ in Köln und NRW: brandschutztechnische Konzepte, Stellungnahmen und Bewertungen nach BauO NRW sowie [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz] – BSO, Brandschutzbeauftragter, Begehungen und Brandschutzhelfer aus einer Hand. [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann braucht man ein Brandschutzkonzept?",
        answer:
          "Bei Sonderbauten, Nutzungsänderungen, Abweichungen von Technischen Baubestimmungen, komplexen Objekten – bauordnungsrechtlich, nicht in jedem Regelbau.",
      },
      {
        question: "Was enthält ein Konzept?",
        answer:
          "Brandabschnitte, Flucht- und Rettungswege, Feuerwiderstände, technische Anlagen (BMA, RWA, Sprinkler), Löschkonzept – abgestimmt mit BauO NRW.",
      },
      {
        question: "Abgrenzung zum BSB?",
        answer:
          "Konzept/Sachverständiger = Planung/Genehmigung. [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|BSB] = laufender Betrieb – beide müssen nach Eröffnung zusammenpassen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/brandschutz-sachverstaendiger-koeln|Sachverständiger Köln], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO NRW] und [Link: /brandschutz|Leistungen].",
      },
    ],
  },
  {
    slug: "vorbeugender-brandschutz-massnahmen",
    title: "Vorbeugender Brandschutz – Maßnahmen, Pflichten und die drei Säulen",
    excerpt:
      "Vorbeugender Brandschutz: baulich, anlagentechnisch und organisatorisch – Pflichten im Betrieb, Prüffristen und BSO – praxisnah für Köln und NRW.",
    date: "2025-05-03",
    dateModified: "2026-05-26",
    content: [
      "Vorbeugender Brandschutz umfasst alle Maßnahmen, die Brände verhindern, ihre Ausbreitung begrenzen und eine geordnete Rettung ermöglichen – bevor die Feuerwehr eintrifft. Abwehrender Brandschutz (Feuerwehr, Löscheinsatz) kommt danach. Im Unternehmensalltag sind vor allem anlagentechnischer und organisatorischer Brandschutz aktiv zu pflegen; baulicher Brandschutz ist bei Neubau, Umbau und Nutzungsänderung entscheidend und muss im Betrieb zum IST-Zustand passen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Die drei Säulen sind kein Schlagwort, sondern eine Prüfstruktur: Fehlt eine Säule, kollabiert das System. Beispiel: perfekte BMA, aber gekeilte Brandschutztüren (baulich/technisch wirkungslos) und keine Übung (organisatorisch blind). Der [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz] vertieft Organisation, Prüffristen und Alarmierung; dieser Artikel ordnet die Säulen für Verantwortliche ein.",
      "Säule 1 – Baulicher Brandschutz: Feuerwiderstand von Wänden/Decken (F30–F90), Brandabschnitte, funktionierende Feuerschutzabschlüsse (Türen, Tore, Klappen) ohne Keilung, Rettungswege mit zulässigen Längen und Breiten, zweiter Rettungsweg nach BauO NRW wo erforderlich, fachgerechte Abschottungen von Leitungsdurchführungen (MLAR/abZ). Im Betrieb prüfbar, ob Umbauten nachgezogen wurden und Fluchtwegpläne zum IST-Zustand passen – siehe [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Genehmigung vs. IST]. Häufige Befunde sind nachträgliche Bürocontainer im Flur, offene Brandschutztüren und fehlende Kennzeichnung von Schottungen.",
      "Säule 2 – Anlagentechnischer Brandschutz: Früherkennung und Begrenzung. Kernanlagen: Brandmeldeanlage (Melder, Zentrale, Alarmierung, jährliche Wartung DIN 14675), Handfeuerlöscher und ggf. Wandhydranten (2-Jahres-Prüfung, Standorte ASR A2.3), RWA/Entrauchung (Kopplung BMA testen), Sprinkler/sonstige Löschanlagen nach Versicherer, Sicherheits- und Notbeleuchtung (monatlich/jährlich), Blitzschutz. Überfällige Wartung = Anlage gilt nicht als betriebssicher – Eskalation über BSB an die Leitung. Prüfkalender: [Link: /wissen/ratgeber/brandschutz-betrieb|Prüffristen-Kapitel im Ratgeber].",
      "Säule 3 – Organisatorischer Brandschutz: Regeln und Menschen. Pflichtprogramm im Betrieb: [Link: /wissen/blog/brandschutzordnung-din-14096|BSO DIN 14096] (Teil A/B/C), [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] nach DGUV 205-003, [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer] nach ASR A2.2, jährliche Unterweisung aller Beschäftigten, [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungspläne], Alarm- und Evakuierungsplan DGUV 205-033, Räumungsübungen, Brandschutzbegehungen mit Maßnahmenliste, Dokumentation.",
      "Vorbeugung im Arbeitsalltag – oft unterschätzt: Rauchverbot und kontrollierte Heißarbeit (DGUV 100-500 mit Freigabe), ordnungsgemäße Lagerung brennbarer Stoffe (TRGS 800), keine Brandlasten in Rettungswegen, elektrische Betriebsmittel mit Prüfplakette ([Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|DGUV V3]), Li-Ion-Ladebereiche und PV-Anlagen in die Gefährdungsbeurteilung einbeziehen ([Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion-Brandschutz]). Substitution: weniger brennbare Stoffe, kleinere Gebinde, weniger offene Lager in Arbeitsbereichen.",
      "H2::Umsetzung in der Praxis",
      "Gefährdungsbeurteilung Brandgefahr (§ 5 ArbSchG, ASR A2.2): Arbeitgeber bewerten Zündquellen, brennbare Stoffe, Personenanzahl, bauliche und technische Schutzmaßnahmen – Ergebnis: welche organisatorischen und technischen Maßnahmen nötig sind, ob BSB und wie viele BSH. Gefährdungsbeurteilung und BSO müssen zusammenpassen; Widersprüche verwirren Beschäftigte und Auditoren.",
      "An der Schnittstelle zwischen Bau und Betrieb gilt Folgendes. Nach Fertigstellung oder Mieterausbau trägt der Betreiber die Pflege. Jede relevante Änderung löst eine Kette aus: zunächst die Bauordnung prüfen, danach bauliche Maßnahmen, anschließend BMA und Pläne, im Anschluss die BSO und schließlich die Unterweisung. Wer nur organisatorisch „weiterbetreibt“, ohne baulische Nachführung, betreibt faktisch ohne Genehmigung.",
      "Abgrenzung zum Brandschutzkonzept (Genehmigung): Das BSK ist bauordnungsrechtlich; vorbeugender Betrieb lebt von BSO, Wartung und Disziplin im Alltag. Für genehmigungspflichtige Vorhaben: [Link: /wissen/blog/brandschutzkonzept-erstellen|betriebliches Konzept vs. Genehmigung] und brandschutzkoeln.com für BauO-Tiefe.",
      "Aus Begehungen (anonymisiert) sind folgende Schwachstellen bekannt. BMA wartungsfällig, aber Störung quittiert. Fluchtwegplan veraltet nach Umbau. Heißarbeit ohne Freigabe. Löscher hinter Verpackungsmaterial. Veranstaltung ohne BSB-Abstimmung. Brandschotts ohne Kennzeichnung. Vorbeugung heißt hier: Mängel mit Verantwortlichem und Frist, nicht nur Protokoll.",
      "Verantwortung und Konsequenzen: Arbeitgeber/Betreiber trägt Gesamtverantwortung – auch bei externem BSB, Facility und Wartungsfirmen. Verstöße können Bußgelder, Nutzungsuntersagung, Versicherungsausschluss und strafrechtliche Folgen nach sich ziehen. Im ASA-Jahresprogramm sollte der Status aller drei Säulen stehen: überfällige Prüfungen, durchgeführte Übungen und aktuelle BSO-Version.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Begehungen prüfen Sie, ob baulicher, anlagentechnischer und organisatorischer vorbeugender Brandschutz zusammen dokumentiert ist – nicht nur Löscher, sondern Brandabschnitte, BMA-Wartung und [Link: /wissen/blog/brandschutzordnung-din-14096|BSO]. Vor Audits sollten Wartungsnachweise, Begehungsprotokolle und Unterweisungen zum gleichen Stand wie die Gefährdungsbeurteilung vorliegen.",
      "Health and Safety+ unterstützt in Köln und NRW alle betrieblich aktiven Säulen: BSB, BSO, Begehungen, Pläne, Schulungen, Prüforganisation – baulische Themen mit Abstimmung zu Genehmigung und Sachverständigen. [Link: /kontakt|Kontakt] zur Bestandsaufnahme nach den drei Säulen.",
    ],
    faq: [
      {
        question: "Was umfasst vorbeugender Brandschutz?",
        answer:
          "Baulich (Brandabschnitte, Feuerwiderstand), anlagentechnisch (BMA, RWA, Sprinkler), organisatorisch (BSO, BSH, Begehungen, Unterweisung) – drei Säulen ineinander.",
      },
      {
        question: "Wer ist verantwortlich?",
        answer:
          "Arbeitgeber/Betreiber für betrieblichen Brandschutz; Bauherr für bauordnungsrechtlichen Brandschutz bei Neubau/Umbau – Schnittstelle bei Eröffnung klären.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "BMA-Störung quittiert ohne Maßnahme, Rettungswege belegt, Heißarbeit ohne Freigabe, fehlende Wartung technischer Anlagen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/brandschutz-brennbare-stoffe|brennbare Stoffe], [Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion] und [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber].",
      },
    ],
  },
  {
    slug: "ergonomie-kueche-kita-gefaehrdungsbeurteilung",
    title: "Ergonomie in der Großküche – Gefährdungsbeurteilung aus der Praxis (KiTa-Träger Köln)",
    excerpt:
      "Ergonomische Gefährdungsbeurteilung in einer KiTa-Küche: Spülbereich, Leitmerkmalmethode, Kinderessbereich und konkrete Maßnahmen nach STOP-Prinzip – anonymisiert aus einem Mandat in Köln.",
    date: "2025-05-04",
    dateModified: "2026-05-26",
    content: [
      "In einer Köln betreuten Einrichtung eines KiTa-Trägers stand die Fortschreibung der Gefährdungsbeurteilung für den Küchenbereich an. Ziel war eine tätigkeitsbezogene ergonomische Bewertung nach § 5 ArbSchG – nicht ein theoretischer Textbaustein, sondern eine Begehung unter realen Bedingungen mit Beobachtung typischer Arbeitsabläufe: Zubereitung, manuelles Spülen, Ein- und Ausräumen der Spülmaschine, Servieren im Essbereich und Reinigung kindgerechter Möbel.",
      "H2::Was gilt rechtlich?",
      "Rechtliche Orientierung lieferten ArbStättV und ASR, die DGUV Branchenregel für Küchenbetriebe sowie DGUV Information 209-098 zur ergonomischen Arbeitsgestaltung. Wo Lasten ab 3 kg gehoben oder getragen werden, kann die Leitmerkmalmethode (LMM) Hinweise auf Muskel-Skelett-Belastungen liefern – besonders bei Bücken, Verdrehen und hoher Wiederholungsrate.",
      "Die Arbeitsflächen lagen im üblichen Standardbereich (ca. 85–95 cm). Abweichungen von der Ellenbogenhöhe (Faustregel: Arbeitsplatte etwa 10–15 cm unter angewinkeltem Ellenbogen) waren nicht gravierend. Langfristig wären höhenverstellbare Bereiche oder ergonomische Stehhilfen denkbar – Priorität mittel, nicht sofortiger Handlungszwang.",
      "Deutlicher fiel der Spülbereich ins Gewicht: Große Töpfe und Schüsseln passen oft nicht in die haushaltsübliche Spülmaschine und werden manuell gespült. Beim Beladen des unteren Korbs entstehen wiederholtes Bücken sowie Heben schwerer Gegenstände in ungünstiger Haltung – Belastung für LWS, Schultern und Arme. Bewertung: etwas erhöht. Technische Option: größere professionelle Spültechnik mit ergonomischerer Aufstellhöhe; organisatorisch: Tätigkeitswechsel und Lagern schwerer Utensilien in greifbarer Höhe.",
      "H2::Umsetzung in der Praxis",
      "Im Kinderessbereich arbeiten die Beschreibenden an sehr niedrigen Tischen und Stühlen. Beim Servieren, Abstellen und Reinigen entstehen regelmäßige Beugehaltungen. Gelegentlich nutzen Erwachsene dieselben kindgerechten Sitzmöbel – ergonomisch ungünstig. Empfehlungen: Kompromisshöhen bei Neuanschaffungen, separate Sitzgelegenheiten für Erwachsene, Tabletts oder Wagen zum Anreichen von Geschirr.",
      "Die Ergebnisse wurden in die Gefährdungsbeurteilung übernommen; Maßnahmen folgten dem STOP-Prinzip (Substitution/Technik vor Organisation vor PSA). Ergänzend: jährliche Unterweisung zu rückenschonendem Heben und Tragen, Pausen nach intensiven Tätigkeiten, Wirksamkeitskontrolle bei geplanter Spültechnik oder Möblierungsänderung.",
      "H2::Typische Mängel und Vorbereitung",
      "In KiTa-Großküchen sollten Heben/Tragen, Hitze, Schnittverletzungen und Rutschgefahr in der GBU stehen und Maßnahmen wie Hubwagen, rutschfeste Matten und Pausenregelungen umgesetzt sein – typische BG-Prüfthemen in NRW.",
      "Für Träger sozialer Einrichtungen in Köln und NRW zeigt der Fall: Gefährdungsbeurteilung in Küchen lebt von Begehung und Beobachtung – nicht von Vorlagen. Health and Safety+ begleitet solche Bewertungen als externe Fachkraft für Arbeitssicherheit – von der Vor-Ort-Begehung bis zur dokumentierten Fortschreibung. [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|Ablauf Gefährdungsbeurteilung], [Link: /arbeitsschutz|Arbeitsschutz], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Welche Gefährdungen in der KiTa-Küche?",
        answer:
          "Heben schwerer Kessel und Lebensmittel, heiße Oberflächen und Dämpfe, scharfe Messer, rutschige Böden, Zeitdruck und enge Arbeitszonen – in GBU erfassen.",
      },
      {
        question: "Was hilft organisatorisch?",
        answer:
          "Lieferungen dezentral, Hubwagen statt manuelles Tragen, klare Zuständigkeiten, Unterweisung zu Messern und Hitze, Pausen bei thermischer Belastung.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Keine arbeitsplatzbezogene GBU, generische Vorlage, fehlende Unterweisung, keine ergonomische Begehung mit SiFa und Küchenleitung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf], [Link: /wissen/blog/getraenke-am-arbeitsplatz|Raumtemperatur ASR A3.5] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber].",
      },
    ],
  },
  {
    slug: "sifa-jahresbericht-was-gehoert-rein",
    title: "SiFa-Jahresbericht – Was wirklich rein muss (Praxisfall Mittelstand NRW)",
    excerpt:
      "Jahresbericht der Fachkraft für Arbeitssicherheit nach DGUV Vorschrift 2: Inhalte, Struktur und typische Schwerpunkte – anonymisiert aus einem NRW-Mandat.",
    date: "2025-05-06",
    dateModified: "2026-05-26",
    content: [
      "Viele Geschäftsführungen fragen uns nach dem SiFa-Jahresbericht: Was muss dokumentiert werden, was ist optional – und wann reicht eine schriftliche Zusammenfassung? Ein anonymisierter Fall aus der Betreuung eines mittelständischen Unternehmens in NRW (Handel/Logistik, kleinerer Standort) zeigt eine belastbare Struktur.",
      "H2::Was gilt rechtlich?",
      "Grundlage ist § 5 DGUV Vorschrift 2: Die Fachkraft für Arbeitssicherheit berichtet dem Arbeitgeber über ihre Tätigkeit. Der Bericht soll nachvollziehbar machen, welche Beratung, Begehungen, Unterweisungen und Schwerpunktthemen im Berichtszeitraum bearbeitet wurden – nicht nur Stundenlisten.",
      "Organisatorischer Teil: Auch ohne pflichtigen Arbeitsschutzausschuss (ASA) unter 20 Beschäftigten wurden sicherheitstechnische Abstimmungen dokumentiert. Im Fall: eine Begehung mit Protokoll, Abstimmung mit dem Betriebsarzt bei Bedarf, Rückblick auf vereinbarte Maßnahmen.",
      "Inhaltliche Schwerpunkte aus dem Berichtszeitraum waren die aktuelle Gefährdungsbeurteilung als Basis, das Unfallgeschehen (hier ohne meldepflichtige Arbeitsunfälle), eine durchgeführte Evakuierungsübung mit Dokumentation, die jährliche Unterweisung inklusive Brandschutz, Gefahrstoffe und Ergonomie am Bildschirmarbeitsplatz, eine Stellungnahme zur Prüfpflicht von Handhubwagen, psychische Belastung über PegA-Befragung mit Maßnahmenplan sowie ein Hinweis auf die MuSchG-Änderung ab Juni 2025 (Schutzfristen nach Fehlgeburten).",
      "H2::Umsetzung in der Praxis",
      "Wirksamkeitsbewertung gehört explizit dazu: Was hat funktioniert (Unterweisungen, Begehung, stabile Unfalllage), wo besteht Nachholbedarf (Wirksamkeitskontrolle bei Stellenbeschreibungen nach PegA). Empfehlungen für den Folgezeitraum sollten konkret, aber nicht überladen sein.",
      "Anlagenverweis im Bericht: Begehungsprotokoll, Notfallplan, Unterweisungsnachweise, PegA-Auswertung, fachliche Stellungnahmen zu Einzelfragen. So entsteht ein prüffähiges Gesamtbild – für BG, Versicherer oder interne Audits.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor ASA oder BG-Prüfung sollte der Jahresbericht Bezug zu umgesetzten Maßnahmen haben, offene Punkte benennen und Vorschläge fürs Folgejahr enthalten – reine Formalberichte ohne IST-Bezug gelten als Mangel.",
      "Als externe Fachkraft für Arbeitssicherheit in Köln und NRW erstellen wir Jahresberichte, die Pflicht und Praxis verbinden – ohne Copy-Paste-Floskeln. [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz im Unternehmen], [Link: /arbeitsschutz|Leistungen Arbeitsschutz], [Link: /kontakt|Kontakt].",
      "Health and Safety+ – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ist der SiFa-Jahresbericht Pflicht?",
        answer:
          "Ja – § 5 DGUV V2: SiFa erstellt jährlich Bericht für Geschäftsführung mit GBU, Begehungen, Unterweisungen, Unfällen, offenen Maßnahmen.",
      },
      {
        question: "Was muss der Bericht enthalten?",
        answer:
          "Stand Arbeitsschutz, durchgeführte und geplante Maßnahmen, Unfallstatistik, ASA-Themen, Verbesserungsvorschläge – Steuerungsinstrument, keine Formalität.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Copy-Paste vom Vorjahr, keine offenen Maßnahmen, fehlender Bezug zu GBU-Version, Geschäftsführung ohne Kenntnisnahme.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/dguv-vorschrift-2|DGUV V2], [Link: /wissen/blog/asa-sitzung-praxis-kita-arbeitsschutz|ASA in der Praxis] und [Link: /wissen/blog/akteure-arbeitsschutz|Akteure].",
      },
    ],
  },
  {
    slug: "ist-zustandserfassung-externe-fasi",
    title: "Ist-Zustandserfassung vor externer Fachkraft für Arbeitssicherheit – Ablauf (Köln)",
    excerpt:
      "Ist-Zustandserfassung vor externer SiFa-Betreuung: Struktur, Dokumentation, ASA und Prioritäten – praxisnah für Köln und NRW.",
    date: "2025-05-07",
    dateModified: "2026-05-26",
    content: [
      "Wer eine externe Fachkraft für Arbeitssicherheit neu beauftragt, sollte nicht mit generischen Vorlagen starten, sondern mit einer strukturierten Ist-Zustandserfassung. Sie ist die Basis für [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|schriftliche Bestellung], Betreuungsplan nach [Link: /wissen/blog/dguv-vorschrift-2|DGUV Vorschrift 2] und realistische Arbeitszeit – ohne Begehung entstehen unrealistische Angebote – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Fall (anonymisiert): Technischer Gebäudedienstleister, Niederlassung Köln – Installation, Wartung, Außendienst. Kennenlerngespräch plus Betriebsrundgang als Einstieg in die Grundbetreuung, nicht als „Kennenlerntermin ohne Ergebnis“.",
      "Unternehmen und Tätigkeiten: Beschäftigtenzahl am Vertragsstandort, Anteil Außendienst und Montage, typische Arbeiten (Schweißen, Kältemittel, Höhenarbeit, Fahrzeugflotte, Kundenbaustellen). Daraus leiten sich betriebsspezifische Betreuungsbausteine ab – nicht nur die Anlagen-Grundbetreuung.",
      "Sicherheitstechnische Aufstellung: Bestehende oder geplante Fachkraft für Arbeitssicherheit, Betriebsarzt, [Link: /wissen/blog/sicherheitsbeauftragte-schulung-koeln|Sicherheitsbeauftragte] bei mehr als 20 Beschäftigten, Ersthelfer, [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer], [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter], Frequenz des Arbeitsschutzausschusses, Einbindung von Betriebsrat und Fachkraft.",
      "Dokumentation: Gefährdungsbeurteilungen (Stand, Vollständigkeit), [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen], [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisungsnachweise], Prüfbücher ([Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3], Regale), Gefahrstoffverzeichnis, Unfallbuch, Notfallplan. Lücken werden als priorisierte Maßnahmen im Betreuungsplan geführt – nicht kaschiert.",
      "H2::Umsetzung in der Praxis",
      "Begehungen und Schulungen: Datum der letzten Sicherheitsbegehung, Organisation der Unterweisungen (digital oder Präsenz), Rückstände. Branchentypisch: Kältemittel, Druckgeräte, PSA, Subunternehmer auf fremden Baustellen – Schnittstelle [Link: /sigeko|SiGeKo], wenn der Betrieb als Nachunternehmer tätig ist.",
      "Ablauf vor Ort: zuerst Organisation und Verantwortlichkeiten, dann Rundgang Werkstatt, Lager, Gefahrstoffe; am Ende offene Punkte mit Ansprechpartner bestätigen. Nachgereichte Unterlagen: Organigramm, bisheriger Betreuungsvertrag, Übersicht Gefährdungsbeurteilungen, Unterweisungsmatrix.",
      "Ergebnis: Betreuungsplan mit Prioritäten, ASA-Terminplan (falls mehr als 20 Beschäftigte), Fortschreibung der Gefährdungsbeurteilung, Kick-off-Unterweisungen – Grundlage für [Link: /wissen/blog/externe-fasi-erstes-vertragsjahr-ablauf|erstes Vertragsjahr].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Vertragsstart sollten vorhandene GBU, Unterweisungsnachweise, Prüfkalender und offene Mängel aus der Vorgängerbetreuung erfasst sein – sonst fehlt die Basis für Betreuungsplan und Prioritätenliste.",
      "Health and Safety+ führt Ist-Zustandserfassungen in Köln und NRW durch – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft], [Link: /arbeitsschutz|Arbeitsschutz], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Warum Ist-Zustandserfassung vor externer SiFa?",
        answer:
          "Ohne IST-Analyse sind Betreuungsumfang, Arbeitszeit und Maßnahmenplan unscharf – Risiko für Unter- oder Überbetreuung und Lücken bei der ersten BG-Begehung.",
      },
      {
        question: "Was wird erfasst?",
        answer:
          "GBU-Stand, Begehungsprotokolle, Unterweisungen, Prüffristen, Unfälle, ASA-Protokolle, offene Maßnahmen, Betriebsstruktur und Gefährdungsschwerpunkte.",
      },
      {
        question: "Typische Lücken?",
        answer:
          "Vertrag startet ohne Begehung, alte GBU ungeprüft übernommen, fehlende Abstimmung mit Betriebsarzt, keine Priorisierung der ersten 90 Tage.",
      },
      {
        question: "Nächster Schritt?",
        answer:
          "[Link: /wissen/blog/externe-fasi-erstes-vertragsjahr-ablauf|Erstes Vertragsjahr], [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Bestellung] und [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2].",
      },
    ],
  },
  {
    slug: "pruefpflicht-handhubwagen-arbeitssicherheit",
    title: "Prüfpflicht Handhubwagen – Stellungnahme aus Fachkraft-Betreuung (Praxis)",
    excerpt:
      "Handhubwagen regelmäßig prüfen: Was sagt BetrSichV und die Gefährdungsbeurteilung? Orientierung zu Prüfumfang, Fristen und Alltagskontrolle – aus einem NRW-Mandat.",
    date: "2025-05-09",
    dateModified: "2026-06-26",
    content: [
      "Im Rahmen einer Jahresbetreuung durch die Fachkraft für Arbeitssicherheit in NRW stellte sich die Frage, ob und wie oft Handhubwagen (Gabelhubwagen, Wagen ohne Antrieb) prüfpflichtig sind. Hintergrund: täglicher Einsatz im Lager, unterschiedliche Zustände, keine einheitliche Dokumentation.",
      "H2::Was gilt rechtlich?",
      "Handhubwagen sind Arbeitsmittel im Sinne der Betriebssicherheitsverordnung (BetrSichV). Der Arbeitgeber muss ihre Sicherheit sicherstellen – auf Basis der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] nach § 5 ArbSchG. Das umfasst die Wahl geeigneter Arbeitsmittel, Wartung, wiederkehrende Prüfungen durch befähigte Personen (TRBS 1201/1203) und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung] der Nutzer in Sicht- und Funktionskontrolle vor Einsatz.",
      "Prüfumfang orientiert sich an Herstellerangaben, DGUV-Informationen zu Prüfungen und dem tatsächlichen Verschleiß: Räder, Gabeln, Hydraulik, Bremsen, Kennzeichnung der Tragfähigkeit, sichtbare Beschädigungen. Ergebnis der fachlichen Stellungnahme im Mandat: regelmäßige Prüfung durch befähigte Person – typische Orientierung jährlich, plus tägliche Sicht- und Funktionskontrolle durch die Nutzer vor Einsatz.",
      "Dokumentation ist Pflicht: Prüfdatum, Prüfer, Befund, nächster Termin, ggf. Stilllegung defekter Geräte. Ohne Nachweis bleibt bei Unfällen oder BG-Prüfungen eine Lücke – auch wenn die Geräte „noch laufen“.",
      "Handhubwagen und Flurförderzeuge unterliegen wiederkehrenden Prüfungen nach BetrSichV und DGUV-Regeln – vor Inbetriebnahme, nach Reparatur und in festen Intervallen durch befähigte Personen. Mängel an Bremsen, Gabeln oder Rollen sind häufige Unfallursachen in Lager und Werkstatt.",
      "Prüfprotokolle gehören zur Betriebsorganisation und zur BG-Begehung. Vertiefung Flurförderzeuge: [Link: /wissen/blog/dguv-vorschrift-67-flurfoerderzeuge|DGUV Vorschrift 67].",
      "H2::Umsetzung in der Praxis",
      "Organisatorisch hilft ein Prüfkalender gemeinsam mit Regalprüfungen, Hubarbeitsbühnen und Elektroprüfungen nach DGUV V3. Verantwortliche im Lager erhalten eine Kurzcheckliste (Räder, Hydraulik, Gabel, Kennzeichnung).",
      "Die Stellungnahme wurde in den [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht] und in die Fortschreibung der Gefährdungsbeurteilung aufgenommen. Für Geschäftsführungen im Rheinland: Einzelfragen zu Arbeitsmitteln gehören in die laufende Betreuung – nicht erst nach einem Unfall.",
      "Mehr zur BetrSichV: [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV einfach erklärt], [Link: /wissen/blog/trbs-einfach-erklaert|TRBS Prüfung], [Link: /wissen/blog/dguv-vorschrift-67-flurfoerderzeuge|DGUV Vorschrift 67 Flurförderzeuge], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] und [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|Elektrosicherheit]. Health and Safety+ berät in Köln und NRW – [Link: /arbeitsschutz|Arbeitsschutz], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Unterliegen Handhubwagen der Prüfpflicht?",
        answer:
          "Ja – als Arbeitsmittel nach BetrSichV und TRBS 1201. Prüfung vor Inbetriebnahme und wiederkehrend nach Gefährdungsbeurteilung, oft jährlich.",
      },
      {
        question: "Was wird geprüft?",
        answer:
          "Bremsen, Räder, Gabeln, Hydraulik, Kennzeichnung Traglast, Ergonomie – dokumentiert mit Prüfplakette und Protokoll.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Keine wiederkehrende Prüfung, überladene Wagen, defekte Bremsen, fehlende Unterweisung, nicht in GBU erfasst – in Logistikbetrieben in NRW häufig.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV], [Link: /wissen/blog/trbs-einfach-erklaert|TRBS] und [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU].",
      },
    ],
  },
  {
    slug: "externe-fasi-erstes-vertragsjahr-ablauf",
    title: "Externe Fachkraft für Arbeitssicherheit – Ablauf im ersten Vertragsjahr (Köln)",
    excerpt:
      "Jahrespauschale, ASA-Betreuung, integrierte Begehung, Unterweisungen: So strukturieren wir das erste Vertragsjahr externer Arbeitssicherheit – anonymisiert aus einem Kölner Mandat.",
    date: "2025-05-10",
    dateModified: "2026-06-26",
    content: [
      "Ein mittelgroßer Logistikstandort in Köln suchte eine externe Fachkraft für Arbeitssicherheit mit klarem Leistungsumfang statt reiner Stundenabrechnung. Das Angebot kombinierte Grundbetreuung nach ASiG und DGUV Vorschrift 2 mit festen Bausteinen im ersten Jahr.",
      "H2::Was gilt rechtlich?",
      "Kernleistungen in der Jahrespauschale: Beratung und Koordination, Betreuung der vom Auftraggeber einberufenen ASA-Sitzungen bei mehr als 20 Beschäftigten (Regelfall bis zu vier pro Jahr) inkl. Vorbereitung und Protokollierung, eine jährliche Sicherheitsbegehung – im Idealfall an eine ASA gekoppelt, jährliche kompakte Grundunterweisung nach [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|§ 12 ArbSchG], Einarbeitungsunterweisungen für Neueinstellungen (bis zu drei zusätzliche Termine pro Jahr).",
      "Speziell im ersten Vertragsjahr: [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung] und Betreuungsplan nach DGUV V2. Damit werden Lücken in der Gefährdungsbeurteilung, offene Prüfungen, Unterweisungsrückstände und ASA-Themen priorisiert – statt alles gleichzeitig anzugehen.",
      "Mitwirkungspflichten des Auftraggebers sind vertraglich klar: ASA-Einladung mindestens fünf Werktage vorher, Bereitstellung von Unterlagen und Räumen, Terminorganisation für Unterweisungen. Mehrleistungen (zusätzliche ASA-Termine, Sonderbegehungen, Neuerstellung der Gefährdungsbeurteilung) werden gesondert abgestimmt – typisch nach Stundensatz.",
      "H2::Umsetzung in der Praxis",
      "Für die Geschäftsführung bedeutet das: planbare Kosten, fester Ansprechpartner in Köln, dokumentierte ASA-Protokolle und nachvollziehbare Unterweisungen. Für HR relevant: strukturierte Einarbeitungsunterweisungen bei Fluktuation.",
      "Vergleichbare Strukturen nutzen wir für technische Dienstleister, Sozialträger und Mittelstand in NRW – jeweils mit branchenspezifischer Ist-Erfassung. Details zur Bestellung: [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit].",
      "H2::Typische Mängel und Vorbereitung",
      "Im ersten Vertragsjahr sollten Ist-Erfassung, Betreuungsplan und erste Begehung vor der GBU-Flut stehen – sonst fehlt die Priorisierung für ASA und Jahresbericht. Vor der ersten BG-Begehung sollten Bestellung, Betreuungsplan und dokumentierte Mitwirkungspflichten des Auftraggebers nachvollziehbar sein.",
      "Im ersten Jahr externer Betreuung stehen Ist-Zustandserfassung, schriftliche Bestellung, Betreuungsplan und Priorisierung offener Mängel im Vordergrund. Sinnvoll sind Quartalsziele, ASA-Vorbereitung und Abstimmung mit Betriebsarzt und Brandschutz.",
      "Ohne strukturierten Jahresbericht verliert die Betreuung bei Prüfungen an Nachweiswert – [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht] und [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung].",
      "Health and Safety+ strukturiert externe Betreuung in Köln und NRW – [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe Fachkraft], [Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung], [Link: /arbeitsschutz|Arbeitsschutz]. [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie strukturiert man das erste SiFa-Jahr?",
        answer:
          "Monat 1–3: Ist-Erfassung, Bestellung, Betreuungsplan, erste Begehung. Monat 4–9: GBU-Fortschreibung, Unterweisungen, Maßnahmen umsetzen. Monat 10–12: Jahresbericht, ASA, Plan Folgejahr.",
      },
      {
        question: "Was hat Priorität?",
        answer:
          "Akute Mängel (Absturz, Elektro, Gefahrstoffe), fehlende GBU, abgelaufene Prüfungen, Unterweisungslücken – vor Formalprojekten.",
      },
      {
        question: "Was läuft im ersten Jahr oft schief?",
        answer:
          "Jahresbericht ohne vorherige Begehungen, GBU-Flut ohne Umsetzung, keine Einbindung Geschäftsführung, ASA terminiert aber nicht vorbereitet.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/ist-zustandserfassung-externe-fasi|Ist-Zustandserfassung], [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|Jahresbericht] und [Link: /wissen/blog/externe-fachkraft-arbeitssicherheit-koeln|externe SiFa Köln].",
      },
    ],
  },
  {
    slug: "asa-sitzung-praxis-kita-arbeitsschutz",
    title: "ASA-Sitzung in der Praxis – KiTa-Träger Köln (Protokoll & Schwerpunkte)",
    excerpt:
      "Was in einer ASA wirklich besprochen wird: Gefährdungsbeurteilung Küche, psychische Belastung, Bildschirmarbeitsplätze – anonymisiert aus Protokoll eines Kölner Sozialträgers.",
    date: "2025-05-12",
    dateModified: "2026-06-26",
    content: [
      "Der Arbeitsschutzausschuss (ASA) ist bei mehr als 20 Beschäftigten einzurichten – wird oft theoretisch diskutiert, selten transparent beschrieben. Ein anonymisierter Protokollauszug eines KiTa-Trägers in Köln (Online-Sitzung mit Geschäftsführung, Verwaltung, Kita-Leitung, Betriebsarzt, Fachkraft für Arbeitssicherheit) zeigt typische Schwerpunkte jenseits von Formalien.",
      "H2::Was gilt rechtlich?",
      "Thema 1 – Gefährdungsbeurteilung Küche: Tätigkeits- und personenbezogene Bewertung nach § 5 ArbSchG, u. a. mit Leitmerkmalmethode bei Heben/Tragen. Ergebnis: mittleres Belastungsniveau, präventive ergonomische Maßnahmen bei Neuanschaffungen empfohlen. Vertiefung: [Link: /wissen/blog/ergonomie-kueche-kita-gefaehrdungsbeurteilung].",
      "Thema 2 – Psychische Gefährdungsbeurteilung: Bestehende Fortbildungen und Supervision wurden anerkannt; systematische Gefährdungsbeurteilung psychischer Belastung aber noch offen. Beschlossener Dreischritt: IST-Erfassung, strukturierte Belastungsanalyse, Maßnahmen und Wirksamkeitskontrolle – in Abstimmung mit der Fachkraft für Arbeitssicherheit und HR. Mehr Hintergrund: [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz].",
      "Thema 3 – Bildschirmarbeitsplätze: An mehreren Standorten teils reine Laptop-Nutzung ohne ergonomische Ausstattung. Klarstellung: Bildschirmarbeitsplatz liegt vor, wenn Bildschirmtätigkeit wesentlicher Teil der Tagesarbeit ist. Maßnahmen: externe Monitore, Eingabegeräte, angepasste Tisch-/Sitzsituation – schrittweise Umsetzung.",
      "H2::Umsetzung in der Praxis",
      "Weitere Punkte: Einordnung von Verdachtsfällen (z. B. Tinnitus) – Abklärung über zuständige Stellen, nicht durch ASA-Voting; Rückblick offener Maßnahmen aus der letzten Sitzung; Terminplanung für Begehungen und Unterweisungen.",
      "Gute ASA-Protokolle benennen Status pro Thema (Information, In Arbeit, Offen), Ergebnisse und Verantwortliche. Sie verknüpfen Gefährdungsbeurteilung, Unterweisung und Brandschutz – statt paralleler Insellösungen.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor der ASA-Sitzung sollten Unfallstatistik, offene Maßnahmen aus Begehungen, geplante Umbauten und Unterweisungsstand vorbereitet sein – ohne Tagesordnung und Protokoll erfüllt der ASA nicht seine Beratungsfunktion.",
      "Der Arbeitsschutzausschuss (ASA) nach ASiG § 11 bündelt SiFa, Betriebsarzt, Sicherheitsbeauftragte und Betriebsrat – mindestens vierteljährlich, mit Protokoll. In Kitas und Sozialträgern in Köln und NRW sind Hygiene, Infektionsschutz, Ergonomie und Brandschutz wiederkehrende ASA-Themen.",
      "Protokolle sollten Maßnahmen, Verantwortliche und Fristen enthalten – nicht nur Statusberichte. [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber] und [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz].",
      "Health and Safety+ übernimmt in Köln und NRW ASA-Vorbereitung, Protokollierung und fachliche Moderation – für Träger sozialer Einrichtungen, Mittelstand und Logistik. [Link: /wissen/blog/akteure-arbeitsschutz|Akteure im Arbeitsschutz], [Link: /arbeitsschutz|Arbeitsschutz], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann braucht eine KiTa einen ASA?",
        answer:
          "Ab mehr als 20 Beschäftigten nach ASiG § 11 – in Trägerstrukturen Zählung über alle Einrichtungen prüfen, Teilzeitregeln beachten.",
      },
      {
        question: "Typische ASA-Themen in KiTa?",
        answer:
          "Infektionsschutz, ergonomische Küche, Spielplatz-Sicherheit, psychische Belastung, Brandschutz, Dokumentation von Beinahe-Ereignissen.",
      },
      {
        question: "Was gehört ins Protokoll?",
        answer:
          "Teilnehmer, Tagesordnung, Beschlüsse, Verantwortliche, Fristen, Nachverfolgung offener Punkte – mindestens vierteljährlich.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/akteure-arbeitsschutz|Akteure], [Link: /wissen/blog/ergonomie-kueche-kita-gefaehrdungsbeurteilung|KiTa-Küche GBU] und [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber].",
      },
    ],
  },
  {
    slug: "sigeko-begehung-seitenschutz-abbruch-koeln",
    title: "SiGeKo-Begehung: Seitenschutz und Absturzsicherung in der Abbruchphase (Köln)",
    excerpt:
      "SiGeKo-Begehung in der Abbruchphase: Seitenschutz, Absturzsicherung und typische Mängel am innerstädtischen Umbau in Köln.",
    date: "2025-05-14",
    dateModified: "2026-05-26",
    content: [
      "In einem innerstädtischen Umbau in Köln (Abbruch- und Rückbauphase, mehrere Gewerke parallel) wurden im Rahmen der SiGeKo-Koordination regelmäßige Baustellenbegehungen durchgeführt. Schwerpunkt war Absturzsicherung und Seitenschutz in den oberen Geschossen – ein klassisches Thema nach Baustellenverordnung mit hoher Unfalltragweite.",
      "H2::Was gilt rechtlich?",
      "Ausgangslage: Ein spezialisiertes Unternehmen führte Abbrucharbeiten aus, mehrere Beschäftigte waren regelmäßig vor Ort, teils gleichzeitig mit anderen Gewerken in der Nähe. Die Begehungen verglichen den tatsächlichen Zustand mit früheren Berichten. Viele Nachbesserungen waren sichtbar, aber es gab weiterhin Lücken bei Vollständigkeit, Verankerung und Übergängen zwischen Abbruch, provisorischer Sicherung und Folgegewerken.",
      "Bei Absturzgefahr achtet der SiGeKo vor allem darauf, ob alle Absturzkanten und Öffnungen mit Seitenschutz, Abdeckung oder Netzen gesichert sind, ob provisorische Konstruktionen statisch und fachgerecht befestigt sind und keine lösbaren Klemmen an kritischen Stellen tragen, ob Verkehrswege und Fluchtwege frei von Abbruchmaterial bleiben und wer für welchen Bereich verantwortlich ist – schriftlich im SiGe-Plan benannt.",
      "Abbruch-spezifisch (Orientierung Berufsgenossenschaft BAU C 301): Vor Beginn bauliche und statische Bewertung des abzubrechenden Bauwerks, Abbruchanweisung durch den Unternehmer, Aufsichtführender mit Weisungsbefugnis, der die Arbeiten nicht parallel als Maschinenführer ausübt. Bauteile nicht durch Unterhöhlen oder Einschlitzungen zum Einsturz bringen. Gefahrstoffe und Gebäudeschadstoffe vor dem Abbruch klären.",
      "In Begehungsberichten unterscheiden wir drei Dringlichkeitsstufen. Kategorie A bedeutet unmittelbare Absturzgefahr: Arbeitsbereich sperren, Arbeit stoppen, sofort nachbessern. Kategorie B ist ein Absturzrisiko bei fortgesetzter Arbeit: Maßnahme innerhalb kurzer Frist, Wiederbegehung planen. Kategorie C betrifft organisatorische Punkte wie Dokumentation, Unterweisung oder Termine im Baustellenlogbuch. So können Gewerke planbar reagieren statt defensiv.",
      "Bei Begehungen fallen regelmäßig unvollständiger Seitenschutz an Deckenkanten, provisorische Absicherungen ohne belastbare Verankerung und Lücken beim Gewerkewechsel auf – etwa wenn das Abbruchunternehmen den Schutz entfernt hat und das Folgegewerk noch nicht nachgerüstet ist. Jeder Punkt wird mit Foto, Geschoss, Verantwortlichem, Frist und Status bei der Folgebegehung dokumentiert.",
      "H2::Umsetzung in der Praxis",
      "Rechtliche Einordnung: Absturzsicherung nach TRBS 2121 Teil 2 und ASR A2.1 (Absturz, Sturz und herabfallende Gegenstände), dazu die projektbezogene Gefährdungsbeurteilung des Abbruchunternehmens und die Querschnitts-Gefährdungsbeurteilung im SiGe-Plan. Absturzhöhe ab 1 Meter am Arbeitsplatz ist relevant; ab 2 Meter an weiteren Arbeitsplätzen und Verkehrswegen gelten verschärfte Anforderungen an den Seitenschutz – objektspezifisch im Plan festhalten.",
      "Häufigster Konflikt bei Gerüst, Abbruch und Rohbau: Wer stellt die Randabsicherung in welcher Phase? Übergabeprotokolle mit Fotos und Freigabe für das Folgegewerk vermeiden Grauzonen. Der SiGeKo moderiert, ersetzt aber nicht die Statik des Gerüstbauers oder die Abbruchanweisung.",
      "Lärm und Staub in der Abbruchphase gehören in SiGe-Plan und Begehung mit dazu – Gehörschutz, Staubschutz, Nachbarschaft. Das reduziert Beschwerden und Behördenkontakte in Köln.",
      "Tipp für Bauherren: Begehungsberichte als Projektjournal nutzen und Versionen vergleichen. Wiederkehrende Mängel am gleichen Typ – etwa an derselben Deckenkante – deuten oft auf fehlende Baustellenordnung oder unzureichende Einweisung, nicht auf „faule Handwerker“.",
      "Für Berufsgenossenschaft und Behörde überzeugen nachvollziehbare Maßnahmenketten: Feststellung, Verantwortlicher, Umsetzung, Wirksamkeitskontrolle – nicht bloß Sammellisten. Der SiGeKo dokumentiert die Koordination, nicht die fachliche Abbruchausführung des Gewerkes.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor der nächsten Begehung sollten SiGe-Plan, Begehungsprotokolle und Maßnahmenplan auf dem aktuellen Stand liegen, Unterweisungen nachweisbar sein und Verantwortliche mit Fristen benannt sein – abgestimmt mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Health and Safety+ führt SiGeKo-Begehungen in Köln und NRW durch – Abbruch, Rohbau, Ausbau. [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo], [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Pflicht], [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|Gefährdungsbeurteilung Schnittstellen]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Warum Seitenschutz bei Abbruch in Köln?",
        answer:
          "Enge innerstädtische Grundstücke, Nachbarschaft, Anhang II Nr. 1 BaustellV – Absturz und herabfallende Teile müssen im SiGe-Plan mit Maßnahmen und Verantwortlichen stehen.",
      },
      {
        question: "Was prüft der SiGeKo?",
        answer:
          "Seitenschutz, Verbau, Absturzsicherung, Einweisung Gewerke, Schnittstellen Abbruch/Rohbau, Dokumentation im SiGe-Plan und Begehungsprotokoll.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Seitenschutz erst nach Beanstandung, fehlende Einweisung Subunternehmer, Plan nicht fortgeschrieben bei Lageänderung, keine Übergabe an Rohbau.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/baustellv-anhang-ii-gefaehrliche-arbeiten|Anhang II], [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub] und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      },
    ],
  },
  {
    slug: "rauchen-baustelle-arbstattv-sigeko",
    title: "Rauchen auf der Baustelle – § 5 ArbStättV und die Rolle des SiGeKo",
    excerpt:
      "Darf auf der Baustelle geraucht werden, solange die Fassade offen ist? SiGeKo-Stellungnahme zu Nichtraucherschutz, übergeordneter Gefährdungsbeurteilung und Raucherstellen – aus einem Kölner Bauprojekt.",
    date: "2025-05-16",
    dateModified: "2026-05-26",
    content: [
      "Ein häufiger Konflikt auf Baustellen: Der Bauherr möchte grundsätzlich Rauchen zulassen – Argument oft „Fassade noch nicht geschlossen“. In einem innerstädtischen Bauprojekt in Köln wurde diese Frage an den SiGeKo herangetragen. Die Antwort ist rechtlich klarer, als viele erwarten.",
      "H2::Was gilt rechtlich?",
      "Nach § 5 ArbStättV gilt Nichtraucherschutz am Arbeitsplatz – auch auf Baustellen. Eine offene Fassade oder fehlende Außenwand begründet kein pauschales „Rauchen erlaubt“. Beschäftigte aller Gewerke sind geschützt, nicht nur die des Bauherrn beauftragten Teams.",
      "Brandschutz auf der Baustelle: Zündquellen in der Nähe von Holz, Dämmstoffen, Folien, Verpackungen und temporären Heizgeräten erhöhen Brandrisiko. SiGeKo und Baustellenordnung müssen mit brennbaren Lagern und Heißarbeiten (Schweißen, Schneiden) abgestimmt sein – siehe [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz im Betrieb] für die spätere Nutzungsphase.",
      "Zwei Ebenen der Gefährdungsbeurteilung: (1) übergeordnete, phasenweise Gefährdungsbeurteilung des Bauvorhabens (Querschnitt: Rauchen, Verkehr, Lärm, Absturz, Nachbarschaft); (2) betriebliche Gefährdungsbeurteilung jedes ausführenden Unternehmens für seine Tätigkeiten und Beschäftigten. Der SiGeKo koordiniert und widerspricht nicht – er stellt Konsistenz zwischen SiGe-Plan, Baustellenordnung und Gewerke-Gefährdungsbeurteilungen her.",
      "Sozialräume auf Baustellen (ASR A4.2, ArbStättV): Pausenräume sind ab bestimmten Schwellen (z. B. mehr als vier Beschäftigte gleichzeitig, längere Einsatzdauer) vorzusehen – mit Schutz vor Witterung, Beleuchtung, ausreichend beheizbar. Raucherstellen sind keine Ersatz-Pausenräume; sie werden separat, außerhalb von Gefahrenbereichen und mit Abstand zum Gebäude geplant.",
      "Praxisempfehlung aus dem Mandat: Generelles Rauchverbot auf der Baustelle; ausgewiesene Raucherstelle(n) im Freien mit Abstand zum Gebäude (Orientierung häufig 2,5–5 m, projektspezifisch in der Gefährdungsbeurteilung begründen), Kennzeichnung, Aschenbehälter, Regel in Baustellenordnung und Aushang am SiGe-Plan. Bauleitung und Gewerke schriftlich informieren.",
      "H2::Umsetzung in der Praxis",
      "Warum nicht „überall draußen“? Nachbarschaft, öffentlicher Gehweg, Lagerzonen und Kranumfahrung schließen viele Flächen aus. Eine definierte Stelle verhindert Rauchen in Fluchtwegen, auf Gerüsten oder in der Nähe von Lagercontainern.",
      "SiGeKo-Leistung im Fall: Schriftliche Stellungnahme, Abgrenzung der Gefährdungsbeurteilungsebenen, Vorschlag für Baustellenordnung, Abstimmung mit Bauherr und Projektleitung – keine Eilverordnung per mündlicher Weisung, die später niemand findet.",
      "Typischer Fehler: Baustellenordnung erlaubt Rauchen, SiGe-Plan schweigt, Gewerke-Gefährdungsbeurteilungen verbieten – drei Regeln, drei Interpretationen. Einheitliche Regel spart Konflikte mit Nachbarn und erleichtert BG-Begehungen.",
      "Verknüpfung Abbruchphase: In derselben Baustelle in Köln lief parallel die Diskussion Seitenschutz – [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch]. Querschnittsthemen gehören in eine fortgeschriebene Projekt-Gefährdungsbeurteilung, nicht in Einzel-E-Mails.",
      "H2::Typische Mängel und Vorbereitung",
      "Auf Baustellen muss das Rauchverbot in SiGe-Plan, Baustellenordnung und Unterweisung verankert sein – neben brennbaren Stoffen und Heißarbeit. Fehlende Durchsetzung ist ein Standard-Befund bei Begehungen in Köln und NRW.",
      "Für Bauherren in Köln und NRW: Themen aus Arbeitsstättenverordnung, Brandschutz und SiGeKo vor Baubeginn klären. Health and Safety+ berät als SiGeKo und Fachkraft für Arbeitssicherheit – [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo], [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|Gefährdungsbeurteilung Schnittstellen]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ist Rauchen auf der Baustelle verboten?",
        answer:
          "In der Regel ja – Brandgefahr durch brennbare Materialien, Heißarbeit und oft eingeschränkte Fluchtwege. Regel in Baustellenordnung und SiGe-Plan, Unterweisung aller Gewerke.",
      },
      {
        question: "Was sagt die ArbStättV?",
        answer:
          "Rauchverbot wo Brand- oder Explosionsgefahr – auf Baustellen faktisch fast immer. Raucherzonen nur mit dokumentierter Freigabe und Abstand zu Brandlast.",
      },
      {
        question: "Rolle des SiGeKo?",
        answer:
          "Regel in Baustellenordnung, Einweisung, Begehung, Durchsetzung mit Bauleitung – siehe [Link: /wissen/blog/baustellv-sigeko-koordination-aufgaben|SiGeKo-Aufgaben].",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Rauchen in Lagerzonen, keine ausgewiesene Raucherzone, Regel nicht in Einweisung, Zigaretten in Gerüstbereich.",
      },
    ],
  },
  {
    slug: "gbu-schnittstelle-mehrere-gewerke-bauprojekt",
    title: "Gefährdungsbeurteilung bei Schnittstellen – mehrere Gewerke und Infrastruktur (SiGeKo Köln)",
    excerpt:
      "Übergeordnete Gefährdungsbeurteilung vs. Gewerke-Gefährdungsbeurteilung: Wie SiGeKo tätigkeitsbezogene Gefährdungsbeurteilungen bei komplexen Schnittstellen erstellt – anonymisiert aus einem Kölner Bauprojekt.",
    date: "2025-05-17",
    dateModified: "2026-05-26",
    content: [
      "Bei komplexen Umbauten reicht eine allgemeine Baustellen-Gefährdungsbeurteilung oft nicht aus. In einem Kölner Bauprojekt (mehrere Ebenen, Innenhof, Schnittstelle zu fremder Infrastruktur) wurde eine tätigkeitsbezogene Gefährdungsbeurteilung als SiGeKo-Zusatzleistung erstellt und fortgeschrieben – ergänzend zum SiGe-Plan, nicht als Ersatz.",
      "H2::Was gilt rechtlich?",
      "Abgrenzung der Ebenen: Die übergeordnete Gefährdungsbeurteilung des SiGeKo beschreibt bauvorhabenbezogene Querschnittsrisiken (Absturz, Staub, Lärm, Verkehr, Nachbarschaft, temporäre Elektro- und Kranzonen, Rauchen, Übergaben). Jeder ausführende Unternehmer bleibt für die Gefährdungsbeurteilung seiner Beschäftigten und seiner Tätigkeiten verantwortlich. Der SiGeKo koordiniert Schnittstellen – er übernimmt keine Unternehmerpflichten. Rechtliche Basis der Zusammenarbeit: [Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 ArbSchG].",
      "Fremdfirmen und Koordination: Bei Aufträgen an Fremdunternehmen können betriebsspezifische Gefahren neu entstehen – Absturz, Gefahrstoffe, Brand, innerbetrieblicher Verkehr. Auftraggeber unterstützen bei der Gefährdungsbeurteilung des Auftragnehmers: gemeinsame Begehung, gegenseitige Gefährdungen ermitteln, Schutzmaßnahmen abstimmen, bei besonderen Gefahren Aufsichtführende benennen.",
      "Inhaltliche Schwerpunkte der Projekt-Gefährdungsbeurteilung im Mandat: Arbeiten nahe öffentlicher Verkehrswege und fremder Leitungen, Abbruch und Demontage in mehreren Ebenen, gleichzeitige Gewerke im Innenhof, Staub- und Lärmexposition, Kran- und Anlieferlogistik, temporäre Verkehrswege. Für jedes Szenario wurden Gefährdung, Maßnahme, Verantwortlicher und Überprüfung festgehalten.",
      "Struktur einer brauchbaren Schnittstellen-Gefährdungsbeurteilung: Projektsteckbrief, Beteiligtenliste, Schnittstellenmatrix zwischen Gewerken und Infrastrukturbetreibern, phasenbezogene Risiken für Abbruch, Rohbau und Ausbau, Verweis auf SiGe-Plan und Begehungsberichte sowie Versionsnummer und Änderungslog.",
      "Ablauf im Mandat: Erstfassung der Szenarien mit Bauleitung, Abstimmung mit Fachfirmen für Abbruch, Gerüst und Rohbau, Fortschreibung nach Planungsänderungen. Eingereichte Gefährdungsbeurteilungen der Gewerke prüften wir auf Plausibilität und Widersprüche zum SiGe-Plan – die Antwort erfolgte schriftlich, nicht nur mündlich auf der Baustelle.",
      "H2::Umsetzung in der Praxis",
      "Feststellungen aus SiGeKo-Begehungen fließen in die Fortschreibung ein. Wiederkehrende Lücken beim Seitenschutz führen etwa zu Anpassungen im Maßnahmenkatalog für die Abbruchphase. So bleibt die Gefährdungsbeurteilung lebendig – keine Einmal-Excel-Datei.",
      "In der Praxis treten häufig folgende Fehler auf. Gefährdungsbeurteilung als Sammelordner für Sicherheitsdatenblätter. Keine Benennung gegenseitiger Gefährdungen. Keine Person für Abstimmung bei parallelen Arbeiten. SiGe-Plan und Gefährdungsbeurteilung widersprechen sich bei Verkehrsführung oder Rauchregeln.",
      "Bei größeren Projekten erwarten Berufsgenossenschaft und Behörde die Kette SiGe-Plan, Begehung, Gefährdungsbeurteilung und Umsetzungsnachweis. Lücken fallen bei Unfällen oder beim Anhalten der Baustelle auf.",
      "Eine erweiterte Gefährdungsbeurteilung ist oft Zusatzleistung zum SiGeKo-Standardpaket – im Vertrag vorab klären, vergleichbar mit [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Leistungsumfang Bestand].",
      "Health and Safety+ erstellt und koordiniert Gefährdungsbeurteilungen im Baustellenkontext in Köln und NRW. [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung], [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer macht GBU bei mehreren Gewerken?",
        answer:
          "Jeder Arbeitgeber für seine Beschäftigten – plus Koordination nach § 8 ArbSchG und SiGeKo nach BaustellV. SiGe-Plan verknüpft Schnittstellenrisiken.",
      },
      {
        question: "Was sind typische Schnittstellen?",
        answer:
          "Absturz beim Gewerkewechsel, gemeinsame Stromversorgung, Staub/Lärm für Nachbargewerke, Kranfahrten, Gefahrstoffe – schriftlich abstimmen.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Jede GBU nur intern, keine Information an Nachunternehmer, SiGe-Plan ohne Gewerke-Matrix, Leiharbeit ohne Entleiher-Unterweisung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/arbschg-mehrere-arbeitgeber-zusammenarbeit|§ 8 ArbSchG], [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV] und [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf].",
      },
    ],
  },
  {
    slug: "sigeko-projektverlauf-neubau-wohngebaeude-nrw",
    title: "SiGeKo-Projektverlauf Neubau – von Auftrag bis erste Begehung (Wohngebäude NRW)",
    excerpt:
      "SiGe-Plan, Baustellenordnung und Begehungsrhythmus: So strukturieren wir SiGeKo bei einem Neubau – anonymisiert aus einem Wohnbauprojekt in NRW.",
    date: "2025-05-20",
    dateModified: "2026-05-26",
    content: [
      "Ein Neubau-Wohngebäude in NRW zeigt den typischen SiGeKo-Ablauf von der Auftragserteilung bis zur laufenden Ausführungskoordination – dokumentiert in einem Projektverlauf mit Meilensteinen und Leistungsstatus, den Bauherren und Bauleitung als Steuerungsinstrument nutzen können.",
      "H2::Was gilt rechtlich?",
      "Projektdaten (anonymisiert): schriftliche Beauftragung, Pauschalhonorar für den vereinbarten Standardumfang, externe Bauleitung, Bauherr über Projektgesellschaft. Vertraglich vereinbart waren SiGe-Plan nach Baustellenverordnung, Baustellenordnung, ein definierter Begehungsrhythmus in der Ausführung (hier orientierend monatlich im Rohbau) sowie projektbezogene Einweisungen zu Schnittstellenrisiken.",
      "Phase Vorplanung: Abstimmung mit Planung zu Rettungswegen auf der Baustelle, Kranstellflächen, Zufahrten, temporärer Elektroversorgung, Sozial- und Sanitärräumen, Absturzsicherung in der Ausführungsplanung. Der SiGe-Plan durchläuft Entwurfsversionen und wird nach Freigabe durch Bauherr und Bauleitung als Version 1.0 veröffentlicht.",
      "Baustart in der Ausführung: SiGe-Plan und Ansprechpartner werden ausgehängt, die Baustellenordnung verteilt, die Erstbegehung mit Checkliste durchgeführt (Verkehrswege, Absturz, Lager, Elektro). Begehungsbericht Nummer 1 listet offene Punkte und Verantwortliche – das ist der Normalzustand, nicht der Endpunkt der SiGeKo-Leistung.",
      "Meilensteine nach Projektstart können sein: SiGe-Plan 1.0 veröffentlicht, Baustellenordnung freigegeben, Erstbegehung abgeschlossen, Unterweisung der Hauptgewerke dokumentiert, Übergabe von Rohbau zu Ausbau vorbereitet. Jeder Punkt erhält ein Datum im Projektverlauf – für Bauherr und Investor nachvollziehbar.",
      "H2::Umsetzung in der Praxis",
      "Was Bauherren daraus lernen: SiGeKo ist ein Prozess mit Versionierung – Plan 1.1 nach Kranumstellung, 1.2 nach Änderung der Gerüstführung. Wer nur die Rechnung für den Plan sieht, unterschätzt den laufenden Koordinationsaufwand.",
      "Hauptgewerke für Erdarbeiten, Rohbau, Gerüst und Ausbau sollten vor Baubeginn zum Kick-off eingeladen werden – das reduziert Parallelarbeiten ohne Absprache. Mehr dazu im [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber] unter Erfolgsfaktoren.",
      "Eine Pauschale deckt meist das Standardpaket ab. Mehrbegehungen, Sondertermine nach Unfällen, erweiterte Gefährdungsbeurteilungen oder die Prüfung vieler Gewerke-Gefährdungsbeurteilungen sind separat zu vereinbaren – vorab im Vertrag, siehe [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung].",
      "Parallel klären: [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Wann SiGeKo-Pflicht?] – auch beim Wohnneubau mit mehreren Gewerken.",
      "Health and Safety+ strukturiert Neubau- und Umbau-SiGeKo in Köln und NRW mit Projektverlauf und transparenten Meilensteinen. [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung], [Link: /wissen/blog/sigeko-koeln-kosten|Kosten Köln], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Braucht ein EFH-Neubau in NRW einen SiGeKo?",
        answer:
          "Ja, wenn mehrere Gewerke nacheinander oder gleichzeitig tätig sind – typisch ab zweitem Gewerk, unabhängig von Bausumme.",
      },
      {
        question: "Typischer Projektverlauf?",
        answer:
          "Planung: SiGe-Plan vor Baustart. Rohbau: Einweisungen, Begehungen Absturz. Ausbau: Übergabeprotokolle, Anpassung Plan. Abnahme: Unterlagen für Betrieb.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "SiGeKo erst ab Rohbau, Dachdecker nicht im Plan, keine Einweisung Elektro, fehlende Dokumentation Übergabe Rohbau/Innenausbau.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|SiGeKo-Pflicht], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar] und [Link: /wissen/blog/baustellv-vorankuendigung-sige-plan|Vorankündigung].",
      },
    ],
  },
  {
    slug: "sigeko-dacharbeiten-absturz-bestand-koeln",
    title: "SiGeKo bei Dacharbeiten im Bestand – Absturz, Feuerlöscher, Klimageräte (Köln)",
    excerpt:
      "Begehung und Besprechungsbericht zu Dach-/Klimawartung: ASR A2.1, ASR A2.2 und Vorbereitung der Gefährdungsbeurteilung – anonymisiert aus einem SiGeKo-Mandat in Köln.",
    date: "2025-05-21",
    dateModified: "2026-05-26",
    content: [
      "Nicht jede SiGeKo-Aufgabe ist Großbaustelle mit Abbruch. In einem Kölner Gewerbeobjekt ging es um SiGeKo-Begleitung bei Arbeiten im Bestand – Schwerpunkt Dachbereiche, Klimageräte auf dem Dach, Absturzgefahren und Erstausstattung mit Feuerlöschern entlang Fluchtwege im laufenden Betrieb.",
      "H2::Was gilt rechtlich?",
      "Ausgangslage: Wartung und Installation durch Fremdfirmen, Betrieb teilweise aktiv, mehrere Ebenen, Zugang über Dach und innen. Begehungs- und Besprechungsbericht bündelten Feststellungen für Bauherr/Facility und ausführende Unternehmen – ohne Mandatsdetails zu nennen.",
      "Absturz nach ASR A2.1: Gefahrenbereich an Dachkanten, Lichtkuppeln, Aufbauten – 2,0-m-Regel als Orientierung für Absturz in Tiefe, nicht als Ersatz für objektbezogene Gefährdungsbeurteilung. Maßnahmen: Seitenschutz, Netze, persönliche Schutzausrüstung gegen Absturz (PSAgA) nur nach Rangfolge und Unterweisung, gesicherte Zugänge.",
      "Verkehrswege auf Dächern: TRBS 2121 und Planung der Wartungswege – rutschhemmend, tragfähig, Abstand zu Kanten. SiGeKo prüft, ob temporäre Wege für Klimamontage ausreichend gesichert sind; die Ausführung verantwortet das Wartungsunternehmen.",
      "Feuerlöscher ASR A2.2: Bedarf und Standorte objektspezifisch (Fluchtwege, Technikzentralen, Dacharbeiten mit Zündgefahr). SiGeKo dokumentiert Empfehlungen für die betriebliche Gefährdungsbeurteilung/Facility – keine pauschale „ein Löscher pro Etage“-Formel.",
      "SiGeKo-Rolle im Bestand: Koordination und Dokumentation, Schnittstellen Facility ↔ Dachdecker ↔ Klima ↔ Betrieb, Vorbereitung übergeordneter Gefährdungsbeurteilung. Kein Ersatz für Prüfung der Klimaanlage, keine DGUV-Prüfung ortsveränderlicher Geräte durch den Koordinator.",
      "H2::Umsetzung in der Praxis",
      "Besonders gefährliche Arbeiten: Montage schwerer Klimageräte am Dachrand, Heißarbeiten in der Nähe von Dämmung, parallele Arbeiten unter dem Dach (Innenbereich). Abstimmung im SiGe-Plan oder Bestands-SiGe-Dokument mit Zeitfenstern.",
      "Typisches Muster: Kurze Einsätze, unklare Verantwortung für temporäre Absturzsicherung („nur zwei Stunden“). Schriftliche Freigabe und Nachweis der Sicherung vor Arbeitsbeginn – im Begehungsbericht festhalten.",
      "Verknüpfung Brandschutz Betrieb: Nach Abschluss der Dachmaßnahme bleibt [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz] relevant; SiGeKo endet mit der Baustellen-/Umbauphase, nicht mit der Eröffnung.",
      "Pflicht und Honorar: [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|SiGeKo-Pflicht], [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Leistungsumfang Bestand].",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Dacharbeiten im Bestand in Köln sind Absturzsicherung, Witterungsregeln und Schnittstelle Gerüst/Dach im SiGe-Plan vor Erstbetritt des Gewerks festzulegen – Anhang II Nr. 1 greift oft auch unter 7 m über Gerüstkante.",
      "Health and Safety+ koordiniert SiGeKo für Bestand und Neubau in Köln und NRW – [Link: /sigeko|Leistungen SiGeKo], [Link: /brandschutz|Brandschutz], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber SiGeKo]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Welche Risiken bei Dacharbeiten im Bestand?",
        answer:
          "Absturz, durchfallende Decken, Nachbarschaft, alte Statik, gleichzeitige Innenarbeiten – im SiGe-Plan mit Verantwortlichen und Maßnahmen.",
      },
      {
        question: "Anhang II bei Dach unter 7 m?",
        answer:
          "Nr. 1 formal ab 7 m – dennoch Absturzschutz nach ArbSchG/DGUV V38 und im SiGe-Plan abbilden, besonders an Dachkante und Lichtschacht.",
      },
      {
        question: "Typische Mängel in Köln?",
        answer:
          "Keine Fanglinie, Gerüstübergang undicht, Arbeit bei Sturm ohne Regel, Einweisung Dachdecker fehlt, Plan veraltet nach Kranumstellung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/baustellv-anhang-ii-gefaehrliche-arbeiten|Anhang II], [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch] und [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38].",
      },
    ],
  },
  {
    slug: "sigeko-innenausbau-bestand-leistungsumfang",
    title: "SiGeKo bei Innenausbau im Bestand – Leistungsumfang und Honorar (Praxis)",
    excerpt:
      "SiGe-Plan, Begehungen, Einweisungen bei Umbaumaßnahme: Was ein SiGeKo-Angebot für Bestandsprojekte enthalten sollte – anonymisiert aus einem Business-Umbau in Köln.",
    date: "2025-05-22",
    dateModified: "2026-05-26",
    content: [
      "Umbaumaßnahmen im Bestand – mehrere Gewerke, Betrieb in der Nähe oder teilweise weiter aktiv – lösen dieselbe SiGeKo-Pflicht aus wie Neubauten, sobald Beschäftigte mehrerer Arbeitgeber nacheinander oder gleichzeitig tätig werden. Ein anonymisiertes Angebot für einen Business-Umbau in Köln zeigt einen praxisnahen Leistungskatalog nach RAB 30.",
      "H2::Was gilt rechtlich?",
      "Leistungsblock Vorplanung und Koordination: Prüfung vorhandener Unterlagen wie Bestandspläne und Brandschutzkonzept, Abstimmung von Bauzeitenplan und Logistik, Erstellung des SiGe-Plans, Abstimmungstermine vor Ort oder remote, Abstimmung mit Facility und Betrieb zu Zugangszeiten und Sperrungen.",
      "Leistungsblock Ausführung: vereinbarte Anzahl Baustellenbegehungen, projektbezogene Einweisungen zu Schnittstellen, Fluchtwegen während des Umbaus, Staub und Lärm, Baustellenordnung, Aushang, Dokumentation offener Punkte, Nachverfolgung bis zur Wirksamkeitskontrolle.",
      "Oft als Zusatzleistung vereinbart: übergeordnete Gefährdungsbeurteilung für das Bauvorhaben, Prüfung eingereichter Gefährdungsbeurteilungen der Gewerke, Sonderbegehungen nach Unfall oder Behördenauflage, erweiterte Abstimmung mit Denkmalschutz oder Mietern, Dach- und Sonderarbeiten wie in [Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|Dacharbeiten Bestand].",
      "Honorar richtet sich nicht nach Euro pro Quadratmeter Umbau, sondern nach Schnittstellenanzahl, Betriebszeiten (nur nachts?), Zugangsbeschränkungen, parallelen Gewerken und Anteil besonders gefährlicher Arbeiten. Ein transparentes Leistungsverzeichnis mit Einheitspreisen oder Pauschalen pro Block erleichtert Vergleiche.",
      "H2::Umsetzung in der Praxis",
      "Im SiGe-Plan für Bestand gehören unter anderem: temporäre Verkehrsführung, Absperrung von Fluchtwegen mit Ersatzwegen, Staubschutz, Lärmfenster, Koexistenz mit laufendem Betrieb, Rückbau temporärer Einrichtungen nach Projektende. Facility muss Freigaben schriftlich geben können.",
      "In Köln treiben Innenstadtlage, Anlieferung, Nachbarschaft, geteilte Zufahrten und gleichzeitige Mieterarbeiten den Aufwand häufig in die Höhe. Das gehört ins Angebot – nicht unangekündigt auf die Schlussrechnung.",
      "Tipp für Bauherren: Gewerkeübersicht und Bauzeitenplan vor der Angebotsanfrage bereitstellen. Dann kann der SiGeKo realistisch Begehungszahl und Planungsaufwand kalkulieren. Späte Beauftragung verteuert fast immer.",
      "Abgrenzung: Der SiGeKo koordiniert nur die Baustellen- bzw. Umbauschnittstelle. Für den laufenden Betrieb danach gelten [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz] und [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz].",
      "H2::Typische Mängel und Vorbereitung",
      "Beim Innenausbau im Bestand sollten Staub, Lärm, Heißarbeit und gemeinsame Fluchtwege mit laufendem Betrieb im SiGe-Plan stehen – vor Beginn des ersten Gewerks einweisen und dokumentieren.",
      "Health and Safety+ erstellt vergleichbare Angebote für Köln und NRW. [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/rechner|Honorar-Rechner], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung], [Link: /wissen/blog/sigeko-koeln-kosten|Kosten Köln], [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was umfasst SiGeKo-Leistung beim Innenausbau?",
        answer:
          "SiGe-Plan, Einweisungen aller Gewerke, Begehungen, Koordination bei Lageänderung, Übergabeprotokolle, Fortschreibung bei neuen Subunternehmern.",
      },
      {
        question: "Besonderheiten Bestand?",
        answer:
          "Laufender Betrieb, Asbest/Altlasten prüfen, Staubschutz, Brandschutz temporärer Trennwände, gemeinsame Rettungswege mit Nutzern.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Honorar nur Planung ohne Ausführung, keine Begehungen, Lösemittel ohne Lüftungskonzept (Anhang II Nr. 2), fehlende Abstimmung Facility.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar], [Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU-Schnittstellen] und [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber].",
      },
    ],
  },
  {
    slug: "sigeko-koeln-kosten",
    title: "SiGeKo in Köln – Honorare, Kostenfaktoren und Leistungsumfang",
    excerpt:
      "Was kostet SiGeKo in Köln und NRW? Honorarmodelle, Einflussfaktoren und typische Projektgrößen – ohne vertrauliche Einzeldaten.",
    date: "2025-05-23",
    dateModified: "2026-05-26",
    content: [
      "SiGeKo-Leistungen sind nicht wie Standard-LVs austauschbar – der Aufwand hängt von Komplexität, Risiko, Gewerkeanzahl und urbanem Umfeld ab. Bauherren in Köln sollten früh Budget für Vorplanung und Ausführungskoordination einplanen, sobald klar ist, dass mehrere Gewerke auf der Baustelle zusammenarbeiten.",
      "H2::Was gilt rechtlich?",
      "Übliche Honorarmodelle sind Pauschalen pro Phase für Vorplanung und Ausführung, Monatspauschalen bei langen Dauerbaustellen, Stundensätze mit Obergrenze oder Pakete für kleinere Neubauten. Entscheidend ist das Leistungsverzeichnis: SiGe-Plan, Anzahl Begehungen, Einweisungen, Dokumentation, Reaktionszeiten bei akuten Mängeln.",
      "In Köln treiben enge Grundstücke, Fußgänger- und Radverkehr, gleichzeitige Baustellen in der Straße, Abbruch in bewohntem Umfeld, Logistik über Hof oder Krane sowie Nachbarschaftsbeschwerden wegen Lärm und Staub den Aufwand für Abstimmung und Begehungen.",
      "Allgemeine Einflussfaktoren: Anzahl gleichzeitiger Gewerke, Anteil besonders gefährlicher Arbeiten, Tiefgeschoss und Tiefbau, Kran- und Großgerätebetrieb, Zusatz-Gefährdungsbeurteilung, Prüfung vieler Gewerke-Gefährdungsbeurteilungen, Sonderbegehungen nach Unfall oder Behörde, Bestand mit laufendem Betrieb.",
      "Orientierungswerte (generisch, nicht mandatsbezogen): Kleinere Neubauten in NRW liegen für ein Standardpaket häufig im mittleren vierstelligen Nettobereich; innerstädtischer Umbau mit Abbruch und Zusatz-Gefährdungsbeurteilung ist deutlich höher. Eine reine Plan-Pauschale ohne Ausführungskoordination liegt oft unter dem, was Baustellenverordnung und Praxis erwarten.",
      "H2::Umsetzung in der Praxis",
      "Beim Vergleich von Angeboten sollten Begehungszahl, Plan-Versionen, Regelung für Mehrleistungen und Qualifikationsnachweis des SiGeKo (RAB 30) gleich sein. Der günstigste Preis ohne Ausführungsphase ist selten der günstigste Gesamtprojektpreis.",
      "Dokumentierte Begehungen und nachvollziehbare Maßnahmenketten reduzieren Stillstand, Anhalten durch die Berufsgenossenschaft und Gewerkestreit – besonders bei Absturz und Abbruch, siehe [Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Begehung Abbruch].",
      "Leistungsumfang transparent erklärt: [Link: /wissen/blog/sigeko-innenausbau-bestand-leistungsumfang|Innenausbau-Katalog], [Link: /wissen/blog/sigeko-projektverlauf-neubau-wohngebaeude-nrw|Projektverlauf Neubau]. Pflicht vor der Kostenfrage: [Link: /wissen/blog/sigeko-pflicht-wann-braucht-man-sigeko|Wann SiGeKo?], Überblick [Link: /wissen/ratgeber/sigeko-baustelle|Ratgeber].",
      "H2::Typische Mängel und Vorbereitung",
      "Für ein vergleichbares SiGeKo-Angebot in Köln sollten Bauzeit, Gewerkeanzahl, Anhang-II-Anteil und Begehungsrhythmus schriftlich beschrieben sein – innerstädtische Logistik und Abbruchphasen gehören in die Kalkulation, nicht auf die Schlussrechnung.",
      "Health and Safety+ erstellt SiGeKo-Angebote für Köln und NRW auf Basis von Leistungsverzeichnis und Risikoprofil – nicht pauschal pro Quadratmeter. [Link: /sigeko|Leistungen SiGeKo], [Link: /wissen/rechner|Honorar-Rechner], [Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung]. [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was treibt SiGeKo-Kosten in Köln?",
        answer:
          "Enge Grundstücke, Abbruch, parallele Gewerke, lange Bauzeit, Anhang-II-Arbeiten, häufige Begehungen und Nachbarschaftsabstimmung – deutlich mehr Aufwand als EFH-Neubau am Stadtrand.",
      },
      {
        question: "Welche Vertragsmodelle?",
        answer:
          "Pauschale je Phase, Monatspauschale bei Dauerbaustelle, Stundensätze mit Obergrenze – verbindliche Mengen für Begehungen und Einweisungen festhalten.",
      },
      {
        question: "Typische Kostfallen?",
        answer:
          "Angebot nur SiGe-Plan, keine Ausführungsphase, Mehrleistungen ungeregelt, zu wenig eingeplante Begehungen bei wechselnden Subunternehmern.",
      },
      {
        question: "Wo Orientierung?",
        answer:
          "[Link: /wissen/blog/sigeko-kosten-honorar-orientierung|Honorar-Orientierung], [Link: /wissen/rechner|Rechner] und [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub].",
      },
    ],
  },
  {
    slug: "bauordnung-nrw-einfach-erklaert",
    title: "Bauordnung NRW einfach erklärt – Regeln fürs Bauen in Nordrhein-Westfalen",
    excerpt:
      "BauO NRW 2018 verständlich: Baugenehmigung, verfahrensfreie Vorhaben (§ 62), Abstandsflächen (§ 6), Brandschutz, Solarpflicht (§ 42a), Begrünung (§ 8) und Barrierefreiheit (§ 49) – für Bauherren, Eigentümer und Handwerker in NRW.",
    date: "2025-05-27",
    dateModified: "2026-05-26",
    content: [
      "Wer in Nordrhein-Westfalen bauen, umbauen oder die Nutzung ändern will, stößt auf die Bauordnung für das Land Nordrhein-Westfalen (Landesbauordnung 2018 – BauO NRW 2018). Sie gilt für bauliche Anlagen, Bauprodukte und – wo das Gesetz es vorsieht – auch für Grundstücke und weitere Einrichtungen. In diesem Beitrag ordnen wir die wichtigsten Pflichten verständlich ein – mit Paragraphenbezug, ohne Juristenlatein. Vertiefung zum Brandschutz: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Was gilt rechtlich?",
      "Grundlage ist § 3 BauO NRW: Anlagen müssen so angeordnet, errichtet, geändert und instand gehalten werden, dass die öffentliche Sicherheit und Ordnung – insbesondere Leben, Gesundheit und natürliche Lebensgrundlagen – nicht gefährdet werden. Das gilt auch bei Nutzungsänderung und Beseitigung. Konkret werden die Anforderungen in den folgenden Abschnitten der BauO geregelt – von Grundstück und Abstand über Standsicherheit und Brandschutz bis zu Genehmigungsverfahren und Beteiligtenpflichten.",
      "Genehmigungspflicht – der Normalfall: Nach § 60 BauO NRW bedürfen Errichtung, Änderung, Nutzungsänderung und Beseitigung von Anlagen grundsätzlich der Baugenehmigung – außer, §§ 61 bis 63, 78 oder 79 sehen etwas anderes vor. Wichtig: Auch ohne Genehmigungsverfahren gelten alle bauordnungsrechtlichen Anforderungen; Genehmigungsfreiheit entbindet nicht von Vorschriften und lässt bauaufsichtliche Eingriffe unberührt.",
      "Verfahrensfrei nach § 62 – nicht mit „genehmigungsfrei“ verwechseln: Eine Liste konkreter Bauvorhaben ist verfahrensfrei, darunter unter anderem Garagen und überdachte Stellplätze bis 30 m² Brutto-Grundfläche und bis 3 m mittlerer Wandhöhe (nicht im Außenbereich), Terrassenüberdachungen bis 30 m² und 4,50 m Tiefe, Balkonverglasungen und -überdachungen bis 30 m², Wintergärten bis 30 m² Brutto-Grundfläche bei Gebäudeklassen 1 bis 3 mit mindestens 3 m Abstand zur Nachbargrenze, Solaranlagen in, an und auf Dach- und Außenwandflächen (mit Ausnahmen bei Hochhäusern) sowie Photovoltaikanlagen und Wärmepumpen in bestimmten Konstellationen. Jedes Vorhaben ist einzelfallbezogen zu prüfen – Größe, Lage, Baugebiet und Nachbarabstand entscheiden.",
      "Genehmigungsfreistellung (§ 63) und vereinfachtes Verfahren (§ 64): Unter Voraussetzungen – etwa im Geltungsbereich eines Bebauungsplans, ohne Abweichungsbedarf und bei gesicherter Erschließung – kann ein Vorhaben genehmigungsfrei gestellt sein oder im vereinfachten Baugenehmigungsverfahren laufen. Die Gemeinde kann innerhalb einer Frist das volle Verfahren verlangen. Für größere oder komplexe Vorhaben gilt in der Regel das reguläre Baugenehmigungsverfahren (§ 65) mit Bauantrag, Bauvorlagen und ggf. brandschutztechnischen Nachweisen – siehe [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept erstellen].",
      "Abstandsflächen (§ 6) – häufige Konfliktquelle: Vor Außenwänden sind Abstandsflächen freizuhalten. Maßgeblich ist die Tiefe in Abhängigkeit von der Wandhöhe (Gebäudehöhe): grundsätzlich 0,4 H, mindestens 3 m. In Gewerbe- und Industriegebieten genügt 0,2 H (mindestens 3 m), in Kerngebieten 0,25 H (mindestens 3 m). Zu öffentlichen Verkehrs-, Grün- und Wasserflächen gelten in Kern- und urbanen Gebieten 0,2 H, mindestens 3 m. Bei Wohngebäuden der Gebäudeklassen 1 und 2 mit höchstens drei oberirdischen Geschossen genügen vor den Außenwänden 3 m. Städtebauliche Satzungen oder Satzungen nach § 89 können abweichende Abstände vorschreiben oder zulassen. Fehler bei Abstandsflächen führen zu Nachbarschaftskonflikten, Baustopp (§ 81) oder Rückbauauflagen.",
      "Brandschutz und Rettung (§ 14, §§ 33 ff.): § 14 verlangt, dass Brandentstehung und Brandausbreitung vorgebeugt wird und im Brandfall Rettung von Menschen und Tieren sowie wirksame Löscharbeiten möglich sind – einschließlich ausreichender Wassermenge zur Brandbekämpfung. Dazu gehören Feuerwiderstand von Bauteilen, Brandabschnitte, Rettungswege (§ 33), notwendige Treppen und Flure (§§ 34–36) sowie – je nach Gebäudeklasse – technische Anlagen. Das ist bauordnungsrechtlich; im laufenden Betrieb kommt [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz] hinzu.",
      "H2::Umsetzung in der Praxis",
      "Rauchwarnmelder (§ 47 Abs. 2): In Wohnungen müssen Schlafräume, Kinderzimmer und Flure, über die Rettungswege von Aufenthaltsräumen führen, jeweils mindestens einen Rauchwarnmelder haben – frühzeitige Raucherkennung vorausgesetzt. Die Betriebsbereitschaft sichert die unmittelbar besitzhabende Person, sofern nicht der Eigentümer die Pflicht übernimmt. Das ist unabhängig vom Neubau- oder Bestandsfall eine zentrale Wohnungsanforderung.",
      "Begrünung und Entsiegelung (§ 8): Nicht überbaute Flächen bebauter Grundstücke sind als Grünflächen wasseraufnahmefähig zu belassen oder herzustellen und zu begrünen oder zu bepflanzen – soweit sie nicht anderweitig benötigt werden. Schotterungen zur Gestaltung von Grünflächen und Kunstrasen gelten nicht als andere zulässige Verwendung. Ist Begrünung auf dem Grundstück nicht oder nur eingeschränkt möglich, sollen bauliche Anlagen begrünt werden, soweit technisch und wirtschaftlich zumutbar. Bei mehr als drei Wohnungen kann ein Kleinkinderspielplatz erforderlich sein.",
      "Solarpflicht (§ 42a): Bei Neubauten sind auf geeigneten Dachflächen Anlagen zur Stromerzeugung aus solarer Strahlungsenergie zu installieren und zu betreiben – für Nichtwohngebäude ab Bauantrag nach 1. Januar 2024, für Wohngebäude ab 1. Januar 2025 (jeweils auch bei genehmigungsfreigestellten Vorhaben mit Baubeginn nach diesen Stichtagen). Bei vollständiger Dachhaut-Erneuerung ab 1. Januar 2026 gilt die Pflicht ebenfalls. Ausnahmen und Befreiungen sind im Gesetz und in Rechtsverordnungen geregelt (z. B. Nutzfläche bis 50 m², Behelfsbauten, wirtschaftliche Unzumutbarkeit).",
      "Barrierefreies Bauen (§ 49): In Gebäuden der Gebäudeklassen 3 bis 5 mit Wohnungen müssen die Wohnungen barrierefrei sein. Öffentlich zugängliche bauliche Anlagen – etwa Kultur-, Bildungs-, Sport-, Gesundheits-, Büro-, Verkaufs- und Gaststätten sowie Stellplätze und Toiletten – müssen barrierefrei sein; Besucher-Toiletten und Stellplätze in erforderlicher Anzahl ebenfalls. Ausnahmen sind bei unverhältnismäßigem Mehraufwand durch Gelände oder Bestandsbebauung möglich.",
      "Verantwortung am Bau (§§ 52–56): Grundpflichten trifft alle Beteiligten. Die Bauherrschaft organisiert das Vorhaben und ist gegenüber der Bauaufsicht verantwortlich. Entwurfsverfassende erstellen die Planung, Unternehmen führen aus, Bauleitende koordinieren vor Ort. Verfahrensfreie Vorhaben erfordern ein sichtbares Baustellenschild mit Bauvorhaben und Ansprechpartnern (§ 11). SiGeKo-Pflicht auf Baustellen mit mehreren Arbeitgebern ergänzt das Bild – [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo auf der Baustelle].",
      "Fazit: Früh klären, ob Ihr Vorhaben genehmigungspflichtig, verfahrensfrei oder genehmigungsfreigestellt ist; Abstandsflächen, Brandschutz, Solarpflicht und Begrünung parallel mitplanen – nicht erst nach dem Rohbau. So vermeiden Sie teure Korrekturen, Nachbarschaftsstreit und Verzögerungen beim Bauamt.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Genehmigung oder Nutzungsänderung sollten Bauherr und Planer klären, welche brandschutzrechtlichen Anforderungen der BauO NRW für das Vorhaben gelten und ob Sonderbauvorschriften greifen – nicht erst bei der Bauaufsicht.",
      "Sie planen ein Bauprojekt in NRW und möchten auf Nummer sicher gehen? H&S+ unterstützt Sie bei brandschutztechnischer Planung, Genehmigungsunterlagen und Schnittstellen zu Arbeitsschutz und SiGeKo – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt die BauO NRW?",
        answer:
          "Landesbauordnung für bauliche Anlagen: Genehmigung, Nutzung, Abstandsflächen, brandschutztechnische Anforderungen, Sonderbauten – Grundlage für Brandschutznachweis.",
      },
      {
        question: "Zusammenhang mit betrieblichem Brandschutz?",
        answer:
          "BauO = Planung/Genehmigung. Nach Eröffnung: [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|betrieblicher Brandschutz] nach ArbStättV – beide Ebenen abstimmen.",
      },
      {
        question: "Typische Fehler?",
        answer:
          "Nutzerwechsel ohne brandschutztechnische Prüfung, Umbau ohne Genehmigung, Konzept und IST-Betrieb widersprechen sich.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO Brandschutz], [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept] und [Link: /wissen/blog/sonderbauverordnung-teil-7-schlussvorschriften|SBauVO].",
      },
    ],
  },
  // SBauV-Serie: wöchentlich dienstags ab 2025-06-03 (Teil N → +7×(N−1) Tage)
  {
    slug: "sonderbauverordnung-teil-1-versammlungsstaetten",
    title: "Sonderbauverordnung NRW – Teil 1 Versammlungsstätten einfach erklärt",
    excerpt:
      "SBauV Teil 1 (§§ 1–46): Anwendungsbereich ab 200 Besuchern, Bauteile, Rettungswege, Großbühnen, Betrieb, Brandschutzordnung und Gastspielprüfbuch – verständlich für Betreiber, Veranstalter und Planer in NRW.",
    date: "2025-06-03",
    dateModified: "2026-05-26",
    content: [
      "Theater, Konzerte, Messen, Sportevents oder große Gastronomie: Sobald viele Menschen gleichzeitig zusammenkommen, greift in NRW nicht nur die [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW 2018], sondern oft die Sonderbauverordnung NRW (SBauV). Teil 1 regelt Versammlungsstätten in sechs Kapiteln mit 46 Paragraphen – von Anwendungsbereich über Bau- bis Betriebsvorschriften. Dieser Beitrag ordnet Teil 1 verständlich ein; Vertiefung im Pillar: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz]. Weitere SBauV-Teile (Beherbergung, Verkauf, Hochhaus …) behandeln wir in separaten Artikeln.",
      "H2::Was gilt rechtlich?",
      "Nach § 1 SBauV gilt Teil 1, wenn Die Vorschriften gelten für den Bau und Betrieb von Versammlungsstätten mit Versammlungsräumen, die einzeln für mehr als 200 Besucherinnen und Besucher bestimmt sind. Gleiches gilt, wenn mehrere Versammlungsräume gemeinsame Rettungswege haben und insgesamt mehr als 200 Personen fassen. Im Freien greift Teil 1 bei Szenenflächen und Tribünen (keine Fliegenden Bauten) mit Besucherbereich über 1.000 Personen, bei Freiveranstaltungen über 5.000 Personen sowie bei Sportstadien und Freisportanlagen mit Tribünen über 5.000 Personen. Unterhalb dieser Grenzen kann Teil 1 entfallen – die BauO NRW und ggf. Andere Vorschriften gelten dennoch.",
      "Nach § 1 Abs. 2 SBauV ermittelt man die Besucherzahl bei fehlenden Bauvorlagen pauschal wie folgt. Stehen keine Bauvorlagen zur Verfügung, rechnet man pauschal – Sitzplätze an Tischen ArbSchG gilt Folgendes. 1 Person je m² Grundfläche. Reihenbestuhlung ArbSchG gilt Folgendes. 2 Personen je m². Stehplätze auf Stufenreihen: 2 Personen je laufendem Meter. Ausstellungsräume: 1 Person je m², sonstige Stehplätze mindestens 2 Personen je m². Nicht zugängliche Flächen zählen nicht. Für Freianlagen und Stadien gelten die Regeln entsprechend.",
      "Ausnahmen und BauO-Bezug: Teil 1 gilt nicht für Gottesdiensträume, Unterrichtsräume in Schulen, Ausstellungsräume in Museen und Fliegende Bauten. Anforderungen an veränderbare Einbauten gelten nicht für Ausstellungsstände. Wo Teil 1 schweigt, gelten für tragende, aussteifende und raumabschließende Bauteile die Anforderungen der BauO NRW an Gebäude der Gebäudeklasse 5 – Erleichterungen aus §§ 30, 31, 36, 39–41 BauO NRW sind ausgeschlossen. Das verschärft Brandschutz und Standsicherheit gegenüber „normalem“ Gewerbebau.",
      "Nach § 2 SBauV sind folgende Begriffe Grundlage für Planung und Genehmigung. Versammlungsstätten sind bauliche Anlagen für gleichzeitige Massenanwesenheit bei Veranstaltungen (kulturell, sportlich, politisch …) sowie Schank- und Speisewirtschaften. Versammlungsräume umfassen auch Aulen, Foyers, Hörsäle und Studios. Szenenflächen unter 20 m² zählen nicht. Mit Bühnenhaus gilt Folgendes. Zuschauerhaus (Publikum), Bühnenhaus (Bühne und Nebenräume), Bühnenöffnung, Haupt- und Nebenbühnen. Eine Großbühne liegt vor bei Szenenfläche hinter der Bühnenöffnung über 200 m², Oberbühne mit mehr als 2,5 m lichte Höhe über der Bühnenöffnung oder bei vorhandener Unterbühne – dafür gelten verschärfte Regeln in Kapitel 3.",
      "In Kapitel 2, Abschnitt 1 (§§ 3–5) der SBauV sind folgende Bauvorschriften geregelt. Tragende Bauteile müssen feuerbeständig sein (in erdgeschossigen Versammlungsstätten mit ebenerdigen Rettungswegen teils feuerhemmend. Mit Sprinkleranlage gelten Erleichterungen). Außenwände aus nichtbrennbaren Profilen. Trennwände zu Versammlungsräumen und Bühnen feuerbeständig. Dächer, Dämmstoffe, Bekleidungen und Bodenbeläge sind nach Brandverhalten gestaffelt – in Versammlungsräumen überwiegend nichtbrennbar oder schwerentflammbar. In Rettungswegen (notwendige Flure, Treppen) verschärft.",
      "Rettungswege (§§ 6–9): Jede Etage mit Aufenthaltsräumen braucht mindestens zwei unabhängige bauliche Rettungswege ins Freie. Räume über 100 Besucher oder 100 m² brauchen zwei entgegengesetzte Ausgänge. Geschosse mit mehr als 800 Besucherplätzen: nur geschossbezogene Rettungswege. Weg vom Sitzplatz zum Ausgang max. 30 m (60 m unter Bedingungen); Rettungswegbreite mindestens 1,20 m (0,90 m bei ≤200 Plätzen, 0,80 m an Arbeitsgalerien). Türen in Rettungswegen: in Fluchtrichtung aufschlagend, ohne Schwelle, jederzeit von innen öffenbar; Schiebetüren und Drehkreuze grundsätzlich unzulässig (Ausnahmen für automatische Schiebetüren bzw. Gefahrenfall-Öffnung).",
      "Besucherplätze und Barrierefreiheit (§§ 10–13): Reihenbestuhlung fest verankert (Ausnahmen Gastronomie, kleine Logen). Tribünen über 5.000 Plätze: feste Einzelsitze, Gängebreiten, Blockbildung. Mindestens 1 Prozent rollstuhlgerechte Plätze (mind. Zwei). Toiletten in ausreichender Zahl inkl. Barrierefreier Ausstattung. Der genehmigte Bestuhlungs- und Rettungswegeplan (§ 32) ist im Betrieb verbindlich – Plätze dürfen nicht überschritten oder umgestellt werden.",
      "H2::Umsetzung in der Praxis",
      "Technische Anlagen (§§ 14–21): Sicherheitsstromversorgung für Sicherheitsbeleuchtung, Sprinkler, BMA, Rauchabzug und Gebäudefunk. Blitzschutz innen und außen. Sicherheitsbeleuchtung in Rettungswegen, Versammlungsräumen, Bühnen und relevanten Nebenräumen – in verdunkelten Räumen Bereitschaftsschaltung. Räume über 200 m²: Lüftungsanlage. Ab 1.000 m² Versammlungsfläche gesamt: Brandmelde- und Alarmierungsanlage, Brandmelderzentrale, Brandfallsteuerung der Aufzüge (§ 20). Feuerlöscher überall. Ab 1.000 m² Wandhydranten. Ab 3.600 m² selbsttätige Löschanlage (Ausnahmen für kleine Einzelräume). Kellerräume und Küchen über 30 m²: eigene Sprinklerpflichten. Werkstätten und Magazine für feuergefährliche Arbeiten und brennbares Material sind Pflicht.",
      "Kapitel 3 – Besondere Bauvorschriften: Großbühnen (§§ 22–25) brauchen separates Bühnenhaus (Brandwand zum Zuschauerhaus), Schutzvorhang (nichtbrennbar, Schließzeit max. 30 s), Sprinkler auf Bühne und Vorhang, Wandhydranten, BMA und Platz für die Brandsicherheitswache an der Bühnenöffnung. Versammlungsstätten über 5.000 Plätze (§§ 26–29): Räume für Lautsprecherzentrale, Polizei, Feuerwehr, Rettung. Blockbildung in Stadien über 10.000 Plätze. Wellenbrecher bei Stehplatzstufen. Abschrankungen vor Szenenflächen.",
      "Kapitel 4 – Betriebsvorschriften (§§ 31–42): Rettungswege, Zufahrten und Feuerwehrflächen ständig freihalten – Hinweisschilder Pflicht. Während des Betriebs Rettungswegtüren unverschlossen. Brandverhütung: schwerentflammbare Vorhänge und Ausstattungen. Pyrotechnik und offenes Feuer nur nach Abstimmung mit der Brandschutzdienststelle (§ 35). Betreiber oder Veranstaltungsleiter müssen ständig anwesend sein. Bei Störung sicherheitsrelevanter Anlagen ist Betrieb einzustellen (§ 38). Brandsicherheitswache bei Großbühnen und erhöhter Brandgefahr (§ 41). Anzeige bei über 5.000 Besuchern an Rettungsdienst.",
      "Brandschutzordnung und Unterweisung (§ 42): Betreiber erstellen im Einvernehmen mit der Brandschutzdienststelle Brandschutzordnung und ggf. Räumungskonzept (ab 1.000 Besuchern gesondert, sofern nicht im Sicherheitskonzept). Feuerwehrpläne für die örtliche Feuerwehr. Betriebspersonal: jährliche Unterweisung zu Löschanlagen, BMA, Räumung – Niederschrift auf Verlangen der Bauaufsicht. Schnittstelle zum [Link: /wissen/blog/brandschutzordnung-din-14096|betrieblichen Brandschutz (BSO)] und [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept] im Genehmigungsverfahren.",
      "Gastspielprüfbuch (Kapitel 5, § 44): Gastspielveranstaltungen in fremden Versammlungsstätten erfordern ein Prüfbuch mit Nachweisen zu baulichen und betrieblichen Vorschriften – vor der ersten Vorstellung vorzulegen. Bei Fliegenden Bauten ist es mit der Anzeige der Aufstellung zu verbinden. Das ergänzt die Genehmigung der Stammstätte um die konkrete Produktion.",
      "Bestehende Versammlungsstätten (§ 45): Anlagen, die beim Inkrafttreten bereits bestanden, unterliegen Übergangsfristen – für Objekte über 5.000 Plätze sind u. A. Kennzeichnung, Sitzplätze, Lautsprecheranlage, Polizeiraum, Abschrankungen und Wellenbrecher innerhalb von zwei Jahren nachzurüsten; Betriebsvorschriften Kapitel 4 gelten entsprechend. Wer Bestand umbaut oder Nutzung ändert, sollte früh klären, welche Neufassung der SBauV greift.",
      "Ordnungswidrigkeiten (§ 46): Verstöße – etwa blockierte Rettungswege, verschlossene Fluchttüren, überschrittene Besucherzahlen, unzulässige brennbare Ausstattungen – können nach § 86 Abs. 1 Nr. 20 BauO NRW geahndet werden. Im Genehmigungsverfahren ist ein [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis] und oft ein Prüfingenieur Brandschutz erforderlich; im laufenden Betrieb koordinieren [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] organisatorische Maßnahmen.",
      "H2::Typische Mängel und Checkliste",
      "Vor einer Begehung sollte geklärt sein, ob Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Praxis Köln/NRW: Frühzeitig klären, ob Ihr Objekt unter § 1 SBauV fällt; Besucherzahl, Rettungswege und technische Anlagen parallel planen – nicht erst nach Bestuhlung. H&S+ unterstützt bei brandschutztechnischer Planung, Stellungnahmen, Betriebskonzepten und Schnittstellen zur Bauaufsicht – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab wann ist eine Versammlungsstätte nach SBauV Teil 1 ein Sonderbau?",
        answer:
          "In der Regel ab mehr als 200 Besuchern in einem Versammlungsraum – oder bei mehreren Räumen mit gemeinsamen Rettungswegen insgesamt über 200. Im Freien gelten höhere Schwellen (1.000 bzw. 5.000 Besucher, Sportstadien über 5.000). Kirchenräume, Schulunterricht, Museumsausstellungen und Fliegende Bauten sind ausgenommen.",
      },
      {
        question: "Was ist der Unterschied zwischen BauO NRW und SBauV Teil 1?",
        answer:
          "Die BauO NRW regelt das Bauen allgemein. Wo Teil 1 der SBauV greift, setzt sie verschärfte und spezifische Anforderungen für Versammlungsstätten – z. B. Rettungswegbreiten, Schutzvorhang, Bestuhlungsplan, Betriebspflichten. Wo Teil 1 schweigt, gelten für tragende und raumabschließende Bauteile die Anforderungen der Gebäudeklasse 5 nach BauO NRW.",
      },
      {
        question: "Brauche ich für jede Veranstaltung eine Brandsicherheitswache?",
        answer:
          "Nicht immer. Pflichtig ist sie bei Veranstaltungen mit erhöhter Brandgefahr, auf Großbühnen und bei Szenenflächen über 200 m² (Feuerwehr oder bestätigte eigene Kräfte). Darüber hinaus verlangen Brandschutzordnung, Genehmigung oder Sicherheitskonzept oft organisatorische Maßnahmen – ab 5.000 Besuchern ist zudem Anzeige an Rettungsdienst nötig.",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-2-beherbergungsstaetten",
    title: "Sonderbauverordnung NRW – Teil 2 Beherbergungsstätten einfach erklärt",
    excerpt:
      "SBauV Teil 2 (§§ 47–59): Hotels, Pensionen und Gästehäuser ab 13 Gastbetten – Rettungswege, Bauteile, Rauchwarnmelder, BMA, Barrierefreiheit und Betrieb in NRW verständlich erklärt.",
    date: "2025-06-10",
    dateModified: "2026-05-26",
    content: [
      "Hotels, Pensionen, Gästehäuser und größere Unterkünfte: Wer Gäste beherbergt, stößt in NRW neben der [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW 2018] auf die Sonderbauverordnung (SBauV). Teil 2 regelt Beherbergungsstätten in den §§ 47 bis 59 – von der Frage „Ab wann gilt das?“ über baulichen Brandschutz bis zu Rauchwarnmeldern, Brandmeldeanlagen und Betriebspflichten. Ergänzend: [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|Teil 1 Versammlungsstätten], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Wann gilt Teil 2?",
      "Die Vorschriften des Teils 2 gelten für Beherbergungsstätten mit mehr als zwölf Gastbetten – ab dem 13. Bett ist die SBauV in der Regel maßgeblich (§ 47 SBauV). Wichtig: § 55 Abs. 2 verlangt Rauchwarnmelder in jedem Beherbergungsraum für alle Beherbergungsstätten – also auch in kleineren Häusern mit höchstens zwölf Betten. Ferienwohnungen im Sinne der Definition fallen nicht unter Teil 2.",
      "Beherbergungsstätten sind Gebäude oder Gebäudeteile für die Beherbergung von Gästen. Beherbergungsräume dienen dem Wohnen oder Schlafen; Gasträume wie Speisesäle oder Tagungsräume zählen als Aufenthalts-, nicht als Schlafräume (§ 48). Wo Teil 2 nichts Abweichendes regelt, gelten die Anforderungen der BauO NRW – Erleichterungen für Gebäudeklassen 1 und 2 sowie für Nutzungseinheiten bis 400 m² innerhalb derselben Einheit sind ausgeschlossen.",
      "H2::Rettungswege und baulicher Brandschutz",
      "Jeder Beherbergungsraum braucht mindestens zwei voneinander unabhängige Rettungswege (§ 49). Innerhalb eines Geschosses dürfen beide über denselben notwendigen Flur führen. Liegt der Raum nicht ebenerdig, muss der erste Weg über eine notwendige Treppe führen; der zweite über eine weitere Treppe oder Außentreppe. Bei insgesamt höchstens 60 Gastbetten kann als zweiter Weg eine mit Feuerwehr-Rettungsgeräten erreichbare Stelle am Raum genügen – nicht aber, wenn in einem Obergeschoss allein mehr als 30 Betten liegen. An Flurabzweigungen, Treppenzugängen und Ausgängen sind beleuchtete Sicherheitszeichen vorgeschrieben.",
      "Tragende Wände, Stützen und Decken müssen feuerbeständig sein – mit Erleichterungen in Dachgeschossen ohne Beherbergungsräume und bei kleineren Häusern (§§ 50–51). Trennwände zur Nachbarschaft, zu Gasträumen und Küchen sind feuerbeständig; zwischen Gästezimmern feuerhemmend. Treppenraumwände sind Brandwände; in kleineren Objekten genügen hochfeuerhemmende Wände.",
      "Notwendige Treppen führen durchgängig über alle Geschosse. Der Stichflur darf maximal 15 Meter von der Zimmertür bis zur Treppe oder zum Ausgang messen (§ 52). Türen an notwendigen Treppenräumen und zu Gästezimmern müssen feuerhemmend, rauchdicht und selbstschließend sein (§ 53). Mit Brandmeldeanlage nach § 55 Abs. 3 genügen zu Gästezimmern teils dichtschließende Türen statt rauchdichter.",
      "H2::Technik, Alarmierung und Barrierefreiheit",
      "Sicherheitsbeleuchtung ist in notwendigen Fluren, Treppenräumen und an Ausgängen Pflicht (§ 54). Ab über 60 Gastbetten kann Gebäudefunk nötig sein, wenn die bauliche Anlage den Feuerwehr-Funk stört. Sicherheitsstromversorgung sichert Beleuchtung, Alarmierung, BMA und Gebäudefunk bei Stromausfall.",
      "Jede Beherbergungsstätte braucht Alarmierung für Gäste und Personal (§ 55). In jedem Beherbergungsraum steht mindestens ein Rauchwarnmelder – für alle Beherbergungsstätten, unabhängig von der Bettenzahl. Ab über 60 Gastbetten kommen selbsttätige Alarmierung, Brandmeldeanlage mit Rauchmeldern in Fluren und Zimmern, Handfeuermelder, Meldung an die Leitstelle und Brandfallsteuerung der Aufzüge hinzu.",
      "Mindestens 10 Prozent der Betten müssen in rollstuhlgerecht nutzbaren Zimmern liegen (§ 56). Ab über 30 Betten: 20 Prozent nach dieser Regel und mindestens 1 Prozent in voll barrierefreien Doppelzimmern. Das sollte früh in der Raumplanung berücksichtigt werden.",
      "H2::Betrieb, Bestand und Konsequenzen",
      "Im Betrieb müssen Rettungswege frei bleiben; Fluchttüren dürfen nicht verriegelt sein und sind von innen leicht zu öffnen (§ 57). In jedem Gästezimmer gehören Rettungswegplan und Brandhinweise – auch in den Fremdsprachen üblicher Gäste. Ab über 60 Betten sind Brandschutzordnung mit Brandschutzdienststelle und Feuerwehrpläne nötig. Das Personal ist jährlich zu Alarmierung, BMA, BSO, Brandverhalten und Rollstuhlrettung zu unterweisen – Schnittstelle zum [Link: /wissen/blog/brandschutzordnung-din-14096|betrieblichen Brandschutz] und [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragten].",
      "Für Bestandsobjekte gelten Übergangsfristen (§ 58): Kleine Häuser mit höchstens 60 Betten mussten Rauchwarnmelder innerhalb von zwei Jahren nach Inkrafttreten nachrüsten. Größere Objekte ohne selbsttätige Melder in Zimmern: Rauchwarnmelder spätestens bis 1. Januar 2021. Bei laufendem Betrieb prüfen, ob Nachrüstung und Wartung dokumentiert sind.",
      "Verstöße – blockierte Rettungswege, verriegelte Fluchttüren, fehlende Pläne oder unwirksame Rauchwarnmelder – können nach § 86 Abs. 1 Nr. 20 BauO NRW geahndet werden (§ 59). Im Neubau und bei Nutzungsänderung früh [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis] und Genehmigung einplanen; im Betrieb regelmäßige Begehungen.",
      "H2::Typische Mängel",
      "In der Praxis fehlen oft Rauchwarnmelder trotz Pflicht, Rettungswege sind durch Möbel oder Gepäck blockiert, Fluchttüren sind nachts verriegelt oder Rettungswegpläne in Zimmern sind veraltet. Nach Umbauten stimmen Pläne nicht mehr mit der Ist-Situation überein.",
      "Praxis in Köln und NRW: Gastbetten zählen, Rettungswege pro Zimmer mitdenken, Rauchwarnmelder nicht vergessen – auch unter 13 Betten. Health and Safety+ begleitet Genehmigung, Nachweise und Betrieb – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Teil 3 (Verkaufsstätten) folgt in einem eigenen Artikel.",
    ],
    faq: [
      {
        question: "Ab wann gilt SBauV Teil 2 für mein Hotel?",
        answer:
          "Ab mehr als zwölf Gastbetten – also ab dem 13. Bett. Darunter gelten primär BauO NRW und allgemeine Vorschriften; § 55 Abs. 2 SBauV (Rauchwarnmelder in jedem Gästezimmer) gilt jedoch für alle Beherbergungsstätten, auch kleinere.",
      },
      {
        question: "Braucht jedes Gästezimmer zwei Fluchtwege?",
        answer:
          "Ja – jeder Beherbergungsraum muss zwei voneinander unabhängige Rettungswege haben. Bei höchstens 60 Betten im Haus kann der zweite Weg eine feuerwehrtechnisch erreichbare Stelle am Raum sein, sofern nicht in einem Obergeschoss allein mehr als 30 Betten liegen.",
      },
      {
        question: "Rauchwarnmelder oder Brandmeldeanlage – was ist Pflicht?",
        answer:
          "In jedem Beherbergungsraum mindestens ein Rauchwarnmelder (alle Beherbergungsstätten). Ab über 60 Gastbetten zusätzlich Alarmierungseinrichtungen, BMA mit Rauchmeldern in Fluren und Zimmern, Handfeuermelder und Brandfallsteuerung der Aufzüge.",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-3-verkaufsstaetten",
    title: "Sonderbauverordnung NRW – Teil 3 Verkaufsstätten einfach erklärt",
    excerpt:
      "SBauV Teil 3 (§§ 60–91): Einkaufszentren, Märkte und große Läden ab 2.000 m² – Brandabschnitte, Ladenstraßen, Rettungswege, Sprinkler, BMA und Betrieb in NRW verständlich erklärt.",
    date: "2025-06-17",
    dateModified: "2026-05-26",
    content: [
      "Großflächiger Einzelhandel, Einkaufszentren, Baumärkte oder große Filialen: Sobald Verkaufsflächen wachsen, greift in NRW die Sonderbauverordnung (SBauV) Teil 3 – neben der [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW 2018]. Teil 3 umfasst §§ 60 bis 91. Dieser Beitrag ordnet Bau und Betrieb verständlich ein; ergänzend: [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|Teil 1], [Link: /wissen/blog/sonderbauverordnung-teil-2-beherbergungsstaetten|Teil 2] und [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Wann gilt Teil 3?",
      "Teil 3 gilt für jede Verkaufsstätte, deren Verkaufsräume und Ladenstraßen einschließlich ihrer inneren Bauteile insgesamt mehr als 2.000 m² haben (§ 60 SBauV). Typisch sind große Supermärkte, Baumärkte, Modehäuser oder Einkaufszentren – nicht kleinere Ladengeschäfte unter dieser Grenze. Messebauten sind ausgenommen.",
      "Verkaufsstätten sind Gebäude oder Teile davon, die dem Warenverkauf dienen und mindestens einen Verkaufsraum haben (§ 61). Dazu zählen alle Räume, die über Aufzüge oder Ladenstraßen verbunden sind – nicht Verbindungen nur über notwendige Treppenräume oder Haustechnik-Schächte. Verkaufsräume sind Kundenbereiche zum Verkauf oder Kundenverkehr; Ladenstraßen sind überdachte Flächen entlang der Verkaufsräume und zählen zur Gesamtfläche, gelten aber nicht als Verkaufsraum.",
      "H2::Baulicher Brandschutz und Rettungswege",
      "Tragende Bauteile müssen feuerbeständig sein – in erdgeschossigen Verkaufsstätten ohne Sprinkler teils feuerhemmend (§§ 62–68). Außenwände überwiegend aus nichtbrennbaren Baustoffen. Trennwände zur Nachbarschaft feuerbeständig ohne Öffnungen; Lagerräume über 100 m² und Werkstätten mit Brandgefahr abgetrennt.",
      "Kernregel für große Flächen sind Brandabschnitte (§ 65): Verkaufsstätten sind durch innere Brandwände zu unterteilen. Die Maximalgröße je Geschoss hängt von Sprinkleranlage und Geschosszahl ab – von 1.500 m² ohne Sprinkler bis 10.000 m² mit Sprinkler in erdgeschossigen Objekten. Sprinkler und Brandabschnittsplanung gehören früh in die Konzeptphase – [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept].",
      "Jeder Verkaufsraum, Aufenthaltsraum und jede Ladenstraße braucht im Geschoss mindestens zwei entgegengesetzte Rettungswege (§ 69). Der erste Rettungsweg darf maximal 25 Meter vom Verkaufsraum entfernt sein; von Ladenstraßen 35 Meter. Jeder Verkaufsraum muss einen Hauptgang oder eine Ladenstraße in maximal 10 Metern Entfernung erreichen.",
      "Notwendige Kundentreppen sind mindestens 2 Meter breit; Ladenstraßen mindestens 5 Meter (§§ 70–74). Türen in Rettungswegen dürfen während der Betriebszeit nicht abgeschlossen werden.",
      "H2::Technische Anlagen",
      "Verkaufsstätten brauchen grundsätzlich selbsttätige Feuerlöschanlagen (§ 79) – mit Ausnahmen für kleinere erdgeschossige Objekte. Dazu kommen Rauchableitung, Sicherheitsbeleuchtung, Feuerlöscher, Wandhydranten, Brandmelde- und Alarmierungsanlagen, Brandfallsteuerung der Aufzüge und bei Funkstörung Gebäudefunk. Kellergeschosse mit großen Verkaufsräumen sind oft sprinklerpflichtig.",
      "H2::Betrieb und Organisation",
      "Während der Öffnungszeiten muss Betreiber oder Vertretung ständig anwesend sein (§ 85). Brandschutzbeauftragte und je angefangene 5.000 m² Verkaufsfläche mindestens eine Selbsthilfekraft für den Brandschutz sind zu bestellen. Der Brandschutzbeauftragte überwacht Rettungsweglängen, Freihaltung der Gänge und die Umsetzung der [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung].",
      "Ab über 5.000 m² Verkaufsraumfläche ist ein gesondertes Räumungskonzept nötig (§ 86). Jährliche Unterweisung zu Löschanlagen, BMA und Brandverhalten; Feuerwehrpläne für die örtliche Feuerwehr. Rettungswege auf dem Grundstück und Feuerwehrflächen müssen frei bleiben (§§ 82–84).",
      "Für Bestandsobjekte gelten Übergangsfristen (§ 90); bei Umbau oder Erweiterung über 2.000 m² früh klären, welche Neufassung greift. Verstöße können geahndet werden (§ 91).",
      "H2::Typische Mängel",
      "Dekorationen oder Waren blockieren Rettungswege, Fluchttüren sind während des Betriebs verschlossen, Brandabschnitte wurden durch Umbauten aufgeweicht oder Sprinkler und BMA sind nicht wartungsbereit. Vor Eröffnung fehlen oft BSB oder Selbsthilfekräfte.",
      "Praxis in Köln und NRW: Verkaufsfläche korrekt summieren (Ladenstraßen mitzählen), Brandabschnitte und Sprinkler früh planen. Health and Safety+ unterstützt bei Konzept, Genehmigung und Betrieb – [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kostenlose Erstberatung]. Teil 4 (Hochhäuser) folgt im nächsten Artikel.",
    ],
    faq: [
      {
        question: "Ab welcher Fläche gilt SBauV Teil 3 für meinen Markt?",
        answer:
          "Wenn Verkaufsräume und Ladenstraßen einschließlich innerer Bauteile insgesamt mehr als 2.000 m² haben. Kleinere Läden fallen in der Regel nicht unter Teil 3 – die BauO NRW gilt weiterhin.",
      },
      {
        question: "Braucht jede große Verkaufsstätte eine Sprinkleranlage?",
        answer:
          "Grundsätzlich ja nach § 79 SBauV. Ausnahmen gibt es für bestimmte erdgeschossige Verkaufsstätten ohne Sprinkler nach § 65 Abs. 1 Nr. 3 und 4 (kleinere Brandabschnitte). Kellergeschosse mit großen Verkaufsräumen sind oft verpflichtend.",
      },
      {
        question: "Was ist der Unterschied zwischen Verkaufsraum und Ladenstraße?",
        answer:
          "Verkaufsräume sind Kundenbereiche zum Verkauf oder Kundenverkehr. Ladenstraßen sind überdachte Verkehrsflächen entlang der Verkaufsräume – sie zählen zur Gesamtfläche für § 60, gelten aber nicht als Verkaufsraum und haben eigene Anforderungen (mindestens 5 m Breite, Rettungswege).",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-4-hochhaeuser",
    title: "Sonderbauverordnung NRW – Teil 4 Hochhäuser einfach erklärt",
    excerpt:
      "SBauV Teil 4 (§§ 92–120): Hochhäuser ab BauO-Grenze – Sicherheitstreppenräume, Feuerwehraufzüge, Sprinkler, BMA, Druckbelüftung, Erleichterungen bis 60 m und Betrieb in NRW verständlich erklärt.",
    date: "2025-06-24",
    dateModified: "2026-05-26",
    content: [
      "Wohn- und Bürotürme, Hotels in Hochhausform oder gemischt genutzte Gebäude: Sobald ein Objekt als Hochhaus gilt, greift in NRW neben der [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW 2018] die Sonderbauverordnung (SBauV) Teil 4 (§§ 92–120). Typischerweise liegt die Fußbodenhöhe des obersten nutzbaren Geschosses mehr als 22 Meter über Gelände. Ergänzend: [Link: /wissen/blog/sonderbauverordnung-teil-3-verkaufsstaetten|Teil 3], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Wann gilt Teil 4?",
      "Teil 4 regelt besondere Anforderungen und Erleichterungen für den Bau und Betrieb von Hochhäusern im Sinne der BauO NRW (§ 92). Wo Teil 4 nichts Abweichendes bestimmt, gelten die allgemeinen Vorschriften der BauO – im Hochhaus gelten jedoch fast immer die verschärften Regeln dieses Teils.",
      "Für Einsatz- und Rettungsfahrzeuge sind ausreichende Zu- oder Durchfahrten und Bewegungsflächen erforderlich (§ 93). Feuerwehreingänge, Zugänge zu notwendigen Treppenräumen und Feuerwehraufzügen sowie Löschwassereinspeisungen müssen unmittelbar erreichbar sein.",
      "H2::Baulicher Brandschutz und Rettungswege",
      "Tragende und aussteifende Bauteile sowie Brüstungen offener Gänge müssen feuerbeständig und aus nichtbrennbaren Baustoffen sein; bei Gebäuden über 60 Meter Höhe beträgt die Feuerwiderstandsfähigkeit tragender Bauteile 120 Minuten (§§ 94–97). Geschossdecken, Wände notwendiger Treppenräume und Feuerwehraufzugsschächte sind raumabschließend in entsprechender Feuerwiderstandsfähigkeit.",
      "Jede Nutzungseinheit und jedes Geschoss ohne Aufenthaltsräume braucht mindestens zwei voneinander unabhängige bauliche Rettungswege ins Freie (§ 98). Maximal 35 Meter von Aufenthaltsraum oder Keller bis zum notwendigen Treppenraum, Sicherheitstreppenraum-Vorraum oder ins Freie. Mindestbreite der Rettungswege 1,20 Meter.",
      "H2::Sicherheitstreppenräume und Feuerwehraufzüge",
      "Bei Hochhäusern bis 60 Meter Höhe genügt ein Sicherheitstreppenraum statt zweier notwendiger Treppenräume; über 60 Meter müssen alle notwendigen Treppenräume als Sicherheitstreppenräume ausgebildet sein (§ 99). Innenliegende Sicherheitstreppenräume brauchen Vorräume ohne Raucheintritt und Druckbelüftung nach § 105.",
      "Feuerwehraufzüge müssen Haltestellen in jedem Geschoss haben; jede Stelle darf maximal 50 Meter Lauflinie von einem Feuerwehraufzug-Vorraum entfernt sein (§ 103). Eigene rauchdichte Fahrschächte, Notbedienung, Krankentrage und Sichtöffnungen gehören dazu.",
      "H2::Sprinkler, BMA und Erleichterungen",
      "Selbsttätige Feuerlöschanlagen sind Pflicht (§ 106). Brandmeldeanlagen mit selbsttätigen Meldern, Meldung an die Leitstelle, Alarmierung und ab 60 Meter Lautsprecheranlage; Brandfallsteuerung der Aufzüge (§ 107). Sicherheitsbeleuchtung und Sicherheitsstromversorgung mindestens drei Stunden für sicherheitstechnische Anlagen (§§ 108–114).",
      "Unter engen Voraussetzungen können in Hochhäusern bis 60 Meter Sprinkler, BMA oder Alarmierung entfallen (§ 115) – feuerbeständige Teileinheiten, Brandüberschlag-Hemmung, Druckbelüftung und Rauchwarnmelder. Ein ingenieurtechnischer Nachweis und Abstimmung mit der Bauaufsicht sind nötig.",
      "H2::Betrieb und typische Mängel",
      "Rettungswege müssen ständig frei bleiben; keine Gegenstände in Vorräumen und notwendigen Treppenräumen (§ 116). Brandschutzordnung und Feuerwehrpläne im Einvernehmen mit der Brandschutzdienststelle; [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] sind Pflicht außer bei geringer Höhe und kleinen Nutzungseinheiten.",
      "In der Praxis sind verschlossene Rettungstüren, fehlende Sicherheitsbeleuchtung, blockierte Treppenräume oder ein fehlender Brandschutzbeauftragter trotz Pflicht häufige Feststellungen. Verstöße können geahndet werden (§ 120 SBauV).",
      "Praxis in Köln und NRW: Höhe und Nutzung früh klären (22-m-, 30-m- und 60-m-Schwellen), Sicherheitstreppenraum und Feuerwehraufzug in die Grundrissplanung. Health and Safety+ begleitet Konzept und Betrieb – [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kostenlose Erstberatung]. Teil 5 (Garagen) folgt im nächsten Artikel.",
    ],
    faq: [
      {
        question: "Ab wann gilt SBauV Teil 4 für mein Gebäude?",
        answer:
          "Wenn es ein Hochhaus nach BauO NRW § 50 Absatz 2 Nummer 1 ist – in der Regel ab mehr als 22 m Fußbodenhöhe des obersten nutzbaren Geschosses über Gelände. Dann greifen die §§ 92–120 SBauV mit verschärften Anforderungen zu Rettungswegen, Sicherheitstreppenräumen, Feuerwehraufzügen und technischen Anlagen.",
      },
      {
        question: "Braucht jedes Hochhaus zwei Treppenhäuser?",
        answer:
          "Nicht zwingend zwei notwendige Treppenräume: Bei Hochhäusern bis 60 m Höhe genügt ein Sicherheitstreppenraum. Über 60 m müssen alle notwendigen Treppenräume als Sicherheitstreppenräume ausgebildet sein. Bis 30 m können zwei innenliegende notwendige Treppenräume den Sicherheitstreppenraum ersetzen.",
      },
      {
        question: "Kann auf Sprinkler und BMA verzichtet werden?",
        answer:
          "In Hochhäusern bis 60 m unter engen baulichen Voraussetzungen nach § 115 SBauV – feuerbeständige Teileinheiten, Brandüberschlag-Hemmung, Druckbelüftung aus BMA, Rauchwarnmelder. Für reine Bürogeschosse über 1. OG gibt es eine weitere Variante mit Sprinkler statt BMA. Ein ingenieurtechnischer Nachweis und Abstimmung mit der Bauaufsicht sind in der Regel nötig.",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-5-garagen",
    title: "Sonderbauverordnung NRW – Teil 5 Garagen einfach erklärt",
    excerpt:
      "SBauV Teil 5 (§§ 121–142): Kleingaragen, Tiefgaragen und Parkhäuser – Nutzflächen, Rauchabschnitte, Lüftung, CO-Warnanlagen, BMA, Rettungswege und Betrieb in NRW verständlich erklärt.",
    date: "2025-07-01",
    dateModified: "2026-05-26",
    content: [
      "Tiefgarage unter dem Wohnhaus, Parkhaus im Einkaufszentrum oder Stellplatzanlage auf dem Dach: Sobald Stellplätze und Garagen nach BauO NRW gebaut oder betrieben werden, greift die Sonderbauverordnung (SBauV) Teil 5 (§§ 121–142). Ergänzend: [Link: /wissen/blog/sonderbauverordnung-teil-4-hochhaeuser|Teil 4], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Wann gilt Teil 5?",
      "Teil 5 gilt für Stellplätze und Garagen nach BauO NRW (§ 121). Wo Teil 5 nichts Abweichendes regelt, gelten die Anforderungen der BauO an Gebäude der Gebäudeklasse 5 – Erleichterungen aus §§ 30, 31, 36, 39–41 BauO NRW sind ausgeschlossen.",
      "Nach Nutzfläche unterscheidet die SBauV Kleingaragen (bis 100 m²), Mittelgaragen (über 100 bis 1.000 m²) und Großgaragen (über 1.000 m²) – § 122. Offene Garagen haben mindestens ein Drittel der Umfassungswand als unverschließbare Öffnungen ins Freie; geschlossene Garagen erfüllen das nicht und brauchen stärkere technische Anlagen.",
      "H2::Planung: Zufahrten, Rampen und Stellplätze",
      "Zu- und Abfahrten brauchen mindestens 3 Meter Länge zur öffentlichen Verkehrsfläche; Fahrbahnen vor Mittel- und Großgaragen mindestens 2,75 Meter Breite (§ 123). Rampen maximal 15 Prozent Neigung; zwischen Straße und Rampe über 10 Prozent eine Auslauffläche von 3 Metern (§ 124).",
      "Einstellplätze mindestens 5 Meter lang; Breite gestaffelt 2,45–2,65 Meter, barrierefrei 3,50 Meter. Fahrgassenbreite abhängig von der Stellplatzanordnung – typisch 5,50 bis 6,25 Meter bei 90-Grad-Parken (§ 125).",
      "H2::Brandschutz und Rettungswege",
      "Geschlossene Großgaragen sind in Rauchabschnitte zu unterteilen – maximal 5.000 m² oberirdisch, sonst 2.500 m², mit Sprinkler verdoppelt (§ 132). Verbindungen zu Fluren und Treppen nur über Sicherheitsschleusen bei geschlossenen Mittel- und Großgaragen (§ 133).",
      "Mittel- und Großgaragen brauchen zwei unabhängige Rettungswege je Geschoss; maximal 50 Meter (offen) bzw. 30 Meter (geschlossen) zur Treppe oder ins Freie (§ 134). Rettungstüren dürfen während des Betriebs nicht versperrt sein.",
      "H2::Lüftung, CO-Warnung und BMA",
      "Geschlossene Garagen brauchen maschinelle Abluft oder natürliche Lüftung; bei maschineller Lüftung CO-Warnanlagen – ab 250 ppm Motoren abstellen (§§ 135–136). Geschlossene Großgaragen brauchen Brandmeldeanlagen mit Meldung an die Leitstelle, sofern nicht in jedem Geschoss Sprinkler vorhanden sind (§§ 137–138).",
      "H2::Betrieb und typische Mängel",
      "In allgemein zugänglichen geschlossenen Großgaragen muss eine Aufsichtsperson ständig anwesend sein – oder Monitorüberwachung mit schneller Vor-Ort-Reaktion (§ 139). Rauch- und Feuerverbot in geschlossenen Mittel- und Großgaragen. Keine brennbaren Stoffe außerhalb der Fahrzeuge lagern.",
      "Häufige Probleme sind CO-Überschreitungen durch defekte Lüftung, fehlende Aufsicht, blockierte Rettungswege oder Brandmeldeanlagen ohne Wartung. Verstöße können geahndet werden (§§ 141–142 SBauV).",
      "Praxis in Köln und NRW: Nutzfläche korrekt summieren, offen vs. geschlossen früh klären, Sicherheitsschleusen und CO-Technik einplanen. Health and Safety+ unterstützt bei Konzept und Betrieb – [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kostenlose Erstberatung]. Teil 6 (elektrische Anlagen) folgt im nächsten Artikel.",
    ],
    faq: [
      {
        question: "Wann ist meine Garage eine Klein-, Mittel- oder Großgarage?",
        answer:
          "Nach Nutzfläche (Einstellplätze plus Verkehrsflächen innerhalb der Garage): bis 100 m² Kleingarage, über 100 bis 1.000 m² Mittelgarage, über 1.000 m² Großgarage. Die Einstufung bestimmt, welche Anforderungen zu Rettungswegen, Lüftung, BMA oder Aufsicht gelten.",
      },
      {
        question: "Was ist der Unterschied zwischen offener und geschlossener Garage?",
        answer:
          "Offene Garagen haben mindestens ein Drittel der Umfassungswand als unverschließbare Öffnungen ins Freie; bei Mittel- und Großgaragen zusätzlich Querlüftung. Geschlossene Garagen erfüllen das nicht – sie brauchen stärkere technische Anlagen (Lüftung, ggf. BMA, CO-Warnung, Sicherheitsbeleuchtung) und bei allgemeinem Zugang Aufsicht.",
      },
      {
        question: "Braucht jede Tiefgarage eine Brandmeldeanlage?",
        answer:
          "Geschlossene Großgaragen ja – mit selbsttätigen Meldern und Meldung an die Leitstelle, sofern nicht in jedem Geschoss eine Sprinkleranlage vorhanden ist. Geschlossene Mittelgaragen nur, wenn sie mit Nutzungen verbunden sind, für die ohnehin BMA Pflicht ist. Kleingaragen und offene Garagen haben andere, oft geringere Anforderungen.",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-6-elektrische-anlagen",
    title: "Sonderbauverordnung NRW – Teil 6 Elektrische Anlagen einfach erklärt",
    excerpt:
      "SBauV Teil 6 (§§ 143–149): Elektrische Betriebsräume für Mittelspannung, Notstromaggregate und Batterieanlagen – Anforderungen an Lage, Brandschutz und Lüftung in NRW verständlich erklärt.",
    date: "2025-07-08",
    dateModified: "2026-05-26",
    content: [
      "Mittelspannungstransformatoren im Keller, zentrale USV-Batterien oder Notstromaggregate für BMA und Sicherheitsbeleuchtung: Sobald solche Anlagen in Gebäuden aufgestellt werden, greift in NRW die Sonderbauverordnung (SBauV) Teil 6 (§§ 143–149). Ergänzend: [Link: /wissen/blog/sonderbauverordnung-teil-5-garagen|Teil 5], [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|betriebliche Elektrosicherheit], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Wann gilt Teil 6?",
      "Teil 6 gilt für die Aufstellung in Gebäuden von (1) Transformatoren und Schaltanlagen mit Nennspannungen über 1 kV, (2) ortsfesten Stromerzeugungsaggregaten zur Versorgung bauordnungsrechtlich vorgeschriebener sicherheitstechnischer Anlagen und (3) zentralen Batterieanlagen für solche Anlagen (§ 143).",
      "Elektrische Betriebsräume sind Räume, die ausschließlich Einrichtungen nach § 143 aufnehmen – nicht mit normalen Technikräumen oder Schaltschränken im Flur gleichzusetzen (§ 144). Innerhalb von Gebäuden müssen diese Anlagen in jeweils eigenen Betriebsräumen stehen (§ 145), mit Ausnahmen für freistehende Mittelspannungsgebäude und Aggregate in Heiz-/Feuerstättenräumen.",
      "H2::Anforderungen an Betriebsräume",
      "Betriebsräume müssen im Gefahrenfall leicht erreichbar vom Freien oder allgemein zugänglichen Räumen sein; Türen nach außen aufschlagend, jederzeit verlassbar (§ 146). Kein unmittelbarer Zugang von notwendigen Treppenräumen. Rettungsweg innerhalb des Raumes maximal 35 Meter. Lichte Höhe mindestens 2 Meter. Wirksame Be- und Entlüftung. Keine fremden Leitungen.",
      "Transformator- und Schaltanlagenräume über 1 kV: raumabschließende Bauteile feuerbeständig, Türen feuerhemmend und rauchdicht (§ 147). Öltransformatoren nur im Erdgeschoss oder höchstens 4 Meter unter Gelände – nicht in Obergeschossen. Lüftung direkt ins Freie; auslaufende Isolierflüssigkeit auffangen.",
      "Notstromaggregate und Batterieräume: Raumabschluss in Feuerwiderstandsfähigkeit passend zum Funktionserhalt der versorgten Anlagen (§§ 148–149). Batterieräume kennzeichnen; bei geschlossenen Zellen durchgängig ableitfähiger Fußboden gegen elektrostatische Ladung.",
      "H2::Planung und typische Mängel",
      "Mittelspannung, USV und Notstrom früh mit [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis] und Elektroplanung abstimmen – Betriebsraum, Ölwanne, Lüftung und Feuerwiderstand der Türen gehören in ein Gesamtkonzept mit BMA, Sicherheitsstrom und ggf. [Link: /wissen/blog/sonderbauverordnung-teil-4-hochhaeuser|Hochhaus-Anforderungen].",
      "In der Praxis fehlen oft Ölwannen unter Transformatoren, die Kennzeichnung am Batterieraum, eine Lüftung ins Freie oder der Betriebsraum enthält fremde Leitungen.",
      "Praxis in Köln und NRW: Schon in der Entwurfsphase Betriebsraumgröße, Zugang und Brandschutz abstimmen. Health and Safety+ begleitet Genehmigung und Schnittstellen – [Link: /brandschutz|Leistungen Brandschutz], [Link: /kontakt|Kostenlose Erstberatung]. Teil 7 (Schlussvorschriften) schließt die SBauV-Serie ab.",
    ],
    faq: [
      {
        question: "Wann brauche ich einen elektrischen Betriebsraum nach SBauV?",
        answer:
          "In Gebäuden müssen Transformatoren/Schaltanlagen über 1 kV, Notstromaggregate und zentrale Batterieanlagen für sicherheitstechnische Anlagen jeweils in eigenen elektrischen Betriebsräumen stehen – mit Ausnahmen für freistehende bzw. brandwandabgetrennte Mittelspannungsgebäude und Aggregate in Heiz-/Feuerstättenräumen.",
      },
      {
        question: "Dürfen Öltransformatoren im Keller oder Obergeschoss stehen?",
        answer:
          "Nach § 147 SBauV dürfen Betriebsräume für Transformatoren mit Mineralöl oder synthetischer Kühlflüssigkeit nicht in Geschossen über dem Erdgeschoss liegen und nicht tiefer als 4 m unter Gelände. Zusätzlich: Auffang für auslaufende Flüssigkeit, Lüftung ins Freie, feuerbeständige Abschlüsse.",
      },
      {
        question: "Was gilt speziell für Batterieräume der Sicherheitsstromversorgung?",
        answer:
          "Raumabschluss in Feuerwiderstandsfähigkeit passend zum Funktionserhalt der versorgten Anlagen (BMA, Sicherheitsbeleuchtung etc.), Lüftung, selbstschließende Türen, Kennzeichnung „Batterieraum“. Bei geschlossenen Batteriezellen: durchgängig ableitfähiger Fußboden gegen elektrostatische Ladung.",
      },
    ],
  },
  {
    slug: "sonderbauverordnung-teil-7-schlussvorschriften",
    title: "Sonderbauverordnung NRW – Teil 7 Schlussvorschriften einfach erklärt",
    excerpt:
      "SBauV Teil 7 (§ 150): Inkrafttreten, Außerkrafttreten der SBauV 2009 und Übergangsvorschriften – praxisnah für Köln und NRW.",
    date: "2025-07-15",
    dateModified: "2026-05-26",
    content: [
      "Sieben Teile, über 140 Paragraphen: Die Sonderbauverordnung NRW (SBauV) regelt Sonderbauten von der Versammlungsstätte bis zum elektrischen Betriebsraum. Teil 7 schließt die Verordnung mit § 150 ab – Inkrafttreten, Außerkrafttreten und Übergangsvorschriften. Dieser Artikel erklärt, was das für Genehmigungen, Bestand und laufende Verfahren bedeutet; die inhaltlichen Teile finden Sie in [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|Teil 1] bis [Link: /wissen/blog/sonderbauverordnung-teil-6-elektrische-anlagen|Teil 6] und im [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Was gilt rechtlich?",
      "In § 150 ist das Inkrafttreten geregelt: Die SBauV NRW 2018 trat am Tag nach der Verkündung in Kraft – parallel zur [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW 2018]. Gleichzeitig trat die frühere Sonderbauverordnung vom 17. November 2009 (zuletzt geändert 2014) außer Kraft. Für Planer und Betreiber gilt seitdem einheitlich die Neufassung an Stelle der alten SBauV 2009.",
      "Novellierung 2019: Durch Verordnung vom 2. August 2019 (in Kraft am 15. November 2019) wurden zahlreiche Paragraphe in allen Teilen angepasst – unter anderem Garagen (Teil 5), Hochhäuser, Beherbergung und Versammlungsstätten. Wer Bestandsobjekte oder Übergangsfristen aus einzelnen Teilen prüft, muss die jeweils geltende Fassung zum Stichtag beachten.",
      "Übergang – Verfahren vor 5. Januar 2017: Vor diesem Datum eingeleitete Genehmigungsverfahren sind nach der SBauV 2009 (Stand 2014) weiterzuführen. Auf Verlangen des Antragstellenden können stattdessen die Vorschriften der SBauV 2018 angewendet werden – sinnvoll, wenn die Neufassung für das Projekt günstiger oder klarer ist.",
      "Übergang – Verfahren vor 15. November 2019: Vor diesem Datum eingeleitete Verfahren sind nach der zum Zeitpunkt der Einleitung geltenden Fassung der SBauV weiterzuführen. Auf Verlangen des Antragstellenden gilt die ab 15. November 2019 geltende Fassung (Novellierung 2019). Das betrifft vor allem lange laufende oder unterbrochene Bauvorhaben.",
      "H2::Umsetzung in der Praxis",
      "EU-Hinweis in § 150: Die Verpflichtungen aus der Richtlinie 98/34/EG (Informationsverfahren für technische Vorschriften) sind beachtet worden – relevant für die Rechtsgrundlage der Verordnung, nicht für den täglichen Betrieb.",
      "Was Teil 7 für die Praxis bedeutet: § 150 regelt nicht bauliche Details, sondern welche Fassung der SBauV auf Ihr Vorhaben anwendbar ist. Entscheidend sind Einleitung des Genehmigungsverfahrens, Antragsteller-Verlangen und Stichtage (2017, 2019). Bestands- und Übergangsregeln in den einzelnen Teilen (z. B. § 45 Versammlungsstätten, § 58 Beherbergung, § 119 Hochhäuser, § 142 Garagen) ergänzen § 150 für konkrete Sonderbauten.",
      "Serie im Überblick: Teil 1 Versammlungsstätten (§§ 1–46), Teil 2 Beherbergung (§§ 47–59), Teil 3 Verkaufsstätten (§§ 60–91), Teil 4 Hochhäuser (§§ 92–120), Teil 5 Garagen (§§ 121–142), Teil 6 Elektrische Anlagen (§§ 143–149), Teil 7 Schlussvorschriften (§ 150). Gemeinsam mit der BauO NRW bilden sie das brandschutzrechtliche Rahmenwerk für Sonderbauten in NRW.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Sonderbauten in NRW sollten Übergangsvorschriften, Zuständigkeiten und Verweisungen zur BauO NRW vor Projektstart geklärt sein – Änderungen betreffen oft Genehmigungsverfahren und Nachweispflichten.",
      "Praxis Köln/NRW: Bei Nutzungsänderung, Erweiterung oder Bestand früh klären, welche SBauV-Fassung und welcher Teil greift – nicht nur die aktuelle Fassung blind anwenden. H&S+ unterstützt bei Einordnung, [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis] und Schnittstellen zur Bauaufsicht – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Damit ist die SBauV-Serie abgeschlossen.",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt SBauVO Teil 7 NRW?",
        answer:
          "Schlussvorschriften der Sonderbauverordnung NRW: Übergangsregelungen, Inkrafttreten, Verweisungen – ergänzt BauO NRW bei Sonderbauten wie Versammlungsstätten, Krankenhäuser, Hochhäuser.",
      },
      {
        question: "Warum relevant für Betreiber?",
        answer:
          "Sonderbau-Pflichten betreffen Genehmigung, brandschutztechnische Nachweise und laufende Betriebsauflagen – Schnittstelle zu [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept].",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Sonderbau-Status ignoriert, veraltete Nachweise nach Umbau, fehlende Abstimmung Sachverständiger und BSB nach Eröffnung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|BauO NRW], [Link: /wissen/blog/brandschutz-sachverstaendiger-koeln|Sachverständiger Köln] und [Link: /brandschutz|Leistungen].",
      },
    ],
  },
  // BHKG-Serie: wöchentlich dienstags ab 2025-07-15 (Teil 1 Überblick, dann §§ 26–28)
  {
    slug: "bhkg-nrw-einfach-erklaert",
    title: "BHKG NRW einfach erklärt – öffentlicher, baulicher und betrieblicher Brandschutz",
    excerpt:
      "BHKG NRW verständlich: Brandschutz, Hilfeleistung und Katastrophenschutz – wie es mit BauO, SBauV, betrieblichem Brandschutz, Arbeitsschutz und SiGeKo zusammenhängt. Einstieg in die BHKG-Blogserie.",
    date: "2025-07-15",
    dateModified: "2026-05-26",
    content: [
      "Wer in NRW von Brandschutz spricht, meint oft nur die Bauordnung oder die Feuerwehr. Tatsächlich laufen mehrere Ebenen parallel: baulich und genehmigungsrechtlich über BauO NRW und Sonderbauverordnung, öffentlich über das Gesetz über den Brandschutz, die Hilfeleistung und den Katastrophenschutz (BHKG NRW), betrieblich im Arbeitsschutz über ArbSchG, DGUV und Brandschutzordnung – und auf der Baustelle zusätzlich über BaustellV und SiGeKo. Dieser Artikel ist der Einstieg in unsere BHKG-Serie; er ordnet die Ebenen ein, ohne sie zu vermischen. Vertiefende Einzelthemen folgen in den nächsten Beiträgen zu Brandverhütungsschau, Leitstelle und Brandsicherheitswache.",
      "H2::Was gilt rechtlich?",
      "Was das BHKG regelt: Das Gesetz strukturiert den öffentlichen vorbeugenden und abwehrenden Schutz – Feuerwehr, Hilfeleistung bei Unglücksfällen und öffentlichen Notständen, Katastrophenschutz, Brandverhütungsschau und einheitliche Leitstelle. § 1 BHKG nennt das Ziel: Schutz der Bevölkerung vor Brandgefahren, Unglücksfällen und Katastrophen. Das Gesetz gilt nicht, soweit andere Vorschriften wie BauO oder ArbSchG vorbeugende Maßnahmen bereits regeln – bis zur Zuständigkeit der Gemeinde greift sie im Wege des Erstzugriffs bei akuter Gefahr. Für Unternehmen heißt das: Das BHKG verpflichtet primär Gemeinden und Kreise, nicht pauschal jeden Arbeitgeber. Die Pflicht, Beschäftigte vor Brandgefahren zu schützen, folgt aus dem Arbeitsschutzgesetz; die Pflicht, so zu bauen und zu nutzen, dass Rettungswege und Brandmeldeanlagen genehmigungsfähig sind, folgt aus BauO und SBauV. Das BHKG schließt die Lücke zur Feuerwehr, Leitstelle und Brandverhütungsschau.",
      "Vier Ebenen prägen den Alltag, und Verwechslungen entstehen, wenn Begriffe aus verschiedenen Rechtsbereichen vermischt werden. Baulich und genehmigungsrechtlich geht es darum, ob so gebaut und genutzt werden darf – zuständig sind Bauherr, Planer, Prüfingenieur und Bauaufsicht ([Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW], [Link: /wissen/blog/baupruefvo-nrw-einfach-erklaert|BauPrüfVO]). Öffentlich geht es um Feuerwehrprüfungen und Einsatzorganisation – zuständig sind Gemeinde, Kreis, Feuerwehr und Leitstelle. Betrieblich regelt der Arbeitgeber Organisation und Schutzmaßnahmen – zuständig sind [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter], Fachkraft für Arbeitssicherheit und Facility ([Link: /wissen/ratgeber/brandschutz-betrieb|betrieblicher Brandschutz]). Auf der Baustelle koordiniert vorübergehend der [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] zusammen mit Bauherr und ausführenden Unternehmen. Alle vier Ebenen können dasselbe Gebäude betreffen – aber mit unterschiedlichen Pflichten und Ansprechpartnern.",
      "Aufgabenträger nach BHKG: § 2 nennt die Träger. Gemeinden tragen Brandschutz und Hilfeleistung – Feuerwehr, Brandverhütung. Kreise tragen erweiterten Brandschutz, Katastrophenschutz, die einheitliche Leitstelle nach § 28 und die Auskunftsstelle. Das Land fördert und koordiniert überörtlich. Für Sie als Betreiber bedeutet das: Ansprechpartner für Brandverhütungsschau und Veranstaltungen nach § 27 ist die zuständige Gemeinde über die Brandschutzdienststelle – nicht Ihre Fachkraft für Arbeitssicherheit, auch wenn beide Ergebnisse in Gefährdungsbeurteilung und Brandschutzordnung einfließen sollten.",
      "Brandverhütungsschau – die wichtigste Schnittstelle zum Betrieb: Ab Nutzung oder Inbetriebnahme führt die Gemeinde nach § 26 BHKG brandschutztechnische Überprüfungen in Abständen von höchstens sechs Jahren durch – durch qualifizierte Brandschutztechniker. Themen sind Rettungswege, Feuerschutzabschlüsse, Brandlasten, technische Anlagen und Ordnung – oft dieselben Punkte, die im Betrieb auch Brandschutzbeauftragter und Gefährdungsbeurteilung betreffen, aber aus behördlicher Perspektive. Ausführlich: [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Blog Brandverhütungsschau]. Die Brücke vom genehmigten Konzept in den laufenden Betrieb erklären wir in der BauPrüfVO-Serie: [Link: /wissen/blog/brandschutzkonzept-betrieb-brandverhuetungsschau|Konzept, Betrieb und Schau].",
      "Leitstelle und Brandmeldeanlagen: Kreise unterhalten die einheitliche Leitstelle für Brandschutz, Hilfeleistung, Katastrophenschutz und Rettungsdienst (§ 28 BHKG). Selbsttätige Brandmeldeanlagen in Sonderbauten und vielen Gewerbeobjekten müssen Meldungen dorthin unmittelbar und automatisch weiterleiten – technisch über BauO und SBauV, rechtlich über die öffentliche Infrastruktur. Für Betreiber ist die BMA damit Teil der Einsatzkette, nicht nur ein Wartungsvertragsthema. Vertiefung: [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|Blog BMA und Leitstelle].",
      "Brandsicherheitswachen bei Veranstaltungen: Veranstaltungen mit erhöhter Brandgefahr und großer Personenzahl sind der Gemeinde rechtzeitig anzuzeigen (§ 27 BHKG). Die Gemeinde entscheidet über eine Brandsicherheitswache und kann Auflagen erteilen – baurechtliche Vorschriften und SBauV-Betriebspflichten bleiben parallel gültig. Vertiefung: [Link: /wissen/blog/brandsicherheitswache-bhkg-nrw|Blog Brandsicherheitswache]. Veranstalter sollten Anzeige, Konzept und Brandschutzordnung vor dem Termin abstimmen, nicht erst bei der Behörde.",
      "H2::Umsetzung in der Praxis",
      "Besonders gefährliche Objekte (§ 29 BHKG): Betreiber von Anlagen mit besonderen Gefahren müssen auf Verlangen Angaben für Alarm- und Einsatzplanung liefern und Einsatzkräfte unterstützen. Für typische KMU ohne Störfallanlage ist § 29 seltener unmittelbar relevant; für Industrie, Gefahrstofflogistik oder große Versammlungsstätten schon. Hier überschneidet sich BHKG mit Störfallrecht und externen Notfallplänen – betrieblich über Gefährdungsbeurteilung und Brandschutzbeauftragten.",
      "BHKG und betrieblicher Brandschutz – gemeinsame Praxis: Der Arbeitgeber muss Brandgefahren für Beschäftigte vermeiden – konkretisiert durch Brandschutzordnung, Unterweisungen und Brandschutzhelfer. Das BHKG regelt nicht die Bestellung eines Brandschutzbeauftragten, aber die Brandverhütungsschau kann Mängel finden, die Sie ohnehin in Gefährdungsbeurteilung und internen Begehungen schließen müssten. Erfolgreiche Betriebe führen eine Maßnahmenliste: Mängel aus Schau, Versicherer, Berufsgenossenschaft und eigener Begehung werden gebündelt, priorisiert und einer Verantwortlichen zugeordnet. Gekeilte Brandschutztüren, Lager in Fluren oder fehlende Unterweisungen tauchen oft gleichzeitig auf mehreren Listen auf – einmal lösen, dreifach dokumentieren.",
      "Vom Konzept zum Betrieb: BauO NRW und SBauV legen fest, wie gebaut und genehmigt wird. Das BHKG greift, wenn das Gebäude in Betrieb ist. Ein genehmigtes [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept] und Nachweise nach [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|§ 9 BauPrüfVO] nützen im Ernstfall nur, wenn Betrieb, Dokumentation und Brandverhütungsschau zum tatsächlichen Zustand passen. Nach Umbau oder Nutzungsänderung gilt: zuerst bauordnungsrechtliche Klärung, dann Brandschutzordnung und Gefährdungsbeurteilung anpassen, dann die nächste Schau einbeziehen. Die SBauV-Serie erklärt Sonderbau-Teile im Detail ([Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|Teil 1] bis [Link: /wissen/blog/sonderbauverordnung-teil-7-schlussvorschriften|Teil 7]).",
      "Baustelle und Übergabe: Während der Bauphase koordiniert der SiGeKo temporäre Gefahren – Heißarbeit, provisorische Rettungswege, Abschaltung der Brandmeldeanlage. Das BHKG betrifft die Baustelle kaum direkt; entscheidend ist die Übergabe in den Dauerbetrieb. Was auf der Baustelle provisorisch war, muss im fertigen Objekt in betrieblicher Brandschutzordnung, Feuerwehrplänen und Brandverhütungsschau wieder genehmigungskonform sein. Ohne schriftliche Übergabe entstehen Lücken – dauerhaft blockierte Fluchtwege oder veraltete Pläne sind typische Folgen.",
      "Hilfeleistung und Katastrophenschutz – kurz eingeordnet: Neben klassischem Brandschutz regelt das BHKG Hilfeleistung bei Unglücksfällen und Katastrophenschutz bei Großeinsatzlagen. Für Betriebe ist das vor allem Risikokontext: Stromausfall, Unwetter, Chemieunfall. Notfallpläne und Business Continuity ergänzen Brandschutzordnung und Arbeitsschutz, ohne dass jedes Unternehmen Katastrophenschutz plant. Alarmketten und Unterweisungen spiegeln die gesellschaftliche Hilfeleistungspflicht wider – siehe auch [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan].",
      "H2::Typische Mängel und Checkliste",
      "Vor Prüfungen sollten Dokumentation und Maßnahmenplan aktuell sein, Unterweisungen nachweisbar und Verantwortliche mit Fristen benannt. Die Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt gehört dazu.",
      "Praxis Köln und NRW: Klären Sie für jedes Objekt, was BauO, SBauV und Genehmigung verlangen, was die Brandverhütungsschau prüft und was Gefährdungsbeurteilung, Brandschutzordnung und Unterweisung regeln. Wo dieselbe Maßnahme auf mehreren Listen steht, setzen Sie sie einmal um – führen Sie aber Nachweise aus Genehmigung, Schau-Protokoll und Begehung getrennt. H&S+ vernetzt diese Ebenen für Bauherren und Betreiber – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau im Detail].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen BHKG und BauO NRW?",
        answer:
          "BauO NRW und SBauV regeln, wie gebaut und genehmigt wird – baulicher vorbeugender Brandschutz. Das BHKG regelt den öffentlichen Brandschutz: Feuerwehr, Brandverhütungsschau, Leitstelle, Einsatz. Beides gilt parallel; eine Baugenehmigung allein reicht nicht für den laufenden Betrieb.",
      },
      {
        question: "Ersetzt das BHKG den betrieblichen Brandschutz?",
        answer:
          "Nein. Arbeitgeberpflichten folgen aus ArbSchG und DGUV – Gefährdungsbeurteilung, Brandschutzordnung, Unterweisung, Brandschutzhelfer. Die Brandverhütungsschau prüft oft ähnliche Themen aus behördlicher Sicht; Ergebnisse gehören in GBU und BSO übernommen, nicht ignoriert.",
      },
      {
        question: "Was ist die Brandverhütungsschau?",
        answer:
          "Die Gemeinde führt sie ab Inbetriebnahme in Abständen von höchstens sechs Jahren durch (§ 26 BHKG). Sie prüft den brandschutztechnischen Zustand von Gebäuden und Betrieben – Rettungswege, Türen, Lager, technische Anlagen, Ordnung.",
      },
      {
        question: "Wie hängt SiGeKo mit dem BHKG zusammen?",
        answer:
          "SiGeKo koordiniert Brandschutz auf der Baustelle nach BaustellV. Das BHKG betrifft primär den fertigen Betrieb und die Feuerwehr. Wichtig ist die Übergabe: temporäre Baustellenmaßnahmen und dauerhafte Betriebspflichten sauber trennen und dokumentieren.",
      },
      {
        question: "Muss jede Brandmeldeanlage an die Leitstelle melden?",
        answer:
          "Selbsttätige Brandmeldeanlagen in genehmigungspflichtigen Objekten müssen Meldungen in der Regel unmittelbar an die einheitliche Leitstelle weiterleiten – technisch über BauO/SBauV, rechtlich über § 28 BHKG. Wartung und Störungsmanagement obliegen dem Betreiber.",
      },
      {
        question: "Wie geht es in der BHKG-Serie weiter?",
        answer:
          "Nach diesem Überblick vertiefen wir Brandverhütungsschau (§ 26), BMA und Leitstelle (§ 28) sowie Brandsicherheitswache bei Veranstaltungen (§ 27) – jeweils als eigener Blogbeitrag mit Praxisbezug Köln und NRW.",
      },
    ],
  },
  {
    slug: "brandverhuetungsschau-bhkg-nrw",
    title: "Brandverhütungsschau nach BHKG NRW – Ablauf, Pflichten und Übergang zu GBU & BSO",
    excerpt:
      "Brandverhütungsschau § 26 BHKG NRW: Wer prüft, wie oft (max. 6 Jahre), typische Mängel, Vorbereitung mit BSB/Facility und Überführung in Gefährdungsbeurteilung und Brandschutzordnung – praxisnah für Köln & NRW.",
    date: "2025-07-22",
    dateModified: "2026-05-26",
    content: [
      "Nach der SBauV-Serie endet die bauliche Einordnung bei § 150 – im laufenden Betrieb kommt eine zweite, oft unterschätzte Prüfebene hinzu: die Brandverhütungsschau nach § 26 BHKG NRW. Sie ist keine Genehmigung und kein Ersatz für betrieblichen Brandschutz, aber der wichtigste Schnittpunkt zwischen Feuerwehr/Gemeinde und Ihrem Gebäudebetrieb. Dieser Artikel erklärt Ablauf, Pflichten und den sauberen Übergang in Gefährdungsbeurteilung und Brandschutzordnung; Überblick zu allen Ebenen: [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt].",
      "H2::Was gilt rechtlich?",
      "Die Brandverhütungsschau nach § 26 BHKG verpflichtet die Gemeinde, Gebäude, Betriebe und Einrichtungen mit erhöhter Brand- oder Explosionsgefahr oder großer Personen- bzw. Sachwertgefährdung brandschutztechnisch zu überprüfen. Ziel: brandschutztechnische Mängel und Gefahrenquellen feststellen und Maßnahmen veranlassen, die Brände verhindern, Feuer- und Rauchfortpflanzung begrenzen und im Ernstfall Rettung, Löschung und Schutz von Sachwerten ermöglichen. Andere Rechtsvorschriften (BauO, ArbSchG) bleiben unberührt – die Schau ergänzt sie aus behördlicher Sicht.",
      "Die Schau ist Aufgabe der Gemeinde (Brandschutzdienststelle). Sie wird von Personen mit Gruppenführerausbildung und Qualifikation als Brandschutztechnikerin oder -techniker durchgeführt – nachweisbar über den Lehrgang an der zentralen Aus- und Fortbildungsstätte des Landes NRW oder vergleichbarer Einrichtung. Kreisangehörige Gemeinden können die Aufgabe per Gemeinschaftsarbeit auf den Kreis übertragen. Der Feuerwehr ist Teilnahme zu geben; die Gemeinde wird über Ergebnis und Mängelbeseitigung unterrichtet. Für Sie als Betreiber, Eigentümer oder Facility heißt das: Sie stellen Zugang, Unterlagen und Ansprechpartner bereit und setzen veranlasste Maßnahmen um – nicht die Feuerwehr im Betrieb.",
      "Rhythmus: Ab Nutzung oder Inbetriebnahme, je nach Gefährdungsgrad in Abständen von längstens sechs Jahren. Sonderbauten nach [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|SBauV] (Versammlungsstätten, Hotels, Verkaufsflächen, Hochhäuser, Garagen …) sind praktisch immer schau-relevant; auch viele Gewerbe- und Produktionsobjekte ohne Sonderbau-Status. Terminplanung liegt bei der Gemeinde – wer erst bei der Ankündigung reagiert, verliert Vorbereitungszeit.",
      "Typische Prüfthemen in der Schau sind unter anderem Rettungswege und Fluchtwegtüren, Feuerschutzabschlüsse und Brandabschnitte, Lagerung brennbarer Stoffe in Fluren, Ordnung und Brandlasten, technische Anlagen wie Brandmeldeanlage, Rauchabzug, Sprinkler und Sicherheitsbeleuchtung im tatsächlichen Betriebszustand sowie Beschilderung und Abgleich mit Genehmigung und [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis]. Vieles davon kennen Sie aus interner Begehung oder Versicherer-Audit – die Schau bewertet es aus feuerwehrtechnischer und behördlicher Sicht, nicht allein aus Arbeitsschutzrecht.",
      "Ablauf in der Praxis – von der Ankündigung bis zum Protokoll: Zuerst kündigt die Gemeinde den Termin an – an Betreiber, ggf. Hausverwaltung oder Facility-Management. Zur Vorbereitung legen Sie Schlüssel für Technikräume bereit sowie Genehmigungsunterlagen, Brandschutzordnung, Feuerwehrplan und Wartungsnachweise für Brandmeldeanlage und Sprinkler. Bei der Begehung sind Betriebsleitung, [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] und Facility idealerweise dabei; oft nimmt auch die Feuerwehr teil. Das Protokoll mit Mängeln und Fristen geht an die Gemeinde, Betroffene erhalten Auflagen zur Beseitigung. Bei schwerwiegenden Mängeln folgt eine Nachkontrolle – Fristen ernst nehmen, sonst drohen Ordnungswidrigkeiten und Versicherungsfolgen.",
      "Brandverhütungsschau ist nicht dasselbe wie andere Pflichten – zur Einordnung: Die Schau ersetzt weder die Baugenehmigung noch die Bauordnung NRW. Sie prüft, wie das Gebäude heute betrieben wird, nicht ob die Planung damals korrekt war.",
      "Sie ersetzt auch nicht die Gefährdungsbeurteilung nach dem Arbeitsschutzgesetz. Dort bewertet der Arbeitgeber, welche Gefahren für Beschäftigte bestehen. Mängel aus der Brandverhütungsschau – etwa eine mit einem Keil offen gehaltene Brandschutztür – müssen Sie zusätzlich in der Gefährdungsbeurteilung aufnehmen.",
      "H2::Umsetzung in der Praxis",
      "Die Brandschutzordnung nach DIN 14096 ist Ihr organisatorischer Betriebsplan für den Brandfall. Ergebnisse aus der Schau gehören in Teil B (Verhalten aller Beschäftigten) und Teil C (Aufgaben für Einsatzkräfte) übernommen und bei Bedarf fortgeschrieben.",
      "Begehungen von Versicherer oder Berufsgenossenschaft laufen oft parallel zur Brandverhütungsschau. Führen Sie deshalb eine gemeinsame Maßnahmenliste – damit dieselben Mängel nicht doppelt bearbeitet werden und widersprüchliche Auflagen nicht untergehen.",
      "Während der Bauphase koordiniert der Sicherheits- und Gesundheitsschutzkoordinator (SiGeKo) temporäre Gefahren auf der Baustelle. Nach der Übergabe übernimmt der Betrieb. Die Brandverhütungsschau prüft das fertige Objekt – mehr dazu im [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      "Übergang in Gefährdungsbeurteilung und Brandschutzordnung – so vermeiden Sie Doppelarbeit: Legen Sie eine zentrale Maßnahmenliste an. Notieren Sie für jeden Mangel, woher er stammt (Brandverhütungsschau, Versicherer, interne Begehung), welche Maßnahme nötig ist, wer verantwortlich ist und bis wann sie erledigt sein soll.",
      "Ordnen Sie jeden Punkt zu: Braucht es einen Umbau oder eine Genehmigung, reicht eine organisatorische Regelung oder Unterweisung, oder sind beides nötig. Bei baulichen Themen stimmen Sie sich mit Bauaufsicht und Genehmigungsunterlagen ab ([Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber]). Bei organisatorischen Punkten schreiben Sie die Brandschutzordnung fort, prüfen [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungspläne] und ergänzen Unterweisungen. Der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] koordiniert – gemeinsam mit der Fachkraft für Arbeitssicherheit und im Arbeitsschutzausschuss.",
      "Häufige Mängel aus Schauen und sinnvolle Reaktionen: Gekeilte oder dauerhaft offen stehende Brandschutztüren sollten Sie sofort beseitigen und in Hausordnung sowie Begehungsplan verankern. Lager in Fluren und Treppen räumen, ein Lagerkonzept festlegen und regelmäßig kontrollieren. Fehlende oder veraltete Fluchtwegpläne nach ASR A2.3 neu aushängen und in der Brandschutzordnung verankern. Störungen an der Brandmeldeanlage oder fehlende Wartung über Wartungsvertrag und Störungsbuch lösen – siehe [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|Blog BMA und Leitstelle]. Fehlende Unterweisung neuer Beschäftigter ist unabhängig von der Schau eine Pflicht nach dem Arbeitsschutzgesetz. Nutzungsänderungen ohne Genehmigung klären Sie zuerst bauordnungsrechtlich, bevor die nächste Schau ansteht.",
      "Vor dem Termin sollten Genehmigung, Brandschutzkonzept und das letzte Schau-Protokoll bereitliegen. Technikräume, Brandmelderzentrale, Sprinkler-Ventile und Sicherheitsstromversorgung müssen zugänglich sein. Benennen Sie Ansprechpartner für Brandschutzbeauftragten, Facility und Hausmeister inklusive Vertretung. Schließen Sie Mängel aus interner Begehung vorab, soweit ohne Umbau möglich. Bei Mietobjekten klären Sie schriftlich, wer Eigentümer, Verwalter und Nutzer welche Auflagen umsetzt.",
      "Praxis Köln und NRW: In Großstädten wie Köln laufen Schauen für Sonderbauten, Krankenhäuser, Hochhäuser und größere Gewerbeobjekte planmäßig; kleinere Betriebe werden nach Gefährdung eingeteilt. Frühzeitig Kontakt zur Brandschutzdienststelle lohnt sich bei Neueröffnung, Umbau oder wenn die letzte Schau unbekannt ist. H&S+ bereitet Begehungen vor, vernetzt Schau-Ergebnisse mit BSO, GBU und Genehmigungsunterlagen – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt], [Link: /kontakt|Kostenlose Erstberatung]. Vertiefung: [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle], [Link: /wissen/blog/brandsicherheitswache-bhkg-nrw|Brandsicherheitswache].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was ist die Brandverhütungsschau nach BHKG?",
        answer:
          "Eine brandschutztechnische Überprüfung von Gebäuden und Betrieben durch die Gemeinde nach § 26 BHKG NRW. Sie soll Mängel feststellen und Maßnahmen gegen Brandentstehung, Rauchausbreitung und für Rettung/Löschung veranlassen – ergänzend zu BauO, SBauV und Arbeitsschutz.",
      },
      {
        question: "Wie oft muss die Brandverhütungsschau stattfinden?",
        answer:
          "Ab Nutzung oder Inbetriebnahme in Abständen von höchstens sechs Jahren, abhängig vom Gefährdungsgrad. Der Rhythmus wird von der Gemeinde festgelegt; Sonderbauten und gefährdungsreiche Betriebe sind regelmäßig betroffen.",
      },
      {
        question: "Wer ist für Mängel aus der Schau verantwortlich?",
        answer:
          "Die Gemeinde führt die Schau durch und veranlasst Maßnahmen. Umsetzen müssen Eigentümer, Betreiber oder Nutzer – je nach Vertrag und Zuständigkeit. Intern sollten BSB, Facility und Geschäftsführung eine Maßnahmenliste führen und Fristen einhalten.",
      },
      {
        question: "Ersetzt die Brandverhütungsschau GBU und BSO?",
        answer:
          "Nein. GBU und BSO folgen aus ArbSchG und betrieblicher Organisation. Inhaltlich überschneiden sich Themen oft (Flure, Türen, Lager, BMA) – Ergebnisse der Schau sollten Sie in GBU und BSO übernehmen, nicht ignorieren oder doppelt getrennt bearbeiten ohne Abgleich.",
      },
      {
        question: "Wie hängt die Schau mit der SBauV zusammen?",
        answer:
          "SBauV und BauO regeln Bau und Genehmigung; die Brandverhütungsschau prüft im Betrieb, ob Genehmigung und IST übereinstimmen. Nach [Link: /wissen/blog/sonderbauverordnung-teil-7-schlussvorschriften|SBauV Teil 7] ist die BV-Schau der logische nächste Schritt für laufende Sonderbauten.",
      },
    ],
  },
  {
    slug: "bma-leitstelle-bhkg-nrw",
    title: "BMA und Leitstelle in NRW – Brandmeldeanlage, Aufschaltung und Betrieb nach BHKG",
    excerpt:
      "Brandmeldeanlage und einheitliche Leitstelle § 28 BHKG NRW: Aufschaltung, Fehlalarme, Wartung, BSO Teil C und Schnittstelle SBauV/BauO – praxisnah für Betreiber in Köln & NRW.",
    date: "2025-07-29",
    dateModified: "2026-05-26",
    content: [
      "Wer eine Brandmeldeanlage plant oder betreibt, denkt oft nur an Genehmigung und Wartungsvertrag. Entscheidend ist aber die Einsatzkette: Melder melden an die Brandmelderzentrale, diese leitet an die einheitliche Leitstelle weiter, von dort alarmiert die Feuerwehr. Das verbindet bauordnungsrechtliche Technik mit dem BHKG NRW. Dieser Artikel erklärt Pflichten, typische Störungen und die Einbindung in Brandschutzordnung und Betrieb – ergänzend zum [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Blog Brandverhütungsschau] und [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt].",
      "H2::Was gilt rechtlich?",
      "Was regelt was? Art und Umfang der Brandmeldeanlage folgen aus Bauordnung NRW, Sonderbauverordnung und dem genehmigten [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis]. Die Weiterleitung von Brandmeldungen an die Feuerwehr-Infrastruktur regelt § 28 BHKG: Kreise unterhalten die einheitliche Leitstelle für Brandschutz, Hilfeleistung, Katastrophenschutz und Rettungsdienst. Selbsttätige Anlagen in Sonderbauten und vielen Gewerbeobjekten müssen Meldungen von der Brandmelderzentrale unmittelbar und automatisch dorthin übertragen – in der Sonderbauverordnung ausdrücklich etwa bei Versammlungsstätten ab 1.000 m², Beherbergung ab 60 Betten, Verkaufsstätten, Hochhäusern und geschlossenen Garagen ([Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|Teil 1] bis [Link: /wissen/blog/sonderbauverordnung-teil-5-garagen|Teil 5]).",
      "Die einheitliche Leitstelle nach § 28 BHKG ist ständig besetzt und bündelt Brandschutz, Hilfeleistung und Katastrophenschutz mit der Rettungsdienst-Leitstelle. Sie muss auch Großeinsatzlagen bewältigen können; Ausfallkonzepte sind vorgesehen. Notruf 112 ist auf diese Leitstelle aufzuschalten. Das ist die öffentliche Infrastruktur, an die Ihre Brandmeldeanlage andockt – nicht Ihre interne Telefonliste.",
      "Aufbau einer Brandmeldeanlage – was Betreiber wissen sollten: Automatische Melder und Handfeuermelder erfassen Brandereignisse. Die Brandmelderzentrale wertet aus, alarmiert das Gebäude und steuert ggf. Rauchabzug, Aufzugs-Rückruf oder Sprinkler-Voralarm. Zonenpläne und Melderlisten müssen zum tatsächlichen Betrieb passen – jede Nutzungsänderung ohne Anpassung erhöht das Risiko für Fehlalarme. Die [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau] prüft genau diesen Abgleich.",
      "Pflichten des Betreibers bei Aufschaltung und Betrieb: Sorgen Sie für fachgerechte Installation und Abnahme nach Genehmigung. Schließen Sie einen Wartungsvertrag mit einem anerkannten Fachbetrieb ab und führen Sie ein Störungsbuch. Regeln Sie, wer die Brandmelderzentrale besetzt, wer im Störfall die Leitstelle oder Feuerwehr informiert und wie mit Fehlalarmen umgegangen wird. Probealarme nur mit Abstimmung von Wartungsfirma und – je nach Aufschaltung – Leitstelle oder Feuerwehr. Bei Baumaßnahmen: Abschaltung, Brandwache oder temporäre Melder mit SiGeKo und Bauherr abstimmen ([Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber]).",
      "Fehlalarme vermeiden: In Versammlungsstätten verlangt die Sonderbauverordnung technische Maßnahmen gegen Falschalarme. In der Praxis sind Staub bei Bauarbeiten, Dampf aus Küchen oder falsch gewählte Melder häufige Ursachen. Jeder Fehlalarm belastet Leitstelle und Feuerwehr – wiederholte Fälle führen zu Auflagen und Kosten. Analysieren Sie die Ursache, passen Sie Melder an und schulen Sie das Personal (kein Rauchen unter Meldern, keine Heißarbeit ohne Freigabe).",
      "H2::Umsetzung in der Praxis",
      "Störung und Ausfall – was in der Brandschutzordnung stehen sollte: Legen Sie fest, wer bei Störungen der Brandmelderzentrale informiert wird, ob und wann die Feuerwehr bei dauerhafter Aufschaltungsstörung benachrichtigt wird und wie im Brandfall bei ausgefallener Anlage geräumt und 112 gewählt wird. Regeln Sie Vertretungen außerhalb der Geschäftszeiten und Reaktionszeiten des Wartungsdienstes. Das gehört in [Link: /wissen/blog/brandschutzordnung-din-14096|Teil C der Brandschutzordnung] und in den Alarmplan – nicht nur in den Wartungsvertrag.",
      "Nicht jede Meldeanlage ist eine Brandmeldeanlage im genehmigungsrechtlichen Sinn: Rauchwarnmelder in Wohnungen melden nicht an die Leitstelle. Einfache Hausalarmanlagen ohne Aufschaltung ersetzen keine genehmigungspflichtige Anlage. Bei Mietobjekten klären Sie vertraglich, wer Wartung, Störungsmanagement und Fortschreibung der Brandschutzordnung verantwortet.",
      "Rollen im Betrieb: Der Brandschutzbeauftragte koordiniert organisatorisch, Facility oder Technik betreiben die Anlage, die Geschäftsführung stellt Ressourcen bereit. Stimmen Sie Probealarme mit der Leitstelle ab – unangekündigte Tests können echte Feuerwehreinsätze auslösen. Nach jeder Übung oder jedem Fehlalarm: Protokoll führen und Maßnahmenliste pflegen.",
      "In der Brandverhütungsschau prüfen Brandschutztechniker oft Zugang zur Brandmelderzentrale, sichtbare Melder, Beschilderung und Betriebsbuch. Bündeln Sie Mängel aus Schau und Wartungsprotokoll in einer Liste – die Wartungsfirma allein entbindet Sie nicht von der Betreiberpflicht.",
      "H2::Typische Mängel und Vorbereitung",
      "Betreiber sollten vor Prüfungen klären, ob BMA an die richtige Leitstelle aufgeschaltet ist, Wartungsverträge aktuell sind und Evakuierungsorganisation zur Alarmkette passt – Störungen dürfen nicht dauerhaft quittiert werden.",
      "Praxis Köln und NRW: Zuverlässige Aufschaltung und sauberes Fehlalarm-Management sind Pflicht. Planen Sie bei Neubau oder Nutzungsänderung die Brandmeldeanlage früh mit Genehmigung, Elektro, Sprinkler und Leitstellen-Anbindung. H&S+ unterstützt bei Konzept und Betrieb – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt], [Link: /kontakt|Kostenlose Erstberatung]. Vertiefung: [Link: /wissen/blog/brandsicherheitswache-bhkg-nrw|Brandsicherheitswache bei Veranstaltungen].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt BHKG in NRW?",
        answer:
          "Brand- und Katastrophenschutzgesetz NRW – u. a. Organisation Feuerwehr, Leitstellen, Zusammenarbeit mit Betreibern bei BMA und Gefahrenabwehr.",
      },
      {
        question: "Was muss der Betreiber tun?",
        answer:
          "BMA fachgerecht planen, warten, Leitstellenanschluss sicherstellen, Störungsmanagement, Übungen, Schnittstelle zum [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|BSB].",
      },
      {
        question: "Typische Mängel?",
        answer:
          "BMA-Störung dauerhaft, falscher Leitstellenanschluss nach Umbau, Wartung überfällig, BSO widerspricht Alarmkonzept.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/vorbeugender-brandschutz-massnahmen|vorbeugender Brandschutz], [Link: /wissen/blog/brandschutzordnung-din-14096|BSO] und [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber].",
      },
    ],
  },
  {
    slug: "brandsicherheitswache-bhkg-nrw",
    title: "Brandsicherheitswache nach BHKG NRW – Veranstaltungen, Anzeige und Auflagen",
    excerpt:
      "Brandsicherheitswache § 27 BHKG NRW: Anzeige bei Veranstaltungen, Auflagen der Gemeinde, Feuerwehr vs. eigene Kräfte – Verbindung zu SBauV Versammlungsstätten und BSO.",
    date: "2025-08-05",
    dateModified: "2026-05-26",
    content: [
      "Konzert, Messe, Sportevent oder Firmenfeier mit Pyrotechnik: Sobald viele Menschen zusammenkommen und die Brandgefahr steigt, greift § 27 BHKG NRW – neben Sonderbauverordnung und betrieblicher Brandschutzordnung. Veranstaltungen mit erhöhter Brandgefahr müssen der Gemeinde rechtzeitig angezeigt werden. Dieser Artikel erklärt Pflichten und Ablauf; Überblick: [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt], Einsatzkette im Dauerbetrieb: [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle].",
      "H2::Was gilt rechtlich?",
      "Die Brandsicherheitswache ist die organisatorische und personelle Brandbekämpfung bei Veranstaltungen – durch die Feuerwehr oder durch anerkannte Kräfte, die die Gemeinde dem Veranstalter übertragen kann. Angehörige der Wache können Anordnungen treffen, um Brände zu verhüten, zu bekämpfen und Rettungswege zu sichern. Das ist mehr als ein Sicherheitsdienst am Einlass: es erfordert feuerwehrtechnische Qualifikation und Befugnisse im Brandfall.",
      "Nach § 27 BHKG ist eine Anzeige nötig, wenn bei einer Veranstaltung erhöhte Brandgefahr besteht und im Brandfall viele Personen gefährdet sein können. Die Veranstaltung ist der Gemeinde rechtzeitig anzuzeigen; die Gemeinde entscheidet über eine Brandsicherheitswache und kann Auflagen erteilen. Baurechtliche Vorschriften bleiben unberührt – Sonderbauverordnung, Genehmigung und Brandschutzordnung gelten parallel.",
      "Stellt die Veranstalterin oder der Veranstalter eine den Anforderungen genügende Brandsicherheitswache, hat die Gemeinde ihr oder ihm diese Aufgabe zu übertragen. In allen anderen Fällen stellt die Gemeinde die Wache (Feuerwehr oder beauftragte Kräfte). Kosten und Kapazität spielen praktisch eine Rolle – früh anfragen spart Terminrisiken.",
      "In genehmigten Versammlungsstätten regelt die Sonderbauverordnung Brandsicherheitswachen zusätzlich – etwa bei Großbühnen, erhöhter Brandgefahr oder sehr großen Besucherzahlen ([Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|SBauV Teil 1]). Pyrotechnik nur nach Abstimmung mit der Brandschutzdienststelle, Rettungswege dauerhaft freihalten und eine Brandschutzordnung führen – das ergänzt § 27 BHKG zu einem Gesamtkonzept für die Behörde.",
      "Typische Fälle, in denen eine Brandsicherheitswache nötig wird, sind folgende. Open-Air-Konzerte mit Pyrotechnik, Messen mit Heißarbeit auf Ständen, Sportevents mit großen Zuschauermengen, temporäre Bühnen und Zelte (auch auf Baustellen – siehe [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo]), Firmenevents mit Feuerwerk oder Gastspiele in fremden Versammlungsstätten ([Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|SBauV Teil 1]).",
      "H2::Umsetzung in der Praxis",
      "Ablauf von der Planung bis zur Veranstaltung: Klären Sie früh, ob § 27 BHKG oder Sonderbau-Betriebspflichten greifen. Reichen Sie rechtzeitig eine Anzeige mit Konzept bei der Gemeinde ein – mit Art und Dauer der Veranstaltung, Personenzahl, Pyrotechnik, Rettungswegen und Alarmierung. Die Behörde entscheidet über Wache, Stärke und Auflagen. Stimmen Sie sich mit Betreiber der Stätte, Brandschutzbeauftragtem und Facility ab. Unterweisen Sie Veranstaltungspersonal und halten Sie Rollen im Brandfall schriftlich fest. Nach dem Event protokollieren Sie Mängel und aktualisieren Sie das Konzept für künftige Termine.",
      "Ein Veranstaltungskonzept sollte mindestens enthalten: zulässige Personenzahl laut Genehmigung, freie Rettungswege, Brandlasten durch Dekoration und Aufbau, geplante Heißarbeit und Pyrotechnik, Löschmittel, Alarmierung und Räumung, Sammelstellen sowie Ansprechpartner für Veranstalter, Wache und Technik.",
      "Abgrenzung zum Dauerbetrieb: Der [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragte] organisiert den laufenden Betrieb; die Brandsicherheitswache gilt nur für die Veranstaltung und erfordert feuerwehrtechnische Qualifikation. Die Brandschutzordnung muss den Veranstaltungsmodus abbilden – etwa geänderte Wege durch Stände. Nach dem Abbau muss der genehmigte Zustand wiederhergestellt sein – relevant auch für die [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau].",
      "SiGeKo koordiniert Gefahren auf der Baustelle; eine Veranstaltung dort kann zusätzlich § 27 BHKG auslösen. SiGeKo ersetzt keine Anzeige an die Gemeinde – regeln Sie Übergabe und Verantwortlichkeiten schriftlich.",
      "Häufige Fehler: zu späte Anzeige, unvollständiges Konzept ohne Pyrotechnik-Details, blockierte Rettungswege durch Aufbau, fehlende Abstimmung mit Hausmeister oder Brandmelderzentrale, selbst gestellte Wache ohne behördliche Anerkennung. Folgen können Auflagen, Verbot oder – im Ernstfall – Personengefährdung sein.",
      "H2::Typische Mängel und Checkliste",
      "Vor dem Event sollten Veranstaltungskonzept, Anzeige bei der Gemeinde, Rettungswege und Abstimmung mit Betreiber, Brandschutzbeauftragtem und Facility schriftlich geklärt sein – inklusive Rollen im Brandfall und Ansprechpartner für die Wache.",
      "In Köln und NRW gilt in der Praxis Folgendes. Große Städte haben etablierte Verfahren für Events (Ansprechpartner Brandschutzdienststelle, Fristen, Kosten). Planen Sie bei Events über 1.000 Personen oder mit Sonderbrandgefahr mehrere Wochen Vorlauf ein. H&S+ unterstützt bei Konzept, BSO, Schnittstellen Genehmigung/Event – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt], [Link: /kontakt|Kostenlose Erstberatung]. BHKG-Serie: [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau], [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wann muss ich eine Veranstaltung nach § 27 BHKG anzeigen?",
        answer:
          "Wenn erhöhte Brandgefahr besteht und im Brandfall viele Personen gefährdet sein können – rechtzeitig vor der Veranstaltung an die Gemeinde. Im Zweifel anfragen; bei Versammlungsstätten und Großevents gelten zusätzlich SBauV-Betriebspflichten.",
      },
      {
        question: "Kann ich die Brandsicherheitswache selbst stellen?",
        answer:
          "Nur wenn die Kräfte den Anforderungen genügen und die Gemeinde die Aufgabe überträgt. Andernfalls stellt die Gemeinde die Wache – in der Regel über die Feuerwehr oder anerkannte Organisationen.",
      },
      {
        question: "Ersetzt die Brandsicherheitswache die BSO?",
        answer:
          "Nein. BSO und Genehmigung gelten weiter. Die Wache ergänzt das Konzept für die konkrete Veranstaltung – Abstimmung mit BSB, Betreiber und Behörde ist Pflicht.",
      },
      {
        question: "Was hat das mit SBauV Teil 1 zu tun?",
        answer:
          "Versammlungsstätten haben detaillierte Betriebspflichten zu Wachen, Pyrotechnik und Großveranstaltungen (§§ 35, 41, 42 SBauV). § 27 BHKG ist die übergeordnete kommunale Regel – beide Ebenen parallel beachten.",
      },
      {
        question: "Welche Fristen gelten in Köln und NRW?",
        answer:
          "Das Gesetz verlangt rechtzeitige Anzeige – konkrete Fristen regeln Kommunen in der Praxis (oft Wochen bis Monate bei Großevents). Frühzeitig die zuständige Brandschutzdienststelle kontaktieren.",
      },
    ],
  },
  // BauPrüfVO-Serie: wöchentlich dienstags ab 2025-08-12
  {
    slug: "baupruefvo-nrw-einfach-erklaert",
    title: "BauPrüfVO NRW einfach erklärt – Bauvorlagen, Nachweise und Prüfingenieur",
    excerpt:
      "Verordnung über bautechnische Prüfungen (BauPrüfVO): Bauvorlagen §§ 1–20, Nachweise inkl. Brandschutzkonzept § 9, Prüfingenieur Brandschutz §§ 21–28 – verständlich für Bauherren und Planer in NRW.",
    date: "2025-08-12",
    dateModified: "2026-05-26",
    content: [
      "Wer in NRW ein größeres Bauprojekt genehmigen lassen muss, kennt die Bauordnung und oft auch die Sonderbauverordnung. Weniger bekannt ist die Verordnung über bautechnische Prüfungen – kurz BauPrüfVO. Sie regelt nicht, wie sicher ein Gebäude sein muss (das steht in der BauO NRW), sondern welche Unterlagen Sie einreichen müssen und wer statische und brandschutztechnische Nachweise prüft. Stand der Verordnung: 26. November 2024. Dieser Artikel ist der Einstieg in unsere BauPrüfVO-Serie; vertiefende Übersicht zum baulichen Brandschutz: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz], zur Gesetzeslogik der BauO: [Link: /wissen/blog/bauordnung-nrw-einfach-erklaert|Blog BauO NRW einfach erklärt].",
      "H2::Was gilt rechtlich?",
      "Die BauPrüfVO gliedert sich in vier Teile. Der erste Teil (§§ 1–20) beschreibt Bauvorlagen und bautechnische Nachweise für unterschiedliche Genehmigungsverfahren – vom vereinfachten Verfahren über den regulären Bauantrag bis zu Vorbescheid, Typengenehmigung oder Fliegende Bauten. Der zweite Teil (§§ 21–29) regelt Prüfämter, anerkannte Prüfingenieurinnen und Prüfingenieure sowie die Erteilung und Ausführung von Prüfaufträgen. Der dritte Teil (§ 30) betrifft Zuständigkeiten bei Fliegenden Bauten; der vierte Teil enthält Schlussvorschriften. In der Praxis sind für Bauherren und Planer vor allem Teil 1 zur Einreichung von Bauvorlagen und Teil 2 zur Prüfung durch Prüfingenieure relevant.",
      "Bauvorlagen sind mehr als der Architektenplan. Nach § 1 BauPrüfVO i. V. M. § 70 BauO NRW gehören dazu unter anderem Auszüge aus dem Liegenschaftskataster, Lageplan, Bauzeichnungen, Baubeschreibung (bei Gewerbe- oder Landwirtschaftsbetrieben auch Betriebsbeschreibung), Berechnungen zur Kostenermittlung sowie – je nach Vorhaben – die bautechnischen Nachweise. Für viele Vordrucke verweist die Verordnung auf die Sammlung des Ministerialblatts (Gliederungsnummer 23210). Wer ohne vollständige Bauvorlagen beim Bauamt ankommt, verliert Zeit – unabhängig davon, wie gut die Planungsidee ist.",
      "Im zweiten Abschnitt des ersten Teils trennt die BauPrüfVO formale Bauvorlagen von bautechnischen Nachweisen. Drei Bausteine sind brandschutztechnisch besonders wichtig: die Übereinstimmungserklärung (§ 7), die Nachweise der Standsicherheit und des Schallschutzes (§ 8) und das Brandschutzkonzept (§ 9). Ergänzend kommt bei barrierefreien Anforderungen das Barrierefrei-Konzept (§ 9a). Die Übereinstimmungserklärung klingt technisch, ist aber zentral: Reichen Sie Unterlagen zu unterschiedlichen Zeitpunkten ein oder ändern Sie Pläne während des Verfahrens, müssen Entwurfsverfassende erklären, dass die Bauvorlagen bezüglich Planungs- und Bearbeitungsstand übereinstimmen. Widersprüche zwischen Statik, Architektur und Brandschutz sind ein klassischer Genehmigungsstopp – die Erklärung zwingt zur Synchronisation.",
      "Nach § 9 BauPrüfVO umfasst das Brandschutzkonzept Folgendes. Das Gesetz definiert es als zielorientierte Gesamtbewertung des baulichen und abwehrenden Brandschutzes bei Sonderbauten durch den in § 54 Absatz 3 BauO NRW bestimmten Personenkreis. Das Konzept muss unter anderem Feuerwehrzufahrten und Aufstellflächen, Löschwasser und Hydranten, Brandabschnitte und Rauchabschnitte, Rettungswege, Nutzerzahlen und Evakuierung, haustechnische Anlagen, Rauch- und Wärmeabzug, Brandmeldeanlagen, Löschanlagen, Sicherheitsstromversorgung, Feuerwehrpläne sowie betriebliche Maßnahmen zur Brandverhütung und -bekämpfung beschreiben. Das ist deutlich mehr als ein Fluchtwegplan – es verbindet Genehmigung und späteren Betrieb. Vertiefung gilt Folgendes. [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|Blog § 9 Brandschutzkonzept]; Praxisüberblick: [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept erstellen].",
      "Welches Genehmigungsverfahren welche Vorlagen erfordert, regelt § 10 BauPrüfVO für das vereinfachte Baugenehmigungsverfahren und die referenzielle Baugenehmigung – hier reicht ein schlankerer Satz an Unterlagen, wobei bautechnische Nachweise nach § 68 BauO NRW spätestens mit Baubeginn nachgereicht werden können. § 11 listet die Bauvorlagen für das reguläre Baugenehmigungsverfahren. § 12 verlangt für besondere Vorhaben zusätzliche Angaben – etwa Gastbetten bei Beherbergungsstätten, Verkaufsflächen bei Verkaufsstätten oder Angaben zu elektrischen Betriebsräumen nach SBauV. Wer Sonderbauten plant, sollte SBauV und BauPrüfVO parallel lesen: [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|SBauV Teil 1] bis [Link: /wissen/blog/sonderbauverordnung-teil-7-schlussvorschriften|Teil 7].",
      "H2::Umsetzung in der Praxis",
      "Zweiter Teil – Prüfingenieur und Prüfamt: Die oberste Bauaufsichtsbehörde bestimmt Prüfämter für Baustatik (§ 21). Sie prüfen unter anderem Typenprüfungen, schwierige statische Berechnungen und besondere Bauvorhaben wie Fliegende Bauten. Für Brandschutz gibt es anerkannte Prüfingenieurinnen und Prüfingenieure – sie dürfen die Bezeichnung nur führen, wenn sie anerkannt sind (§§ 22–26 regeln Umfang, Voraussetzungen, Anerkennung und Erlöschen). Prüfämter und Prüfingenieure unterstehen der Fachaufsicht der obersten Bauaufsichtsbehörde. Das schafft Vertrauen in die Nachweise, die dem Bauamt vorgelegt werden.",
      "Prüfaufträge (§§ 27–28): Die untere Bauaufsichtsbehörde kann die Prüfung von Standsicherheitsnachweisen, brandverhalten-relevanten Nachweisen tragender Bauteile und Schallschutz einem Prüfamt oder Prüfingenieur für Baustatik übertragen. Die Prüfung der Übereinstimmung mit den Brandschutzvorschriften kann ganz oder teilweise einer Prüfingenieurin oder einem Prüfingenieur für Brandschutz übertragen werden. Der Prüfauftrag wird von der unteren Bauaufsichtsbehörde erteilt – Brandschutz nur an anerkannte Prüfingenieurinnen oder Prüfingenieure für Brandschutz, Statik nur an anerkannte Prüfingenieurinnen oder Prüfingenieure für Baustatik in der jeweiligen Fachrichtung. Auf die Erteilung besteht kein Rechtsanspruch; abgelehnt werden darf nur aus zwingenden Gründen. Prüfingenieurinnen und Prüfingenieure arbeiten unparteiisch und dokumentieren in einem Prüfbericht Vollständigkeit und Richtigkeit – mit Hinweisen für Genehmigung, Bauüberwachung und Gebrauchsabnahme.",
      "Abgrenzung der Zuständigkeiten: Die BauO NRW legt die Anforderungen fest. Entwurfsverfassende und Fachplaner erstellen Bauvorlagen und Nachweise. Prüfingenieurinnen und Prüfingenieure prüfen diese Nachweise im Auftrag der Bauaufsicht. Die Bauaufsichtsbehörde entscheidet über die Baugenehmigung. Im Betrieb kommen betrieblicher Brandschutz ([Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz]), die PrüfVO NRW für technische Anlagen ([Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO einfach erklärt]) und die Brandverhütungsschau nach BHKG ([Link: /wissen/blog/bhkg-nrw-einfach-erklaert|BHKG NRW]) hinzu – sie ersetzen weder Konzept noch Prüfbericht, prüfen aber, ob Genehmigung und IST-Zustand zusammenpassen. Auf der Baustelle koordiniert der SiGeKo die Arbeitssicherheit mehrerer Unternehmen ([Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber]) – ohne die genehmigten brandschutztechnischen Vorgaben außer Kraft zu setzen.",
      "In der Praxis treten häufig folgende Fehler auf. Prüfingenieur Brandschutz erst nach Monaten Planungsarbeit beauftragen. Brandschutzkonzept ohne betriebliches Kapitel. Statik und Brandschutz widersprechen sich in Abschnittsbildung oder Deckenöffnungen. Bauvorlagen werden stückweise eingereicht ohne aktualisierte Übereinstimmungserklärung. Nach Genehmigung wird umgebaut, ohne Nachweise und Konzept nachzuziehen. Jeder dieser Fehler kostet Geld und Verzögerung – manchmal endet er in Baustopp oder Auflagen im laufenden Betrieb.",
      "Für Bauherren und Projektsteuerung empfiehlt sich folgende Selbstkontrolle. Früh klären, welches Genehmigungsverfahren gilt und welche BauPrüfVO-Paragraphen (§§ 10–13) relevant sind. Prüfen, ob ein Brandschutzkonzept nach § 9 nötig ist – typisch bei Sonderbauten. Prüfingenieur Brandschutz und Statik frühzeitig einbinden, nicht erst bei Rückfragen der Behörde. Übereinstimmung aller Fachplanungen sicherstellen, bevor Unterlagen das Bauamt erreichen. Genehmigte Unterlagen für Übergabe in Betrieb, BSO und Facility archivieren. Bei Nutzungsänderung erneut prüfen, ob neues Verfahren und neue Nachweise nötig sind.",
      "In Köln und NRW gilt in der Praxis Folgendes. In Großstädten wie Köln laufen Genehmigungen über die untere Bauaufsicht; Prüfingenieurinnen und Prüfingenieure werden häufig von der Behörde in den Prozess eingebunden. Frühzeitige Abstimmung mit Feuerwehr und Prüfingenieur spart Runden – siehe auch [Link: https://brandschutzkoeln.com/ratgeber/zwischenbescheid-brandschutz-bauamt-koeln|Zwischenbescheid der Bauaufsicht] auf brandschutzkoeln.com. H&S+ begleitet Bauherren und Betreiber bei brandschutztechnischer Planung, Nachweisen und der Schnittstelle Genehmigung–Betrieb–SiGeKo – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|§ 9 Brandschutzkonzept im Detail].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt die BauPrüfVO – und was die BauO NRW?",
        answer:
          "Die BauO NRW legt die bauordnungsrechtlichen Anforderungen fest (Abstände, Rettungswege, Genehmigungsverfahren). Die BauPrüfVO konkretisiert, welche Bauvorlagen und bautechnischen Nachweise einzureichen sind und wie Prüfämter sowie Prüfingenieurinnen und Prüfingenieure diese Nachweise prüfen.",
      },
      {
        question: "Brauche ich immer einen Prüfingenieur Brandschutz?",
        answer:
          "Nicht bei jedem Vorhaben. Die untere Bauaufsichtsbehörde überträgt nach § 27 BauPrüfVO die Prüfung der Übereinstimmung mit den Brandschutzvorschriften auf anerkannte Prüfingenieurinnen oder Prüfingenieure für Brandschutz – typisch bei genehmigungspflichtigen Projekten mit brandschutztechnischen Nachweisen, insbesondere Sonderbauten und größeren Gewerbeobjekten.",
      },
      {
        question: "Was ist der Unterschied zwischen Bauvorlage und Brandschutzkonzept?",
        answer:
          "Bauvorlagen umfassen Pläne, Beschreibungen und Berechnungen insgesamt. Das Brandschutzkonzept nach § 9 BauPrüfVO ist ein spezieller bautechnischer Nachweis: eine Gesamtbewertung des baulichen und abwehrenden Brandschutzes bei Sonderbauten mit detaillierten Angaben von Feuerwehrerschließung bis betrieblichen Maßnahmen.",
      },
      {
        question: "Was bedeutet die Übereinstimmungserklärung nach § 7 BauPrüfVO?",
        answer:
          "Werden Bauvorlagen zu verschiedenen Zeitpunkten eingereicht oder geändert, müssen Entwurfsverfassende bestätigen, dass alle Unterlagen denselben Planungs- und Bearbeitungsstand haben. Das verhindert widersprüchliche Einreichungen zwischen Architektur, Statik und Brandschutz.",
      },
      {
        question: "Gilt die BauPrüfVO auch nach der Baugenehmigung?",
        answer:
          "Die Verordnung strukturiert vor allem Einreichung und Prüfung im Genehmigungsverfahren. Genehmigte Nachweise bleiben Grundlage für Bauüberwachung, Abnahme und Betrieb. Abweichungen in Ausführung oder Nutzung können neue Nachweise und ein neues Verfahren auslösen – plus betriebliche Pflichten und Brandverhütungsschau.",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-paragraph-9-baupruefvo",
    title: "Brandschutzkonzept nach § 9 BauPrüfVO – Inhalt, Pflichten und Prüfung",
    excerpt:
      "§ 9 BauPrüfVO NRW: Pflichtinhalte des Brandschutzkonzepts bei Sonderbauten, wer es erstellt, Abweichungen mit Ausgleichsmaßnahmen, Prüfingenieur und Übergang in Betrieb – für Bauherren und Planer.",
    date: "2025-08-19",
    dateModified: "2026-05-26",
    content: [
      "Hotelneubau, Versammlungsstätte, Krankenhaus oder großes Gewerbeobjekt: Sobald ein Vorhaben als Sonderbau gilt, verlangt die BauPrüfVO NRW ein Brandschutzkonzept nach § 9 – nicht nur Skizzen zu Rettungswegen, sondern eine Gesamtbewertung von baulichem und abwehrendem Brandschutz. Dieser Artikel erklärt Pflichtinhalte, Verantwortlichkeiten und typische Fehler; Einstieg in die Serie: [Link: /wissen/blog/baupruefvo-nrw-einfach-erklaert|Blog BauPrüfVO NRW einfach erklärt], Überblick Bauordnung: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW & Brandschutz].",
      "H2::Was gilt rechtlich?",
      "Was § 9 BauPrüfVO regelt: Das Brandschutzkonzept ist eine zielorientierte Gesamtbewertung des baulichen und abwehrenden Brandschutzes bei Sonderbauten. Es wird durch den in § 54 Absatz 3 BauO NRW 2018 bestimmten Personenkreis erstellt – in der Regel brandschutztechnisch qualifizierte Entwurfsverfassende oder Fachplaner für vorbeugenden Brandschutz, nicht der spätere Betreiber und nicht automatisch der Prüfingenieur. Die BauO legt fest, was baulich erforderlich ist; die BauPrüfVO legt fest, welche Angaben das Konzept schriftlich und zeichnerisch enthalten muss. Das Konzept ist damit ein zentraler bautechnischer Nachweis im Genehmigungsverfahren – vergleichbar in der Bedeutung mit Standsicherheitsnachweisen, aber inhaltlich deutlich breiter.",
      "Wann ist ein Brandschutzkonzept nötig? § 9 spricht ausdrücklich von Sonderbauten. Dazu zählen in NRW typischerweise Versammlungsstätten, Beherbergungsstätten, Verkaufsstätten, Hochhäuser, Krankenhäuser, Garagen und weitere Sonderbau-Kategorien nach SBauV – oft schon ab bestimmten Größen- oder Nutzungsschwellen. Für Beherbergungsstätten ohne Konzeptpflicht verlangt § 12 BauPrüfVO dennoch Einzelangaben zu Sicherheitsbeleuchtung, Sicherheitsstrom, Alarmierung, Brandmeldeanlage und Rettungswegen auf dem Grundstück. Im Zweifel früh bei Bauaufsicht oder Prüfingenieur nachfragen, statt ohne Konzept einzureichen. Zur Einordnung der Sonderbau-Typen: [Link: /wissen/blog/sonderbauverordnung-teil-1-versammlungsstaetten|SBauV Teil 1] bis [Link: /wissen/blog/sonderbauverordnung-teil-4-hochhaeuser|Teil 4 Hochhäuser].",
      "Feuerwehr und Löschwasser: Das Konzept muss Zu- und Durchfahrten sowie Aufstell- und Bewegungsflächen für die Feuerwehr beschreiben. Dazu gehören der Nachweis der erforderlichen Löschwassermenge, der Nachweis der Löschwasserversorgung, Hydrantenstandorte sowie Bemessung, Lage und Anordnung von Löschwasser-Rückhalteanlagen. In verdichteter Bebauung wie in Köln entscheiden diese Punkte oft schon in der Vorplanung über Machbarkeit und Kosten – nicht erst beim Bauantrag. Vertiefung Außenanlagen: [Link: https://brandschutzkoeln.com/ratgeber/feuerwehr-abstimmung-vor-bauamt-bauo-nrw|Feuerwehr-Abstimmung vor dem Bauamt] auf brandschutzkoeln.com.",
      "Bauliche Abschottung und Rettungswege: Das Konzept beschreibt das System äußerer und innerer Abschottungen in Brandabschnitte, Brandbekämpfungsabschnitte und Rauchabschnitte – mit Feuerwiderstandsfähigkeit der Bauteile und Anforderungen an das Brandverhalten der Baustoffe. Rettungswege auf dem Baugrundstück und in Gebäuden sind mit Lage, Anordnung, Bemessung (gegebenenfalls rechnerisch), Kennzeichnung, Sicherheitsbeleuchtung, automatischen Schiebetüren und elektrischen Verriegelungen von Türen darzustellen. Hier müssen Architektur, TGA und Brandschutzplanung zusammenpassen; Widersprüche zwischen Grundriss und Abschnittsbildung sind ein häufiger Grund für Rückfragen im Prüfverfahren.",
      "Nutzer, Evakuierung und Haustechnik: Das Konzept nennt die höchstzulässige Zahl der Nutzer, deren Mobilität und die Grundzüge der Evakuierung. Haustechnische Anlagen – insbesondere Leitungsanlagen – sind mit Lage und Anordnung zu beschreiben, gegebenenfalls mit Brandverhalten im Bereich von Rettungswegen und Aufzügen. Lüftungsanlagen brauchen Angaben zur brandschutztechnischen Ausbildung; Rauch- und Wärmeabzugsanlagen mit Querschnitten oder Luftwechselraten sowie Überdruckanlagen zur Rauchfreihaltung von Rettungswegen sind einzutragen. Alarmierungseinrichtungen und Alarmierungsanlagen gehören ebenso dazu wie Anlagen zur Brandbekämpfung – Feuerlöschanlagen, Steigeleitungen, Wandhydranten, Schlauchanschlussleitungen, Feuerlöschgeräte – mit Schutzbereichen und Bevorratung von Sonderlöschmitteln.",
      "Technische Sicherheit und Brandmeldeanlage: Sicherheitsstromversorgung und Ersatzstromversorgung (Batterien, Stromerzeugungsaggregate) sind mit Bemessung, Aufstellraum und Funktionserhalt der elektrischen Leitungsanlagen zu beschreiben. Brandmeldeanlagen mit Unterzentralen, Feuerwehrtableaus, Auslösestellen und den Grundzügen der funktionalen steuerungstechnischen Zusammenhänge sind Pflichtbestandteil – die Schnittstelle zur Leitstelle nach BHKG wird im Betrieb relevant ([Link: /wissen/blog/bma-leitstelle-bhkg-nrw|Blog BMA und Leitstelle]). Feuerwehrpläne runden die technische Dokumentation ab.",
      "H2::Umsetzung in der Praxis",
      "Betrieblicher Teil – oft unterschätzt: § 9 verlangt ausdrücklich betriebliche Maßnahmen zur Brandverhütung und Brandbekämpfung sowie zur Rettung von Personen – etwa Werkfeuerwehr, Betriebsfeuerwehr, Hausfeuerwehr, Brandschutzordnung, Maßnahmen zur Räumung und Räumungssignale. Wer das Konzept nur als Planungsdokument ohne Betriebskapitel schreibt, erfüllt die Verordnung nicht und erschwert die spätere Übergabe an Facility und [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragten]. Genehmigung und Betrieb sollen zusammen gedacht werden – sonst scheitert die [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau] am Abgleich von Papier und Realität.",
      "Abweichungen und Ausgleichsmaßnahmen: Wo dem BauO NRW oder Vorschriften auf Grund der BauO nicht entsprochen wird, muss das Konzept benennen, welche materiellen Anforderungen verletzt sind und welche ausgleichenden Maßnahmen stattdessen vorgesehen werden. Zudem sind Verfahren und Methoden des Brandschutzingenieurwesens anzuwenden. Das ist die Rechtsgrundlage für ingenieurmäßige Abweichungskonzepte – nicht für stillschweigende Kompromisse in der Ausführung. Alle Angaben sind in einem schriftlichen Erläuterungsbericht zu formulieren und durch zeichnerische Darstellung der baulichen Anforderungen unter Angabe der technischen Anforderungen zu ergänzen.",
      "Prüfung durch Prüfingenieur Brandschutz: Die untere Bauaufsichtsbehörde kann nach § 27 BauPrüfVO die Prüfung der Übereinstimmung mit den Brandschutzvorschriften einer anerkannten Prüfingenieurin oder einem anerkannten Prüfingenieur für Brandschutz übertragen. Der Prüfauftrag kommt von der Behörde; Autor und Prüfer sollten getrennt bleiben, wenn Interessenkonflikte drohen. Der Prüfbericht bescheinigt Vollständigkeit und Richtigkeit und weist auf Besonderheiten für Genehmigung, Bauüberwachung und Gebrauchsabnahme hin. Auf die Erteilung eines Prüfauftrags besteht kein Rechtsanspruch – frühzeitige Abstimmung mit Prüfingenieur und Behörde reduziert Verzögerungen. Mehr zum Verfahren: [Link: /wissen/blog/baupruefvo-nrw-einfach-erklaert|BauPrüfVO-Überblick].",
      "Abgrenzung zu anderen Dokumenten: Das Brandschutzkonzept nach § 9 ist nicht dasselbe wie ein betrieblicher [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan] nach ASR A2.3, nicht dasselbe wie die [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung nach DIN 14096] und nicht dasselbe wie der allgemeine Ratgeber-Artikel [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutzkonzept erstellen] – jener ordnet die Praxis ein, dieser Artikel bezieht sich auf die gesetzliche Pflichtstruktur der BauPrüfVO. Im Idealfall verweisen BSO, Fluchtwegpläne und Konzept aufeinander, ohne sich zu widersprechen.",
      "In der Praxis treten häufig folgende Fehler auf. Konzept ohne Nutzerzahl und Evakuierungsgrundzüge. Fehlende Feuerwehrplanung. BMA geplant, aber steuerungstechnische Verknüpfungen mit RWA oder Aufzug nicht beschrieben. Betriebliche Maßnahmen nur als Floskel. Abweichungen ohne nachvollziehbare Ausgleichsmaßnahmen. Konzept veraltet, während auf der Baustelle bereits geändert wird ([Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo]). Folge: Nachforderungen, verzögerte Genehmigung, teure Nachbesserung in der Ausführung.",
      "In Köln und NRW gilt in der Praxis Folgendes. In genehmigungspflichtigen Sonderbauten ist das Konzept nach § 9 fester Bestandteil der Bauvorlagen. Abstimmung mit Feuerwehr, Prüfingenieur und Entwurfsverfassenden vor Einreichung spart Monate. H&S+ unterstützt bei Konzepterstellung, behördlicher Abstimmung und Übergabe in betrieblichen Brandschutz – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/brandschutzkonzept-betrieb-brandverhuetungsschau|Vom Konzept über den Betrieb zur Brandverhütungsschau].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer darf ein Brandschutzkonzept nach § 9 BauPrüfVO erstellen?",
        answer:
          "Der in § 54 Absatz 3 BauO NRW 2018 bestimmte Personenkreis – in der Praxis brandschutztechnisch qualifizierte Entwurfsverfassende oder Fachplaner für vorbeugenden Brandschutz. Prüfingenieur Brandschutz prüft im behördlichen Auftrag; Autor und Prüfer sollten getrennt sein, wenn Interessenkonflikte drohen.",
      },
      {
        question: "Für welche Gebäude ist § 9 BauPrüfVO Pflicht?",
        answer:
          "Für Sonderbauten im Sinne der BauO NRW und SBauV – etwa Versammlungsstätten, Beherbergung, Verkaufsstätten, Hochhäuser, Krankenhäuser, Garagen ab bestimmten Schwellen. Kleinere Vorhaben ohne Konzeptpflicht können dennoch Einzelangaben nach § 12 BauPrüfVO benötigen.",
      },
      {
        question: "Muss das Konzept betriebliche Maßnahmen enthalten?",
        answer:
          "Ja. § 9 BauPrüfVO verlangt ausdrücklich betriebliche Maßnahmen zur Brandverhütung, Brandbekämpfung und Rettung – etwa Brandschutzordnung, Räumungssignale oder Werkfeuerwehr, soweit vorgesehen. Ohne Betriebskapitel ist das Konzept unvollständig.",
      },
      {
        question: "Was sind ausgleichende Maßnahmen im Konzept?",
        answer:
          "Wenn materielle Anforderungen der BauO NRW oder darauf basierender Vorschriften nicht eingehalten werden, muss das Konzept die Abweichung und die ingenieurmäßig begründeten Ausgleichsmaßnahmen darlegen – plus Anwendung anerkannter Verfahren des Brandschutzingenieurwesens.",
      },
      {
        question: "Wie hängen Konzept, Prüfingenieur und BSO zusammen?",
        answer:
          "Konzept und Prüfbericht sichern die Genehmigung. BSO, Fluchtwegpläne und Unterweisungen setzen den Betrieb um. Die Brandverhütungsschau prüft später den Abgleich von Genehmigung und IST – deshalb müssen Konzept und Betriebsorganisation von Anfang an zusammenpassen.",
      },
    ],
  },
  {
    slug: "brandschutzkonzept-betrieb-brandverhuetungsschau",
    title: "Vom Brandschutzkonzept in den Betrieb – und was die Brandverhütungsschau damit zu tun hat",
    excerpt:
      "Brandschutzkonzept § 9 BauPrüfVO, betriebliche Brandschutzordnung und Brandverhütungsschau § 26 BHKG: wie Genehmigung, Betrieb und Gemeindeprüfung zusammenhängen – ohne Compliance-Lücken in Köln & NRW.",
    date: "2025-08-26",
    dateModified: "2026-05-26",
    content: [
      "Ein Neubau ist abgenommen, die Baugenehmigung liegt im Ordner, das Hotel oder die Halle ist seit Monaten in Betrieb. Dann kündigt die Gemeinde die Brandverhütungsschau an – und plötzlich tauchen Mängel auf, die niemand mehr zuordnen kann: Rettungswege durch Möbel blockiert, Brandmelderzonen passen nicht mehr zum Mieterausbau, die Brandschutzordnung beschreibt noch den Eröffnungstag. Das Problem ist selten die Schau selbst. Es ist die fehlende Kette zwischen genehmigtem Brandschutzkonzept, laufendem Betrieb und behördlicher Überprüfung. Dieser Artikel erklärt diese Kette verständlich – als dritter Teil unserer BauPrüfVO-Serie nach [Link: /wissen/blog/baupruefvo-nrw-einfach-erklaert|Überblick BauPrüfVO] und [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|§ 9 Brandschutzkonzept].",
      "H2::Was gilt rechtlich?",
      "Drei Ebenen, ein Gebäude: In der Genehmigungsphase regeln BauO NRW, Sonderbauverordnung und BauPrüfVO, wie sicher gebaut werden darf und welche Nachweise dafür vorliegen müssen – das Brandschutzkonzept nach § 9 BauPrüfVO ist dabei das zentrale Gesamtdokument für Sonderbauten. In der Betriebsphase trägt der Arbeitgeber und Betreiber die organisatorische Verantwortung: Gefährdungsbeurteilung, Unterweisungen, [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung], Wartung technischer Anlagen, [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter] – zusammengefasst im [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblichen Brandschutz]. Parallel prüft die Gemeinde nach § 26 BHKG NRW in der Brandverhütungsschau, ob das Objekt aus Sicht des öffentlichen Brandschutzes in Ordnung ist. Keine dieser Ebenen ersetzt die andere. Wer sie getrennt betreibt, erlebt Widersprüche; wer sie verknüpft, spart Auflagen, Kosten und im Ernstfall Leben.",
      "Was das Konzept für den Betrieb schon vorschreibt: Viele Bauherren behandeln § 9 BauPrüfVO als Planungsunterlage fürs Bauamt. Das Gesetz verlangt aber ausdrücklich betriebliche Maßnahmen zur Brandverhütung und Brandbekämpfung sowie zur Rettung von Personen – Brandschutzordnung, Räumungssignale, gegebenenfalls Werk- oder Hausfeuerwehr, Alarmierungskonzepte. Das Konzept ist damit schon in der Genehmigung ein Versprechen an die Behörde, wie das Gebäude später betrieben werden soll. Wer dieses Kapitel dünn hält oder mit Allgemeinplätzen füllt, unterschätzt die spätere Pflicht zur Umsetzung. Der [Link: /wissen/blog/brandschutzkonzept-erstellen|Brandschutznachweis] und das formale Konzept nach § 9 sollten deshalb nicht erst nach Eröffnung in die Betriebsorganisation übersetzt werden, sondern parallel mitentwickelt werden – idealerweise mit dem künftigen Betreiber, Facility-Management und Brandschutzbeauftragten.",
      "Die Übergabe von Bau zu Betrieb: Mit der Gebrauchsabnahme endet nicht die brandschutztechnische Verantwortung – sie wechselt vom Bauherrn zum Betreiber. Für eine saubere Übergabe gehören in ein konsolidiertes Übergabepaket mindestens die genehmigten Bauvorlagen und der Prüfbericht, das Brandschutzkonzept in der freigegebenen Fassung, Feuerwehrpläne, Zonenpläne der Brandmeldeanlage, Nachweise zu Sicherheitsbeleuchtung und Sprinkler, Wartungsverträge und Betriebsanleitungen sowie eine erste Fassung der Brandschutzordnung, die das Konzept widerspiegelt. Hausmeister und Facility müssen wissen, welche Türen Feuerschutzabschlüsse sind, wo die Brandmelderzentrale liegt und welche Personenzahl genehmigt ist. Fehlt diese Übergabe, beginnt der Betrieb mit Wissenslücken – und die Brandverhütungsschau wird zum unangenehmen Reality-Check.",
      "Brandschutzordnung als betriebliches Spiegelbild: Die BSO nach DIN 14096 übersetzt genehmigte Vorgaben in Verhalten und Zuständigkeiten. Teil A informiert alle Personen im Gebäude, Teil B regelt den Alltag (keine Brandlasten in Fluren, Heißarbeit nur mit Freigabe, Rettungswege freihalten), Teil C beschreibt Alarmkette, Räumung und technische Schnittstellen. Was im Konzept zu Evakuierung, BMA und Sicherheitsstrom steht, muss in Teil B und C wiederzufinden sein – nicht wörtlich, aber inhaltlich stimmig. Flucht- und Rettungspläne nach ASR A2.3 zeigen die Wege; die BSO erklärt, wie im Brandfall gehandelt wird. Widerspricht der Plan der genehmigten Rettungswegführung, liegt ein Genehmigungs- oder Betriebsproblem vor, kein reines Aushang-Problem.",
      "Gefährdungsbeurteilung – derselbe Raum, andere Brille: Der Arbeitgeber bewertet nach ArbSchG, welche Gefahren für Beschäftigte bestehen. Brand- und Rauchgefahr, Rettungswege, technische Anlagen und Evakuierung gehören in die GBU – oft im selben Gebäude, in dem die Brandverhütungsschau Rettungswege und Ordnung prüft. Eine gekeilte Brandschutztür ist gleichzeitig bauordnungsrelevant, arbeitsschutzrechtlich relevant und ein Mangel aus Sicht der Gemeinde. Drei getrennte Maßnahmenlisten für dasselbe Problem sind Verschwendung. Besser: eine zentrale Liste mit Herkunft (Konzept, interne Begehung, Schau, BG), Verantwortlichem, Frist und Verweis auf GBU- und BSO-Aktualisierung.",
      "Brandverhütungsschau – der externe Abgleich: § 26 BHKG verpflichtet die Gemeinde, Gebäude und Betriebe mit erhöhter Brand- oder Explosionsgefahr oder großer Personen- bzw. Sachwertgefährdung brandschutztechnisch zu überprüfen – in Abständen von höchstens sechs Jahren ab Nutzung oder Inbetriebnahme. Die Schau ist keine Wiederholung der Baugenehmigung; sie prüft den heutigen Zustand gegen die Anforderungen des öffentlichen Brandschutzes. Typische Themen: Rettungswege, Feuerschutzabschlüsse, Brandlasten, technische Anlagen im IST-Betrieb, Ordnung und Abgleich mit Genehmigung. Für Sonderbauten nach SBauV ist die Schau praktisch immer relevant – ob Versammlungsstätte, Hotel, Hochhaus oder Garage. Ausführlich zum Ablauf: [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Blog Brandverhütungsschau]; Gesamtkontext: [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt].",
      "H2::Umsetzung in der Praxis",
      "Was die Schau am Konzept misst – und was nicht: Die Schau bewertet nicht, ob das Konzept damals gut geschrieben war. Sie prüft, ob das, was genehmigt und beschrieben wurde, im Betrieb noch gilt – ob die zulässige Besucherzahl eingehalten wird, Melderzonen zur Raumaufteilung passen, die Aufschaltung zur Leitstelle ([Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle]) funktioniert und Feuerwehrpläne sowie Zugänge aktuell sind. Mängel aus der Schau sind deshalb oft ein Symptom dafür, dass Konzept, Betrieb und Dokumentation auseinanderliefen – nicht bloß für fehlende Hausmeisterkontrollen.",
      "SBauV-Betriebspflichten laufen parallel: Wer Versammlungsstätten, Beherbergung, Verkaufsflächen, Hochhäuser oder Garagen betreibt, hat zusätzlich zu Konzept und BHKG die Betriebsvorschriften der Sonderbauverordnung zu beachten – Bestuhlungspläne, Gastspielprüfbücher, Brandsicherheitswachen bei Veranstaltungen ([Link: /wissen/blog/brandsicherheitswache-bhkg-nrw|§ 27 BHKG]), Wartung von BMA und Sprinkler. Die Brandverhütungsschau berührt viele dieser Punkte im IST-Zustand. Wer SBauV-Betriebspflichten nur auf Papier erfüllt, erlebt bei der Schau und im Ernstfall die Lücke.",
      "In der Praxis reißen häufig folgende Glieder der Kette. Mieterausbauten ohne Abstimmung mit Genehmigung und Konzept. Lagerzonen in Fluren, weil „nur temporär“. BMA nicht nachgezogen nach Umbau. BSO von der Eröffnung, obwohl Nutzung und Personenzahl längst gewachsen sind. Kein Ansprechpartner mehr, der weiß, wo der genehmigte Plan liegt. Jede Nutzungsänderung, jede wesentliche bauliche Änderung und jede Erhöhung der Personenzahl sollte zuerst klären, ob das Brandschutzkonzept und die Genehmigung betroffen sind – und danach BSO, GBU und die nächste Schau. Zur bauordnungsrechtlichen Klärung: [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|Ratgeber BauO NRW].",
      "Umbau schließt den Kreis: Wird im Betrieb umgebaut, endet die Kette nicht bei GBU und BSO. Wenn Rettungswege, Brandabschnitte oder Technik betroffen sind, kann ein neues Genehmigungsverfahren und ein angepasstes Konzept nach § 9 BauPrüfVO nötig werden – bevor die Baustelle startet. Auf der Baustelle koordiniert der [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] die Arbeitssicherheit; die genehmigten brandschutztechnischen Vorgaben bleiben maßgeblich. Nach Abschluss des Umbaus schließen Sie den Kreis: aktualisiertes Konzept und Genehmigung, fortgeschriebene BSO, angepasste Fluchtwegpläne, BMA-Nachführung, GBU – und die nächste Brandverhütungsschau einbeziehen.",
      "Praktische Organisation für Betreiber: Legen Sie einen Ordner oder eine digitale Ablage „Brandschutz Genehmigung & Betrieb“ an mit Konzept, Genehmigung, Prüfbericht, BSO-Versionen, letztem Schau-Protokoll, Wartungsverträgen und Maßnahmenliste. Benennen Sie einen Verantwortlichen – meist Brandschutzbeauftragter plus Facility – und klären Sie bei Mietobjekten schriftlich, wer Eigentümer, Verwalter und Nutzer welche Pflichten trägt. Vor der Brandverhütungsschau: interne Begehung mit Konzept und letztem Protokoll, offensichtliche Mängel vorab beheben, Ansprechpartner und Schlüssel für Technikräume bereitstellen. Nach der Schau: Mängel in dieselbe Maßnahmenliste wie GBU- und Versicherer-Punkte übernehmen, BSO und Pläne fort schreiben, bauliche Themen bauordnungsrechtlich klären.",
      "H2::Typische Mängel und Checkliste",
      "Vor der Brandverhütungsschau sollten Konzept, Genehmigung, BSO und Maßnahmenliste auf dem gleichen Stand liegen, Unterweisungen nachweisbar sein und Verantwortliche mit Fristen benannt sein – abgestimmt mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "In Köln und NRW gilt in der Praxis Folgendes. In dicht bebauten Lagen und bei Sonderbauten prüfen Kommunen regelmäßig – oft mit enger Abstimmung zwischen Brandschutzdienststelle und Feuerwehr. Wer Konzept, Betrieb und Schau als eine Geschichte erzählt, besteht Prüfungen leichter und vermeidet teure Nachrüstungen. H&S+ begleitet den durchgängigen Weg von § 9 BauPrüfVO über BSO und GBU bis zur Vorbereitung der Brandverhütungsschau – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW einfach erklärt], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Reihe: [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO NRW – technische Anlagen und Sonderbau-Prüfungen].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ersetzt die Brandverhütungsschau das Brandschutzkonzept?",
        answer:
          "Nein. Das Konzept nach § 9 BauPrüfVO dokumentiert die genehmigte Gesamtbewertung für Sonderbauten. Die Brandverhütungsschau prüft den laufenden Betrieb auf Mängel – sie ersetzt weder Konzept noch Baugenehmigung, sondern gleicht Genehmigung und IST-Zustand ab.",
      },
      {
        question: "Muss die BSO dem Konzept entsprechen?",
        answer:
          "Inhaltlich ja. Was zu Evakuierung, Alarmierung, Personenzahl und technischen Anlagen im Konzept festgelegt ist, muss in Brandschutzordnung, Fluchtwegplänen und Betriebsabläufen umgesetzt und dokumentiert sein. Abweichungen ohne Genehmigung oder Fortschreibung sind ein Compliance-Risiko.",
      },
      {
        question: "Wo verortet man Mängel aus der Schau – GBU oder BSO?",
        answer:
          "Oft beides. Organisatorische Maßnahmen und Verhalten gehören in die BSO und Unterweisungen; Gefährdungen für Beschäftigte zusätzlich in die GBU. Bauliche Mängel können Genehmigungsverfahren und Konzeptaktualisierung erfordern. Eine gemeinsame Maßnahmenliste vermeidet Doppelarbeit.",
      },
      {
        question: "Wann muss nach einem Umbau das Konzept neu werden?",
        answer:
          "Wenn bauliche oder nutzungsbezogene Änderungen die brandschutztechnische Bewertung berühren – Rettungswege, Brandabschnitte, Personenzahl, BMA-Zonierung, Löschanlagen. Dann zuerst bauordnungsrechtlich klären, dann BSO, Pläne und GBU anpassen.",
      },
      {
        question: "Wie hängen BauPrüfVO-Serie und BHKG zusammen?",
        answer:
          "BauPrüfVO und § 9 regeln Nachweise in der Genehmigung; BHKG § 26 regelt die wiederkehrende behördliche Schau im Betrieb. H&S+ verbindet beide Ebenen mit betrieblichem Brandschutz (BSO, BSB, GBU) – das ist der rote Faden der BauPrüfVO- und BHKG-Blogserie.",
      },
    ],
  },
  // PrüfVO-Serie: wöchentlich dienstags ab 2025-09-02 (Anschluss an BauPrüfVO-Serie)
  {
    slug: "pruefvo-nrw-einfach-erklaert",
    title: "PrüfVO NRW einfach erklärt – technische Anlagen prüfen, Sonderbauten überwachen",
    excerpt:
      "Prüfverordnung NRW: Erst- und Wiederholungsprüfung durch Prüfsachverständige (BMA, Sprinkler, RWA, Sicherheitsbeleuchtung), Wirk-Prinzip-Prüfung, Fristen 3 und 6 Jahre, wiederkehrende Sonderbau-Prüfungen durch die Bauaufsicht § 10 – verständlich für Betreiber in NRW.",
    date: "2025-09-02",
    dateModified: "2026-05-26",
    content: [
      "Die BauPrüfVO regelt Nachweise in der Genehmigung – wer plant, reicht ein, wer als Prüfingenieur das Brandschutzkonzept prüft. Sobald das Gebäude in Betrieb ist, kommt eine zweite Verordnung ins Spiel, die viele Betreiber erst kennen, wenn ein Prüftermin ansteht oder die Bauaufsicht nachfragt: die Verordnung über die Prüfung technischer Anlagen und wiederkehrende Prüfungen von Sonderbauten, kurz PrüfVO NRW. Stand: 26. November 2024. Sie regelt nicht den Bauantrag, sondern ob Sprinkler, Brandmeldeanlage, Rauchabzug und Sicherheitsbeleuchtung im laufenden Betrieb wirksam und betriebssicher sind – und ob bei Sonderbauten die Bauaufsicht die Betriebsvorschriften kontrolliert. Dieser Artikel ist der Einstieg in unsere PrüfVO-Serie; davor in der Kette: [Link: /wissen/blog/baupruefvo-nrw-einfach-erklaert|BauPrüfVO], [Link: /wissen/blog/brandschutzkonzept-betrieb-brandverhuetungsschau|Konzept, Betrieb und Brandverhütungsschau].",
      "H2::Was gilt rechtlich?",
      "Zwei Teile, zwei Logiken: Teil 1 der PrüfVO (§§ 1–9) betrifft technische Anlagen in bestimmten Gebäuden – geprüft durch staatlich anerkannte Prüfsachverständige auf Veranlassung des Bauherrn (Erstprüfung) bzw. Des Betreibers (wiederkehrende Prüfung). Teil 2 (§ 10) betrifft wiederkehrende Prüfungen von Sonderbauten durch die Bauaufsichtsbehörde selbst – mit Fokus auf Betriebsvorschriften und darauf, ob die technischen Prüfungen nach Teil 1 fristgereich liefen. Teil 3 und 4 regeln Zuständigkeiten (Anerkennung der Prüfsachverständigen u. A. Bei der Bezirksregierung Düsseldorf) und Inkrafttreten. Wer nur an BMA-Wartung denkt, übersieht damit die bauaufsichtliche Sonderbau-Prüfung; wer nur die Brandverhütungsschau kennt, übersieht die gesetzlich geregelten Prüfsachverständigen-Fristen.",
      "Wo gilt Teil 1? Die PrüfVO nennt ausdrücklich Verkaufs- und Versammlungsstätten, Krankenhäuser, Beherbergung, Hochhäuser, Mittel- und Großgaragen, Pflegeeinrichtungen über 500 m² Bruttogrundfläche, Schulen, große Industriehallen über 2.000 m² Geschossfläche, Messebauten sowie Flughafen- und Bahnhofsabfertigungsgebäude über 2.000 m² – und sonstige Sonderbauten, wenn die Bauaufsicht die Prüfung im Einzelfall nach BauO § 50 anordnet. Das deckt sich weitgehend mit der Sonderbau-Welt aus SBauV und BauPrüfVO, aber der Anwendungszweck ist Betrieb, nicht Genehmigung.",
      "Welche Anlagen sind Pflicht? In diesen Gebäuden müssen Prüfsachverständige unter anderem prüfen: CO-Warnanlagen in geschlossenen Großgaragen, ortsfeste selbsttätige Feuerlöschanlagen (Sprinkler), lüftungstechnische Anlagen, maschinelle Garagenlüftung, Druckbelüftung zur Rauchfreihaltung von Rettungswegen, maschinelle Rauchabzugsanlagen, Sicherheitsbeleuchtung und Sicherheitsstromversorgung, Brandmelde- und Alarmierungsanlagen, elektrische Anlagen (in Krankenhäusern nur betriebskritische Elektrik, in Hochhäusern wiederkehrend nur außerhalb von Wohnungen, in Garagen nur in geschlossenen Großgaragen, sonst alle elektrischen Anlagen), natürliche Rauchabzugsanlagen sowie ortsfeste nicht-selbsttätige Löschanlagen. Die Liste erklärt, warum ein Hotel mit BMA, Sicherheitsbeleuchtung und RWA mehrere Prüftermine und mehrere Fachrichtungen braucht – nicht einen pauschalen Wartungsvertrag.",
      "Erstprüfung und Wiederholungsprüfung: Vor der ersten Inbetriebnahme und nach wesentlichen Änderungen vor der Wiederinbetriebnahme veranlasst und bezahlt der Bauherr die Erstprüfung. Danach obliegt die wiederkehrende Prüfung dem Betreiber. Geprüft werden Wirksamkeit und Betriebssicherheit – einschließlich des bestimmungsgemäßen Zusammenwirkens der Anlagen. Diese Wirk-Prinzip-Prüfung ist mehr als Einzelcheck: Sie prüft, ob BMA, RWA, Aufzugsrückruf, Druckbelüftung und Sprinkler-Voralarm im Brandfall zusammen funktionieren, wie im Brandschutzkonzept beschrieben. Wer nur Melder und Zentrale warten lässt, aber die Kopplungen nie testen lässt, erfüllt die Verordnung nicht.",
      "Die Fristen – 3 Jahre oder 6 Jahre: Seit der letzten Prüfung dürfen höchstens drei Jahre vergehen für Anlagen Nummer 1 bis 8 der Gesetzesliste (CO-Warnung, Sprinkler, Lüftung, Garagenlüftung, Druckbelüftung, maschineller RWA, Sicherheitsbeleuchtung und -strom, BMA). Für Anlagen Nummer 9 bis 11 (Elektrik, natürlicher RWA, nicht-selbsttätige Löschanlagen) gelten höchstens sechs Jahre. Die Bauaufsicht kann Fristen im Einzelfall verkürzen oder nach Schadensfällen weitere Prüfungen anordnen. Versicherer und VdS-Regeln sind oft strenger – der Betriebs-Prüfplan sollte den strengsten Maßstab abbilden, nicht das gesetzliche Minimum ([Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz]).",
      "Pflichten des Betreibers nach § 2: Unterlagen bereithalten, Vorrichtungen und geeignetes Personal für die Prüfung bereitstellen, konkret gefährliche Mängel unverzüglich und sonstige in angemessener Frist beseitigen, Beseitigung dem Prüfsachverständigen mitteilen, Erstprüfberichte an die untere Bauaufsichtsbehörde senden, Prüftermine rechtzeitig der Bauaufsicht und der für die Brandschau zuständigen Behörde ankündigen, Wiederholungsberichte mindestens sechs Jahre aufbewahren und auf Verlangen vorlegen, Anerkennungsbescheid des Prüfsachverständigen vorlegen. Das ist dokumentierte Compliance – kein reines Vertrauen in die Wartungsfirma.",
      "H2::Umsetzung in der Praxis",
      "Prüfsachverständige – wer darf prüfen? Anerkannte Prüfsachverständige nach § 4, historisch anerkannte Sachverständige, qualifizierte Bedienstete öffentlicher Verwaltungen im Zuständigkeitsbereich sowie in anderen Ländern anerkannte Sachverständige. Nicht jede Elektrofirma oder jeder Errichter ist automatisch Prüfsachverständiger im Sinne der PrüfVO. Vor Beauftragung Anerkennungsbescheid und Fachrichtung prüfen – BMA, Sprinkler und Elektro sind getrennte Fachrichtungen.",
      "Teil 2 – Sonderbau-Prüfungen durch die Bauaufsicht (§ 10): Unabhängig von den Prüfsachverständigen prüft die Bauaufsichtsbehörde wiederkehrend bestimmte Sonderbauten: Verkaufs- und Versammlungsstätten in Abständen von höchstens drei Jahren; Krankenhäuser, Beherbergung über 60 Betten, Hochhäuser über 60 m, Großgaragen, Schulen (nicht nur Erwachsenenbildung), Pflege über 1.600 m² Bruttogrundfläche sowie Kindergärten und Horte über vier Gruppen in Abständen von höchstens sechs Jahren. Dabei überwacht sie die Einhaltung der Betriebsvorschriften und stellt fest, ob technische Prüfungen fristgereich erfolgten und Mängel beseitigt wurden. Der für die Brandschau zuständigen Behörde ist Teilnahme zu geben – praktisch die Verzahnung mit [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau] und Feuerwehr.",
      "Vier Prüfebenen im Betrieb – nicht verwechseln: BauPrüfVO und § 9 Brandschutzkonzept sichern die Genehmigung. PrüfVO Teil 1 sichert technische Anlagen durch Prüfsachverständige. PrüfVO § 10 und BHKG § 26 sichern Sonderbauten durch Bauaufsicht bzw. Gemeinde – unterschiedliche Intervalle und Schwerpunkte, aber überlappende Themen (Rettungswege, Technik, Ordnung). Betrieblicher Brandschutz (BSO, GBU, BSB) organisiert den Alltag. [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] und [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|DGUV V3] gelten parallel für überwachungsbedürftige Anlagen und ortsveränderliche Betriebsmittel – eine Anlage kann mehreren Regimen unterliegen; ein Prüfkalender muss alle Fristen abbilden.",
      "In der Praxis treten häufig folgende Fehler auf. Wartungsvertrag mit Errichterfirma ohne Prüfsachverständigen-Qualifikation. Erstprüfung nach Umbau vergessen. Wirk-Prinzip-Prüfung nie durchgeführt. BMA alle drei Jahre, Elektro alle zehn Jahre „weil Versicherung“ – obwohl sechs Jahre gesetzliches Maximum. Prüfberichte nicht sechs Jahre archiviert. Bauaufsichts-Prüfung (§ 10) mit Brandverhütungsschau verwechselt und Termine nicht koordiniert. Mängel aus Prüfbericht nicht in BSO Teil C und Maßnahmenliste übernommen.",
      "Praktische Organisation: Führen Sie ein Anlagenverzeichnis mit Anlagentyp, Fachrichtung, letztem Prüfdatum, nächster Frist (3 oder 6 Jahre), Prüfsachverständigem, Anerkennungsbescheid-Kopie und Verknüpfung zu Wartungsverträgen. Koppeln Sie Erstprüfungen an Inbetriebnahme und wesentliche Umbauten. Planen Sie Wirk-Prinzip-Prüfungen mit allen beteiligten Gewerken. Vor §-10-Prüfung durch Bauaufsicht: Prüfberichte, SBauV-Betriebsunterlagen und letzte Brandverhütungsschau bereitlegen. Verantwortlichkeit zwischen Eigentümer, Verwalter und Nutzer schriftlich klären.",
      "In Köln und NRW gilt in der Praxis Folgendes. In Sonderbauten mit BMA und Sprinkler laufen PrüfVO-Fristen, Bauaufsichts-Prüfungen und Brandverhütungsschau oft im selben Jahrzehnt – wer einen integrierten Prüf- und Begehungsplan führt, vermeidet Doppelarbeit und überfällige Anlagen. H&S+ unterstützt Betreiber bei Prüfplan, Schnittstellen Genehmigung–Technik–BSO und Vorbereitung behördlicher Prüfungen – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /wissen/blog/bhkg-nrw-einfach-erklaert|Blog BHKG NRW], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/wirk-prinzip-pruefung-pruefvo-nrw|Wirk-Prinzip-Prüfung im Detail].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was ist der Unterschied zwischen BauPrüfVO und PrüfVO NRW?",
        answer:
          "Die BauPrüfVO regelt Bauvorlagen und bautechnische Nachweise in der Genehmigung – inklusive Brandschutzkonzept und Prüfingenieur. Die PrüfVO NRW regelt die Prüfung technischer Anlagen im Betrieb durch Prüfsachverständige sowie wiederkehrende Sonderbau-Prüfungen durch die Bauaufsicht.",
      },
      {
        question: "Wie oft muss eine Brandmeldeanlage nach PrüfVO NRW geprüft werden?",
        answer:
          "Als wiederkehrende Prüfung höchstens alle drei Jahre seit der letzten Prüfung durch einen anerkannten Prüfsachverständigen – zusätzlich zur Erstprüfung vor Inbetriebnahme und nach wesentlichen Änderungen. Wartung nach DIN 14675 und VdS kann häufiger sein.",
      },
      {
        question: "Was ist die Wirk-Prinzip-Prüfung?",
        answer:
          "Die Prüfung des bestimmungsgemäßen Zusammenwirkens der Anlagen – etwa ob BMA, RWA, Druckbelüftung, Aufzugsrückruf und Sprinkler-Voralarm im Brandfall gemeinsam funktionieren. Sie ist Teil jeder PrüfVO-Prüfung, nicht optional.",
      },
      {
        question: "Ersetzt die Brandverhütungsschau die PrüfVO?",
        answer:
          "Nein. Die Brandverhütungsschau nach BHKG prüft den Gebäudezustand aus Sicht des öffentlichen Brandschutzes. Die PrüfVO verlangt gesonderte Prüfungen technischer Anlagen durch Prüfsachverständige und zusätzlich Sonderbau-Prüfungen durch die Bauaufsicht nach § 10.",
      },
      {
        question: "Wer trägt die Kosten der wiederkehrenden Prüfungen?",
        answer:
          "Der Betreiber veranlasst und trägt die Kosten der wiederkehrenden Prüfungen nach § 2 PrüfVO. Erstprüfungen vor Inbetriebnahme oder nach wesentlichen Änderungen trägt der Bauherr.",
      },
    ],
  },
  {
    slug: "wirk-prinzip-pruefung-pruefvo-nrw",
    title: "Wirk-Prinzip-Prüfung nach PrüfVO NRW – wenn BMA, RWA und Aufzug zusammen funktionieren müssen",
    excerpt:
      "Wirk-Prinzip-Prüfung § 2 PrüfVO NRW: bestimmungsgemäßes Zusammenwirken von Brandmeldeanlage, RWA, Druckbelüftung, Sprinkler und Aufzug – Pflicht bei Erst- und Wiederholungsprüfung, Abgrenzung zur Wartung, Vorbereitung für Betreiber.",
    date: "2025-09-09",
    dateModified: "2026-05-26",
    content: [
      "Die Brandmeldeanlage wurde gewartet, die Sicherheitsbeleuchtung hat eine Plakette, der Sprinkler-Inspizient war im Haus. Trotzdem kann die wiederkehrende Prüfung nach PrüfVO NRW scheitern – weil niemand geprüft hat, ob im Brandfall alles zusammen funktioniert. Genau das verlangt § 2 Absatz 1: Neben Wirksamkeit und Betriebssicherheit jeder Anlage für sich muss der Prüfsachverständige das bestimmungsgemäße Zusammenwirken prüfen – die sogenannte Wirk-Prinzip-Prüfung. Sie ist kein Zusatzangebot und kein separates Gutachten, sondern fester Bestandteil jeder Erstprüfung und jeder wiederkehrenden Prüfung. Dieser Artikel erklärt, was das praktisch bedeutet – als zweiter Teil unserer PrüfVO-Serie nach [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO NRW einfach erklärt].",
      "H2::Was gilt rechtlich?",
      "Warum das Gesetz mehr will als Wartung: Einzelgewerke kennen ihre Anlage. Der BMA-Errichter prüft Melder und Zentrale nach DIN 14675. Der Elektriker prüft Stromkreise. Der Sprinkler-Fachbetrieb inspiziert Ventile und Alarmventilstrecke. Im Ernstfall entscheidet aber die Kette: Melder löst aus, Zentrale schaltet, RWA startet, Druckbelüftung der Rettungswege läuft an, Aufzüge fahren zur Haltestelle zurück, Sprinkler-Voralarm geht an die Leitstelle, Sicherheitsbeleuchtung schaltet um. Wenn eine Schnittstelle in der MSR, in der Verdrahtung oder in der Parametrierung fehlt, ist jede Einzelwartung wirkungslos. Die Wirk-Prinzip-Prüfung stellt diese Kette unter Prüfbedingungen – nicht nur auf dem Papier des [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|Brandschutzkonzepts nach § 9 BauPrüfVO], sondern am laufenden Objekt.",
      "Rechtliche Einordnung: § 2 PrüfVO verbindet drei Prüfziele in einem Termin: Wirksamkeit, Betriebssicherheit und Zusammenwirken. Erstprüfung vor erster Inbetriebnahme und nach wesentlichen Änderungen – Kosten und Veranlassung beim Bauherrn. Wiederkehrende Prüfung im Betrieb – Veranlassung und Kosten beim Betreiber, Fristen drei oder sechs Jahre je nach Anlagentyp. Die Bauaufsicht kann an Prüfungen teilnehmen; bei § 10 Sonderbau-Prüfungen prüft sie ausdrücklich mit, ob technische Prüfungen fristgereich erfolgten und Mängel beseitigt wurden. Fehlt die Wirk-Prinzip-Dokumentation im Prüfbericht, ist die Prüfung unvollständig – mit Ordnungswidrigkeitsrisiko nach § 9 PrüfVO i. V. M. BauO § 86.",
      "Was „bestimmungsgemäß“ heißt: Maßstab ist nicht die aktuelle Wartungsmeinung der Firma, sondern die genehmigte Planung und das Brandschutzkonzept – inklusive der dort beschriebenen funktionalen steuerungstechnischen Zusammenhänge der Brandmeldeanlage. Typische Kopplungen in Sonderbauten: automatische Melder oder Handmelder lösen Rauchabzugsanlagen in Treppenräumen oder atriumartigen Räumen aus. Brandfallsteuerung schaltet Lüftungsanlagen ab oder auf Brandfallmodus. Druckbelüftung hält Rettungswege rauchfrei. Aufzüge werden zurückgerufen oder zur Entnahmestelle gefahren. Feuerwehraufzüge bleiben in Betrieb. Sicherheitsbeleuchtung und Sicherheitsstromversorgung übernehmen. Selbsttätige Feuerlöschanlagen melden Voralarm an Zentrale und ggf. Leitstelle ([Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle]). Schließanlagen und Zutrittskontrolle reagieren auf Brandfall. Akustische Alarmierung und Sprachalarmierung laufen in der vorgesehenen Reihenfolge. Nicht jedes Gebäude hat alles – aber was im Konzept und in den brandschutztechnischen Unterlagen steht, muss bei der Wirk-Prinzip-Prüfung nachweisbar funktionieren.",
      "Abgrenzung – Wartung, Einzelprüfung, Probealarm: Wartung nach DIN 14675 hält die BMA instand – sie ersetzt nicht die gesetzliche PrüfVO-Prüfung durch einen anerkannten Prüfsachverständigen. Ein Elektro-Prüfprotokoll nach DGUV V3 bezieht sich auf ortsveränderliche Betriebsmittel oder Anlagenteile – nicht automatisch auf die Brandfall-Matrix der Gebäudeleittechnik. Ein Probealarm in der [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] testet organisatorisch Evakuierung und Meldekette – sinnvoll, aber kein Ersatz für die fachliche Wirk-Prinzip-Prüfung mit dokumentiertem Prüfbericht. Idealerweise stimmen Konzept, MSR-Dokumentation, BSO Teil C und Wirk-Prinzip-Bericht dieselbe Story.",
      "Wer führt die Prüfung durch? Prüfsachverständige nach § 3 PrüfVO in der jeweiligen Fachrichtung. Die Wirk-Prinzip-Prüfung erfordert oft mehrere Kompetenzen in einem abgestimmten Termin: BMA-Prüfsachverständiger plus Elektro, ggf. Lüftung/Sprinkler oder eine koordinierende Person mit Zugriff auf alle Unterlagen. Wer nur den BMA-Prüfer ohne Zugriff auf RWA-Steuerung und Aufzugsnotruf beauftragt, riskiert Lücken. Vor Auftrag klären: Wer testet welche Kopplung, wer schreibt den zusammenfassenden Prüfbericht, wer ist am Prüftag vor Ort mit Schlüssel zu MSR, Aufzugsmaschinenraum und Technikzentrale?",
      "H2::Umsetzung in der Praxis",
      "Ablauf in der Praxis – Erstprüfung: Nach Fertigstellung aller Gewerke, vor Inbetriebnahme oder vor behördlicher Abnahme. Voraussetzungen: brandschutztechnische Unterlagen und Schaltpläne aktuell, Parametrierung abgeschlossen, keine offenen Mängel aus Einzelabnahmen, Hausmeister und Gewerke erreichbar. Der Prüfsachverständige declariert Prüfszenarien (z. B. Melderauslösung in Zone X), beobachtet Reaktionen, protokolliert Abweichungen. Erstprüfbericht geht an die untere Bauaufsichtsbehörde – nicht nur in die Facility-Ablage.",
      "Ablauf in der Praxis – wiederkehrende Prüfung: Alle drei Jahre (BMA, Sprinkler, RWA maschinell, Sicherheitsbeleuchtung u. A.) oder sechs Jahre (Elektro, natürlicher RWA u. A.) seit der letzten Prüfung – Wirk-Prinzip ist dabei jedes Mal Pflicht, nicht nur alle zweite Runde. Besonders kritisch nach Umbauten: neue Brandabschnitte, geänderte Nutzung, nachgezogene Trennwände, geänderte Lüftung oder neue Aufzugssteuerung ohne angepasste Kopplung. Dann kann Erstprüfung für den geänderten Teil nötig sein – bevor wiederkehrend gezählt wird. Termine rechtzeitig der Bauaufsicht und der für die Brandschau zuständigen Behörde mitteilen (§ 2 Absatz 2).",
      "Bei Wirk-Prinzip-Prüfungen fallen häufig folgende Mängel auf. RWA startet nicht bei Melder in angrenzender Zone. Druckbelüftung läuft, aber Türöffner oder Magneten an Brandschutztüren reagieren falsch. Aufzug fährt nicht zur Haltestelle oder Personenaufzug bleibt fälschlich nutzbar. Sprinkler-Voralarm erreicht Zentrale, aber nicht Leitstelle. Sicherheitsbeleuchtung schaltet verzögert oder nicht in allen betroffenen Bereichen. Lüftung bleibt im Normalmodus. Schaltpläne und IST-Parametrierung widersprechen sich. Umbau dokumentiert, Kopplung nicht nachgezogen. Viele Mängel sind keine „Defekte“, sondern Konfigurations- oder Dokumentationsfehler – teuer, wenn sie erst bei Schau oder Einsatz auffallen.",
      "Vorbereitung für Betreiber – Checkliste: Genehmigtes Konzept und aktuelle brandschutztechnische Unterlagen bereitlegen. Liste aller Kopplungen aus Konzept und MSR abgleichen. Schlüssel und Ansprechpartner für Prüftag benennen. Wartungsfirmen und Prüfsachverständige terminlich abstimmen – ein gemeinsamer Tag spart Nachfahrten. Betrieb und Gäste/Mitarbeiter informieren (Rauchmelder-Auslösung, kurze Abschaltungen). Mängel aus dem Bericht in Maßnahmenliste, [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblichen Brandschutz] und ggf. GBU übernehmen; BSO Teil C fort schreiben. Berichte sechs Jahre aufbewahren.",
      "Verbindung zur Brandverhütungsschau: Die Schau nach § 26 BHKG prüft den IST-Zustand aus Sicht des öffentlichen Brandschutzes – Rettungswege, Ordnung, Technik im Betrieb. Wenn bei der Schau RWA oder BMA „nicht reagiert“, fehlt oft nicht die Wartung, sondern eine fehlgeschlagene oder nie durchgeführte Wirk-Prinzip-Prüfung. Wer beide Ebenen vernetzt ([Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Blog Brandverhütungsschau], [Link: /wissen/blog/brandschutzkonzept-betrieb-brandverhuetungsschau|Konzept und Betrieb]), vermeidet doppelte Mängel und teure Sondertermine.",
      "In Köln und NRW gilt in der Praxis Folgendes. In Versammlungsstätten, Hotels und Hochhäusern sind komplexe Kopplungen Standard – aber nach Mieterwechseln und Umbauten oft vergessen. Planen Sie Wirk-Prinzip-Prüfungen bewusst mit, nicht als Fußnote im BMA-Vertrag. H&S+ unterstützt Betreiber bei Prüfvorbereitung, Abgleich Konzept–Technik–BSO und Nachverfolgung von Mängeln – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO-Überblick], [Link: /wissen/ratgeber/bauordnung-nrw-brandschutz|BauO-Ratgeber], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/bma-pruefung-pruefvo-nrw-fristen|BMA-Prüfung und Fristen nach PrüfVO].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ist die Wirk-Prinzip-Prüfung optional?",
        answer:
          "Nein. § 2 Absatz 1 PrüfVO NRW verlangt sie ausdrücklich bei jeder Erstprüfung und jeder wiederkehrenden Prüfung technischer Anlagen – zusammen mit Wirksamkeit und Betriebssicherheit.",
      },
      {
        question: "Reicht die jährliche BMA-Wartung?",
        answer:
          "Nein. Wartung nach DIN 14675 ist Pflege der Anlage; die PrüfVO-Prüfung durch anerkannte Prüfsachverständige inklusive Wirk-Prinzip ist gesondert und höchstens alle drei Jahre (BMA) wiederkehrend.",
      },
      {
        question: "Was passiert bei Mängeln in der Wirk-Prinzip-Prüfung?",
        answer:
          "Konkret gefährliche Mängel sind unverzüglich zu beseitigen, sonstige in angemessener Frist. Beseitigung dem Prüfsachverständigen mitteilen. Ohne Nachweis kann die Anlage als nicht betriebssicher gelten.",
      },
      {
        question: "Brauche ich nach einem Umbau eine neue Wirk-Prinzip-Prüfung?",
        answer:
          "Nach wesentlichen Änderungen vor Wiederinbetriebnahme ist eine Erstprüfung durch den Bauherrn vorgesehen – inklusive Wirk-Prinzip. Betroffen sind oft geänderte Brandabschnitte, Rettungswege, BMA-Zonen oder neue Kopplungen.",
      },
      {
        question: "Wo steht, welche Kopplungen geprüft werden müssen?",
        answer:
          "Maßgeblich sind das genehmigte Brandschutzkonzept nach § 9 BauPrüfVO, brandschutztechnische Unterlagen und MSR-Dokumentation. Was dort vorgesehen ist, muss bei der Wirk-Prinzip-Prüfung funktionieren.",
      },
    ],
  },
  {
    slug: "bma-pruefung-pruefvo-nrw-fristen",
    title: "Brandmeldeanlage prüfen nach PrüfVO NRW – Fristen, Pflichten und Abgrenzung zur Wartung",
    excerpt:
      "BMA-Prüfung in NRW: Erst- und Wiederholungsprüfung alle 3 Jahre durch Prüfsachverständige, Abgrenzung zu DIN 14675-Wartung und BetrSichV, Erstprüfung nach Umbau, Leitstelle und Dokumentation für Betreiber.",
    date: "2025-09-16",
    dateModified: "2026-05-26",
    content: [
      "In fast jedem Sonderbau in NRW steht eine selbsttätige Brandmeldeanlage – Hotel, Versammlungsstätte, Krankenhaus, großes Gewerbeobjekt. Der Wartungsvertrag läuft, die Inspektion war im Frühjahr, das Wartungsbuch liegt im Technikraum. Trotzdem kann die gesetzliche Prüfung nach PrüfVO NRW überfällig sein – weil Wartung und PrüfVO-Prüfung nicht dasselbe sind, weil kein anerkannter Prüfsachverständiger beauftragt wurde oder weil nach einem Umbau die Erstprüfung fehlt. Dieser Artikel erklärt Pflichten, Fristen und typische Fehler speziell für die Brandmeldeanlage – als dritter Teil unserer PrüfVO-Serie nach [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO-Überblick] und [Link: /wissen/blog/wirk-prinzip-pruefung-pruefvo-nrw|Wirk-Prinzip-Prüfung].",
      "H2::Was gilt rechtlich?",
      "Rechtliche Grundlage: Die Brandmelde- und Alarmierungsanlage ist in § 1 Absatz 1 Satz 2 Nummer 8 der PrüfVO NRW ausdrücklich aufgeführt. Sie muss von anerkannten Prüfsachverständigen nach § 3 auf Wirksamkeit, Betriebssicherheit und bestimmungsgemäßes Zusammenwirken mit anderen Anlagen geprüft werden – also inklusive [Link: /wissen/blog/wirk-prinzip-pruefung-pruefvo-nrw|Wirk-Prinzip-Prüfung]. Wiederkehrend gilt: höchstens drei Jahre seit der letzten Prüfung. Das ist das gesetzliche Maximum, nicht das empfohlene Intervall – Versicherer und VdS-Regeln verlangen oft jährliche Wartung nach DIN 14675 zusätzlich.",
      "Drei Ebenen – nicht verwechseln: Erstens bauordnungsrechtliche PrüfVO-Prüfung durch Prüfsachverständigen (Erst- und Wiederholungsprüfung, Bericht, ggf. An Bauaufsicht). Zweitens laufende Wartung und Inspektion nach DIN 14675 durch Errichter oder anerkannten Wartungsbetrieb – hält die Anlage instand, ersetzt aber nicht die PrüfVO-Prüfung. Drittens Betriebssicherheitsrecht: Brandmeldeanlagen sind überwachungsbedürftige Anlagen nach BetrSichV – Prüfung durch befugte Personen im sicherheitstechnischen Betrieb. Alle drei können parallel gelten; ein einziger Termin deckt nur ab, was der Beauftragte ausdrücklich als Prüfsachverständiger nach PrüfVO dokumentiert.",
      "Erstprüfung – wann und wer zahlt: Vor der ersten Inbetriebnahme und nach wesentlichen Änderungen vor der Wiederinbetriebnahme veranlasst und bezahlt der Bauherr die Erstprüfung. Wesentliche Änderungen sind typisch: Mieterausbau mit neuer Zonierung, neue Brandabschnitte, zusätzliche Melder oder geänderte Alarmierungsbereiche, Umstellung der Leitstellen-Anbindung, Austausch der Zentrale mit geänderter Kopplung zu RWA oder Aufzug. Der Erstprüfbericht geht an die untere Bauaufsichtsbehörde – nicht nur an den Facility-Dienstleister. Wer nach Umbau nur die Wartungsfirma kommen lässt, erfüllt die Erstprüfung nicht.",
      "Wiederholungsprüfung – Betreiberpflicht: Im laufenden Betrieb veranlasst und trägt der Betreiber die Kosten. Frist: höchstens drei Jahre seit der letzten PrüfVO-Prüfung der BMA – unabhängig davon, ob jährlich gewartet wurde. § 2 Absatz 2 verlangt: Prüftermine rechtzeitig der Bauaufsicht und der für die Brandschau zuständigen Behörde mitteilen; Berichte mindestens sechs Jahre aufbewahren und auf Verlangen vorlegen; bei Mängeln unverzüglich beseitigen und dem Prüfsachverständigen mitteilen. Die Bauaufsicht kann bei § 10 Sonderbau-Prüfungen ausdrücklich prüfen, ob BMA-Prüfungen fristgereich erfolgten.",
      "Der Prüfsachverständige überprüft insbesondere Folgendes. Vollständigkeit und Funktion der Melder, Handmelder und Zentrale. Stromversorgung und Akkus. Alarmierung im Gebäude. Übertragungswege zur Leitstelle ([Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BMA und Leitstelle]). Abgleich von Melderliste, Zonenplan und IST-Ausbau. Feuerwehrbedienfeld und Anzeigen. Störungsmanagement. Kopplungen im Rahmen der Wirk-Prinzip-Prüfung (RWA, Aufzug, Druckbelüftung, Sprinkler-Voralarm). Maßstab sind Genehmigung, [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|Brandschutzkonzept § 9] und brandschutztechnische Unterlagen – nicht der Stand von vor fünf Jahren.",
      "H2::Umsetzung in der Praxis",
      "Wartung nach DIN 14675 – was sie leistet und was nicht: Der Wartungsvertrag sichert Inspektion, Reinigung, Funktionschecks und Dokumentation im Wartungsbuch – oft jährlich oder häufiger. Das ist betriebsnotwendig und von Versicherern gefordert. Er ersetzt aber nicht die gesetzliche Prüfung durch einen staatlich anerkannten Prüfsachverständigen nach PrüfVO. In der Praxis koordinieren viele Betreiber Wartung und PrüfVO-Termin im selben Jahr – sinnvoll, wenn der Prüfsachverständige die Qualifikation hat und der Umfang schriftlich als PrüfVO-Prüfung beauftragt wird.",
      "Leitstelle und Fehlalarm-Management: Für Sonderbauten ist die unmittelbare Aufschaltung zur einheitlichen Leitstelle zentral – technisch über BauO und SBauV, betrieblich über [Link: /wissen/blog/bma-leitstelle-bhkg-nrw|BHKG und Leitstelle]. Die PrüfVO-Prüfung muss die Übertragung und Rückmeldungen mit einbeziehen. Häufige Mängel: veraltete Anschlussdaten nach Provider-Wechsel, fehlende Testmeldungen, Störungen dauerhaft quittiert ohne Behebung, Melderliste passt nicht zum Mieterausbau. Diese Punkte fallen auch bei der [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau] auf – doppelte Nachbesserung vermeiden, indem BMA-Prüfung und Schau-Vorbereitung vernetzt werden.",
      "Betreiber sollten folgende Unterlagen führen. Führen Sie für die BMA mindestens: Datum der letzten PrüfVO-Prüfung und nächste Frist. Name und Anerkennungsbescheid des Prüfsachverständigen. Erstprüfberichte und Wiederholungsberichte (sechs Jahre Aufbewahrung). Wartungsbuch DIN 14675. Zonen- und Melderlisten in aktueller Fassung. Protokolle von Probealarmen und Störungsbuch. Verknüpfung in [Link: /wissen/blog/brandschutzordnung-din-14096|BSO Teil C] und [Link: /wissen/ratgeber/brandschutz-betrieb|Prüfplan betrieblicher Brandschutz]. Bei Mietobjekten schriftlich klären, wer Eigentümer, Verwalter und Nutzer welche Termine veranlasst.",
      "In der Praxis treten häufig folgende Fehler auf. Wartungsvertrag als Ersatz für PrüfVO-Prüfung verkauft oder verstanden. Letzte PrüfVO-Prüfung unbekannt oder vor über drei Jahren. Umbau ohne Erstprüfung. Melderzonen nicht nachgezogen. Leitstelle testet niemand. Wirk-Prinzip-Kopplungen nie geprüft. Berichte nur bei der Wartungsfirma, nicht beim Betreiber archiviert. Bauaufsichts-Prüfung § 10 überrascht, weil Termine nicht angekündigt wurden.",
      "In Köln und NRW gilt in der Praxis Folgendes. In dicht bebauten Sonderbauten mit hoher Fehlalarm-Sensibilität lohnt Abstimmung mit Feuerwehr und Leitstelle vor Prüf- und Wartungsterminen. Planen Sie BMA-PrüfVO-Termine fest in den Kalender – nicht erst, wenn die Behörde nachfragt. H&S+ unterstützt Betreiber bei Prüfplan, Vorbereitung und Schnittstellen zu BSO, Schau und Genehmigungsunterlagen – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO-Überblick], [Link: /kontakt|Kostenlose Erstberatung]. Fortsetzung der Serie: [Link: /wissen/blog/sprinkler-rwa-pruefung-pruefvo-nrw|Sprinkler, RWA und Löschanlagen nach PrüfVO].",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie oft muss eine BMA nach PrüfVO NRW geprüft werden?",
        answer:
          "Wiederkehrend höchstens alle drei Jahre seit der letzten Prüfung durch einen anerkannten Prüfsachverständigen – zusätzlich zur Erstprüfung vor Inbetriebnahme und nach wesentlichen Änderungen. Jährliche Wartung nach DIN 14675 ist davon unabhängig.",
      },
      {
        question: "Kann die Wartungsfirma die PrüfVO-Prüfung übernehmen?",
        answer:
          "Nur wenn sie über einen staatlich anerkannten Prüfsachverständigen für Brandmeldeanlagen verfügt und die Prüfung ausdrücklich als PrüfVO-Prüfung mit Prüfbericht beauftragt wird. Normale Wartung nach DIN 14675 reicht nicht.",
      },
      {
        question: "Was ist der Unterschied zu BetrSichV?",
        answer:
          "BetrSichV verlangt Prüfung überwachungsbedürftiger Anlagen im sicherheitstechnischen Betrieb. PrüfVO NRW ist die landesrechtliche bauaufsichtliche Prüfpflicht in Sonderbauten mit Prüfsachverständigen, Fristen und Meldung an die Bauaufsicht. Beide können parallel gelten.",
      },
      {
        question: "Muss ich die Bauaufsicht über BMA-Prüftermine informieren?",
        answer:
          "Ja. § 2 Absatz 2 PrüfVO verlangt, Prüftermine rechtzeitig der unteren Bauaufsichtsbehörde und der für die Brandschau zuständigen Behörde mitzuteilen.",
      },
      {
        question: "Brauche ich nach Mieterumbau eine neue BMA-Prüfung?",
        answer:
          "Bei wesentlichen Änderungen der Zonierung, Melder oder Alarmierung ist vor Wiederinbetriebnahme eine Erstprüfung durch den Bauherrn vorgesehen. Bei rein organisatorischen Änderungen ohne Technik reicht ggf. die nächste fristgerechte Wiederholungsprüfung – im Zweifel mit Prüfsachverständigem klären.",
      },
    ],
  },
  {
    slug: "sprinkler-rwa-pruefung-pruefvo-nrw",
    title: "Sprinkler, RWA und Löschanlagen prüfen nach PrüfVO NRW – Fristen und Betreiberpflichten",
    excerpt:
      "Sprinkler, maschinelle und natürliche RWA, Druckbelüftung, nicht-selbsttätige Löschanlagen: Erst- und Wiederholungsprüfung nach PrüfVO NRW, Fristen 3 und 6 Jahre, Wirk-Prinzip mit BMA, typische Mängel für Betreiber.",
    date: "2025-09-23",
    dateModified: "2026-05-26",
    content: [
      "Neben der Brandmeldeanlage entscheiden im Brandfall oft Anlagen, die im Alltag unsichtbar bleiben: Sprinkler in der Decke, Rauchabzugsklappen im Dach, Druckbelüftung in Treppenräumen, natürliche RWA-Lüftungsöffnungen oder ortsfeste Schaum- und Gaslöschanlagen in Sonderbetrieben. Sie sind in § 1 PrüfVO NRW gesondert aufgeführt – und unterliegen denselben Grundregeln wie die BMA: Erstprüfung vor Inbetriebnahme, wiederkehrende Prüfung durch anerkannte Prüfsachverständige, Wirk-Prinzip-Prüfung mit anderen Anlagen, dokumentierte Berichte. Dieser Artikel ordnet Sprinkler, RWA und Löschanlagen ein – als vierter Teil unserer PrüfVO-Serie nach [Link: /wissen/blog/bma-pruefung-pruefvo-nrw-fristen|BMA-Prüfung] und [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO-Überblick].",
      "H2::Was gilt rechtlich?",
      "Welche Anlagen, welche Frist: § 1 Absatz 1 Satz 2 der PrüfVO nennt ausdrücklich ortsfeste selbsttätige Feuerlöschanlagen (in der Praxis vor allem Sprinkler), maschinelle Rauchabzugsanlagen, Druckbelüftungsanlagen zur Rauchfreihaltung von Rettungswegen sowie ortsfeste nicht-selbsttätige Feuerlöschanlagen. Dazu kommen lüftungstechnische Anlagen und maschinelle Garagenlüftung in geschlossenen Garagen – eng mit RWA und Entrauchung verknüpft. Wiederkehrend gelten höchstens drei Jahre für Sprinkler, maschinellen RWA, Druckbelüftung und die genannten Lüftungsanlagen (Nummern 2 bis 6 der Gesetzesliste). Natürliche Rauchabzugsanlagen und nicht-selbsttätige Löschanlagen unterliegen höchstens sechs Jahren (Nummern 10 und 11). Wer nur Sprinkler im Kalender hat, aber maschinellen RWA vergisst, erfüllt die Verordnung nicht vollständig.",
      "Gemeinsame Pflichten für alle Anlagentypen: § 2 PrüfVO verlangt für jede Anlage Wirksamkeit, Betriebssicherheit und bestimmungsgemäßes Zusammenwirken – die [Link: /wissen/blog/wirk-prinzip-pruefung-pruefvo-nrw|Wirk-Prinzip-Prüfung]. Erstprüfung: Bauherr, vor Inbetriebnahme oder nach wesentlicher Änderung. Wiederholungsprüfung: Betreiber, innerhalb der Frist seit der letzten Prüfung. Unterlagen bereithalten, Mängel beseitigen, Termine der Bauaufsicht und Brandschau-Behörde mitteilen, Berichte sechs Jahre aufbewahren. Versicherer und VdS-Regeln verlangen für Sprinkler oft jährliche Inspektion – das ersetzt die dreijährliche PrüfVO-Prüfung nicht, ergänzt sie.",
      "Bei der Sprinklerprüfung wird insbesondere Folgendes geprüft. Pumpen, Ventile, Alarmventilstrecke, Wasserversorgung, Druckhaltung, Leitungen und Sprinklerköpfe im Stichprobenprinzip, Voralarm an Brandmelderzentrale und Leitstelle, Steuerung und Notstrom. Im Rahmen der Wirk-Prinzip-Prüfung: löst Sprinkler-Voralarm die BMA, schaltet Lüftung um, meldet an Leitstelle. Häufige Mängel sind verstopfte Köpfe durch Anstrich oder Lagerung, Pumpen-Tests nur auf Papier, undichte Alarmventilstrecken oder Voralarme, die in der Zentrale nicht sichtbar sind. Nach Umbauten in der Sprinkler-Zone ist Erstprüfung vor Wiederinbetriebnahme vorgesehen – nicht nur Nachmeldung an die Versicherung.",
      "Maschineller RWA und Druckbelüftung: Maschinelle Rauchabzugsanlagen entrauchen atriumartige Räume, Hallen oder Treppenräume – oft ausgelöst über BMA oder eigenständige Melder. Druckbelüftung hält Rettungswege rauchfrei und arbeitet mit Feuerschutzabschlüssen, Magneten und Türöffnern zusammen. Beide sind kritische Wirk-Prinzip-Partner der BMA. Prüfsachverständige testen Auslösung, Ventilatorleistung, Klappenstellungen, Stromversorgung und Rückmeldungen an die Brandmelderzentrale. Häufige Mängel: Klappen durch Umbau blockiert, MSR-Parameter veraltet, Druckbelüftung startet, Türen bleiben geschlossen, natürliche und maschinelle Entrauchung widersprechen sich. SBauV und [Link: /wissen/blog/brandschutzkonzept-paragraph-9-baupruefvo|Brandschutzkonzept § 9] beschreiben die Soll-Logik – die PrüfVO prüft, ob sie im Betrieb noch stimmt.",
      "Natürliche RWA – sechs Jahre, trotzdem kritisch: Natürliche Rauchabzugsanlagen (Lüftungsöffnungen, Rauch- und Wärmeabzug über Dach oder Fassade) haben eine längere gesetzliche Wiederholungsfrist, sind aber im Brandfall unverzichtbar. Prüfung umfasst Öffnungswege, Auslösemechanismen, Feststellanlagen, Wartungszugang und Kopplung zur BMA. Im Alltag werden Öffnungen zugestellt, verglast oder verstellt – ein klassischer Befund bei [Link: /wissen/blog/brandverhuetungsschau-bhkg-nrw|Brandverhütungsschau] und PrüfVO gleichermaßen. Auch hier gilt Wirk-Prinzip, wenn im Konzept eine automatische Auslösung vorgesehen ist.",
      "H2::Umsetzung in der Praxis",
      "Nicht-selbsttätige Löschanlagen: Ortsfeste Schaum-, Gas- oder Pulverlöschanlagen in Küchen, Maschinen, Umspannstationen oder Sonderbetrieben – sechs Jahre wiederkehrend, aber betrieblich sensibel. Prüfung durch Fach-Prüfsachverständige der jeweiligen Fachrichtung; Auslösung oft manuell oder über Brandmelder. Wirk-Prinzip: Meldet Auslösung an Zentrale, stoppt Lüftung, schließt Brandabschnitte? Betreiber müssen wissen, wo Auslöser und Sperrbereiche liegen – [Link: /wissen/blog/brandschutzordnung-din-14096|BSO Teil C] und Unterweisung.",
      "Lüftung und Garagen: Lüftungstechnische Anlagen und maschinelle Lüftung in geschlossenen Mittel- und Großgaragen sind PrüfVO-Anlagen mit dreijähriger Frist – oft zusammen mit CO-Warnanlagen in Großgaragen ([Link: /wissen/blog/sonderbauverordnung-teil-5-garagen|SBauV Garagen]). Brandfallsteuerung der Lüftung (Abschalten oder Umschalten) ist Wirk-Prinzip-Thema mit BMA und RWA. Tiefgaragen in Hotels oder Einkaufszentren haben damit mehrere parallele Prüftermine – ein integrierter Prüfplan vermeidet Lücken.",
      "Mehrere Fachrichtungen – ein Terminplan: Sprinkler, RWA, Lüftung und BMA haben unterschiedliche Prüfsachverständigen-Fachrichtungen. Koordinieren Sie Termine und Wirk-Prinzip-Tests, damit nicht jede Firma nur ihre Anlage isoliert prüft. Idealerweise ein koordinierter Prüftag mit Abstimmung vorher: wer löst was aus, wer protokolliert die Gesamtkette. Der [Link: /wissen/ratgeber/brandschutz-betrieb|Ratgeber betrieblicher Brandschutz] empfiehlt einen Prüfkalender nach dem strengsten Maßstab – gesetzlich, versichererisch, herstellerseitig.",
      "In der Praxis treten häufig folgende Fehler auf. Nur Sprinkler-Inspizient, kein Prüfsachverständiger RWA. Natürliche RWA seit Jahren nicht geprüft. Druckbelüftung und BMA nie gemeinsam getestet. Erstprüfung nach Hallenumbau fehlt. Wartungsprotokolle ohne PrüfVO-Bericht. Unterschiedliche Fristen für Anlagen im selben Brandabschnitt nicht im Kalender. Mängel aus Prüfbericht nicht in Maßnahmenliste und BSO übernommen.",
      "In Köln und NRW gilt in der Praxis Folgendes. In Versammlungsstätten, Hochhäusern und großen Gewerbehallen sind Sprinkler und Entrauchung Standard – aber nach Nutzungsänderungen oft der vergessene Pflichtenblock. Vor §-10-Prüfungen durch die Bauaufsicht alle Prüfberichte und Fristen bereithalten. H&S+ unterstützt Betreiber bei Prüfplan, Koordination der Fachrichtungen und Vorbereitung behördlicher Prüfungen – [Link: /brandschutz|Leistungen Brandschutz], [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO-Überblick], [Link: /kontakt|Kostenlose Erstberatung]. Nächster Teil der Serie: Sonderbau-Prüfung durch die Bauaufsicht nach § 10 PrüfVO.",
      "Health and Safety+ – [Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie oft muss ein Sprinkler nach PrüfVO NRW geprüft werden?",
        answer:
          "Wiederkehrend höchstens alle drei Jahre seit der letzten Prüfung durch einen anerkannten Prüfsachverständigen – plus Erstprüfung vor Inbetriebnahme und nach wesentlichen Änderungen. Versicherer verlangen oft zusätzlich jährliche Inspektion.",
      },
      {
        question: "Gilt für natürliche RWA eine kürzere Frist?",
        answer:
          "Nein – natürliche Rauchabzugsanlagen unterliegen höchstens sechs Jahren zwischen den wiederkehrenden Prüfungen. Betrieblich sollten sie dennoch regelmäßig auf Freihaltung und Funktion kontrolliert werden.",
      },
      {
        question: "Muss Sprinkler-Voralarm mit der BMA getestet werden?",
        answer:
          "Ja, im Rahmen der Wirk-Prinzip-Prüfung. Wenn im Konzept eine Kopplung vorgesehen ist, muss sie bei jeder Erst- und Wiederholungsprüfung funktionsfähig nachweisbar sein.",
      },
      {
        question: "Wer beauftragt die Erstprüfung nach Umbau einer Halle?",
        answer:
          "Der Bauherr veranlasst und trägt die Kosten der Erstprüfung vor Wiederinbetriebnahme nach wesentlichen Änderungen – für alle betroffenen Anlagen (Sprinkler, RWA, Lüftung), nicht nur für eine.",
      },
      {
        question: "Was ist der Unterschied zwischen Inspektion und PrüfVO-Prüfung beim Sprinkler?",
        answer:
          "Inspektion nach VdS oder Versicherer ist betriebliche Wartung. PrüfVO-Prüfung ist die gesetzliche bauaufsichtliche Prüfung durch anerkannte Prüfsachverständige mit Bericht und Fristen – beides parallel nötig.",
      },
    ],
  },
  // BetrSichV-Hub: kompakter Arbeitsschutz-Megabrain-Spoke
  {
    slug: "betrsichv-einfach-erklaert",
    title: "BetrSichV einfach erklärt – Arbeitsmittel, Prüfung und Unterweisung",
    excerpt:
      "Betriebssicherheitsverordnung (BetrSichV): Gefährdungsbeurteilung, sichere Verwendung von Arbeitsmitteln, befähigte Person, § 12 Unterweisung – Abgrenzung zu PrüfVO und DGUV V3 für Betriebe in Köln und NRW.",
    date: "2025-09-30",
    dateModified: "2026-05-26",
    content: [
      "Wer Maschinen, Werkzeuge, Regaltechnik oder elektrische Betriebsmittel einsetzt, berührt fast immer die Betriebssicherheitsverordnung – kurz BetrSichV. Sie konkretisiert das Arbeitsschutzgesetz für Arbeitsmittel: Was der Arbeitgeber vor Inbetriebnahme klären muss, wer prüft, wer unterweist – und wie das mit der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] zusammenhängt. Stand der Verordnung: 3. Februar 2015, zuletzt geändert Dezember 2025. Dieser Artikel ist der kompakte Einstieg; Vertiefungen: [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Handhubwagen prüfen], [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV Vorschrift 3] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Rechtslogik in einem Satz: Das ArbSchG verpflichtet zum wirksamen Arbeitsschutz. Die BetrSichV regelt die sichere Verwendung von Arbeitsmitteln – alles, womit gearbeitet wird: Maschinen, Anlagen, Werkzeuge, Hebezeuge, Druckgeräte, auch ortsveränderliche Geräte. Sie ersetzt weder die ArbStättV mit ihren [Link: /wissen/blog/asr-einfach-erklaert|Technischen Regeln für Arbeitsstätten (ASR)] noch die GefStoffV mit [Link: /wissen/blog/trgs-einfach-erklaert|TRGS] (Stoffe) noch die [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO NRW] (bauaufsichtliche Anlagen in Sonderbauten). Alle können parallel gelten.",
      "Abschnitt 1 – Anwendungsbereich: Die BetrSichV gilt für alle Arbeitsmittel im Betrieb – neu und gebraucht, gekauft, gemietet oder selbst gebaut. Arbeitsmittel müssen für den vorgesehenen Einsatz geeignet sein, den Schutz der Beschäftigten gewährleisten und den Stand der Technik einhalten. Wo CE-Kennzeichnung vorgeschrieben ist, darf nur konformes Equipment verwendet werden. Eigenbauten und Umbauten brauchen eine dokumentierte Sicherheitsbeurteilung vor Inbetriebnahme – nicht nur mündliche Freigabe der Werkstattleitung.",
      "Abschnitt 2 – Gefährdungsbeurteilung zuerst: Bevor ein Arbeitsmittel genutzt wird, muss der Arbeitgeber in der [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|Gefährdungsbeurteilung] die damit verbundenen Gefährdungen ermitteln und Maßnahmen festlegen – STOP-Prinzip: Substitution, Technik, Organisation, Person. Daraus folgen: welche Arbeitsmittel zulässig sind, welche Schutzeinrichtungen nötig sind, wer unterweist, wer prüft, in welchen Abständen. Ohne GBU-Bezug ist eine Prüfplakette am Regal oder Hubwagen formal wertlos.",
      "Instandhaltung und Prüfung: Der Arbeitgeber muss Arbeitsmittel instand halten und deren sicheren Zustand dauerhaft sicherstellen. Wiederkehrende Prüfungen richten sich nach Herstellerangaben, [Link: /wissen/blog/trbs-einfach-erklaert|TRBS] (Technische Regeln Betriebssicherheit) und der Gefährdungsbeurteilung – nicht nach Bauchgefühl. Durchführen darf eine zur Prüfung befähigte Person (TRBS 1201/1203) oder in bestimmten Fällen ein Prüfsachverständiger (z. B. Bei Kranen). Der Arbeitgeber bleibt verantwortlich – auch bei externen Prüfdiensten.",
      "H2::Umsetzung in der Praxis",
      "Nach § 12 BetrSichV gilt für die Unterweisung Folgendes. Beschäftigte, die Arbeitsmittel verwenden, müssen ausreichend und angemessen unterwiesen werden – Inhalt aus der Gefährdungsbeurteilung, vor Aufnahme der Tätigkeit, bei Änderungen wiederholt. Für die Verwendung von Arbeitsmitteln empfiehlt die Arbeitsschutzverwaltung NRW Präsenzunterweisung mit Demonstration am Arbeitsplatz. Das ergänzt die allgemeine [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung nach § 12 ArbSchG] – beide Nachweise getrennt dokumentieren.",
      "Überwachungsbedürftige Anlagen (Abschnitt 3): Bestimmte Anlagen – Aufzüge, Druckgeräte, Krananlagen u. A. – unterliegen verschärften Anforderungen. Auch hier gilt Betriebssicherheit und wiederkehrende Prüfung. In Sonderbauten in NRW kommt zusätzlich die [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO] mit staatlich anerkannten Prüfsachverständigen, Fristen und Meldung an die Bauaufsicht hinzu – z. B. Bei Brandmeldeanlagen. Eine BMA kann gleichzeitig überwachungsbedürftige Anlage nach BetrSichV und PrüfVO-Anlage sein. Ein Prüfkalender muss alle Ebenen abbilden.",
      "Vier Ebenen – nicht verwechseln: Erstens BetrSichV und [Link: /wissen/blog/trbs-einfach-erklaert|TRBS] für Arbeitsmittel und überwachungsbedürftige Anlagen (befähigte Person, GBU). Zweitens [Link: /wissen/ratgeber/elektrosicherheit-dguv-v3|DGUV Vorschrift 3] für elektrische Betriebsmittel (ortsveränderlich und ortsfest). Drittens PrüfVO in Sonderbauten (Prüfsachverständiger, 3- und 6-Jahres-Fristen). Viertens betrieblicher [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz] mit BSO, Begehungen und Unterweisung. Wartungsvertrag allein erfüllt selten alle Ebenen.",
      "In Köln und NRW gilt in der Praxis Folgendes. Typische Arbeitsmittel in KMU sind Handhubwagen, Regale, Hebezeuge, Druckluft, Maschinen und Ladegeräte – jeweils mit GBU-Eintrag, Prüffrist und Nutzer-Unterweisung. Häufige Schwachstellen sind Prüfungen ohne befähigte Person, veraltete GBU nach Umbau, Sichtprüfungen durch Lagerpersonal ohne Dokumentation oder die Verwechslung von DGUV-V3-Sticker und PrüfVO-Bericht. Health and Safety+ verknüpft GBU, Prüfplan und Unterweisungen in Köln und NRW – [Link: /arbeitsschutz|Arbeitsschutz], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Ratgeber Gefährdungsbeurteilung], [Link: /kontakt|Kostenlose Erstberatung] [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt die BetrSichV?",
        answer:
          "Die sichere Verwendung von Arbeitsmitteln: Gefährdungsbeurteilung, geeignete Auswahl, Instandhaltung, wiederkehrende Prüfungen, Unterweisung und verschärfte Regeln für überwachungsbedürftige Anlagen.",
      },
      {
        question: "Wer darf Arbeitsmittel prüfen?",
        answer:
          "Eine zur Prüfung befähigte Person nach TRBS 1201/1203 mit passender Qualifikation – oder ein Prüfsachverständiger, wo die Verordnung oder TRBS das verlangen. Der Arbeitgeber bleibt verantwortlich.",
      },
      {
        question: "Was ist der Unterschied zwischen BetrSichV und PrüfVO NRW?",
        answer:
          "BetrSichV ist Bundes-Arbeitsschutzrecht für Arbeitsmittel. PrüfVO NRW ist landesrechtliche bauaufsichtliche Prüfpflicht für technische Anlagen in Sonderbauten durch anerkannte Prüfsachverständige. Beide können für dieselbe Anlage parallel gelten.",
      },
      {
        question: "Ersetzt die BetrSichV die Gefährdungsbeurteilung?",
        answer:
          "Nein. Die GBU nach § 5 ArbSchG ist die Grundlage. BetrSichV konkretisiert, was aus der GBU für Arbeitsmittel folgt – Auswahl, Prüfung, Unterweisung, Instandhaltung.",
      },
      {
        question: "Gilt die BetrSichV auch für kleine Betriebe?",
        answer:
          "Ja. Auch Kleinstbetriebe müssen Arbeitsmittel sicher stellen – Umfang und Dokumentation orientieren sich an Art der Gefährdung, nicht an der Mitarbeiterzahl.",
      },
    ],
  },
  // ASR-Hub: Technische Regeln für Arbeitsstätten – Megabrain-Einstieg
  {
    slug: "asr-einfach-erklaert",
    title: "ASR einfach erklärt – Technische Regeln für Arbeitsstätten im Überblick",
    excerpt:
      "Technische Regeln für Arbeitsstätten (ASR): Was sie sind, Bezug zu ArbStättV und Gefährdungsbeurteilung, Übersicht A1–A6 – kompakter Einstieg für Betriebe in NRW.",
    date: "2025-10-07",
    dateModified: "2026-05-26",
    content: [
      "Wer Arbeitsplätze einrichtet, umbaut oder betreibt, stößt früher oder später auf ASR – die Technischen Regeln für Arbeitsstätten. Sie konkretisieren die Arbeitsstättenverordnung (ArbStättV) für typische Betriebssituationen: Verkehrswege, Brandschutz, Lärm, Bildschirmarbeit, Erste Hilfe. Dieser Artikel ist der Einstieg in unsere ASR-Reihe – kein Gesetzestext, sondern Orientierung für Arbeitgeber, FaSi und Facility – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "So hängt es zusammen: Das Arbeitsschutzgesetz verlangt eine Gefährdungsbeurteilung. Die Arbeitsstättenverordnung (ArbStättV) definiert, was eine Arbeitsstätte leisten muss. Die ASR zeigen anhand konkreter Themen – Wege, Lärm, Bildschirm – wie Sie das im Betrieb umsetzen. Wer eine ASR einhält, darf davon ausgehen, dass die ArbStättV an dieser Stelle erfüllt ist.",
      "Das schließt andere Pflichten nicht aus: Maschinen und Geräte fallen unter die [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV], Stoffe unter GefStoffV und TRGS, Gebäudebrandschutz unter [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblichen Brandschutz]. In vielen Betrieben gelten mehrere Regelwerke gleichzeitig – das ist normal.",
      "Die ASR sind in Serien gegliedert – grob nach Thema: A1 für die Arbeitsstätte insgesamt (Flächen, Kennzeichnung, Wege, Türen). A2 für Gefahren wie Absturz, Brand und Flucht. A3 für Einwirkungen wie Licht, Temperatur, Lüftung und Lärm. A4 für Sanitär, Erste Hilfe und Unterkünfte; Pausenräume regeln Sie über den ArbStättV-Anhang.",
      "A5 gilt für besondere Arbeitsplätze: draußen und halboffen (Witterung, UV) sowie Straßenbaustellen. Bildschirmarbeit regelt seit 2024 die ASR A6 – in alten Checklisten steht noch fälschlich „A5.1 Büro“. Wer heute nach Bildschirm sucht, landet bei A6.",
      "Dazu kommen Querschnittsregeln wie ASR V3 zur Gefährdungsbeurteilung und V3a zur Barrierefreiheit. Gefahrstoffe gehören nicht in die ASR-Reihe A1 bis A6 – dafür gelten GefStoffV und TRGS. Überblick: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS einfach erklärt].",
      "H2::Umsetzung in der Praxis",
      "Was ASR in der Praxis bedeuten: Jede relevante ASR gehört in die [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] des betroffenen Bereichs – mit Ist-Begehung, Maßnahmenplan und Verknüpfung zur [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung]. Wer nur Vorlagen ohne Begehung nutzt, erfüllt Pflichten nicht. ASR sind kein Architektur-Handbuch für Neubauten allein – sie gelten auch im Bestand, bei Mieterausbau und auf Baustellen (ArbStättV-Anhang).",
      "Bereits vertieft auf handsplus.de – Brandschutz und Flucht: [Link: /wissen/blog/asr-a2-2-brandschutzhelfer|ASR A2.2 Brandschutzhelfer], [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|ASR A2.3 Flucht- und Rettungsplan]. Hitze und Getränke: [Link: /wissen/blog/getraenke-am-arbeitsplatz|ASR A3.5 Raumtemperatur].",
      "Neue Spokes dieser Reihe (Schwerpunkte Arbeitsschutz): [Link: /wissen/blog/asr-a6-bildschirmarbeit|ASR A6 Bildschirmarbeit], [Link: /wissen/blog/asr-a3-7-laerm-arbeitsplatz|ASR A3.7 Lärm], [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1 Absturz], [Link: /wissen/blog/asr-a4-3-erste-hilfe-arbeitsstaette|ASR A4.3 Erste Hilfe]. Baustellen: [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber] und [Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|Absturz im Bestand].",
      "Nicht jede ASR brauchen Sie als Einzelartikel: Flächenbedarf, Fußböden oder Außenarbeitsplätze hängen stark vom konkreten Betrieb ab – da reicht oft ein GBU-Abschnitt. Gefahrstoffe regeln Sie über GefStoffV und TRGS – Einstieg: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS einfach erklärt], nicht als 21-teilige ASR-Serie.",
      "Health and Safety+ verknüpft ASR-Themen in Gefährdungsbeurteilung, Begehung und Unterweisung – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /arbeitsschutz|Leistungen], [Link: /kontakt|Erstberatung] [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was sind ASR?",
        answer:
          "Technische Regeln für Arbeitsstätten – vom Ausschuss für Arbeitsstätten (ASTA) erlassen. Sie konkretisieren die ArbStättV für wiederkehrende Themen wie Verkehrswege, Lärm oder Bildschirmarbeit.",
      },
      {
        question: "Sind ASR Gesetz?",
        answer:
          "ASR sind keine Gesetze, sondern anerkannte Regeln. Bei Einhaltung gilt vermutet, dass ArbStättV-Anforderungen erfüllt sind. Abweichungen sind möglich, wenn gleichwertiger Schutz nachgewiesen wird.",
      },
      {
        question: "Braucht jeder Betrieb alle ASR?",
        answer:
          "Nein. Nur die ASR, deren Anwendungsbereich auf Ihre Arbeitsstätte und Tätigkeiten zutrifft – festgelegt in der Gefährdungsbeurteilung je Bereich.",
      },
      {
        question: "Was ist der Unterschied zu BetrSichV?",
        answer:
          "ASR regeln Arbeitsstätten und Arbeitsplätze (räumlich, organisatorisch, Einwirkungen). BetrSichV regelt Arbeitsmittel (Maschinen, Geräte, Prüfung). Beide ergänzen sich – siehe [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV einfach erklärt].",
      },
      {
        question: "Wo finde ich die aktuellen ASR-Texte?",
        answer:
          "Maßgeblich sind die im Bundesarbeitsblatt (GMBl) bekannt gemachten Fassungen auf der Website der Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA).",
      },
    ],
  },
  {
    slug: "asr-a6-bildschirmarbeit",
    title: "ASR A6 Bildschirmarbeit – Ergonomie, Pausen und GBU",
    excerpt:
      "ASR A6 Bildschirmarbeit (GMBl 2024): Gestaltung von Bildschirm- und Telearbeitsplätzen, Pausen und GBU – praxisnah für Köln und NRW.",
    date: "2025-10-14",
    dateModified: "2026-05-26",
    content: [
      "Fast jeder Betrieb hat Bildschirmarbeitsplätze – Verwaltung, Planung, Lagerbüro, Telearbeit. ASR A6 „Bildschirmarbeit“ (Ausgabe Juli 2024, GMBl 2024) konkretisiert ArbStättV-Anhang Nummer 6: Gestaltung von Bildschirmarbeitsplätzen und -geräten, Unterweisung, Telearbeitsplätze. In älteren Checklisten steht noch „ASR A5.1 Büro- und Bildschirmarbeitsplätze“ – maßgeblich ist heute A6. Grundlage bleibt § 5 ArbSchG: Gefährdungen ermitteln, bewerten, Maßnahmen umsetzen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Wann gilt ASR A6? Für ortsgebundene Bildschirmarbeitsplätze in Arbeitsstätten, Telearbeitsplätze (§ 2 Abs. 7 ArbStättV) und regelmäßig ortsveränderliche Nutzung tragbarer Geräte in der Arbeitsstätte – z. B. Notebook abgelegt mehr als 2 Stunden ohne Unterbrechung oder mehr als 3 Stunden am Tag mit Unterbrechungen; handgehaltene Geräte ab 1 Stunde am Tag; Kopf- oder körpergetragene Geräte (Datenbrillen) bei jeder Nutzung. Nicht erfasst: reine Kurz-Lesetasks ohne Eingabe, kleine Maschinenanzeigen, Gelegenheitsnutzung ohne regelmäßigen Charakter.",
      "Schnittstellen: Bildschirmgeräte sind Arbeitsmittel nach [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV]. Ergänzend gelten ASR A1.2 (Flächen), A3.4 (Beleuchtung), A3.5 (Temperatur – [Link: /wissen/blog/getraenke-am-arbeitsplatz|Raumtemperatur]), A3.6 (Lüftung), A3.7 (Lärm). Gefährdungsbeurteilung nach ASR V3 – nicht nur Ergonomie-Checkliste.",
      "Ergonomie – Kernpunkte: Bildschirm in angemessener Höhe und Abstand (Augen auf Oberkante oder leicht darunter), Tastatur und Maus ergonomisch, ausreichende Beinfreiheit, verstellbarer Stuhl (Anhang der ASR A6 mit Stuhlempfehlungen), Beleuchtung ohne Blendung und Reflexionen am Monitor. Steh-Sitz-Arbeitsplätze oder Wechsel zwischen Sitzen und Stehen können sinnvoll sein – in der GBU begründen.",
      "H2::Umsetzung in der Praxis",
      "Unterbrechungen: Regelmäßige Unterbrechungen der Bildschirmarbeit durch andere Tätigkeiten oder Pausen – nicht stundenlang am Monitor ohne Wechsel. Bei ausschließlicher Bildschirmarbeit Orientierung aus ArbStättV-Anhang (Pausenzeiten). Telearbeit/Homeoffice: gleiche Anforderungen, wenn der Arbeitgeber den Arbeitsplatz mitgestaltet, ausstattet oder dort dauerhaft arbeiten lässt – GBU-Abschnitt Telearbeit pflegen ([Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische Belastung]).",
      "Gefährdungsbeurteilung und Dokumentation: Pro Bereich oder repräsentativer Arbeitsplatz Ist-Zustand erfassen (Fotos, Checkliste ASR A6), Abweichungen bewerten, Maßnahmen mit Verantwortlichen und Fristen. Unterweisung vor Aufnahme der Tätigkeit und danach mindestens jährlich – Haltung, Pausen, Augenbelastung, nicht nur bei Einstellung. ArbMedVV/AMR 13.4 bei entsprechenden Tätigkeiten beachten.",
      "Bei Begehungen zeigen sich häufig Monitore, die zu hoch oder zu nah stehen, feste Stühle ohne Verstellung, störender Glanz auf dem Bildschirm, Kabel als Stolperfallen ([Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1]) oder zu wenig Tageslicht und kalte Zugluft (ASR A3.5).",
      "Health and Safety+ unterstützt bei GBU Büro/Verwaltung, Begehung und Unterweisung – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung], [Link: /kontakt|Kontakt]. Überblick ASR: [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt].",
    ],
    faq: [
      {
        question: "Gilt ASR A6 auch im Homeoffice und bei Telearbeit?",
        answer:
          "Ja, wenn der Arbeitgeber Telearbeitsplätze einrichtet oder den Arbeitsplatz mitgestaltet bzw. ausstattet – ASR A6 konkretisiert § 2 Abs. 7 ArbStättV. Reine Privaträume ohne Mitgestaltung durch den Arbeitgeber fallen anders zu bewerten.",
      },
      {
        question: "Was ist der Unterschied zu ASR A5.1?",
        answer:
          "ASR A5.1 regelt seit 2025 Arbeitsplätze im Freien und in nicht umschlossenen Bereichen (Witterung). Bildschirmarbeit ist seit GMBl 2024 ASR A6 – frühere A5.1-Unterlagen zu Büro/Bildschirm sind überholt.",
      },
      {
        question: "Muss jeder einen höhenverstellbaren Schreibtisch bekommen?",
        answer:
          "Nicht pauschal. Entscheidung aus der Gefährdungsbeurteilung – bei Beschwerden, langen Arbeitszeiten am Bildschirm oder Wechselbedarf kann ein Steh-Sitz-Arbeitsplatz erforderlich sein.",
      },
      {
        question: "Wer prüft Bildschirmarbeitsplätze?",
        answer:
          "Der Arbeitgeber über FaSi, Führungskräfte oder externe Beratung – keine behördliche Einzelprüfung, aber BG-Begehungen und Audits prüfen GBU und Ist-Zustand.",
      },
    ],
  },
  {
    slug: "asr-a3-7-laerm-arbeitsplatz",
    title: "ASR A3.7 Lärm am Arbeitsplatz – Bewertung, Gehörschutz und Maßnahmen",
    excerpt:
      "ASR A3.7 Lärm: Lärmbelastung beurteilen, Auslösewerte sowie technische und organisatorische Maßnahmen – praxisnah für Köln und NRW.",
    date: "2025-10-21",
    dateModified: "2026-06-26",
    content: [
      "Lärm ist eine der häufigsten physikalischen Gefährdungen in Produktion, Werkstatt, Logistik und Großküchen – und ein Standardthema bei BG-Begehungen. ASR A3.7 „Lärm“ konkretisiert ArbStättV-Anforderungen zur Lärmminderung. Ergänzend gilt die Lärm- und Vibrations-Arbeitsschutzverordnung (LArbSchV) mit Unterem Auslösewert 80 dB(A) und Oberem Auslösewert 85 dB(A) für Gehörschutzpflicht – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Gefährdungsbeurteilung Lärm: Zuerst Lärmquellen identifizieren (Maschinen, Druckluft, Stapler, Musik in Verkaufsflächen, Technikräume). Dann Beurteilung – bei Annahme von Überschreitungen Messung durch fachkundige Person oder Schallpegelmessung. Ergebnis: Expositionslevel, Maßnahmenkatalog nach STOP (Lärmminderung vor Gehörschutz). ASR A3.7 und LArbSchV in einem GBU-Kapitel, nicht getrennt widersprüchlich.",
      "Technische Maßnahmen: Kapselung, Schallschutzverkleidung, Wartung (undichtes Druckluft = Lärm), ruhigere Maschinen bei Neuanschaffung (Substitution). Organisatorisch: abgeschottete Zonen, Zeitfenster für laute Arbeiten, Begrenzung der Verweildauer in Lärmbereichen, Unterweisung.",
      "H2::Umsetzung in der Praxis",
      "Gehörschutz: Pflicht ab Oberem Auslösewert (85 dB(A) im 8-Stunden-Mittel) – passend zur Lärmsituation, persönlich anpassbar wo nötig, Tragepflicht durchsetzbar. Gehörschutz ist letzte Stufe, nicht Ersatz für Lärmminderung. Kennzeichnung von Gehörschutz-Zonen nach [Link: /wissen/blog/asr-einfach-erklaert|ASR A1.3].",
      "Besondere Bereiche: Großküchen (Lärm Spülmaschine, Lüftung), Werkstätten, Druckereien, Callcenter-Akustik (eher mittel, aber psychische Belastung). Lärm und [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische Belastung] gemeinsam betrachten, wo ständige Hintergrundgeräusche Konzentration stören.",
      "ASR A3.7 verlangt Lärmbeurteilung, technische und organisatorische Maßnahmen sowie Gehörschutz nur als letzte Stufe der STOP-Hierarchie. In Produktion und Handwerk in NRW sind Lärmkartierungen und Unterweisung zu Gehörschutz typische Prüfpunkte.",
      "Lärm gehört in die [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] inklusive psychischer Belastung bei dauerhaftem Lärmpegel – Abstimmung mit Betriebsarzt bei Vorsorge.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Lärmbegehungen sollten Lärmkarte, Gehörschutz-Konzept und technische Maßnahmen in der GBU verankert sein. Messprotokolle und Unterweisung zum Tragen von Gehörschutz müssen nachvollziehbar sein.",
      "Dokumentation: Messprotokolle, Maßnahmenplan, Gehörschutz-Ausgabe und Unterweisung, regelmäßige Wirksamkeitskontrolle (Tragen, Dichtigkeit). Health and Safety+ – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU], [Link: /kontakt|Kontakt]. Hub: [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt].",
    ],
    faq: [
      {
        question: "Was regelt ASR A3.7?",
        answer:
          "Lärm am Arbeitsplatz – Lärmminderung an der Quelle, technische und organisatorische Maßnahmen, Gehörschutz wenn Lärmpegel nicht ausreichend reduziert werden kann.",
      },
      {
        question: "Ab wann Gehörschutz?",
        answer:
          "Wenn Lärmpegel trotz Minderungsmaßnahmen oberhalb der Beurteilungspegel liegt – in GBU dokumentieren, PSA-BV beachten, Unterweisung und Tragepflicht.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Keine Lärmmessung, Gehörschutz ausgelegt aber nicht getragen, keine Unterweisung, fehlende Wartung schallgedämpfter Anlagen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/asr-einfach-erklaert|ASR-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU] und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung].",
      },
    ],
  },
  {
    slug: "asr-a2-1-absturz-absturzsicherung",
    title: "ASR A2.1 Absturz und Absturzsicherung – Höhen, Schutz, GBU",
    excerpt:
      "ASR A2.1 Absturz: Absturzhöhen, Seitenschutz, PSAgA und Rangfolge der Maßnahmen – praxisnah für Köln und NRW.",
    date: "2025-10-28",
    dateModified: "2026-06-26",
    content: [
      "Stürze gehören zu den häufigsten schweren Arbeitsunfällen – von der Dachkante über das Lagerregal bis zur offenen Bodenöffnung. ASR A2.1 regelt Schutz vor Absturz, Sturz auf der Ebene und herabfallenden Gegenständen. Auf Baustellen gelten zusätzlich BaustellV und [Link: /wissen/blog/trbs-2121-absturz-leitern|TRBS 2121] – [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] koordiniert Schnittstellen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Absturzhöhen – Orientierung: An Arbeitsplätzen und Verkehrswegen, wo Absturzgefahr besteht, gelten ab etwa 1 Meter Absturztiefe Anforderungen an Absturzsicherung. An weiteren Verkehrswegen und Flächen, die nicht ständig als Arbeitsplatz dienen, oft ab 2 Metern. Die GBU muss die konkrete Situation bewerten – keine pauschale „2-Meter-Regel“ ohne Begehung.",
      "Rangfolge der Maßnahmen: Zuerst Absturz vermeiden (Planung, Geländer, Abdeckungen, gesicherte Zugänge). Dann Absturz verhindern (Seitenschutz, Gitterroste, Absturzsicherungen an Dächern). Persönliche Schutzausrüstung gegen Absturz (PSAgA) nur, wenn kollektive Schutzmaßnahmen nicht möglich sind – mit Anschlageinrichtung, Unterweisung, Rettungskonzept.",
      "ASR A2.1 regelt Absturzgefahren an Kanten, Öffnungen, Dächern und Gerüsten – kollektiver Schutz (Geländer, Netze) hat Vorrang vor persönlicher Schutzausrüstung. Auf Baustellen in NRW greifen zusätzlich BaustellV, TRBS 2121 und die SiGe-Koordination.",
      "Typische Praxisfälle: Dacharbeiten ohne Seitenschutz, fehlende Absturzsicherung an Laderampen, provisorische Brücken. Die Maßnahmen gehören in GBU und Unterweisung – [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] bei Bauvorhaben.",
      "H2::Umsetzung in der Praxis",
      "Verkehrswege und Öffnungen: Bodenöffnungen, Treppen ohne Geländer, Laderampen, Dachflächen – absichern oder sperren. Herabfallende Gegenstände: Werkzeuge auf Dach, Material an Gerüst, Regalsicherung. Begehungs-Checkliste in GBU und SiGe-Plan.",
      "Praxis aus Mandaten: Dacharbeiten im Bestand ([Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|SiGeKo Dach/Köln]), Abbruch Seitenschutz ([Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Abbruchphase]), Lager mit fehlendem Regalschutz. Dokumentation: Fotos, Maßnahmen, Freigabe vor Arbeiten in Höhe.",
      "Schnittstelle Brandschutz: Fluchtwege dürfen nicht durch Absturzgefahren gefährdet werden – [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|ASR A2.3]. Leitern und Gerüste: [Link: /wissen/blog/trbs-2121-absturz-leitern|TRBS 2121]. Health and Safety+ – [Link: /wissen/blog/asr-einfach-erklaert|ASR-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab welcher Höhe brauche ich Geländer?",
        answer:
          "ASR A2.1 differenziert nach Arbeitsplatz (ca. 1 m Absturztiefe) und anderen Verkehrswegen (ca. 2 m). Immer objektbezogene Gefährdungsbeurteilung – Abweichungen nur mit gleichwertigem Schutz.",
      },
      {
        question: "Reicht PSAgA statt Geländer?",
        answer:
          "Nein, wenn kollektiver Schutz technisch möglich ist. PSAgA ist nachrangig und braucht Anschlageinrichtung, Prüfung, Unterweisung und Rettungsplanung.",
      },
      {
        question: "Gilt ASR A2.1 auf der Baustelle?",
        answer:
          "Ja, über ArbStättV-Anhang Baustellen – plus BaustellV/SiGeKo. SiGe-Plan und gewerkebezogene GBU müssen Absturzthemen abstimmen.",
      },
    ],
  },
  {
    slug: "asr-a4-3-erste-hilfe-arbeitsstaette",
    title: "ASR A4.3 Erste Hilfe – Räume, Ausstattung und Ersthelfer",
    excerpt:
      "ASR A4.3 Erste Hilfe: Ersthelfer-Anzahl, Erste-Hilfe-Räume, Ausstattung und Meldeeinrichtungen – praxisnah für Köln und NRW.",
    date: "2025-11-04",
    dateModified: "2026-06-26",
    content: [
      "Im Ernstfall zählt jede Minute – Erste Hilfe muss organisiert sein, nicht improvisiert. ASR A4.3 konkretisiert Erste-Hilfe-Räume, vergleichbare Einrichtungen und Ausstattung. Die Anzahl der Ersthelfer und deren Ausbildung regelt die DGUV Vorschrift 1 – beides gehört zusammen in die Gefährdungsbeurteilung – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Ersthelfer – Schwellen (Orientierung DGUV V1): Abhängig von Beschäftigtenzahl und besonderen Gefahren (z. B. erhöhte Unfallgefahr, Alleinarbeit, Fernverkehr). Typisch: ab 2–19 Beschäftigten mindestens ein Ersthelfer, ab 20 mehrere – genaue Tabelle in DGUV V1 und Betriebsanweisung. Ausbildung 9 UE, Auffrischung alle 2–3 Jahre.",
      "Erste-Hilfe-Raum: Pflicht u. a. bei mehr als 1.000 Beschäftigten oder bei mehr als 100 Beschäftigten mit besonderen Unfall- oder Gesundheitsgefahren. Raum im Erdgeschoss, mit Krankentrage erreichbar, ausreichend groß, beleuchtet, ausgestattet (Verbandmaterial, Liege, Augenspülung je nach Gefährdung). Auf Baustellen: Erste-Hilfe-Container als vergleichbare Einrichtung möglich.",
      "H2::Umsetzung in der Praxis",
      "Ausstattung und Erreichbarkeit: Verbandskästen an festen, bekannten Stellen – Menge und Inhalt nach Gefährdung (Werkstatt vs. Büro). Meldeeinrichtungen (Telefon, Notrufnummern) ständig zugänglich. Bei Alleinarbeit: Personen-Notsignal-Anlagen prüfen. Rettungswege für Rettungsdienst freihalten – Schnittstelle [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Fluchtwege ASR A2.3].",
      "GBU Erste Hilfe: Gefährdungen (Schnitt, Chemie, Strom, Höhe), daraus Ersthelferzahl, Ausstattung, ggf. Erste-Hilfe-Raum, Ablauf Notfall ( wer alarmiert, wer leitet Erste Hilfe). Jährlich in Unterweisung und bei Begehung prüfen: Verbandskasten vollständig, Ersthelfer-Liste aktuell, Schilder sichtbar.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor Prüfungen sollten Ersthelfer benannt und geschult, Erste-Hilfe-Material erreichbar und Notfallorganisation in der GBU dokumentiert sein – abgestimmt mit § 10 ArbSchG und DGUV V1.",
      "ASR A4.3 regelt Erste-Hilfe in Arbeitsstätten: Anzahl Ersthelfer nach Beschäftigtenzahl und Gefährdung, Ausstattung, Erreichbarkeit und Auffrischung. Für Betriebe mit mehreren Standorten in NRW braucht jeder Standort eine eigene Betrachtung.",
      "Notfallpläne müssen mit Brandschutz und Evakuierung abgestimmt sein – [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan] und [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz im Betrieb].",
      "Health and Safety+ plant Erste-Hilfe-Organisation mit in ASA und GBU – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz], [Link: /wissen/blog/asr-einfach-erklaert|ASR-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt ASR A4.3?",
        answer:
          "Erste Hilfe in Arbeitsstätten – Ausstattung, Erreichbarkeit, Anzahl und Qualifikation der Ersthelfer nach Beschäftigtenzahl und besonderen Gefahren.",
      },
      {
        question: "Wie viele Ersthelfer?",
        answer:
          "Nach DGUV V1 und ASR A4.3 – abhängig von Beschäftigtenzahl und Gefährdung (Gefahrstoffe, Alleinarbeit). In GBU begründen.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Ersthelfer benannt aber Schulung abgelaufen, Kasten unvollständig, Defi ohne geschulte Personen, kein Augenspülbecken bei Gefahrstoffen.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/arbschg-erste-hilfe-notfallmassnahmen|§ 10 ArbSchG Notfall], [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub] und [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV].",
      },
    ],
  },
  // TRGS-Hub: GefStoffV und Technische Regeln für Gefahrstoffe – Megabrain-Einstieg
  {
    slug: "trgs-einfach-erklaert",
    title: "TRGS einfach erklärt – Gefahrstoffe von GefStoffV bis Betriebsalltag",
    excerpt:
      "Technische Regeln für Gefahrstoffe (TRGS): Was sie sind, Bezug zur GefStoffV, Serien 400/500/800 – kompakter Einstieg für Betriebe in Köln und NRW.",
    date: "2025-11-11",
    dateModified: "2026-05-26",
    content: [
      "Reiniger im Lager, Öl in der Werkstatt, Kleber in der Produktion – sobald im Betrieb mit Stoffen gearbeitet wird, gilt fast immer die Gefahrstoffverordnung (GefStoffV). Die Technischen Regeln für Gefahrstoffe (TRGS) zeigen, wie Sie das in der Praxis umsetzen – ähnlich wie ASR zur Arbeitsstättenverordnung. Dieser Artikel ordnet TRGS ein, ohne Gesetzestext abzutippen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "So hängt es zusammen: Das Arbeitsschutzgesetz verlangt eine Gefährdungsbeurteilung. Die GefStoffV regelt Pflichten bei Stoffen – Verzeichnis, Kennzeichnung, Unterweisung, Schutzmaßnahmen. TRGS konkretisieren das für typische Situationen: GBU, Lager, Schweißen, Brand. Wer eine TRGS einhält, darf davon ausgehen, dass die GefStoffV an dieser Stelle erfüllt ist.",
      "TRGS sind nummeriert – grob nach Thema: 200er Einstufung und Sicherheitsdatenblatt. 400er Gefährdungsbeurteilung (Kern: TRGS 400). 500er Schutzmaßnahmen bei der Tätigkeit – Lager, Labor, Schweißen. 600er Substitution. 700er Explosionsschutz, 800er Brandschutz. 900er Grenzwerte und Listen. Sie brauchen nicht alle – nur die, die zu Ihren Stoffen und Tätigkeiten passen.",
      "Wichtig: TRGS regeln Stoffe und Tätigkeiten – nicht die Arbeitsstätte an sich (dafür ASR, siehe [Link: /wissen/blog/asr-einfach-erklaert|ASR einfach erklärt]). Maschinen und Druckgasflaschen können zusätzlich [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] und [Link: /wissen/blog/trbs-einfach-erklaert|TRBS] betreffen – z. B. TRBS 3145 gemeinsam mit TRGS 745 für Druckgas.",
      "H2::Umsetzung in der Praxis",
      "Was fast jeder Betrieb mit Gefahrstoffen braucht: Gefahrstoffverzeichnis, Gefährdungsbeurteilung nach TRGS 400, Betriebsanweisungen nach [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|TRGS 555], Unterweisung vor der ersten Tätigkeit. Bei brennbaren Stoffen kommen Lagerregeln und [Link: /wissen/blog/brandschutz-brennbare-stoffe|TRGS 800 Brandschutz] dazu.",
      "Neue Spokes dieser Reihe: [Link: /wissen/blog/trgs-400-gefaehrdungsbeurteilung-gefahrstoffe|TRGS 400 Gefährdungsbeurteilung], [Link: /wissen/blog/trgs-509-510-lagerung-gefahrstoffe|TRGS 509/510 Lagerung], [Link: /wissen/blog/trgs-528-schweisstechnische-arbeiten|TRGS 528 Schweißen]. Bereits vertieft: [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen TRGS 555], [Link: /wissen/blog/brandschutz-brennbare-stoffe|Brennbare Stoffe TRGS 800].",
      "H2::Typische Mängel und Vorbereitung",
      "Im Betrieb sollten Gefahrstoffverzeichnis, GBU, Betriebsanweisungen und Lagerkonzept nach TRGS 400/800 zusammenpassen – nicht nur Sicherheitsdatenblätter in der Mappe.",
      "Was wir bewusst nicht als Einzelserie abtippen: 900er Listen (Grenzwerte, CMR-Verzeichnisse), Nischen-TRGS wie Asbest oder Blei – die gehören in die fachliche GBU, nicht in 50 Blog-Artikel. Health and Safety+ verknüpft Gefahrstoff-Themen in [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] und Begehung – [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was sind TRGS?",
        answer:
          "Technische Regeln für Gefahrstoffe – konkretisieren GefStoffV zu Lagerung, Kennzeichnung, Messung, Schutzmaßnahmen. Verbindlich über ArbSchG und GefStoffV.",
      },
      {
        question: "Welche TRGS sind im Betrieb zentral?",
        answer:
          "TRGS 400 (Gefährdungsbeurteilung), 500 (Schutzmaßnahmen), 555 (Unterweisung), 800 (Lager) – je nach Stoffe und Prozesse weitere.",
      },
      {
        question: "Typische Mängel in Köln/NRW?",
        answer:
          "SDS ohne Betriebsanweisung, Lager ohne TRGS 800, fehlende Gefahrstoffkataster, Unterweisung ohne Stoffbezug.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen], [Link: /wissen/blog/brandschutz-brennbare-stoffe|brennbare Stoffe] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU].",
      },
    ],
  },
  {
    slug: "trgs-400-gefaehrdungsbeurteilung-gefahrstoffe",
    title: "TRGS 400 Gefährdungsbeurteilung Gefahrstoffe – Ablauf und Dokumentation",
    excerpt:
      "TRGS 400 Gefährdungsbeurteilung für Tätigkeiten mit Gefahrstoffen: Pflichten, STOP-Prinzip, Verzeichnis, Unterweisung – praxisnah für Betriebe in NRW.",
    date: "2025-11-18",
    dateModified: "2026-06-26",
    content: [
      "Wer Gefahrstoffe einsetzt, muss deren Risiken beurteilen – nicht nur einmalig, sondern bei neuen Stoffen, geänderten Prozessen oder neuen Erkenntnissen. TRGS 400 „Gefährdungsbeurteilung für Tätigkeiten mit Gefahrstoffen“ ist der zentrale Leitfaden dafür. Sie ergänzt § 5 ArbSchG und die GefStoffV – nicht ersetzen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Wann gilt TRGS 400? Sobald Beschäftigte Gefahrstoffe herstellen, bearbeiten, lagern, transportieren oder entsorgen – auch in kleinen Mengen. Reinigungsmittel, Schmierstoffe, Farben, Desinfektionsmittel zählen dazu, wenn sie eingestuft oder kennzeichnungspflichtig sind. Auch „harmlos wirkende“ Alltagsprodukte können Gefahrstoffe sein.",
      "Ablauf in der Praxis: (1) Welche Stoffe und Tätigkeiten gibt es? Gefahrstoffverzeichnis als Basis. (2) Welche Gefährdungen entstehen – Einatmen, Haut, Brand, Explosion? TRGS 401/402 vertiefen Haut und Inhalation, hier reicht die Gesamtbeurteilung. (3) Maßnahmen nach STOP – Substitution zuerst, dann Technik (Absaugung, Lager), Organisation, PSA. (4) Unterweisung und Wirksamkeitskontrolle.",
      "TRGS 400 ist das zentrale Regelwerk für Gefahrstoff-Gefährdungsbeurteilungen: Ermittlung, Bewertung, Maßnahmen, Ersatzstoffprüfung, Betriebsanweisungen und Unterweisung. Ohne aktuelle GBU sind Lager, Labor und Werkstatt bei BG-Begehungen in NRW schnell beanstandet.",
      "Brandschutz bei brennbaren Stoffen, Lüftung und PSA müssen in einem Maßnahmenplan stehen – nicht in getrennten Excel-Listen. Einstieg: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS Überblick].",
      "H2::Umsetzung in der Praxis",
      "Dokumentation: Schriftliche GBU mit Datum, Verantwortlichen, Ergebnis und Maßnahmenplan – nicht nur eine Checkliste ohne Begehung. Verknüpfung mit [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen TRGS 555] und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung]. Bei brennbaren Stoffen zusätzlich [Link: /wissen/blog/brandschutz-brennbare-stoffe|TRGS 800] und [Link: /wissen/blog/trgs-509-510-lagerung-gefahrstoffe|Lager TRGS 509/510].",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. GBU aus dem Internet ohne Betriebsbezug. Verzeichnis veraltet. Neue Produkte im Einkauf ohne Sicherheitsdatenblatt-Prüfung. Maßnahmen beschrieben, aber nicht umgesetzt. Keine Verknüpfung zwischen GBU, BA und Unterweisungsnachweis.",
      "Schnittstellen: [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] bei Maschinen und Anlagen; [Link: /wissen/blog/asr-einfach-erklaert|ASR] bei Lüftung und Arbeitsplatz; [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] bei Gefahrstoffen auf Baustellen. Health and Safety+ – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /wissen/blog/trgs-einfach-erklaert|TRGS-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Reicht die allgemeine Gefährdungsbeurteilung ohne TRGS 400?",
        answer:
          "Die allgemeine GBU nach ArbSchG muss Gefahrstoffe abdecken. TRGS 400 zeigt, wie das fachlich für Stoffe konkret auszuführen ist – BG und Gewerbeaufsicht erwarten bei Gefahrstoffen diese Tiefe.",
      },
      {
        question: "Wie oft muss die GBU Gefahrstoffe aktualisiert werden?",
        answer:
          "Bei neuen Stoffen, geänderten Prozessen, Unfällen, Beinahe-Unfällen, geänderten SDBs oder wenn Maßnahmen nicht wirken. Regelmäßige Wirksamkeitskontrolle, mindestens bei ASA oder Begehung.",
      },
      {
        question: "Braucht jeder Stoff eine eigene GBU?",
        answer:
          "Bei gleichartigen Tätigkeiten und Arbeitsbedingungen genügt oft eine repräsentative Beurteilung – aber jeder im Verzeichnis geführte Stoff muss darin berücksichtigt sein.",
      },
    ],
  },
  {
    slug: "trgs-509-510-lagerung-gefahrstoffe",
    title: "TRGS 509 und 510 Lagerung – ortsfest und ortsbeweglich",
    excerpt:
      "TRGS 509 ortsfeste Behälter und TRGS 510 ortsbewegliche Behälter: Lagerung von Gefahrstoffen, Mengen, Abstände, Brandschutz – für Betriebe in Köln und NRW.",
    date: "2025-11-25",
    dateModified: "2026-06-26",
    content: [
      "Gefahrstoffe im Regal, im Sicherheitsschrank oder auf dem Lagerhof – Lagerung ist eine der häufigsten Schwachstellen bei Begehungen. TRGS 509 regelt ortsfeste Behälter und Füll-/Entleerstellen; TRGS 510 ortsbewegliche Behälter wie Kanister, Fässer und IBC. Beide ergänzen die Gefährdungsbeurteilung und [Link: /wissen/blog/trgs-400-gefaehrdungsbeurteilung-gefahrstoffe|TRGS 400] – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "TRGS 509 – wann relevant? Fest installierte Tanks, Sicherheitsschränke als Lagereinheit, Technikräume, Füllstationen. Kernfragen: Ausreichende Belüftung, Auffangflächen, Abstand zu Zündquellen, Mengenbegrenzung im Arbeitsbereich, Kennzeichnung nach CLP. Brandabschnitte und Rettungswege freihalten.",
      "TRGS 510 – wann relevant? Kanister und Fässer im Lager, IBC auf dem Hof, Gebinde im Werkstattregal. Kernfragen: Gefahrstoffe nach Unfallkategorie getrennt lagern (z. B. Nicht Säure neben Lauge ohne Konzept), stabile Stapelung, Regalprüfung nach [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV], Beschilderung, Zugang für Löschmittel und Begehung.",
      "TRGS 509 und 510 konkretisieren Lagerung brennbarer Flüssigkeiten und Gase: Mengenbegrenzung, Lagerklassen, baulicher und organisatorischer Brandschutz, Betriebsanweisungen und Kennzeichnung. In NRW werden Lager und Tankanlagen bei BG- und Brandschutzbegehungen häufig an TRGS-Vollzug gemessen.",
      "Brandschutz und Gefahrstoffrecht greifen ineinander – ein gemeinsames Begehungsprotokoll für Lagerbereich spart Doppelarbeit. Überblick: [Link: /wissen/blog/trgs-einfach-erklaert|TRGS einfach erklärt] und [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen].",
      "H2::Umsetzung in der Praxis",
      "Brandschutz-Schnittstelle: Brennbare Flüssigkeiten und Gase unterliegen zusätzlich [Link: /wissen/blog/brandschutz-brennbare-stoffe|TRGS 800]. BSB und FaSi sollten Lager gemeinsam begehen – ein Protokoll, Spalten Gefahrstoff und Brandschutz. Keine Paletten oder Folien in Fluchtwegen; keine offenen Behälter in Büros.",
      "Dokumentation: Lagerkonzept in der GBU – erlaubte Mengen, Standorte, Schutzeinrichtungen, Notfall (Leckage, Brand). Betriebsanweisungen am Lagerort ([Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|TRGS 555]). Unterweisung für Lageristen und alle, die Stoffe entnehmen.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. Aceton im Büroregal. Überfüllte Sicherheitsschränke. Unbeschriftete Kanister. Lager im Flur. Fehlende Auffangwannen unter IBC. Health and Safety+ – [Link: /wissen/blog/trgs-einfach-erklaert|TRGS-Hub], [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "509 oder 510 – was gilt für unseren Betrieb?",
        answer:
          "Oft beides: ortsfeste Schränke oder Tanks (509) und Gebinde wie Kanister (510). In der GBU je Lagerbereich festlegen, welche TRGS greift.",
      },
      {
        question: "Reicht ein Sicherheitsschrank für alle Stoffe?",
        answer:
          "Nur wenn Zusammenlagerung nach TRGS zulässig ist – Unverträglichkeiten beachten. Schrank muss für die Lagermenge und Gefahrstoffklasse geeignet sein.",
      },
      {
        question: "Was hat das mit TRGS 800 zu tun?",
        answer:
          "TRGS 800 regelt brandschutzliche Maßnahmen bei brennbaren Gefahrstoffen – ergänzt Lagerregeln aus 509/510. Beide in einem Lagerkonzept verbinden.",
      },
    ],
  },
  {
    slug: "trgs-528-schweisstechnische-arbeiten",
    title: "TRGS 528 Schweißtechnische Arbeiten – Gefahrstoffe, Rauch und Schutz",
    excerpt:
      "TRGS 528 Schweißen: Gefährdungsbeurteilung, Schweißrauch, Absaugung, PSA, Heißarbeit und Brandschutz – praxisnah für Köln und NRW.",
    date: "2025-12-02",
    dateModified: "2026-06-26",
    content: [
      "Schweißen erzeugt Lichtbogen, Funken, heiße Oberflächen und Schweißrauch – chemische und brandtechnische Risiken zugleich. TRGS 528 „Schweißtechnische Arbeiten“ konkretisiert die GefStoffV für diese Tätigkeiten. Sie gilt in der Werkstatt, auf der Baustelle und bei Instandhaltung – nicht nur in der Schlosserei – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Gefährdungsbeurteilung: Welches Verfahren (MIG/MAG, WIG, Elektrode)? Welche Werkstoffe und Zusatzwerkstoffe? Welche Rauchkonzentration entsteht – Absaugung am Entstehungsort nötig? TRGS 528 verweist auf TRGS 400 als Rahmen; Schweißrauch kann krebserzeugende Stoffe enthalten – Maßnahmenplan mit Priorität Technik vor PSA.",
      "Schutzmaßnahmen: Ortsnahe Absaugung am Lichtbogen, wenn möglich. Ausreichende Belüftung in Hallen – keine Schweißarbeit in ungelüfteten Kleinräumen ohne Konzept. PSA: Schweißerschutzhelm, Handschuhe, Schutzkleidung, Atemschutz wenn technische Maßnahmen nicht ausreichen. Brandwache und Räumung brennbarer Stoffe in der Umgebung.",
      "TRGS 528 regelt Schweiß-, Schneid- und verwandte Arbeiten: Gefährdung durch Rauche, UV-Strahlung, Brand- und Explosionsgefahr, Lüftung und Feuerwache. Heißarbeit auf Baustellen und in Werkhallen in NRW erfordert schriftliche Freigabe, Brandwache und Abstimmung mit [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblichem Brandschutz].",
      "Schweißrauch gehört in die Gefahrstoff-Gefährdungsbeurteilung; Atemschutz und Absaugung sind keine Optional-Leistung. Schnittstelle [Link: /wissen/blog/brandschutz-brennbare-stoffe|Heißarbeit und brennbare Stoffe] im Betrieb.",
      "H2::Umsetzung in der Praxis",
      "Brandschutz und Heißarbeit: Schweißen ist Heißarbeit – Freigabe nach DGUV Regel 100-500, Abgleich mit [Link: /wissen/ratgeber/brandschutz-betrieb|betrieblichem Brandschutz]. Kein Schweißen neben Lösemittellager oder offenen Kanistern. Auf Baustellen: SiGe-Plan und Koordinator – [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      "Unterweisung: Schweißer und Feuerwache vor Ort einweisen – Rauchrisiko, PSA, Brandfall, Erste Hilfe. Betriebsanweisung für Schweißprozess und verwendete Stoffe ([Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|TRGS 555]).",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. Schweißen ohne Absaugung in geschlossener Halle. Fehlende Heißarbeit-Freigabe. Brennbare Materialien im Funkenflug. Atemschutz statt Absaugung ohne Begründung. Health and Safety+ – [Link: /wissen/blog/trgs-einfach-erklaert|TRGS-Überblick], [Link: /wissen/blog/trgs-400-gefaehrdungsbeurteilung-gefahrstoffe|TRGS 400], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Gilt TRGS 528 auch auf der Baustelle?",
        answer:
          "Ja, wenn dort geschweißt wird. Zusätzlich Baustellenverordnung und SiGeKo – Gefahrstoff-GBU und Brandschutz koordinieren.",
      },
      {
        question: "Reicht eine Hallenlüftung ohne Absaugung?",
        answer:
          "Oft nein – Schweißrauch am Entstehungsort erfassen ist der wirksamere erste Schritt. Entscheidung aus GBU und ggf. Messung.",
      },
      {
        question: "Was ist mit Schutzgasen?",
        answer:
          "Schutz- und Formiergase können erstickend oder brandfördernd sein – TRGS 407 „Tätigkeiten mit Gasen“ ergänzt bei Gasflaschen und Leitungen.",
      },
    ],
  },
  // TRBS-Hub: BetrSichV und Technische Regeln für Betriebssicherheit – Megabrain-Einstieg
  {
    slug: "trbs-einfach-erklaert",
    title: "TRBS einfach erklärt – Betriebssicherheit von BetrSichV bis Prüfplan",
    excerpt:
      "Technische Regeln für Betriebssicherheit (TRBS): Was sie sind, Bezug zur BetrSichV, Serien 1000/2000/3000 – kompakter Einstieg für Betriebe in Köln und NRW.",
    date: "2025-12-09",
    dateModified: "2026-05-26",
    content: [
      "Regale, Hubwagen, Leitern, Druckgeräte, Aufzüge – alles, womit im Betrieb gearbeitet wird, fällt unter die Betriebssicherheitsverordnung (BetrSichV). Die Technischen Regeln für Betriebssicherheit (TRBS) zeigen, wie Sie das in der Praxis umsetzen – ähnlich wie ASR zur Arbeitsstättenverordnung oder TRGS zur Gefahrstoffverordnung. Dieser Artikel ordnet TRBS ein, ohne das gesamte Regelwerk abzutippen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "So hängt es zusammen: Das Arbeitsschutzgesetz verlangt eine Gefährdungsbeurteilung. Die BetrSichV regelt die sichere Verwendung von Arbeitsmitteln – Auswahl, Instandhaltung, Prüfung, Unterweisung. TRBS konkretisieren das für typische Gefährdungen und Anlagen. Wer eine TRBS einhält, darf davon ausgehen, dass die BetrSichV an dieser Stelle erfüllt ist. Einstieg zur Verordnung: [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV einfach erklärt].",
      "TRBS sind nummeriert – grob nach Thema: 1000er Grundlagen – Gefährdungsbeurteilung (1111), Instandhaltung (1112), Qualifikation (1116), Prüfungen (1201), befähigte Person (1203). 2000er gefährdungsbezogen – mechanische Risiken (2111), Absturz (2121), Dampf und Druck (2141). 3000er spezifisch – Aufzüge (3121), Druckgas (3145/3146), Tankstellen (3151). Sie brauchen nicht alle – nur die, die zu Ihren Arbeitsmitteln passen.",
      "Wichtig: TRBS regeln Arbeitsmittel und Anlagen – nicht die Arbeitsstätte an sich (dafür [Link: /wissen/blog/asr-einfach-erklaert|ASR]). Gefahrstoffe regeln Sie über GefStoffV und [Link: /wissen/blog/trgs-einfach-erklaert|TRGS] – nicht über TRBS. Explosionsschutz bei Gefahrstoffen liegt heute in TRGS 720 ff.; die frühere TRBS-2152-Reihe ist aufgehoben. Elektrische Gefährdungen an Betriebsmitteln prüfen Sie nach [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV Vorschrift 3] – die alte TRBS 2131 gibt es nicht mehr.",
      "H2::Umsetzung in der Praxis",
      "Was fast jeder Betrieb braucht: Gefährdungsbeurteilung für Arbeitsmittel (TRBS 1111), Prüfplan mit befähigter Person (TRBS 1201/1203), Nutzer-Unterweisung nach § 12 BetrSichV. Bei Leitern, Dacharbeiten oder Gerüsten kommt [Link: /wissen/blog/trbs-2121-absturz-leitern|TRBS 2121 Absturz] dazu – ergänzend zu [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1].",
      "Neue Spokes dieser Reihe: [Link: /wissen/blog/trbs-1111-gefaehrdungsbeurteilung-arbeitsmittel|TRBS 1111 Gefährdungsbeurteilung], [Link: /wissen/blog/trbs-1201-1203-pruefung-befaehigte-person|TRBS 1201/1203 Prüfung], [Link: /wissen/blog/trbs-2121-absturz-leitern|TRBS 2121 Absturz]. Bereits vertieft: [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV-Überblick], [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Handhubwagen prüfen].",
      "H2::Typische Mängel und Vorbereitung",
      "Für Arbeitsmittel und Anlagen sollten Prüffristen, Betriebsanweisungen und GBU-Einträge zu TRBS 1111 und 1201 konsistent sein – fehlende wiederkehrende Prüfung ist ein Top-Befund bei BG-Begehungen.",
      "Was wir bewusst nicht als Einzelserie abtippen: Aufzugs-TRA (aufgehoben, Inhalt in TRBS 3121), jede TRBS-1201-Teilregel für Nischenanlagen, Druckgeräte-Spezialfälle – die gehören in die fachliche GBU und den Prüfplan, nicht in 40 Blog-Artikel. Health and Safety+ verknüpft Arbeitsmittel, Prüfkalender und Unterweisung – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was sind TRBS?",
        answer:
          "Technische Regeln für Betriebssicherheit – konkretisieren BetrSichV zu Arbeitsmitteln, Anlagen, Prüfungen, Instandhaltung, Benutzung.",
      },
      {
        question: "Welche TRBS sind häufig relevant?",
        answer:
          "TRBS 1111 (Allgemeines), 1201 (Prüfung), 1151 (Benutzung) – plus branchenspezifische Regeln zu Hebezeugen, Druck, Maschinen.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Keine Prüfplakette, Inbetriebnahme ohne Prüfung, Mängel nicht gesperrt, TRBS nicht in GBU und Unterweisung verknüpft.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV], [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Handhubwagen] und [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Hub].",
      },
    ],
  },
  {
    slug: "trbs-1111-gefaehrdungsbeurteilung-arbeitsmittel",
    title: "TRBS 1111 Gefährdungsbeurteilung – Arbeitsmittel sicher einsetzen",
    excerpt:
      "TRBS 1111 Gefährdungsbeurteilung für Arbeitsmittel: Pflichten, STOP-Prinzip, Inbetriebnahme, Änderungen – praxisnah für Betriebe in NRW.",
    date: "2025-12-16",
    dateModified: "2026-06-26",
    content: [
      "Bevor ein Hubwagen rollt, eine Presse startet oder ein Regal beladen wird, muss klar sein: Welche Gefahren entstehen – und welche Maßnahmen greifen? TRBS 1111 „Gefährdungsbeurteilung“ ist der zentrale Leitfaden dafür im Betriebssicherheitsrecht. Sie ergänzt § 5 ArbSchG und die BetrSichV – ersetzt sie nicht – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "TRBS 1111 gilt, sobald Arbeitsmittel verwendet werden – von der Handwerkzeugkiste bis zur Produktionslinie, einschließlich gemieteter, gebrauchter oder selbst gebauter Geräte. Überwachungsbedürftige Anlagen wie Aufzüge, Krananlagen oder Druckgeräte brauchen zusätzliche Tiefe, aber die GBU-Logik bleibt dieselbe.",
      "Ablauf in der Praxis: Zuerst erfassen Sie, welche Arbeitsmittel je Bereich oder Tätigkeit vorhanden sind. Dann bewerten Sie die Gefährdungen – mechanisch, elektrisch, thermisch, Sturz, Quetschung. Maßnahmen folgen nach STOP: Substitution, Technik (Schutzeinrichtungen), Organisation (Arbeitsanweisungen), Person (PSA, Unterweisung). Anschließend legen Sie fest, wer in welchem Intervall prüft – siehe [Link: /wissen/blog/trbs-1201-1203-pruefung-befaehigte-person|TRBS 1201/1203]. Abschließend prüfen Sie die Wirksamkeit – nach Umbau, Unfall oder neuer Maschine.",
      "TRBS 1111 beschreibt, wie Gefährdungsbeurteilungen für Arbeitsmittel aufgebaut sein sollen: Auswahl, Prüfung vor Inbetriebnahme, wiederkehrende Prüfung, Unterweisung und Aufsicht. Sie ergänzt BetrSichV und BG-Regeln für Maschinen, Anlagen und Werkzeuge.",
      "In der Praxis fehlt oft die Verknüpfung zwischen GBU, Prüfbuch und Unterweisungsnachweis – ein gemeinsames Register pro Arbeitsmittel hilft bei BG-Begehungen in NRW.",
      "H2::Umsetzung in der Praxis",
      "Besondere Momente: Inbetriebnahme neuer Arbeitsmittel – GBU vor erstem Einsatz. Wesentliche Änderungen (Umbau, Software, neuer Aufsatz) – GBU aktualisieren, ggf. Erneute Prüfung. Stilllegung defekter Geräte – dokumentieren, nicht nur „aus dem Weg stellen“. Verknüpfung mit [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung] und Betriebsanweisungen.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. GBU-Text aus dem Internet ohne Maschinenliste. Neue Anlage ohne GBU-Eintrag. Prüfplakette ohne Bezug zur GBU. Verwechslung von allgemeiner GBU und Arbeitsmittel-Teil. Bei Gefahrstoffen parallel [Link: /wissen/blog/trgs-400-gefaehrdungsbeurteilung-gefahrstoffe|TRGS 400]. Bei Arbeitsstätte [Link: /wissen/blog/asr-einfach-erklaert|ASR].",
      "Schnittstellen: [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] als Rechtsrahmen; [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] bei Arbeitsmitteln auf Baustellen; [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf] allgemein. Health and Safety+ – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /wissen/blog/trbs-einfach-erklaert|TRBS-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Reicht die allgemeine Gefährdungsbeurteilung ohne TRBS 1111?",
        answer:
          "Die allgemeine GBU nach ArbSchG muss Arbeitsmittel abdecken. TRBS 1111 zeigt, wie das fachlich für Betriebssicherheit konkret auszuführen ist – BG und Gewerbeaufsicht erwarten bei Prüfungen diese Tiefe.",
      },
      {
        question: "Wann muss die GBU Arbeitsmittel aktualisiert werden?",
        answer:
          "Bei neuen oder geänderten Arbeitsmitteln, Unfällen, Beinahe-Unfällen, geänderten Einsatzbedingungen oder wenn Maßnahmen nicht wirken. Regelmäßige Wirksamkeitskontrolle, mindestens bei ASA oder Begehung.",
      },
      {
        question: "Braucht jedes Werkzeug einen GBU-Absatz?",
        answer:
          "Bei gleichartigen Arbeitsbedingungen genügt oft eine Gruppenbeurteilung – z. B. alle Handhubwagen im Lager. Entscheidend ist, dass alle relevanten Gefährdungen und Maßnahmen erfasst sind.",
      },
    ],
  },
  {
    slug: "trbs-1201-1203-pruefung-befaehigte-person",
    title: "TRBS 1201 und 1203 – Prüfungen und befähigte Person",
    excerpt:
      "TRBS 1201 Prüfungen von Arbeitsmitteln und TRBS 1203 befähigte Person: Prüfumfang, Fristen, Qualifikation, Dokumentation – für Betriebe in Köln und NRW.",
    date: "2025-12-23",
    dateModified: "2026-06-26",
    content: [
      "Die Plakette am Regal, der Sticker am Kaffeekocher, das Protokoll am Hubwagen – hinter jedem Nachweis steht eine Frage: Wer darf prüfen, was muss geprüft werden, wie oft? TRBS 1201 regelt Prüfungen und Kontrollen von Arbeitsmitteln und überwachungsbedürftigen Anlagen. TRBS 1203 definiert, wer das fachlich darf – die zur Prüfung befähigte Person – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "TRBS 1201 strukturiert jede Prüfung entlang des Arbeitsmittels, der Prüfart (Sichtprüfung, Funktionsprüfung, wiederkehrende Prüfung, Erstprüfung vor Inbetriebnahme) und des Intervalls aus Herstellerangaben, Norm und Gefährdungsbeurteilung. Das Ergebnis dokumentieren Sie mit Datum, Prüfer, Befund, nächstem Termin und gegebenenfalls Stilllegung.",
      "TRBS 1203 – befähigte Person: Qualifikation, Berufserfahrung und Kenntnis der anzuwendenden Regeln – passend zum Prüfgegenstand. Regale und Hubwagen brauchen andere Kompetenz als Druckgeräte oder Aufzüge. Der Arbeitgeber bleibt verantwortlich – auch wenn ein externer Dienstleister prüft. Qualifikation und Beauftragung schriftlich nachweisen.",
      "TRBS 1201 bis 1203 regeln Prüfungen durch befähigte Personen: Qualifikation, Befugnis, Prüfarten vor Inbetriebnahme, wiederkehrend und nach Änderung. Ohne klare Benennung im Betrieb entstehen Lücken bei Maschinen, elektrischen Anlagen und Druckbehältern.",
      "Befähigte Personen sind nicht automatisch die [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] – Rollen und Befugnisse schriftlich regeln. [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU] und Prüfregister führen.",
      "H2::Umsetzung in der Praxis",
      "Abgrenzung elektrische Betriebsmittel: Ortsveränderliche Geräte und Anlagen prüfen Sie nach [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV Vorschrift 3] – ergänzend zur BetrSichV, oft mit derselben befähigten Elektrofachkraft. Das ersetzt nicht die Prüfung mechanischer Arbeitsmittel. In Sonderbauten kann parallel [Link: /wissen/blog/pruefvo-nrw-einfach-erklaert|PrüfVO NRW] mit Prüfsachverständigen gelten.",
      "Praxisbeispiel: [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Handhubwagen prüfen] – jährliche Prüfung durch befähigte Person, tägliche Sichtkontrolle durch Nutzer, Eintrag in GBU und Prüfkalender. Regale nach DIN EN 15635; Leitern nach TRBS 2121 Teil 2.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. Prüfung ohne Qualifikationsnachweis. Abgelaufene Fristen. Sichtprüfung durch Lagerist ohne Dokumentation als „wiederkehrende Prüfung“. Ein Wartungsvertrag für alles – obwohl BMA, DGUV V3 und BetrSichV getrennte Pflichten sind. Health and Safety+ – [Link: /wissen/blog/trbs-einfach-erklaert|TRBS-Hub], [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wer darf als befähigte Person prüfen?",
        answer:
          "Wer die Anforderungen der TRBS 1203 zum jeweiligen Prüfgegenstand erfüllt – z. B. Elektrofachkraft für DGUV V3, Sachkundiger für Regale oder Hubwagen nach TRBS und Herstellerangaben. Qualifikation dokumentieren.",
      },
      {
        question: "Reicht ein DGUV-V3-Sticker für alle Arbeitsmittel?",
        answer:
          "Nein. DGUV V3 gilt für elektrische Betriebsmittel. Mechanische Arbeitsmittel wie Hubwagen, Regale oder Leitern brauchen eigene Prüfnachweise nach BetrSichV/TRBS 1201.",
      },
      {
        question: "Wie oft müssen Arbeitsmittel geprüft werden?",
        answer:
          "Keine pauschale Jahresfrist für alles. Intervall aus Gefährdungsbeurteilung, Herstellerangaben und TRBS – z. B. Hubwagen oft jährlich, Regale nach DIN EN 15635, elektrische Geräte nach DGUV V3.",
      },
    ],
  },
  {
    slug: "trbs-2121-absturz-leitern",
    title: "TRBS 2121 Absturz – Leitern, Gerüste und sicheres Arbeiten in der Höhe",
    excerpt:
      "TRBS 2121 Absturzgefahr: Leitern Teil 2, Gerüste Teil 1, Seilzugang – Abgrenzung zu ASR A2.1 für Betriebe und Baustellen in NRW.",
    date: "2025-12-30",
    dateModified: "2026-06-26",
    content: [
      "Auf der Leiter zum Regal, auf dem Gerüst an der Fassade, auf dem Dach bei Wartung – Sturz aus der Höhe gehört zu den schwersten Unfällen im Betrieb. TRBS 2121 regelt Gefährdungen durch Absturz bei der Verwendung von Arbeitsmitteln. Sie ergänzt [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1] (Absturz an der Arbeitsstätte) – ASR für den Ort, TRBS für das Mittel – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "TRBS 2121 Teil 2 – Leitern: Wann ist eine Leiter zulässig, wann braucht es ein Gerüst oder Hubarbeitsbühne? Standfestigkeit, Neigungswinkel, Kontakt zur Kante, maximale Arbeitshöhe, keine seitliche Belastung. Tägliche Sichtprüfung vor Benutzung; wiederkehrende Prüfung durch befähigte Person. Typischer Fehler: Stehleiter als Dauerarbeitsplatz.",
      "TRBS 2121 Teil 1 – Gerüste: Auf- und Abbau durch Sachkunde, Absturzsicherung am Gerüst, Belastbarkeit, Wetter, Abstand zu Leitungen. Auf Baustellen zusätzlich Baustellenverordnung und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] – Absturzsicherung im SiGe-Plan, Ausführung durch das ausführende Unternehmen.",
      "TRBS 2121 Teil 1 und 2 behandeln Absturzgefahren und Leitern: wann Leitern zulässig sind, wann Arbeitsbühnen oder Gerüste Pflicht werden, Prüfung und sichere Benutzung. Leitern sind in der Praxis oft der letzte Ausweg – nicht die Standardlösung.",
      "Auf Baustellen in NRW greifen BaustellV und SiGeKo – Abstimmung mit [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1] und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo-Ratgeber].",
      "H2::Umsetzung in der Praxis",
      "Weitere Teile kurz: Teil 3 Seilzugang und -positionierung – nur mit Qualifikation und Konzept. Teil 4 Ausnahme-Heben von Personen mit nicht vorgesehenen Arbeitsmitteln – nur wenn TRBS es erlaubt, sonst Hubbühne oder Gerüst. Dacharbeiten: [Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|SiGeKo Dacharbeiten].",
      "Gefährdungsbeurteilung: Welche Tätigkeiten in welcher Höhe? Kann Absturz vermieden werden (Arbeit am Boden)? Technische Maßnahmen vor PSA – Seitenschutz, Geländer, Fanglinie. Unterweisung: Leiter richtig anstellen, Gerüst betreten, PSA nur wenn vorgesehen. Verknüpfung mit [Link: /wissen/blog/trbs-1111-gefaehrdungsbeurteilung-arbeitsmittel|TRBS 1111] und Prüfplan [Link: /wissen/blog/trbs-1201-1203-pruefung-befaehigte-person|TRBS 1201/1203].",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. Leiter ohne Kennzeichnung und Prüfung. Gerüst ohne Aufbauplan. Fehlender Seitenschutz ab 1 m am Arbeitsplatz. „kurz mal“ ohne Absicherung auf dem Dach. Health and Safety+ – [Link: /wissen/blog/trbs-einfach-erklaert|TRBS-Überblick], [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "TRBS 2121 oder ASR A2.1 – was gilt?",
        answer:
          "Beides kann gelten: ASR A2.1 für Absturzgefahren an der Arbeitsstätte (Kanten, Öffnungen, Dachkanten). TRBS 2121 für die sichere Verwendung von Leitern, Gerüsten und Seilzugang. In der GBU zusammenführen.",
      },
      {
        question: "Ab welcher Höhe gilt Absturzsicherung?",
        answer:
          "Am Arbeitsplatz ab 1 m Absturzhöhe relevant; an weiteren Arbeitsplätzen und Verkehrswegen oft ab 2 m verschärfte Anforderungen – objektspezifisch in GBU und SiGe-Plan festhalten.",
      },
      {
        question: "Muss jede Leiter geprüft werden?",
        answer:
          "Ja – vor Benutzung Sichtprüfung durch den Nutzer, wiederkehrende Prüfung durch befähigte Person nach TRBS 2121 Teil 2 und Gefährdungsbeurteilung. Defekte Leitern stilllegen.",
      },
    ],
  },
  // DGUV-Hub: Unfallverhütungsvorschriften und Regelwerk – Megabrain-Einstieg
  {
    slug: "dguv-vorschriften-einfach-erklaert",
    title: "DGUV Vorschriften einfach erklärt – vom Regelwerk zum Betriebsalltag",
    excerpt:
      "DGUV-Regelwerk: Vorschriften, Informationen und Regeln – Querschnitt V1/V2/V3, Branchen-UVV und Abgrenzung zu ASiG, BetrSichV und BaustellV für Betriebe in Köln und NRW.",
    date: "2026-01-06",
    dateModified: "2026-05-26",
    content: [
      "Berufsgenossenschaft, Unfallversicherung, UVV – viele Betriebe stoßen zuerst auf die DGUV, wenn es um Prüfungen, Betreuung oder Brandschutz-Schulungen geht. Die Deutsche Gesetzliche Unfallversicherung (DGUV) gibt Regeln heraus, die das Arbeitsschutzgesetz und die Unfallversicherung konkretisieren. Dieser Artikel ordnet das Regelwerk ein – ohne alle Vorschriften abzutippen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Vier Ebenen im DGUV-Regelwerk: Erstens Vorschriften (UVV) – verbindliche Unfallverhütungsvorschriften, z. B. DGUV Vorschrift 1 (Grundsätze), V2 (Betriebsarzt und FaSi), V3 (Elektro). Zweitens Informationen – z. B. DGUV Information 205-003 für Brandschutzbeauftragte oder 205-023 für Brandschutzhelfer. Drittens Regeln – z. B. DGUV Regel 100-500 für Heißarbeit. Viertens Grundsätze – übergreifende Leitlinien. Nicht alles ist für jeden Betrieb gleich relevant.",
      "Querschnitt vs. Branche: Fast jeder Betrieb berührt V1 (Prävention, STOP-Prinzip), oft V2 (FaSi-Betreuung) und V3 (Elektroprüfung). Dazu kommen Branchen-UVV, wenn die Tätigkeit passt – z. B. V38 Bauarbeiten, V67 Flurförderzeuge im Lager. Wer nur Büro betreibt, braucht keine Kran-UVV – wer auf Baustellen arbeitet, sehr wohl V38 neben BaustellV und SiGeKo.",
      "Abgrenzung – nicht verwechseln: ASiG und DGUV V2 regeln Betriebsarzt und Fachkraft für Arbeitssicherheit. BetrSichV und [Link: /wissen/blog/trbs-einfach-erklaert|TRBS] regeln Arbeitsmittel und Prüfung. ArbStättV und [Link: /wissen/blog/asr-einfach-erklaert|ASR] regeln die Arbeitsstätte. GefStoffV und [Link: /wissen/blog/trgs-einfach-erklaert|TRGS] regeln Stoffe. BaustellV und [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo] regeln Baustellen-Koordination – ergänzt durch DGUV V38. Alle Ebenen können parallel gelten.",
      "H2::Umsetzung in der Praxis",
      "Brandschutz über DGUV Information: Betrieblicher Brandschutz nutzt oft 205-003 ([Link: /wissen/blog/brandschutzbeauftragter-aufgaben-pflichten|Brandschutzbeauftragter]), 205-023 ([Link: /wissen/blog/asr-a2-2-brandschutzhelfer|Brandschutzhelfer]) und 205-041 ([Link: /wissen/blog/brandschutz-lithium-ionen-batterien|Li-Ion-Ladeinfrastruktur]) – das sind keine Vorschriften im engeren Sinne, aber faktischer Maßstab in Audits.",
      "Neue Spokes dieser Reihe: [Link: /wissen/blog/dguv-vorschrift-1-grundsaetze-praevention|DGUV V1 Grundsätze der Prävention], [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38 Bauarbeiten], [Link: /wissen/blog/dguv-vorschrift-67-flurfoerderzeuge|DGUV V67 Flurförderzeuge]. Bereits vertieft: [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2 Betreuung], [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3 Elektroprüfung].",
      "H2::Typische Mängel und Vorbereitung",
      "Arbeitgeber sollten wissen, welche DGUV-Vorschriften für ihre Branche gelten – mindestens V1, V2, branchenspezifische Regeln und Informationsblätter – und diese in GBU und Betreuungsplan verknüpfen.",
      "Was wir bewusst nicht als Einzelserie abtippen: See-, Hafen-, Kernkraft- oder Schausteller-UVV, veraltete Doppel-Fassungen (z. B. alte V4 neben V3) – die gehören in die fachliche GBU, nicht in 50 Blog-Artikel. Aktuelle Texte prüfen Sie auf dguv.de. Health and Safety+ verknüpft FaSi, Brandschutz und SiGeKo – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was sind DGUV Vorschriften?",
        answer:
          "Unfallverhütungsvorschriften der DGUV – verbindlich über ArbSchG für versicherte Unternehmen. Regeln zu Betrieb, Maschinen, Elektro, Bau, Gesundheit.",
      },
      {
        question: "Welche sind fast überall relevant?",
        answer:
          "DGUV V1 (Grundsätze), V2 (SiFa/Betriebsarzt), V3 (Elektro), branchenspezifisch z. B. V38 (Bau), V67 (Flurförderzeuge).",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Unbekannte Geltung, keine Einbindung in GBU, Prüffristen aus DGUV-Regeln ignoriert, SiFa-Jahresbericht ohne DGUV-Bezug.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/dguv-vorschrift-2|DGUV V2], [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3] und [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Ratgeber].",
      },
    ],
  },
  {
    slug: "dguv-vorschrift-1-grundsaetze-praevention",
    title: "DGUV Vorschrift 1 – Grundsätze der Prävention verständlich erklärt",
    excerpt:
      "DGUV V1 Grundsätze der Prävention: STOP-Prinzip, Rangfolge der Maßnahmen, Gefährdungsbeurteilung – Basis für Arbeitsschutz in NRW.",
    date: "2026-01-13",
    dateModified: "2026-06-26",
    content: [
      "Bevor Sie über Plaketten, Schulungen oder Schutzhelme sprechen, steht eine Frage: Was ist der eigentliche Grundsatz des Arbeitsschutzes? DGUV Vorschrift 1 „Grundsätze der Prävention“ fasst das zusammen – als Fundament für alle anderen Regeln, von [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2] bis zur branchenspezifischen UVV – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Kernbotschaft: Gefahren möglichst vermeiden, nicht nur abfedern. Das heißt: Erst die Gefährdungsbeurteilung – welche Risiken gibt es? Dann Maßnahmen in einer Rangfolge: gefährliche Stoffe oder Prozesse ersetzen (Substitution), technische Schutzmaßnahmen, organisatorische Regeln, erst danach persönliche Schutzausrüstung (PSA). PSA allein reicht selten.",
      "Das STOP-Prinzip lässt sich in der Praxis so anwenden. Bei Substitution kommt es darauf an, weniger giftige Reiniger einzusetzen. Technische Maßnahmen umfassen Absaugung, Schutzgitter und sichere Maschinen. Organisatorisch gelten Arbeitsanweisungen, Begehungen und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung]. Auf Personenebene gehören PSA und Qualifikation dazu. In der [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|Gefährdungsbeurteilung] dokumentieren Sie, warum welche Stufe gewählt wurde.",
      "DGUV Vorschrift 1 formuliert die Grundsätze der Prävention: Gefahren an der Quelle bekämpfen, Erfahrungen nutzen, Schäden vermeiden, Wissenschaft und Technik berücksichtigen. Sie ist der Rahmen für alle weiteren DGUV-Regeln und für die Arbeit der Berufsgenossenschaften.",
      "Für Betriebe in Köln und NRW heißt das: GBU, Unterweisung und Betreuung müssen präventiv wirken – nicht erst nach Unfällen. Vertiefung: [Link: /wissen/blog/dguv-vorschrift-2|DGUV V2 Betreuung].",
      "H2::Umsetzung in der Praxis",
      "Wirksamkeit prüfen: Maßnahmen müssen funktionieren – nicht nur auf Papier stehen. Nach Unfällen, Beinahe-Unfällen, Umbauten oder neuen Erkenntnissen die GBU fortschreiben. Das ist kein Archivprojekt, sondern Steuerung – auch Thema im [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht].",
      "Schnittstellen: V1 gilt für alle Bereiche – Arbeitsstätte ([Link: /wissen/blog/asr-einfach-erklaert|ASR]), Arbeitsmittel ([Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV]), Gefahrstoffe ([Link: /wissen/blog/trgs-400-gefaehrdungsbeurteilung-gefahrstoffe|TRGS 400]), Baustelle ([Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38]). Ein STOP-Plan pro Thema, nicht widersprüchliche Einzelregeln.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. GBU listet nur PSA. Substitution nie geprüft. Maßnahmen aus Vorlagen ohne Begehung. Keine Wirksamkeitskontrolle nach Umsetzung. Health and Safety+ – [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ist DGUV V1 für kleine Betriebe relevant?",
        answer:
          "Ja. Die Grundsätze gelten unabhängig von der Betriebsgröße – Umfang und Dokumentation orientieren sich am Risiko, nicht an der Mitarbeiterzahl.",
      },
      {
        question: "Ersetzt V1 die Gefährdungsbeurteilung nach ArbSchG?",
        answer:
          "Nein. V1 konkretisiert, wie Prävention fachlich gedacht wird. Die GBU nach § 5 ArbSchG bleibt die zentrale Pflicht – V1 liefert die Methodik.",
      },
      {
        question: "Was heißt Substitution praktisch?",
        answer:
          "Weniger gefährliche Stoffe, andere Arbeitsweise oder andere Technik wählen – wenn zumutbar. Nicht jede Substitution ist möglich; dann dokumentieren, warum Technik/Organisation/PSA folgt.",
      },
    ],
  },
  {
    slug: "dguv-vorschrift-38-bauarbeiten",
    title: "DGUV Vorschrift 38 Bauarbeiten – Pflichten auf der Baustelle",
    excerpt:
      "DGUV V38 Bauarbeiten: Abgrenzung zu BaustellV und SiGeKo, Gefährdungen, Unterweisung und Koordination – für Bauherr, SiGeKo und ausführende Betriebe in NRW.",
    date: "2026-01-20",
    dateModified: "2026-05-26",
    content: [
      "Auf der Baustelle arbeiten oft mehrere Firmen gleichzeitig – Absturz, Elektro, Staub, Kran, Engstellen. Die Baustellenverordnung (BaustellV) verlangt SiGeKo und SiGe-Plan. DGUV Vorschrift 38 „Bauarbeiten“ ergänzt das als Unfallverhütungsvorschrift für die ausführenden Unternehmen – nicht als Ersatz für den Koordinator, sondern als fachliche Tiefe für Gefährdungen bei Bauarbeiten – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Wer ist adressiert? Unternehmen, deren Beschäftigte Bauarbeiten ausführen – Hoch- und Tiefbau, Abbruch, Sanierung, Montage, viele Gewerke. Der Bauherr koordiniert über [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV/SiGeKo]; jedes ausführende Unternehmen muss V38 in der eigenen Organisation umsetzen – GBU, Unterweisung, Arbeitsmittel, Absturzsicherung.",
      "Die DGUV Vorschrift 38 behandelt unter anderem folgende Themen. Planung und Vorbereitung. Sicherheit von Arbeitsplätzen und Verkehrswegen. Absturz (ergänzend [Link: /wissen/blog/trbs-2121-absturz-leitern|TRBS 2121], [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1]). Gerüste und Leitern. Maschinen und Anlagen. Elektro auf der Baustelle ([Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3]). Lärm, Staub, Gefahrstoffe. Im SiGe-Plan festhalten, wer welches Gewerk verantwortet.",
      "H2::Umsetzung in der Praxis",
      "Auf Baustellen lassen sich vier Ebenen unterscheiden. Erstens regelt die BaustellV mit dem SiGeKo die Koordination, den SiGe-Plan und die Vorankündigung. Zweitens ergänzt die DGUV V38 die UVV für ausführende Betriebe. Drittens kommen BetrSichV und TRBS für Arbeitsmittel und Prüfung hinzu. Viertens greifen GefStoffV und TRGS bei Stoffen. Ein Unfall passiert selten an nur einer Schnittstelle, deshalb sind gemeinsame Begehungen sinnvoll.",
      "Praxis aus NRW-Mandaten: Dacharbeiten im Bestand ([Link: /wissen/blog/sigeko-dacharbeiten-absturz-bestand-koeln|SiGeKo Dach/Köln]), Abbruch mit Seitenschutz ([Link: /wissen/blog/sigeko-begehung-seitenschutz-abbruch-koeln|Abbruchphase]), Schnittstellen mehrerer Gewerke ([Link: /wissen/blog/gbu-schnittstelle-mehrere-gewerke-bauprojekt|GBU Bauprojekt]). Dokumentation: SiGe-Plan, Unterweisungsnachweise, Prüfprotokolle Gerüst/Kran.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. SiGe-Plan existiert, aber Gewerke arbeiten nicht danach. Fehlende Unterweisung für wechselnde Subunternehmer. Absturzsicherung nur auf Papier. Baustrom ohne Prüfkonzept. Health and Safety+ – [Link: /wissen/blog/baustellv-einfach-erklaert|BaustellV-Hub], [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ersetzt DGUV V38 die BaustellV?",
        answer:
          "Nein. BaustellV regelt SiGeKo-Pflicht und Koordination. V38 ist die UVV für Unternehmen bei Bauarbeiten. Beide gelten parallel.",
      },
      {
        question: "Muss der SiGeKo V38 kennen?",
        answer:
          "Ja – der Koordinator muss Gefährdungen im SiGe-Plan abbilden; ausführende Betriebe setzen V38 operativ um. Schnittstellen in Begehungen klären.",
      },
      {
        question: "Gilt V38 auch bei kleinen Renovierungen?",
        answer:
          "Wenn es Bauarbeiten im Sinne der Vorschrift sind – oft ja. Umfang der Maßnahmen richtet sich nach Gefährdung, nicht nach Projektgröße allein.",
      },
    ],
  },
  {
    slug: "dguv-vorschrift-67-flurfoerderzeuge",
    title: "DGUV Vorschrift 67 Flurförderzeuge – Hubwagen, Stapler und Lager",
    excerpt:
      "DGUV V67 Flurförderzeuge: Handhubwagen, Stapler, Prüfung, Fahrerunterweisung, Verkehrswege – für Logistik und Produktion in Köln und NRW.",
    date: "2026-01-27",
    dateModified: "2026-06-26",
    content: [
      "Im Lager rattern Handhubwagen, Gabelstapler rangieren Paletten, Engpässe an Kreuzungen – Flurförderzeuge sind Alltag und Unfallquelle zugleich. DGUV Vorschrift 67 (mit Durchführungsanweisungen, ergänzt durch V68/V69) regelt Flurförderzeuge als Unfallverhütungsvorschrift. Sie ergänzt [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] und [Link: /wissen/blog/trbs-1201-1203-pruefung-befaehigte-person|TRBS 1201/1203] – nicht ersetzen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Was zählt als Flurförderzeug? Handhubwagen (ohne Antrieb), elektrische Hubwagen, Gabelstapler, Schubmaststapler, Kommissioniergeräte – alles, was warenbewegend am Boden fährt. Auch gemietete Geräte. In der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] erfassen: welche Typen, welche Wege, welche Schnittstellen zu Fußgängern.",
      "Die wichtigsten Pflichten lassen sich wie folgt zusammenfassen. Geeignete Geräte wählen. Wiederkehrende Prüfung durch befähigte Person. Unterweisung der Bediener vor erstem Einsatz und bei Änderungen. Sichere Verkehrswege – Trennung Fußgänger/Fahrzeug wo möglich, Geschwindigkeit, Sicht. Praxisbeispiel Handhubwagen: [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Prüfpflicht Handhubwagen].",
      "Flurförderzeuge – Gabelstapler, Hubwagen, Kommissionierer – verursachen in Logistik und Produktion häufig schwere Unfälle. DGUV Vorschrift 67 konkretisiert für Unternehmen mit BG-Verkehrswirtschaft, Postdienste und Logistik die Anforderungen an Fahrerunterweisung, jährliche Unterweisung, Sichtprüfung und wiederkehrende Sachkundeprüfung.",
      "In der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] sollten Verkehrswege, Trennung Fußgänger/Fahrzeug, Ladezonen und Wartung dokumentiert sein. Vertiefung zu Prüfpflichten: [Link: /wissen/blog/pruefpflicht-handhubwagen-arbeitssicherheit|Handhubwagen und Prüfung].",
      "H2::Umsetzung in der Praxis",
      "Stapler vs. Handhubwagen: Stapler brauchen Fahrerbefähigung (Theorie und Praxis nach anerkannten Regeln), jährliche Unterweisung, oft jährliche Geräteprüfung. Handhubwagen: keine Staplerschein, aber Prüfung, Nutzer-Sichtkontrolle und Unterweisung in sicherem Handling – Quetschung an Gabeln ist häufig.",
      "Bei Begehungen und Prüfungen fallen häufig folgende Mängel auf. Stapler ohne gültige Prüfung. Handhubwagen ohne Wartung. Fußgänger und Stapler ohne Regelung. Rampen und Querungen unmarkiert. Keine Unterweisungsnachweise. Elektrische Antriebe zusätzlich [Link: /wissen/blog/dguv-vorschrift-3-elektropruefung|DGUV V3] für Ladetechnik prüfen.",
      "Schnittstelle Brandschutz: Fluchtwege freihalten, keine Paletten in Wegen, brennbare Lager nicht an Ladezonen. Health and Safety+ – [Link: /wissen/blog/dguv-vorschriften-einfach-erklaert|DGUV-Hub], [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Braucht jeder Hubwagen-Fahrer einen Staplerschein?",
        answer:
          "Nein – für Handhubwagen ohne Antrieb reicht Unterweisung und sichere Benutzung. Gabelstapler und motorisierte Flurförderzeuge erfordern Fahrerbefähigung nach den anerkannten Regeln.",
      },
      {
        question: "Wie oft müssen Handhubwagen geprüft werden?",
        answer:
          "Keine gesetzliche Pauschalfrist für alle – Intervall aus GBU, Herstellerangaben und TRBS/DGUV, in der Praxis oft jährlich durch befähigte Person plus tägliche Sichtkontrolle durch Nutzer.",
      },
      {
        question: "Was ist der Unterschied zu BetrSichV?",
        answer:
          "BetrSichV ist die Bundes-Verordnung für Arbeitsmittel. DGUV V67 ist die branchenspezifische UVV für Flurförderzeuge mit konkreten Anforderungen – beide gelten zusammen.",
      },
    ],
  },
  // JArbSchG-Hub: Jugendarbeitsschutz – Megabrain-Einstieg
  {
    slug: "jugendarbeitsschutz-jarbschg-einfach-erklaert",
    title: "Jugendarbeitsschutz (JArbSchG) einfach erklärt – Pflichten für Betriebe mit Jugendlichen",
    excerpt:
      "Jugendarbeitsschutzgesetz (JArbSchG): Wer gilt als Jugendlicher, wann das Gesetz greift, Arbeitszeit, Verbote, Unterweisung und Aushang – für Betriebe in Köln und NRW.",
    date: "2026-02-03",
    dateModified: "2026-05-26",
    content: [
      "Azubi in der Werkstatt, Praktikant im Lager, Ferienjob im Büro – sobald im Betrieb Jugendliche mitarbeiten, gilt das Jugendarbeitsschutzgesetz (JArbSchG). Es schützt Beschäftigte von 15 bis unter 18 Jahren – strenger als das allgemeine [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|Arbeitsschutzgesetz]. Dieser Artikel ordnet ein, wann Sie betroffen sind und was praktisch zu tun ist – ohne Gesetzestext abzutippen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Wer ist „Jugendlicher“? Wer das 15. Lebensjahr vollendet hat, aber noch nicht 18 ist. Kinder unter 15 dürfen grundsätzlich nicht beschäftigt werden – Ausnahmen nur in engen Grenzen (z. B. bestimmte kulturelle Veranstaltungen mit Genehmigung). Auszubildende und dual Studierende in betrieblicher Phase zählen dazu, wenn sie in diesem Alter sind.",
      "Wann gilt JArbSchG für Sie? Sobald Sie regelmäßig mindestens einen Jugendlichen beschäftigen – nicht erst ab einer bestimmten Betriebsgröße. Auch Werkstudenten, Ferienkräfte und Praktikanten können unterfallen. Wer nur Erwachsene beschäftigt, braucht keinen JArbSchG-Aushang – die allgemeinen Pflichten aus ArbSchG reichen.",
      "Die drei Säulen in der Praxis: Erstens Arbeitszeit und Ruhe ([Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeit und Ruhezeiten]) – kürzer und früher Feierabend als bei Erwachsenen. Zweitens verbotene und eingeschränkte Tätigkeiten ([Link: /wissen/blog/jarbschg-verbotene-gefaehrliche-arbeiten|verbotene Arbeiten]) – keine schwere Maschine, kein gefährlicher Stoff ohne Konzept. Drittens Unterweisung, Aushang, Dokumentation ([Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Unterweisung § 29, Aushang § 47–49]).",
      "H2::Umsetzung in der Praxis",
      "Gefährdungsbeurteilung: Jugendliche brauchen einen eigenen Abschnitt in der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] – welche Tätigkeiten erlaubt sind, welche Arbeitsmittel, welche Unterweisungsintervalle. Parallel für andere schutzbedürftige Gruppen: [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Mutterschutz MuSchG], [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|Teilhabe SGB IX].",
      "Brandschutz und Evakuierung: JArbSchG ist kein Brandschutzgesetz – aber § 29 verlangt Unterweisung über Gefahren. Dazu gehören Alarm, Fluchtwege und Verhalten im Brandfall – abgestimmt mit [Link: /wissen/blog/brandschutzordnung-din-14096|Brandschutzordnung] und [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|allgemeiner Unterweisung]. Jugendliche dürfen viele gefährliche Tätigkeiten nicht ausführen, die im Brandfall relevant wären (Heißarbeit, Gefahrstoffe in Extremfällen).",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Beschäftigung Jugendlicher sollten erlaubte Tätigkeiten, Arbeitszeiten, Aushang und halbjährliche Unterweisung vor Arbeitsbeginn geklärt sein – Verstöße werden in NRW geahndet.",
      "Neue Spokes: [Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeit], [Link: /wissen/blog/jarbschg-verbotene-gefaehrliche-arbeiten|Verbotene Arbeiten], [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Unterweisung und Aushang]. Bereits vertieft: [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung Fristen], [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|Schutzbedürftige Gruppen Mutterschutz]. Health and Safety+ – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ab wann gilt JArbSchG?",
        answer:
          "Für Jugendliche unter 18 Jahren – ergänzt ArbSchG mit strengeren Grenzen zu Arbeitszeit, verbotenen Arbeiten, Unterweisung und Gesundheitsuntersuchung.",
      },
      {
        question: "Was ist verboten?",
        answer:
          "Gefährliche Arbeiten nach Anhang – u. a. bestimmte Maschinen, Gefahrstoffe, Höhenarbeit, schwere Lasten. Details: [Link: /wissen/blog/jarbschg-verbotene-gefaehrliche-arbeiten|Verbotene Arbeiten].",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Jugendliche an Maschine ohne Prüfung, fehlender Aushang, nur jährliche statt halbjährlicher Unterweisung, Arbeitszeit überschritten.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeit], [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Unterweisung/Aushang] und [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|ArbSchG-Hub].",
      },
    ],
  },
  {
    slug: "jarbschg-arbeitszeit-ruhezeiten",
    title: "JArbSchG Arbeitszeit und Ruhezeiten – was für Jugendliche gilt",
    excerpt:
      "Jugendarbeitsschutz Arbeitszeit: 8 Stunden, 40 Stunden Woche, 6–20 Uhr, Ruhetage und Ausnahmen – praxisnah für Ausbildung und Ferienjob in NRW.",
    date: "2026-02-10",
    dateModified: "2026-06-26",
    content: [
      "Jugendliche sollen lernen und arbeiten – nicht ausgebrannt werden. Das JArbSchG begrenzt Arbeitszeit und schützt Ruhezeiten deutlich strenger als beim Erwachsenen-Arbeitsrecht. Wer Azubis, Praktikanten oder Ferienkräfte einsetzt, muss das im Dienstplan und in der [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Dokumentation] abbilden – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Grundregeln: Höchstens acht Stunden täglich und 40 Stunden wöchentlich. Beschäftigung nur zwischen 6 und 20 Uhr – Nacht- und Frühschichten sind tabu, mit wenigen Ausnahmen (z. B. Bäckerei ab 4 Uhr für Jugendliche über 17 Jahre). Nur an fünf Tagen pro Woche; zwei Ruhetage, möglichst am Wochenende.",
      "Pausen: Jugendlichen müssen Ruhepausen in ausreichender Länge gewährt werden – bei mehr als vier bis fünf Stunden Arbeit mindestens 30 Minuten, bei mehr als sechs Stunden mindestens 60 Minuten (Details im Gesetz nach Dauer). Pausen zählen nicht als Arbeitszeit.",
      "H2::Umsetzung in der Praxis",
      "Berufsschule: Zeit in der Berufsschule zählt als Arbeitszeit, wenn sie in die betriebliche Ausbildung fällt – Doppelbelastung vermeiden. Wer nach der Schule noch lange im Betrieb bleibt, verletzt schnell die Höchstgrenzen.",
      "Ausnahmen: In bestimmten Branchen (Landwirtschaft, Gaststätten, Messen, Theater u. a.) gelten erweiterte Regeln – nur mit Genehmigung und unter Auflagen. Nicht pauschal „Azubi = Erwachsener“ planen.",
      "JArbSchG begrenzt Arbeitszeit, Nacht- und Wochenendarbeit für Jugendliche strikt – Abweichungen nur in engen gesetzlichen Ausnahmen. Ausbildungsbetriebe und Saisonbetriebe in NRW werden hier bei Kontrollen häufig beanstandet.",
      "Dienstpläne müssen mit verbotenen Tätigkeiten und [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Unterweisung JArbSchG] zusammenpassen – einheitliche Dokumentation für BG und IHK.",
      "H2::Typische Mängel und Vorbereitung",
      "Bei Jugendlichen müssen Arbeitszeitnachweise, Pausen und mindestens 12 Stunden Ruhezeit zwischen Schichten kontrollierbar sein – Überstunden und Wochenendarbeit sind stark eingeschränkt.",
      "Aushang § 48: Ab drei regelmäßig beschäftigten Jugendlichen müssen Beginn, Ende und Pausen der täglichen Arbeitszeit für alle Beschäftigten sichtbar sein – digital oder am Schwarzen Brett. Verknüpfung mit [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Hub]. Health and Safety+ – [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie lange dürfen Jugendliche arbeiten?",
        answer:
          "Grundsätzlich max. 8 Stunden täglich, 40 Stunden wöchentlich – Ausnahmen nur eng begrenzt. Keine Nachtarbeit 20–6 Uhr, Sonn- und Feiertagsarbeit verboten mit wenigen Ausnahmen.",
      },
      {
        question: "Welche Pausen?",
        answer:
          "Bei 4,5–6 h mindestens 30 Min, ab 6 h mindestens 60 Min – Arbeitsunterbrechungen über 15 Min zählen nicht als Pause.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Schichtplan ohne JArbSchG-Check, fehlende Dokumentation, Ruhezeit unter 12 h, Samstagsarbeit ohne Ausnahmetatbestand.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Hub], [Link: /wissen/blog/jarbschg-unterweisung-aushang-dokumentation|Dokumentation].",
      },
    ],
  },
  {
    slug: "jarbschg-verbotene-gefaehrliche-arbeiten",
    title: "JArbSchG verbotene Arbeiten – Maschinen, Höhe, Gefahrstoffe",
    excerpt:
      "Jugendarbeitsschutz: Welche Tätigkeiten für Jugendliche verboten oder eingeschränkt sind – Abgrenzung zu BetrSichV, TRGS und ASR für Betriebe in NRW.",
    date: "2026-02-17",
    dateModified: "2026-06-26",
    content: [
      "Nicht alles, was ein ausgebildeter Facharbeiter darf, darf ein 16-Jähriger. Das JArbSchG enthält ein Verzeichnis verbotener und eingeschränkter Tätigkeiten – zum Schutz vor Unfällen und Überforderung. In der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] muss stehen: Welche Arbeitsplätze für Jugendliche freigegeben sind – und welche nicht – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Das Jugendarbeitsschutzgesetz verbietet oder grenzt folgende Tätigkeiten ein. Arbeiten mit erheblicher Gefährdung durch Maschinen, Fahrzeuge oder Tiere. Arbeiten mit gesundheitsgefährdenden Stoffen über bestimmte Grenzen. Arbeiten unter Tage. Akkord- und tempoabhängige Arbeit in vielen Fällen. Alleinig arbeiten in bestimmten Risikosituationen. Konkrete Liste im Gesetz – in der Praxis als Checkliste für Begehungen nutzen.",
      "Maschinen und Arbeitsmittel: Jugendliche nur an Maschinen, wenn die Gefährdungsbeurteilung es erlaubt und Unterweisung vorliegt – oft eingeschränkter als bei Erwachsenen. Schnittstelle [Link: /wissen/blog/betrsichv-einfach-erklaert|BetrSichV] und [Link: /wissen/blog/trbs-einfach-erklaert|TRBS]. Stapler und Flurförderzeuge: besondere Vorsicht – [Link: /wissen/blog/dguv-vorschrift-67-flurfoerderzeuge|DGUV V67].",
      "JArbSchG verbietet Jugendlichen bestimmte Tätigkeiten – etwa Arbeiten mit erheblichen Gefahrstoffen, auf Dächern ohne Schutz, mit schweren Maschinen oder in Nachtschicht. Ausbildungsbetriebe müssen Tätigkeitspläne gegen die Verbotsliste prüfen.",
      "Dokumentation und Aufsicht sind Pflicht: Wer Jugendliche einsetzt, trägt erhöhte Sorgfalt. Kombination mit [Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeit JArbSchG] und Unterweisung.",
      "H2::Umsetzung in der Praxis",
      "Höhe und Absturz: Beschäftigung in Höhen mit Absturzgefahr stark eingeschränkt. Baustelle: [Link: /wissen/blog/dguv-vorschrift-38-bauarbeiten|DGUV V38], [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1], [Link: /wissen/ratgeber/sigeko-baustelle|SiGeKo].",
      "Gefahrstoffe und Brand: Jugendliche nicht mit gefährlichen Stoffen über erlaubte Grenzen; keine Heißarbeit ohne Ausnahme. Brandschutz: Evakuierung und Unterweisung ja – Schweißen oder Löschen im Einsatz nur im Rahmen der Ausbildung und erlaubter Tätigkeiten. [Link: /wissen/blog/trgs-einfach-erklaert|TRGS], [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz-Ratgeber].",
      "Vor der ersten Tätigkeit eines Jugendlichen gilt Folgendes. Ärztliche Untersuchung kann erforderlich sein. Unterweisung an Maschinen und Arbeitsplätzen muss vor erstmaliger Beschäftigung vorliegen. In Begehungen zeigen sich häufig Azubis allein an der Presse, Praktikanten im Lager mit Stapler oder Ferienjobs an der Abfüllung ohne GBU-Abschnitt. Health and Safety+ – [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Welche Arbeiten sind für Jugendliche verboten?",
        answer:
          "Nach JArbSchG und Anhang – u. a. Gefahrstoffe mit CMR, bestimmte Maschinen, Absturzgefahr, schwere körperliche Lasten, alleinige Arbeit in bestimmten Situationen.",
      },
      {
        question: "Gibt es Ausnahmen?",
        answer:
          "Für Auszubildende in engen Grenzen und unter Aufsicht – betrieblich und Tätigkeit genau prüfen, dokumentieren, nicht pauschal annehmen, Azubi dürfe alles.",
      },
      {
        question: "Was tun vor Einstellung?",
        answer:
          "Tätigkeitsbeschreibung gegen Anhang prüfen, Arbeitsplatz anpassen, Unterweisung, ggf. arbeitsmedizinische Untersuchung nach JArbSchG.",
      },
      {
        question: "Konsequenzen in NRW?",
        answer:
          "Bußgelder, Stilllegung, Haftungsrisiko – siehe [Link: /wissen/blog/strafen-arbeitsschutz|Konsequenzen] und [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Hub].",
      },
    ],
  },
  {
    slug: "jarbschg-unterweisung-aushang-dokumentation",
    title: "JArbSchG Unterweisung, Aushang und Dokumentation – § 29 und § 47–49",
    excerpt:
      "Jugendarbeitsschutz Unterweisung halbjährlich, Gesetzesauslegung § 47, Arbeitszeiten-Aushang § 48, Verzeichnis § 49 – für Betriebe mit Azubis in Köln und NRW.",
    date: "2026-02-24",
    dateModified: "2026-06-26",
    content: [
      "Papierkram? Nein – Nachweis, dass Jugendliche die Gefahren ihres Arbeitsplatzes kennen und der Betrieb die JArbSchG-Pflichten kennt. Drei Bausteine: Unterweisung, Aushang/Bereitstellung, Verzeichnisse und Nachweise – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Nach § 29 Unterweisung über Gefahren gilt Folgendes. Vor der ersten Tätigkeit und mindestens halbjährlich wiederholen – häufiger als die jährliche [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung nach ArbSchG]. Inhalt: arbeitsplatzspezifische Gefahren, Schutzmaßnahmen, Verhalten bei Unfällen, Brand und Evakuierung. Dokumentieren mit Datum, Teilnehmer, Themen, Unterweisende.",
      "Nach § 47 Gesetz und Aufsichtsbehörde gilt Folgendes. Wer regelmäßig mindestens einen Jugendlichen beschäftigt, stellt eine Kopie des JArbSchG und die Anschrift der zuständigen Aufsichtsbehörde bereit – über betriebliche IT oder als Aushang an geeigneter Stelle. Nicht verwechseln mit [Link: /wissen/blog/brandschutzordnung-din-14096|BSO Teil A] am Fluchtweg – beides kann nötig sein.",
      "JArbSchG verlangt für Jugendliche unter 18 Jahren besondere Unterweisungen, Aushänge zum Jugendarbeitsschutz und Dokumentation der halbjährlichen Unterweisung. Ausbildungsbetriebe in Köln und NRW werden bei BG-Begehungen gezielt auf verbotene Tätigkeiten und Arbeitszeiten geprüft.",
      "Abstimmung mit [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|allgemeiner Unterweisung] und [Link: /wissen/blog/jarbschg-verbotene-gefaehrliche-arbeiten|verbotenen Arbeiten] vermeidet Widersprüche zwischen Ausbildungsplan und Sicherheitsunterweisung.",
      "Themenplan, Teilnehmerliste und Datum der halbjährlichen Unterweisung gehören in die ASA-Vorbereitung – nicht nur in der Ausbildungsakte.",
      "H2::Umsetzung in der Praxis",
      "Nach § 48 Arbeitszeiten und Pausen gilt Folgendes. Ab drei regelmäßig beschäftigten Jugendlichen – Information über Beginn, Ende und Pausen täglich sichtbar oder digital zugänglich. Passt zu [Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeitregeln].",
      "Nach § 49 Verzeichnis gilt Folgendes. Jugendliche erfassen – Name, Geburtsdatum, Tätigkeit, Arbeitszeiten – für die Aufsicht auf Verlangen. Datenschutz beachten, aber Pflicht erfüllen.",
      "Vor einer Begehung sollte geklärt sein, ob Aushang § 47 vorhanden, ob § 48 bei ≥3 Jugendlichen, ob Halbjährliche Unterweisung nachweisbar, ob GBU-Abschnitt Jugendliche aktuell, ob Health and Safety+ – [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Wie oft Jugendliche unterweisen?",
        answer:
          "Mindestens halbjährlich nach JArbSchG – zusätzlich bei Einstellung, Tätigkeitswechsel und nach Unfällen. Nicht nur jährliche ArbSchG-Unterweisung.",
      },
      {
        question: "Was muss ausgehängt werden?",
        answer:
          "Gesetzlicher Aushang zu Jugendarbeitsschutz, erlaubte Arbeitszeiten, verbotene Arbeiten, Ansprechpartner – gut sichtbar, verständlich.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Kein Aushang, Unterweisung nur einmalig, fehlende Dokumentation, Inhalte nicht altersgerecht verständlich.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung ArbSchG], [Link: /wissen/blog/jarbschg-arbeitszeit-ruhezeiten|Arbeitszeit] und [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG-Hub].",
      },
    ],
  },
  // MuSchG-Hub: Mutterschutz – Megabrain-Einstieg
  {
    slug: "mutterschutz-muschg-einfach-erklaert",
    title: "Mutterschutz (MuSchG) einfach erklärt – Pflichten für Arbeitgeber in NRW",
    excerpt:
      "Mutterschutzgesetz (MuSchG): Wer geschützt ist, Schutzfristen, Arbeitszeit, unzulässige Tätigkeiten, Gefährdungsbeurteilung § 10, Aushang § 26 – praxisnah für Betriebe in Köln und NRW.",
    date: "2026-03-03",
    dateModified: "2026-06-26",
    content: [
      "Schwangerschaft im Team ist kein Sonderfall – sie ist im Mutterschutzgesetz (MuSchG) geregelt. Das Gesetz schützt Gesundheit von Mutter und Kind am Arbeitsplatz während Schwangerschaft, nach der Entbindung und in der Stillzeit. Es gilt in jedem Betrieb mit weiblichen Beschäftigten – unabhängig von der Größe. Nicht jede Frau wird schwanger; aber jeder Arbeitgeber muss vorbereitet sein – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Wer ist geschützt? Beschäftigte nach SGB IV, Auszubildende, Praktikantinnen, viele Freiwillige und Heimarbeiterinnen – das Gesetz nennt die Gruppen ausführlich. Wichtig: Schutz beginnt nicht erst mit der Mitteilung, sondern die vorausschauende [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] muss Arbeitsplätze schon vorher bewerten.",
      "Drei Säulen in der Praxis: Erstens arbeitszeitlicher Schutz ([Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen und Arbeitszeit]) – sechs Wochen vor und acht Wochen nach der Entbindung grundsätzlich Beschäftigungsverbot, dazu Nacht-, Sonn- und Feiertagsverbote. Zweitens betrieblicher Gesundheitsschutz ([Link: /wissen/blog/muschg-unzulaessige-taetigkeiten-schutzmasnahmen|unzulässige Tätigkeiten und Schutzmaßnahmen]) – keine Gefahrstoffe über Grenzwert, kein Heben schwerer Lasten ohne Konzept. Drittens Organisation ([Link: /wissen/blog/muschg-aushang-mitteilung-dokumentation|Aushang, Mitteilung, Dokumentation]) – Gesetz aushängen, Mitteilungen der Beschäftigten ernst nehmen, Maßnahmen dokumentieren.",
      "H2::Umsetzung in der Praxis",
      "Gefährdungsbeurteilung § 10 MuSchG: Zwei Stufen – vorausschauend für alle Arbeitsplätze und unverzüglich bei bekannter Schwangerschaft oder Stillzeit. Vertiefung: [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU für Schwangere und Stillende]. Schnittstellen: [Link: /wissen/blog/trgs-einfach-erklaert|Gefahrstoffe TRGS], [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen], [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische Belastung].",
      "Parallel für andere schutzbedürftige Gruppen: [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|Jugendarbeitsschutz JArbSchG], [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|Teilhabe SGB IX]. Allgemeiner Rahmen: [Link: /wissen/blog/arbeitsschutzgesetz-arbschg-uebersicht|Arbeitsschutzgesetz]. Reform 2025/2026: erweiterte Schutzfristen nach Fehlgeburt – in Personalprozessen und GBU berücksichtigen.",
      "Das Mutterschutzgesetz schützt Schwangere und Stillende vor gesundheitlichen und finanziellen Nachteilen – mit Beschäftigungsverboten in bestimmten Phasen, Schutz vor Kündigung und Anspruch auf Umgestaltung des Arbeitsplatzes.",
      "Arbeitgeber in Köln und NRW sollten MuSchG in Personal, Arbeitsschutz und GBU verankern – nicht erst nach Mitteilung einer Schwangerschaft reagieren. Vertiefung: [Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen].",
      "H2::Typische Mängel und Vorbereitung",
      "Arbeitgeber sollten vor Mitteilung einer Schwangerschaft wissen, wo MuSchG-Aushang hängt, wie GBU nach § 10 ausgelöst wird und wer Mutterschutz koordiniert – mit Betriebsarzt und SiFa.",
      "Neue Spokes: [Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen], [Link: /wissen/blog/muschg-unzulaessige-taetigkeiten-schutzmasnahmen|Unzulässige Tätigkeiten], [Link: /wissen/blog/muschg-aushang-mitteilung-dokumentation|Aushang und Dokumentation]. Bereits vertieft: [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Mutterschutz], [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|Psychische GBU]. Health and Safety+ – [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was regelt das MuSchG?",
        answer:
          "Schutz von Müttern bei Beschäftigung, Schwangerschaft, Stillzeit – Beschäftigungsverbote, Schutzfristen, Arbeitszeitgrenzen, Mitteilungspflichten, GBU nach § 10.",
      },
      {
        question: "Wer ist geschützt?",
        answer:
          "Schwangere, Stillende, Wöchnerinnen – auch bei geringer Wochenarbeitszeit und in Ausbildung. Arbeitgeber darf nicht benachteiligen.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Keine GBU nach Mitteilung, fehlender Aushang, Gefahrstoffe ohne Anpassung, keine Stillmöglichkeit, Schutzfristen missachtet.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Schwangere], [Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen] und [Link: /wissen/blog/muschg-aushang-mitteilung-dokumentation|Aushang].",
      },
    ],
  },
  {
    slug: "muschg-schutzfristen-arbeitszeit",
    title: "MuSchG Schutzfristen und Arbeitszeit – Beschäftigungsverbote und Freistellung",
    excerpt:
      "Mutterschutz Schutzfristen: 6 Wochen vor, 8 Wochen nach Entbindung, Nacht- und Sonntagsarbeit, Mehrarbeit, Freistellung für Untersuchungen und Stillen – für Betriebe in NRW.",
    date: "2026-03-10",
    dateModified: "2026-06-26",
    content: [
      "Schutzfristen sind das Herzstück des arbeitszeitlichen Mutterschutzes. Sie sollen Mutter und Kind vor Überlastung schützen – nicht nur Papierkram für HR. Wer Personal plant, Azubis einsetzt oder Schichtdienst organisiert, muss die Fristen kennen, bevor eine Schwangerschaft mitgeteilt wird – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Nach § 3 Schutzfristen gilt Folgendes. In der Regel sechs Wochen vor der Entbindung und acht Wochen danach darf die Frau grundsätzlich nicht beschäftigt werden – außer sie widerspricht schriftlich vor der Schutzfrist vor der Entbindung bzw. Nach der Entbindung. Nach Kaiserschnitt oder Frühgeburt gelten verlängerte Fristen. Seit der Reform auch Schutzfristen nach Fehlgeburt in bestimmten Konstellationen – Personal und GBU anpassen.",
      "Nach § 4 Mehrarbeit und Ruhezeit gilt Folgendes. Mehrarbeit ist während Schwangerschaft und Stillzeit verboten. Zwischen Arbeitsende und -beginn mindestens elf Stunden Ruhe – enger als bei manchen Erwachsenen-Schichtmodellen.",
      "H2::Umsetzung in der Praxis",
      "Nach § 5 Nachtarbeit gilt Folgendes. Beschäftigung zwischen 20 und 6 Uhr grundsätzlich verboten – Ausnahmen nur in engen Grenzen mit Genehmigung. § 6 Sonn- und Feiertagsarbeit: grundsätzlich verboten, Ausnahmen möglich. Schichtbetriebe müssen früh umplanen, nicht erst bei Mutterschutzlohn.",
      "Nach § 7 Freistellung gilt Folgendes. Für vorgeburtliche Untersuchungen und zum Stillen – bezahlte Freistellung in der gesetzlich vorgesehenen Dauer. Stillraum und Pausen in der [Link: /wissen/blog/muschg-unzulaessige-taetigkeiten-schutzmasnahmen|betrieblichen Gestaltung] mitdenken.",
      "Schutzfristen vor und nach der Entbindung verbieten Beschäftigung – mit Mutterschutzlohn und Beschäftigungsverboten, die auch für geringfügig Beschäftigte gelten. Planung von Vertretung und Übergabe muss rechtzeitig erfolgen.",
      "Arbeitszeitregelungen für Schwangere (keine Nacht- und Sonntagsarbeit ohne Ausnahme) sind mit Dienstplan und [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU] abzustimmen.",
      "H2::Typische Mängel und Vorbereitung",
      "Vor einer Begehung sollte geklärt sein, ob Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Leistungen: Mutterschutzlohn, Mutterschaftsgeld – HR-Thema, aber Arbeitsschutz muss Beschäftigungsverbote rechtzeitig auslösen. Verknüpfung [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG-Hub]. Health and Safety+ – [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was sind Schutzfristen nach MuSchG?",
        answer:
          "6 Wochen vor Entbindung (mit Beschäftigungsverbot auf Wunsch) und 8 Wochen danach (absolutes Beschäftigungsverbot, 12 Wochen bei Frühgeburt/Mehrlingen).",
      },
      {
        question: "Arbeitszeit während Schwangerschaft?",
        answer:
          "Max. 8,5 h täglich, 90 h in Doppelwoche – keine Nachtarbeit 20–6 Uhr, kein Sonn- und Feiertagsarbeit ohne Ausnahme, keine Überstunden.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Schutzfristen nicht eingehalten, Heimarbeit ohne Prüfung, Schichtplan ignoriert MuSchG, keine Anpassung nach Mitteilung.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG-Hub], [Link: /wissen/blog/muschg-unzulaessige-taetigkeiten-schutzmasnahmen|Unzulässige Tätigkeiten].",
      },
    ],
  },
  {
    slug: "muschg-unzulaessige-taetigkeiten-schutzmasnahmen",
    title: "MuSchG unzulässige Tätigkeiten – Gefährdungsbeurteilung und Schutzmaßnahmen",
    excerpt:
      "Mutterschutz § 9–13: unverantwortbare Gefährdung, unzulässige Tätigkeiten für Schwangere und Stillende, Maßnahmenhierarchie und ärztliches Beschäftigungsverbot – praxisnah für NRW.",
    date: "2026-03-17",
    dateModified: "2026-06-26",
    content: [
      "Nicht jeder Arbeitsplatz ist für Schwangere geeignet – manche Tätigkeiten sind verboten, andere nur mit Anpassung. Das MuSchG nennt in § 11 und § 12 konkrete Verbote und Grenzen; § 9 verbietet jede unverantwortbare Gefährdung. In der [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] muss stehen, welche Plätze grundsätzlich freigegeben sind – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Besonders relevant sind folgende Gefährdungen für Schwangere und Stillende. Dazu zählen Gefahrstoffe und biologische Arbeitsstoffe über Grenzwerten, wie in [Link: /wissen/blog/trgs-einfach-erklaert|TRGS] und [Link: /wissen/blog/betriebsanweisungen-gefahrstoffe|Betriebsanweisungen] geregelt. Hinzu kommt regelmäßiges Heben und Tragen schwerer Lasten, wobei das Gesetz für wiederholtes Heben eine Grenze von 5 kg vorsieht. Auch Lärm, Hitze, Kälte und Vibration spielen eine Rolle, konkretisiert in [Link: /wissen/blog/asr-a3-7-laerm-arbeitsplatz|ASR A3.7 Lärm]. Absturzgefahr wird in [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1] behandelt. Psychische Belastung gehört in die [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische GBU].",
      "Nach § 13 MuSchG gilt folgende Rangfolge der Schutzmaßnahmen. Erst Arbeitsbedingungen umgestalten, dann Arbeitsplatzwechsel, erst danach betriebliches Beschäftigungsverbot nach § 13 Abs. 2 – zu unterscheiden vom ärztlichen Beschäftigungsverbot § 16. Ziel: Beschäftigung ermöglichen, wo es sicher geht.",
      "H2::Umsetzung in der Praxis",
      "Stillzeit § 12: Eigene unzulässige Tätigkeiten – Hygiene, Infektionsrisiken in Kita, Pflege, Gastronomie besonders prüfen. Beispiel aus der Praxis: [Link: /wissen/blog/ergonomie-kueche-kita-gefaehrdungsbeurteilung|Ergonomie KiTa-Küche] mit Belastungsbewertung.",
      "MuSchG listet Tätigkeiten, die Schwangeren und Stillenden untersagt sind – etwa bestimmte Gefahrstoffe, Schichtarbeit unter Druck, schwere körperliche Arbeit. Der Arbeitgeber muss nach Mitteilung unverzüglich umorganisieren oder geeignete Arbeitsplätze zuweisen.",
      "Schutzmaßnahmen sind nicht Verhandlungssache: fehlende Umsetzung kann Bußgelder und arbeitsrechtliche Ansprüche auslösen. GBU und Betriebsarzt: [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Schwangerschaft].",
      "H2::Typische Mängel und Vorbereitung",
      "Vor einer Begehung sollte geklärt sein, ob Dokumentation und Maßnahmenplan aktuell? Unterweisung nachweisbar? Verantwortliche und Fristen festgelegt? Abstimmung mit [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und Betriebsarzt.",
      "Bei Mitteilung der Schwangerschaft: unverzüglich konkrete GBU des Arbeitsplatzes, Maßnahmen umsetzen, Beschäftigte informieren. Vertiefung § 10: [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Schwangere und Stillende]. Health and Safety+ – [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG-Überblick], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Welche Tätigkeiten sind für Schwangere unzulässig?",
        answer:
          "Nach MuSchG und Anhang – u. a. Gefahrstoffe, biologische AG 3/4, schwere Lasten, bestimmte Strahlung, Absturz, alleinige Nachtarbeit, bestimmte Druckluft-/Tauchertätigkeiten.",
      },
      {
        question: "Was sind Schutzmaßnahmen?",
        answer:
          "Umgestaltung, Versetzung, technische Schutzmaßnahmen, Beschäftigungsverbot bis wirksam – Abstimmung mit Betriebsarzt, Dokumentation in GBU.",
      },
      {
        question: "Typische Mängel in NRW?",
        answer:
          "Tätigkeit ohne GBU fortgesetzt, PSA statt Substitution, fehlende Versetzung, Stillzeit ohne angepassten Arbeitsplatz.",
      },
      {
        question: "Wo vertiefen?",
        answer:
          "[Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Schwangere], [Link: /wissen/blog/muschg-schutzfristen-arbeitszeit|Schutzfristen] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber].",
      },
    ],
  },
  {
    slug: "muschg-aushang-mitteilung-dokumentation",
    title: "MuSchG Aushang, Mitteilung und Dokumentation – § 14, § 26 und § 27",
    excerpt:
      "Mutterschutz Aushangpflicht § 26, Dokumentation § 14, Mitteilung der Beschäftigten, Meldepflicht § 27 und Datenschutz – Checkliste für Betriebe in Köln und NRW.",
    date: "2026-03-24",
    dateModified: "2026-06-26",
    content: [
      "Mutterschutz endet nicht bei der GBU – Aushang, Information und Nachweise gehören dazu. Drei Pflichten, die bei Begehungen oft fehlen: Gesetz sichtbar machen, Maßnahmen dokumentieren, Mitteilungen der Beschäftigten ernst nehmen – relevant für Betriebe in Köln und NRW.",
      "H2::Was gilt rechtlich?",
      "Nach § 26 Aushang gilt Folgendes. In jedem Betrieb, in dem Frauen beschäftigt sind, muss das MuSchG an geeigneter Stelle ausgelegt oder über betriebliche IT bereitgestellt werden – vergleichbar [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG § 47], aber ohne Schwellenwert. Auch Ein-Personen-Betriebe mit weiblicher Beschäftigter.",
      "Nach § 14 Dokumentation gilt Folgendes. Ergebnis der Beurteilung, festgelegte Schutzmaßnahmen, Mitteilung an die Beschäftigte in verständlicher Form – mit Verantwortlichen und Fristen. Anbindung an [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf] und § 6 ArbSchG.",
      "MuSchG verlangt neben dem Aushang zum Mutterschutz eine verständliche Information der Beschäftigten über Schutzrechte, Meldewege und Ansprechpersonen. In größeren Betrieben in Köln und NRW empfiehlt sich ein Merkblatt in der Eingangshalle, die Einbindung in die Einarbeitung und ein Eintrag in der Unterweisungsmatrix.",
      "Bei Schwangerschaft oder Stillzeit löst jede Mitteilung eine erneute arbeitsmedizinische und sicherheitstechnische Bewertung aus – Abstimmung mit Betriebsarzt, [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] und ggf. [Link: /wissen/blog/gefaehrdungsbeurteilung-schwangere-mutterschutz|GBU Schwangerschaft].",
      "H2::Umsetzung in der Praxis",
      "Nach § 15 Mitteilungen gilt Folgendes. Schwangere und stillende Frauen sollen Mitteilung machen – Arbeitgeber darf nicht zu früh fragen, muss aber handeln, sobald er Kenntnis hat. Freiwillige Mitteilung schützt beide Seiten.",
      "Nach § 27 Meldepflicht gilt Folgendes. Bei Verstößen gegen bestimmte Schutzvorschriften Meldung an die Aufsichtsbehörde – z. B. Wenn unzulässige Tätigkeiten nicht abgestellt werden. Bußgelder bis 30.000 Euro möglich – [Link: /wissen/blog/strafen-arbeitsschutz|Konsequenzen Arbeitsschutz].",
      "Vor einer Begehung sollte geklärt sein, ob MuSchG ausgehängt, ob Vorausschauende GBU mit Mutterschutz-Abschnitt, ob Bei bekannter Schwangerschaft: Maßnahmenplan aktuell, ob Stillraum geregelt, ob Health and Safety+ – [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Was muss ausgehängt werden (MuSchG)?",
        answer:
          "Gesetzlicher Aushang zu Rechten und Pflichten im Mutterschutz – gut sichtbar, aktuelle Fassung, verständlich für alle Beschäftigten.",
      },
      {
        question: "Mitteilungspflicht Schwangerschaft?",
        answer:
          "Beschäftigte sollen früh mitteilen – Arbeitgeber leitet unverzüglich GBU und Maßnahmen ein. Diskriminierungsschutz beachten.",
      },
      {
        question: "Was dokumentieren?",
        answer:
          "GBU nach § 10, Maßnahmen, Beschäftigungsverbote, Versetzungen, Kenntnisnahme Betriebsarzt – vertraulich, nur befugte Personen.",
      },
      {
        question: "Typische Mängel?",
        answer:
          "Kein Aushang, GBU fehlt nach Mitteilung, Information an Vorgesetzte ohne Datenschutz, Schutzmaßnahmen nicht nachverfolgt.",
      },
    ],
  },
  // SGB IX-Hub: Teilhabe am Arbeitsleben – Megabrain-Einstieg
  {
    slug: "teilhabe-sgb-ix-einfach-erklaert",
    title: "SGB IX Teilhabe am Arbeitsleben einfach erklärt – Pflichten für Arbeitgeber",
    excerpt:
      "Sozialgesetzbuch IX (SGB IX): Schwerbehindertenrecht, Beschäftigungspflicht, Arbeitsplatzgestaltung, Schwerbehindertenvertretung – praxisnah für Betriebe in Köln und NRW.",
    date: "2026-04-07",
    dateModified: "2026-06-26",
    content: [
      "Menschen mit Behinderungen sollen am Arbeitsleben teilhaben – das regelt das Neunte Buch Sozialgesetzbuch (SGB IX). Für Arbeitgeber in Köln und NRW ist vor allem Teil 3 relevant: Schwerbehindertenrecht mit Beschäftigungspflicht, betrieblicher Gestaltung und betrieblicher Mitwirkung. Anders als JArbSchG oder MuSchG ist SGB IX in der Sammelmappe „empfohlen“, nicht aushangpflichtig – trotzdem verbindlich, wenn es greift.",
      "H2::Wer fällt unter SGB IX Teil 3?",
      "Schwerbehindert im Sinne des Gesetzes ist, wer einen Grad der Behinderung (GdB) von mindestens 50 hat – festgestellt durch das Versorgungsamt. Gleichstellung bei GdB 30 bis unter 50 ist in engen Fällen möglich. § 2 SGB IX definiert Behinderung sozial: Wechselwirkung von Beeinträchtigung und Barrieren – am Arbeitsplatz oft entscheidender als die Diagnose allein.",
      "H2::Drei Pflichtfelder für Arbeitgeber",
      "Erstens Beschäftigung und Quote ([Link: /wissen/blog/sgb-ix-beschaeftigungspflicht-ausgleichsabgabe|Beschäftigungspflicht]): ab 20 Arbeitsplätzen mindestens fünf Prozent schwerbehinderte Menschen oder Ausgleichsabgabe. Zweitens Arbeitsplatz und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung] ([Link: /wissen/blog/sgb-ix-arbeitsplatz-gestaltung-gbu|§ 164 Arbeitsplatzgestaltung]): behinderungsgerechte Einrichtung, technische Hilfen, Unfallgefahr. Drittens Organisation ([Link: /wissen/blog/sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter|SBV und Inklusionsbeauftragter]): ab fünf schwerbehinderten Beschäftigten SBV wählen, Inklusionsbeauftragter bestellen.",
      "H2::Schnittstelle Arbeitsschutz",
      "Nach § 164 verlangt behinderungsgerechte Gestaltung von Arbeitsstätten, Maschinen, Organisation und Arbeitszeit – unter besonderer Berücksichtigung der Unfallgefahr. Das ergänzt § 5 ArbSchG, ersetzt es nicht. Evakuierung gilt Folgendes. [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan] und Personal-Notfallpläne mit der Schwerbehindertenvertretung – [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz-Ratgeber].",
      "Teilhabe am Arbeitsleben nach SGB IX umfasst Beschäftigung, Ausbildung und Eingliederung schwerbehinderter Menschen – mit Rechten auf angemessene Arbeitsplatzgestaltung, Nachteilsausgleich und Unterstützung durch Integrationsfachdienste.",
      "Für Arbeitgeber in Köln und NRW bedeutet das: frühzeitige Abstimmung mit Schwerbehindertenvertretung, barrierefreie Wege und technische Hilfen in der GBU dokumentieren – [Link: /wissen/blog/sgb-ix-arbeitsplatz-gestaltung-gbu|Arbeitsplatz und GBU].",
      "H2::Schutzbedürftige Gruppen im Überblick",
      "Parallel gelten eigene Regelwerke: [Link: /wissen/blog/jugendarbeitsschutz-jarbschg-einfach-erklaert|JArbSchG Jugendliche], [Link: /wissen/blog/mutterschutz-muschg-einfach-erklaert|MuSchG Schwangere und Stillende]. Psychische Behinderung und Belastung: [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|Psychische GBU]. Prävention § 167: Eintritt von Behinderung vermeiden – [Link: /wissen/blog/dguv-vorschrift-1-grundsaetze-praevention|DGUV V1].",
      "Vertiefende Artikel finden Sie in den Spokes zu [Link: /wissen/blog/sgb-ix-beschaeftigungspflicht-ausgleichsabgabe|Quote], [Link: /wissen/blog/sgb-ix-arbeitsplatz-gestaltung-gbu|Arbeitsplatz], [Link: /wissen/blog/sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter|SBV und Inklusion]. Health and Safety+ – [Link: /wissen/ratgeber/arbeitsschutz-unternehmen|Arbeitsschutz-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Muss SGB IX ausgehängt werden?",
        answer:
          "Nein – anders als JArbSchG oder MuSchG ist SGB IX nicht pauschal aushangpflichtig. Informationspflichten und betriebliche Umsetzung bleiben dennoch Pflicht.",
      },
      {
        question: "Ab wann gilt die Beschäftigungspflicht?",
        answer:
          "Private und öffentliche Arbeitgeber mit jahresdurchschnittlich mindestens 20 Arbeitsplätzen – mindestens fünf Prozent schwerbehinderte Menschen oder Ausgleichsabgabe nach § 160.",
      },
      {
        question: "Was hat SGB IX mit der Gefährdungsbeurteilung zu tun?",
        answer:
          "§ 164 verlangt behinderungsgerechte Arbeitsplatzgestaltung. In der GBU braucht ein Abschnitt für Menschen mit Behinderung – Barrieren, Hilfsmittel, Notfall und Tätigkeitsanpassung.",
      },
      {
        question: "Gilt SGB IX auch für Kleinstbetriebe?",
        answer:
          "Die fünf-Prozent-Quote gilt ab 20 Arbeitsplätzen. Unterhalb können dennoch Pflichten aus § 164 (Arbeitsplatzgestaltung) und bei fünf schwerbehinderten Beschäftigten die SBV-Wahl greifen.",
      },
    ],
  },
  {
    slug: "sgb-ix-beschaeftigungspflicht-ausgleichsabgabe",
    title: "SGB IX Beschäftigungspflicht und Ausgleichsabgabe – Quote für Arbeitgeber",
    excerpt:
      "Schwerbehindertenquote 5 Prozent, Pflichtarbeitsplätze, Anrechnung, Ausgleichsabgabe und Meldung ans Integrationsamt – für Betriebe ab 20 Arbeitsplätzen in Köln und NRW.",
    date: "2026-04-14",
    dateModified: "2026-06-26",
    content: [
      "Ab 20 Arbeitsplätzen gilt in Köln und NRW die Schwerbehindertenquote: beschäftigen oder ausgleichen. § 154 SGB IX verlangt mindestens fünf Prozent schwerbehinderte Menschen – bei unter 40 Plätzen mindestens einer, bei unter 60 mindestens zwei. Öffentliche Arbeitgeber haben teils höhere Sätze.",
      "H2::Was zählt als Arbeitsplatz?",
      "Arbeitsplätze nach § 156: regelmäßige Beschäftigung im Betrieb, bestimmte Heimarbeit eingeschlossen. Anrechnung nach § 158 und § 159: Auszubildende, Werkstatt-Beschäftigte, Mehrfachanrechnung in Ausnahmefällen. HR und Arbeitsschutz sollten die Jahresdurchschnittszahlen gemeinsam führen – nicht erst bei der Meldung ans Integrationsamt.",
      "H2::Ausgleichsabgabe statt Quote",
      "Erfüllt der Betrieb die Pflichtquote nicht, entrichtet er monatlich eine Ausgleichsabgabe nach § 160 – Höhe staffelt nach Fehlbesetzung. Werkstatt-Aufträge können teilweise angerechnet werden. Die Abgabe ist kein Ersatz für Inklusion, aber rechtliche Konsequenz bei dauerhaft leeren Pflichtplätzen.",
      "H2::Pflichten bei freien Stellen (§ 164)",
      "Freie Arbeitsplätze prüfen: Können schwerbehinderte Menschen – insbesondere arbeitslos Gemeldete – besetzt werden? Agentur für Arbeit früh einbinden. Schwerbehindertenvertretung über Vermittlungsvorschläge und Bewerbungen unverzüglich informieren und anhören. Bei Uneinigkeit Gründe erörtern und dokumentieren.",
      "H2::Typische Fehler in der Praxis",
      "Quote nur auf dem Papier des Integrationsamts, aber keine aktive Stellenprüfung. SBV erfährt von Bewerbungen erst nach der Entscheidung. Ausgleichsabgabe wird gezahlt, Arbeitsplätze bleiben aber physisch nicht behinderungsgerecht – dann scheitert Einstellung trotz Quote. Arbeitsplatz vorher klären: [Link: /wissen/blog/sgb-ix-arbeitsplatz-gestaltung-gbu|Arbeitsplatzgestaltung].",
      "Die Beschäftigungspflicht nach SGB IX betrifft viele mittelständische Betriebe in NRW überraschend: ab 20 Beschäftigten gilt die Pflicht, schwerbehinderte Menschen in einem festen Quotenrahmen zu beschäftigen oder Ausgleichsabgabe zu zahlen. Die Meldung an die Integrationsfachdienste und die Dokumentation der Schwerbehindertenvertretung gehören in die Personal- und Arbeitsschutzorganisation.",
      "Schnittstelle zur [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung]: barrierefreie Arbeitsplätze, angepasste Arbeitszeit und betriebliche Eingliederung müssen mit GBU und ASA abgestimmt werden – nicht nur in der Personalabteilung.",
      "Health and Safety+ – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX-Hub], [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Zählen Werkstudenten oder Leiharbeitnehmer?",
        answer:
          "Das hängt vom Arbeitsplatzbegriff des § 156 und der konkreten Beschäftigung ab – bei Quote und Meldung ans Integrationsamt genau prüfen, nicht schätzen.",
      },
      {
        question: "Kann man nur die Ausgleichsabgabe zahlen?",
        answer:
          "Ja, rechtlich möglich – aber § 164 verlangt trotzdem aktive Prüfung bei freien Stellen und Zusammenarbeit mit Agentur für Arbeit und SBV.",
      },
      {
        question: "Wann muss die Quote gemeldet werden?",
        answer:
          "Jährlich ans zuständige Integrationsamt – auf Basis des Jahresdurchschnitts der Beschäftigtenzahlen. Fristen und Formulare beim Integrationsamt erfragen.",
      },
      {
        question: "Was ist der Unterschied zu Diversity-Quoten?",
        answer:
          "SGB IX ist gesetzliche Pflicht mit Ausgleichsabgabe – keine freiwillige Unternehmenszielmarke. Verstöße können bußgeldbewehrt sein.",
      },
    ],
  },
  {
    slug: "sgb-ix-arbeitsplatz-gestaltung-gbu",
    title: "SGB IX Arbeitsplatzgestaltung und Gefährdungsbeurteilung – Barrieren abbauen",
    excerpt:
      "Behindertengerechte Arbeitsplätze nach § 164 SGB IX: GBU-Abschnitt, technische Hilfen, Ergonomie, Notfall – für Betriebe in Köln und NRW.",
    date: "2026-04-21",
    dateModified: "2026-06-26",
    content: [
      "Quote erfüllt, aber Treppe ohne Lift, Software ohne Screenreader, Stapler ohne angepasste Bedienung – dann scheitert Teilhabe. § 164 SGB IX gibt schwerbehinderten Menschen Rechte auf behinderungsgerechte Arbeitsstätten, Maschinen, Organisation und Arbeitszeit – mit Fokus auf Unfallgefahr. Für Betriebe in Köln und NRW gehört das in die [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|Gefährdungsbeurteilung], nicht nur in HR.",
      "H2::GBU-Abschnitt Behinderung",
      "Vorausschauend festhalten: Welche Tätigkeiten und Plätze mit welchen Anpassungen möglich sind – nicht erst nach Feststellung der Schwerbehinderung. Bei neuer Beschäftigung: konkrete Beurteilung des tatsächlichen Platzes, Maßnahmen umsetzen, dokumentieren nach § 6 ArbSchG. Anlehnung an [Link: /wissen/blog/gefaehrdungsbeurteilung-ablauf|GBU-Ablauf].",
      "H2::Typische Gefährdungen und Normen",
      "Ergonomie und Heben/Tragen gehören in die Belastungsbeurteilung – siehe [Link: /wissen/blog/ergonomie-kueche-kita-gefaehrdungsbeurteilung|Belastungsbeurteilung] und [Link: /wissen/blog/asr-a6-bildschirmarbeit|ASR A6]. Lärm am Arbeitsplatz bewerten Sie nach [Link: /wissen/blog/asr-a3-7-laerm-arbeitsplatz|ASR A3.7], Absturz und Wege nach [Link: /wissen/blog/asr-a2-1-absturz-absturzsicherung|ASR A2.1]. Psychische Behinderungen erfordern eine [Link: /wissen/blog/psychische-gefaehrdungsbeurteilung-arbeitsplatz|psychische GBU]. Fluchtwege müssen barrierefrei im [Link: /wissen/blog/flucht-und-rettungsplan-erstellen|Flucht- und Rettungsplan] abgebildet sein – nicht nur baulich, sondern betriebsbezogen für den konkreten Arbeitsplatz.",
      "H2::Technische Hilfen und Zumutbarkeit",
      "Arbeitshilfen richten sich nach der Behinderung – Integrationsamt und Agentur für Arbeit können fördern. Die Zumutbarkeitsgrenze schließt unverhältnismäßige Kosten und Kollisionen mit Arbeitsschutzvorschriften nicht aus, setzt aber Grenzen. Trotzdem sollten Sie maximale Inklusion anstreben und Schwerbehindertenvertretung sowie betroffene Person früh einbeziehen.",
      "H2::Unterweisung und Notfall",
      "Die [Link: /wissen/blog/unterweisung-arbeitsschutz-fristen|Unterweisung] muss am konkreten Platz stattfinden – inklusive Alarm, Evakuierung und persönlichem Notfallplan. Abstimmen Sie das mit [Link: /wissen/blog/sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter|Schwerbehindertenvertretung] und [Link: /wissen/ratgeber/brandschutz-betrieb|Brandschutz]. Evakuierungshelfer, Warteplätze und Rollstuhl-Szenarien sollten in Übungen erprobt werden, nicht erst im Ernstfall.",
      "SGB IX verlangt angemessene Arbeitsplatzgestaltung für Menschen mit Behinderungen – technisch, organisatorisch und personell. Das gehört in die Gefährdungsbeurteilung und in die Abstimmung mit Schwerbehindertenvertretung und Integrationsfachdiensten.",
      "Barrierefreiheit, ergonomische Hilfen und angepasste Arbeitszeit sind keine „Sonderwünsche“, sondern Teil der Prävention – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|Teilhabe Überblick] und [Link: /wissen/ratgeber/gefaehrdungsbeurteilung|GBU-Ratgeber].",
      "H2::Typische Mängel bei Begehungen",
      "In Begehungen fällt häufig auf, dass die GBU keinen Abschnitt Behinderung enthält, das Gebäude barrierefrei ist der Arbeitsplatz aber ohne Hilfsmittel, oder der Evakuierungsplan Rollstuhlfahrer nicht berücksichtigt. Maßnahmen aus der GBU fehlen oft in der Unterweisung. Health and Safety+ – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Reicht Barrierefreiheit nach BauO für den Arbeitsplatz?",
        answer:
          "Bauordnungsrechtliche Barrierefreiheit und § 164 SGB IX ergänzen sich – der Arbeitsplatz braucht betriebsspezifische Anpassung in der GBU, nicht nur normgerechtes Gebäude.",
      },
      {
        question: "Wer zahlt technische Hilfsmittel am Arbeitsplatz?",
        answer:
          "Oft Unterstützung durch Integrationsamt oder Agentur für Arbeit – der Arbeitgeber gestaltet den Platz. Details im Einzelfall klären, frühzeitig beantragen.",
      },
      {
        question: "Braucht jeder Betrieb einen GBU-Abschnitt Behinderung?",
        answer:
          "Sinnvoll in jedem Betrieb – § 164 verlangt behinderungsgerechte Gestaltung sobald schwerbehinderte Menschen beschäftigt werden oder Plätze dafür vorgesehen sind.",
      },
      {
        question: "Was gehört in den Notfall-Abschnitt?",
        answer:
          "Persönlicher Notfallplan, Evakuierungshelfer, sichere Warteplätze, Abstimmung mit Fluchtwegplan und Brandschutzordnung – vorher in Übungen erproben.",
      },
    ],
  },
  // SGB IX-Spoke: Schwerbehindertenvertretung & Inklusionsbeauftragter
  {
    slug: "sgb-ix-schwerbehindertenvertretung-inklusionsbeauftragter",
    title: "SGB IX: Schwerbehindertenvertretung & Inklusionsbeauftragter – Pflichten für Arbeitgeber",
    excerpt:
      "SBV ab fünf schwerbehinderten Beschäftigten, Wahl und Aufgaben, Inklusionsbeauftragter, Abgrenzung Betriebsrat – für Arbeitgeber in Köln und NRW.",
    date: "2026-04-28",
    dateModified: "2026-05-26",
    content: [
      "Teilhabe braucht Stimme im Betrieb. In Köln und NRW gelten die Regeln des SGB IX Teil 3: Ab fünf nicht nur vorübergehend beschäftigten schwerbehinderten Menschen wählt der Betrieb eine Schwerbehindertenvertretung (SBV). Der Arbeitgeber bestellt einen Inklusionsbeauftragten – nach Möglichkeit selbst schwerbehindert.",
      "H2::Wann muss eine SBV gewählt werden?",
      "Nach § 177 SGB IX gilt Folgendes. Mindestens fünf schwerbehinderte Beschäftigte, die nicht nur vorübergehend im Betrieb sind. Kleine Standorte können mit räumlich nahen Betrieben zusammengelegt werden – Entscheidung im Benehmen mit dem Integrationsamt. Wahlberechtigt sind schwerbehinderte Beschäftigte; Wählbarkeit nach Betriebszugehörigkeit und Alter im Gesetz geregelt.",
      "H2::Aufgaben der Schwerbehindertenvertretung (§ 178)",
      "Eingliederung fördern, Interessen vertreten, beratend zur Seite stehen. Konkret: darauf achten, dass Pflichten aus §§ 154, 164 bis 167 erfüllt werden; Beschwerden aufnehmen; bei Stellenbesetzung und Bewerbungen schwerbehinderter Menschen informiert und angehört werden. Ab vielen schwerbehinderten Beschäftigten können Stufenvertretungen nach § 180 hinzugezogen werden.",
      "H2::Inklusionsbeauftragter (§ 181)",
      "Der Arbeitgeber bestellt einen Inklusionsbeauftragten, der ihn in Angelegenheiten schwerbehinderter Menschen verantwortlich vertritt. Er achtet auf die Erfüllung der Pflichten – Quote, Arbeitsplatzgestaltung, Zusammenarbeit mit Agentur für Arbeit. Mehrere Beauftragte sind möglich, wenn der Betrieb es braucht.",
      "H2::Abgrenzung: SBV, Betriebsrat, SiFa, Fachkraft für Arbeitssicherheit",
      "SBV vertritt schwerbehinderte Menschen nach SGB IX – nicht den gesamten Betrieb wie der Betriebsrat. SiFa und [Link: /wissen/blog/bestellung-fachkraft-arbeitssicherheit|Fachkraft für Arbeitssicherheit] beraten zu Arbeitsschutz und GBU – SBV wirkt bei Arbeitsplatzanpassung und Beschäftigung mit. § 182 verlangt enges Zusammenwirken aller Gremien.",
      "H2::Arbeitsschutz, ASA und Brandschutz",
      "Themen gehören in Begehungen, [Link: /wissen/blog/akteure-arbeitsschutz|Arbeitsschutzausschuss] und [Link: /wissen/blog/sifa-jahresbericht-was-gehoert-rein|SiFa-Jahresbericht]: Quote, Arbeitsplatzanpassung, Evakuierungsübungen mit Betroffenen. SBV in Personal-Notfallpläne einbinden – [Link: /wissen/ratgeber/brandschutz-betrieb|Evakuierung mobilitätseingeschränkter Personen].",
      "H2::Zusatzrechte und Checkliste",
      "Zusatzurlaub fünf Tage (§ 208), Kündigungsschutz (§ 168 ff.), Nachteilsausgleich (§ 209) – HR-Schwerpunkte; Arbeitsschutz denkt Arbeitszeit und Belastung mit. Checkliste: SBV gewählt, ob Inklusionsbeauftragter bestellt, ob SBV bei Bewerbungen informiert, ob Evakuierung mit SBV abgestimmt, ob Health and Safety+ – [Link: /wissen/blog/teilhabe-sgb-ix-einfach-erklaert|SGB IX-Hub], [Link: /kontakt|Kontakt].",
    ],
    faq: [
      {
        question: "Ersetzt die SBV den Betriebsrat?",
        answer:
          "Nein – sie vertritt schwerbehinderte Menschen in SGB-IX-Fragen. Betriebsrat und SBV arbeiten zusammen; Zuständigkeiten bleiben getrennt.",
      },
      {
        question: "Muss jeder Betrieb einen Inklusionsbeauftragten haben?",
        answer:
          "Nach § 181 bestellt der Arbeitgeber einen Inklusionsbeauftragten im Schwerbehindertenrecht – Ausgestaltung betriebsnah, Pflichterfüllung dokumentieren.",
      },
      {
        question: "Ab wann SBV wählen?",
        answer:
          "Sobald mindestens fünf schwerbehinderte Menschen nicht nur vorübergehend beschäftigt sind – Wahl nach den Vorschriften des Gesetzes und der Wahlordnung.",
      },
      {
        question: "Wer zahlt Freistellung für SBV-Tätigkeit?",
        answer:
          "Der Arbeitgeber stellt die für die SBV-Arbeit erforderliche Zeit frei – ohne Minderung des Arbeitsentgelts der Vertrauensperson.",
      },
      {
        question: "Inklusionsbeauftragter vs. SBV – wer macht was?",
        answer:
          "Inklusionsbeauftragter vertritt den Arbeitgeber und achtet auf Pflichterfüllung. SBV vertritt die Interessen schwerbehinderter Beschäftigter und wirkt bei Beschäftigung und Arbeitsplatz mit.",
      },
    ],
  }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
