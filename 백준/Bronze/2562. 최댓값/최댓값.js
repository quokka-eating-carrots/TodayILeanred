var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let max = Math.max(...input)
let index = input.findIndex(item => item == max)
console.log(max)
console.log(index + 1)