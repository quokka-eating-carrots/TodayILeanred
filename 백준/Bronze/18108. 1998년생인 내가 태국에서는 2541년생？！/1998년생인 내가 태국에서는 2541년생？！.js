var fs = require('fs');
var input = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : 'test.txt').toString().split(' ');
console.log(`${Number(input[0]) - 543}`)