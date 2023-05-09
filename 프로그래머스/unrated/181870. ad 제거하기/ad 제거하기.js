function solution(strArr) {
    var answer = [];
    for (let x of strArr) {
        if (!x.includes("ad")) answer.push(x)
    }
    return answer;
}