function solution(my_string) {
  var answer = [];
  answer = Array(52).fill(0);
  for (let x of my_string) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) {
      answer[x.charCodeAt() - 65] += 1;
    } else if (x.charCodeAt() >= 97 && x.charCodeAt() <= 122) {
      answer[x.charCodeAt() - 97 + 26] += 1;
    }
  }
  return answer;
}