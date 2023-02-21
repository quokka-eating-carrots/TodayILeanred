var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const cnt = +input / 4;
let answer = "";
for (let i = 0; i < cnt; i += 1) {
  if (i === cnt - 1) {
    answer += "long int";
  } else answer += "long ";
}
console.log(answer.trim());