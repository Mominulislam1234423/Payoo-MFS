// show tha case out 

document.getElementById('add-cash-out-btn').addEventListener('click', function(){

    document.getElementById('cash-out-from').classList.remove('hidden');

    document.getElementById('add-maney-from').classList.add('hidden');
})

// show the add maney
document.getElementById('add-maney-btn').addEventListener('click', function(){
    document.getElementById('add-maney-from').classList.remove('hidden');
    document.getElementById('cash-out-from').classList.add('hidden');
})