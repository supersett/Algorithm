function solution(num_str) {
    var answer = 0;
    var temp_list=num_str.split("")
    
    return temp_list.reduce((sum,x)=>(+sum)+(+x));
}