// 카드 가져가기
function solution(nums, k) {
  let answer = 0
  let pair = []
  nums.sort((a, b) => b - a)
  for (let i = 1; i < nums.length; i += 2) {
    answer += nums[i]
    pair.push(nums[i - 1] - nums[i])
  }
  pair.sort((a, b) => b - a)
  for (let i = 0; i < k; i += 1) {
    answer += pair[i]
  }
  return answer
}

console.log(solution([7, 8, 5, 9, 3, 1, 3, 1, 1, 9], 2))
console.log(solution([8, 2, 12, 12, 12, 12, 2, 2], 2))