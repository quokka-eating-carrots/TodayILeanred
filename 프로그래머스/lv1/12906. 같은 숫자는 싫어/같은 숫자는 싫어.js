function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
