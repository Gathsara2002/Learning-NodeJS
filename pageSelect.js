import { log } from "node:console";
import About from "./page/about.js";
import Contact from "./page/contact.js";
import Home from "./page/home.js";
import NotFound from "./page/not-found.js";
import { URL } from "node:url";


export const pageSelect = (url, res) => {
  if (url === "/") {
    res.write(Home());
  } else if (url === "/about") {
    res.write(About());
  } else if (url === "/contact") {
    res.write(Contact());
  } else {
    res.write(NotFound());
  }
};
