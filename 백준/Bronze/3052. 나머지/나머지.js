var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const diff = [];
input.forEach((x) => {
  const num = x % 42;
  if (diff.indexOf(num) === -1) {
    diff.push(num);
  }
});
console.log(diff.length);