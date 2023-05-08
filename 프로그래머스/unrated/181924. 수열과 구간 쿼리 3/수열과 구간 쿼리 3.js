function solution(arr, queries) {
    var answer = arr
    for (let x of queries) {
		const a = answer[x[0]]
        const b = answer[x[1]]
        answer[x[0]] = b
        answer[x[1]] = a
    }
    return answer;
}