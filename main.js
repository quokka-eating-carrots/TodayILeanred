// 소수 만들기
// function solution(nums) {
//   let answer = 0
//   let sum = []
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = 0; j < nums.length; j += 1) {
//       for (let k = 0; k < nums.length; k += 1) {
//         if (i !== j && j !== k && i !== k) {
//           sum.push(nums[i] + nums[j] + nums[k])
//         }
//       }
//     }
//   }
//   sum = [...new Set(sum)]
//   const max = Math.max(...sum)
//   let arr = Array(max + 1).fill(0)
//   for (let i = 0; i <= max; i += 1) {
//     arr[i] = i
//   }
//   arr[1] = 0
//   for (let i = 2; i <= max; i += 1) {
//     if (arr[i] === 0) continue;
//     for (let j = i * 2; j <= max; j += i) {
//       arr[j] = 0
//     }
//   }
//   let isPrime = []
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] !== 0) {
//       isPrime.push(i)
//     }
//   }
//   for (let i = 0; i < sum.length; i += 1) {
//     for (let j = 0; j < isPrime.length; j += 1) {
//       if (sum[i] === isPrime[j]) answer += 1
//     }
//   }
//   return answer
// }

// let sieve = new Array(3001).fill(true);
// for (let i = 2; i * i < sieve.length; i += 1) {
//   if (!sieve[i]) continue;
//   for (let j = i + i; j < sieve.length; j += i) {
//     sieve[j] = false;
//   }
// }
// function solution(nums) {
//   var answer = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       for (let k = j + 1; k < nums.length; k += 1) {
//         const index = nums[i] + nums[j] + nums[k];
//         if (sieve[index]) {
//           answer += 1;
//         }
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution([1, 2, 3, 4]))
// console.log(solution([1, 2, 7, 6, 4]))

// 실패율
// function solution(N, stages) {
//   var answer = [];
//   let arr = Array(N).fill(0)
//   for (let i = 1; i <= N; i += 1) {
//     arr[i - 1] = [i, 0]
//   }
//   let cnt = 0
//   for (let x of stages) {
//     if (x > arr.length) {
//       arr[arr.length - 1][1] += 1
//     } else arr[x - 1][1] += 1
//   }
//   arr.sort((a, b) => {
//     if (a[1] === b[1]) {
//       return b[0] - a[0]
//     } else return b[1] - a[1]
//   })
//   for (let [k, v] of arr) {
//     answer.push(k)
//   }
//   return answer;
// }
function solution(N, stages) {
  let stageNFailRate = [];
  for (let stage = 1; stage <= N; stage++) {
    const playerReached = stages.filter((player) => player >= stage).length;
    const playerChallenging = stages.filter(
      (player) => player === stage
    ).length;
    stageNFailRate.push([stage, playerChallenging / playerReached]);
  }
  stageNFailRate.sort((a, b) => b[1] - a[1]);
  return stageNFailRate.map((stage) => stage[0]);
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))