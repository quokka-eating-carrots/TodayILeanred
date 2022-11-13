# TodayILeanred

## 221113 <br>
순서쌍의 개수 문제에서 최소공배수 같은 것을 구해야 되나 싶었는데 검색해 보니 다양한 풀이가 있었다. <br>

내가 정답으로 제출한 답안
```javascript
function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) answer += 1
  }
  return answer;
}
```
n까지 진행하면서 나머지가 0이 되는 수는 순서쌍에 들어갈 수 있다. 순서쌍 (a, b)는 (b, a)가 되어도 성립하기 때문에 n까지 돌면 알아서 (a, b)와 (b, a)를 똑같이 카운팅 하는 거라고 할 수 있다.

검색으로 찾은 답안
```javascript
function solution(n) {
  let count = 0;
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) count += 2;
  }
  if (n % Math.sqrt(n) === 0) count += 1;
  return count;
}
```
해당 답안은 기존 수에 루트를 씌워서 계산하였다. 쉽게 말하자면 (a, b)에서 a만 찾아내서 곱하기 2를 해 준 셈이다. 그 후 n을 루트를 씌운 수로 나누었을 때도 나머지가 0이라면 더하기 1을 해 주었다.
