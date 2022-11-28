// 다음에 올 숫자
// function solution(common) {
//   let answer = 0;
//   if (common[1] - common[0] === common[2] - common[1]) {
//     return answer = common[common.length - 1] + (common[1] - common[0])
//   }
//   if (common[1] / common[0] === common[2] / common[1]) {
//     return answer = common[common.length - 1] * (common[1] / common[0])
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 4]))
// console.log(solution([2, 4, 8]))

// OX 퀴즈
// function solution(quiz) {
//   let answer = [];
//   let math = [];
//   let result = 0
//   for (let x of quiz) {
//     math.push(x.split(' '))
//   }
//   for (let i = 0; i < math.length; i += 1) {
//     for (let j = 0; j < math[i].length; j += 1) {
//       if (math[i][j] === '+') {
//         result = Number(math[i][0]) + Number(math[i][2])
//         if (result === Number(math[i][4])) {
//           answer.push("O")
//         } else answer.push("X")
//       } else if (math[i][j] === "-") {
//         result = Number(math[i][0]) - Number(math[i][2])
//         if (result === Number(math[i][4])) {
//           answer.push("O")
//         } else answer.push("X")
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(["3 - 4 = -3", "5 + 6 = 11"]))

// 연속된 수의 합
// function solution(num, total) {
//   let answer = [];
//   let sum = 0
//   for (let i = 1; i <= total; i += 1) {
//     for (let j = 1; j <= num; j += 1) {
//       sum += i
//     }
//     if (sum === total) {
//       answer.push(i)
//     }
//   }
//   return answer;
// }
function solution(num, total) {
  let answer = []
  let a = (2 * total / num + 1 - num) / 2
  for (let i = 0; i < num; i += 1) {
    answer.push(a + i)
  }
  return answer
}

console.log(solution(3, 12))

// 안전지대
// function solution(board) {
//   let result = 0
//   // 전체 순회
//   for(let i = 0 ; i < board.length ; i ++) {
//       for(let j = 0 ; j < board[i].length ; j ++) {
//           // board[i][j]의 값이 1인경우 상하좌우 및 대각선 검사를 실행
//           if(board[i][j] === 1) {
//               // 상하 좌우를 2로 변경하되 이는 해당 칸이 0인 경우에만 해당 즉 폭탄은 건들지 않는다.
//               // 맨 윗줄이 아닌 경우
//               if(i !== 0 && board[i-1][j] !== 1) {
//                   board[i-1][j] = 2    
//               }
//               // 맨 아랫줄이 아닌 경우
//               if(i !== board.length-1 && board[i+1][j] !== 1) {
//                   board[i+1][j] = 2
//               }
//               // 맨 왼쪽이 아닌 경우
//               if(j !== 0 && board[i][j-1] !== 1) {
//                   board[i][j-1] = 2
//               }
//               // 맨 오른쪽이 아닌 경우
//               if(j !== board[i].length-1 && board[i][j+1] !== 1) {
//                   board[i][j+1] = 2
//               }
//               // 맨 대각선 윗 왼쪽이 아닌 경우
//               if(i !== 0 && j !== 0 && board[i-1][j-1] !== 1) {
//                   board[i-1][j-1] = 2
//               }
//               // 맨 대각선 윗 오른쪽이 아닌 경우
//               if(i !== 0 && j !== board[i].length-1 && board[i-1][j+1] !== 1) {
//                   board[i-1][j+1] = 2
//               }
//               // 맨 대각선 아랫 왼쪽이 아닌 경우
//               if(i !== board.length-1 && j !== 0 && board[i+1][j-1] !== 1) {
//                   board[i+1][j-1] = 2
//               }
//               // 맨 대각선 아랫 오른쪽이 아닌 경우
//               if(i !== board.length-1 && j !== board[i].length-1 && board[i+1][j+1] !== 1) {
//                   board[i+1][j+1] = 2
//               }
//           }
//       }
//   }
//   board.forEach(a => a.forEach(b => b === 0 ? result++ : null))
//   return result
// }

// console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]))