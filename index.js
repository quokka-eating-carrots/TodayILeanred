// 완주하지 못한 선수
// function solution(participant, completion) {
//   var answer = '';
//   let map = new Map()
//   for (let x of participant) {
//     map.set(x, (map.get(x) || 0) + 1)
//   }
//   for (let x of completion) {
//     for (let [key, value] of map) {
//       if (x === key) {
//         map.set(x, (map.get(x) || 0) - 1)
//       }
//     }
//   }
//   for (let [k, v] of map) {
//     if (v === 1) {
//       answer = k
//     }
//   }
//   return answer;
// }

// function solution(participant, completion) {
//   let answer = ''
//   for (let i = 0; i < participant.length; i += 1) {
//     for (let j = 0; j < completion.length; j += 1) {
//       if (participant[i] === completion[j]) {
//         participant.splice(i, 1)
//         completion.splice(j, 1)
//         i -= 1
//         j -= 1
//       }
//     }
//   }
//   return participant[0]
// }

function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]))
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]))