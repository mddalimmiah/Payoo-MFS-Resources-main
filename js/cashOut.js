// console.log("cashOut connected");

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log('add event')
    const cashOut=document.getElementById('input-cash-out').value;

    const cashOutNumber=parseFloat(cashOut);
    const pinNUmber=document.getElementById('input-cash-out-pin').value;
    

//    console.log(cashOutNumber, pinNUmber)

    // verify is not right way:
    if(pinNUmber==='1234'){
        // console.log('Money is reducing, cash out done!');
        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);
        
        // reduce the balance:
        const newBalance= balanceNumber - cashOutNumber;
        // update the balance UI/DOM
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Failed to cash out, Please try again later!');
    }
})