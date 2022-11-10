function solution (n) {
  let answer = 0
  let sum = 0
  let left = 0
  let m = parseInt(n / 2) + 1
  let nums = Array.from({length: m}, (v, i) => i + 1)
  for (let i = 0; i < m; i += 1) {
    sum += nums[i]
    while (sum > n) {
      sum -= nums[left]
      left += 1
    }
    if (sum === n) answer += 1
  }
  return answer
}

console.log(solution(15))