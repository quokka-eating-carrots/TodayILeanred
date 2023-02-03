var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let year = parseInt(input[0])
function solution(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 400 === 0)) {
    return console.log(1)
  } else {
    return console.log(0)
  }
}

solution(year)