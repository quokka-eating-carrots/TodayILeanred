function solution(s) {
  let answer = [];
  let newS = "";
  for (let i = 0; i < s.length; i += 1) {
    if (newS.includes(s[i])) {
      let def = 0;
      for (let j = 0; j < newS.length; j += 1) {
        if (newS[j] === s[i]) {
          def = Math.abs(j - i);
        }
      }
      answer.push(def);
    } else {
      answer.push(-1);
    }
    newS += s[i];
  }
  return answer;
}