const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString()

if(input%2===1){
    console.log(input+' is odd')
}else{
    console.log(input+' is even')
}
