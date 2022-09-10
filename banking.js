
//for diposit
document.getElementById('diposit-btn').addEventListener('click',function()
{
    const dipositInput=document.getElementById('diposit-input');
    const totalDiposit=document.getElementById('total-diposite');
    const totalBalance=document.getElementById('Total-balance');
    if(parseFloat(dipositInput.value)>0)
    {
      totalDiposit.innerText=parseFloat(totalDiposit.innerText)+parseFloat(dipositInput.value)
      totalBalance.innerText=parseFloat(totalBalance.innerText)+parseFloat(dipositInput.value)
    }
    else
      alert('please enter positive amount');
    }  
    
     dipositInput.value=''
    
})

//for withdrow
document.getElementById('withdrow-btn').addEventListener('click',function()
{
    
    const withdrowInput=document.getElementById('withdrow-input');
    const totalBalance=document.getElementById('Total-balance');
    const withdrow=document.getElementById('withdrow')
   if(parseFloat(totalBalance.innerText)>=parseFloat(withdrowInput.value) && parseFloat(withdrowInput.value)>0)
   {
     withdrow.innerText=parseFloat(withdrow.innerText)+parseFloat(withdrowInput.value)
     totalBalance.innerText=parseFloat(totalBalance.innerText)-parseFloat(withdrowInput.value)
   }
   else{
    alert('Sorry!!!! your amount is getter than your balance.... ')
   
   }
   
    withdrowInput.value=''
})

