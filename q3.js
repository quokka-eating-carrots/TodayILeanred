function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase()
    }
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase()
    }
  }
  return answer;
}

console.log(solution('StuDY'))
console.log(solution('TeachER'))
console.log(solution('Good'))
