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