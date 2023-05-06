function solution(a, d, included) {
	var answer = 0;
	let init = a
	for (let x of included) {
		if (x) answer += init
		init += d
	}
	return answer;
}