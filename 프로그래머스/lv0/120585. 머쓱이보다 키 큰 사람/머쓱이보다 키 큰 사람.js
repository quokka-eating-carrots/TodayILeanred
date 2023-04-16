function solution(array, height) {
  let answer = 0;
    for (let x of array) {
        if (x > height) answer += 1
    }
    return answer;
}
