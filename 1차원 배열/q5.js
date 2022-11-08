// 키보드

function solution(s, k) {
  let cnt = 0;
  let set = new Set(s.toLowerCase())
  for (let x of s) {
    if (x.charCodeAt() >= 65 && x.charCodeAt() <= 90) cnt = 1
  }
  return set.size + cnt === k ? true : false
}

console.log(solution('teacher', 6))
console.log(solution('Teacher', 6))
console.log(solution('TeacHer', 7))
console.log(solution('LifeisGood', 8))
console.log(solution('Gabg', 4))