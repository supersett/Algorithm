function solution(n, control) {
    let temp=control.split('')
    
    for (let i = 0; i < temp.length; i++) {
    // 특정 로직 실행
    if(temp[i]==='w'){
        n+=1
    }else if(temp[i]==='s'){
        n-=1
    }else if (temp[i]==='d'){
        n+=10
    }else{
        n-=10
    }
}
    return n;
}