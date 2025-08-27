document.getElementById('btn_cash_out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input_cash_out');
    const pinNumber = getInputFieldValueById('input_cash_out_pin');

    // console.log('inside the click handler', cashOut, pinNumber);
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account_balance');
        const newBalance = balance - cashOut;

        document.getElementById('account_balance').innerText = newBalance;
        
    }
    else{
        alert('No money for you... DGM.')
    }
    
})
