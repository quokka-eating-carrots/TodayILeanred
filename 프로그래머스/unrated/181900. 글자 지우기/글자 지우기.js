function solution(my_string, indices) {
  indices.sort((a, b) => b - a);
  const str = my_string.split("");
  for (let x of indices) {
    str.splice(x, 1, "");
  }
  return str.join("");
}