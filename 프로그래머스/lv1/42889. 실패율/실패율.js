function solution(N, stages) {
  let answer = [];
  for (let i = 1; i <= N; i += 1) {
    const playReached = stages.filter((player) => player >= i).length;
    const playerChallenging = stages.filter((player) => player === i).length;
    answer.push([i, playerChallenging / playReached]);
  }
  answer.sort((a, b) => b[1] - a[1]);
  return answer.map((stage) => stage[0]);
}