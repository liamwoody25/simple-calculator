const currentDisplay = document.getElementById('display');
const numBtn = document.getElementsByClassName('number-keys');
const operateBtns = document.querySelectorAll('.operation-key');

let num1 = parseInt(  );
let num2 = ' ';
let operator = display.value;
let result ;

function displayOutput() {
  display.value = 0 ;
}

function numberInput() {
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

       if ( operator === '/') {
        result = num1 + num2
      }
  })
 
}


operatorInput()
numberInput()
calculateNum()