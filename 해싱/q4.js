// 빈도수가 1인 가장 큰 숫자
function solution (s) {
  let answer = ''
  let map = new Map()
  for (let x of s) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  let nums = []
  for (let [k, v] of map) {
    if (v === 1) {
      nums.push(k)
    }
  }
  if (nums.length > 0) {
    answer = Math.max(...nums)
  } else answer = -1
  return answer
}

console.log(solution([1, 1, 2, 2, 3, 4, 5, 7, 7]))
console.log(solution([3, 8, 3, 3, 5, 1, 1, 1, 7, 2, 2]))
console.log(solution([1, 1, 2, 2, 3, 3]))