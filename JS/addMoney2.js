document.getElementById('btn_add_money').addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('input_add_money');
    const pinNumber = getInputFieldValueById('input_pin_number');
    

    // wrong way to verify. do not try it at your serious website
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account_balance');
        const newBalance = balance + addMoney;

        document.getElementById('account_balance').innerText = newBalance;
    
    }
    else{
        alert('Failed to add the money.')
    }

})