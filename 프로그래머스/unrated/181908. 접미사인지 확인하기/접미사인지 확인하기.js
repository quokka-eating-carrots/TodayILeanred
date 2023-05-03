function solution(my_string, is_suffix) {
    var answer = 0;
    const reg = new RegExp(`${is_suffix}$`, 'g')
    if (reg.test(my_string)) answer = 1
    return answer;
}