var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")
const length = +input[0]
const stack = []
const answer = []
for (let i = 1; i <= length; i += 1) {
  if (input[i].trim().includes("push")) {
    stack.push(input[i].split(" ")[1])
  } else if (input[i].trim() === "pop") {
    answer.push(stack.length ? stack.pop() : -1)
  } else if (input[i].trim() === "size") {
    answer.push(stack.length)
  } else if (input[i].trim() === "empty") {
    answer.push(stack.length ? 0 : 1)
  } else if (input[i].trim() === "top") {
    answer.push(stack.length ? stack[stack.length - 1] : -1)
  }
}
console.log(answer.join("\n"))