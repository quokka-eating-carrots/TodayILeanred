function solution(arr) {
  var answer = [];
  let newLength = 0;
  for (let i = 1; i <= 2 ** 1000; i *= 2) {
    if (arr.length <= i) {
      newLength = i;
      break;
    }
  }
  answer = [...arr];
  for (let i = answer.length; i < newLength; i += 1) {
    answer.push(0);
  }
  return answer;
}