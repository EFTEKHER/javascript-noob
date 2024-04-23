document.getElementById("login_btn").addEventListener("click", function(){
    const loginEmail = document.getElementById("email");
    const givenEmail=loginEmail.value;
    console.log(givenEmail);

    const password = document.getElementById("password");
    const givenpassword = password.value;
    console.log(givenpassword);

})