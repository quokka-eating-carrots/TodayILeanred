function solution(myString) {
  var answer = '';
  for (let x of myString) {
    if (97 <= x.charCodeAt() && x.charCodeAt() < 108) {
      answer += "l"
    } else {
      answer += x
    }
  }
  return answer;
}