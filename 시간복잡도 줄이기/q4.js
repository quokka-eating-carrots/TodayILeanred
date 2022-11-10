// 공사비용

function solution (cost, m) {
  let answer = 0
  let sum = 0
  let left = 0
  for(let i = 0; i < cost.length; i += 1) {
    sum += cost[i]
    while(sum > m) {
      sum -= cost[left];
      left += 1;
    }
    answer = Math.max(answer, i - left + 1)
  }
  return answer
}

console.log(solution([0, 150, 100, 0, 150, 0, 70, 140], 350))