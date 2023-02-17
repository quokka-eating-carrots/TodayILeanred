var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = parseInt(input[0])
let answer = ''
for (let i = 1; i <= length; i += 1) {
  const test = input[i].trim().split('')
  let score = 0
  let cnt = 0
  for (j = 0; j < test.length; j += 1) {
    if (test[j] === 'O') {
      cnt += 1
      score += cnt
    } else {
      cnt = 0
    }
  }
  answer += `${score}\n`
}
console.log(answer.trim())