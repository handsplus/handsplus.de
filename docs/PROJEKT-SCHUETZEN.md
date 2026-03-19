# Projekt schützen – Design, Inhalt, alles bewahren

Damit **keine Mühe verloren geht** (Design, Texte, Struktur, Inhalte), gelten diese Regeln und Abläufe.

---

## 1. Was alles dazugehört (nichts davon unnötig löschen)

- **`app/`** – Alle Seiten (Start, Leistungen, Arbeitsschutz, Brandschutz, SiGeKo, Schulungen, Elektrosicherheit, Managementsysteme, Über uns, Kontakt, Wissen, Blog, FAQ, Impressum) inkl. Layout und globalem CSS.
- **`components/`** – Header, Footer, ContactStrip, ContactForm, DesktopNav, MobileHeaderNav.
- **`content/`** – Blog-Texte (`blog.ts`), FAQ (`faq.ts`).
- **`lib/`** – Metadaten-Hilfe (`metadata.ts`).
- **`public/`** – Logo und statische Dateien.
- **`app/globals.css`** – Tailwind, Farben, Skip-Link, Focus-Styles.
- **Konfiguration** – `tailwind.config.js`, `postcss.config.js`, `next.config.js`, `tsconfig.json`, `package.json`.

All das ist Teil der geleisteten Arbeit. Nichts davon ohne klaren Grund entfernen oder leeren.

---

## 2. Versionierung (Git) – damit nichts „verschwindet“

Wenn noch kein Git genutzt wird:

1. Im Projektordner (`Neue Webseite`) öffnest du ein Terminal und führst aus:
   ```bash
   git init
   git add .
   git commit -m "Stand: komplette Website (Design, Inhalt, alle Seiten)"
   ```
2. **Regelmäßig committen** nach sinnvollen Änderungen:
   ```bash
   git add .
   git commit -m "Kurzbeschreibung der Änderung"
   ```
3. Optional: Repository bei GitHub/GitLab anlegen und `git remote add origin ...` + `git push` – dann hast du den Stand auch in der Cloud.

So kannst du bei Problemen auf frühere Versionen zurückgehen; nichts ist „einmal gelöscht = weg“.

---

## 3. Backup (zusätzlich zur Mühe absichern)

- **OneDrive:** Der Ordner liegt unter `OneDrive\Desktop\Cursor\Neue Webseite` – OneDrive sichert ihn mit (wenn Sync aktiv ist).
- **Zusätzlich:** In größeren Abständen den ganzen Ordner `Neue Webseite` z. B. nach einem anderen Laufwerk oder in ein ZIP kopieren. So ist auch bei Git-Problemen oder versehentlichem Löschen ein Stand vorhanden.

---

## 4. Regeln im Code (Cursor-Regel + Doku)

- Unter **`.cursor/rules/website-reliability.mdc`** steht für Cursor:
  - Design und Inhalt **nicht löschen**; nur ersetzen oder anpassen.
  - Kritische Bereiche (Layout, wichtige Seiten) **immer mit Inline-Style-Fallback** absichern, damit die Seite nie „leer“ wirkt.
- **Diese Regel und diese Doku nicht löschen** – sie schützen die gesamte Mühe (Design, Inhalt, Struktur).

Details zur „leeren Seite“ und zum schnellen Fix: **`docs/VERLAESSLICHKEIT.md`**.

---

## 5. Kurz-Checkliste

- [ ] Git im Projekt genutzt und regelmäßig committen.
- [ ] Backup (OneDrive + optional Kopie/ZIP) im Blick.
- [ ] Keine Löschung von Inhalt/Design ohne Ersatz.
- [ ] Inline-Fallbacks in Layout und wichtigen Seiten nicht entfernt.
- [ ] Bei Problemen: `npm run dev:clean` + Hard Refresh (Strg+Shift+R); bei „alles weg“: Git zurücksetzen oder Backup wiederherstellen.

### Weiße Seite auf `localhost:3000` (Windows / OneDrive)

Liegt oft **nicht** am Seiten-Code, sondern an **Next.js + `.next`-Cache** im OneDrive-Ordner: `readlink` → `EINVAL`, Dev-Server startet nicht oder liefert 500.

- **Normal starten:** `npm run dev` – vorher wird auf Windows automatisch `.next` geleert (`scripts/ensure-next-dev-cache.js`).
- **Manuell:** `npm run clean`, dann `npm run dev`.
- **Empfehlung:** Ordner `.next` in OneDrive **vom Sync ausschließen** oder Projekt außerhalb von OneDrive entwickeln.

### „Cannot read properties of undefined (reading 'call')“ (Webpack) im Browser

**Standard:** `npm run dev` nutzt **Webpack** mit vereinfachtem Chunk-Splitting (`next.config.js`) – stabiler mit OneDrive/Chrome. Optional schneller: `npm run dev:turbo`.

### Server: `Cannot find module './682.js'` (o. ä.)

Der **Next-Build-Ordner** (`.next` oder `NEXT_DIST_DIR`) ist **unvollständig** – typisch bei **OneDrive** (Dateien weg oder halb synchron). **Vorgehen:** Dev-Server stoppen, `npm run clean`, dann `npm run dev`. Auf Windows läuft vor **`npm run build`** automatisch ein Cache-Leeren (`prebuild`).

**Empfehlung:** Build-Cache **außerhalb von OneDrive** legen, z. B. im Projektordner eine Datei `.env.local` mit:

`NEXT_DIST_DIR=.next-cache`

(Ordner `.next-cache/` ist in `.gitignore`.) Oder einen Ordner **neben** dem Projekt: `NEXT_DIST_DIR=../handsplus-next-cache` – diesen Ordner von OneDrive **nicht** synchronisieren.

So bleibt alles erhalten: Design, Inhalt und die ganze Mühe.
