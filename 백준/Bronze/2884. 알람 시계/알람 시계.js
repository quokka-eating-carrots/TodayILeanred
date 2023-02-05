var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
function solution(a, b) {
  let hour = a - 1;
  let min = b + 15;
  if (min >= 60) {
    hour = a;
    min -= 60;
  }
  if (hour < 0) {
    hour = 24 + hour;
  }
  return console.log(`${hour} ${min}`);
}

solution(a, b);