// 이동 횟수
function solution(nums) {
  let answer = 0
  nums.sort((a, b) => a - b)
  let left = 0, right = nums.length
  while(left <= right) {
    if (nums[left] + nums[right] <= 5) {
      answer += 1
      left += 1
      right -= 1
    } else {
      right -= 1
    }
  }
  answer = nums.length - (answer * 2) + answer
  return answer
}

console.log(solution([2, 5, 3, 4, 2, 3]))
console.log(solution([2, 3, 4, 5]))
console.log(solution([3, 3, 3, 3, 3]))