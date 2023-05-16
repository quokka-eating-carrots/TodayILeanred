function solution(x1, x2, x3, x4) {
  var answer = true;
  let fir = true;
  let sec = true;
  x1 || x2 ? fir = true : fir = false
  x3 || x4 ? sec = true : sec = false
  answer = fir && sec
  return answer;
}
