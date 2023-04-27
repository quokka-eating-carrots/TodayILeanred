function solution(my_string, n) {
  var answer = "";
  const end = my_string.length;
  const start = end - n;
  answer = my_string.slice(start, end);
  return answer;
}