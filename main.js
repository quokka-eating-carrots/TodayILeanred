// 세균 증식
// function solution(n, t) {
//   let answer = n;
//   for (let i = 0; i < t; i += 1) {
//     answer = answer * 2
//   }
//   return answer;
// }

// console.log(solution(2, 10))
// console.log(solution(7, 15))

// 숨어 있는 숫자의 덧셈 (1)
// function solution(my_string) {
//   let answer = 0;
//   let nums = [];
//   for (let x of my_string) {
//     if (x.charCodeAt() > 48 && x.charCodeAt() < 58) {
//       nums.push(x)
//     }
//   }
//   for (let x of nums) {
//     answer += Number(x)
//   }
//   return answer;
// }

// console.log(solution('aAb1B2cC34oOp'))
// console.log(solution('1a2b3c4d123'))

// 문자열 정렬하기 (1)
// function solution(my_string) {
//   let answer = [];
//   for (let x of my_string) {
//     if (x.charCodeAt() > 47 && x.charCodeAt() < 58) {
//       answer.push(Number(x))
//     }
//   }
//   answer.sort()
//   return answer;
// }

// console.log(solution('hi12392'))
// console.log(solution('p2o4i8gj2'))
// console.log(solution('abcde0'))

// 모음 제거
function solution(my_string) {
  let answer = '';
  for (let x of my_string) {
    if (x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u') {
      answer += x
    }
  }
  return answer;
}

console.log(solution('bus'))
console.log(solution('nice to meet you'))