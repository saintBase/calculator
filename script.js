const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector("[data-equal]");
const clearBtn = document.querySelector("#clear");

// global variable
let tempNum1 = 0;
let tempNum2 = 0;
let tempOperator = "";

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

// add
function add(a, b) {
  return a + b;
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
  return a / b;
}

// operate
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "x":
      return multiply(num1, num2);
    case "÷":
      return divide(num1, num2);
    default:
      return "Input not valid.";
  }
}

// populate display
function populate(input) {
  if (screen.textContent === "0") {
    screen.textContent = input;
  } else {
    screen.textContent += input;
  }
}

// store number when operator is pressed
function storeNum(num, op) {
  tempNum1 = num;
  tempOperator = op;
  // TODO:
  // display should reset/retain number in another div
  // above main screen
  screen.textContent = 0;
}

// call operate when equal is pressed
function answer(num2) {
  tempNum2 = num2;
  screen.textContent = operate(tempOperator, tempNum1, tempNum2);
}

// clear button function
function clear() {
  screen.textContent = 0;
}
