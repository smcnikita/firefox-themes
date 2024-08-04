import { copyPrepareFolders, getDirectories } from "./utils/getDirectories.js";
import { buildTheme } from "./utils/webExt.js";
import { makeDirectory } from "./utils/prepareFolder.js";
import { PREPARE_FOLDER, SRC_FOLDED } from "./utils/constants.js";

makeDirectory();

const directoriesFromSrcFolder = getDirectories(`./${SRC_FOLDED}`);

directoriesFromSrcFolder
  .then((directories) => {
    directories.forEach((dir) => copyPrepareFolders(dir));

    const directoriesFromPrepareFolder = getDirectories(`./${PREPARE_FOLDER}`);

    directoriesFromPrepareFolder.then((folders) =>
      folders.forEach((dir) => buildTheme(`./${PREPARE_FOLDER}/${dir}`))
    );
  })
  .catch((err) => {
    console.error("Error:", err);
  });
