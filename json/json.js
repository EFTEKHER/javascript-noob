function users()
{
    fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json()).then(data=>User(data));

    

}



function User(users)
{
    users.map((user)=>{
        console.log(user.name);
        const div=document.getElementById('userdiv')
        const h1=document.createElement('h1');
        h1.style.backgroundColor='black';
        h1.style.color='white';
        h1.style.borderRadius='5px';
        h1.style.height='10vh';
        h1.style.textAlign='center';
        h1.style.margin='10px'
        h1.style.width='40vw';
        h1.style.padding='10px';
        h1.innerText=user.name;

        div.appendChild(h1);


        return user.name
    })

    // for (let user of users)
    // {
    //     console.log(user.name);
    // }
}


function Posts()
{
    fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(data=>post(data));

    

}



function post(posts)
{
    posts.map((post)=>{
     const postdiv=document.getElementById('postdiv');
     const div=document.createElement('div');
     const div1=document.createElement('div');
     
    //  div.style.backgroundColor='gray';
    //  div.style.color='white'
    //  const h2=document.createElement('h2');
    //  h2.style.fontSize='18px';
    //  h2.style.fontWeight='bold';
    //  const p=document.createElement('p');
    //  h2.innerText=`${post.title}`;
    //  p.innerText= `${post.body}`
    //  div.appendChild(h2);
     
    //  div.appendChild(p);
    //  postdiv.appendChild(div);  
    div.innerHTML=`
    <div class='flex flex-col rounded-xl h-[40vh] p-10 w-30 bg-blue-500 shadow-2xl shadow-blue-700 m-2'>
    <h2 class='text-2xl  font-bold font-mono' >${post.title}</h2>
    <p>${post.body}</p>
    </div>
    `
    postdiv.appendChild(div)
    })

    // for (let user of users)
    // {
    //     console.log(user.name);
    // }
}


fetch('https://jsonplaceholder.typicode.com//posts',{
    method:'POST',
    body: JSON.stringify({
        title:"Efte",
        body:"lorem ipsum dolor sit amet",
        userId:1,
    }),
    headers:{
        'content-type': 'application/json; charset=UTF=8'
    }
}).then().then()