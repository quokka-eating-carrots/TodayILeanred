// 인덱스 바꾸기
// function solution(my_string, num1, num2) {
//   let answer = '';
//   let letter = [];
//   let str = [];
//   for (let i = 0; i < my_string.length; i += 1) {
//     if (i === num1 || i === num2) {
//       str.push(my_string[i])
//     }
//   }
//   for (let i = 0; i < my_string.length; i += 1) {
//     if (i === num1) {
//       answer += str[1]
//     } else if (i === num2) {
//       answer += str[0]
//     } else {
//       answer += my_string[i]
//     }
//   }
//   return answer;
// }

// console.log(solution('hello', 1, 2))
// console.log(solution('I love You', 3, 6))

// 문자열 정렬하기 (2)
// function solution(my_string) {
//   let answer = '';
//   let lowerCase = []
//   for (let x of my_string) {
//     lowerCase.push(x.toLowerCase())
//   }
//   let charCode = []
//   for (let x of lowerCase) {
//     charCode.push(x.charCodeAt())
//   }
//   charCode.sort((a, b) => a - b)
//   for (let x of charCode) {
//     answer += String.fromCharCode(x)
//   }
//   return answer;
// }

// console.log(solution('Bcad'))
// console.log(solution('heLLo'))
// console.log(solution('Python'))

// 숫자 찾기
// function solution(num, k) {
//   let answer = 0;
//   num = String(num)
//   k = String(k)
//   for (let i = 0; i < num.length; i += 1) {
//     if (num[i] === k) {
//       return answer = i + 1
//     } else answer = -1
//   }
//   return answer;
// }

// console.log(solution(29183, 1))
// console.log(solution(232443, 4))
// console.log(solution(123456, 7))

// 암호 해독
function solution(cipher, code) {
  let answer = '';
  for (let i = 0; i < cipher.length; i += 1) {
    if ((i + 1) % code === 0) {
      answer += cipher[i]
    }
  }
  return answer;
}

console.log(solution('dfjardstddetckdaccccdegk', 4))
console.log(solution('pfqallllabwaoclk', 2))