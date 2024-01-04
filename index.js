const os = require("os");
const path = require("path");

console.log(os.platform()); //win32
console.log(os.version()); //Windows 10 Home Single Language

console.log(__dirname); //E:\RAD\Learning-NodeJS\Node-tuto
console.log(__filename); //E:\RAD\Learning-NodeJS\Node-tuto\index.js

console.log(path.basename(__filename)); //index.js
console.log(path.extname(__filename)); //.js
