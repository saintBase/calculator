const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("#clear");
const dotBtn = document.querySelector("[data-separator]");

// global variable
let tempNum1 = null;
let tempNum2 = null;
let tempOperator = null;

numberBtn.forEach((btn) =>
  btn.addEventListener("click", () => populate(btn.textContent))
);
operatorBtn.forEach((op) =>
  op.addEventListener("click", () =>
    storeNum(screen.textContent, op.textContent)
  )
);
equalBtn.addEventListener("click", () => answer(screen.textContent));
clearBtn.addEventListener("click", () => clear());
dotBtn.addEventListener("click", () => addSeparator());

// add
function add(a, b) {
  return parseInt(a) + parseInt(b);
}
// subtract
function subtract(a, b) {
  return a - b;
}
// multiply
function multiply(a, b) {
  return a * b;
}
// divide
function divide(a, b) {
  if (b == 0) {
    alert("You cannot divide by 0!");
    return 0;
  } else return a / b;
}

// operate
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return round(add(num1, num2));
    case "-":
      return round(subtract(num1, num2));
    case "x":
      return round(multiply(num1, num2));
    case "÷":
      return round(divide(num1, num2));
    default:
      return "0";
  }
}

// populate display
function populate(input) {
  if (screen.textContent === "0" || screen.textContent === tempNum1) {
    screen.textContent = input;
  } else {
    screen.textContent += input;
  }
}

// store number when operator is pressed
function storeNum(num, op) {
  if (tempOperator != null) {
    //perform equal operation
    answer(screen.textContent);
    //store result as new num1
    tempNum1 = screen.textContent;
    tempOperator = op;
  } else {
    tempNum1 = num;
    tempOperator = op;
    // TODO:
    // display should reset/retain number in another div
    // above main screen
  }
}

// call operate when equal is pressed
function answer(num2) {
  tempNum2 = num2;
  screen.textContent = operate(tempOperator, tempNum1, tempNum2);
  tempNum2 = tempOperator = null;
}

// clear button function
function clear() {
  screen.textContent = 0;
  tempNum1 = tempNum2 = tempOperator = null;
}

// round function
function round(num) {
  return Math.round(num * 1000) / 1000;
}

// add separator to number
function addSeparator(num){
    if(!screen.textContent.includes(".")){
        screen.textContent += ".";
    }
}