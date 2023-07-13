function solution(arr) {
  var answer = 0;
  let resultArr = [...arr];
  while (true) {
    const changeArr = resultArr.map((a) => {
      if (a >= 50 && a % 2 === 0) return a / 2;
      if (a < 50 && a % 2 === 1) return a * 2 + 1;
      return a;
    });
    const isAllSame = resultArr.every((a, i) => a === changeArr[i]);
    if (isAllSame) break;
    answer += 1;

    resultArr = changeArr;
  }
  return answer;
}