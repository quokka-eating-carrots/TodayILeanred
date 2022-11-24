// function solution(n) {
//   let answer = ''
//   if (n > 1) {
//     answer += n % 2
//     return solution(parseInt(n / 2))
//   } else if (n === 1) return answer += 1
// }

function solution(n) {
  let answer = 0, tmp = []
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      tmp.push(n % 2);
    }
  }
  DFS(n);
  for (let i = 0; i < tmp.length; i += 1) {
    answer = (answer * 10) + tmp[i]
  }
  return answer
}

console.log(solution(11))