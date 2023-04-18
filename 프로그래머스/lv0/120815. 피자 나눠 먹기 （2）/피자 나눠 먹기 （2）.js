function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i += 1) {
    if ((i * 6) % n === 0) return answer = i
  }
  return answer
}