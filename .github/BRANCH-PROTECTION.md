# Branch Protection für `main` – Anleitung

Damit der Branch `main` nicht versehentlich überschrieben oder gelöscht werden kann.

## Option A: GitHub CLI (eine Befehlszeile)

Wenn [GitHub CLI (`gh`)](https://cli.github.com/) installiert und eingeloggt ist:

```bash
echo '{"required_status_checks":null,"enforce_admins":false,"required_pull_request_reviews":null,"restrictions":null,"allow_force_pushes":false,"allow_deletions":false}' | gh api repos/handsplus/handsplus.de/branches/main/protection -X PUT --input -
```

Oder das Script ausführen (im Projektordner):

```bash
./scripts/protect-main-branch.sh
```

## Option B: Im Browser (ca. 1 Minute)

1. Öffnen: **https://github.com/handsplus/handsplus.de/settings/branches**
2. Bei **Branch protection rules** auf **Add rule** (bzw. **Add branch protection rule**).
3. **Branch name pattern:** `main` eintragen.
4. Aktivieren:
   - **Do not allow force pushes**
   - **Do not allow deletions** (falls angeboten)
5. **Create** / **Save changes** klicken.

Danach kann niemand mehr per Force-Push die History zerstören oder den Branch löschen.
