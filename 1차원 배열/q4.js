function solution(nums) {
  let answer = [];
  let peak = [];
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak.push(i)
    }
  }
  for (let p of peak) {
    let len = 1;
    let left = p;
    while (nums[left - 1] < nums[left]) {
      left -= 1;
      len += 1;
    }
    let right = p;
    while (nums[right] > nums[right + 1]) {
      right += 1
      len += 1
    }
    answer.push(len)
  }
  return Math.max(...answer)
}
console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]))
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(solution([1, 2, 3, 4, 5, 2, 1]))
console.log(solution([1, 2, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1]))
console.log(solution([1, 2, 1 ,2, 1, 2, 1, 2, 1, 2, 1]))