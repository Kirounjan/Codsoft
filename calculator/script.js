let display = document.getElementById('display');
let currentValue = '';

function appendNumber(number) {
    if (currentValue === '0') {
        currentValue = number;
    } else {
        currentValue += number;
    }
    display.innerText = currentValue;
}

function appendOperator(operator) {
    if (currentValue !== '') {
        currentValue += operator;
        display.innerText = currentValue;
    }
}

function clearDisplay() {
    currentValue = '';
    display.innerText = '0';
}

function deleteLast() {
    currentValue = currentValue.slice(0, -1);
    display.innerText = currentValue || '0';
}

function calculateResult() {
    try {
        currentValue = eval(currentValue).toString();
        display.innerText = currentValue;
    } catch {
        display.innerText = 'Error';
        currentValue = '';
    }
}
