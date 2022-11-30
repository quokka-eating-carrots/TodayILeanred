// 자연수 뒤집어 배열로 만들기
// function solution(n) {
//   let answer = [];
//   n = String(n).split('').reverse()
//   for (let x of n) {
//     answer.push(+x)
//   }
//   return answer;
// }

// console.log(solution(12345))

// 정수 제곱근 판별
// function solution(n) {
//   let answer = 0;
//   let sqrt = Math.sqrt(n)
//   if (sqrt === parseInt(sqrt)) {
//     return answer = (sqrt + 1) * (sqrt + 1)
//   } else return answer = -1
//   return answer;
// }

// console.log(solution(121))
// console.log(solution(3))

// 문자열 내 p와 y의 개수
// function solution(s) {
//   let answer = true;
//   let p = 0
//   let y = 0
//   for (let x of s) {
//     if (x === "p" || x === "P") {
//       p += 1
//     } else if (x === "y" || x === "Y") {
//       y += 1
//     }
//   }
//   if (p !== y) {
//     return answer = false
//   }
//   return answer;
// }

// console.log(solution("pPoooyY"))
// console.log(solution("Pyy"))

// 문자열을 정수로 바꾸기
function solution(s) {
  var answer = 0;
  answer = +s
  return answer;
}

console.log(solution("123"))
console.log(solution("-123"))
console.log(solution("+123"))