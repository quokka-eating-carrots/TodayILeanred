var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");
if (input[0] === "") return console.log(0);
else console.log(input.length);