function solution(num_str) {
    var answer = 0;
    for (let x of num_str) {
        answer += +x
    }
    return answer;
}