function solution(arr, delete_list) {
    var answer = [];
    let temp=arr
    for (let i = 0; i < delete_list.length; i++) {

    temp=temp.filter(x=>x!==delete_list[i])    
        
        
}
    
    return temp;
}