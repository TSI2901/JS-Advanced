function calc() {
    let num1 = document.getElementById('num1');
    let num1N = Number(num1.value);
    let num2 = document.getElementById('num2');
    let num2N = Number(num2.value);
    let all = num1N + num2N;
    let sum = document.getElementById('sum');
    sum.value = all;
}
