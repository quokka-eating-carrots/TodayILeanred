function solution(nums) {
  let answer = 0;
  let peak = []
  for (let i = 1; i < nums.length - 1; i += 1) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      peak.push(i)
    }
  }
  for (let p of peak) {
    let left = p
    let right = p
    let lcnt = 0
    let rcnt = 0
    while(left > 0 && nums[left - 1] < nums[left]) {
      lcnt += 1
      left -= 1
    }
    while(right < nums.length - 1 && nums[right] > nums[right + 1]) {
      rcnt += 1
      right += 1
    }
    answer += (lcnt * rcnt)
  }
  return answer
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]))
console.log(solution([1, 2, 3, 4, 5, 3, 2, 1]))
console.log(solution([1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1]))