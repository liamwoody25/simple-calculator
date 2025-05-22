const currentDisplay = document.getElementById('display');
const numberBtn = document.querySelectorAll('.number-keys');
const operatorBtns = document.querySelectorAll('.operation-key')
let operator = ' ';
let num1 = parseFloat(document.querySelectorAll('.number-keys').num1);
let num2 = ' ';



function numberInput() {
  for (const button of numberBtn) {
    button.addEventListener('click', function(){
      display.value += button.textContent;

    })
  }
}

function operatorInput() {
  for (const keys of operatorBtns ) {
    keys.addEventListener('click', function(){
     display.value += keys.textContent;
    })
  }
}

function displayOutput() {
  const clearBtn = document.querySelector('.AC-key');
    clearBtn.addEventListener('click', function(){
      display.value = '  ' ;
    })
}


function calculateNum() {
  const equalsBtn = document.getElementById('equals-key');
    equalsBtn.addEventListener('click', function(){
      
    })
   
  if ( operator === '/' ){
    display.input = ' ÷ '
 }
}




displayOutput()
calculateNum()
// addOperator()
// subtractOperator()
// multiplyOperator()
// divideOperator()

numberInput()
operatorInput()
