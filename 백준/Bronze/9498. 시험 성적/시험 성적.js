var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let score = parseInt(input[0])
function solution(score) {
  if (score >= 90 && score <= 100) {
    return console.log('A')
  } else if (score < 90 && score >= 80) {
    return console.log('B')
  } else if (score < 80 && score >= 70) {
    return console.log('C')
  } else if (score < 70 && score >= 60) {
    return console.log('D')
  } else {
    return console.log('F')
  }
}

solution(score)