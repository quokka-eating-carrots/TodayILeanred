function solution(s) {
  let answer = '';
  let max = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i].length > max) {
      max = s[i].length
      answer = s[i]
    }
  }
  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']))
console.log(solution(['big', 'Good', 'easy']))