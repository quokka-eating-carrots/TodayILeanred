// 피자 나눠 먹기 1

// function solution(n) {
//   let answer = 0;
//   if (n % 7 === 0) {
//     answer = n / 7
//   } else {
//     answer = parseInt(n / 7 + 1)
//   }
//   return answer;
// }

// console.log(solution(7))
// console.log(solution(1))
// console.log(solution(15))

// 피자 나눠 먹기 2
// function solution(n) {
//   let answer = 0;
//   if (n % 6 === 0) {
//     answer = n / 6
//   } else if (n % 2 === 0) {
//     answer = n / 2
//   } else if (n % 3 === 0) {
//     answer = n / 3
//   } else {
//     answer = n
//   }
//   return answer;
// }

// console.log(solution(6))
// console.log(solution(10))
// console.log(solution(4))
// console.log(solution(25))

// 피자 나눠 먹기 3
// function solution(slice, n) {
//   let answer = 0;
//   if (n % slice === 0) {
//     answer = n / slice
//   } else {
//     answer = parseInt(n / slice + 1)
//   }
//   return answer;
// }

// console.log(solution(7, 10))
// console.log(solution(4, 12))

// 배열의 평균값
function solution(numbers) {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i]
  }
  answer = sum / numbers.length
  return answer;
}

 console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
 console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]))