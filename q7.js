function solution(s) {
  let answer = ''
  let cnt = 1;
  s = s + '';
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === s[i + 1]) {
      cnt += 1
    } else {
      answer += s[i]
      if (cnt > 1) {
        answer += cnt
      }
      cnt = 1
    }
  }
  return answer;
}

console.log(solution("KKHSSSSSSSE"))
console.log(solution("AAABCCCDD"))