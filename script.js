const display = document.querySelector("#display");
const buttons = document.querySelectorAll("input[type='button']");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    let value = this.value;
    switch (value) {
      case "C":
        display.value = "";
        break;
      case "=":
        try {
          display.value = evalExpression(display.value);
        } catch (error) {
          display.value = "Error";
        }
        break;
      default:
        display.value += value;
        break;
    }
  });
});

function evalExpression(expression) {
  expression = expression.replace(/\s/g, "");
  const operators = ["+", "-", "*", "/"];

  for (let i = 0; i < operators.length; i++) {
    while (expression.includes(operators[i])) {
      let split = expression.split(operators[i]);
      let a = parseFloat(split[0]);
      let b = parseFloat(split[1]);
      if (isNaN(a) || isNaN(b)) {
        throw new Error();
      }
      let result;
      switch (operators[i]) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = a / b;
          break;
      }
      expression = expression.replace(`${a}${operators[i]}${b}`, result);
    }
  }
  return expression;
}
