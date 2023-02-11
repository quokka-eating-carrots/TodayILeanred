var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const length = parseInt(input[0]);
const nums = input[1].split(" ");
const find = input[2];
function solution(length, nums, find) {
  let cnt = 0;
  for (let i = 0; i < length; i += 1) {
    if (nums[i] === find) cnt += 1;
  }
  console.log(cnt);
}

solution(length, nums, find);