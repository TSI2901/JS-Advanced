function solve(n,m){
    let num1 = Number(n);
    let num2 = Number(m);
    let result;
    for(let i = num1; i <= num2; i++) {
        result += i;
    }
    return result;
}
let result = solve('1', '36');
console.log(result);