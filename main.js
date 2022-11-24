// 캐릭터의 좌표
// function solution(keyinput, board) {
//   let answer = [0, 0];
//   for (let x of keyinput) {
//     if (x === 'left' && answer[0] !== -Math.floor(board[0] / 2)) {
//       answer[0] -= 1
//     } else if (x === 'right' && answer[0] !== Math.floor(board[0] / 2)) {
//       answer[0] += 1
//     } else if (x === 'up' && answer[1] !== Math.floor(board[1] / 2)) {
//       answer[1] += 1
//     } else if (x === 'down' && answer[1] !== -Math.floor(board[1] / 2)) {
//       answer[1] -= 1
//     }
//   }
//   return answer;
// }

// console.log(solution(["left", "right", "up", "right", "right"], [11, 11]))
// console.log(solution(["down", "down", "down", "down", "down"], [7, 9]))

// 삼각형의 완성조건 (2)
// function solution(sides) {
//   let answer = 0;
//   sides.sort((a, b) => a - b)
//   let lec = []
//   for (let i = 1; i < (sides[0] + sides[1]); i += 1) {
//     if (sides[0] + i > sides[1] && i <= sides[1]) {
//       lec.push(i)
//     } else if (sides[0] + sides[1] > i && sides[1] < i) {
//       lec.push(i)
//     }
//   }
//   return answer = lec.length;
// }

// console.log(solution([1, 2]))
// console.log(solution([3, 6]))
// console.log(solution([11, 7]))

// 직사각형 넓이 구하기
// function solution(dots) {
//   let answer = 1;
//   dots.sort((a, b) => a[1] - b[1])
//   console.log(dots)
//   answer *= (dots[2][0] - dots[0][0])
//   answer *= (dots[2][1] - dots[0][1])
//   return Math.abs(answer);
// }

// function solution(dots) {
//   let answer = 0
//   const xDots = dots.flatMap(([x, y]) => x)
//   const yDots = dots.flatMap(([x, y]) => y)
//   const width = Math.max(...xDots) - Math.min(...xDots)
//   const height = Math.max(...yDots) - Math.min(...yDots)
//   return answer = width * height
// }

// console.log(solution([[1, 1], [2, 1], [2, 2], [1, 2]]))
// console.log(solution([[-1, -1], [1, 1], [1, -1], [-1, 1]]))
// console.log(solution([[-2, -1], [-3, -1], [-2, -3], [-1, -3]]))
// console.log(solution([[-4, 5], [2, 5], [-4, 3], [2, -3]]))

// 유한소수 판별하기
// function solution(a, b) {
//   let answer = 1;
//   for (let i = 2; i <= 5; i += 1) {
//     if (b % i === 0) {
//       if (i !== 2 && i !== 5 && i !== 4) {
//         answer = 2
//       }
//     }
//   }
//   return answer;
// }

function makePrimes(n) {
  const primes = Array.from({ length: n + 1 }, (v) => true)
  primes.splice(0, 2, false, false)
  for (let num = 2; num < Math.floor(Math.sqrt(n)) + 1; num++) {
    if (primes[num]) {
      for (let i = num * num; i < n + 1; i += num) {
        primes[i] = false
      }
    }
  }
  return primes
}

function makePrimeFactorization(n) {
  const primes = makePrimes(n)
  const primeNumbers = Array.from({ length: n + 1 }, (v, i) => i).filter((x) => primes[x])
  const result = {}
  for (const number of primeNumbers) {
    if (n % number === 0) {
      result[number] = 0
    }
    while (n % number === 0 && n > 1) {
      result[number]++
      n /= number
    }
    if (n === 1) break
  }
  return result
}

function solution(a, b) {
  const numerator = makePrimeFactorization(a)
  const denominator = makePrimeFactorization(b)

  for (const [key, value] of Object.entries(numerator)) {
    if (key in denominator) {
      denominator[key] = Math.max(0, denominator[key] - value)
    }
  }

  for (const [key, value] of Object.entries(denominator)) {
    if (key === '2' || key === '5') continue
    if (value > 0) return 2
  }
  return 1
}

console.log(solution(7, 20))
console.log(solution(11, 22))
console.log(solution(12, 21))