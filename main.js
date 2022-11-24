// 종이 자르기
// function solution(M, N) {
//   let answer = 0;
//   answer += (M - 1)
//   answer += (N - 1) * M
//   return answer;
// }

// console.log(solution(2, 2))
// console.log(solution(2, 5))
// console.log(solution(1, 1))

// 문자열 계산하기
// function solution(my_string) {
//   let answer = 0
//   my_string.trim()
//   my_string = my_string.split(' ')
//   answer = Number(my_string[0])

//   for (let i = 1; i < my_string.length; i += 1) {
//     if (my_string[i] === '+') {
//       answer += +my_string[i + 1]
//     } else if (my_string[i] === '-') {
//       answer -= +my_string[i + 1]
//     }
//   }
//   return answer;
// }

// console.log(solution('3 + 4'))
// console.log(solution('3 + 4 - 2'))
// console.log(solution('12 + 58'))

// 구슬을 나누는 경우의 수
// function solution(balls, share) {
//   let answer = 0;
//   let ballArr = []
//   let shareBox = []
//   for (let i = 1; i <= balls; i += 1) {
//     ballArr.push(i)
//   }
//   for (let i = 0; i < ballArr.length; i += 1) {
//     for (let j = 0; j < ballArr.length; j += 1) {
//       if (i !== j) {
//         shareBox.push([ballArr[i], ballArr[j]])
//       }
//     }
//   }
//   console.log(shareBox)
//   answer = parseInt(shareBox.length / 2)
//   return answer;
// }
// function solution(balls, share) {
//   let answer = 0
//   const [n, m] = [balls, share]
//   const fact = [BigInt(1), BigInt(1)]
//   for (let i = 2; i <= n; i += 1) {
//     fact[i] = fact[i - 1] * BigInt(i)
//   }
//   return answer = Number(fact[n] / (fact[n - m] * fact[m]))
// }

// console.log(solution(3, 2))
// console.log(solution(5, 3))

// 외계어 사전
// function solution(spell, dic) {
//   let answer = 1;
//   for (let i = 0; i < spell.length; i += 1) {
//     for (let j = 0; j < dic.length; j += 1) {
//       if (dic[j].includes(spell[i])) {
//         answer = 1
//         continue;
//       } else answer = 2
//     }
//   }
//   return answer;
// }

function solution(spell, dic) {
  let answer = 0
  spell = spell.sort().join('')
  console.log(spell)
  answer = dic.map(e => e.split('').sort().join('')).find(e => e === spell) !== undefined ? 1 : 2
  console.log(dic.map(e => e.split('').sort().join('')))
  return answer
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"]))
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"]))