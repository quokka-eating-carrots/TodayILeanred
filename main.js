// 삼총사
// function solution(number) {
//   let answer = 0;
//   let sum = 0
//   for (let i = 0; i < number.length; i += 1) {
//     for (let j = 0; j < number.length; j += 1) {
//       for (let k = 0; k < number.length; k += 1) {
//         if (i !== j && j !== k && i !== k) {
//           sum += number[i] + number[j] + number[k]
//           if (sum === 0) {
//             answer += 1
//           } else sum = 0
//         }
//       }
//     }
//   }
//   return answer = answer / 6;
// }

// console.log(solution([-2, 3, 0, 2, -5]))
// console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
// console.log(solution([-1, 1, -1, 1]))

// 두 개 뽑아서 더하기
// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     for (let j = 0; j < numbers.length; j += 1) {
//       if (i !== j) {
//         answer.push(numbers[i] + numbers[j])
//       }
//     }
//   }
//   const set = arr => [...new Set(arr)]
//   return set(answer).sort((a, b) => a - b);
// }

// console.log(solution([2, 1, 3, 4, 1]))
// console.log(solution([5, 0, 2, 7]))

// 2016년
// function solution(a, b) {
//   let count = 0
//   const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
//   const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//   for (let i = 1; i < a; i += 1) {
//     count += month[i]
//   }
//   count += b
//   return day[(count + 4) % 7];
// }

// console.log(solution(5, 24))

// 폰켓몬
function solution(nums) {
  let max = nums.length / 2; // N / 2
  let set = [...new Set(nums)]; // 중복을 없앤다.
  return set.length > max ? max : set.length;
}

console.log(solution([3, 1, 2, 3]))
console.log(solution([3, 3, 3, 2, 2, 4]))
console.log(solution([3, 3, 3, 2, 2, 2]))