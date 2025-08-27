function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}

function showSectionById(id) {
    // hide all the sections
    document.getElementById('add_money_form').classList.add('hidden');
    document.getElementById('cash_out_form').classList.add('hidden');
    document.getElementById('transaction_section').classList.add('hidden');

    //Show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}