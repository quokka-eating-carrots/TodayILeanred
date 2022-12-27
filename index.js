// 숫자 짝꿍
// function solution(X, Y) {
//   let answer = '';
//   for (let x of X) {
//     for (let i = 0; i < Y.length; i += 1) {
//       if (x === Y[i]) {
//         Y = Y.split('')
//         Y.splice(i, 1)
//         Y = Y.join('')
//         answer += x
//         break;
//       }
//     }
//   }
//   if (answer.length === 0) {
//     return answer = "-1"
//   } else {
//     answer = answer.split('').sort((a, b) => b - a).join('')
//     answer = +answer
//     return answer = answer.toString()
//   }
// }

// function solution(X, Y) {
//   const commons = []
//   const obj = {}

//   for (const el of X) {
//     obj[el] = (obj[el] || 0) + 1
//   }

//   for (const el of Y) {
//     if (obj[el]) {
//       commons.push(el)
//       obj[el] -= 1
//     }
//   }

//   commons.sort((a, b) => b - a)
//   if (!commons.length) return "-1"
//   else if (commons[0] === "0") return "0"
//   return commons.join("")
// }

function solution(X, Y) {
  let answer = []
  let mapX = new Map()
  for (let x of X) {
    mapX.set(x, (mapX.get(x) || 0) + 1)
  }

  for (let y of Y) {
    if (mapX.has(y) && mapX.get(y) !== 0) {
      answer.push(y)
      mapX.set(y, mapX.get(y) - 1)
    }
  }

  answer.sort((a, b) => b - a)
  if (!answer.length) return "-1"
  else if (answer[0] === "0") return "0"
  return answer.join("")
}

console.log(solution("100", "2345"))
console.log(solution("100", "203045"))
console.log(solution("100", "123450"))
console.log(solution("12321", "42531"))
console.log(solution("5525", "1255"))