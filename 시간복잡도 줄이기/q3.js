function solution(nums, m) {
  let answer = 0
  let left = 0
  let sum = 0
  for (let right = 0; right < nums.length; right += 1) {
    sum += nums[right];
    while(sum > m) {
      sum -= nums[left]
      left += 1;
    }
    if (sum === m) answer += 1;
  }
  return answer
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6))
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3))