function solution(myString, pat) {
  var answer = 0;
  for (let i = 0; i < myString.length; i += 1) {
    let checkStr = "";
    for (let j = 0; j < pat.length; j += 1) {
      checkStr += myString[i + j];
    }
    if (checkStr === pat) {
      answer += 1;
    }
  }
  return answer;
}