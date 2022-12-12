// 콜라 문제
// function solution(a, b, n) {
//   let answer = 0;
//   let cnt = n
//   let diff = 0
//   while (cnt >= a) {
//     diff += cnt % a
//     cnt = Math.floor(cnt / a) * b
//     answer += cnt
//   }
//   diff += cnt
//   while (diff >= a) {
//     diff = Math.floor(diff / a) * b
//     answer += diff
//   }
//   return answer;
// }

function solution(a, b, n) {
  let answer = 0
  while (n >= a) {
    answer += Math.floor(n / a) * b
    n = (Math.floor(n / a) * b) + (n % a)
  }
  return answer
}
console.log(solution(2, 1, 20))
console.log(solution(3, 1, 20))