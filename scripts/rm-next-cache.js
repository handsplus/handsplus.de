const fs = require("fs");

const { distDirAbs } = require("./next-dist-dir");



try {

  const dir = distDirAbs();

  if (fs.existsSync(dir)) {

    fs.rmSync(dir, { recursive: true, force: true });

    console.log("Next-Cache geloescht:", dir);

  } else {

    console.log("Kein Next-Cache vorhanden:", dir);

  }

} catch (e) {

  console.warn("rm-next-cache:", e.message);

  process.exitCode = 1;

}

