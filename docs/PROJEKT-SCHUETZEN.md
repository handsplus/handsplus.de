# Projekt schützen – Design, Inhalt, alles bewahren

Damit **keine Mühe verloren geht** (Design, Texte, Struktur, Inhalte), gelten diese Regeln und Abläufe.

---

## 1. Was alles dazugehört (nichts davon unnötig löschen)

- **`app/`** – Alle Seiten (Start, Leistungen, Arbeitsschutz, Brandschutz, SiGeKo, Schulungen, Elektrosicherheit, Managementsysteme, Über uns, Kontakt, Wissen, Blog, FAQ, Impressum) inkl. Layout und globalem CSS.
- **`components/`** – Header, Footer, ContactStrip, ContactForm, NavLinks.
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

So bleibt alles erhalten: Design, Inhalt und die ganze Mühe.
