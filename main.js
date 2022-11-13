// 배열 유사도
// function solution(s1, s2) {
//   let answer = 0;
//   for (let x of s1) {
//     for (let y of s2) {
//       if (x === y) {
//         answer += 1
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(['a', 'b', 'c'], ['com', 'b', 'd', 'p', 'c']))
// console.log(solution(['n', 'omg'], ['m', 'dot']))

// 순서쌍의 개수
// function solution(n) {
//   let answer = 0;
//   for (let i = 0; i <= n; i += 1) {
//     if (n % i === 0) answer += 1
//   }
//   return answer;
// }

// console.log(solution(20))
// console.log(solution(100))

// 자릿수 더하기
// function solution(n) {
//   let answer = 0;
//   n = n.toString().split('')
//   for (let x of n) {
//     answer += Number(x)
//   }
//   return answer;
// }

// console.log(solution(1234))
// console.log(solution(930211))

// 문자열 안에 문자열
function solution(str1, str2) {
  let answer = 0;
  if (str1.includes(str2)) {
    answer = 1
  } else answer = 2
  return answer;
}

console.log(solution('ab6CDE443fgh22iJKlmn1o', '6CD'))
console.log(solution('ppprrrogrammers', 'pppp'))