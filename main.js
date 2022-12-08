// [1차] 비밀지도
// function solution(n, arr1, arr2) {
//   var answer = [];
//   let map1 = []
//   let map2 = []
//   let binaryNum = []
//   for (let x of arr1) {
//     binaryNum = x.toString(2).split('')
//     if(binaryNum.length < n) {
//       while(binaryNum.length < n) {
//         binaryNum.unshift('0')
//       }
//       map1.push(binaryNum)
//     } else map1.push(binaryNum)
//   }
//   for (let x of arr2) {
//     binaryNum = x.toString(2).split('')
//     if(binaryNum.length < n) {
//       while(binaryNum.length < n) {
//         binaryNum.unshift('0')
//       }
//       map2.push(binaryNum)
//     } else map2.push(binaryNum)
//   }
//   for (let i = 0; i < n; i += 1) {
//     let resultMap = ''
//     for (let j = 0; j < n; j += 1) {
//       if (map1[i][j] === '1' || map2[i][j] === '1') {
//         resultMap += '#'
//       } else resultMap += ' '
//     }
//     answer.push(resultMap)
//     resultMap = ''
//   }
//   return answer;
// }

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))

// 문자열 내 마음대로 정렬하기
// function solution(strings, n) {
//   var answer = [];
//   strings.sort((a, b) => {
//     if (a[n] > b[n]) {
//       return 1
//     } else if (a[n] < b[n]) {
//       return -1
//     } else if (a[n] === b[n]) {
//       if (a[n + 1] > b[n + 1]) return 1
//       else return -1
//     }
//   })
//   answer = strings
//   return answer;
// }

// console.log(solution(["sun", "bed", "car"], 1))
// console.log(solution(["abce", "abcd", "cdx"], 2))

// K번째 수
// function solution(array, commands) {
//   var answer = [];
//   let sliceArr = []
//   for (let x of commands) {
//     sliceArr = array.slice(x[0] - 1, x[1]).sort((a, b) => a - b)
//     answer.push(sliceArr[x[2] - 1])
//   }
//   return answer;
// }

// console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))

// 숫자 문자열과 영단어
function solution(s) {
  var answer = 0;
  let num = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g, /nine/g]
  for(let i = 0; i <= 9; i += 1) {
    s = s.replace(num[i], i)
  }
  return Number(s);
}

console.log(solution("one4seveneight"))
console.log(solution("23four5six7"))
console.log(solution("2three45sixseven"))
console.log(solution("123"))