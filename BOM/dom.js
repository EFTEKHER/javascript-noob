document.getElementById("bom").addEventListener("click",()=>{
    alert("Hello, Efte")
})

document.getElementById("bom2").addEventListener("click",()=>{
   let con= confirm("Arr you agree?");
   console.log(con);
   if(con===true)
    {
        console.log('we will travel');
    }
    else{
        console.log('we will not travel');
    }
})


document.getElementById("bom2").addEventListener("click",()=>{
    let con= confirm("Arr you agree?");
    console.log(con);
    if(con===true)
     {
         console.log('we will travel');
     }
     else{
         console.log('we will not travel');
     }
 })


 document.getElementById('bom3').addEventListener('click', ()=>{
    let window=prompt("please give your comments");
    if(window===null)
        {
            alert('prompt value must not be empty');
        }
   else{
    let x=document.getElementById('hello');

    let div=document.createElement('div');
    div.innerText=window;
    x.appendChild(div);
   }
 })


 window.history();
 window.history.back()
 window.history.forward();
 