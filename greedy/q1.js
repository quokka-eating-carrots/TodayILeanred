// 침몰하는 타이타닉
function solution(nums, m) {
  let answer = 0
  let left = 0, right = nums.length - 1
  nums.sort((a, b) => a - b)
  while(left <= right) {
    if (nums[left] + nums[right] <= m ) {
      answer += 1
      left += 1
      right -= 1
    } else {
      answer += 1
      right -= 1
    }
  }
  return answer
}

console.log(solution([90, 50, 70, 100, 60], 140))
console.log(solution([86, 95, 107, 67, 38, 49, 116, 22, 78, 53], 150))