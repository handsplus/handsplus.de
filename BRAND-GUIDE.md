## Brand Guide – H&S+ Health and Safety +

Dieser Leitfaden fasst das Corporate Design zusammen, damit zukünftige Änderungen konsistent bleiben.

---

### 1. Farben

- **Primärgrün (Logo / CTAs)**  
  - Hex: `#68BCA0`  
  - Tailwind: `primary-400` / `primary-500`  
  - Einsatz: CTA-Buttons, Icons, Hervorhebungen, Links im Footer.

- **Dunkelgrün (Flächen / Header / Footer)**  
  - Hex: `#1e4d44` (Header-Hintergrund), `#2d5a4e` (Tailwind `primary-900`)  
  - Einsatz: Hero-Hintergrund, Footer, starke Kontrastflächen.

- **Hintergrund & Text**  
  - Hell: `#f8fafc` (`bg-slate-50`) – Seitenhintergrund / Sektionen  
  - Weiß: `#ffffff` – Karten, Content-Flächen  
  - Text dunkel: `#0f172a` / `#1e293b` (`text-slate-900`, `text-slate-800`)

**Regel:**  
Maximal 2–3 Farben pro Bereich einsetzen (z.B. dunkelgrüne Fläche, weiße Karten, primäre Akzentfarbe).

---

### 2. Typografie

- **Grundschrift:**  
  - `font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;`  
  - Wird global in `globals.css` und `tailwind.config.js` gesetzt (`fontFamily.sans`).

- **Heading-Hierarchie (Tailwind-Utilities):**
  - `heading-1`: `text-3xl sm:text-4xl lg:text-5xl`, `font-bold`, `tracking-tight`, `text-primary-900`  
  - `heading-2`: `text-2xl sm:text-3xl`, `font-bold`, `tracking-tight`, `text-primary-900`  
  - `heading-3`: `text-xl sm:text-2xl`, `font-semibold`, `text-primary-900`

- **Fließtext:**
  - Basis: `text-slate-600`, `leading-relaxed`  
  - Größere Einleitungen: `text-lg text-slate-600`  

**Regel:**  
Pro Seite genau **eine** `h1`, danach nur `h2`/`h3`. Keine Sprünge (`h1` → `h3`) ohne `h2`.

---

### 3. Komponenten-Stil (Buttons, Links, Karten)

- **Primärer Button (z.B. „Kostenlose Erstberatung“):**
  - Klassen:  
    - `inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-800 text-white font-medium hover:bg-primary-900 transition-colors`
  - Verwendung: Haupt-CTA auf Startseite, Kontakt-Call-to-Action.

- **Sekundärer Button (Outline):**
  - Klassen:  
    - `inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/80 font-medium text-white hover:bg-white/10`
    - In hellen Bereichen: `border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-white`

- **Karten (z.B. Leistungen, Wissen-Kacheln):**
  - Basis:  
    - `border border-slate-200 rounded-xl p-6 bg-white hover:border-primary-200 hover:shadow-md transition-all`
  - Titel: `text-lg font-semibold text-slate-900`  
  - Text: `text-sm text-slate-600 leading-relaxed`

**Regel:**  
Immer diese Styles wiederverwenden, statt neue Varianten zu erfinden.

---

### 4. Layout & Abstände

- **Sektionen vertikal:**  
  - Utility-Klasse `section-padding` in `globals.css`:  
    - `py-16 sm:py-20 lg:py-24`
  - Für neue Bereiche nach Möglichkeit `className="section-padding"` verwenden.

- **Container-Breite:**  
  - `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8` (Standard)  
  - Für schmalere Layouts: `.container-narrow` (`max-w-4xl`).

**Regel:**  
Mindestens `1.5rem` (24px) Abstand zwischen Überschrift und Text; mindestens `2.5rem` zwischen Sektionen.

---

### 5. Logo-Nutzung

- **Datei:** `public/logo.svg` (Hauptlogo)  
- **Header-Einbindung:**  
  - `width={3049}`, `height={501}`, Anzeige über Tailwind: `className="h-9 w-auto min-h-9 sm:h-10"`
  - Abstand zwischen „Safety“ und „+“ im SVG ist bereits optimiert.

**Regel:**  
Immer die SVG-Datei verwenden (nicht mehrere leicht unterschiedliche Varianten). Skalierung nur über CSS-Höhe, nie durch Ändern der ViewBox.

---

### 6. Partner-Logos

- **Dateien:** im Ordner `public/partner-logos`  
  - `tuv-rheinland.png`, `uio.png`, `vds-source.png`, `dekra.svg`, `hochschule-rhein-waal.png`, `bew.png`
- **Komponente:** `PartnerLogosStrip`  
  - Ein einheitlicher Streifen mit festen Höhen (`h-12 sm:h-14 md:h-16`), Logos immer `object-contain`.

**Regel:**  
Neue Partner-Logos immer in ähnlicher Höhe/Proportion vorbereiten und in `PartnerLogosStrip` ergänzen – keine Inline-Styles pro Logo.

---

### 7. Tonalität der Texte

- Klar, sachlich, aber freundlich.  
- Fokus auf **Nutzen** für den Kunden (Rechtssicherheit, Entlastung, Praxisnähe).  
- Möglichst kurze Absätze, vor allem in Mobilansicht:
  - 2–4 Zeilen pro Absatz sind ideal.

**Regel:**  
Keine Fachbegriffe ohne kurze Erklärung, wenn sie für Laien unklar sein könnten (z.B. SiGeKo, DGUV Vorschrift 2).

---

### 8. Barrierefreiheit & Interaktion

- **Focus-Styles:**  
  - `a:focus-visible` / `button:focus-visible` nutzen `ring-primary-400` + `ring-offset-2`.
- **Skip-Link:**  
  - `.skip-link` in `globals.css` – bleibt so erhalten und auf neuen Layouts unverändert nutzbar.
- **Icons:**  
  - Wenn sie nur dekorativ sind: `aria-hidden` setzen.  
  - Wenn sie Bedeutung haben: `aria-label` oder sichtbaren Text hinzufügen.

**Regel:**  
Alle neuen Buttons und Links mit sinnvollen Texten / `aria-label`s versehen, insbesondere wenn sie nur ein Icon enthalten.

