
const withdrawId = document.getElementById('withdrawId');

const withdrawValue = document.getElementById('withdrawValue');

document.getElementById('withdraw').addEventListener('click', function () {

    const newWithdrawValue = withdrawValue.value;
    const newWithdrawValueInt = parseFloat(newWithdrawValue);
    withdrawId.innerText = newWithdrawValue;

    const balanceTotal = document.getElementById('balanceId');
    const newBalanceTotal = parseFloat(balanceTotal.innerText);

    if (withdrawValue.value == '') {
        alert('Please Add Some Money')
        withdrawId.innerText = 0;
    }
    else {
        if (newWithdrawValueInt > newBalanceTotal) {
            alert('Not enough balance in your account !!!');
            withdrawId.innerText = 0;
        }
        else {
            balanceTotal.innerText = newBalanceTotal - newWithdrawValueInt;
        }
    }





    withdrawValue.value = '';
})


