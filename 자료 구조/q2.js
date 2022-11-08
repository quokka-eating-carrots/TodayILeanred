function solution (s) {
  let answer = ''
  let stack = []
  for (let x of s) {
    if (x === ')') {
      while(stack.pop() !== '(');
    } else {
      stack.push(x)
    }
  }
  return answer = stack.join('')
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))
console.log(solution('((AF)B)(D)E(F)'))
console.log(solution('(Aab)(EsG)FFD'))
console.log(solution('(YYYDD)sh(kkf(hfs))'))