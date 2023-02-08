var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString();
const length = parseInt(input);
for (let i = 1; i <= length; i += 1) {
  let star = ''
  for (let j = 0; j < i; j += 1) {
    star += '*'
  }
  console.log(star.padStart(length, ' '))
}