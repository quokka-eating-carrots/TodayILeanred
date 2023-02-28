var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const length = input.length
for (let i = 0; i < length / 2; i += 1) {
  if (input[i] !== input[length - 1 - i]) {
    return console.log(0)
  }
  if (i === Math.floor(length / 2) && length % 2 !== 0) {
    return console.log(1)
  } else if (i === length / 2 - 1 && length % 2 === 0) {
    return console.log(1)
  }
}