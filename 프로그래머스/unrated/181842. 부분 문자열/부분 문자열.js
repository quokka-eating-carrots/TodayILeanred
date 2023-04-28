function solution(str1, str2) {
  return str2.split(str1)[0].length === str2.length ? 0 : 1;
}