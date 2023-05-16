function solution(myString) {
  var answer = [];
  for (let x of myString.split("x")) {
    if (x.length) answer.push(x)
  }
  return answer.sort();
}