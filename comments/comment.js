const comment_Btn=document.getElementById('comment_btn');
console.log(comment_Btn);
comment_Btn.addEventListener('click',function(){
    const inputBox= document.getElementById('input');
    console.log(inputBox.value);
    const mainSection= document.getElementById('comments');
    const p=document.createElement('p');
    p.innerText=inputBox.value;
    mainSection.appendChild(p);

})