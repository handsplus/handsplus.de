/**
 * Launcher für Next.js – umgeht Pfad-Probleme bei Ordnernamen mit "&" (z. B. H&S+).
 */
const path = require("path");
const projectRoot = path.resolve(__dirname, "..");
process.chdir(projectRoot);

const rest = process.argv.slice(2);

if (rest[0] === "dev") {
  require(path.join(__dirname, "ensure-next-dev-cache.js"));
  process.argv = [process.execPath, process.argv[1], ...rest];
}

require(path.join(projectRoot, "node_modules", "next", "dist", "bin", "next"));
