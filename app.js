const numKeys = document.querySelectorAll('.number-keys');
const input = document.getElementById('display');

numKeys.forEach((num) =>{
  num.addEventListener('click', (e) =>{
    input.value = e.target.textContent;
  })
})