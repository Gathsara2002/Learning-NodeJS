import { log } from "node:console";
import { read, readFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fileRead = (path) => {
  readFile(
    join(__dirname, path),
    { encoding: "utf-8" },
    (err, data) => {
      log(data);
      log(join(__dirname, '../read.txt'));
    }
  );
};

fileRead('../read.txt');

//   export default fileRead;
