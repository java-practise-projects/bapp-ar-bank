document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfield = document.getElementById('a');
    const email = emailfield.value ;

    const passwordField = document.getElementById('b');
    const password = passwordField.value;
    
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }else{
        alert ('Tuy password vhul disos!! Tre ami taijjo sontan gosona korlam.. ')
    }

})