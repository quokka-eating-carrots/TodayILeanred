function solution(arr, queries) {
  var answer = arr;
  for (let i = 0; i < queries.length; i += 1) {
    for (let j = queries[i][0]; j <= queries[i][1]; j += 1) {
      arr[j] += 1;
    }
  }
  return answer;
}