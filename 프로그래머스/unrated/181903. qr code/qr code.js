function solution(q, r, code) {
  var answer = "";
  for (let i = 0; i < code.length; i += q) {
    let str = [];
    for (let j = i; j < q + i; j += 1) {
      str.push(code[j]);
    }
    if (str[r]) answer += str[r];
  }
  return answer;
}