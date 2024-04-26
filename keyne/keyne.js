const quatation=()=>{
    fetch ("https://api.kanye.rest/").then( res=>res.json()).then(data=>quotes(data.quote));

}


const quotes=quoted=>{
    const id=document.getElementById('qt');

id.innerText=`${quoted}`
    console.log(quoted);
}

