function solution(s) {
  let answer = 'YES'
  let stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x)
    else {
      if (stack.length === 0) answer = 'NO'
      stack.pop()
    }
  }
  if (stack.length > 0) answer = 'NO'
  return answer;
}

console.log(solution('(())()'))
console.log(solution('(()(()'))
console.log(solution('()())'))
console.log(solution('())('))