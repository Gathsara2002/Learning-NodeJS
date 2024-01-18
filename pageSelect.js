import { log } from "node:console";
import About from "./pages/about.js";
import Contact from "./pages/contact.js";
import Home from "./pages/home.js";
import NotFound from "./pages/not-found.js";
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
