function solution(my_string, s, e) {
  var answer = "";
  const orginStr = my_string.slice(s, e + 1);
  const revStr = orginStr.split("").reverse().join("");
  const reg = new RegExp(orginStr);
  answer = my_string.replace(reg, revStr);
  return answer;
}