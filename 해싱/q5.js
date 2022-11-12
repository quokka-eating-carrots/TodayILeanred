// 자기 분열수
function solution (nums) {
  let answer = ''
  let map = new Map()
  for (let x of nums) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let num = []
  for (let [k, v] of map) {
    if (k === v) {
      num.push(k)
    }
  }
  if (num.length > 0) {
    answer = Math.min(...num)
  } else answer = -1
  return answer
}

console.log(solution([1, 2, 3, 1, 3, 3, 2, 4]))
console.log(solution([1, 2, 3, 3, 3, 2, 4, 5, 5, 5]))
console.log(solution([1, 2, 5, 5, 5, 5, 5, 3, 3, 3]))
console.log(solution([1, 1, 2, 3, 4]))