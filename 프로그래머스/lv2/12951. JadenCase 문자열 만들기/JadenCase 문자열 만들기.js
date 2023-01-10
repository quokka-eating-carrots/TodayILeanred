function solution(s) {
  var answer = '';
  const newS = s.split(" ")
  for (let x of newS) {
    for (let i = 0; i < x.length; i += 1) {
      if (i === 0) {
        if (48 <= x[0].charCodeAt() && x[0].charCodeAt() <= 57) {
          answer += x[0]
        } else {
          answer += x[0].toUpperCase()
        }
      } else {
        answer += x[i].toLowerCase()
      }
      // if (i === x.length - 1 && newS.indexOf(x) !== newS.length - 1) {
      //   answer += " "
      // }
    }
    answer += " "
  }
  answer = answer.slice(0, answer.length - 1)
  return answer;
}