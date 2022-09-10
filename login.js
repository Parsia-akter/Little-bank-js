document.getElementById('sign-in').addEventListener('click',function(){
    const email= document.getElementById('input-email').value
    const password=document.getElementById('input-password').value
   if(email=='parsia@gmail.com' && password=='parsia')
   {
    console.log('faltu')
    window.location.href='banking.html'
   
   }
   else{
    alert('please enter correct password or email')
   }
    
    
})