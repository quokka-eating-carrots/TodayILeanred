function solution(num_list, n) {
    var answer = 0;
    for (let x of num_list) {
        if (x === n) return answer = 1
    }
    return answer;
}