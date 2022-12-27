function solution(X, Y) {
  let answer = []
  let mapX = new Map()
  for (let x of X) {
    mapX.set(x, (mapX.get(x) || 0) + 1)
  }

  for (let y of Y) {
    if (mapX.has(y) && mapX.get(y) !== 0) {
      answer.push(y)
      mapX.set(y, mapX.get(y) - 1)
    }
  }

  answer.sort((a, b) => b - a)
  if (!answer.length) return "-1"
  else if (answer[0] === "0") return "0"
  return answer.join("")
}