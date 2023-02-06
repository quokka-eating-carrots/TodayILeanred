var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
let length = parseInt(input[0])
for (let i = 1; i <= length; i += 1) {
  const num = input[i].split(' ')
  const a = parseInt(num[0])
  const b = parseInt(num[1])
  console.log(a + b)
}