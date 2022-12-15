// 푸드 파이트 대회
// function solution(food) {
//   var answer = '';
//   let cnt = []
//   for (let i = 1; i < food.length; i += 1) {
//     cnt.push(Math.floor(food[i] / 2))
//   }
//   for (let i = 0; i < cnt.length; i += 1) {
//     for (let j = 1; j <= cnt[i]; j += 1) {
//       answer += i + 1
//     }
//   }
//   answer = answer + '0' + answer.split('').reverse().join('')
//   return answer;
// }

// console.log(solution([1, 3, 4, 6]))
// console.log(solution([1, 7, 1, 2]))

// 체육복
function solution(n, lost, reserve) {
  let students = Array.from({ length: n }).fill(1)
  lost.forEach((target) => [
    students[target - 1] -= 1
  ])
  reserve.forEach((target) => {
    students[target - 1] += 1
  })
  for (let i = 0; i < students.length; i += 1) {
    if (students[i] === 0 || students[i] === 1) continue;
    if (i !== 0 && students[i - 1] === 0) {
      students[i - 1] += 1
      students[i] -= 1
    }
    if (students[i] > 1 && i + 1 !== students.length && students[i + 1] === 0) {
      students[i + 1] += 1
      students[i] -= 1
    }
  }
  return students.filter(v => v >= 1).length
}

console.log(solution(5, [2, 4], [1, 3, 5]))