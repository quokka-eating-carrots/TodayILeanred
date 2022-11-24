function solution(nums) {
  let answer = 0
  let left = 1
  let right = 0
  let sum = 0
  nums.forEach(num => {
    right = Math.max(right, Math.max(...num))
    num.forEach(e => sum += e)
  })
  function count(mid) {
    let cnt = 0
    for (let i = 0; i < nums.length; i += 1) {
      for (let j = 0; j < nums.length; j += 1) {
        if (nums[i][j] >= mid) cnt += mid
        else cnt += nums[i][j]
      }
    }
    return cnt
  }
  while(left <= right) {
    let mid = parseInt((left + right) / 2)
    if (count(mid) >= (sum / 2)) {
      answer = mid
      right = mid - 1
    } else left = mid + 1
  }
  return answer
}

console.log(solution([[2, 3, 1, 5, 6], 
  [3, 0, 7, 4, 3],
  [8, 5, 7, 5, 6],
  [9, 6, 1, 5, 5],
  [5, 5, 8, 5, 1]]))