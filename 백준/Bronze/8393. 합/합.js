var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
const num = parseInt(input[0])
let sum = 0
for (let i = 1; i <= num; i += 1) {
  sum += i
}
console.log(sum)