// 약수의 합
// function solution(n) {
//   let answer = 0;
//   for (let i = 1; i <= n; i += 1) {
//     if (n % i === 0) {
//       answer += i
//     }
//   }
//   return answer;
// }

// console.log(solution(12))
// console.log(solution(5))

// 평균 구하기
// function solution(arr) {
//   let answer = 0;
//   let sum = 0
//   for (let x of arr) {
//     sum += x
//   }
//   answer = sum / arr.length
//   return answer;
// }

// console.log(solution([1, 2, 3, 4]))
// console.log(solution([5, 5]))

// 짝수와 홀수
// function solution(num) {
//   let answer = '';
//   if (num % 2 === 0) {
//     answer = "Even"
//   } else answer = "Odd"
//   return answer;
// }

// console.log(solution(3))
// console.log(solution(4))

// 자릿수 더하기
function solution(n) {
  let answer = 0;
  n = String(n)
  for (let x of n) {
    answer += Number(x)
  }
  return answer;
}

console.log(solution(123))
console.log(solution(987))