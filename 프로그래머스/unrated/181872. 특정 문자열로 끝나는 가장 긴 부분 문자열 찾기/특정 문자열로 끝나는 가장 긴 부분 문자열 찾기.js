function solution(myString, pat) {
  var answer = myString;
  const myREG = new RegExp(`${pat}$`, "g");
  for (let i = 0; i < myString.length; i += 1) {
    if (myREG.test(answer)) {
      return answer;
    } else {
      answer = answer.split("");
      answer.pop();
      answer = answer.join("");
    }
  }
}