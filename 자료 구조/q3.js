function solution (s) {
  let answer = ''
  let stack = []
  for (let i = 0; i < s.length; i += 1) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return answer = stack.join('')
}

console.log(solution('acbbcaa'))
console.log(solution('bacccaba'))
console.log(solution('aabaababbaa'))
console.log(solution('bcaacccbaabccabbaa'))