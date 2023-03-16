var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = Number(input[0])
input.shift()
for (let i = 0; i < length; i += 1) {
  input[i] = input[i].split(' ')
}
input.sort((a, b) => a[0] - b[0])
for (let i = 0; i < length; i += 1) {
  console.log(input[i].join(' '))
}