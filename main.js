// 직사각형 별 찍기
// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   console.log(("*".repeat(a) + `\n`).repeat(b));
// });

// 최대공약수와 최소공배수
// function solution(n, m) {
//   var answer = [];
//   let bigNum = 0
//   let smallNum = 0
//   if (n > m) {
//     bigNum = n
//     smallNum = m
//   } else {
//     bigNum = m
//     smallNum = n
//   }
//   let gcd = 0
//   for (let i = 1; i <= bigNum; i += 1) {
//     if (bigNum % i === 0 && smallNum % i === 0) {
//       if (gcd < i) {
//         gcd = i
//       }
//     }
//   }
//   let lcm = 0
//   let bigNumArr = []
//   let smallNumArr = []
//   for (let i = 1; i <= bigNum; i += 1) {
//     bigNumArr.push(bigNum * i)
//     smallNumArr.push(smallNum * i)
//   }
//   for (let i = 0; i < bigNumArr.length; i += 1) {
//     for (let j = 0; j < smallNumArr.length; j += 1) {
//       if (bigNumArr[i] === smallNumArr[j]) {
//         lcm = bigNumArr[i]
//         break;
//       }
//     }
//   }
//   console.log(bigNumArr, smallNumArr)
//   return answer = [gcd, lcm];
// }

// function solution(n, m) {
//   let gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m))
//   let lcm = (n, m) => (n * m) / gcd(n, m)
//   return [gcd(n, m), lcm(n, m)]
// }

// console.log(solution(3, 12))
// console.log(solution(2, 5))

// 같은 숫자는 싫어
// function solution(arr) {
//   let stack = []
//   for (let x of arr) {
//     if (stack.length > 0 && stack[stack.length - 1] === x) {
//       stack.pop()
//       stack.push(x)
//     } else stack.push(x)
//   }
//   return stack;
// }

// console.log(solution([1, 1, 3, 3, 0, 1, 1]))
// console.log(solution([4, 4, 4, 3, 3]))

// 이상한 문자 만들기
function solution(s) {
  var answer = '';
  let cnt = 0
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === ' ') {
      answer += s[i]
      cnt = 0
    } else if (cnt % 2 === 0) {
      cnt += 1
      answer += s[i].toUpperCase()
    } else if (cnt % 2 !== 0) {
      cnt += 1
      answer += s[i].toLowerCase()
    }
  }
  return answer;
}

console.log(solution("try hello world"))
console.log(solution("abcd efg hijk"))
console.log(solution("  HEf efer sErgd  "))