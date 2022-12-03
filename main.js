// 나누어 떨어지는 숫자 배열
// function solution(arr, divisor) {
//   let answer = [];
//   for (let x of arr) {
//     if (x % divisor === 0) {
//       answer.push(x)
//     }
//   }
//   if (answer.length === 0) {
//     return answer = [-1]
//   } else return answer.sort((a, b) => a - b)
//   return answer
// }

// console.log(solution([5, 9, 7, 10], 5))
// console.log(solution([2, 36, 1, 3], 1))
// console.log(solution([3, 2, 6], 10))

// 제일 작은 수 제거하기
// function solution(arr) {
//   var answer = [];
//   let min = Math.min(...arr)
//   for (let x of arr) {
//     if (x !== min) {
//       answer.push(x)
//     }
//   }
//   if (answer.length === 0) {
//     return answer = [-1]
//   }
//   return answer;
// }

// console.log(solution([4, 3, 2, 1]))
// console.log(solution([10]))

// 음양 더하기
// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i += 1) {
//     if (signs[i] === true) {
//       answer += absolutes[i]
//     } else answer -= absolutes[i]
//   }
//   return answer;
// }

// console.log(solution([4, 7, 12], [true, false, true]))
// console.log(solution([1, 2, 3], [false, false, true]))

// 없는 숫자 더하기
function solution(numbers) {
  var answer = 0;
  for (let i = 0; i <= 9; i += 1) {
    if (!numbers.includes(i)) {
      answer += i
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]))
console.log(solution([5, 8, 4, 0, 6, 7, 9]))