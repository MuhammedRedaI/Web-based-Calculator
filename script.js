
equalBtn = document.querySelector(".equal-btn")
operatorBtns = document.querySelectorAll(".operator");
normalBtns = document.querySelectorAll(".normal-btn");
allBtns = document.querySelectorAll(".btn");

const hoverEffectForNorm = (event) => {
    event.target.style.backgroundColor = "#ebebeb";
}
const hoverEffectForOp = (event) => {
    event.target.style.backgroundColor = "#dfb07e";
};
const reset = (event) => {
    event.target.style.backgroundColor ="";
}

const mouseDownEffectForOp = (event) => {
    event.target.style.backgroundColor = "#dd8d37";
}

const mouseDownEffectForNorm = (event) => {
    event.target.style.backgroundColor = "#bbbcbe";
}

const mouseUpEffectForNorm = (event) => {
    if(event.target.matches(":hover")){
        event.target.style.backgroundColor = "#ebebeb";
    }
}

const mouseUpEffectForOp = (event) => {
    if(event.target.matches(":hover")){
        event.target.style.backgroundColor = "#dfb07e";
    }
}

normalBtns.forEach(function(btn){
    btn.addEventListener("mouseover",hoverEffectForNorm);
    btn.addEventListener("mouseout",reset);
    btn.addEventListener("mousedown",mouseDownEffectForNorm);
    btn.addEventListener("mouseup",mouseUpEffectForNorm);
})


operatorBtns.forEach(function(btn){
    btn.addEventListener("mouseover",hoverEffectForOp);
    btn.addEventListener("mouseout",reset);
    btn.addEventListener("mousedown",mouseDownEffectForOp);
    btn.addEventListener("mouseup",mouseUpEffectForOp);
})

let currentValue = "";
let firstValue = null;
let operator = null;
let isSecondNumber = false;

const normalBtnsWithout = Array.from(normalBtns).slice(2)
normalBtnsWithout.forEach(function(btn){
    btn.addEventListener("click", function(){
        if(isSecondNumber){
            currentValue = "";
            isSecondNumber = false;
        }
        currentValue += btn.value;
        output.innerText = currentValue;
    })
})

const operatorBtnsWithoutEqual = Array.from(operatorBtns).slice(0,-1);

operatorBtnsWithoutEqual.forEach(function(btn){

    btn.addEventListener('click', function(){
        if(firstValue === null){
            firstValue = parseInt(currentValue);
        }else if(!isSecondNumber){
            calcualte();
        }
        operator = btn.value;
        isSecondNumber = true;
    })
    
})

equalBtn.addEventListener("click", function(){
    if(firstValue !== null && currentValue !== ""){
        calculate();
        operator = null;
        isSecondNumber = false;
    }
})

const clearBtn = document.querySelector(".clear-btn");

clearBtn.addEventListener("click", function(){
    firstValue = null;
    currentValue = "";
    operator = null;
    isSecondNumber = false;
    output.innerText = "0";
})

function calculate(){
    const secondValue = parseInt(currentValue);
    let result;
    switch(operator){
        case "+":
            result = firstValue + secondValue;
            break;
        case "/":
            result = firstValue / secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "-":
            result = firstValue - secondValue;
            break;
            default:
                return;
    }
    firstValue = result;
    currentValue = result.toString();
    output.innerText = currentValue;
};
