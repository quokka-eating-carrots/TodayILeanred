var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let answer = 0;
for (let i = 0; i < input.length; i += 1) {
  answer += +input[i];
}
console.log(answer);