// 등수 매기기
// function solution(score) {
//   let answer = [];
//   let average = [];
//   for (let i = 0; i < score.length; i += 1) {
//     average.push([i, (score[i][0] + score[i][1]) / 2])
//   }
//   average.sort((a, b) => b[1] - a[1])
//   for (let i = 0; i < average.length; i += 1) {
//     if ()
//   }
//   return answer;
// }

// function solution(score) {
//   let answer = []
//   for (let i = 0; i < score.length; i += 1) {
//     answer.push(1)
//   }
//   for (let i = 0; i < score.length; i += 1) {
//     for (let j = 0; j < score.length; j += 1) {
//       if (score[i][0] + score[i][1] > score[j][0] + score[j][1]) {
//         answer[j] += 1
//       }
//     }
//   }
//   return answer
// }

// console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]]))

// 특이한 정렬 테케 3번?
// function solution(numlist, n) {
//   let answer = [];
//   numlist.sort((a, b) => b - a)
//   let diff = 0
//   while (diff < Math.max(...numlist)) {
//     for (let x of numlist) {
//       if (Math.abs(n - x) === diff) {
//         answer.push(x)
//       }
//     }
//     diff += 1
//   }
//   return answer;
// }

// function solution(numlist, n) {
//   return numlist.sort((a,b) => {
//       const [aGab, bGab] = [Math.abs(a-n), Math.abs(b-n)]
//       if(aGab === bGab) return b-a
//       return aGab-bGab
//   })
// }

// console.log(solution([1, 2, 3, 4, 5], 4))
// console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30))

// 저주의 숫자 3
// function solution(n) {
//   let answer = 0
//   for (let i = 1; i <= n; i += 1) {
//     answer += 1
//     while(answer.toString().includes('3') || answer % 3 === 0) {
//       answer += 1
//     }
//   }
//   return answer;
// }

// console.log(solution(15))
// console.log(solution(40))

// 다항식 더하기
// function solution(polynomial) {
//   let answer = '';
//   let xPlus = []
//   let num = 0
//   let xNum = 0
//   polynomial = polynomial.split(' ')
//   for (let x of polynomial) {
//     if (x.includes('x')) {
//       xPlus.push(x)
//     } else if (x !== '+') num += Number(x)
//   }
//   for (let y of xPlus) {
//     if (y.length > 1) {
//       xNum += Number(y[0])
//     } else xNum += 1
//   }

//   if (num === 0 && xNum === 0) {
//     return answer = '0'
//   } else if (xNum === 0) {
//     return answer = `${num}`
//   } else if (num === 0) {
//     return answer = `${xNum}x`
//   } else if (xNum >= 1) {
//     return answer = `${xNum === 1 ? '' : xNum}x + ${num}`
//   }
//   return answer = `${xNum}x + ${num}`
//   // if (num !== 0 && xNum !== 1) {
//   //   answer = `${xNum}x + ${num}`
//   // }
//   // if (xNum === 1) {
//   //   answer = `x + ${num}`
//   // }
//   // if (num === 0 && xNum === 0) {
//   //   answer = '0'
//   // }
//   // if answer = `${xNum}x`
//   // return answer;
// }

function solution(p) {
  // x의 항과 상수항을 더함
  let [x, c] = p.split('+').reduce(([a, b], s) => {
      if (s.includes('x')) {
          return [a + Number(s.trim().replace('x','') || 1), b];
      }
      return [a, b + Number(s)];
  }, [0, 0]);
  console.log([x, c])

  // 둘다 0이라면 0을 반환
  if (!x && !c) return '0';
  // x항이 0이라면 상수항을 문자열로 반환
  if (!x) return c.toString();
  // 이전에 return되지 않았다면 x가 있다는 소리이므로 1이라면 x, n이라면 nx의 값을 x에 입력
  x = `${x == 1 ? '' : x}x`;
  // 상수항이 없다면 x 반환
  if (!c) return x;
  // 외에는 x항과 상수항이 모두 있으므로 반환
  return `${x} + ${c}`;
}

console.log(solution('3x + 7 + x'))
console.log(solution('x + x + x'))
console.log(solution('x + 7 + 15'))
console.log(solution('0'))