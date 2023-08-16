document.getElementById('withdrawBtn').addEventListener("click", function(){
    const withdrawInput= document.getElementById('withdrawInput');
  const withdraw = withdrawInput.value;
  const newWithdrawAmmount = parseFloat(withdraw);
  if(newWithdrawAmmount > 0){

      const withdrawDispaly = document.getElementById('withdrawDisplay');
      const preciousWithdrawDispaly = withdrawDispaly.innerText;
      const WithdrawDispaly = parseFloat(preciousWithdrawDispaly); 
      const totalWithdrawDisplay = WithdrawDispaly + newWithdrawAmmount;
      withdrawDispaly.innerText = totalWithdrawDisplay;
    
    
      const balanceDisplay = document.getElementById('balanceDisplay');
      const previousBalanceDisplay = balanceDisplay.innerText;
    
      const newBalanceDisplay=  parseFloat(previousBalanceDisplay)- newWithdrawAmmount ;
      
      if(newWithdrawAmmount > parseFloat(previousBalanceDisplay)){
        alert ("Baap ar bank bole ki ja iccha tai korbi nki? Tr ato tk nai .. sala fokkirnni...")
      }else{
        balanceDisplay.innerText = newBalanceDisplay;
    
      withdrawInput.value = '';
      }
  }else{
    alert ('koto tk withdraw tai to bol . baap ar bank bole ki vabchis, baap e tk diya dibe??')
  }
 
  
})