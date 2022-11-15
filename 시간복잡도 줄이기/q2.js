// 카드 가져가기

function solution(nums, k) {
  let answer = 0
  let len = nums.length - k
  let sum1 = 0
  let totalSum = 0;
  for (let x of nums) {
    totalSum += x
  }
  for (let i = 0; i < len; i += 1) {
    sum1 += nums[i]
  }
  let left = 0
  let sum2 = sum1
  for (let right = len; right < nums.length; right += 1) {
    sum1 += (nums[right] - nums[left])
    sum2 = Math.min(sum1, sum2)
    left += 1
  }
  return answer = totalSum - sum2;
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4))
console.log(solution([1, 30, 5, 6, 7], 3))
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5))