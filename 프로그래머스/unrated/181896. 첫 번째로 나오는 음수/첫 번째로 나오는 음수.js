function solution(num_list) {
    var answer = -1;
    for (let i = 0; i < num_list.length; i += 1) {
        if (num_list[i] < 0) return answer = i
    }
    return answer;
}