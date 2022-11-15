function solution (nums) {
  let answer = []
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      }
    }
  }
  answer = nums
  return answer
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9]))