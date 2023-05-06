function solution(a, b) {
	let answer = 0
	const ab = `${a}${b}`
	const abMul = 2 * a * b
	if (+ab >= abMul) answer = +ab
	else if (+ab <= abMul) answer = abMul
	return answer
}