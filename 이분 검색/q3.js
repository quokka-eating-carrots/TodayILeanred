function solution(nums, h) {
  let answer = 0
  let left = 1
  let right = Math.max(...nums)
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (count(mid) <= h) {
      answer = mid
      right = mid - 1
    } else left = mid + 1
  }
  function count(h) {
    let cnt = 0
    nums.forEach(e => {
      cnt += Math.ceil(e / h)
    })
    return cnt
  }
  return answer
}

console.log(solution([29, 12, 24, 5, 19], 6))
console.log(solution([12, 24, 15, 7, 9], 8))