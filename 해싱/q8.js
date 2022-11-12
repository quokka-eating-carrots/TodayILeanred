// 팰린드롬 분할
// function solution (s, k) {
//   let answer = ''
//   let map = new Map()
//   for (let x of s) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   let tmp = '';
//   for (let [k, v] of map) {
//     if (v % 2 === 1) {
//       tmp += k
//     }
//   }
//   if (tmp.length === k) {
//     answer = true
//   } else answer = false
//   return answer
// }

console.log(solution('abbccee', 2))
console.log(solution('abcabcabcca', 3))
console.log(solution('abcabcabc', 2))

function solution(s, k) {
  if (s.length < k) return false;
  let answer = 0;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  for (let [k, v] of map) {
    if (v % 2 === 1) answer += 1;
  }
  return answer <= k
}