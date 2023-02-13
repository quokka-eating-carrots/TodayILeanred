var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const nums = input[1].split(" ");
const max = Math.max(...nums);
const min = Math.min(...nums);
console.log(`${min} ${max}`);