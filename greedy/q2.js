// 선 긋기
function solution(nums) {
  let answer = 0
  nums.sort((a, b) => a[0] - b[0])
  let s = nums[0][0]
  let e = nums[0][1]
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i][0] <= e && nums[i][1] > e ) {
      e = nums[i][1]
    } else if (nums[i][0] > e) {
      answer += (e - s)
      s = nums[i][0]
      e = nums[i][1]
    }
  }
  answer += (e - s)
  return answer
}

console.log(solution([[1, 3], [2, 5], [7, 10]]))
// console.log(solution([[1, 3], [2, 5], [3, 4], [7, 9], [6, 9]]))
// console.log(solution([[1, 3], [3, 7], [2, 3], [2, 9], [10, 12]]));