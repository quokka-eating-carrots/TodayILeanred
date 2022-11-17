function solution (nums) {
  let answer = Array(nums.length).fill(0)
  for(let i = 0; i < nums.length - 1; i += 1) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] < nums[minIndex]) minIndex = j
    }
    if (i !== minIndex) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
      answer[i] += 1
      answer[minIndex] += 1
    }
  }
  return answer
}

console.log(solution([5, 4, 2, 1, 3]))