// [1차] 다트 게임임
// function solution(dartResult) {
//   var answer = 0;
//   dartResult = dartResult.split(/[0-9]/g)
//   console.log(dartResult)
//   return answer;
// }

// console.log(solution('1S2D*3T'))
// console.log(solution('1D2S#10S'))

// function solution(dartResult) {
//   const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
//   let result = [];
//   for (const dart of dartResult.match(regex)) {
//     const game = [...dart.split(/([SDT]{1})/)];
//     const score = game[0];
//     let bonus = 1;
//     let option = 1;
//     if (game[1] === "S") bonus = 1;
//     if (game[1] === "D") bonus = 2;
//     if (game[1] === "T") bonus = 3;

//     if (game[2] === "*") {
//       if (result.length !== 0) result[result.length - 1] *= 2;
//       option = 2;
//     }
//     if (game[2] === "#") option = -1;

//     result.push(score ** bonus * option);
//   }

//   return result.reduce((a, b) => a + b);
// }

// 로또 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  let answer = [];
  let score = 0
  let removeNum = []
  for (let x of lottos) {
    if (x === 0) removeNum.push(x)
    for (let s of win_nums) {
      if (x === s) score += 1
    }
  }
  let rank = []
  rank.push(score)
  for (let i = 1; i <= removeNum.length; i += 1) {
    score += 1
    rank.push(score)
  }
  let max = Math.max(...rank)
  let min = Math.min(...rank)
  if (max === 6) {
    answer.push(1)
  } else if (max === 5) {
    answer.push(2)
  } else if (max === 4) {
    answer.push(3)
  } else if (max === 3) {
    answer.push(4)
  } else if (max === 2) {
    answer.push(5)
  } else answer.push(6)

  if (min === 6) {
    answer.push(1)
  } else if (min === 5) {
    answer.push(2)
  } else if (min === 4) {
    answer.push(3)
  } else if (min === 3) {
    answer.push(4)
  } else if (min === 2) {
    answer.push(5)
  } else answer.push(6)
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]))