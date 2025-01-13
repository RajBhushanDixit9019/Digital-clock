// Clock functionality
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  
  // Factorial calculation
  function calculateFactorial(method) {
    const numberInput = document.getElementById('number');
    const resultDisplay = document.getElementById('result');
    const number = parseInt(numberInput.value, 10);
  
    if (isNaN(number) || number < 0) {
      resultDisplay.innerText = 'Please enter a valid positive integer.';
      resultDisplay.classList.remove('text-success');
      resultDisplay.classList.add('text-danger');
      return;
    }
  
    resultDisplay.classList.remove('text-danger');
    resultDisplay.classList.add('text-success');
  
    let factorial;
    if (method === 'iterative') {
      factorial = iterativeFactorial(number);
    } else {
      factorial = recursiveFactorial(number);
    }
  
    resultDisplay.innerText = `The factorial of ${number} is ${factorial} (method: ${method}).`;
  }
  
  function iterativeFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
  }
  
  // Theme switcher functionality
function changeTheme() {
    const theme = document.getElementById('theme-selector').value;
    const body = document.getElementById('theme-body');
  
    body.className = ''; // Remove all current classes
    if (theme === 'dark') {
      body.classList.add('bg-dark', 'text-light');
    } else if (theme === 'light') {
      body.classList.add('bg-light', 'text-dark');
    } else if (theme === 'retro') {
      body.classList.add('bg-retro', 'text-light');
    } else if (theme === 'ocean') {
      body.classList.add('bg-ocean', 'text-light');
    } else if (theme === 'sunset') {
      body.classList.add('bg-sunset', 'text-light');
    } else if (theme === 'cyberpunk') {
      body.classList.add('bg-cyberpunk', 'text-light');
    }
  }
  
  