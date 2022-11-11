// 배열 원소의 길이
// function solution(strlist) {
//   let answer = [];
//   for (let x of strlist) {
//     answer.push(x.length)
//   }
//   return answer;
// }

// console.log(solution(["We", "are", "the", "world!"]))
// console.log(solution(["I", "Love", "Programmers."]))

// 점의 위치 구하기
// function solution(dot) {
//   let answer = 0;
//   if (dot[0] > 0 && dot[1] > 0) {
//     answer = 1
//   } else if (dot[0] < 0 && dot[1] > 0) {
//     answer = 2
//   } else if (dot[0] < 0 && dot[1] < 0) {
//     answer = 3
//   } else if (dot[0] > 0 && dot[1] < 0) {
//     answer = 4
//   }
//     return answer;
// }

// console.log(solution([2, 4]))
// console.log(solution([-7, 9]))

// 특정 문자 제거하기
// function solution(my_string, letter) {
//   let answer = '';
//   answer = my_string.split(letter).join('')
//   return answer;
// }

// 정규표현식을 사용하기 어렵다. 그러므로 쪼갠 후 다시 붙여 줬음

// console.log(solution('abcdef', 'f'))
// console.log(solution('BCBdbe', 'B'))

// 편지
function solution(message) {
  let answer = 0;
  answer = message.length * 2
  return answer;
}

console.log(solution('happy birthday!'))
console.log(solution('I love you~'))