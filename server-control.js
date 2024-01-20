import { log } from "node:console";
import { fileRead } from "./old/libs/read-file.js";
import { selectContentType } from "./old/libs/select-content-type.js";

export const server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fileRead("public/index.html", res, "text/html");
  } else if (req.method === "GET") {
    const extention = String(req.url).split(".");
    fileRead(
      `public${req.url}`,
      res,
      selectContentType(extention[extention.length - 1])
    );
  }
};
