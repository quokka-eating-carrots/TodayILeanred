function solution(my_string, alp) {
    var answer = '';
    for (let x of my_string) {
        if (x === alp) {
            answer += x.toUpperCase()
        } else {
            answer += x
        }
    }
    return answer;
}