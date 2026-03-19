/**
 * Nach `next build`: Marker in `.next`, damit `predev` weiß, dass ein Wechsel zu `next dev`
 * den Cache komplett leeren muss (sonst EINVAL/readlink-Fehler unter Windows + OneDrive).
 */
const fs = require("fs");
const path = require("path");
const { distDirAbs } = require("./next-dist-dir");

const dir = distDirAbs();
try {
  if (!fs.existsSync(dir)) return;
  fs.writeFileSync(path.join(dir, ".from-production"), "1", "utf8");
} catch (e) {
  console.warn("[mark-next-production]", e.message);
}
