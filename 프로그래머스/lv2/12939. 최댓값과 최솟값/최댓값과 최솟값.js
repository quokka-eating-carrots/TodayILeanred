function solution(s) {
  var answer = '';
  s = s.split(" ")
  for (let i = 0; i < s.length; i += 1) {
    s[i] = +s[i]
  }
  answer += Math.min(...s)
  answer += ` ${Math.max(...s)}`
  return answer;
}