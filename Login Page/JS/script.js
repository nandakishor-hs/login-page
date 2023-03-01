function validate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if(email=="user@gmail.com" && password=="password")
    {
        window.open("firstpage.html");
    }
    else{
        alert("login failed");
    }
}

var state= false;
function toggle(){
    if(state){
        document.getElementById(
            "password").
        setAttribute("type",
        "password");
        state = false;
    }
    else{
        document.getElementById(
            "password").
        setAttribute("type",
        "text");
        state = true;
    }
}



