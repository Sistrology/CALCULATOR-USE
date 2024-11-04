const inputBox = document.getElementById('inputBox');
let lastInput = ''; 

function clearInput() {
    inputBox.value = ''; 
    lastInput = ''; 
}

function deleteLast() {
    inputBox.value = inputBox.value.slice(0, -1);
    lastInput = inputBox.value.slice(-1); 
}

function appendNumber(number) {
    inputBox.value += number; 
    lastInput = number; 
}

function appendOperator(operator) {
    
    if (['+', '-', '*', '/', '%'].includes(lastInput)) {
        alert("You can't enter multiple operators in a row.");
    } else {
        inputBox.value += ' ' + operator + ' '; 
        lastInput = operator; 
    }
}

function appendDecimal() {
    if (!inputBox.value.includes('.')) {
        inputBox.value += '.'; 
        lastInput = '.'; 
    }
}

function calculate() {
    try {
        inputBox.value = eval(inputBox.value.replace('%', '/100')); 
        lastInput = ''; 
    } catch (error) {
        inputBox.value = 'Error'; 
    }
}
