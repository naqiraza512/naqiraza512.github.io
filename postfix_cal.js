function evaluatePostfixExpression(postfixExpression) {
  const operandStack = [];
  for (let i = 0; i < postfixExpression.length; i++) {
    const character = postfixExpression[i];
    if (!isNaN(character)) {
      //const x = parseInt(character);
    //  document.getElementById("output").innerHTML = x;
      operandStack.push(parseInt(character));
      
      
    } else if(character !== ' '){
      const operand2 = operandStack.pop();
      const operand1 = operandStack.pop();
      switch (character) {
        case "+":
          operandStack.push(operand1 + operand2);
          break;
        case "-":
          operandStack.push(operand1 - operand2);
          break;
        case "*":
          operandStack.push(operand1 * operand2);
          break;
        case "/":
          operandStack.push(operand1 / operand2);
          break;
        case "^":
          operandStack.push(Math.pow(operand1, operand2));
          break;
        default:
          //document.getElementById("output").innerHTML = "Invalid operator";
          throw new Error("Invalid operator: " + character);
        }
    }
  }
  return operandStack.pop();
}



function calculate() {
  var inputValue = document.getElementById("expression").value;
  var ans = evaluatePostfixExpression(inputValue);
  console.log(ans);
  document.getElementById("output").innerHTML = "Ans : " + ans;
}

document.getElementById("expression").addEventListener("keypress", function(event) {
  if (event.code === "Enter") {
    event.preventDefault();
    calculate();
  }
});
