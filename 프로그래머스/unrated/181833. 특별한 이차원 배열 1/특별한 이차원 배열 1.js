function solution(n) {
  var answer = [];
  for (let i = 0; i < n; i += 1) {
    const newArr = Array.from({length: n}).fill(0)
    newArr[i] = 1
    answer.push(newArr)
  }
  return answer;
}