import { copyPrepareFolders, getDirectories } from "./utils/getDirectories.js";
import { buildTheme } from "./utils/webExt.js";
import { makeDirectory } from "./utils/prepareFolder.js";
import { PREPARE_FOLDER, SRC_FOLDED } from "./utils/constants.js";

makeDirectory();

const srcDirectories = await getDirectories(`./${SRC_FOLDED}`);
srcDirectories.map(copyPrepareFolders);

const prepareDirectories = await getDirectories(`./${PREPARE_FOLDER}`);
prepareDirectories.map((dir) => buildTheme(`./${PREPARE_FOLDER}/${dir}`));
