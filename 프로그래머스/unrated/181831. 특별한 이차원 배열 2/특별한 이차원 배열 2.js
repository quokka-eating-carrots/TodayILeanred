function solution(arr) {
    var answer = 1;
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr.length; j += 1) {
            if (arr[i][j] !== arr[j][i]) return answer = 0
        }
    }
    return answer;
}