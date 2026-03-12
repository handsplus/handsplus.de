# Verlässlichkeit der Website – „Leere Seite“ verhindern

Damit die Seite **niemals** wieder „leer“ oder „alles gelöscht“ wirkt, gelten folgende Regeln und Abläufe.

**→ Gesamtschutz von Design & Inhalt (Git, Backup, Regeln):** siehe **`docs/PROJEKT-SCHUETZEN.md`**.

---

## 1. Regeln im Code (für alle Änderungen)

- **Layout:** In `app/layout.tsx` haben `body` und `main` immer zusätzlich zu Tailwind ein **inline `style`** (Hintergrund, Textfarbe, min-height). **Nicht entfernen.**
- **Wichtige Seiten:** Auf Seiten mit Hauptinhalt (z. B. Leistungen, Start) haben Überschriften, Fließtext und Karten **kritische Inline-Styles** als Fallback. **Nicht entfernen.**
- **Neue Seiten:** Wenn du neue Seiten mit sichtbarem Hauptinhalt anlegst, für zentralen Inhalt **Fallback-`style`** ergänzen (Farbe, Abstände), damit bei fehlendem CSS trotzdem etwas lesbar ist.

---

## 2. Wenn die Seite wieder „leer“ aussieht – Checkliste

1. **Cache löschen und Dev-Server neu starten**
   - Alle Fenster mit „H&S+ Dev-Server“ / „next-server“ schließen.
   - Im Projektordner ausführen:
     ```bash
     npm run dev:clean
     ```
     (startet den Server nach Löschen von `.next` neu)
   - Oder manuell: Ordner `.next` im Projektroot löschen, dann `npm run dev`.

2. **Browser: Hard Refresh**
   - Seite mit **Strg+Shift+R** (oder Strg+F5) neu laden, damit kein altes CSS/JS aus dem Cache kommt.

3. **Richtige URL**
   - Prüfen, ob du den Port aus dem Terminal nutzt (z. B. `http://localhost:3000` oder `3001`, `3002`, …).

4. **Build prüfen**
   - Im Projektordner: `npm run build`. Wenn der Build fehlschlägt, Fehlermeldung beheben und danach wieder `npm run dev` / `npm run dev:clean`.

---

## 3. Cursor-Regel im Projekt

Unter `.cursor/rules/website-reliability.mdc` liegt eine Regel für Cursor: Kritische Layout- und Seiteninhalte sollen Inline-Fallbacks behalten. Diese Regel **nicht löschen** und bei Refactorings beachten.

---

## 4. Kurz: So vermeidest du das Problem

- Inline-Fallbacks in Layout und wichtigen Seiten **nicht entfernen**.
- Nach größeren Änderungen oder merkwürdigem Verhalten: **`npm run dev:clean`** und **Hard Refresh** im Browser.
- Bei Problemen zuerst **Cache (.next) löschen** und Dev-Server neu starten.
