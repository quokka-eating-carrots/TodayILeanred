function solution (nums) {
  let answer = []
  let pair = []
  nums.forEach(e => {
    let cnt = 0
    let tmp = e
    while(tmp > 0) {
      cnt += (tmp % 2)
      tmp = parseInt(tmp / 2)
    }
    pair.push([cnt, e])
  })
  pair.sort((a, b) => a[0] - b[0])
  for (let [a, b] of pair) {
    answer.push(b)
  }
  return answer
}

console.log(solution([5, 6, 7, 8, 9]))