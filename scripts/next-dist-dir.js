/**
 * Next.js `distDir` (Standard `.next` im Projekt — unter Windows oft ein Junction nach AppData,
 * siehe ensure-win-next-junction.js).
 */
const fs = require("fs");
const path = require("path");

function loadNextDistDirFromEnvLocal() {
  if (process.env.NEXT_DIST_DIR) return;
  try {
    const envPath = path.join(__dirname, "..", ".env.local");
    if (!fs.existsSync(envPath)) return;
    const text = fs.readFileSync(envPath, "utf8");
    for (const line of text.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const m = trimmed.match(/^NEXT_DIST_DIR\s*=\s*(.+)$/);
      if (m) {
        let v = m[1].trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        process.env.NEXT_DIST_DIR = v;
        return;
      }
    }
  } catch (_) {
    /* ignore */
  }
}

loadNextDistDirFromEnvLocal();

const PROJECT_ROOT = path.join(__dirname, "..");

function distDirForConfig() {
  const raw = process.env.NEXT_DIST_DIR;
  if (raw && String(raw).trim()) {
    const v = String(raw).trim();
    if (path.isAbsolute(v)) return path.normalize(v);
    return v.replace(/^[/\\]+/, "");
  }
  return ".next";
}

function distDirAbs() {
  const d = distDirForConfig();
  return path.isAbsolute(d) ? d : path.resolve(PROJECT_ROOT, d);
}

const distDirRelative = distDirForConfig;

module.exports = { distDirForConfig, distDirAbs, distDirRelative };
