function solution(my_string, target) {
    var answer = 0;
    my_string.includes(target) ? answer = 1 : answer = 0
    return answer;
}