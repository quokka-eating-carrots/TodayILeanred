// 3진법 뒤집기
// function solution(n) {
//   var answer = 0;
//   answer = parseInt(n.toString(3).split('').reverse().join(''), 3)
//   return answer;
// }

// console.log(solution(45))
// console.log(solution(125))

// 예산
// function solution(d, budget) {
//   var answer = 0;
//   d.sort((a, b) => a - b)
//   let right = d.length
//   let sum = 0
//   while (right > 0) {
//     for (let i = 0; i < right; i += 1) {
//       sum += d[i]
//     }
//     if (sum <= budget) {
//       answer = right
//       break;
//     } else {
//       right -= 1
//       sum = 0
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 3, 2, 5, 4], 9))
// console.log(solution([2, 2, 3, 3], 10))

// 시저 암호
// function solution(s, n) {
//   return s
//     .split("")
//     .map((el) => {
//       if (el == " ") return el;
//       let tmp = el.charCodeAt();
//       return el.toLowerCase().charCodeAt() + n > 122
//         ? String.fromCharCode(tmp + n - 26)
//         : String.fromCharCode(tmp + n);
//     })
//     .join("");
// }

// console.log(solution('AB', 1))
// console.log(solution('z', 1))
// console.log(solution('a B z', 4))

// 최소직사각형
function solution(sizes) {
  const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
  const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
  return maxWidth * maxHeight;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))