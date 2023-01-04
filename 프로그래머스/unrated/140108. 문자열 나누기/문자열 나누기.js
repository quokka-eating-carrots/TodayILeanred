function solution(s) {
  let answer = 0
  let firstS = ''
  let sameCnt = 0
  let diffCnt = 0
  for (let x of s) {
    if (!firstS) firstS = x
    if (firstS === x) sameCnt += 1
    else diffCnt += 1

    if (sameCnt === diffCnt) {
      answer += 1
      sameCnt = 0
      diffCnt = 0
      firstS = ''
    }
  }

  if (firstS) answer += 1
  return answer;
}