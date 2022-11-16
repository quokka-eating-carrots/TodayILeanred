// 개미 군단
// function solution(hp) {
//   let answer = 0;
//   const first = parseInt(hp / 5)
//   const second = parseInt((hp - first * 5) / 3)
//   const third = hp - first * 5 - second * 3
//   answer = first + second + third
//   return answer;
// }

// console.log(solution(23))
// console.log(solution(24))
// console.log(solution(999))

// 약수 구하기
// function solution(n) {
//   let answer = [];
//   for (let i = 1; i <= n; i += 1) {
//     if (n % i === 0) {
//       answer.push(i)
//     }
//   }
//     return answer;
// }

// console.log(solution(24))
// console.log(solution(29))

// 가장 큰 수 찾기
// function solution(array) {
//   let answer = [];
//   let max = Number.MIN_SAFE_INTEGER
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i]
//     }
//   }
//   answer.push(max, array.indexOf(max))
//   return answer;
// }

// 주사위의 개수
// function solution(box, n) {
//   let answer = 1;
//   let tmp = []
//   for (let x of box) {
//     tmp.push(parseInt(x / n))
//   }
//   for (let x of tmp) {
//     answer = answer * x
//   }
//   return answer;
// }

// console.log(solution([1, 1, 1], 1))
// console.log(solution([10, 8, 6], 3))

// 외계행성 나이
function solution(age) {
  let answer = '';
  answer = [...('' + age)].map(num => String.fromCharCode('a'.charCodeAt(0) +  +num)).join('')
  return answer;
}

function solution(age) {
  let answer = '';
  const ageArr = String(age).split('')
  for (let i = 0; i < ageArr.length; i += 1) {
    answer += String.fromCharCode(Number(ageArr[i]) + 97)
  }
  return answer;
}

console.log(solution(23))
console.log(solution(51))
console.log(solution(100))