function solution(num_list) {
  var answer = 0;
  let sum = 0;
  let mul = 1;
  for (let x of num_list) {
    sum += x;
    mul *= x;
  }
  sum * sum > mul ? (answer = 1) : (answer = 0);
  return answer;
}