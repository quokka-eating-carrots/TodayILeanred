var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const length = +input[0];
const nums = input[1].split("");
let sum = 0;
for (let i = 0; i < length; i += 1) {
  sum += +nums[i];
}
console.log(sum);