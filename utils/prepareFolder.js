import fs from "fs";
import path from "path";
import { URL } from "url";
import { PREPARE_FOLDER } from "./constants.js";

export function makeDirectory() {
  const __dirname = new URL("../", import.meta.url).pathname;
  const prepareFolderPath = path.join(__dirname, PREPARE_FOLDER);
  fs.mkdirSync(prepareFolderPath);
}
