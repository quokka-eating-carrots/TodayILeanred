// k의 개수
function solution(i, j, k) {
  let answer = 0;
  let nums = ''
  for (let a = i; a <= j; a += 1) {
    nums += (String(a))
  }
  for (let b = 0; b < nums.length; b += 1) {
    if (nums[b].includes(k)) answer += 1
  }
  return answer;
}

console.log(solution(1, 13, 1))
console.log(solution(10, 50, 5))
console.log(solution(3, 10, 2))

// 2차원으로 만들기
// function solution(num_list, n) {
//   let answer = [];
//   for (let i = 0; i < num_list.length; i += n) {
//     let nums = []
//     for (let j = 0; j < n; j += 1) {
//       nums.push(num_list[i + j])
//     }
//     answer.push(nums)
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2))
// console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3))

// 가까운 수
// function solution(array, n) {
//   let answer = 0;
//   let tmp = []
//   for (let x of array) {
//     let diff = 0
//     diff = Math.abs(n - x)
//     tmp.push([diff, x])
//   }
//   tmp.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return a[1] - b[1]
//     } else {
//       return a[0] - b[0]
//     }
//   })
//   answer = tmp[0][1]
//   return answer;
// }

// console.log(solution([3, 10, 28], 20))
// console.log(solution([10, 11, 12], 13))

// 7의 개수
// function solution(array) {
//   let answer = 0;
//   let str = ''
//   for (let x of array) {
//     str += String(x)
//   }
//   for (let x of str) {
//     if (x === '7') answer += 1
//   }
//   return answer;
// }

// console.log(solution([7, 77, 17]))
// console.log(solution([10, 29]))