// x만큼 간격이 있는 n 개의 숫자
// function solution(x, n) {
//   let answer = [];
//   for (let i = 0; i < n; i += 1) {
//     answer.push(x + (x * i))
//   }
//   return answer;
// }

// console.log(solution(2, 5))
// console.log(solution(4, 3))
// console.log(solution(-4, 2))

// 하샤드 수
// function solution(x) {
//   let answer = true;
//   x = String(x)
//   let sum = 0
//   for (let i of x) {
//     sum += +i
//   }
//   if (x % sum === 0) {
//     return answer = true
//   } else return answer = false
//   return answer;
// }

// console.log(solution(10))
// console.log(solution(12))
// console.log(solution(11))
// console.log(solution(13))

// 정수 내림차순으로 배치하기
// function solution(n) {
//   let answer = 0;
//   n = String(n).split('')
//   n.sort((a, b) => b - a)
//   answer = +(n.join(''))
//   return answer;
// }

// console.log(solution(118372))

// 나머지가 1이 되는 수 찾기
function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i += 1) {
    if (n % i === 1) {
      return answer = i
    }
  }
  return answer;
}

console.log(solution(10))
console.log(solution(12))