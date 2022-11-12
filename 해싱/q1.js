// 학급 회장
function solution (s) {
  let answer = ''
  let map = new Map()
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let max = 0
  for (let [k, v] of map) {
    if (v > max) {
      max = v
      answer = k
    }
  }
  return answer
}

console.log(solution('BACBACCACCBDEDE'))
console.log(solution('AAAAABBCCDDDD'))