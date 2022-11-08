// 스카이 라인
function solution(board) {
  let answer = 0
  let n = board.length
  let row = Array(n).fill(0)
  let col = Array(n).fill(0)
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      row[i] = Math.max(row[i], board[i][j])
      col[i] = Math.max(col[i], board[j][i])
    }
  }
  console.log(row)
  console.log(col)
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      answer += Math.min(row[i], col[j]) - board[i][j]
    }
  }
  return answer
}

console.log(solution([[2, 5, 7, 3], [6, 8, 9, 7], [3, 2, 4, 5], [7, 2, 5, 8]]))
// console.log(solution([[3, 7, 6, 2], [5, 3, 8, 7], [3, 2, 5, 7], [7, 7, 5, 3]]))