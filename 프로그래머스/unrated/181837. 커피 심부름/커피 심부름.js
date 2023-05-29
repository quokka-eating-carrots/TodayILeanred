function solution(order) {
  var answer = 0;
  for (let x of order) {
    if (x.includes("cafelatte")) {
      answer += 5000;
    } else if (x.includes("americano")) {
      answer += 4500;
    } else {
      answer += 4500;
    }
  }
  return answer;
}
