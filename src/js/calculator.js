const inputNumbers = document.querySelector(".display-number");
const displaySum = document.querySelector(".display-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLastNumber = document.querySelector(".clear-lastnumber");
let display1 = '';
let display2 = '';
let result = null;
let lastOperation ='';
let haveDot ='';

numbers.forEach(number =>{
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        display2 += e.target.innerText;
        displaySum.innerText = display2;
    })
});


operations.forEach(operation =>{
    operation.addEventListener("click", (e) =>{
        if(!display2) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if(display1 && display2 && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(display2);
        }
        fillDisplay(operationName);
        lastOperation = operationName;
    })
});


function fillDisplay(name = ''){
    display1 += display2 + ' ' + name + ' ';
    inputNumbers.innerText = display1;
    displaySum.innerText = '';
    display2 = '';
};

function mathOperation(){
    switch(lastOperation){
        case '*':
            result = parseFloat(result) * parseFloat(display2);
            break;
        case '/':
            result = parseFloat(result) / parseFloat(display2);
            break;
        case '+':
            result = parseFloat(result) + parseFloat(display2);
            break;
        case '-':
            result = parseFloat(result) - parseFloat(display2);
            break;
    }
}

equal.addEventListener("click", (e) =>{
    if(!display2 && !display1) return;
    haveDot = false;
    mathOperation();
    fillDisplay();
    displaySum.innerText = result;
    display2 = result;
    display2 = '';
})


clearAll.addEventListener("click", () => {
  display1 = '';
  display2 = '';
  inputNumbers.innerText = '';
  displaySum.innerText = '';
  result = '';
});

clearLastNumber.addEventListener("click", () => {
  displaySum.innerText = '';
  display2 = '';
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                