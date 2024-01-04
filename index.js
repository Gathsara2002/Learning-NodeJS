//const os = require("os");
//const path = require("path");

import os from "os";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { readFile } from "node:fs";
import { error } from "console";

// console.log(os.platform()); //win32
// console.log(os.version()); //Windows 10 Home Single Language

// console.log(__dirname); //E:\RAD\Learning-NodeJS\Node-tuto
// console.log(__filename); //E:\RAD\Learning-NodeJS\Node-tuto\index.js

// console.log(path.basename(__filename)); //index.js
// console.log(path.extname(__filename)); //.js
// console.log(path.parse(__filename));

// {
//     root: 'E:\\',
//     dir: 'E:\\RAD\\Learning-NodeJS\\Node-tuto',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
//   }

readFile(path.join(__dirname, "myName.txt"), "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  }

  console.log(data);
  console.log(data.toString());
});
