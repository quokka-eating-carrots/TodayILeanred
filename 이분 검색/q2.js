function solution(nums, k) {
  let answer = 0
  let left = 1
  let right = Math.max(...nums)
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (count(mid) >= k) {
      answer = mid
      left = mid + 1
    } else right = mid - 1
  }
  function count(len) {
    let cnt = 0
    nums.forEach(e => {
      cnt += Math.floor(e / len)
    })
    return cnt
  }
  return answer;
}

console.log(solution([802, 743, 457, 539], 11))