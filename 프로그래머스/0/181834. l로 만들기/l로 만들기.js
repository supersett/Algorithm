function getAlphabetIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function solution(myString) {
    var answer = '';
    let temp_list=myString.split('')
    var l_index=getAlphabetIndex('l')
    for (let i = 0; i < temp_list.length; i++) {
        if(getAlphabetIndex(temp_list[i])<l_index){
            answer+='l'
        }else{
            answer+=temp_list[i]
        }

}
    
    return answer;
}