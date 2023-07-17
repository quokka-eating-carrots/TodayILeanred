function solution(str_list) {
  var answer = [];
  for (let i = 0; i < str_list.length; i += 1) {
    if (str_list[i] === "l") {
      for (let j = 0; j < i; j += 1) {
        answer.push(str_list[j]);
      }
      return answer;
    } else if (str_list[i] === "r") {
      for (let j = i + 1; j < str_list.length; j += 1) {
        answer.push(str_list[j]);
      }
      return answer;
    }
  }
  return answer;
}