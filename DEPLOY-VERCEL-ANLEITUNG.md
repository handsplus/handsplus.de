# Deine Seite auf Vercel – nur 3 Schritte

Alles andere ist schon erledigt (Build läuft, Git-Commit ist da). Du musst nur noch Folgendes machen:

---

## Schritt 1: Neues Repository auf GitHub anlegen

1. Im Browser öffnen: **https://github.com/new**
2. Einloggen (oder Konto anlegen).
3. **Repository name:** z.B. `hsplus-website` (beliebiger Name).
4. **Public** auswählen.
5. **Nichts** ankreuzen bei „Add a README“, „Add .gitignore“, „Choose a license“ – alles leer lassen.
6. Auf **Create repository** klicken.
7. Auf der nächsten Seite siehst du eine URL, z.B. `https://github.com/DEINNAME/hsplus-website.git` – **diese URL kopieren** (für Schritt 2).

---

## Schritt 2: Projekt mit GitHub verbinden und hochladen

1. **Cursor** öffnen und unten das **Terminal** öffnen (Ansicht → Terminal oder `` Ctrl+` ``).
2. Diese zwei Zeilen nacheinander ausführen (in der zweiten Zeile `DEINE-GITHUB-URL` durch deine kopierte URL ersetzen):

```powershell
cd "C:\Users\akork\OneDrive\Desktop\Cursor\Neue Webseite"
git remote add origin DEINE-GITHUB-URL
git push -u origin main
```

Beispiel, wenn deine URL `https://github.com/akork/hsplus-website.git` ist:

```powershell
git remote add origin https://github.com/akork/hsplus-website.git
git push -u origin main
```

3. Wenn nach **Benutzername/Passwort** gefragt wird: Bei GitHub unter Einstellungen → Developer settings → Personal access tokens einen Token erstellen und als Passwort verwenden (oder sich per Browser anmelden, wenn Git das anbietet).

---

## Schritt 3: Bei Vercel deployen

1. Im Browser öffnen: **https://vercel.com**
2. Auf **Continue with GitHub** (oder Sign up with GitHub) klicken und GitHub-Zugriff erlauben.
3. Oben rechts: **Add New** → **Project**.
4. Dein Repository (z.B. `hsplus-website`) auswählen und auf **Import** klicken.
5. Alle Einstellungen so lassen (Framework: Next.js wird automatisch erkannt).
6. Auf **Deploy** klicken und warten (ca. 1–2 Minuten).
7. Fertig. Du bekommst eine Adresse wie `https://hsplus-website.vercel.app` – darauf klicken und die Seite ansehen.

---

## Kurzfassung

| Schritt | Wo | Was tun |
|--------|-----|--------|
| 1 | github.com/new | Leeres Repo erstellen, URL kopieren |
| 2 | Terminal in Cursor | `git remote add origin URL` und `git push -u origin main` |
| 3 | vercel.com | Mit GitHub anmelden → Add New → Project → Repo wählen → Deploy |

Wenn etwas nicht klappt, die Fehlermeldung aus dem Terminal oder vom Bildschirm hier reinkopieren – dann können wir gezielt weitergehen.
