function solution(s) {
  let answer = [];
  answer = Array(s.length).fill(-1)
  for (let i = 0; i < s.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (s[i] === s[j]) {
        answer[i] = i - j
      }
    }
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
  return answer;
}