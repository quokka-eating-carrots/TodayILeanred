// 소수 찾기
// function solution(n) {
//   var answer = 0;
//   for (let i = 2; i <= n; i += 1) {
//     for (let j = 2; j <= Math.sqrt(i); j += 1) {
//       if (i % j === 0) {
//         break;
//       }
//     }
//   }
//   return answer;
// }

function solution(n) {
  let answer = 0
  let arr = Array(n + 1).fill(0)
  for (let i = 0; i <= n; i += 1) {
    arr[i] = i
  }
  arr[1] = 0
  for (let i = 2; i <= n; i += 1) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = 0
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== 0) {
      answer += 1
    }
  }
  return answer
}

console.log(solution(10))
console.log(solution(5))

// 모의고사
// function solution(answers) {
//   var answer = [];
//   const per1 = [1, 2, 3, 4, 5]
//   const per2 = [2, 1, 2, 3, 2, 4, 2, 5]
//   const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
//   let per1Score = 0
//   let per2Score = 0
//   let per3Score = 0
//   for (let i = 0; i < answers.length; i += 1) {
//     if (answers[i] === per1[i % per1.length]) {
//       per1Score += 1
//     }
//     if (answers[i] === per2[i % per2.length]) {
//       per2Score += 1
//     }
//     if (answers[i] === per3[i % per3.length]) {
//       per3Score += 1
//     }
//   }
//   const max = Math.max(per1Score, per2Score, per3Score)
//   if (per1Score === max) {
//     answer.push(1)
//   }
//   if (per2Score === max) {
//     answer.push(2)
//   }
//   if (per3Score === max) {
//     answer.push(3)
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5]))
// console.log(solution([1, 3, 2, 4, 2]))