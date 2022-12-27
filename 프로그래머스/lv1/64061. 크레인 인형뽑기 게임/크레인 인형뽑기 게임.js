function solution(board, moves) {
  let answer = 0;
  const stack = []
  for (let i = 0; i < moves.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      if (board[j][moves[i] - 1] !== 0) {
        if (board[j][moves[i] - 1] === stack[stack.length - 1]) {
          stack.pop()
          answer += 1
        } else {
          stack.push(board[j][moves[i] - 1])
        }
        board[j][moves[i] - 1] = 0
        break;
      }
    }
  }
  return answer * 2
}
