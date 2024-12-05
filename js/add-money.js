// console.log('add money connected');

/*
* step-1: add event Listener to the add money  Button (from submit button) (এ্যাড করবো ইভেন লিসেনার মানি নামে যে আইডি আছ ঐইটা কে)
Make sure preventDefault() so that does n't page reload (ডিফল্ট সাবমিট রিমুভ করবো। )

step-2: get the money user wants to add amount also get the pin number provided (এমাউন্ট এবং পিন সেট করবো)

step-3: verify the pin number for, wrong pin number failed to add money and 
for right pin number, allow to  add the number to the  account balance.  (পিন নাম্বরা ভ্যারিফাই করবো যদি সঠিক হয় তহলে ‍টাকা িএ্যাড কবে যদি ফলস হয় তাহলে ফেইল্ড দেখাব)
*
* step-4: get the current balance (বর্তমান ব্যালেন্স টা গেট করবো।)

 step-5: add money to be added with the current balance: (বর্তমান ব্যালেন্স এর সাথে নতুন টাকা যোগ করে দিবো।)
  
    step-6: Display/ Update the balance in the DOM/ UI.( টাকা টা আপডেট হবে ডমের মধ্যে বা টোটাল টাকা এ্যাড হবে ডমে।)
**/

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    console.log('added the event handlers');
    
    // get money and pin numbers
    const addMoney=document.getElementById('input-add-money').value;
    const addMoneyNumber=parseFloat(addMoney);
    const pinNUmber=document.getElementById('input-pin-number').value;
    // console.log(addMoney, pinNUmber);
    if(pinNUmber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        // console.log(balance)
        const balanceNumber=parseFloat(balance);

        // new balance
        const newBalance=addMoneyNumber + balanceNumber;
        // updated balance DOM/UI
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to add Money, Please Try again later!');
    }
       
    
})