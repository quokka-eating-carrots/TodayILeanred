var fs = require('fs');
var input = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : 'test.txt').toString().split(' ');
const chess = ['1', '1', '2', '2', '2', '8']
let answer = ''
for (let i = 0; i < input.length; i += 1) {
  if (input[i] === chess[i]) {
    answer += ` 0`
  } else {
    answer += ` ${chess[i] - input[i]}`
  }
}
console.log(answer.trim())