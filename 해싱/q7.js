// 팰린드롬 확인
function solution (s) {
  let answer = ''
  let map = new Map()
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let tmp = '';
  for (let [k, v] of map) {
    if (v % 2 === 1) {
      tmp += k
    }
  }
  if (tmp.length === 1) {
    answer = true
  } else answer = false
  return answer
}

console.log(solution('abbac'))
console.log(solution('abcbbbe'))
console.log(solution('ccccc'))