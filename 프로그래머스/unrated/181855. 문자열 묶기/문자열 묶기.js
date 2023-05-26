function solution(strArr) {
  var answer = 0;
  let map = new Map();
  for (let x of strArr) {
    map.set(x.length, map.get(x.length) + 1 || 1);
  }
  for (let [k, v] of map) {
    if (v > answer) answer = v;
  }
  return answer;
}