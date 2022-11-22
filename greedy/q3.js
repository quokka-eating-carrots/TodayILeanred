// function solution(times) {
//   let answer = 0
//   times.sort((a, b) => a[0] - b[0])
//   for (let i = 0; i < times.length - 1; i += 1) {
//     for (let j = 1; j < times.length; j += 1) {
//       if (times[i][1] === times[j][0]) {
//         answer += 1
//       }
//     }
//   }
//   return answer
// }

function solution(meeting){
  let answer=0;
  meeting.sort((a, b)=>{
      if(a[1]===b[1]) return a[0]-b[0];
      else return a[1]-b[1];
  });
  let et=0;
  for(let x of meeting){
      if(x[0]>=et){
          answer++;
          et=x[1];
      }
  }
  return answer;
}


console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]))
console.log(solution([[3, 3], [1, 3], [2, 3]]))
console.log(solution([[1, 2], [2, 3], [3, 4], [4, 7], [5, 6], [6, 7]]))