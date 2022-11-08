// 나이 출력
// function solution(age) {
//   var answer = 0;
//   answer = 2022 - age + 1
//   return answer;
// }

// console.log(solution(40))
// console.log(solution(23))

// 각도기
// function solution(angle) {
//   let answer = 0;
//   if (0 < angle && angle < 90) {
//     answer = 1
//   } else if (angle === 90) {
//     answer = 2
//   } else if (90 < angle && angle < 180) {
//     answer = 3
//   } else if (angle === 180) {
//     answer = 4
//   }
//   return answer;
// }

// console.log(solution(70))
// console.log(solution(91))
// console.log(solution(180))

// 짝수의 합
// function solution(n) {
//   let answer = 0;
//   for (let i = 0; i <= n; i += 2) {
//     answer += i
//   }
//   return answer;
// }

// console.log(solution(10))
// console.log(solution(4))

// 양꼬치
function solution(n, k) {
  let answer = 0;
  let drink = 0;
  if (n / 10 >= 1) {
    drink = parseInt(n / 10) * 2000
  }
  answer = (n * 12000) + (k * 2000) - drink
  return answer;
}

console.log(solution(10, 3))
console.log(solution(64, 6))