function solution (nums) {
  let answer = []
  for (let i = 0; i < nums.length - 1; i += 1) {
    let tmp = nums[i]
    let j;
    for (j = i - 1; j >= 0; j -= 1) {
      if (nums[j]> tmp) nums[j + 1] = nums[j]
      else break;
    }
    nums[j + 1] = tmp
  }
  answer = nums
  return answer
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9]))