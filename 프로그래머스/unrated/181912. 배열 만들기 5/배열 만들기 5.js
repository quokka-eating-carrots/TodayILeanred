function solution(intStrs, k, s, l) {
  var answer = [];
  for (let x of intStrs) {
    let num = +x.slice(s, s + l)
    if (num > k) answer.push(num)
  }
  return answer;
}