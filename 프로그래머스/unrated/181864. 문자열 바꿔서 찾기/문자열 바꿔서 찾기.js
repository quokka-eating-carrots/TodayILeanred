function solution(myString, pat) {
    var answer = 0;
    let changeString = ""
    for (let x of myString) {
        if (x === "A") {
            changeString += "B"
        } else {
            changeString += "A"
        }
    }
    if (changeString.includes(pat)) answer = 1
    return answer;
}