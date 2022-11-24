function solution(nums) {
  let answer = 0
  nums.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return b[0] - a[0]
    }
  })
  let maxW = 0
  for (let [h, w] of nums) {
    if (w > maxW) {
      maxW = w
      answer += 1
    }
  }
  return answer
}

console.log(solution([[172, 67], [183, 65], [180, 70], [170, 72], [181, 60]]))