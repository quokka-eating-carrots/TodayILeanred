// 수열의 경우 수
function solution(nums) {
  let answer = 0
  let peak = []
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] > nums[i + 1] && nums[i - 1] < nums[i]) {
      peak.push(i)
    }
  }
  for (let p of peak) {
    let leftLen = 0
    let left = p
    while(nums[left - 1] < nums[left]) {
      left -= 1
      leftLen += 1
    }
    let right = p
    let rightLen = 0
    while(nums[right] > nums[right + 1]) {
      right += 1
      rightLen += 1
    }
    answer += leftLen * rightLen
  }
  return answer
}

console.log(solution([1, 3, 2, 5, 7, 4, 2, 5, 1]))
console.log(solution([1, 2, 3, 4, 5, 3, 2, 1]))
console.log(solution([1, 1, 3, 1, 2, 1, 3, 5, 6, 7, 2, 1]))