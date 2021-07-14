const displaySum = document.querySelector(".display-result");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clear-all");
const clearLastNumber = document.querySelector(".clear-lastnumber");
const allButtons = document.querySelectorAll(".button");
const calculatorSection = document.querySelector(".js-calculator");
let inputEl = "";
let haveDot = "";

allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const operation = e.target.innerText;

    if (
      (displaySum.innerText.slice("-1") === operation && operation === "-") ||
      (displaySum.innerText.slice("-1") === operation && operation === "+") ||
      (displaySum.innerText.slice("-1") === operation && operation === "/") ||
      (displaySum.innerText.slice("-1") === operation && operation === "*")
    ) {
      operation = "";
    }

    if (
      (!inputEl && operation === "+") ||
      (!inputEl && operation === "/") ||
      (!inputEl && operation === "*")
    ) {
      return;
    } else if (!inputEl && operation === "-") {
      displaySum.innerText = inputEl;
    } else if (displaySum.innerText == "-" && operation === "-") {
      return;
    }

    if (operation === "." && !haveDot) {
      haveDot = true;
    } else if (
      (operation === "+" && haveDot) ||
      (operation === "*" && haveDot) ||
      (operation === "/" && haveDot) ||
      (operation === "-" && haveDot)
    ) {
      haveDot = false;
    } else if (operation === "." && haveDot) {
      return;
    }
    
    inputEl += operation;
    displaySum.innerText = inputEl;
  });
});

clearAll.addEventListener("click", () => {
  tempResult = "";
  inputEl = "";
  displaySum.innerText = "0";
  haveDot = false;
});

clearLastNumber.addEventListener("click", () => {
  if (!inputEl) {
    return;
  }
  inputEl = inputEl.split("").slice(0, -1).join("");
  displaySum.innerText = inputEl;
});

equal.addEventListener("click", () => {
  let exp = displaySum.innerText;
  if (exp) {
    inputEl = eval(exp);
    displaySum.innerText = inputEl;
  }
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
    e.key === "." ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "(" ||
    e.key === ")"
  ) {
    clickButtonEl(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    equal.click();
  } else if (e.key === "Delete") {
    clearAll.click();
  } else if (e.key === "Backspace") {
    clearLastNumber.click();
  }
});

function clickButtonEl(key) {
  allButtons.forEach((button) => {
    if (button.innerText === key) {
      button.click();
    }
  });
};