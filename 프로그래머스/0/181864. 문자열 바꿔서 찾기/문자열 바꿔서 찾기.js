function solution(myString, pat) {
    var answer = 0;
    let temp=myString.split("")
    
    for (let i = 0; i < myString.length; i++) {
    if(temp[i]==='A'){
        answer+='B'
    }else{
        answer+='A'
    }
}
    
    return answer.includes(pat)?1:0;
}