function solution(id_list, report, k) {
  let answer = []
  answer = Array(id_list.length).fill(0)
  let reportUsers = {}
  let reportCnt = {}

  for (let x of id_list) {
    reportUsers[x] = []
    reportCnt[x] = 0
  }

  for (let x of report) {
    x = x.split(" ")
    reportUsers[x[0]].push(x[1])
  }

  for (let user in reportUsers) {
    let set = new Set(reportUsers[user])
    reportUsers[user] = set
    for (let u of reportUsers[user]) {
      reportCnt[u] += 1
    }
  }

  for (let cnt in reportCnt) {
    if (reportCnt[cnt] >= k) {
      for (let user in reportUsers) {
        if (reportUsers[user].has(cnt)) {
          answer[id_list.indexOf(user)] += 1
        }
      }
    }
  }

  return answer
}