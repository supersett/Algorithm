function solution(num_list) {
    var answer = [];
    let temp = num_list.sort((a, b) => a - b); 
    return temp.slice(0,5);
}