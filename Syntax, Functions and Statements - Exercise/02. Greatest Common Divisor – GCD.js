function FindGreatestCommonDivisor(num1,num2){
    let GCD = 0;
    let biggerrNum = num1 > num2 ? num1 : num2;
    for (let i = biggerrNum; i > 0; i--) {
       if (num1 % i == 0 && num2 % i == 0) {
        GCD = i;
        break;
       }
    }
    console.log(GCD);
}
FindGreatestCommonDivisor(15,5)