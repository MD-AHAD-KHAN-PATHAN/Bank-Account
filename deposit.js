const depositId = document.getElementById('depositId');
const balanceId = document.getElementById('balanceId');

const depositValue = document.getElementById('depositValue');

let depositInitialValue = 0;
let withdrawInitialValue = 0;
let sum = 0;
let sub = 0;

document.getElementById('deposite').addEventListener('click', function(){
    depositInitialValue = parseInt(depositValue.value);
    depositId.innerText = parseInt(depositInitialValue);
    
    sum += depositInitialValue;
    balanceId.innerText = sum;
    depositValue.value = '';
})