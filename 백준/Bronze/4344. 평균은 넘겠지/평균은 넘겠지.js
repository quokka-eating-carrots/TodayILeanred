var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = parseInt(input[0]);
for (let i = 1; i <= length; i += 1) {
  const scoreCase = input[i].split(" ");
  const studentNum = parseInt(scoreCase[0]);
  let average = 0;
  let sum = 0;
  for (let j = 1; j <= studentNum; j += 1) {
    sum += parseInt(scoreCase[j]);
  }
  average = sum / studentNum;
  let student = 0;
  for (let j = 1; j <= studentNum; j += 1) {
    if (scoreCase[j] > average) student += 1;
  }
  console.log(`${((student / studentNum) * 100).toFixed(3)}%`);
}