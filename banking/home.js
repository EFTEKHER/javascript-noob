    let depositMoney=0;
    localStorage.setItem('dm',depositMoney);
    let withdrawMoney=0;
    localStorage.setItem('wm',withdrawMoney);
    let totalMoney=0;
    localStorage.setItem('tm',totalMoney);
    let cons=0;
    const deposite= document.getElementById('deposit');
    const despoiteTotal=document.getElementById('depositAmount');
    const totalAmount=document.getElementById('total');
    const withdrawed= document.getElementById('withdraw');
    const withdrawTotal= document.getElementById('withdrawAmount');
    
   
    document.getElementById('depositBtn').addEventListener('click', function(){
        const depositeValue= deposite.value;
  
    console.log(depositeValue);

    deposite.value="";
    console.log('depositeBtn clicked');

   
    
    depositMoney=Number(depositeValue);
    

   totalMoney+=depositMoney;
   
        
   despoiteTotal.innerText= depositeValue;
   cons=depositeValue;
   totalAmount.innerText=String(totalMoney)
})

document.getElementById('withdrawBtn').addEventListener('click', function(){
    
    const withdrawValue= withdrawed.value;
    console.log(withdrawValue);
    withdrawed.value="";
    console.log('withdraw button clicked');
   
   
    withdrawMoney=Number(withdrawValue);
    withdrawTotal.innerText=totalMoney>withdrawMoney? withdrawValue:'00';
    if(totalMoney>=withdrawMoney)
    {
        totalMoney=totalMoney-withdrawMoney;

        const totalAmount=document.getElementById('total');
        totalAmount.innerText=String(totalMoney);
        if(totalMoney==0)
        {
            alert("All Money has been taken!");
            despoiteTotal.innerText="00"
        }
         
    }
    
    else{
        alert('Not enough Money')
        totalAmount.innerText= totalMoney>0?  String(totalMoney):"00";
        despoiteTotal.innerText= totalMoney>0?cons:"00";
    }


})


function getTotal(e)
{
    return e;
}





