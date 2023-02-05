var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let time = input[0].split(" ");
let hour = parseInt(time[0]);
let min = parseInt(time[1]);
let cookTime = parseInt(input[1]);

function solution(a, b, c) {
  let cooking = min + cookTime;
  while (cooking >= 60) {
    hour += 1;
    cooking -= 60;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  return console.log(`${hour} ${cooking}`);
}

solution(hour, min, cookTime);