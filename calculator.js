const currentDisplay = document.getElementById('display');
const numBtn = document.querySelectorAll('.number-keys');
const operateBtns = document.querySelectorAll('.operation-key');

let num1 = ' ';
let num2 = ' ';
let operator = ' ';
let result 

function displayOutput() {
  display.value = ' ';
}

function numberInput( num1, num2) {
  for (const button of numBtn) {
    button.addEventListener('click', function(){
      display.value += button.innerHTML;
    })
  }
}

function operatorInput() {
  for (const keys of operateBtns) {
    keys.addEventListener('click', function(){
      display.value += keys.innerHTML
    })
  }
}

function calculateNum() {
  const equalsBtn = document.getElementById('equals-key');
    equalsBtn.addEventListener('click', function(){

       if (display.value = result) {
        result = num1 + num2;
      }
  })
 
}


operatorInput()
numberInput()
calculateNum()