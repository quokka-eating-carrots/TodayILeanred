var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const length = parseInt(input[0].split(" ")[0]);
const num = parseInt(input[0].split(" ")[1]);
const nums = input[1].split(" ");
function solution(length, num, nums) {
  let answer = "";
  for (let i = 0; i < length; i += 1) {
    if (+nums[i] < num) {
      answer += `${nums[i]} `;
    }
  }
  console.log(answer.trim());
}

solution(length, num, nums);