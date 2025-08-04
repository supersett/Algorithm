function solution(num_list) {
    let a=num_list.findIndex(x=>x<0);
    return a<0?-1:a;
}