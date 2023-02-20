var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const margin = c - b;
const count = Math.floor(a / margin) + 1;

console.log(margin <= 0 ? -1 : count);