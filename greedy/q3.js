function solution(times) {
  let answer = 0
  times.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else return a[1] - b[1]
  })
  let et = 0
  for (let x of times) {
    if (x[0] >= et) {
      answer += 1
      et = x[1]
    }
  }
  return answer
}

console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]))
console.log(solution([[3, 3], [1, 3], [2, 3]]))
console.log(solution([[1, 2], [2, 3], [3, 4], [4, 7], [5, 6], [6, 7]]))