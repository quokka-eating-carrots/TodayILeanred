function solution(nums) {
  let answer = []
  let pair = []
  nums.forEach(e => {
    let cnt = 0
    let tmp = e
    while (tmp > 0) {
      cnt += (tmp % 2)
      tmp = parseInt(tmp / 2)
    }
    pair.push([cnt, e])
  })
  console.log(pair)
  return answer
}

console.log(solution([5, 6, 7, 8, 9]))