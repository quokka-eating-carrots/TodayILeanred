var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const str = input.toUpperCase();
const cnt = {};
for (let x of str) {
  if (x in cnt) {
    cnt[x] += 1;
  } else {
    cnt[x] = 1;
  }
}
let max = 0;
let answer = "";
for (let y in cnt) {
  if (cnt[y] > max) {
    max = cnt[y];
    answer = y;
  }
}
let sameCnt = 0;
for (let z in cnt) {
  if (cnt[z] === max) {
    sameCnt += 1;
  }
}
console.log(sameCnt === 1 ? answer : "?");