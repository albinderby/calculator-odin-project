const displayDiv=document.querySelector(".display"); 
let firstNumber;
let secondNumber;
let operator;
let isCallingFromOpertor=false;

//thsis function display which button is pressed on the calculator

function displayUserInput(){
const button=document.querySelectorAll(".button")
for(let i=0;i<button.length;i++){
    button[i].addEventListener("click",display)
}

}
function display(event){
    displayDiv.textContent+=event.target.textContent;
}

displayUserInput();


// this function find and store which operator is user choose
function addEventListenerToOpertor(){
   
    const operators=document.querySelectorAll(".operator");
    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener("click",(e)=>
        {   
            if(operator===undefined){
            operator=e.target.textContent
            }
            else{
                let currentOpertor=e.target.textContent;
                isCallingFromOpertor=true;
                document.querySelector("#answer-btn").click()
                isCallingFromOpertor=false;
                operator=currentOpertor;
             }
        }
      
    )
    }
}
addEventListenerToOpertor();

function whenAssignButtonPress(){
    const assinButton=document.querySelector("#answer-btn")

    let answer;

    assinButton.addEventListener("click",()=>{
        [ firstNumber,secondNumber]=displayDiv.textContent.split(`${operator}`);
        console.log(firstNumber+" "+secondNumber+" this is before converting")
        firstNumber=Number(firstNumber);
        if(isCallingFromOpertor){
            secondNumber= Number(secondNumber.substring(0,secondNumber.length-2));
        }
        else{
       secondNumber= Number(secondNumber.substring(0,secondNumber.length-1));
        }
       console.log(`${firstNumber} ${secondNumber}this after transforming`)
        if(operator=="/"){
           answer= division(firstNumber,secondNumber);
            }
            else if(operator=="*"){
              answer=  multiplication(firstNumber,secondNumber);
            }else if(operator=="+"){
             answer=  addition(firstNumber,secondNumber);
            }else if(operator=="-"){
              answer=  subtraction(firstNumber,secondNumber);
            }
            displayDiv.textContent=answer;
            operator=undefined;
    })
   
}

whenAssignButtonPress();




function division(num1,num2){
    return num1/num2
}

function multiplication(num1,num2){
    return num1*num2;
}

function subtraction(num1,num2){
    return num1-num2;
}

function addition(num1,num2){
    return num1+num2;
}