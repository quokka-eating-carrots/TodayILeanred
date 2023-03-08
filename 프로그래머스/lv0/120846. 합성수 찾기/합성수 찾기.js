function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i += 1) {
    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        answer += 1
        break;
      }
    }
  }
  return answer
}