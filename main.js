// 문자열 밀기
// function solution(A, B) {
//   let answer = -1;
//   let cnt = 0
//   if (A === B) return answer = 0
//   for (let i = 0; i < A.length; i += 1) {
//     A = A.split('')
//     A.unshift(A.pop())
//     A = A.join('')
//     cnt += 1
//     if (A === B) {
//       answer = cnt
//     }
//   }
//   return answer;
// }

// console.log(solution('hello', 'ohell'))
// console.log(solution('apple', 'elppa'))

// 컨트롤 제트
// function solution(s) {
//   let answer = 0;
//   s = s.split(' ')
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] === 'Z') {
//       if (i - 1 !== -1 && s[i - 1] !== 'Z') {
//         answer -= Number(s[i - 1])
//       }
//     } else answer += Number(s[i])
//   }
//   return answer;
// }

// function solution(s) {
//   let answer = 0;
//   s = s.split(' ')
//   let num = []
//   for (let i = 0; i < s.length; i += 1) {
//     if (s[i] === 'Z') {
//       num.pop()
//     } else num.push(Number(s[i]))
//   }
//   num.forEach(n => answer += n)
//   return answer;
// }
// console.log(solution('1 2 Z 3'))
// console.log(solution('10 20 30 40'))
// console.log(solution('10 Z 20 Z 1'))
// console.log(solution('Z Z 0 1'))
// console.log(solution('1 2 3 Z Z'))

// 로그인 성공
// function solution(id_pw, db) {
//   let answer = '';
//   for (let i = 0; i < db.length; i += 1) {
//     if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
//       return answer = 'login'
//     } else if (id_pw[0] === db[i][0] && id_pw[1] !== db[i][1]) {
//       answer = 'wrong pw'
//     } else answer = 'fail'
//   }
//     return answer;
// }

function solution(id_pw, db) {
  let answer = '';
  db.map((item, i) => {
    if (id_pw[0] === item[0] && id_pw[1] === item[1]) {
      answer = 'login'
    } else if (id_pw[0] === item[0] && id_pw[1] !== item[1]) {
      answer = 'wrong pw'
    } else if (id_pw[0] !== item[0] && id_pw[1] !== item[1]) {
      answer = 'fail'
    }
  })
  return answer;
}

console.log(solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]))

// 치킨 쿠폰
// function solution(chicken) {
//   let answer = 0;
//   let cp = chicken
//   let keep = 0
//   while (cp > 0) {
//     answer += cp / 10
//     keep += cp % 10
//     cp /= 10
//   }
//   return Math.floor(answer);
// }

// function solution(chicken) {
//   let answer = 0
//   let coupon = chicken
//   while (coupon >= 10) {
//     answer += Math.floor(coupon / 10)
//     coupon = coupon % 10 + Math.floor(coupon / 10)
//   }
//   return answer
// }

// console.log(solution(100))
// console.log(solution(1081))
// console.log(solution(1999))