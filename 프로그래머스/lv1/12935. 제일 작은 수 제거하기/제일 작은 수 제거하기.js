function solution(arr) {
  let answer = [];
  const minNum = Math.min(...arr);
  for (let x of arr) {
    if (x !== minNum) {
      answer.push(x);
    }
  }
  return answer.length ? answer : [-1];
}