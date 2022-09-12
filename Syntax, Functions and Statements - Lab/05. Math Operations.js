function solve(num1,num2,operator){
    let output;
    if(operator == '+'){
        output = num1 + num2;
    }
    else if(operator == '-'){
        output = num1 - num2;
    }
    else if(operator == '*'){
        output = num1 * num2;
    } 
    else if(operator == '/'){
        output = num1 / num2;
    } 
    else if(operator == '%'){
        output = num1 % num2;
    }
    else if(operator == '**'){
        output = num1 ** num2;
    }   
    console.log(output)
}
solve(2,2,"*")