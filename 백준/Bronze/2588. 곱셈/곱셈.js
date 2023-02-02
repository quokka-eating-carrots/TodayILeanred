var fs = require("fs");
var input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "test.txt")
  .toString()
  .trim()
  .split("\n");
var a = parseInt(input[0]);
var b1 = parseInt(input[1][2]);
var b2 = parseInt(input[1][1]);
var b3 = parseInt(input[1][0]);
var answer = a * b1 + parseInt(a * b2 + "0") + parseInt(a * b3 + "00");
console.log(a * b1);
console.log(a * b2);
console.log(a * b3);
console.log(answer);