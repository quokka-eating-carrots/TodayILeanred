function solution(a, b) {
    var answer = 0;
    const fir = `${a}${b}`
    const sec = `${b}${a}`
    if (+fir > +sec) answer = +fir
    else answer = +sec
    return answer;
}