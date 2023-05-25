function solution(myStr) {
  let answer = [];
  const emptyAnswer = ["EMPTY"];
  const divA = myStr.split("a");
  const divB = [];
  for (let x of divA) {
    divB.push(...x.split("b"));
  }
  for (let x of divB) {
    answer.push(...x.split("c"));
  }

  return answer.filter((i) => i.length !== 0).length
    ? answer.filter((i) => i.length !== 0)
    : emptyAnswer;
}