/**

 * Vor `npm run build` auf Windows: Build-Cache leeren.

 */

const fs = require("fs");

const { distDirAbs } = require("./next-dist-dir");



if (process.platform !== "win32") {

  process.exit(0);

}



try {

  const dir = distDirAbs();

  if (fs.existsSync(dir)) {

    fs.rmSync(dir, { recursive: true, force: true });

    console.log("[prebuild] Next-Cache geleert:", dir);

  }

} catch (e) {

  console.warn("[prebuild]", e.message);

}

