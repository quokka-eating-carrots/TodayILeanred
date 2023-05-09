function solution(ingredient) {
    var answer = 0
	let stack = []
	for (let x of ingredient) {
		stack.push(x)
		if (stack.length > 0) {
			const hamberger = stack.slice(stack.length - 4, stack.length)
			if (hamberger[0] === 1 && hamberger[1] === 2 && hamberger[2] === 3 && hamberger[3] === 1) {
				answer += 1
				for (let i = 0; i < 4; i += 1) {
					stack.pop()
				}
			}
		}
	}
    return answer;
}