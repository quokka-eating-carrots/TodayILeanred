// // 개인정보 수집 유효기간
// // function solution(today, terms, privacies) {
// //   var answer = [];
// //   const arrToday = Number(today.split(".").join(""))
// //   let objTerms = {}
// //   for (let x of terms) {
// //     x = x.split(" ")
// //     objTerms[x[0]] = +x[1]
// //   }
// //   for (let x of privacies) {
// //     let originX = x
// //     x = x.split(" ")
// //     x[0] = x[0].split(".")
// //     const expire = +x[0][1] + objTerms[x[1]]
// //     if (expire > 12) {
// //       x[0][0] = +x[0][0] + Math.floor(expire / 12)
// //       x[0][1] = `0${(+x[0][1] - (expire % 12)) + +x[0][1]}`
// //       if (+x[0][2] - 1 < 1) {
// //         x[0][2] = 28
// //         x[0][1] = `0${+x[0][1] - 1}`
// //       }
// //     } else {
// //       x[0][0] = +x[0][0]
// //       x[0][1] = `0${expire}`
// //       x[0][2] = +x[0][2] - 1
// //     }
// //     x[0] = Number(x[0].join(""))
// //     console.log(x)
// //     if (arrToday > x[0]) {
// //       answer.push(privacies.indexOf(originX) + 1)
// //     }
// //   }
// //   answer.sort((a, b) => a - b)
// //   return answer;
// // }

// // console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))
// console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]))

// function solution(today, terms, privacies) {
//   var answer = [];
//   const arrToday = Number(today.split(".").join(""))
//   let objTerms = {}
//   for (let x of terms) {
//     x = x.split(" ")
//     objTerms[x[0]] = +x[1]
//   }
//   for (let x of privacies) {
//     const originX = x
//     x = x.split(" ")
//     x[0] = x[0].split(".")
//     x[0][1] = +x[0][1] + objTerms[x[1]]
//     if (x[0][1] > 12) {
//       x[0][0] = `${+x[0][0] + Math.floor(x[0][1] / 12)}`
//       x[0][1] = `0${x[0][1] - 12}`
//       x[0][2] = `${+x[0][2] - 1}`
//     } else if (x[0][1] < 10) {
//       x[0][1] = `0${x[0][1]}`
//       x[0][2] = `${+x[0][2] - 1}`
//     }
//     if (+[0][2] < 1) {
//       x[0][1] = `${+[0][1] - 1}`
//     }
//     // x[0] = Number(x[0].join(""))
//     console.log(x[0])
//   }
//   return answer;
// }

// 최댓값 최솟값
function solution(s) {
  var answer = '';
  s = s.split(" ")
  for (let i = 0; i < s.length; i += 1) {
    s[i] = +s[i]
  }
  answer += Math.min(...s)
  answer += ` ${Math.max(...s)}`
  return answer;
}

console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))
console.log(solution("-1 -1"))