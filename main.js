// 두 정수 사이의 합
// function solution(a, b) {
//   let answer = 0;
//   if (a === b) return a
//   if (a > b) {
//     for (let i = b; i <= a; i += 1) {
//       answer += i
//     }
//     return answer
//   } else if (a < b) {
//     for (let i = a; i <= b; i += 1) {
//       answer += i
//     }
//     return answer
//   }
//   return answer;
// }

// console.log(solution(3, 5))
// console.log(solution(3, 3))
// console.log(solution(5, 3))

// 콜라츠 추측
// function solution(num) {
//   let answer = 0;
//   if (num === 1) return answer
//   while (num > 1) {
//     if (num % 2 === 0) {
//       num = num / 2
//     } else num = (num * 3) + 1
//     answer += 1
//     if (answer === 500) return answer = -1
//   }
//   return answer;
// }

// console.log(solution(6))
// console.log(solution(16))
// console.log(solution(626331))

// 서울에서 김서방 찾기
// function solution(seoul) {
//   let answer = '';
//   for (let i = 0; i < seoul.length; i += 1) {
//     if (seoul[i] === "Kim") {
//       answer = `김서방은 ${i}에 있다`
//     }
//   }
//   return answer;
// }

// console.log(solution(['Jane', 'Kim']))

// 핸드폰 번호 가리기
function solution(phone_number) {
  let answer = '';
  for (let i = 0; i < phone_number.length; i += 1) {
    if (i >= phone_number.length - 4) {
      answer += phone_number[i]
    } else answer += '*'
  }
  return answer;
}

console.log(solution('01033334444'))
console.log(solution('027778888'))