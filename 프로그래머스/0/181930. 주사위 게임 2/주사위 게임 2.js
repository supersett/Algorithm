function solution(a, b, c) {
    
    if(a===b){
        if(a===c){
            return (a + b + c) * (a**2 + b**2 + c**2 ) * (a**3 + b**3 + c**3 )
        }else {
            return (a + b + c) * (a**2 + b**2 + c**2 )
        }
    }else if(b===c){
        return (a + b + c) * (a**2 + b**2 + c**2 )
    }else if (a===c){
        return (a + b + c) * (a**2 + b**2 + c**2 )
    }
    
    return a+b+c;
}