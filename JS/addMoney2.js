document.getElementById('btn_add_money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input_add_money');
    const pinNumber = getInputFieldValueById('input_pin_number');
    
    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }

    // wrong way to verify. do not try it at your serious website
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account_balance');
        const newBalance = balance + addMoney;

        document.getElementById('account_balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p);

        // should be a common function
        document.getElementById('transaction_container').appendChild(p);
    }
    else{
        alert('Failed to add the money.')
    }

})