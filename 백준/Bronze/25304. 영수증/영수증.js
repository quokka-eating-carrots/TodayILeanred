var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n")
const receipt = parseInt(input[0])
const cnt = parseInt(input[1])
let sum = 0
for (let i = 0; i < cnt; i += 1) {
  let item = input[i + 2].split(' ')
  let price = parseInt(item[0])
  let itemCnt = parseInt(item[1])
  sum += price * itemCnt
}

receipt === sum ? console.log('Yes') : console.log('No')