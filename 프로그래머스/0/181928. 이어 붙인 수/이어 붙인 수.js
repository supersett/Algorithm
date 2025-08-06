function solution(num_list) {
    let a=''
    let b=''
    var answer = 0;
    let temp=''
    while(num_list.length > 0){ 
        temp=num_list.shift()
        if(temp%2===0){
            a+=temp+''
        }else{
            b+=temp+''
        }
    }
    
    return Number(a)+Number(b);
}