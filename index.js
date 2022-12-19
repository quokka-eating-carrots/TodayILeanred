// [카카오 인턴] 키패드 누르기
// function solution(numbers, hand) {
//   let answer = '';
//   let cnt = ''
//   for (let x of numbers) {
//     if (x === 1 || x === 4 || x === 7) {
//       answer += 'L'
//       cnt = 'L'
//     } else if (x === 3 || x === 6 || x === 9) {
//       answer += 'R'
//       cnt = 'R'
//     } else if (x === 2 || x === 5 || x === 8 || x === 0) {
//       if (cnt === 'L') {

//       }
//     }
//   }
//   return answer;
// }

function solution(numbers, hand) {
  let answer = ''
  let [leftRow, leftCol] = [3, 0]
  let [rightRow, rightCol] = [3, 2]

  for (let x of numbers) {
    if (x === 1 || x === 4 || x === 7) {
      [leftRow, leftCol] = [Math.floor((x - 1) / 3), 0]
      answer += 'L'
    } else if (x === 3 || x === 6 || x === 9) {
      [rightRow, rightCol] = [Math.floor((x - 1) / 3), 2]
      answer += 'R'
    } else {
      if (x === 0) x = 11
      let [nextRow, nextCol] = [Math.floor((x - 1) / 3), 1]
      let leftDistance = Math.abs(leftRow - nextRow) + Math.abs(leftCol - nextCol)
      let rightDistance = Math.abs(rightRow - nextRow) + Math.abs(rightCol - nextCol)
      if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
        [leftRow, leftCol] = [nextRow, nextCol]
        answer += 'L'
      } else {
        [rightRow, rightCol] = [nextRow, nextCol]
        answer += 'R'
      }
    }
  }
  return answer
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'))