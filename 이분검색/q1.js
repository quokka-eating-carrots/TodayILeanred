function solution (nums, m) {
  let answer = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === m) {
      answer = i + 1
    }
  }
  return answer
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))