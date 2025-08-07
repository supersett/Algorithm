function solution(num_list) {
    let a = num_list.at(-1)
    let b = num_list.at(-2)
    let temp=a>b ? a-b:a*2
    let answer=[...num_list,temp]
    return answer;
}