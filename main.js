// 잘라서 배열로 저장하기
// function solution(my_str, n) {
//   let answer = [];
//   let letter = '';
//   while (my_str.length > 0) {
//     for (let i = 0; i < n; i += 1) {
//       if (my_str[i] !== undefined) {
//         letter += my_str[i]
//       }
//     }
//     answer.push(letter)
//     my_str = my_str.slice(n)
//     letter = ''
//   }
//   return answer;
// }

// console.log(solution("abc1Addfggg4556b", 6))
// console.log(solution('abcdef123', 3))

// 소인수분해
// function solution(n) {
//   let answer = [];
//   let primeFactor = []
//   for (let i = 2; i < Math.sqrt(n); i += 1) {
//     if (n % i === 0) primeFactor.push(i)
//   }
//   if (primeFactor.length === 0) {
//     answer.push(n)
//   }
//   return answer;
// }

// function solution(n) {
//   let answer = [];
//   let primeFactor = []
//   for (let i = 2; i <= Math.sqrt(n); i += 1) {
//     while(n % i === 0) {
//       primeFactor.push(i)
//       n /= i
//     }
//   }
//   if (n >= 2) primeFactor.push(n)
//   answer = [...new Set(primeFactor)].sort((a, b) => a - b)
//   return answer;
// }

// function solution(n) {
//   let answer = [];
//   let d = 2
//   let primeFactor = []
//   while (d <= Math.sqrt(n)) {
//     if (n % d !== 0) {
//       d += 1
//     } else if (n % d === 0) {
//       primeFactor.push(d)
//       d += 1
//     }
//   }
//   if (primeFactor.length === 0) answer.push(n)
//   d = 2
//   while(d < Math.max(...primeFactor)) {
//     for (let i = 0; i < primeFactor.length; i += 1) {
//       if (primeFactor[i] % d === 0) answer.push[i]
//       d += 1
//     }
//   }
//   return answer
// }

// console.log(solution(12))
// console.log(solution(17))
// console.log(solution(420))

// 숨어 있는 숫자의 덧셈 (2)
// function solution(my_string) {
//   let answer = 0;
//   let nums = []
//   for (let i = 0; i < my_string.length; i += 1) {
//     if (48 < my_string[i].charCodeAt() && 58 > my_string[i].charCodeAt() ) {
//       nums.push(my_string[i])
//     }
//   }
//   console.log(nums)
//   return answer;
// }

// function solution(my_string) {
//   const nums = my_string.match(/[0-9]+/g);
//   return nums ? nums.map(num => +num).reduce((a, c) => a + c, 0) : 0;
// }

// console.log(solution("aAb1B2cC34oOp"))
// console.log(solution("1a2b3c4d123Z"))

// 영어가 싫어요
// function solution(numbers) {
//   let answer = 0;
//   let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//   for (let i = 0; i < 10; i += 1) {
//     let tmp = numbers.split(nums[i])
//     numbers = tmp.join(i)
//   }
//   answer = Number(numbers)
//   return answer;
// }

// console.log(solution('onetwothreefourfivesixseveneightnine'))
// console.log(solution('onefourzerosixseven'))

// 햄버거 만들기
function solution(ingredient) {
  let answer = 0;
  let stack = []
  for (let i = 0; i < ingredient.length; i += 1) {
    stack.push(ingredient[i]);
    if (stack.length < 4) continue;
    if (stack[stack.length - 4] === 1
      && stack[stack.length - 3] === 2
      && stack[stack.length - 2] === 3
      && stack[stack.length - 1] === 1) {
        for (let j = 0; j < 4; j += 1) {
          stack.pop();
        }
        answer += 1
      }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2]))