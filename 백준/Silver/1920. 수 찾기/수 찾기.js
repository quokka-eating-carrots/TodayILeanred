var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const [N, A, M, B] = input.map(e => e.split(" ").map(x => Number(x)))
const array = new Set(A)
const result = B.map(v => array.has(v) ? 1 : 0)
console.log(result.join('\n'))