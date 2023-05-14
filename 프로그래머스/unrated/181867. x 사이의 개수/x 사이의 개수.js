function solution(myString) {
    var answer = [];
    for (let x of myString.split("x")) answer.push(x.length)
    return answer;
}