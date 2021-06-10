const displayNumber1 = document.querySelector(".display-number");
const displayNumber2 = document.querySelector(".display-result");
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
        displayNumber2.innerText = display2;
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
        fillDisplay1(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function fillDisplay1(name = ''){
    display1 += display2 + ' ' + name + ' ';
    displayNumber1.innerText = display1;
    displayNumber2.innerText = '';
    display2 = '';
};

function mathOperation(){
    if(lastOperation === '*'){
        result = parseFloat(result) * parseFloat(display2);
    }else if(lastOperation === '/'){
        result = parseFloat(result) / parseFloat(display2);
    }else if(lastOperation === '+'){
        result = parseFloat(result) + parseFloat(display2);
    }else if(lastOperation === '-'){
        result = parseFloat(result) - parseFloat(display2);
    }
}

equal.addEventListener("click", (e) =>{
    if(!display2 && !display1) return;
    haveDot = false;
    mathOperation();
    fillDisplay1();
    displayNumber2.innerText = result;
    display2 = result;
    display1 = '';
})


clearAll.addEventListener("click", () => {
  display1 = '';
  display2 = '';
  displayNumber1.innerText = '';
  displayNumber2.innerText = '';
  result = '';
});

clearLastNumber.addEventListener("click", () => {
  displayNumber2.innerText = '';
  display2 = '';
});
