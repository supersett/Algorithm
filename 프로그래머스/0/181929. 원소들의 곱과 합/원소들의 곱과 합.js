function solution(num_list) {
    var answer = 0;
    let temp1=num_list.reduce((sum,x)=>sum*x,1);
    
    let temp2=num_list.reduce((sum,x)=>sum+x,0);
    return temp1<temp2**2?1:0;
}