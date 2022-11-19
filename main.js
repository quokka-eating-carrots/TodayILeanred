// 중복된 문자 제거
// function solution(my_string) {
//   let answer = '';
//   const set = new Set(my_string)
//   for (let x of set) {
//     answer += x
//   }
//   return answer;
// }

// console.log(solution('people'))
// console.log(solution('We are the world'))

// 모스 부호(1)
// function solution(letter) {
//   const morse = { 
//     '.-':'a',
//     '-...':'b',
//     '-.-.':'c',
//     '-..':'d',
//     '.':'e',
//     '..-.':'f',
//     '--.':'g',
//     '....':'h',
//     '..':'i',
//     '.---':'j',
//     '-.-':'k',
//     '.-..':'l',
//     '--':'m',
//     '-.':'n',
//     '---':'o',
//     '.--.':'p',
//     '--.-':'q',
//     '.-.':'r',
//     '...':'s',
//     '-':'t',
//     '..-':'u',
//     '...-':'v',
//     '.--':'w',
//     '-..-':'x',
//     '-.--':'y',
//     '--..':'z'
//   }
//   let answer = '';
//   letter = letter.split(' ')
//   for (let x of letter) {
//     for (let key in morse) {
//       if (x === key) {
//         answer += morse[key]
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution('.... . .-.. .-.. ---'))
// console.log(solution(".--. -.-- - .... --- -."))

// 팩토리얼
// function solution(n) {
//   let answer = 0;
//   let cnt = 1
//   for (let i = 1; i <= 10; i += 1) {
//     cnt = cnt * i
//     if (cnt <= n) {
//       answer = i
//     }
//   }
//   return answer;
// }

// console.log(solution(3628800))
// console.log(solution(7))

// A로 B 만들기
function solution(before, after) {
  let answer = 0;
  before = before.split('').sort().join('')
  after = after.split('').sort().join('')
  if (before === after) {
    answer = 1
  } else answer = 0
  return answer;
}

console.log(solution('olleh', 'hello'))
console.log(solution('allpe', 'apple'))