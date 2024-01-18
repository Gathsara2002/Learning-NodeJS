import { log } from "node:console";
import { createServer } from "node:http";

createServer((req, res) => {
    res.write('hi');
    res.end();
}).listen(4000, () => log("server running"));
