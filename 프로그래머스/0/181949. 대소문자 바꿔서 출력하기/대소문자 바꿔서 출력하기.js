const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim();

function swapString(str){
    let target='';
    
    for(i=0;i<str.length;i++){
        let char=str[i];
        
        if(char===char.toUpperCase()){
            target+=char.toLowerCase();
        }else{
            target+=char.toUpperCase();
        }
    }
    
    console.log(target);
}

swapString(input)