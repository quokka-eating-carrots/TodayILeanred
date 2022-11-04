function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase())
      answer += 1
  }
  return answer;
}

console.log(solution('KoreaTimeGood'))
console.log(solution('ITISTIMETOGO'))
console.log(solution('TeacherisMyfriEnd'))