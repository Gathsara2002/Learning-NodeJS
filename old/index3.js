import { log } from "node:console";
import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { postDatahtml, getDataHtml } from "./user-data-handle.js";
import { copyFile, rm, existsSync, mkdir } from "node:fs";

createServer((req, res) => {
  if (req.method === "POST") {
    const userData = new IncomingForm();
    userData.parse(req, (err, fields, files) => {
      if (err) {
        log(err);
        res.end(postDatahtml("error"));
      } else {
        log("user data fields", fields);
        log("user data files", files.userfiles[0].originalFilename);

        const fileSrcPath = files.userfiles[0].filepath;
        const fileDestPath = `upload/${files.userfiles[0].originalFilename}`;

        //check folder exists or not
        if (existsSync("upload")) {
          //if folder exists copy file to upload dir
          copyFile(fileSrcPath, fileDestPath, (err) => log("hiii", err));

          //remove file from temp
          rm(fileSrcPath, (err) => {
            if (err) {
              log(err);
            } else {
              log("file deleted");
            }
          });
        } else {
          //if folder is not exists create  file
          mkdir("upload", (err) => {
            if (err) {
              log("can not make folder");
            } else {
              copyFile(fileSrcPath, fileDestPath, (err) => log("hi", err));
              rm(fileSrcPath, (err) => {
                if (err) {
                  log(err);
                } else {
                  log("file deleted");
                }
              });
            }
          });
        }

        res.end(postDatahtml("ok"));
      }
    });
  } else if (req.method === "GET") {
    res.end(getDataHtml);
  }
}).listen(4000, () => log("server running"));
