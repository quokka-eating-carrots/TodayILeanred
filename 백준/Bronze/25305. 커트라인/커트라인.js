var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const info = input[0].split(" ");
const scores = input[1].split(" ");
scores.sort((a, b) => b - a);
console.log(scores[info[1] - 1]);