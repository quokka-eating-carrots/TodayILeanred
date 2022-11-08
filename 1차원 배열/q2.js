// 점수 계산
function solution(nums) {
  let answer = 0;
  let cnt = 0;
  for (let x of nums) {
    if (x === 1) {
      cnt += 1
      answer += cnt
    }
    if (x === 0) {
      cnt = 0
    }
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]))
console.log(solution([1, 1, 1, 1, 1, 0, 1]))
console.log(solution([0, 1, 0, 1, 0, 1, 1, 1]))
console.log(solution([0, 0, 0, 0, 0]))
console.log(solution([1, 0, 0, 0, 1]))