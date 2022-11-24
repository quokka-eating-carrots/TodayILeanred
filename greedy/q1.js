function solution(nums, m) {
  let answer = 0
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[left] + nums[right] > m) {
      answer += 1
      right -= 1
    } else {
      answer += 1
      left += 1
      right -= 1
    }
  }
  return answer
} 

console.log(solution([90, 50, 70, 100, 60], 140))
console.log(solution([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150))
console.log(solution([68, 72, 30, 105, 55, 115, 36, 67, 119, 111, 95, 24, 25, 80, 55, 85, 75, 83, 21, 81], 120))