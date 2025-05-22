const currentDisplay = document.getElementById('display');
const numberBtn = document.querySelectorAll('.number-keys');
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

function displayOutput() {
  const clearBtn = document.querySelector('.AC-key');
    clearBtn.addEventListener('click', function(){
      display.value = '  ' ;
    })
}

function divideOperator() {
  const divideBtn = document.querySelector('.divide-key');
    divideBtn.addEventListener('click', function(){
      display.value += ' ÷ '

    })
}

function multiplyOperator() {
  const multiplyBtn = document.querySelector('.multiply-key');
    multiplyBtn.addEventListener('click', function(){
      display.value += ' x '
  })
}

function subtractOperator() {
  const subtractBtn = document.querySelector('.subtract-key');
  subtractBtn.addEventListener('click', function(){
    display.value += ' - '
  })
}

function addOperator() {
  const addBtn = document.querySelector('.add-key');
    addBtn.addEventListener('click', function(){
      display.value += ' + '
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
addOperator()
subtractOperator()
multiplyOperator()
divideOperator()

numberInput()
