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