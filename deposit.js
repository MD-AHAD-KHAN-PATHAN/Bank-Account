const depositId = document.getElementById('depositId');
const balanceId = document.getElementById('balanceId');

const depositValue = document.getElementById('depositValue');


document.getElementById('deposite').addEventListener('click', function () {

    if (depositValue.value == '') {
        alert('Please Add Some Money');
        depositId.innerText = 0;
    }
    else {
        const depositeInitialValue = parseFloat(depositValue.value);

        depositId.innerText = depositeInitialValue;
    
        let totalBalance = parseFloat(balanceId.innerText);
    
        totalBalance += parseFloat(depositeInitialValue);
    
        balanceId.innerText = totalBalance;
    
        depositValue.value = '';
    }

   
})