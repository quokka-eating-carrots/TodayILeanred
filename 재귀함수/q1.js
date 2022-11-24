// function solution(n) {
//   let answer = ''
//   if(n > 1) {
//     return n * solution(n - 1)
//   } else if (n === 1) {
//     return n
//   }
//   return answer
// }

function solution(n) {
  let answer = `${n}`
  if(n > 1) {
    return answer += solution(n - 1)
  }
  return answer
}

console.log(solution(3))