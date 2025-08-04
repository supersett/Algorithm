function solution(a, b) {
    
    let temp1=Number(String(a)+String(b))
    let temp2=Number(String(b)+String(a))
    
    return temp1 >= temp2? temp1 : temp2
}