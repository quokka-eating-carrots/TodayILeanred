var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
input = input.replace(/(c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=)/g, "Z");
console.log(input.length);