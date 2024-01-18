import { log } from "node:console";
import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { postDatahtml,getDataHtml } from "./user-data-handle.js";

createServer((req, res) => {
  if (req.method === "POST") {
    const userData = new IncomingForm();
    userData.parse(req, (err, fields, files) => {
      if (err) {
        res.end(postDatahtml(res.statusCode));
      }else{
        log("user data fields", fields);
        log("user data files", files.userfiles[0].originalFilename);
      }
    });
  } else if (req.method === "GET") {
    res.end(getDataHtml);
  }
}).listen(4000, () => log("server running"));
