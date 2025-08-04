function solution(n) {
    var answer = 0;
    if(n===1){
        return 1
    }
    if(n%2===0){
        // 짝수
        for(let i=0;i<=n;i+=2){
            answer+=i**2
        }
    }else{
        // 홀수
        for(let i=1;i<=n;i+=2){
            answer+=i
        }
    }
    return answer;
}