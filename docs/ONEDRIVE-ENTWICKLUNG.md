# Next.js unter OneDrive – warum es „unperfekt“ wirkt

## Die ehrliche Ursache

**OneDrive synchronisiert den Ordner `.next`**, während Next.js dort **tausende kleine Dateien** schreibt und löscht. Dabei passiert typisch:

- fehlende Module (`682.js`, `… reading 'call'`)
- weiße Seite / Dev-Overlay
- `EINVAL` / `readlink`-Fehler

**Das ist kein Bug eurer Website**, sondern die Kombination **Cloud-Sync + Next-Dev-Cache**.

Ein Build-Cache **außerhalb** des Projektordners (z. B. nur Junction nach `AppData`) **funktioniert mit Next.js 14 nicht zuverlässig**, weil Node `require('next/…')` vom Speicherort der gebauten Dateien aus auflöst – dann fehlen Module.

## Was wirklich hilft (in dieser Reihenfolge)

### 1. Projekt lokal **ohne** OneDrive entwickeln (beste Lösung)

Repository z. B. nach **`C:\src\handsplus-website`** oder **`D:\dev\handsplus-website`** klonen/kopieren und dort nur **`npm install`** / **`npm run dev`** nutzen.  
Deployment (Git push, Vercel, …) bleibt unverändert.

### 2. OneDrive: Ordner **„Immer auf diesem Gerät behalten“** + `.next` möglichst nicht ständig syncen

In den OneDrive-Einstellungen **„Dateien bei Bedarf“** nutzen und den **gesamten Projektordner** oder zumindest arbeitsintensive Builds vermeiden.  
Einen Ordner `.next` zuverlässig von der Synchronisation auszuschließen, bietet OneDrive **nicht feingranular** wie z. B. Dropbox Ignore – deshalb ist **1.** meist einfacher.

### 3. Nach Problemen: Cache leeren

```bash
npm run clean
npm run dev
```

Chrome: für `localhost` **Websitedaten löschen** oder **Inkognito**.

## Online-Seite (Production)

`npm run build` und die **live** Website sind davon **unabhängig**, solange der Build auf einer **stabilen** Festplatte/CI läuft (z. B. GitHub Actions, Vercel).

---

**Kurz:** Unter OneDrive ist lokale Next-Entwicklung **fundamental anfällig**. **Einmal nach `C:\…` legen** = das ist die „perfekte“ technische Lösung.
