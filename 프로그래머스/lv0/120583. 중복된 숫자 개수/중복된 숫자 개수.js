function solution(array, n) {
  let answer = 0;
for (let x of array) {
    if (x === n) {answer += 1}
}
  return answer;
}
