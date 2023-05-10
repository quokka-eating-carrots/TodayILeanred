function solution(arr, intervals) {
    var answer = [];
	for (let [a, b] of intervals) {
		const newArr = arr.slice(a, b + 1)
		answer.push(...newArr)
	}
    return answer;
}