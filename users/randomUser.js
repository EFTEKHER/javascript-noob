const randomUsers=()=>{
    let url='https://randomuser.me/api/?results=5000';

    fetch(url).then(res=>res.json()).then(data=>allUsers(data))
}


const allUsers=(users) => {
    console.log(users.results);
}
randomUsers();