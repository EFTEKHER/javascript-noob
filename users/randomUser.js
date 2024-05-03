const randomUsers=()=>{
    let url='https://randomuser.me/api/?results=50';

    fetch(url).then(res=>res.json()).then(data=>allUsers(data.results))
}


const allUsers=(users) => {
    // console.log(users.results);
    let userDiv= document.getElementById("usersDiv");
console.log(users);
    for(let user of users)
    {
        const div=document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
        <div class="card shadow " style="width: 26rem;">
  <img src="${user.picture.large}" class="card-img-top  h-25 w-30" alt="...">
  <div class="card-body">
    <p class="card-text fw-bolder ">Name: <span class="text-primary ">${user.name.title+" "+user.name.first+" "+user.name.last}</span>  </p>
    <p>Email: ${user.email}</p>
  </div>
</div>
        `
        userDiv.appendChild(div)
    }
}
randomUsers();