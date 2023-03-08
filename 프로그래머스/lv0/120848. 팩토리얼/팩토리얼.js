function solution(n) {
  let answer = 0;
  let cnt = 1
  for (let i = 1; i <= 10; i += 1) {
    cnt = cnt * i
    if (cnt <= n) {
      answer = i
    }
  }
  return answer;
}