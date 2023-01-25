// 영어 끝말잇기
// function solution(n, words) {
//   let answer = [];
//   let cnt = 0
//   for (let i = 0; i < words.length; i += 1) {
//     if (words.slice(0, i).includes(words[i])) break;
//     if (words[i].length < 2) break;
//     if (i < words.length - 1) {
//       if (words[i[words[i].length - 1]] !== words[i + 1][0])
//         cnt += 1
//     }
//     cnt += 1
//   }
//   if (cnt > words.length) {
//     answer = [0, 0]
//   } else {
//     answer[0] = cnt % n == 0 ? n : cnt % n
//     answer[1] = Math.ceil(cnt / n)
//   }
//   return answer;
// }

function solution(n, words) {
  let answer = 0
  words.reduce((prev, now, idx) => {
    answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer)
    return now[now.length - 1]
  }, "")
  return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0]
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))