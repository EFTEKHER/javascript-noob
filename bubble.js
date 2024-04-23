const text= document.getElementById("text");
const btn=document.getElementById("btn");
const message=document.getElementById("message");

btn.addEventListener("click", function(){
    const p=document.createElement('p');
    p.innerText=text.value ;
    message.appendChild(p); 

})