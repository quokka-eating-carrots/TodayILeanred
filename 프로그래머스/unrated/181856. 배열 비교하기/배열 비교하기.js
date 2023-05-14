function solution(arr1, arr2) {
    var answer = 0;
    if (arr1.length > arr2.length) return answer = 1
    else if (arr1.length < arr2.length) return answer = -1
    else {
        let sum1 = 0
        let sum2 = 0
        for (let x of arr1) {
            sum1 += x
        }
        for (let x of arr2) {
            sum2 += x
        }
        if (sum1 > sum2) return answer = 1
        else if (sum2 > sum1) return answer = -1
    }
    return answer;
}