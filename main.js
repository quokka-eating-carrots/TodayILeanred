// 겹치는 선분의 길이
// function solution(lines) {
//   let answer = 0;
//   let nums = []
//   for (let i = 0; i < lines.length; i += 1) {
//     for (let j = lines[i][0]; j < lines[i][1]; j += 1) {
//       nums.push(j)
//     }
//   }
//   let map = new Map()
//   for (let x of nums) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   for (let [k, v] of map) {
//     if (v > 1) {
//       answer += 1
//     }
//   }
//   return answer;
// }

// console.log(solution([[0, 1], [2, 5], [3, 9]]))
// console.log(solution([[-1, 1], [1, 3], [3, 9]]))
// console.log(solution([[0, 5], [3, 9], [1, 10]]))

// 평행
// function solution(dots) {
//   let answer = 0;
//   dots.sort((a, b) => a[0] - b[0])
//   const first_x = dots[0][0]
//   const first_y = dots[0][1]

//   const second_x = dots[1][0]
//   const second_y = dots[1][1]

//   const third_x = dots[2][0]
//   const third_y = dots[2][1]
  
//   const fourth_x = dots[3][0]
//   const fourth_y = dots[3][1]

//   // 두 번째 값과 평행
//   if ((first_y - second_y) !== 0 && (third_y - fourth_y) !== 0) {
//     if ((first_x - second_x) / (first_y - second_y) === (third_x - fourth_x) / (third_y - fourth_y)) {
//       return answer = 1
//     }
//   }

//   // 세 번째 값과 평행
//   if ((first_y - third_y) !== 0 && (second_y - fourth_y) !== 0) {
//     if ((first_x - third_x) / (first_y - third_y) === (second_x - fourth_x) / (second_y - fourth_y)) {
//       return answer = 1
//     }
//   }

//   // 네 번째 값과 평행
//   if ((first_y - fourth_y) !== 0 && (third_y - second_y) !== 0) {
//     if ((first_x - fourth_x) / (first_y - fourth_y) === (third_x - second_x) / (third_y - second_y)) {
//       return answer = 1
//     }
//   }
//   return answer;
// }

// console.log(solution([[1, 4], [9, 2], [3, 8], [11, 6]]))

// 옹알이 (1)
// function solution(babbling) {
//   let answer = 0;
//   const speak = ["aya", "ye", "woo", "ma"]
//   let word = []
//   for (let x of babbling) {
//     for (let y of speak) {
//       word.push(x.split(y))
//     }
//   }
//   console.log(word)
//   return answer;
// }

function solution(babbling) {
  var answer = 0;
  for (var i = 0 ; i < babbling.length ; i++ ) {
      if (babbling[i].replace("ye"," ").replace("aya"," ").replace("woo"," ").replace("ma"," ").trim() === "") {
          answer = answer + 1 ;
      }    
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))