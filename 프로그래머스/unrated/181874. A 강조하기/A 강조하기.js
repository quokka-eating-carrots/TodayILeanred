function solution(myString) {
    var answer = '';
    for (let x of myString) {
        if (x === 'a' || x === "A") {
            answer += 'A'
        } else {
            answer += x.toLowerCase()
        }
    }
    return answer;
}