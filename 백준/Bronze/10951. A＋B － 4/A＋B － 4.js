var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')
const length = input.length
for (let i = 0; i < length; i += 1) {
  const nums = input[i].split(' ')
  const a = Number(nums[0])
  const b = Number(nums[1])
  console.log(a + b)
}