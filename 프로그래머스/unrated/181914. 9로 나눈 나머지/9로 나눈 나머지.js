function solution(number) {
  var answer = 0;
  let sum = 0
  for (let x of number) {
    sum += +x
  }
  answer = sum % 9
  return answer;
}