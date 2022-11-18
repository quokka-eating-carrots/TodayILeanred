// 배열 회전시키기
// function solution(numbers, direction) {
//   let answer = [];
//   if (direction === 'right') {
//     numbers.unshift(numbers.pop())
//   } else {
//     numbers.push(numbers.shift())
//   }
//   answer = numbers
//   return answer;
// }

// console.log(solution([1, 2, 3], 'right'))
// console.log(solution([4, 455, 6, 4, -1, 45, 6], 'left'))

// 최댓값 만들기 (2)
// function solution(numbers) {
//   let answer = 0;
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < numbers.length - 1; i += 1) {
//     for (let j = 1; j < numbers.length; j += 1) {
//       if (max < numbers[i] * numbers[j]) {
//         if (i !== j) {
//           max = numbers[i] * numbers[j]
//         }
//       }
//       answer = max
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 2, -3, 4, -5]))
// console.log(solution([0, -31, 24, 10, 1, 9]))
// console.log(solution([10, 20, 30, 5, 5, 20, 5]))

// 369게임
// function solution(order) {
//   let answer = 0;
//   order = order.toString()
//   for (let x of order) {
//     if (x !== '0' && x % 3 === 0) {
//       answer += 1
//     }
//   }
//   return answer;
// }

// console.log(solution(3))
// console.log(solution(29423))
// console.log(solution(1000))

// 합성수 찾기
// function solution(n) {
//   let answer = 0
//   const isPrime = num => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return true;
//     }
//     return false;
//   };

//   for (let i = 1; i <= n; i++) {
//     if (isPrime(i)) answer += 1;
//   }

//   return answer;
// }

function solution(n) {
  let answer = 0
  for (let i = 1; i <= n; i += 1) {
    for (let j = 2; j <= Math.sqrt(i); j += 1) {
      if (i % j === 0) {
        answer += 1
        break;
      }
    }
  }
  return answer
}

console.log(solution(10))
console.log(solution(15))