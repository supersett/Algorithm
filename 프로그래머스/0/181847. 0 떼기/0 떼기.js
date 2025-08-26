function solution(n_str) {
    var answer = '';
    var temp=n_str.split('')
    while(true){
        if(temp[0]==='0'){
            temp.shift()
        }else{
            break
        }
    }
    
    return temp.join('');
}