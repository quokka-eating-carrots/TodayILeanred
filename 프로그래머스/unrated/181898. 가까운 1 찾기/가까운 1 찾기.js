function solution(arr, idx) {
    var answer = -1;
    for (let i = idx; i < arr.length; i += 1) {
        if (arr[i] === 1 && i >= idx) return answer = i
    }
    return answer;
}