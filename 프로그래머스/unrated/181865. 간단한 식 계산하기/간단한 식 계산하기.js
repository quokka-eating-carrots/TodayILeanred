function solution(binomial) {
    var answer = 0;
	const mathSen = binomial.split(" ")
	if (mathSen[1] === "+") {
		answer = +mathSen[0] + +mathSen[2]
	} else if (mathSen[1] === "-") {
		answer = +mathSen[0] - +mathSen[2]
	} else if (mathSen[1] === "*") {
		answer = +mathSen[0] * +mathSen[2]
	}
    return answer;
}