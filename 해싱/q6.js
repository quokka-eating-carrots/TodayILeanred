// 같은 빈도수 만들기
// function solution (s) {
//   let answer = [0, 0, 0]
//   let map = new Map()
//   for (let x of s) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   let max = 0
//   let vArr = []
//   for (let [k, v] of map) {
//     if (v > max) {
//       max = v
//     }
//     vArr.push(v)
//     for (let i = 0; i < 3; i += 1) {
//       if (vArr[i] < max) {
//         answer[i] += 1
//       } else answer[i] === 0
//     }
//   }
//   return answer
// }

console.log(solution('aaabc'))
console.log(solution('aabb'))
console.log(solution('abc'))

function solution(s) {
  let answer = [];
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  let max = Math.max(...map.values());
  for (let x of "abc") {
    let F = (map.get(x) === undefined) ? 0 : map.get(x)
    answer.push(max - F)
  }
  return answer;
}

function solution(s) {
  let answer = -1;
  let map = new Map();
  for (let i of s) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  let max = Math.max(...map.values());
  let l1 = [max, max, max];
  let l2 = ["a", "b", "c"];
  for (let i in l1) {
    l1[i] = l1[i] - (map.get(l2[i]) || 0);
  }
  return l1;
}