var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let answer = []
for (let i = 1; i <= 30; i += 1) {
  if (input.find(item => item == i)) continue
  else answer.push(i)
}
console.log(answer[0])
console.log(answer[1])
