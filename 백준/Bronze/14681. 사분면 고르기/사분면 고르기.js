var fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let a = parseInt(input[0])
let b = parseInt(input[1])
function solution(a, b) {
  if (a > 0 && b > 0) return console.log(1)
  if (a < 0 && b > 0) return console.log(2)
  if (a < 0 && b < 0) return console.log(3)
  if (a > 0 && b < 0) return console.log(4)
}

solution(a, b)