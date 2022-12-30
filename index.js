// 신규 아이디 추천
// function solution(new_id) {
//   let answer = '';
//   new_id = new_id.toLowerCase()
//   new_id = new_id.match(/\w|[-\.]/g, '').join('')
//   new_id = new_id.replace(/\.{2,}/g, '.')
//   function dotRemove() {
//     if (new_id[0] === '.') {
//       new_id = new_id.split('')
//       new_id.shift()
//       new_id = new_id.join('')
//     } else if (new_id.at(-1) === '.') {
//       new_id = new_id.split('')
//       new_id.pop()
//       new_id = new_id.join('')
//     }
//   }
//   dotRemove()
//   if (new_id.length === 0) {
//     new_id = "a"
//   }
//   if (new_id.length >= 16) {
//     new_id = new_id.slice(0, 15)
//     dotRemove()
//   }
//   if (new_id.length <= 2) {
//     answer += new_id
//     while (answer.length < 3) {
//       answer += new_id.at(-1)
//     }
//   } else {
//     answer = new_id
//   }
//   return answer;
// }

console.log(solution("...!@BaT#*..y.abcdefghijklm"))
console.log(solution("z-+.^."))
console.log(solution("=.="))
console.log(solution("123_.def"))
console.log(solution("abcdefghijklmn.p"))
console.log(solution("a.$.a"))
console.log(solution(".................."))

function solution(new_id) {
  let answer = ''
  answer = new_id
    .toLowerCase()
    .replace(/[^\w-\.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.{1,}|\.{1,}$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/^\.{1,}|\.{1,}$/, '')

  answer = answer.padEnd(3, answer[answer.length - 1])
  return answer
}