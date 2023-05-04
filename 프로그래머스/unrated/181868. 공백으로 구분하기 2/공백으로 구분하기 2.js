function solution(my_string) {
  var answer = [];
  const trimStr = my_string.trim().split(" ");
  for (let x of trimStr) {
    if (x !== "") answer.push(x);
  }
  return answer;
}