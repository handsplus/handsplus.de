#!/usr/bin/env bash
# Branch Protection für main setzen (kein Force-Push, kein Löschen).
# Voraussetzung: GitHub CLI installiert und eingeloggt (gh auth login).

set -e
OWNER="handsplus"
REPO="handsplus.de"
BRANCH="main"

if ! command -v gh &> /dev/null; then
  echo "GitHub CLI (gh) ist nicht installiert. Bitte Option B in .github/BRANCH-PROTECTION.md nutzen."
  exit 1
fi

# Branch-Protection als JSON setzen (kein Force-Push, kein Löschen)
echo '{"required_status_checks":null,"enforce_admins":false,"required_pull_request_reviews":null,"restrictions":null,"allow_force_pushes":false,"allow_deletions":false}' \
  | gh api "repos/${OWNER}/${REPO}/branches/${BRANCH}/protection" -X PUT --input -

echo "Branch protection für '${BRANCH}' aktiviert (kein Force-Push, kein Löschen)."
