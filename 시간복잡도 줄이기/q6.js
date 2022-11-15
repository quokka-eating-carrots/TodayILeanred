function solution(n) {
  let answer = 0
  let nums = []
  for (let i = 1; i <= parseInt(n / 2) + 1; i += 1) {
    nums.push(i)
  }
  let sum = 0
  let left = 0
  for (let right = 0; right < nums.length; right += 1) {
    sum += nums[right]
    while (sum > n) {
      sum -= nums[left++];
    }
    if (sum === n) answer += 1
  }
  return answer
}

console.log(solution(15))