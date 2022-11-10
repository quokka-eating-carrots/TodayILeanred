// 카드 가져가기

function solution (nums, k) {
  let answer = 0
  for (let i = 0; i < k; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (nums[j] > nums[nums.length - 1]) {
        answer += nums[j];
      } else
        answer += nums[nums.length - 1];
    }
  }
  return answer
}

console.log(solution([2, 3, 7, 1, 2, 1, 5], 4))