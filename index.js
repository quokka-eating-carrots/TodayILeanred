// 옹알이 (2)
// function solution(babbling) {
//   var answer = 0;
//   for (let x of babbling) {
//     if (x.replace("ye", " ").replace("aya", " ").replace("woo", " ").replace("ma", " ").trim() === "") {
//       answer += 1
//     }
//   }
//   return answer;
// }

function solution(babbling) {
  // (그룹) + 그룹과 동일한 단어
  // 2개의 동일한 단어를 연속적으로 사용해야만 매치된다.
  // \1은 정규식의 그룹 중 첫 번째 그룹을 가리킨다.
  // 연속적인 발음을 할 수 없으니까 연속적으로 발음이 나타나는 것을 걸러 주게 된다.
  const r1 = /(aya|ye|woo|ma)\1/
  // 그룹으로 시작하고, 하나 이상 일치하며 그룹으로 끝나야 한다.
  const r2 = /^(aya|ye|woo|ma)+$/
  let answer = 0
  for (let x of babbling) {
    const m = r1.exec(x)
    if (m) continue

    const m2 = r2.exec(x)
    if (!m2) continue

    answer += 1
  }
  return answer
}

// console.log(solution(["aya", "yee", "u", "maa"]))
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))
// console.log(solution(["maayama", "mama"]))