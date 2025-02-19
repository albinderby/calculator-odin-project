let num1="";
let num2="";
let operator="";


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



function operatoration(operator,num1,num2){

    switch (operator){
        case "/":
         return   division(num1,num2);
        case "*":
         return   multiplication(num1,num2);
        case "+":
        return    addition(num1,num2);
        case "-":
        return    subtraction(num1,num2);
    }
}


let operatorFlag=undefined;
function getNumberEventHandler(e){
   
    if(operatorFlag===undefined){
        num1+=e.target.textContent;
    }else{
        num2+=e.target.textContent;
    }
   display();
}
function getOperatorEventHandler(e){
    if(operator===""){
            operator=e.target.textContent;
        }
else{
    answer();
    operator=e.target.textContent;
}
    operatorFlag=true;
    display();
}
function getUserInput(){
    const numbers=document.querySelectorAll(".number");
    for(let i=0;i<numbers.length;i++){
        numbers[i].addEventListener("click",getNumberEventHandler)
    }

    const operators=document.querySelectorAll(".operator");
    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener("click",getOperatorEventHandler)
    }
}

function equalToButton(){
    const equalToButton=document.querySelector(".answer");
    equalToButton.addEventListener("click",answer);
}
 
function answer(){  
    num1= operatoration(operator,Number(num1),Number(num2));
    num2="";
    operator="";
    operatorFlag=false;
    display();
 
}


function display(){
    const display=document.querySelector(".display");
    display.textContent=num1+operator+num2;
}
getUserInput();
equalToButton();