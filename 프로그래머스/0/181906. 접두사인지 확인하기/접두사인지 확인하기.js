function solution(my_string, is_prefix) {
    var answer = 0;
    return is_prefix===my_string.slice(0,is_prefix.length)?1:0;
}