function solution(answers) {
  let answer = [];
  const per1 = [1, 2, 3, 4, 5];
  const per2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const per3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let per1Score = 0,
    per2Score = 0,
    per3Score = 0;

  for (let i = 0; i < answers.length; i += 1) {
    // 1번 사람 점수
    if (i >= per1.length) {
      const divNum = parseInt(i / per1.length);
      if (per1[i - per1.length * divNum] === answers[i]) per1Score += 1;
    } else if (i < per1.length && per1[i] === answers[i]) {
      per1Score += 1;
    }

    // 2번 사람 점수
    if (i >= per2.length) {
      const divNum = parseInt(i / per2.length);
      if (per2[i - per2.length * divNum] === answers[i]) per2Score += 1;
    } else if (i < per2.length && per2[i] === answers[i]) {
      per2Score += 1;
    }

    // 3번 사람 점수
    if (i >= per3.length) {
      const divNum = parseInt(i / per3.length);
      if (per3[i - per3.length * divNum] === answers[i]) per3Score += 1;
    } else if (i < per3.length && per3[i] === answers[i]) {
      per3Score += 1;
    }
  }

  const max = Math.max(per1Score, per2Score, per3Score);

  if (per1Score === max) {
    answer.push(1);
  }
  if (per2Score === max) {
    answer.push(2);
  }
  if (per3Score === max) {
    answer.push(3);
  }
  return answer;
}