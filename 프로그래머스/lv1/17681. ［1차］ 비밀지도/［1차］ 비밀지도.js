function solution(n, arr1, arr2) {
  var answer = [];
  let map1 = []
  let map2 = []
  let binaryNum = []
  for (let x of arr1) {
    binaryNum = x.toString(2).split('')
    if(binaryNum.length < n) {
      while(binaryNum.length < n) {
        binaryNum.unshift('0')
      }
      map1.push(binaryNum)
    } else map1.push(binaryNum)
  }
  for (let x of arr2) {
    binaryNum = x.toString(2).split('')
    if(binaryNum.length < n) {
      while(binaryNum.length < n) {
        binaryNum.unshift('0')
      }
      map2.push(binaryNum)
    } else map2.push(binaryNum)
  }
  for (let i = 0; i < n; i += 1) {
    let resultMap = ''
    for (let j = 0; j < n; j += 1) {
      if (map1[i][j] === '1' || map2[i][j] === '1') {
        resultMap += '#'
      } else resultMap += ' '
    }
    answer.push(resultMap)
    resultMap = ''
  }
  return answer;
}