function solution(s) {
  if (s.length === 1 || s[0] === ")") return false
  let cnt = 0
  for (let x of s) {
    x === "(" ? cnt += 1 : cnt -= 1
    if (cnt < 0) break;
  }
  return cnt === 0 ? true : false
}