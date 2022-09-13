"use strict"
function SameNumbers(num){
    let sum = 0;
    let areTheSame = true;
    let sumAsaString = num.toString();
    for (let index = 0; index < sumAsaString.length; index++) {
        let currDigit = Number(sumAsaString[index]);
        sum += currDigit;
        if (sumAsaString[0] != sumAsaString[index]) {
            areTheSame = false;
        }
    }
    console.log(areTheSame)
    console.log(sum)
}
SameNumbers(2222)