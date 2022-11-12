// 서로 다른 빈도수 만들기
// function solution (s) {
//   let answer = ''
//   return answer
// }

console.log(solution('aaabbc'))
console.log(solution('aebbbbc'))
console.log(solution('aaabbbcc'))

function solution(s) {
  let answer = 0;
  let map = new Map();
  let set = new Set();
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  for (let [k, v] of map) {
    while (set.has(v)) {
      answer += 1
      v -= 1
    }
    if (v === 0) continue;
    set.add(v)
  }
  return answer
}