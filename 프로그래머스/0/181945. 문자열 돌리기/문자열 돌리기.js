const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
let tmp=[...input]

for(i=0;i<tmp.length;i++){
    console.log(tmp[i])
}

