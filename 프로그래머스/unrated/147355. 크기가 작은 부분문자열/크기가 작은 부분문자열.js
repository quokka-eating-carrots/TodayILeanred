function solution(t, p) {
  var answer = 0;
  let num = ""
  for (let i = 0; i < t.length; i += 1) {
    num = ""
    for (let j = 0; j < p.length; j += 1) {
      num += t[i + j]
    }
    if (Number(num) <= Number(p)) {
      answer += 1
    }
  }
  return answer;
}