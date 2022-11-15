function solution (nums) {
  let answer = []
  for (let i = 0; i < nums.length - 1; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] < nums[minIndex]) minIndex = j;
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
    }
  }
  answer = nums
  return nums
}

console.log(solution([2, 8, 3, 6, 1, 7, 5, 9]))
console.log(solution([7, 6, 10, 9, 8]))