function solution (cost, m) {
  let answer = 0;
  let left = 0
  let cnt = 0
  for (let right = 0; right < cost.length; right += 1) {
   if (cost[right] === 0) cnt += 1;
   while(cnt > m) {
    if (cost[left] === 0) cnt -= 1;
    left += 1
   }
   answer = Math.max(answer, right - left + 1)
  }
  return answer
}

console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], 2))
console.log(solution([1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1], 3))
console.log(solution([0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1], 5))
console.log(solution([1, 1, 0, 0, 1, 1, 0], 3))