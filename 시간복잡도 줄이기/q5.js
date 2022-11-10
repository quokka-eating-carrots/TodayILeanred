function solution (nums, k) {
  let answer = 0
  let left = cnt = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) cnt += 1
    while (cnt > k) {
      if (nums[left] === 0)
      cnt -= 1;
      left += 1;
    }
    answer = Math.max(answer, i - left + 1)
  }
  return answer
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2))