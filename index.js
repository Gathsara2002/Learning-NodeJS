import { log } from "node:console";
import { createServer } from "node:http";
import { pageSelect } from "./pageSelect.js";

createServer((req, res) => {
  pageSelect(req.url, res);
  res.end();
}).listen(4000, () => log("server running"));
