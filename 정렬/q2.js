// 이진수 정렬
function solution(nums) {
  let answer = []
  let pair = []
  nums.forEach(e => {
    let tmp = e
    let cnt = 0
    while (tmp > 0) {
      cnt += (tmp % 2)
      tmp = parseInt(tmp / 2)
    }
    pair.push([e, cnt])
  })
  pair.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    else return a[1] - b[1]
  })
  for (let [x, y] of pair) {
    answer.push(x)
  }
  return answer
}

console.log(solution([5, 6, 7, 8, 9]))
console.log(solution([5, 4, 3, 2, 1]))