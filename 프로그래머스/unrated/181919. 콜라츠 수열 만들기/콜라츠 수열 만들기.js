function solution(n) {
    var answer = [n];
    let changeN = n
    while (changeN !== 1) {
        if (changeN % 2 === 0) {
            changeN = changeN / 2
        } else {
            changeN = 3 * changeN + 1
        }
        answer.push(changeN)
    }
    return answer;
}