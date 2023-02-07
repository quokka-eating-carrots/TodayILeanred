var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const length = parseInt(input[0]);
let answer = "";
for (let i = 1; i <= length; i += 1) {
  const num = input[i].split(" ");
  answer += `${parseInt(num[0]) + parseInt(num[1])}\n`;
}
console.log(answer);