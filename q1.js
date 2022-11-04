function solution(s, c) {
  let answer = 0;
  for (let x of s) {
    if (x === c) {
      answer += 1
    }
  }
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'))
console.log(solution('IT IS TIME TO GO', 'E'))
console.log(solution('TEACHER', 'E'))