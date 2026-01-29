document.getElementById('btn-maney-add').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmmount = document.getElementById('add-ammount').value;
    const addPin = document.getElementById('add-pin').value;

    if (addPin === '1234') {
        const blance = document.getElementById('Blance').innerText;
        const addManeyNumber = parseFloat(addAmmount);
        const blanceNumber = parseFloat(blance);

        const newBlance = addManeyNumber + blanceNumber;
        console.log(newBlance)

        document.getElementById('Blance').innerText = newBlance;
    }

});

// // add cash out from

document.getElementById('add-button').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOut = document.getElementById('cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('add-pin-num').value;

    if (pinNumber === '1234') {
        const cashOutBlance = document.getElementById('Blance').innerText;
        const mainBlance = parseFloat(cashOutBlance);

        const newBlance = mainBlance - cashOutNumber;

        document.getElementById('Blance').innerText = newBlance;
    }
    else{
        alert('your information wring')
    }

})