function solution(my_string, m, c) {
  var answer = '';
  let virStr = []
  for (let i = 0; i < my_string.length; i += m) {
    let str = ""
    for (let j = 0; j < m; j += 1) {
      str += my_string[i + j]
    }
    virStr.push(str)
  }
  for (let x of virStr) {
    answer += x[c - 1]
  }
  return answer;
}