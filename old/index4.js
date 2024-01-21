import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { log } from "node:console";
import { createServer } from "node:http";
import { server } from "./server-control.js";

const PORT = process.env.PORT || 4000;

createServer((req, res) => {
  server(req, res);
}).listen(PORT, () => log(`server running ${PORT}`));
