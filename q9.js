function solution(s) {
  let answer = 'YES';
  let lt = 0, rt = s.length - 1
  while(lt < rt) {
    if (s[lt] !== s[rt]) {
      let sub1 = s.substring(lt, rt)
      let sub2 = s.substring(lt + 1, rt + 1)
      if (sub1 !== sub1.split('').reverse().join('')
        && sub2 !== sub2.split('').reverse().join('')) {
        return answer = 'NO'
      }
      break;
    } else {
      lt += 1
      rt -= 1
    }
  }
  return answer;
}

console.log(solution('abcbdcba'))
console.log(solution('abcabbakcba'))
console.log(solution('abcacbakcba'))

function solution(s) {
  let answer = '';
  let sArr = s.split('');

  if (sArr.reverse().join('') === s) {
    answer = 'YES'
  } else {
    for (let i = 0; i < s.length; i += 1) {
      sArr.splice(i, 1)
      if (sArr.join('') === sArr.reverse().join('')) {
        answer = 'YES'
        break
      } else {
        answer = 'NO'
      }
      sArr = s.split('')
    }
  }
  return answer;
}