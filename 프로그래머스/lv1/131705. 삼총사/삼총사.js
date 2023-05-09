function solution(number) {
    var answer = 0
	for (let i = 0; i < number.length; i += 1) {
		for (let j = 0; j < number.length; j += 1) {
			for (let k = 0; k < number.length; k += 1) {
				if (i !== j && j !== k && i !== k) {
					if (number[i] + number[j] + number[k] === 0) answer += 1
				}
			}
		}
	}
    return answer / 6;
}