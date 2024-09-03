function solution(number, limit, power) {
  //1의 약수는 1개이기때문에 1이상부터 계산할거임
  var answer = 1;
  for (let i = 2; i <= number; i++) {
    //i의 약수의갯수를 구할거임
    let divisor_count = 0;
    //1부터 검사
    let index = 1;
    while (index <= Math.sqrt(i)) {
      if (i % index === 0) {
        if (index ** 2 === i) {
          divisor_count += 1;
        } else {
          divisor_count += 2;
        }
      }
      index++;
    }

    if (divisor_count > limit) {
      answer += power;
    } else {
      answer += divisor_count;
    }
  }
  return answer;
}