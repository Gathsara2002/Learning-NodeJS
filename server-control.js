import { log } from "node:console";

export const server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, "Content-Type:text/html");
    res.end('<h1>Hello</h1>');
  }
};
