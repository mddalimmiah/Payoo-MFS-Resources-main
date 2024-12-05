// console.log('connected');

// add money to the account

/*
step-1: add the event handlers to the add money btn inside the form
 prevent page reload after form submit 
step-2: get money to be added to the account balance
 step-3 : get the pin number inside the form
*/

// step-1: add the event handlers to the add money btn inside the form
 document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit  পেজ রিলোড রিমুভ করার জন্য নিচের কোড লিখতে হবে। 
    event.preventDefault();

    // step-2:  get money to be added to the account balance

    const addMoneyInput=document.getElementById('input-add-money').value;
    console.log(addMoneyInput)
    // step-3: get the pin number:
    const pinNUmberInput=document.getElementById('input-pin-number').value;
    console.log(pinNUmberInput)
    console.log('add money btn clicked')
 })