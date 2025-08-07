function solution(my_string) {
    var answer = [];
    
    while(my_string.length>0){
        answer.push(my_string)
        my_string = my_string.substring(1);   }
    
    return answer.sort();
}