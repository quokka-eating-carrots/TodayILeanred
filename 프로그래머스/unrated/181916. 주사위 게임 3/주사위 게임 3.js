function solution(a, b, c, d) {
  let map = new Map();
  const arr = [a, b, c, d];
  for (let x of arr) {
    map.set(x, map.get(x) + 1 || 1);
  }
  const sortedMap = [...map].sort((a, b) => b[1] - a[1]);
  console.log(sortedMap);
  if (sortedMap[0][1] === 4) return 1111 * sortedMap[0][0];
  else if (sortedMap[0][1] === 3)
    return (10 * sortedMap[0][0] + sortedMap[1][0]) ** 2;
  else if (sortedMap[0][1] === 2 && sortedMap[1][1] === 2)
    return (
      (sortedMap[0][0] + sortedMap[1][0]) *
      Math.abs(sortedMap[0][0] - sortedMap[1][0])
    );
  else if (sortedMap[0][1] === 2 && sortedMap[1][1] === 1) {
    return sortedMap[1][0] * sortedMap[2][0];
  } else return Math.min(...arr);
}