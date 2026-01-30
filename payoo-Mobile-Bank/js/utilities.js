// console.log('utilities loaded');

// function getinputFieldValueById() {
//     console.log('will get value by id');

//     const addManey = document.getElementById('add-ammount').value;
//     return addManey;   
// }


function getinputFieldValueById(id){
    const addManey = document.getElementById(id).value;
    const valueNumber = parseFloat(addManey);
    return valueNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function shawFromById(id){
    document.getElementById('add-maney-from').classList.add('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('Transaction-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}