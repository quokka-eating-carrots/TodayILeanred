// 최대 매출

function solution(nums, k) {
  let answer = 0
  let sum = 0
  for (let i = 0; i < k; i += 1) {
    sum += nums[i]
  }
  let left = 0;
  answer = sum
  for (let right = k; right < nums.length; right += 1) {
    sum += (nums[right] - nums[left])
    answer = Math.max(answer, sum)
    left += 1
  }
  return answer;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3))
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5))
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4))