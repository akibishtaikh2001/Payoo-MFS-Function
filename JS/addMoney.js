/**
 * How to get a number from an input field 
 * 1. create a variable
 * 2. right side document.getElementByid(id)
 * 3. .value
 * 4. parseFloat
 */

// console.log('add money loaded');

document.getElementById('btn_add_money').addEventListener('click', function(event){
    event.preventDefault();

    
    console.log('add money button clicked');


    // getInputFieldValueById();
    // const addMoney = getInputFieldValueById();
    // console.log('add money value', addMoney);
    
    // const addMoney = document.getElementById('input_add_money').value;
    // const addMoneyNumber = parseFloat(addMoney);

    const addMoney = getInputFieldValueById('input_add_money');
    const pinNumber = getInputFieldValueById('input_pin_number');
    console.log('add money with parameter', addMoney, pinNumber);
    

})