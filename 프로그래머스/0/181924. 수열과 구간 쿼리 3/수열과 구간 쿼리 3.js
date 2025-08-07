function solution(arr, queries) {
    var answer = [];
    
for (let i = 0; i < queries.length; i++) {
    let a=arr[queries[i][0]]
    let b=arr[queries[i][1]]

    arr[queries[i][1]]=a
    arr[queries[i][0]]=b
} 
    
    return arr;
}