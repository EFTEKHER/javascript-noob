document.getElementById("login_btn").addEventListener("click", function(){
    //admin 
    const adminemail="admin@gmail.com";
    const adminpass="1234"

    // user
    const loginEmail = document.getElementById("email");
    const givenEmail=loginEmail.value;
    console.log(givenEmail);

    const password = document.getElementById("password");
    const givenpassword = password.value;
    console.log(givenpassword);

    //admin login
    if(givenEmail===adminemail && givenpassword===adminpass)
    {
        console.log("admin login successful");
        window.location.href="home.html";
    }
    else{
        alert("user access denied");
    }

})