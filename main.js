// 가운데 글자 가져오기
// function solution(s) {
//   let answer = '';
//   if (s.length % 2 === 0) {
//     answer += s[(s.length / 2) - 1]
//     answer += s[s.length / 2]
//   } else answer += s[parseInt(s.length / 2)]
//   return answer;
// }

// console.log(solution('abcde'))
// console.log(solution('qwer'))

// 수박수박수박수박수박수?
// function solution(n) {
//   var answer = '';
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 2 !== 0) {
//       answer += '수'
//     } else answer += '박'
//   }
//   return answer;
// }

// console.log(solution(3))
// console.log(solution(4))

// 내적
// function solution(a, b) {
//   var answer = 0;
//   for (let i = 0; i < a.length; i += 1) {
//     answer += (a[i] * b[i])
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]))
// console.log(solution([-1, 0, 1], [1, 0, -1]))

// 문자열 내림차순으로 배치하기
function solution(s) {
  var answer = '';
  answer = s.split('').sort().reverse().join('')
  return answer;
}

console.log(solution("Zbcdefg"))