var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.sort((a, b) => a - b);
const sum = input.reduce((acc, cur) => {
  return Number(acc) + Number(cur);
}, 0);
console.log(sum / input.length);
console.log(Number(input[parseInt(input.length / 2)]));