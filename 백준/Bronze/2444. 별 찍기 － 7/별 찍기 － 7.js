var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);
for (let i = 0; i < 2 * num - 1; i += 1) {
  const star = Array(2 * num - 1).fill(" ");
  if (i < num) {
    for (let j = num - i - 1; j < num + i; j += 1) {
      star[j] = "*";
    }
  } else if (i >= num) {
    for (let k = i - num + 1; k < 2 * num - 1 - (i - num + 1); k += 1) {
      star[k] = "*";
    }
  }
  console.log(star.join("").trimEnd());
}