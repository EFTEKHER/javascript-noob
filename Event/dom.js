



function orangeColor()
{
    let x=document.getElementsByClassName("header")[0];
    x.style.backgroundColor = 'orange';
}

const purplebg=document.getElementById("purple");
purplebg.onclick=purplecolor;
function purplecolor(){
    
document.body.style.backgroundColor='purple'
}


const bluebg=document.getElementById("blue");
bluebg.addEventListener("click",bluebgFun);

function bluebgFun(){
    document.body.style.backgroundColor='blue';
}

