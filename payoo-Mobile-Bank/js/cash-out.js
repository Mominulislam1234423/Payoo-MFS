document.getElementById('cahs-out-button').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getinputFieldValueById('cash-out');
    const pinNumber = getinputFieldValueById('cash-out-pin');
    console.log(cashOut, pinNumber)

    if (pinNumber === 1234) {
    const blance = getTextFieldValueById('Blance')
    const newBlance = blance - cashOut;

    document.getElementById('Blance').innerText = newBlance;
}
else{
    alert('falid to cash out')
}
})