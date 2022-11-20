// 바이토닉 수열
function solution(nums) {
  let answer = 'YES'
  let max = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (max < nums[i]) {
      max = nums[i]
    }
    if (nums[i] === nums[i + 1]) return answer = 'NO'
  }
  if (max === nums[nums.length - 1]) answer = 'NO'
  // let right = nums.length - 1
  return answer
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]))
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]))
console.log(solution([1, 2, 3, 4, 5]))