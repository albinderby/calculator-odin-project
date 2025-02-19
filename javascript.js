let num1;
let num2;
let operator;


function addition(num1,num2){
    return num1+num2;
}

function subtraction (num1,num2){
    return num1-num2;
}

function division(num1,num2){
    return num1-num2;
}


function multiplication(num1,num2){
    return num1*num2;
}



function operator(operator,num1,num2){

    switch (operator){
        case "/":
            division(num1,num2);
            break;
        case "*":
            multiplication(num1,num2);
            break;
        case "+":
            addition(num1,num2);
            break;
        case "-":
            subtraction(num1,num2);
            break;
    }
}