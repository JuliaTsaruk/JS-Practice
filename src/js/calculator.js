const inputNumbers = document.querySelector(".display-number");
const displaySum = document.querySelector(".display-result");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const dot = document.querySelector(".dot");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLastNumber = document.querySelector(".clear-lastnumber");
let tempResult = '';
let inputEl = '';
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
        inputEl += e.target.innerText;
        displaySum.innerText = inputEl;
    })
});

operations.forEach(operation =>{
    operation.addEventListener("click", (e) =>{
        const operationName = e.target.innerText;
        if(!inputEl && operationName === "+" || 
        !inputEl && operationName === "/" ||
        !inputEl && operationName === "*"){
             return;   
        }else if( !inputEl && !tempResult && operationName ==='-'){ 
            inputEl = Number(inputEl);
            displaySum.innerText = inputEl;  
        }else if(!inputEl && operationName === '-'){
            return;
        }
        haveDot = false;
        if(tempResult && inputEl && lastOperation){
            mathOperation();
        }else{
            result = parseFloat(inputEl);
        }
        fillDisplay(operationName);
        lastOperation = operationName;
    })
});


function fillDisplay(name = ''){
    tempResult += inputEl + ' ' + name + ' ';
    inputNumbers.innerText = tempResult;
    displaySum.innerText = '';
    inputEl = '';
};

function mathOperation(){
    switch(lastOperation){
        case '*':
            result = parseFloat(result) * parseFloat(inputEl);
            break;
        case '/':
            result = parseFloat(result) / parseFloat(inputEl);
            break;
        case '+':
            result = parseFloat(result) + parseFloat(inputEl);
            break;
        case '-':
            result = parseFloat(result) - parseFloat(inputEl);
            break;
    }
}

equal.addEventListener("click", () =>{
    if(!inputEl && !tempResult) return;
    haveDot = false;
    mathOperation();
    fillDisplay();
    displaySum.innerText =result;
    inputEl = result;
    tempResult = '';
});


clearAll.addEventListener("click", () => {
  tempResult = '';
  inputEl = '';
  inputNumbers.innerText = '0';
  displaySum.innerText = '0';
  result = '';
});

clearLastNumber.addEventListener("click", () => {
    inputEl = inputEl.split('').slice(0, -1).join('');
    displaySum.innerText = inputEl;
});


window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
      clickButtonEl(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*") {
      clickOperation(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
      equal.click();
  }else if (e.key === 'Delete'){
      clearAll.click();
  }else if (e.key === 'Backspace'){
      clearLastNumber.click();
  }
});

function clickButtonEl(key) {
  numbers.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
}

function clickOperation(key) {
  operations.forEach((operation) => {
    if (operation.innerText === key) {
      operation.click();
    }
  });
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          