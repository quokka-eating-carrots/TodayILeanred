// function solution(nums, k) {
//   let answer = 0
//   nums.sort((a, b) => a - b)
//   answer = nums.indexOf(k) + 1
//   return answer
// }

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32))

function solution(nums, k) {
  let answer = 0
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (nums[mid] > k) {
      right = mid - 1
    } else left = mid + 1
    if (nums[mid] === k) return answer = mid + 1
  }
  return answer
}