const currentDisplay = document.getElementById('display');
const numberBtn = document.getElementsByClassName('number-keys');
const operatorBtns = document.querySelectorAll('.operation-key')
let operator = ' ';
let num1 = parseFloat(document.querySelectorAll('.number-keys')).textContent;
let num2 = ' ';


// gets the numbers and sends them to the screen
function numberInput() {
  for (const button of numberBtn) {
    button.addEventListener('click', function(){
      display.value += button.innerHTML;
      
    })
  }
}

function operatorInput() {
  for (const keys of operatorBtns ) {
    keys.addEventListener('click', function(){
     display.value += keys.innerHTML;
    })
  }
}

function displayOutput() {
  const clearBtn = document.querySelector('.AC-key');
    clearBtn.addEventListener('click', function(){
      if (operator === ' ') {
       
      }
      
    })
}


function calculateNum() {
  const equalsBtn = document.getElementById('equals-key');
    equalsBtn.addEventListener('click', function(){
      
    })
}




displayOutput()
calculateNum()
// addOperator()
// subtractOperator()
// multiplyOperator()
// divideOperator()

numberInput()
operatorInput()
