// console.log('login form connected')
// document.getElementById('id').addEventListener('click', function(){})

// erokom vabe o kra jay
// step Number:1 set event Handlers
// document.getElementById('button-login').addEventListener('click', function(event){ //event listener a event create korar jonno
//     // console.log('btn clicked'); //check kore dekhar jonn0

//     // step : 2 prevent default behaviour ( prevent reloading browser)
//     event.preventDefault(); //prevent korar jonno page load..

//     console.log('login button called');
//     // step:3 get the phone number and pin number
//      const phoneNumber=document.getElementById('phone-number').value;
//      const pinNumber=document.getElementById('pin-number').value;
//      console.log(phoneNumber, pinNumber);
    
//     //  step-4: validate phone and pin number
//     // this is temporay you should do like this
//     if(phoneNumber==='5' && pinNumber==='1234'){
//         console.log('your are logged in');
//         // step-5: allow user to website
//     }
//     else{
//         alert('wrong Phone or pin number');
//     }
// })

// task:form submit reloading page:

// finally login form validation:

document.getElementById('button-login').addEventListener('click', function(event){ //jeheto form eta pora tar modday event listener hobe tai event hobe
    event.preventDefault();
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);
    // bad way to validation

    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('Your are logged in');
        window.location.href= './home.html';
    }
    else{
        alert('wrong Phone or pin number');
    }
})