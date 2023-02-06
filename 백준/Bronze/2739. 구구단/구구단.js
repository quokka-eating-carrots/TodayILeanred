var fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString()
console.log(`${parseInt(input)} * 1 = ${parseInt(input) * 1}`)
console.log(`${parseInt(input)} * 2 = ${parseInt(input) * 2}`)
console.log(`${parseInt(input)} * 3 = ${parseInt(input) * 3}`)
console.log(`${parseInt(input)} * 4 = ${parseInt(input) * 4}`)
console.log(`${parseInt(input)} * 5 = ${parseInt(input) * 5}`)
console.log(`${parseInt(input)} * 6 = ${parseInt(input) * 6}`)
console.log(`${parseInt(input)} * 7 = ${parseInt(input) * 7}`)
console.log(`${parseInt(input)} * 8 = ${parseInt(input) * 8}`)
console.log(`${parseInt(input)} * 9 = ${parseInt(input) * 9}`)