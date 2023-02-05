const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const value = event.target.textContent;

    if (!isNaN(value) || value === '.') {
      display.textContent += value;
    } else if (value === 'C') {
      display.textContent = '';
    } else if (value === '=') {
      try {
        display.textContent = eval(display.textContent);
      } catch (error) {
        display.textContent = 'Error';
      }
    } else {
      display.textContent += value;
    }
  });
});
