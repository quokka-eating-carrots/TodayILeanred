// 약수의 개수와 덧셈
// function solution(left, right) {
//   let answer = 0;
//   let num = []
//   for (let i = left; i <= right; i += 1) {
//     num.push(i)
//   }
//   let cnt = 0
//   let divisor = []
//   for (let x of num) {
//     for (let i = 1; i <= x; i += 1) {
//       if (x % i === 0) {
//         cnt += 1
//       }
//     }
//     divisor.push(cnt)
//     cnt = 0
//   }
//   for (let i = 0; i < divisor.length; i += 1) {
//     if (divisor[i] % 2 === 0) {
//       answer += num[i]
//     } else answer -= num[i]
//   }
//   return answer;
// }

// console.log(solution(13, 17))
// console.log(solution(24, 27))

// 문자열 다루기 기본
// function solution(s) {
//   var answer = true;
//   if (s.length === 4) {
//     for (let x of s) {
//       if (x.charCodeAt() > 57) {
//         return answer = false
//       }
//     }
//   } else if (s.length === 6) {
//     for (let x of s) {
//       if (x.charCodeAt() > 57) {
//         return answer = false
//       }
//     }
//   } else return answer = false
//   return answer;
// }

// function solution(s) {
//   var answer = true;
//   if (s.length === 4 || s.length === 6) {
//     for (let x of s) {
//       if (x.charCodeAt() > 57) {
//         return answer = false
//       }
//     }
//   } else return answer = false
//   return answer;
// }

// console.log(solution('a234'))
// console.log(solution('1234'))

// 부족한 금액 계산하기
// function solution(price, money, count) {
//   var answer = 0;
//   let sumPrice = 0
//   for (let i = 1; i <= count; i += 1) {
//     sumPrice += price * i
//   }
//   answer = sumPrice - money
//   if (sumPrice < money) {
//     answer = 0
//   }
//   return answer;
// }

// console.log(solution(3, 20, 4))

// 행렬의 덧셈
function solution(arr1, arr2) {
  let answer = [];
  let sum = []
  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr1[i].length; j += 1) {
      sum.push(arr1[i][j] + arr2[i][j])
    }
    answer.push(sum)
    sum = []
  }
  console.log(sum)
  return answer;
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]))
console.log(solution([[1], [2]], [[3], [4]]))