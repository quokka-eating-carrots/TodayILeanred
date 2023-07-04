function solution(arr) {
  var answer = [];
  if (!arr.includes(2)) {
    return [-1];
  } else {
    let start = 0;
    let end = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === 2) {
        start = i;
        break;
      }
    }
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      if (arr[i] === 2) {
        end = i;
        break;
      }
    }
    answer = arr.slice(start, end + 1);
  }
  return answer;
}