function solution(s) {
  var answer = 0;
  let stack = [];
  const sArr = s.split("");
  function stackSolution(str) {
    for (let x of str) {
      if (stack.length > 0) {
        if (x === "]" && stack[stack.length - 1] === "[") stack.pop();
        else if (x === "}" && stack[stack.length - 1] === "{") stack.pop();
        else if (x === ")" && stack[stack.length - 1] === "(") stack.pop();
        else stack.push(x);
      } else {
        stack.push(x);
      }
    }

    for (let i = 0; i < stack.length; i += 1) {
      if (stack[i] === "[" && stack[i + 1] === "]") {
        stack.shift();
        stack.shift();
        i = 0;
      } else if (stack[i] === "{" && stack[i + 1] === "}") {
        stack.shift();
        stack.shift();
        i = 0;
      } else if (stack[i] === "(" && stack[i + 1] === ")") {
        stack.shift();
        stack.shift();
        i = 0;
      }
    }
    if (!stack.length) answer += 1;
  }
  stackSolution(s);
  for (let i = 0; i < s.length - 1; i += 1) {
    stack = [];
    sArr.push(sArr.shift());
    stackSolution(sArr);
  }
  return answer;
}