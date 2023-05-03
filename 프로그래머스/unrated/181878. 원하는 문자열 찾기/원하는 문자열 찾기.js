function solution(myString, pat) {
    var answer = 0;
    const reg = new RegExp(`${pat}`, 'gi')
    if (myString.length < pat) return 
    else if (reg.test(myString)) answer = 1
    return answer;
}