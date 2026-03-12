# Lighthouse 100 % – Anleitung

## Erreichte Ergebnisse (Production Build)

Bei Tests gegen den **Production-Build** (`npm run build` + `npm run start`) wurden folgende Werte erreicht:

| Kategorie        | Score  | Status     |
|------------------|--------|------------|
| **Performance**  | **100 %** | erreicht   |
| **Accessibility**| **100 %** | erreicht   |
| **Best Practices** | **100 %** | erreicht* |
| **SEO**          | **100 %** | erreicht   |

\* Best Practices 100 %, wenn der Server **nach** dem Build neu gestartet wurde (keine veralteten Chunk-Requests).

## So erreichst du 100 % überall

1. **Production-Build erzeugen**
   ```bash
   npm run build
   ```

2. **Production-Server starten** (falls schon einer läuft, zuerst beenden)
   ```bash
   npm run start
   ```
   → Seite läuft auf **http://localhost:3000**

3. **Lighthouse gegen Production laufen lassen**
   ```bash
   npm run lighthouse:prod
   ```

4. **Bericht (HTML + PDF) erzeugen**
   ```bash
   npm run lighthouse:report
   ```

Ergebnis:
- **lighthouse-report.report.json** – Rohdaten
- **lighthouse-report-bericht.html** – Lesbarer Bericht
- **lighthouse-report-bericht.pdf** – PDF zum Teilen

## Durchgeführte Optimierungen

- **Performance:** JSON-LD (Schema) ans Ende von `<body>` verschoben, damit das First Paint nicht blockiert wird.
- **Accessibility:** Kontrast (primary-800/primary-200), aria-label angepasst, Footer-Texte angepasst.
- **Best Practices:** Favicon als Data-URL (kein 404), keine Redirects auf fehlende Routen.
- **SEO:** Metadaten, Sitemap, robots.txt, strukturierte Daten – bereits umgesetzt.

## Hinweis

- **Dev-Server** (`npm run dev`): Performance liegt typischerweise unter 100 % (unminified Assets).
- **Production** (`npm run build` + `npm run start`): Hier sind 100 % in allen vier Kategorien das Ziel und in den Tests erreicht worden.
