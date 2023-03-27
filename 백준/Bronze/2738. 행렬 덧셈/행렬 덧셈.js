var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(x => x.trim().split(" ").map(x => +x))
const [n, m] = input.shift()
let arr = new Array(m).fill(0)
let array = []
for (let i = 0; i < n; i += 1) {
  array.push([...arr])
}
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    array[i][j] = input[i][j] + input[i + n][j]
  }
}

let answer = ""
for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < m; j += 1) {
    answer += array[i][j].toString() + " "
  }
  answer += "\n"
}
console.log(answer)