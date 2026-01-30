document.getElementById('cahs-out-button').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = getinputFieldValueById('cash-out');
    const pinNumber = getinputFieldValueById('cash-out-pin');
    console.log(cashOut, pinNumber)

    if (pinNumber === 1234) {
    const blance = getTextFieldValueById('Blance')
    const newBlance = blance - cashOut;

    document.getElementById('Blance').innerText = newBlance;

    const div = document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML = `
    <h4 class="text-2xl font-bold"> Cash Out </h4>
    <p> ${cashOut} Withdraw. New Blance ${newBlance}</P>
    `
    document.getElementById('Transaction-container').appendChild(div);
}
else{
    alert('falid to cash out')
}
})

