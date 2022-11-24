// function solution(n, r) {
//   let answer = []
//   let dy = Array.from(Array(35), () => Array(35).fill(0))

//   function DFS(n, r) {
//     if (dy[n][r] > 0) return dy[n][r]
//     if (n === r || r === 0) return 1
//     else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)
//   }
  
//   answer = DFS(n, r)
//   return answer
// }

console.log(solution(5, 3))
console.log(solution(33, 19))

function solution(balls, share) {
  let answer = 0
  const [n, m] = [balls, share]
  const fact = [BigInt(1), BigInt(1)]
  for (let i = 2; i <= n; i += 1) {
    fact[i] = fact[i - 1] * BigInt(i)
  }
  return answer = Number(fact[n] / (fact[n - m] * fact[m]))
}