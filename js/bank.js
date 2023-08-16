const depositDisplay= document.getElementById('depositDisplay');
const balanceDisplay= document.getElementById('balanceDisplay');
const depositInput= document.getElementById('depositInput');
const depositBtn= document.getElementById('depositBtn');


depositBtn.addEventListener('click', function(){
    const depositAmmount = depositInput.value ;
    const newDepositAmmount= parseFloat(depositAmmount)
    if(newDepositAmmount >0 ){

        const depositTotal = depositDisplay.innerText;
        const displayDepositTotal= newDepositAmmount + parseFloat(depositTotal);
        depositDisplay.innerText = displayDepositTotal;
        const perviousBalanceTotal =balanceDisplay.innerText;
        const displayBalanceTotal = newDepositAmmount+ parseFloat(perviousBalanceTotal);
        
        balanceDisplay.innerText = displayBalanceTotal;
        depositInput.value='';
    }else{
        alert ('koto tk jomabi tai to bol . baap ar bank bole ki vabchis, baap e tk diya dibe??')
    }
     
})


