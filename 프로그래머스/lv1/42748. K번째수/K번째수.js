function solution(array, commands) {
  let answer = [];
  for (let x of commands) {
    const newArr = array.slice(x[0] - 1, x[1]);
    newArr.sort((a, b) => a - b);
    answer.push(newArr[x[2] - 1]);
  }
  return answer;
}
