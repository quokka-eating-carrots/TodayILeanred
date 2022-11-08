//바이토닉 수열
function solution(nums) {
  let answer = 'YES'
  let leng = nums.length
  let i = 0
  
  while(i < leng - 1 && nums[i] < nums[i + 1]) i += 1
  if (i === 0 || i === leng - 1) {
    answer = 'NO'
  }

  while(nums[i] > nums[i + 1]) i += 1
  if (i !== leng - 1) {
    answer = 'NO'
  }
  return answer
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]))
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]))
console.log(solution([1, 2, 3, 4, 5]))