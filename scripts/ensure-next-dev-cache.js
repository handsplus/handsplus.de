/**

 * Vor `next dev`: Cache leeren wenn nötig (Windows: voller Reset wegen OneDrive/readlink).

 */

const fs = require("fs");

const path = require("path");

const { distDirAbs } = require("./next-dist-dir");



const nextDir = distDirAbs();

const marker = path.join(nextDir, ".from-production");



function clearNext(reason) {

  try {

    if (!fs.existsSync(nextDir)) return;

    fs.rmSync(nextDir, { recursive: true, force: true });

    console.log("[predev] Next-Cache geleert (" + reason + ").");

  } catch (e) {

    console.warn("[predev] Next-Cache konnte nicht geleert werden:", e.message);

  }

}



if (process.platform === "win32") {

  clearNext("Windows / OneDrive: frischer Dev-Cache");

  console.log(

    "[predev] Tipp: Projekt nicht unter OneDrive entwickeln – siehe docs/ONEDRIVE-ENTWICKLUNG.md"

  );

} else if (fs.existsSync(marker)) {

  clearNext("Wechsel von next build → next dev");

}

