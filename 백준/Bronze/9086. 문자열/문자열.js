var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = parseInt(input[0]);
for (let i = 1; i <= length; i += 1) {
  input[i] = input[i].trim();
  console.log(`${input[i][0]}${input[i][input[i].length - 1]}`);
}