function solution(nums, h) {
  let answer = 0
  function count(k) {
    let cnt = 0
    for (let x of nums) {
      cnt += Math.ceil(x / k)
    }
    return cnt
  }
  let lt = 1
  let rt = Math.max(...nums)
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2)
    if (count(mid) <= h) {
      answer = mid;
      rt = mid - 1
    } else lt = mid + 1
  }
  return answer
}

console.log(solution([29, 12, 24, 5, 19], 6))