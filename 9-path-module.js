const { log } = require("console");
const path = require("path");

console.log(path.sep);

const filepath = path.join("/content/", "folder", "test.txt");

console.log(filepath);

const base = path.basename(filepath);
console, log(base);

const absolute = path.resolve(__dirname, "content", "folder", "test.txt");
console.log(absolute);
