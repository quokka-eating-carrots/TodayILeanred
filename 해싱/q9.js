// 팰린드롬 길이
// function solution (s) {
//   let answer = ''
//   let map = new Map()
//   for (let x of s) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   let tmp = []
//   for (let [k, v] of map) {
//     if (v % 2 === 1)
//     tmp.push(k)
//   }
//   if (tmp.length === 0 || tmp.length === 1) {
//     answer = s.length
//   } else answer = 1
//   return answer
// }

console.log(solution('abcbbbccaa'))
console.log(solution('abcde'))
console.log(solution('ccc'))


function solution(s) {
  let answer = 0;
  let map = new Map();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  for (let [k, v] of map) {
    if (v % 2 === 1) answer += 1;
  }
  return answer > 0 ? s.length - answer + 1 : s.length;
}