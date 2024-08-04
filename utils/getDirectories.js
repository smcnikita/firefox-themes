import fs from "fs";
import path from "path";
import { URL } from "url";
import { copyFile } from "node:fs";
import { PREPARE_FOLDER, MANIFEST_FILENAME, SRC_FOLDED } from "./constants.js";

export function getDirectories(srcPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(srcPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const directories = files
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => dirent.name);
        resolve(directories);
      }
    });
  });
}

export function copyPrepareFolders(folderName) {
  const __dirname = new URL("../", import.meta.url).pathname;
  const prepareFolder = path.join(__dirname, PREPARE_FOLDER, folderName);

  fs.mkdirSync(prepareFolder);

  const basePathToManifestFile = path.join(
    __dirname,
    SRC_FOLDED,
    folderName,
    MANIFEST_FILENAME
  );
  const preparePathToManifestFile = path.join(prepareFolder, MANIFEST_FILENAME);

  copyFile(basePathToManifestFile, preparePathToManifestFile, () => {});
}
