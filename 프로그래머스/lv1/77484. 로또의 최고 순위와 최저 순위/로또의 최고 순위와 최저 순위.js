function solution(lottos, win_nums) {
  var answer = [];
  let zero = 0;
  for (let x of lottos) {
    if (x === 0) zero += 1;
  }
  let cnt = 0;
  lottos.forEach((num) =>
    win_nums.forEach((winNum) => num === winNum && (cnt += 1))
  );
  answer.push(7 - (cnt + zero) === 7 ? 6 : 7 - (cnt + zero));
  answer.push(7 - cnt === 7 ? 6 : 7 - cnt);
  return answer;
}