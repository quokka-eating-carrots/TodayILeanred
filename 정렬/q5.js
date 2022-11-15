function solution (nums, k) {
  let answer = 0
  nums.sort((a, b) => b - a)
  let diff = []
  for (let i = 1; i < nums.length; i += 2) {
    answer += nums[i]
    diff.push(nums[i - 1] - nums[i])
  }
  diff.sort((a, b) => b - a)
  for (let i = 0; i < k; i += 1) {
    answer += diff[i]
  }
  return answer
}

console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2))
console.log(solution([8, 2, 12, 12, 12, 12, 2, 2], 2))