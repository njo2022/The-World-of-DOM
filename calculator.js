const outputDisplay = document.getElementById('output');
    let currentInput = '';
    let previousInput = '';
    let operator = null;

    function appendNumber(number) {
        currentInput += number;
        updateDisplay();
    }

    function appendOperator(op) {
        if (currentInput === '' && previousInput === '') return;
        if (currentInput !== '' && previousInput !== '' && operator !== null) {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
        updateDisplay();
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);
        if (isNaN(prev) || isNaN(curr)) return;

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                if (curr === 0) {
                    result = "Error: Division by zero";
                    break;
                }
                result = prev / curr;
                break;
            default:
                return;
        }
        currentInput = result.toString();
        operator = null;
        previousInput = '';
        updateDisplay();
    }

    function clearDisplay() {
        currentInput = '';
        previousInput = '';
        operator = null;
        updateDisplay();
    }

    function deleteLastDigit() {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }

    function updateDisplay() {
        outputDisplay.innerText = currentInput === '' ? '0' : currentInput;
}
