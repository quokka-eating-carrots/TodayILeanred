function solution(arr, k) {
    var answer = [];
    if (k % 2 === 0) {
        for (let x of arr) {
            answer.push(x + k)
        }
    } else {
        for (let x of arr) {
            answer.push(x * k)
        }
    }
    return answer;
}