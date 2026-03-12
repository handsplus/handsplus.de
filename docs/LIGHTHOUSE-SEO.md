# Lighthouse & SEO-Check

## Lighthouse lokal ausführen

1. **Dev-Server starten** (in einem Terminal):
   ```bash
   npm run dev
   ```

2. **Lighthouse ausführen** (in einem zweiten Terminal, sobald die Seite unter http://localhost:3000 lädt):
   ```bash
   npm run lighthouse
   ```

3. **Report öffnen**: Die Datei `lighthouse-report.html` im Projektroot im Browser öffnen.

Alternativ in Chrome: DevTools (F12) → Tab **Lighthouse** → Kategorien wählen (Performance, Accessibility, Best Practices, SEO) → **Analyze page load**.

## Umgesetzte SEO- & Metadaten-Maßnahmen

- **Alle Seiten**: Canonical-URL, Open Graph (title, description, url), Twitter Cards, optionale Keywords
- **Startseite & Layout**: `metadataBase`, Viewport, Theme-Color, Organisation-JSON-LD
- **Blog-Beiträge**: Artikel-JSON-LD, OG type „article“, `publishedTime`
- **Sitemap**: `/sitemap.xml` mit allen statischen Seiten und Blog-URLs
- **robots.txt**: Verweis auf Sitemap, Allow /
- **Barrierefreiheit**: Skip-Link, `main` mit `id="main-content"`, ARIA, Fokus-Stile

## Optional: OG-Bild für Social Sharing

Für ein eigenes Vorschaubild (z. B. 1200×630 px) in Social-Media-Links:

1. Bild als `public/og-default.png` ablegen (1200×630 px).
2. Im Root-Layout unter `metadata.openGraph.images` die URL `${BASE_URL}/og-default.png` eintragen (oder in `lib/metadata.ts` wieder eine optionale `imagePath`-Unterstützung ergänzen).
