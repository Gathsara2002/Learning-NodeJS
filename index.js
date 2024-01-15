//const os = require("os");
//const path = require("path");

import os from "os";
import path, { join } from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { readFile } from "node:fs/promises";
import { error, log } from "console";
//import { appendFile, rename, rm, writeFile } from "fs";
import { appendFile, rename, rm, writeFile } from "node:fs/promises";

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

// -------------------Callback API------------------------------

// read file

// readFile(path.join(__dirname, "myName.txt"), "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(data);
//   console.log(data.toString());
// });

// write file

// writeFile(join(__dirname, "write.txt"), "Hello Nodejs 1", "utf-8", (err) => {
//   log(err);
// });

//append file

// appendFile(join(__dirname, "write.txt"), "Hello Nodejs append new line", "utf-8", (err) => {
//   log(err);
// });

// appendFile(
//   join(__dirname, "write.js"),
//   `
//   const a='Liviru';
//    console.log(a);

// `,
//   "utf-8",
//   (err) => {
//     log(err);
//   }
// );

//remove file

// rm(join(__dirname, "write.txt"), () => {
//   log("remove file");
// });

//rename file

// rename(join(__dirname, "write.js"), join(__dirname, "newFile.js"), () => {
//   log("rename file");
// });

// ---------------------------Promise API---------------------------------

//read file

// readFile(join(__dirname, "myName.txt"), {
//   encoding: "utf-8",
// })
//   .then((data) => log(data))
//   .catch((err) => log(err));

//write file

// const writeFun = async (data) => {
//   try {
//     await writeFile(join(__dirname, "write.js"), data, {
//       encoding: "utf-8",
//     });
//   } catch (error) {
//     log(error);
//   }
// };

// writeFun(`
// const a = 'gathsara';
// console.log(a)
// `);

//append file

// appendFile(
//   join(__dirname, "write.js"),
//   `
// const c = 'upul';
// console.log(e);
// `
// )
//   .then((res) => log(res))
//   .catch((err) => log(err));


//---------------------------Sync API------------------------------

// const data = readFileSync(join(__dirname, "myName"), {
//   encoding: "utf-8",
// });

// log(data);

// writeFileSync(
//   join(__dirname, "write.js"),
//   `
// const c = 'upul';
// `
// );

// appendFileSync(
//   join(__dirname, "write.js"),
//   `
// console.log(c)
// `
// );

