var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const numsLeng = Number(input[0].split(" ")[0]);
const limit = Number(input[0].split(" ")[1]);
const nums = input[1].split(" ");
let max = 0;
for (let i = 0; i < numsLeng; i += 1) {
  for (let j = 0; j < numsLeng; j += 1) {
    for (let k = 0; k < numsLeng; k += 1) {
      if (i !== j && j !== k && i !== k) {
        const plusNum = +nums[i] + +nums[j] + +nums[k];
        if (plusNum > max && plusNum <= limit) max = plusNum;
      }
    }
  }
}
console.log(max);