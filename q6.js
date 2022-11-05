function solution(s) {
  let answer = '';
  s = s.sort()
  for (let i = 0; i < s[0].length; i += 1) {
    let set = new Set();
    for (let x of s) {
      set.add(x[i])
    }
    if (set.size === 1) {
      answer += s[0][i]
    } else {
      break;
    }
  }
  return answer
}

console.log(solution(["longtime", "long", "longest"]))
console.log(solution(['abc', 'abcd', 'abcdef']))