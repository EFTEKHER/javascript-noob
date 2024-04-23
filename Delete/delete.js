const inputForm=document.getElementById('input_form');
const deleteBtn=document.getElementById('delete_btn');
inputForm.addEventListener('focus',function(){
    document.body.style.backgroundColor = 'orange';
})
inputForm.addEventListener('blur',function(){
    document.body.style.backgroundColor = 'green';
})

inputForm.addEventListener('keyup',function(){
    const inputText=inputForm.value ;

    if(inputText==="delete")
    {
        document.getElementById('delete_btn').removeAttribute("disabled")

    }
})
deleteBtn.addEventListener('click',function(){
   inputForm.value='';
        
    }
)