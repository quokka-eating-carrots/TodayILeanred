//머쓱이보다 키가 큰 사람
// function solution(array, height) {
//   let answer = 0;
//   for (let x of array) {
//     if (x > height) {
//       answer += 1
//     }
//   }
//     return answer;
// }

// console.log(solution([149, 180, 192, 170], 167))
// console.log(solution([180, 120, 140], 190))

//중복된 숫자 개수
// function solution(array, n) {
//   let answer = 0;
//   for (let x of array) {
//     if (x === n) {
//       answer += 1
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 1, 2, 3, 4, 5], 1))
// console.log(solution([0, 2, 3, 4], 1))

// 짝수 홀수 개수
// function solution(num_list) {
//   let answer = [];
//   let odd = 0
//   let even = 0;
//   for (let x of num_list) {
//     if (x % 2 === 0) {
//       even += 1
//     } else {
//       odd += 1
//     }
//   }
//   answer.push(even, odd)
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]))
// console.log(solution([1, 3, 5, 7]))

// 배열 뒤집기
// function solution(num_list) {
//   let answer = [];
//   answer = num_list.reverse()
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]))
// console.log(solution([1, 1, 1, 1, 1, 2]))
// console.log(solution([1, 0, 1, 1, 1, 3, 5]))