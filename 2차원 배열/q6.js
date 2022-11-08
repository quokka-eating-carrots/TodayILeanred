// 봉우리
function solution(board) {
  let answer = 0
  let n = board.length
  let dx = [-1, 0, 1, 0]
  let dy = [0, 1, 0, -1]
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      let flag = 1
      for (let k = 0; k < 4; k += 1) {
        let nx = i + dx[k]
        let ny = j + dy[k]
        if (nx >= 0 && nx < n &&
          ny >= 0 && ny < n &&
          board[nx][ny] >= board[i][j]) {
            flag = 0
            break
          }
      }
      if(flag) answer += 1
    }
  }
  return answer
}


console.log(solution([[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]]))
console.log(solution([[11, 15, 17, 23, 13, 5, 12], [25, 18, 11, 16, 21, 7, 22], [37, 13, 17, 22, 14, 11, 33], [35, 27, 38, 34, 31, 22, 12], [38, 22, 33, 21, 25, 33, 11], [11, 33, 12, 13, 26, 35, 12], [17, 22, 23, 11, 15, 13, 21]]))

function solution(board) {
  let answer = 0
  const n = board.length
  const getNumber = (value) => value || 0

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      let curr = board[i][j]
      if (curr > getNumber(board[i][j - 1])
      && curr > getNumber(board[i][j + 1])
      && curr > getNumber(board[i - 1]?.[j])
      && curr > getNumber(board[i + 1]?.[j])) {
        answer += 1
      }
    }
  }
  return answer
}