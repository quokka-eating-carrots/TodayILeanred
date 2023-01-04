// 문자열 나누기
// function solution(s) {
//   let answer = 0
//   let sameCnt = 0
//   let diffCnt = 0
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[0] === s[i]) {
//       console.log(i)
//       sameCnt += 1
//     } else {
//       diffCnt += 1
//     }
//     if (sameCnt === diffCnt) {
//       answer += 1
//       sameCnt = 0
//       diffCnt = 0
//       s = s.slice(i + 1)
//       console.log(s)
//       i = -1
//     }
//   }
//   return answer;
// }

console.log(solution("banana"))
console.log(solution("abracadabra"))
console.log(solution("aaabbaccccabba"))
console.log(solution("aaa"))

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