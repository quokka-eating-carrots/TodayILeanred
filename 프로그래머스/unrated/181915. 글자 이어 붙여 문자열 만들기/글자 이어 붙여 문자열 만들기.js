function solution(my_string, index_list) {
    var answer = '';
    for (let x of index_list) {
        answer += my_string[x]
    }
    return answer;
}