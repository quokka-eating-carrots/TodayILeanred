function solution(nums, m) {
  let answer = []
  let n = nums.length
  let ch = Array.from({length: n}, () => 0)
  let tmp = []
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice())
    } else {
      for (let i = 0; i < n; i += 1) {
        if (ch[i] === 0) {
          ch[i] = 1
          tmp.push(nums[i])
          DFS(L + 1)
          ch[i] = 0
          tmp.pop()
        }
      }
    }
  }
  DFS(0)
  return answer
}

console.log(solution([3, 6, 9], 2))