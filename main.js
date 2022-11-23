// function* genFunc() {
//   try {
//     yield 1
//     yield 2
//     yield 3
//   } catch (e) {
//     console.error(e)
//   }
// }

// const generator = genFunc()

// console.log(generator.next())
// // console.log(generator.return('End!'))
// console.log(generator.throw('Error!'))

const infiniteFibonacci = (fucntion* () {
  let [pre, cur] = [0, 1];

  while (true) {
    [pre, cur] = [cur, pre + cur]
    yield cur
  }
}());
// ;(function* infiniteFibonacci() {
//     let [pre, cur] = [0, 1];

//   while (true) {
//     [pre, cur] = [cur, pre + cur]
//     yield cur
//   }
// })()

for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num);
}