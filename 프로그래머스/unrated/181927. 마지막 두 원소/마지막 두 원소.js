function solution(num_list) {
    var answer = [];
    const numLen = num_list.length
    if (num_list[numLen - 1] > num_list[numLen - 2]) {
        answer = [...num_list, num_list[numLen - 1] - num_list[numLen - 2]]
    } else {
        answer = [...num_list, num_list[numLen - 1] * 2]
    }
    return answer;
}