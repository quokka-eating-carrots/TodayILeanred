function solution(s) {
  let answer = 'YES'
  s = s.toUpperCase();
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] !== s[s.length - i - 1])
      answer = 'NO'
  }
  return answer
}

console.log(solution('gooG'))
console.log(solution('Moon'))

function solution(s) {
  let answer = 'NO'
  s = s.toUpperCase();
  for (let i = 0; i < s.length / 2; i += 1) {
    if (s[i] === s[s.length - i - 1]) {
      answer = 'YES'
    } else {
      return answer;
    }
  }
  return answer
}
// if문에서 === 했을 때 답을 내고 싶어서 찾은 방법