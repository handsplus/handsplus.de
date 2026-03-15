# H&S+ – Neue Webseite (Next.js)

Next.js-Webseite basierend auf Struktur und Inhalten von handsplus.de.  
Keine Bilder/Platzhalter – Logo und weitere Assets können später ergänzt werden.

## Starten

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Build für Produktion

```bash
npm run build
npm start
```

## Struktur

- **Startseite:** Hero, Qualifikationen, Leistungen, „Alles aus einer Hand“, Testimonial, CTA
- **Leistungen:** Übersicht aller Leistungsbereiche
- **Fachseiten:** Arbeitsschutz, Brandschutz, SiGeKo, Elektrosicherheit, Schulungen, Managementsysteme
- **Kontakt:** Formular (Versand noch anbindbar) + Telefon, E-Mail, WhatsApp

## Logo einbinden

Logo-Datei z.B. in `public/logo.svg` oder `public/logo.png` ablegen.  
Im Header (`components/Header.tsx`) den Text „H&S+“ durch eine Bild-Komponente ersetzen:

```tsx
import Image from "next/image";
// …
<Image src="/logo.svg" alt="Health and Safety Plus" width={120} height={40} />
```

## Sichtbarkeit & Auffindbarkeit (SEO)

- **Metadata:** Jede Seite hat eigenen Title, Description, Keywords, Canonical-URL, Open Graph und Twitter Cards.
- **Strukturierte Daten (JSON-LD):** Organization und WebSite auf der Startseite, FAQPage auf der FAQ-Seite.
- **Sitemap:** ` /sitemap.xml` listet alle Seiten und Blog-Beiträge; ` /robots.txt` verweist darauf.
- **PWA-Manifest:** ` /manifest.json` für bessere Auffindbarkeit auf Mobilgeräten.
- **404-Seite:** Eigenes „Seite nicht gefunden“ mit Links zur Startseite und zum Kontakt.
- **Interne Verlinkung:** Footer verlinkt alle wichtigen Seiten und Leistungen für bessere Crawlbarkeit.

Für Produktion `NEXT_PUBLIC_SITE_URL` auf die echte Domain setzen (z. B. `https://www.handsplus.de`).

## Schutz vor Löschung und Datenverlust

Diese Webseite soll vor versehentlicher Löschung, kaputten Änderungen und Datenverlust geschützt werden.

### Was bereits schützt

- **Git + GitHub:** Jeder Stand ist versioniert. Nach jedem sinnvollen Änderungsstand: `git add …`, `git commit -m "…"`, `git push origin main`. So ist der Code bei GitHub gesichert.
- **Vercel:** Alte Deployments bleiben in der Vercel-Historie. Bei Problemen kann ein älteres Deployment wieder aktiviert werden.
- **Tags:** Wichtige Stände werden als Git-Tag gespeichert (z. B. `v1.0`). Bei Totalausfall: `git checkout <Tag-Name>` oder auf GitHub den Tag als Basis für einen neuen Branch nutzen.

### Empfohlene Regeln (GitHub)

1. **Branch Protection für `main`:**
   - GitHub → Repository → Settings → Branches → Add rule für `main`.
   - „Require a pull request before merging“ optional.
   - **Wichtig:** „Do not allow force pushes“ aktivieren (verhindert Überschreiben/Löschen der History).
   - „Do not allow deletions“ für den Branch aktivieren, falls angeboten.

2. **Nicht:** Kein `git push --force` auf `main`, keine Löschung des `main`-Branchs, keine Umstellung ohne Backup.

### Wiederherstellung

- **Letzter guter Stand:** In GitHub unter „Commits“ den gewünschten Commit öffnen und z. B. „Revert“ nutzen oder einen neuen Branch davon erstellen.
- **Mit Tag:** `git checkout tags/v1.0` (lokal), dann ggf. neuen Branch erstellen und pushen; auf Vercel diesen Branch deployen oder nach Merge nach `main` wieder live gehen.

## Technik

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Schrift: DM Sans (Google Fonts)
