const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");


let answer='';
const num=Number(input[1]);
for (let i=0;i<num;i++){
    answer+=input[0]
}
console.log(answer)
