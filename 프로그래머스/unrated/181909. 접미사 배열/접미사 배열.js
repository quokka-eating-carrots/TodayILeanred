function solution(my_string) {
    var answer = [];
	const reverseWord = my_string.split("").reverse().join("")
	let word = ""
	for (let x of reverseWord) {
		word += x
		answer.push(word.split("").reverse().join(""))
	}
    return answer.sort();
}