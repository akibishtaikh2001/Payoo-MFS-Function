document.getElementById('show_add_money_form').addEventListener('click', function(){
    console.log('show add money button clicked');
    showSectionById('add_money_form');
});


document.getElementById('show_cash_out_form').addEventListener('click', function(){
    showSectionById('cash_out_form');
});


document.getElementById('show_transaction_history').addEventListener('click', function(){

    showSectionById('transaction_section');

})

