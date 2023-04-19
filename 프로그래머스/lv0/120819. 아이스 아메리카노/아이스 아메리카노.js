function solution(money) {
  let answer = []
  let drink = Math.floor(money / 5500)
  let chrage = money - (drink * 5500)
  answer = [drink, chrage]
  return answer
}