// 두 번 이상 사용한 문자
// function solution (s) {
//   let answer = ''
//   let map = new Map()
//   for (let x of s) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   return answer
// }

// function solution(s){
// 	cnt = {};
// 	for(let x of s){
// 		cnt[x] = (cnt[x] || 0) + 1;
// 		if(cnt[x] === 2) return x;
// 	}
// 	return -1;
// }

function solution(s) {
  let answer = -1;
  let sH = new Map();
  for (let x of s) {
      sH.set(x, (sH.get(x) || 0) + 1);
      if (sH.get(x) === 2) {
          answer = x;
          break;
      }
  }
  return answer;
}

console.log(solution('abccbaacz'))
console.log(solution('aabb'))
console.log(solution('abcdefg'))