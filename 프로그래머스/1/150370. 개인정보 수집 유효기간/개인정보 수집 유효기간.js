function solution(today, terms, privacies) {
  var answer = [];
  var obj = {};
  let today_list = today.split(".");

  for (let i = 0; i < terms.length; i++) {
    obj[terms[i].split(" ")[0]] = Number(terms[i].split(" ")[1]);
  }

  for (let j = 0; j < privacies.length; j++) {
    //[2021 05 02]
    let target = privacies[j].split(" ")[0].split(".");
    let plus_month = obj[privacies[j].split(" ")[1]];

    let count =
      (Number(today_list[0]) - Number(target[0])) * 12 +
      Number(today_list[1]) -
      Number(target[1]) -
      plus_month;

    if (count > 0) {
      answer.push(j + 1);
    }
    if (count === 0) {
      if (Number(today_list[2]) >= Number(target[2])) {
        answer.push(j + 1);
      }
    }
  }
  return answer;
}
