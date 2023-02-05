var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split(" ");
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

function solution(a, b, c) {
  if (a === b && b === c) {
    return console.log(10000 + a * 1000);
  } else if (a === b && b !== c) {
    return console.log(1000 + a * 100);
  } else if (b === c && a !== b) {
    return console.log(1000 + b * 100);
  } else if (a === c && b !== a) {
    return console.log(1000 + a * 100);
  } else if (a !== b && b !== c) {
    return console.log(Math.max(a, b, c) * 100);
  }
}

solution(a, b, c);