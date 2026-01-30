// console.log('add maney loded')

document.getElementById('btn-maney-add').addEventListener('click', function(event){
    event.preventDefault();

    // console.log('add menay button click');

    // getinputFieldValueById();
    // const addManey = getinputFieldValueById();
    // console.log("adldaldmd", addManey)

    const addManey = getinputFieldValueById('add-ammount');
    const addpin = getinputFieldValueById('add-pin');

    if (addpin === 1234) {
        const blance = getTextFieldValueById('Blance');
        const newBlance = blance + addManey;

        document.getElementById('Blance').innerText = newBlance;

        const p = document.createElement('p');
        p.innerText = `Added: ${addManey} Tk. Blance: ${newBlance}`;
        console.log(p)

        document.getElementById('Transaction-container').appendChild(p)
    }
    else{
        alert('falid to add maney')
    }
})



