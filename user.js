const depositId = document.getElementById('depositId');
const balanceId = document.getElementById('balanceId');
const withdrawId = document.getElementById('withdrawId');

const depositValue = document.getElementById('depositValue');
const withdrawValue = document.getElementById('withdrawValue');

let depositInitialValue = 0;
let withdrawInitialValue = 0;
let sum = 0;
let sub = 0;

document.getElementById('deposite').addEventListener('click', function(){
    depositInitialValue = parseInt(depositValue.value);
    depositId.innerText = parseInt(depositInitialValue);
    
    sum += depositInitialValue;
    balanceId.innerText = sum;
})


document.getElementById('withdraw').addEventListener('click', function(){
    withdrawInitialValue = parseInt(withdrawValue.value);
    withdrawId.innerText = parseInt(withdrawInitialValue);
    if(withdrawInitialValue > sum)
    {
        alert("Not enough money in your account");
    }
    else
    {
        sum -= parseInt(withdrawValue);
        balanceId.innerText = parseInt(sum);
    }
})