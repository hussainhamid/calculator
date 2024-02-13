let display = document.querySelector("#display");
let displayText = document.querySelector("#display-text");
let numbers = document.querySelector("#numbers");
//let operators = documnet.querySelector(".operator");
let currentNum = "";
let firstNum = "";
let secondnum = "";
let operator = "";

function operate(a, operator, b) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
        return divide(a, b);
    }
}

//console.log(operate(2, "/", 2));


function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


function populateDisplay(numbers) {
    if (currentNum.length < 11) {
        currentNum += numbers;
    display.textContent = currentNum;
    }
};

function clear(zero) {
    display.textContent = zero;
};
