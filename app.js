const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[deta-all-clear]');
const secoundOperandTextElement = document.querySelector('[data-secound-operand]');
const firstOperandTextElement = document.querySelector('[data-first-opperand]');

class Calculator {
    constructor(firstOperandTextElement, secoundOperandTextElement){
        this.firstOperandTextElement = firstOperandTextElement;
        this.secoundOperandTextElement = secoundOperandTextElement; 
        this.clear();
    }        

    clear() {
        this.secoundOperand = '';
        this.firstOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.secoundOperand = this.secoundOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.secoundOperand.includes('.')) {
            return;
        }
        this.secoundOperand = this.secoundOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.secoundOperand === '') {
            return;
        } if (this.firstOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.firstOperand = this.secoundOperand;
        this.secoundOperand = '';
    }
 
    compute() {
       let computation;
       const prev = parseFloat(this.firstOperand);
       const current = parseFloat(this.secoundOperand);
       if (isNaN(prev) || isNaN(current)) {
           return;
       }
       switch (this.operation) {
           case '+':
               computation = prev + current;
               break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
               computation = prev * current;
               break;
            case '/':
               computation = prev / current;
               break;
            default:
                return;
       } 
       this.secoundOperand = computation;
       this.operation = undefined; 
       this.firstOperand = '';
    }

    getDisplayNumber(number) {
        let floatNumber = parseFloat(number);
        if (isNaN(floatNumber)) {
            return '';
        }
        return floatNumber.toLocaleString('en');
    }

    updateDisplay() {
        this.secoundOperandTextElement.innerText = this.getDisplayNumber(this.secoundOperand);
        if (this.operation !== null) {
            `${this.getDisplayNumber(this.firstOperand)}
            ${this.operation}`
        } else {
            this.firstOperandTextElement.innerText = '';
        }
    }
}

const calculator = new Calculator(firstOperandTextElement, secoundOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    }); 
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete ();
    calculator.updateDisplay();
});










