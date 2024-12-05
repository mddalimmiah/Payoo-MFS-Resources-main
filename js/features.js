// console.log('features connected');

// show the cash out form 
document.getElementById('btn-show-cash-out').addEventListener('click', function(){ //এটা যেহেতু ফরম এর বাহিরে তাই  event na dile o hobe
 console.log('show cash out btn');
 document.getElementById('cash-out-form').classList.remove('hidden');
 

//  hide the add money form:
document.getElementById('add-money-form').classList.add('hidden');
})

// show add money form and hide the cash out form:

document.getElementById('btn-show-add-money')
    .addEventListener('click', function(){
    // console.log('add money btn')
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})

