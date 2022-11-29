function Multiple(num) {
  this.num = num
}

Multiple.prototype.getMultiple = function () {
  return this.num * this.num
}

const multiple1 = new Multiple(3)
const multiple2 = new Multiple(5)

console.log(multiple1.getMultiple === multiple2.getMultiple)
console.log(multiple1.getMultiple())
console.log(multiple2.getMultiple())