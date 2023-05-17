function solution(num_list) {
  var answer = 0;
  for (let x of num_list) {
    if (x > 1) {
      let num = x
      while (num > 1) {
        if (num % 2 === 0) {
          num = num / 2
        } else {
          num = (num - 1) / 2
        }
        answer += 1
      }
    }
  }
  return answer;
}