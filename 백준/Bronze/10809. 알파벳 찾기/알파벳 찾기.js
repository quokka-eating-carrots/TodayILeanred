var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("");
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let answer = "";
for (let i = 0; i < alphabet.length; i += 1) {
  if (input.includes(alphabet[i])) answer += `${input.indexOf(alphabet[i])} `;
  else answer += `-1 `;
}
console.log(answer.trim());