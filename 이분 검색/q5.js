function solution(stables, c) {
  let answer = 0
  stables.sort((a, b) => a - b)
  let left = 1
  let right = Math.max(...stables)
  function count(stable, dist) {
    let cnt = 1
    let ep = stable[0]
    for (let i = 1; i < stable.length; i += 1) {
      if (stable[i] - ep >= dist) {
        cnt += 1
        ep = stable[i]
      }
    }
    return cnt
  }
  while (left <= right) {
    let mid = parseInt((left + right) / 2)
    if (count(stables, mid) >= c) {
      answer = mid
      left = mid + 1
    } else right = mid - 1
  }
  return answer
}

console.log(solution([1, 2, 8, 4, 9], 3))