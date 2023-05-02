function solution(my_string, is_prefix) {
  const testREG = new RegExp(`^${is_prefix}`);
  return testREG.test(my_string) ? 1 : 0;
}