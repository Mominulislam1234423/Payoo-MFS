document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber= document.getElementById('phone-number').value;
    const pinNumber= document.getElementById('pin-number').value;

    if (phoneNumber === '01883447126' && pinNumber === '1234') {
        window.location.href = './add-maney.html';
    }
    else{
        alert('wrong')
    }
})