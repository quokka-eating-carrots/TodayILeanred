function solution(s, k) {
  let answer = true
  let cnt = 0
  for (let x of s) {
    if (x === x.toUpperCase()) cnt = 1
  }
  s = s.toLowerCase()
  const set = new Set(s)
  cnt += set.size
  if (cnt > k) {
    answer = false
  }
  return answer
}

console.log(solution('teacher', 6))
console.log(solution('Teacher', 6))
console.log(solution('TeacHer', 7))
console.log(solution('LifeisGood', 8))
console.log(solution('Gabg', 4))