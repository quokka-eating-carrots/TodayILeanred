function solution(arr, flag) {
  var answer = [];
  for (let i = 0; i < flag.length; i += 1) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j += 1) {
        answer.push(arr[i]);
      }
    } else {
      for (let k = 0; k < arr[i]; k += 1) {
        answer.pop();
      }
    }
  }
  return answer;
}