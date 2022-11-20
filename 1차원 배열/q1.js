// 보이는 학생
function solution(nums) {
  let answer = 0
  let max = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (max < nums[i]) {
      max = nums[i]
      answer += 1
    }
  }
  return answer
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]))
console.log(solution([1, 2, 3, 4, 5]))
console.log(solution([5, 4, 3, 2, 1]))
console.log(solution([7, 7, 7, 7, 7, 7, 7]))
console.log(solution([7, 7, 7, 9, 9, 9, 12]))