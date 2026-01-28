document.getElementById('btn-maney-add').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmmount = document.getElementById('add-ammount').value;
    const addPin = document.getElementById('add-pin').value;

    if (addPin === '1234') {
    const blance = document.getElementById('Blance').innerText;
    const addManeyNumber =parseFloat(addAmmount);
    const blanceNumber =parseFloat(blance);
    
    const newBlance = addManeyNumber + blanceNumber;
    console.log(newBlance)

    document.getElementById('Blance').innerText = newBlance;
    }

});