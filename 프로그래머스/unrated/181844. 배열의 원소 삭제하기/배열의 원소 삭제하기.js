function solution(arr, delete_list) {
    var answer = [];
    for (let x of arr) {
        let check = false
        for (let y of delete_list) {
            if (x === y) check = true
        }
        if (!check) answer.push(x)
    }
    return answer;
}