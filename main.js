// 진료 순서 정하기
// function solution(emergency) {
//   var answer = [];
//   let tmp = []
//   let emergencyOrigin = []
//   for (let i = 0; i < emergency.length; i += 1) {
//     emergencyOrigin.push(emergency[i])
//   }
//   emergency.sort((a, b) => b - a)
//   for (let i = 0; i < emergency.length; i += 1) {
//     tmp.push([i + 1, emergency[i]])
//   }
//   for (let i = 0; i < emergency.length; i += 1) {
//     for (let [a, b] of tmp) {
//       if (emergencyOrigin[i] === b) {
//         answer.push(a)
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution([3, 76, 24]))
// console.log(solution([1, 2, 3, 4, 5, 6, 7]))
// console.log(solution([30, 10, 23, 6, 100]))

// 한 번만 등장한 문자
// function solution(s) {
//   var answer = '';
//   let map = new Map()
//   for (let x of s) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   for (let [k, v] of map) {
//     if (v === 1) {
//       answer += k
//     }
//   }
//   answer = answer.split('').sort().join('')
//   return answer;
// }

// console.log(solution('abcabcadc'))
// console.log(solution('abdc'))
// console.log(solution('hello'))

// 이진수 더하기
// function solution(bin1, bin2) {
//   let answer = '';
//   let firstNum = 0
//   let secondNum = 0
//   for (let i = bin1.length; i > 0; i -= 1) {
//     if (bin1[bin1.length - i] === '1') {
//       firstNum += (2 ** (i - 1))
//     }
//   }
//   for (let i = bin2.length; i > 0; i -= 1) {
//     if (bin2[bin2.length - i] === '1') {
//       secondNum += (2 ** (i - 1))
//     }
//   }
//   let sum = firstNum + secondNum
//   let tmp = sum
//   while (tmp > 0) {
//     answer += String(tmp % 2)
//     tmp = parseInt(tmp / 2)
//   }
//   answer = answer.split('').reverse().join('')
//   return answer;
// }

// console.log(solution('10', '11'))
// console.log(solution('1001', '1111'))

// function solution(bin1, bin2) {
//   return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
// }

// 공 던지기
// function solution(numbers, k) {
//   let answer = 0;
//   let num = []
//   while (num.length < k) {
//     for (let i = 0; i <= 2; i += 2) {
//       num.push(numbers[i])
//     }
//     numbers.push(numbers.shift())
//     numbers.push(numbers.shift())
//   }
//   for (let i = 0; i < num.length; i += 1) {
//     if (num[i] === num[i + 1]) {
//       num.splice(i, 1)
//     }
//   }

//   answer = num[num.length - 1]
//   return answer;
// }

console.log(solution([1, 2, 3, 4], 2))
console.log(solution([1, 2, 3, 4, 5, 6], 5))
console.log(solution([1, 2, 3], 3))

function solution(numbers, k) {
  return numbers[(k - 1) * 2 % numbers.length];
}

function solution(numbers, k) {
  const goNext = current => (current + 2) % numbers.length;
  let current = 0;
  for (let i = 0; i < k - 1; i++) current = goNext(current);
  return numbers[current];
}