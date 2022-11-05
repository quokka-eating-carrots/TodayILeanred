function solution(s) {
  let answer = 0;
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  for (let i = 0; i < 10; i += 1) {
    let tmp = s.split(nums[i])
    s = tmp.join(i)
  }
  answer = Number(s)
  return answer;
}

console.log(solution('fivesevenzero'));
console.log(solution('zerofiveseven'));
console.log(solution('eightsixzerofivesevenfive'));