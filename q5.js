function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i += 1) {
    if (s.indexOf(s[i] === i)) {
      answer += s[i]
    }
  }
  return answer;
}

console.log(solution('ksekkset'))
console.log(solution('sssssttessskssee'))