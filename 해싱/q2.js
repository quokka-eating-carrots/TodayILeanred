// 한번 사용한 최초 문자
function solution (s) {
  let answer = ''
  let map = new Map()
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let letter = []
  for (let [k, v] of map) {
    if (v === 1) {
      letter.push(k)
    }
  }
  if (letter.length > 0) {
    answer = s.indexOf(letter[0]) + 1
  } else answer = -1
  return answer
}

console.log(solution('statitsics'))
console.log(solution('aabb'))
console.log(solution('stringshowtime'))