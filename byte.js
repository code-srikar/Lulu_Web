function forgot(){
    let em=prompt("Enter your Email id");
    while(em.length<=0){
        alert("Please enter correct email id");
        em=prompt("enter your email id");
    }
    alert("verification code is sent");
}