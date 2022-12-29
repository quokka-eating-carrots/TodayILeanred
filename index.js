// 명예의 전당
// function solution(k, score) {
//   let answer = [];
//   answer.push(score[0])
//   for (let i = 1; i < k; i += 1) {
//     let min = Math.min(...answer)
//     if (min > score[i] && score[i] >= 10) {
//       answer.push(score[i])
//     } else answer.push(min)
//   }

//   for (let i = k; i < score.length; i += 1) {
//     let min = []
//     for (let j = 0; j > -k; j -= 1) {
//       min.push(score[i + j])
//     }
//     min.sort((a, b) => a - b)
//     if (min[0] < 10) {
//       answer.push(min[1])
//     } else answer.push(min[0])
//   }
//   return answer;
// }

// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))

// function solution(k, score) {
//   let answer = [];
//   answer.push(score[0])
//   for (let i = 1; i < k; i += 1) {
//     let min = Math.min(...answer)
//     if (min > score[i] && score[i] >= 10) {
//       answer.push(score[i])
//     } else answer.push(min)
//   }

//   for (let i = k; i < score.length; i += 1) {
//     let min = []
//     for (let j = 0; j > -k; j -= 1) {
//       min.push(score[i + j])
//     }
//     min.sort((a, b) => a - b)
//     console.log(min)
//     if (min[0] < 10 || answer.includes(min[0])) {
//       answer.push(min[1])
//     } else if (min[0] < answer[answer.length - 1]) {
//       answer.push(answer[answer.length - 1])
//     } else answer.push(min[0])
//   }
//   return answer;
// }

function solution(k, score) {
  const answer = []
  const honor = []
  for (let i = 0; i < score.length; i += 1) {
    if (i < k) {
      honor.push(score[i])
    }
    if (score[i] > Math.min(...honor)) {
      honor.pop()
      honor.push(score[i])
      honor.sort((a, b) => b - a)
    }
    answer.push(honor.at(-1))
  }
  return answer
}