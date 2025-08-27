document.getElementById('btn_cash_out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input_cash_out');
    const pinNumber = getInputFieldValueById('input_cash_out_pin');

    console.log('inside the click handler', cashOut, pinNumber);
    
})
