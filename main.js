// 문자열 뒤집기
// function solution(my_string) {
//   let answer = '';
//   answer = my_string.split('').reverse().join('')
//   return answer;
// }

// console.log(solution('jaron'))
// console.log(solution('bread'))

// 아이스 아메리카노
// function solution(money) {
//   let answer = [];
//   let cnt = 0
//   let charge = 0
//   cnt = parseInt(money / 5500)
//   charge = money - (5500 * cnt)
//   answer.push(cnt, charge)
//   return answer;
// }

// console.log(solution(5500))
// console.log(solution(15000))

// 최댓값 만들기 (1)
// function solution(numbers) {
//   let answer = 0;
//   let max = Number.MIN_SAFE_INTEGER
//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = 0; j < numbers.length; j += 1) {
//       if (i !== j && numbers[i] * numbers[j] > max) {
//         max = numbers[i] * numbers[j]
//       }
//     }
//   }
//   answer = max
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]))
// console.log(solution([0, 31, 24, 10, 1, 9]))

// 배열 자르기
function solution(numbers, num1, num2) {
  let answer = [];
  answer = numbers.slice(num1, num2 + 1)
  return answer;
}

console.log(solution([1, 2, 3, 4, 5], 1, 3))
console.log(solution([1, 3, 5], 1, 2))