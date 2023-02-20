var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
const a = input[0].split("").reverse().join("");
const b = input[1].split("").reverse().join("");
console.log(+a > +b ? a : b);