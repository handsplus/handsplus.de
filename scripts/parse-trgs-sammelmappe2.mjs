import fs from "fs";

const p =
  "c:/Users/akork/OneDrive/H&S+/4. Gesetze-Vorschriften/09_TRGS_Alle/Sammelmappe1.pdf.html";
const h = fs.readFileSync(p, "utf8");

// Official BAuA titles (geltend, Stand Web fetch März 2026)
const OFFICIAL = {
  200: "Einstufung und Kennzeichnung (alt, aufgehoben → TRGS 201)",
  201: "Einstufung und Kennzeichnung bei Tätigkeiten mit Gefahrstoffen",
  220: "Nationale Aspekte beim Erstellen von Sicherheitsdatenblättern",
  400: "Gefährdungsbeurteilung für Tätigkeiten mit Gefahrstoffen",
  401: "Gefährdung durch Hautkontakt – Ermittlung, Beurteilung, Maßnahmen",
  402: "Inhalative Exposition – Ermitteln und Beurteilen",
  406: "Sensibilisierende Stoffe für Atemwege (TRBA/TRGS 406)",
  407: "Tätigkeiten mit Gasen – Gefährdungsbeurteilung",
  410: "Expositionsverzeichnis (CMR Kategorien 1A/1B)",
  420: "Verfahrens- und stoffspezifische Kriterien (VSK) inhalativ",
  460: "Vorgehensweise zur Ermittlung des Standes der Technik",
  500: "Schutzmaßnahmen",
  505: "Blei",
  509: "Lagern in ortsfesten Behältern, Füll-/Entleerstellen",
  510: "Lagerung in ortsbeweglichen Behältern",
  511: "Ammoniumnitrat",
  512: "Begasungen",
  513: "Sterilisatoren (Ethylenoxid, Formaldehyd)",
  517: "Potenziell asbesthaltige mineralische Rohstoffe",
  519: "Asbest: Abbruch, Sanierung, Instandhaltung",
  520: "Sammelstellen/Zwischenlager für Kleinmengen gefährlicher Abfälle",
  524: "Tätigkeiten in kontaminierten Bereichen",
  525: "Gefahrstoffe in medizinischer Versorgung",
  526: "Laboratorien",
  528: "Schweißtechnische Arbeiten",
  529: "Herstellung von Biogas",
  540: "Biozid-Produkte – Grundanforderungen",
  551: "Teer und Pyrolyseprodukte",
  552: "Krebserzeugende N-Nitrosamine",
  553: "Holzstaub",
  554: "Abgase von Dieselmotoren",
  555: "Betriebsanweisung und Information der Beschäftigten",
  558: "Hochtemperaturwolle",
  559: "Quarzhaltiger Staub",
  560: "Luftrückführung bei CMR-Stäuben",
  561: "Krebserzeugende Metalle und Verbindungen",
  600: "Substitution",
  710: "Biomonitoring (aufgehoben 2012 – nur historisch)",
  720: "Explosionsfähige Gemische – Allgemeines",
  721: "Explosionsfähige Gemische – Beurteilung",
  722: "Explosionsfähige Gemische – Vermeidung/Einschränkung",
  723: "Explosionsfähige Gemische – Vermeidung der Entzündung",
  724: "Explosionsfähige Gemische – Konstruktiver Explosionsschutz",
  725: "Explosionsfähige Gemische – MSR-Einrichtungen",
  726: "(nicht in BAuA-Liste geltend – prüfen)",
  727: "Vermeidung von Zündgefahren durch elektrostatische Aufladungen",
  745: "Ortsbewegliche Druckgasbehälter (TRBS 3145)",
  746: "Ortsfeste Druckanlagen für Gase (TRBS 3146)",
  751: "Tankstellen/Gasfüllanlagen (TRBS 3151)",
  800: "Brandschutzmaßnahmen",
  900: "Arbeitsplatzgrenzwerte",
  903: "Biologische Grenzwerte (BGW)",
  905: "Verzeichnis CMR-Stoffe",
  906: "Verzeichnis krebserzeugender Tätigkeiten/Verfahren",
  907: "Verzeichnis sensibilisierender Stoffe/Tätigkeiten",
  910: "Risikobezogenes Maßnahmenkonzept (CMR)",
};

// Detect full texts: "TRGS XXX" as h1/table title + "Zielstellung" or "1 Zielstellung" within 15k chars
const fullTexts = [];
for (const num of Object.keys(OFFICIAL)) {
  const patterns = [
    `TRGS ${num}</p>`,
    `TRGS ${num} `,
    `>TRGS ${num}<`,
  ];
  let bestIdx = -1;
  for (const pat of patterns) {
    const idx = h.indexOf(pat);
    if (idx >= 0 && (bestIdx < 0 || idx < bestIdx)) bestIdx = idx;
  }
  if (bestIdx < 0) continue;
  const chunk = h.slice(bestIdx, bestIdx + 20000);
  const hasZiel =
    chunk.includes("Zielstellung") ||
    chunk.includes("Ziel") ||
    chunk.includes("Anwendungsbereich");
  const hasInhalt = chunk.includes("Inhalt");
  const textLen = chunk.replace(/<[^>]+>/g, "").length;
  if (hasZiel && textLen > 3000) {
    fullTexts.push(num);
  }
}

const mentioned = new Set();
const re = /TRGS\s+(\d{3,4}[a-z]?)/gi;
let m;
while ((m = re.exec(h)) !== null) mentioned.add(m[1]);

const allOfficialNums = Object.keys(OFFICIAL);
const inSammel = allOfficialNums.filter((n) => mentioned.has(n));
const fullInSammel = allOfficialNums.filter((n) => fullTexts.includes(n));
const missingFull = inSammel.filter((n) => !fullTexts.includes(n));
const notInSammel = allOfficialNums.filter((n) => !mentioned.has(n));

console.log("SAMMELMAPPE ANALYSE");
console.log("Dateigröße MB:", (h.length / 1e6).toFixed(1));
console.log("TRGS-Nummern irgendwo erwähnt:", mentioned.size);
console.log("Aus Sammelmappe-Set (56 aus Scan):", [...mentioned].sort((a,b)=>+a-+b).join(", "));
console.log("\nVOLLSTÄNDIGE TEXTE (heuristisch):", fullInSammel.length);
console.log(fullInSammel.sort((a,b)=>+a-+b).join(", "));
console.log("\nERWÄHNT, aber kein Volldokument erkannt:", missingFull.sort((a,b)=>+a-+b).join(", ") || "(keine)");

// Check start of file - what is first TRGS
const firstTrgs = h.match(/TRGS\s+\d{3,4}/);
console.log("\nErstes TRGS im File:", firstTrgs?.[0]);
const startChunk = h.slice(0, 5000).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
console.log("File-Anfang:", startChunk.slice(0, 400));
