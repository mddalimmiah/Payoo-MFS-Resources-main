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
    //  get the pin number:
    const pinNUmberInput=document.getElementById('input-pin-number').value;
    console.log(pinNUmberInput)
    // step-3: verify the pin number:
    // this is wrong way to validate pin number (আমরা আপাতত এই ভাবে করছি পরবর্তীতে আমরা সঠিক ভাবে করবে।)
     if(pinNUmberInput==='1234'){
        console.log('Adding Money to Your Account');

         //  step-4: get the current balance:

    const balance=document.getElementById('account-balance').innerText;
    // console.log( typeof balance);
        //  step-5: add money input with balance and parsefloat money and balance:
        const addMoneyNumber=parseFloat(addMoneyInput);
        const balanceNumber=parseFloat(balance);
        const newBalance=addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6: update the balance in the UI/DOM
        // গেট করার জন্য  ভ্যারিএবল রাখবো বাট সেট করার জন্য ভ্যারিএবল এ রাখতে হবে না ডাইরেক্টে করা যাবে।
         document.getElementById('account-balance').innerText=newBalance;

     }
     else{
        alert('Failed to Add Money! Please Try Again!');
     }

   
    console.log('add money btn clicked')
 })