// 문자 반복 출력하기
// function solution(my_string, n) {
//   let answer = '';
//   for (let x of my_string) {
//     for (let i = 1; i <= n; i += 1) {
//       answer += x
//     }
//   }
//   return answer;
// }

// console.log(solution('hello', 3))

// 삼각형의 완성 조건(1)
// function solution(sides) {
//   let answer = 0;
//   let max = 0;
//   let sum = 0;
//   max = Math.max(...sides)
//   for (let x of sides) {
//     sum += x
//   }
//   if (sum - max > max) {
//     answer = 1
//   } else answer = 2
//   return answer;
// }

// console.log(solution([1, 2, 3]))
// console.log(solution([3, 6, 2]))
// console.log(solution([199, 72, 222]))

// 옷가게 할인 받기
// function solution(price) {
//   let answer = 0;
//   if (price >= 100000 && price < 300000) {
//     answer = parseInt(price * 0.95)
//   } else if (price >= 300000 && price < 500000) {
//     answer = parseInt(price * 0.9)
//   } else if (price >= 500000) {
//     answer = parseInt(price * 0.8)
//   } else answer = parseInt(price)
//   return answer;
// }

// console.log(solution(150000))
// console.log(solution(580000))

// 제곱수 판별하기
function solution(n) {
  let answer = 0;
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    answer = 1
  } else answer = 2
  return answer;
}

console.log(solution(144))
console.log(solution(976))