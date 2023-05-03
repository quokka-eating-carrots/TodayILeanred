function solution(arr) {
    var answer = [];
    for (let x of arr) {
        for (let i = 0; i < x; i += 1) {
            answer.push(x)
        }
    }
    return answer;
}