const numberBtn = document.querySelectorAll("[data-number]");
const screen = document.querySelector(".screen");

numberBtn.forEach((btn) =>
  btn.addEventListener("click", () => populate(btn.textContent))
);

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
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Input not valid.";
  }
}

// populate display
function populate(input) {
  console.log(input);
  if (screen.textContent === "0") {
    screen.textContent = input;
  } else {
    screen.textContent += input;
  }
}
