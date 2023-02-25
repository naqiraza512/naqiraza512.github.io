document.getElementById("expression").addEventListener("keypress", function(event) {
  
  if (event.code === "Enter") {
    event.preventDefault();
      calculate();
  }
});


function evaluateInfixExpression(expression) {
  const operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "^": (a, b) => Math.pow(a, b)
  };
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3
  };

  function isNumber(character) {
    return !isNaN(character);
  }

  function applyOperation(operator, operand1, operand2) {
    return operators[operator](operand1, operand2);
  }

  const operandStack = [];
  const operatorStack = [];
  let index = 0;
  while (index < expression.length) {
    const character = expression[index];

    if (character === "(") {
      operatorStack.push(character);
    } else if (character === ")") {
      while (operatorStack[operatorStack.length - 1] !== "(") {
        const operator = operatorStack.pop();
        const operand2 = operandStack.pop();
        const operand1 = operandStack.pop();
        const result = applyOperation(operator, operand1, operand2);
        operandStack.push(result);
      }
      operatorStack.pop();
    } else if (isNumber(character)) {
      let operand = "";
      while (index < expression.length && isNumber(expression[index])) {
        operand += expression[index];
        index++;
      }
      operandStack.push(parseInt(operand));
      index--;
    } else {
      while (
        operatorStack.length > 0 &&
        precedence[operatorStack[operatorStack.length - 1]] >= precedence[character]
      ) {
        const operator = operatorStack.pop();
        const operand2 = operandStack.pop();
        const operand1 = operandStack.pop();
        const result = applyOperation(operator, operand1, operand2);
        operandStack.push(result);
      }
      operatorStack.push(character);
    }

    index++;
  }

  while (operatorStack.length > 0) {
    const operator = operatorStack.pop();
    const operand2 = operandStack.pop();
    const operand1 = operandStack.pop();
    const result = applyOperation(operator, operand1, operand2);
    operandStack.push(result);
  }

  return operandStack.pop();
}

function calculate() {
    var inputValue = document.getElementById("expression").value;
    var ans = evaluateInfixExpression(inputValue);
    document.getElementById("output").innerHTML = "Ans : " + ans;
  }