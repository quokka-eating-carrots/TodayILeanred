var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const length = parseInt(input[0])
for (let i = 1; i <= length; i += 1) {
  const test = input[i].split(' ')
  const repeat = parseInt(test[0])
  let str = ''
  for (let x of test[1]) {
    for (let j = 0; j < repeat; j += 1) {
      str += x
    }
  }
  console.log(str)
}