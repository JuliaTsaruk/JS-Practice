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
        if(display2 === ' ' + '.'){
            console.log("ffffff");
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

equal.addEventListener("click", () =>{
    if(!display2 && !display1) return;
    haveDot = false;
    mathOperation();
    fillDisplay();
    displaySum.innerText = result;
    display2 = result;
    display1 = '';
});


clearAll.addEventListener("click", () => {
  display1 = '';
  display2 = '';
  inputNumbers.innerText = '0';
  displaySum.innerText = '0';
  result = '';
});

clearLastNumber.addEventListener("click", () => {
    display2 = display2.split('').slice(0, -1).join('');
    displaySum.innerText = display2;
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          