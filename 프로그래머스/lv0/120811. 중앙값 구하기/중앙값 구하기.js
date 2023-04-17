function solution(array) {
  let answer = 0;
  array.sort((a, b) => a - b)
answer = array[parseInt(array.length / 2)]
  return answer;
}