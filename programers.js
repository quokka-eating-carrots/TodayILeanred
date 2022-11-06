// function solution(array) {
//   let answer = 0;
//   array = array.sort();
//   for (let i = 0; i < array.length / 2; i += 1) {
//       answer = array[i]
//   }
//   return answer;
// }

// function solution(array) {
//   let answer = 0;
//   array = array.sort((a, b) => a - b)
//   answer =  array[Math.floor(array.length / 2)]
//   return answer
// }

// console.log(solution([1, 2, 3, 4, 5]))
// console.log(solution([-1, -2, -3, -4, -5]))
// console.log(solution([-10, -24, -3, -4, -5, 5, 10]))

function solution(array) {
  let answer = -1
  let map = new Map;
  for (let x of array) {
    map.set(x, (map.get(x) || 0) + 1)
  }
  map = [...map].sort((a, b) => b[1] - a[1])
  return map.length === 1 || map[0][1] > map[1][1] ? m[0][0] : -1
}

console.log(solution([1, 2, 3, 3, 3, 4]))
console.log(solution([1, 1, 2, 2]))
console.log(solution([1]))

// function solution(n) {
//   let answer = [];
//   for (let i = 1; i <= n; i += 1) {
//     if (i % 2 === 1) {
//       answer.push(i)
//     }
//   }
//   return answer;
// }

// console.log(solution(10))
// console.log(solution(15))