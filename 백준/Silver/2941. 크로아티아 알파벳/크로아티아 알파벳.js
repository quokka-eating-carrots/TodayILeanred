var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let cnt = 0;
for (let s of croatia) {
  input = input.split(s).join("Z");
}
console.log(input.length);