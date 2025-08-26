/**
 * Common shared functions here
 */
// console.log('utilities loaded');



// function getInputFieldValueById(){
    
//     const addMoney = document.getElementById('input_add_money').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}