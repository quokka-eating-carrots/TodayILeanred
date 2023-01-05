// 성격 유형 검사하기

function solution(survey, choices) {
  let answer = '';
  let result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0
  }
  for (let i = 0; i < survey.length; i += 1) {
    if (choices[i] === 1) {
      result[survey[i][0]] += 3
    } else if (choices[i] === 2) {
      result[survey[i][0]] += 2
    } else if (choices[i] === 3) {
      result[survey[i][0]] += 1
    } else if (choices[i] === 5) {
      result[survey[i][1]] += 1
    } else if (choices[i] === 6) {
      result[survey[i][1]] += 2
    } else if (choices[i] === 7) {
      result[survey[i][1]] += 3
    }
  }

  if (result.R > result.T || result.R === result.T) {
    answer += "R"
  } else if (result.R < result.T) {
    answer += "T"
  }
  if (result.C > result.F || result.C === result.F) {
    answer += "C"
  } else if (result.C < result.F) {
    answer += "F"
  }
  if (result.J > result.M || result.J === result.M) {
    answer += "J"
  } else if (result.J < result.M) {
    answer += "M"
  }
  if (result.A > result.N || result.A === result.N) {
    answer += "A"
  } else if (result.A < result.N) {
    answer += "N"
  }
  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]))

// 딥다이브 클래스의 상속 예제
class Name {
  constructor(middle, last) {
    this.middle = middle
    this.last = last
  }

  getName() {
    return `${this.middle}${this.last}`
  }

  info() {
    return `저의 이름은 ${this.middle}${this.last}입니다.`
  }
}

class FullName extends Name {
  constructor(first, middle, last) {
    super(middle, last)
    this.first = first
  }

  info() {
    return super.info() + ` 저의 성은 ${this.first}입니다.`
  }
}

const fullName = new FullName('김', '쿼', '카')
console.log(fullName)
console.log(fullName.getName())
console.log(fullName.info())