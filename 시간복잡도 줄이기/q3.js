// 부분 수열

function solution (nums, m) {
  let answer = 0
  let sum = 0
  let left = 0
  for (let x of nums) {
    sum += x
    while (sum > m) {
      sum -= nums[left];
      left += 1;
    }
    if (sum === m) {
      answer += 1
    }
  }
  return answer
}

console.log(solution([1, 1, 2, 1, 3, 1, 1, 1, 2], 6))
console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6))
console.log(solution([1, 1, 1, 1, 1, 1, 3], 3))
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3))
console.log(solution([5, 5, 5], 5))