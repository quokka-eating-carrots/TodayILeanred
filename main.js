// 중앙값 구하기
// function solution(array) {
//   let answer = 0;
//   array.sort((a, b) => a - b)
//   for (let i = 0; i < array.length / 2; i += 1) {
//     answer = array[i]
//   }
//   return answer;
// }

// console.log(solution([1, 2, 7, 10, 11]))
// console.log(solution([9, -1, 0]))

// n의 배수 고르기
// function solution(n, numlist) {
//   let answer = [];
//   for (let x of numlist) {
//     if (x % n === 0) {
//       answer.push(x)
//     }
//   }
//   return answer;
// }

// console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]))
// console.log(solution(5, [1, 9, 3, 10, 13, 15]))
// console.log(solution(12, [2, 100, 120, 600, 12, 12]))

// 직각삼각형 출력하기
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     for(let i = 1; i <= +input[0]; i += 1) console.log('*'.repeat(i));
// });

// 대문자와 소문자
// function solution(my_string) {
//   let answer = '';
//   for (let x of my_string) {
//     if (x === x.toUpperCase()) {
//       answer += x.toLowerCase()
//     } else answer += x.toUpperCase()
//   }
//   return answer;
// }

// console.log(solution('cccCCC'))
// console.log(solution('abCdEfghIJ'))

// 가위바위보
function solution(rsp) {
  let answer = '';
  for (let x of rsp) {
    if (x === '2') {
      answer += '0'
    } else if (x === '0') {
      answer += '5'
    } else answer += '2'
  }
  return answer;
}

console.log(solution('2'))
console.log(solution('205'))