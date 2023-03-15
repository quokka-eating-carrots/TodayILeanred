var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
input.sort((a, b) => a.length - b.length);
input.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }
});
const set = new Set(input);
for (let s of set) {
  console.log(s.trim());
}