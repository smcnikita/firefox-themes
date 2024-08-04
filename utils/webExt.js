import webExt from "web-ext";
import path from "path";
import { ARTIFACTS_DIR_NAME } from "./constants.js";

export function buildTheme(sourceDir) {
  const FOLDER_PATH = path.resolve(sourceDir);
  const ARTIFACTS_DIR = path.resolve(ARTIFACTS_DIR_NAME);

  webExt.cmd.build(
    {
      sourceDir: FOLDER_PATH,
      artifactsDir: ARTIFACTS_DIR,
      overwriteDest: true,
    },
    {
      shouldExitProgram: false,
    }
  );
}
